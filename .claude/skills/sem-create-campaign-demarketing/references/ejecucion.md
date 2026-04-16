# Ejecución — Fase 8

Esta fase convierte toda la información recolectada en las Fases 1-7 en operaciones reales contra el Google Ads API del cliente.

---

## Pre-condiciones

Antes de empezar a ejecutar:
- ✅ Fase 7 (Preflight QA) pasó con todo en verde
- ✅ Operador confirmó que está OK ejecutar (última oportunidad de cancelar)
- ✅ Todos los datos están estructurados en memoria (o en un YAML/JSON guardado)

---

## Orden estricto de ejecución

Las operaciones tienen dependencias. Ejecutar en ESTE orden exacto:

### 1. Campaign Budget

**Tool:** `gads_create_campaign_budget`

```json
{
  "customer_id": "XXX-XXX-XXXX",
  "name": "[Cliente] - [Servicio] - Daily",
  "daily_amount": 600,
  "delivery_method": "STANDARD"
}
```

**Guardar:** `budget_resource_name` del output. Lo necesitas en el paso 2.

---

### 2. Campaign

**Tool:** `gads_create_campaign`

```json
{
  "customer_id": "XXX-XXX-XXXX",
  "name": "[Cliente] - [Servicio] - Search",
  "budget_resource_name": "customers/.../campaignBudgets/...",
  "channel_type": "SEARCH",
  "status": "PAUSED",
  "bidding_strategy": "MAXIMIZE_CONVERSIONS",
  "target_search_partners": false,
  "target_display_network": false,
  "contains_eu_political_advertising": "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING"
}
```

**SIEMPRE status: "PAUSED"**. Sin excepciones en este paso.

**Guardar:** `campaign_id` del output.

---

### 3. Campaign Criteria (geo + language + negatives)

**Tool:** `gads_create_campaign_criterion`

Un solo batch con todo:

```json
{
  "customer_id": "XXX-XXX-XXXX",
  "campaign_id": "...",
  "criteria": [
    { "type": "LOCATION", "geo_target_id": "2484" },
    { "type": "LANGUAGE", "language_id": "1003" },
    { "type": "NEGATIVE_KEYWORD", "text": "gratis", "match_type": "BROAD" },
    { "type": "NEGATIVE_KEYWORD", "text": "curso", "match_type": "BROAD" }
  ]
}
```

Si `skipped_count > 0`: revisar qué se saltó.

---

### 4. Por cada Ad Group (loop):

#### 4a. Ad Group
**Tool:** `gads_create_ad_group`

```json
{
  "customer_id": "XXX-XXX-XXXX",
  "campaign_id": "...",
  "name": "[Nombre descriptivo del intent]",
  "status": "ENABLED",
  "type": "SEARCH_STANDARD"
}
```

#### 4b. Keywords
**Tool:** `gads_create_keywords`

```json
{
  "customer_id": "XXX-XXX-XXXX",
  "ad_group_id": "...",
  "default_match_type": "PHRASE",
  "status": "ENABLED",
  "keywords": [
    "agencia marketing digital monterrey",
    { "text": "agencia marketing b2b mty", "match_type": "EXACT" }
  ]
}
```

#### 4c. RSA
**Tool:** `gads_create_rsa`

```json
{
  "customer_id": "XXX-XXX-XXXX",
  "ad_group_id": "...",
  "final_url": "https://demarketing.mx/consultoria",
  "path1": "consultoria",
  "path2": "b2b-mty",
  "status": "ENABLED",
  "headlines": ["Agencia Marketing B2B MTY", ...],
  "descriptions": ["Consultoría en Inbound Marketing...", ...]
}
```

---

### 5. Extensiones / Assets (por ahora manual en UI)

**Estado actual:** el worker no tiene tools de assets todavía.

**Workaround:**
- El wizard GENERA toda la info de los assets (sitelinks, callouts, snippets)
- El wizard entrega al operador un "handoff document"
- El operador crea manualmente en la UI de Google Ads: **Campaigns > [campaign] > Assets > +**

---

## Manejo de errores

### Tipos de errores comunes

| Error | Causa | Acción |
|---|---|---|
| `KV PUT failed: Invalid expiration_ttl` | Bug de Cloudflare KV (YA ARREGLADO en v2 del worker) | Re-deploy si aparece |
| `Google Ads API error (404)` URL gone | API version sunset | Actualizar `GOOGLE_ADS_API_VERSION` en wrangler.toml |
| `REQUIRED field not present: contains_eu_political_advertising` | Campaign create sin el campo DSA | Pasar el param explícito |
| `Customer not found` | customer_id erróneo o sin acceso del MCC | Verificar linkage MCC → customer |
| `Missing login-customer-id` | MCC ID no en KV | Revisar `env.CREDENTIALS.google_ads_mcc_id` |
| `invalid_grant` en auth | OAuth token expirado, refresh falló | Re-ejecutar flujo de consent en worker `/auth/start` |
| `Policy violation: trademark` | Headline/description usa marca registrada ajena | Regenerar copy sin la marca |
| `Invalid URL: not https` | Final URL sin HTTPS | Cambiar a https |
| `URL not reachable` | LP devuelve 4xx/5xx | Validar con HEAD request antes, arreglar LP |

### Cuando un step de 1-4 falla

**No hay rollback automático.** La API es atomic por operation pero no por wizard completo.

**Protocolo de rollback manual:**
1. Si falló en paso 1 (budget): no se creó nada. Reintentar cuando se arregle.
2. Si falló en paso 2 (campaign): hay un budget huérfano. Reintentar o borrar manualmente.
3. Si falló en paso 3 (criteria): la campaña existe PAUSED. Arreglar el issue y reintentar.
4. Si falló en paso 4 (ad group/keywords/rsa): operador decide seguir, reintentar, o borrar y empezar.

### Mutation log para auditoría

Cada WRITE en el worker se guarda en `env.LOGS` KV namespace automáticamente.

```
GET https://google-mcp-worker.miguel-28a.workers.dev/admin/mutations
```

Con header `X-API-Key: [WORKER_API_KEY]`.

---

## Output completo de Fase 8

```yaml
execution_summary:
  timestamp: "2026-04-16T14:30:00Z"
  customer_id: "366-587-1570"
  budget:
    id: "15515297506"
    resource_name: "customers/3665871570/campaignBudgets/15515297506"
    daily_amount: 600
  campaign:
    id: "23766656092"
    name: "DeMkt - Core Consultoría - Search"
    status: "PAUSED"
  criteria:
    created: 8
    skipped: 0
  ad_groups:
    - id: "200753484132"
      name: "Agencia Marketing Digital MTY"
      keywords_created: 12
      rsa_id: "805618201857"
  assets_pending_ui:
    sitelinks: 6
    callouts: 10
    structured_snippets: 1
    image_assets: 4
  ui_url: "https://ads.google.com/aw/campaigns?ocid=..."
```

Este documento es la entrada para **Fase 9** (verificación en UI).
