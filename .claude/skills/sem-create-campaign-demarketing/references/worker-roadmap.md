# Worker Roadmap — Tools faltantes en `google-mcp-worker`

Este documento describe las tools que el skill `sem-create-campaign-demarketing` necesita pero que el MCP worker en `https://google-mcp-worker.miguel-28a.workers.dev` aún no expone. Cada sección incluye spec completo listo para implementar.

**Estado actual del wizard sin estas tools:** cumple ~70% end-to-end automatizado. Con estas 7 tools implementadas, sube a ~95%.

**Effort total estimado:** 12-16 horas dev + tests.

---

## Priorización

| Prioridad | Tool | Effort | Impacto en wizard |
|---|---|---|---|
| **P0** | `gads_create_sitelink_asset` + link | 2h | Desbloquea Fase 6 (sitelinks = 30% de CTR lift) |
| **P0** | `gads_create_callout_asset` + link | 1.5h | Desbloquea Fase 6 (callouts) |
| **P0** | `gads_create_structured_snippet` + link | 1.5h | Desbloquea Fase 6 (snippets) |
| **P1** | `gads_create_image_asset` + link | 2.5h | Desbloquea image assets (mobile CTR) |
| **P1** | `gads_add_ad_group_negative_keywords` | 1h | Desbloquea Nivel 4 de Fase 4 (anti-canibalización) |
| **P2** | `gads_cleanup_failed_wizard` | 3h | Rollback si Fase 8 falla a medio camino |
| **P2** | `gads_create_shared_set` + populate | 2h | Permite Shared Negative List reutilizable |
| **P3** | `gads_query_geo_targets` | 1.5h | Permite validar IDs de geo antes de usar |
| **P3** | `gads_list_conversion_actions` | 1h | Valida que la conversión existe como Primary en Ads |

---

## P0 — Asset tools

### `gads_create_sitelink_asset`

**Endpoint:** `POST /tools/gads_create_sitelink_asset`

**Spec:**
```typescript
{
  customer_id: string;          // "XXX-XXX-XXXX"
  name: string;                 // max 25 chars (validar antes)
  description1?: string;        // max 35 chars
  description2?: string;        // max 35 chars
  final_url: string;            // https://...
  final_mobile_url?: string;
  call_tracked?: boolean;       // default false
}
```

**Output:**
```json
{
  "asset_id": "123456789",
  "resource_name": "customers/XXX/assets/123456789"
}
```

**Validación client-side:**
- `name` ≤ 25 chars
- `description1/2` ≤ 35 chars c/u
- `final_url` debe ser HTTPS
- Opcional: HEAD request al URL para validar 200 OK antes de crear

**API Google Ads:** mutate en `AssetService` con `SitelinkAsset`.

---

### `gads_create_callout_asset`

**Spec:**
```typescript
{
  customer_id: string;
  text: string;                 // max 25 chars
}
```

**Output:**
```json
{
  "asset_id": "...",
  "resource_name": "customers/XXX/assets/..."
}
```

**Validación client-side:** `text` ≤ 25 chars, sin puntuación final.

**API:** `AssetService.mutate` con `CalloutAsset`.

---

### `gads_create_structured_snippet`

**Spec:**
```typescript
{
  customer_id: string;
  header: string;               // uno de los 15 headers válidos de Google
  values: string[];             // min 3, max 10, cada uno max 25 chars
}
```

**Headers válidos** (hardcoded en validación del tool):
`"Amenities"`, `"Brands"`, `"Courses"`, `"Degree programs"`, `"Destinations"`, `"Featured hotels"`, `"Insurance coverage"`, `"Models"`, `"Neighborhoods"`, `"Service catalog"`, `"Services"`, `"Shows"`, `"Styles"`, `"Types"`

**Output:**
```json
{
  "asset_id": "...",
  "resource_name": "customers/XXX/assets/..."
}
```

**API:** `AssetService.mutate` con `StructuredSnippetAsset`.

---

### Tool común: `gads_link_asset_to_campaign`

Todas las asset tools de arriba crean el asset pero **no lo vinculan**. Necesitan un segundo paso:

**Spec:**
```typescript
{
  customer_id: string;
  asset_resource_name: string;  // output de la tool anterior
  campaign_id: string;
  field_type: "SITELINK" | "CALLOUT" | "STRUCTURED_SNIPPET" | "IMAGE";
}
```

Alternativamente, puede integrarse directamente en cada `create_*_asset` con un param opcional `campaign_id` — si se pasa, auto-linkea.

**API:** `CampaignAssetService.mutate` con `CampaignAsset { asset, campaign, field_type }`.

---

## P1 — Image assets

### `gads_create_image_asset`

**Spec:**
```typescript
{
  customer_id: string;
  name: string;                 // nombre interno para identificar
  image_base64?: string;        // imagen inline (preferido para archivos chicos)
  image_url?: string;           // alternativa: URL pública
  format?: "LANDSCAPE" | "SQUARE" | "LANDSCAPE_LOGO" | "SQUARE_LOGO";
  // Dimensiones objetivo (Google valida en API):
  // LANDSCAPE: 1200x628 recomendado (min 600x314)
  // SQUARE: 1200x1200 recomendado (min 300x300)
}
```

**Validación client-side:**
- Imagen ≤ 5120 KB
- Formato PNG o JPG (Google Ads no acepta WebP en Image Assets a mayo 2026)
- Dimensiones mínimas según format
- Si `image_url`: HEAD request + validar Content-Type

**Output:**
```json
{
  "asset_id": "...",
  "resource_name": "customers/XXX/assets/..."
}
```

**API:** `AssetService.mutate` con `ImageAsset { data: bytes }`.

**Nota técnica:** base64 payload se puede inflar el request body. Para imágenes ≥2 MB, preferir `image_url` con hosting público (Cloudflare R2, por ejemplo).

---

### `gads_add_ad_group_negative_keywords`

Actual `gads_add_negative_keywords` solo soporta campaign_id o negative_keyword_list_id. Este nuevo tool cubre el gap de Nivel 4 (cross-negatives entre ad groups).

**Spec:**
```typescript
{
  customer_id: string;
  ad_group_id: string;          // <-- key addition
  keywords: string[];
  match_type?: "EXACT" | "PHRASE" | "BROAD";   // default PHRASE
}
```

**Output:**
```json
{
  "ad_group_id": "...",
  "created_count": N,
  "skipped_count": N
}
```

**API:** `AdGroupCriterionService.mutate` con `AdGroupCriterion { negative: true, keyword: { text, match_type } }`.

---

## P2 — Operational safety

### `gads_cleanup_failed_wizard`

Rollback cuando Fase 8 falla a medio camino. Borra en orden inverso.

**Spec:**
```typescript
{
  customer_id: string;
  // Todos opcionales — borra solo lo que se haya creado antes del fallo:
  rsa_ids?: string[];           // borra RSAs primero
  ad_group_ids?: string[];      // luego ad groups (con sus keywords)
  campaign_id?: string;         // luego la campaña
  budget_id?: string;           // finalmente el budget
  dry_run?: boolean;            // default false
}
```

**Output:**
```json
{
  "deleted": {
    "rsas": [...],
    "ad_groups": [...],
    "campaigns": [...],
    "budgets": [...]
  },
  "errors": [...]
}
```

**Implementación:**
- Dry run retorna qué se borraría sin hacer nada
- Sin dry run: borra en orden inverso (RSA → keywords via ad group removal → ad_group → campaign → budget)
- Cada deletion se loggea en `env.LOGS` con `wizard_cleanup_*` prefix
- Errores no bloquean las siguientes eliminaciones

**API:** múltiples `*Service.mutate` con operation `remove`.

---

### `gads_create_shared_set`

Para crear Shared Negative Keyword Lists reutilizables.

**Spec:**
```typescript
{
  customer_id: string;
  name: string;                 // ej: "DeMkt - Universales B2B"
  type: "NEGATIVE_KEYWORDS";    // futuro: también PLACEMENT_EXCLUSION
}
```

**Output:**
```json
{
  "shared_set_id": "...",
  "resource_name": "customers/XXX/sharedSets/..."
}
```

**Companion tool:** `gads_attach_shared_set_to_campaign`
```typescript
{
  customer_id: string;
  campaign_id: string;
  shared_set_id: string;
}
```

**API:** `SharedSetService.mutate` + `CampaignSharedSetService.mutate`.

---

## P3 — Validation utilities

### `gads_query_geo_targets`

Permite al wizard validar que los IDs de geo existen antes de usarlos en criteria.

**Spec:**
```typescript
{
  customer_id: string;
  country_code: string;         // "MX"
  target_types?: ("Country" | "Region" | "Metro" | "City" | "Postal Code")[];
  name_filter?: string;         // opcional: filtrar por substring
  limit?: number;               // default 100
}
```

**Output:**
```json
{
  "results": [
    { "id": "21153", "name": "Nuevo León", "target_type": "Region", "canonical_name": "Nuevo León, Mexico" },
    ...
  ]
}
```

**API:** GAQL
```sql
SELECT
  geo_target_constant.id,
  geo_target_constant.name,
  geo_target_constant.target_type,
  geo_target_constant.canonical_name
FROM geo_target_constant
WHERE geo_target_constant.country_code = @country_code
  AND geo_target_constant.target_type IN (@types)
LIMIT @limit
```

---

### `gads_list_conversion_actions`

Para validar en Fase 0 que la conversión existe como Primary en la cuenta Ads.

**Spec:**
```typescript
{
  customer_id: string;
  status_filter?: "ENABLED" | "REMOVED" | "ALL";  // default ENABLED
}
```

**Output:**
```json
{
  "results": [
    {
      "id": "...",
      "name": "generate_lead",
      "type": "GOOGLE_ANALYTICS_4_CUSTOM",
      "category": "SUBMIT_LEAD_FORM",
      "primary_for_goal": true,
      "include_in_conversions_metric": true,
      "last_conversion_date": "2026-04-10"  // si la API lo expone
    }
  ]
}
```

**API:** GAQL sobre `conversion_action`.

---

## Cómo implementar esto

El repo del worker vive (suponemos) en `DeMarketingMx/google-mcp-worker` o similar. El flujo típico:

1. Cada tool se define en `src/tools/*.ts` con Zod schema
2. Se registra en `src/index.ts` (o el entry point que maneje tool routing)
3. La llamada concreta a Google Ads API vía `google-ads-api` SDK o fetch directo a `googleads.googleapis.com/v20`
4. Cada mutación se loggea en `env.LOGS` KV con estructura `{ timestamp, tool, customer_id, params, result }`
5. Tests: mínimo un test de validación client-side + un test happy path contra cuenta sandbox

**Una vez implementadas:**
- Actualizar `SKILL.md` sección "Tools que usa este skill" quitando los `[Por agregar al worker]`
- Actualizar `references/extensiones.md` quitando la sección "Estado actual en el worker"
- Actualizar `references/ejecucion.md` agregando los pasos 5-8 ahora automatizados
- Actualizar `references/keywords-y-negativos.md` quitando el workaround de Shared List

---

## Integración con el wizard actual

Cuando las tools P0 estén listas, la Fase 6 cambia de "generar handoff doc" a llamadas automatizadas. El flujo pasa de:

```
Fase 6 actual (manual):
1. Genera JSON con specs de sitelinks/callouts/snippets
2. Escribe handoff doc
3. Operador abre UI, crea cada asset manualmente (~15 min)
```

A:

```
Fase 6 automatizado:
1. Por cada sitelink: gads_create_sitelink_asset → gads_link_asset_to_campaign
2. Por cada callout: gads_create_callout_asset → gads_link_asset_to_campaign
3. Structured snippet: gads_create_structured_snippet → gads_link_asset_to_campaign
4. Por cada imagen: gads_create_image_asset (con base64 o URL pública) → gads_link
5. Output: todos los asset_ids + confirmación visual
```

Tiempo total: 15 min manuales → ~10 segundos automatizados.
