# Integración con Otros Skills

Este skill no vive aislado. Durante el flujo de las 10 fases, debe **consultar** otros skills de De Marketing para:

1. Respetar la voz y estilo de marca (brand guidelines)
2. No duplicar conocimiento (deja que cada skill sea la fuente de verdad de su dominio)
3. Validar pre-requisitos técnicos

---

## Mapa de integraciones por fase

| Fase | Skill a consultar | Propósito |
|---|---|---|
| Fase 0 (pre-req) | `analitica-web-demarketing` | Validar que `generate_lead` está configurado en GA4 |
| Fase 1 (brief) | Skill del cliente si existe | Extraer diferenciadores, posicionamiento, oferta |
| Fase 2 (estrategia) | `sem-google-demarketing` | Validar CPL, bidding, estructura contra SOP general |
| Fase 5 (copy) | **`demarketing-brand-guidelines`** o del cliente | **Voz, tono, vocabulario, CTAs, paleta si hay image assets** |
| Fase 6 (extensiones) | `sitio-web-demarketing` o `sitio-web-[cliente]` | Verificar qué URLs existen para sitelinks |
| Fase 6 (image assets) | `demarketing-brand-guidelines` + `visual-content-engine` | Colores, tipografía, generar imágenes |
| Fase 8 (ejecución) | — (sin skills externos, solo worker tools) | — |
| Fase 10 (monitoreo) | `sem-google-demarketing` | Flujos de diagnóstico y optimización |

---

## `demarketing-brand-guidelines` (crítico para Fase 5 y 6)

**Qué provee:**
- Paleta: Navy `#16273f`, Navy Dark `#2e4769`, Amber `#cc7a00`, Warm White `#faf7f2`
- Tipografía: Inter para UI, Playfair Display para títulos
- Tono: "premium B2B consultancy like McKinsey"
- Estilo: "clean, minimal, executive, high contrast, generous white space"
- CTAs estándar de marca
- Palabras prohibidas (all-caps, "barato", emojis)

**Cuándo invocarlo:**
```
# Fase 5 — generación de copy:
Skill("demarketing-brand-guidelines")

# Fase 6 — image assets:
Skill("demarketing-brand-guidelines")
# Leer paleta y tono visual para prompts de Imagen 3
```

---

## Skills de clientes específicos

Skills de brand para clientes de De Marketing:
- `m2energy-brand-guidelines`
- `profitops-brand-guidelines`
- `miguel-cantu-brand-guidelines`

**Cuándo usarlos:** campaña para cliente X → usar `[cliente]-brand-guidelines` en lugar de `demarketing-brand-guidelines`.

**Patrón:**
```
SI campaña es para cliente X:
  Skill("[cliente]-brand-guidelines")
DE LO CONTRARIO:
  Skill("demarketing-brand-guidelines")
```

Si el cliente no tiene skill de brand propio:
1. Pedir al operador brief manual (colores, voz, CTAs, prohibidos)
2. Ofrecer crear skill con `skill-creator` para reutilizar en futuras campañas

---

## `sitio-web-demarketing` (o `sitio-web-[cliente]`)

**Qué provee:**
- Stack del sitio (WordPress + Elementor + GHL)
- Mapa de URLs
- Estado de formularios
- Puntos de conversión activos

**Cuándo invocarlo:**
- **Fase 0** → validar LP viva
- **Fase 6** → al crear sitelinks, confirmar URLs existen
- **Fase 6** → validar que form de LP llega a GHL

---

## `sem-google-demarketing` (estrategia y optimización)

Skill hermano. Este skill (`sem-create-campaign-demarketing`) es específicamente para **crear**. El otro cubre estrategia, análisis, optimización, auditoría.

**Cuándo invocarlo desde el wizard:**
- **Fase 2** → consultar reglas de bidding por etapa, estructura, escalado
- **Fase 10** → usar flujos de diagnóstico post-activación

**No duplicar contenido:** este skill solo referencia, no copia.

---

## `analitica-web-demarketing`

**Qué provee:**
- Setup GA4, GTM, tracking
- Configuración de Key Events
- Server-side GTM via Stape
- Validación de data quality

**Cuándo invocarlo:**
- **Fase 0** → validar `generate_lead` existe en GA4 e importado a Ads
- **Post-activación** → diagnosticar si las conversiones no llegan a Ads

---

## `planeacion-ads-mensual`

**Qué es:** skill de planeación mensual de creativos para ads.

**Relación:**
- `planeacion-ads-mensual` → planeación previa (qué anuncios necesitamos este mes)
- `sem-create-campaign-demarketing` → ejecución (crear esa campaña)

**Flujo combinado:**
1. 1er día del mes: `planeacion-ads-mensual` decide qué campañas + genera copys base
2. Cuando toca lanzar: `sem-create-campaign-demarketing` toma esos outputs como inputs

Fase 1 del wizard debe preguntar: "¿Existe plan mensual ya generado?" Si sí → reusar.

---

## `visual-content-engine` (para image assets)

**Qué provee:** generación de piezas visuales con HTML/CSS/JS.

**Cuándo usarlo:**
- **Fase 6** → cliente sin banco de imágenes → crear image assets con brand-aligned format

**Alternativa:** Google AI Studio (Imagen 3 / Nano Banana) con prompts que usan la paleta del brand.

---

## `content-creation-demarketing`

**Qué provee:** plantillas de contenido (blog, videos, redes).

**Cuándo usarlo:**
- **Fase 6 (sitelinks)** → validar qué artículos del blog existen si se van a linkear
- Post-activación → generar contenido nuevo que alimente los ad groups

---

## Reglas de integración

### Regla 1 — Cada skill es fuente de verdad de SU dominio
No duplicar. Brand colors vive en brand-guidelines, no aquí.

### Regla 2 — Invocar skill, no copiar
Usar `Skill("nombre")`. No copiar/pegar contenido en las referencias de este skill.

### Regla 3 — Fallback si skill no existe
Si el cliente no tiene `[cliente]-brand-guidelines`:
1. Brief manual del operador
2. Sugerir crear skill con `skill-creator`
3. Continuar con info recibida

### Regla 4 — Validaciones cruzadas
Antes de ejecutar (Fase 8):
- ¿LP del ad está en mapa del sitio? (`sitio-web-demarketing`)
- ¿Brand voice del copy matchea skill de brand? (`demarketing-brand-guidelines`)
- ¿Conversión configurada? (`analitica-web-demarketing`)

Si alguna falla → regresar a fase correspondiente.

---

## Cuándo OTROS skills deben llamar a este

Invocado desde:
- Flujo de onboarding de cliente nuevo (si existe skill master)
- `planeacion-ads-mensual` cuando se decide lanzar nueva campaña
- Directamente por operador

No debería ser invocado desde skills de análisis/reporteo (usan `sem-google-demarketing`).

---

## Checklist de integración al empezar el wizard

Fase 0 modificada con checks de skills:

- [ ] ¿Existe skill de brand del cliente? Si no → brief manual
- [ ] ¿Existe skill de sitio web del cliente? Si no → pedir mapa de URLs
- [ ] ¿Existe plan mensual vigente en `planeacion-ads-mensual`? Si sí → usarlo como input
- [ ] Validar GA4/GTM con `analitica-web-demarketing`
- [ ] Si hay image assets y cliente sin banco → preparar `visual-content-engine` en Fase 6

Con validaciones al principio, el wizard fluye sin pausas técnicas después.
