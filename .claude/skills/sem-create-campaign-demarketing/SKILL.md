---
name: sem-create-campaign-demarketing
description: "Wizard guiado para crear campañas de Google Ads de principio a fin, diseñado para que el equipo de De Marketing (incluyendo quienes no sean expertos en SEM) pueda lanzar campañas con calidad de consultor senior. Activar cuando el usuario diga 'crear campaña de Google Ads', 'nueva campaña para [cliente]', 'lanzar campaña', 'setup campaña Search', o cualquier variación de crear/lanzar pauta en Google Ads. Este skill guía el brief, define estrategia, investiga keywords, escribe copy con voz de marca, diseña extensiones, ejecuta vía MCP worker y entrega checklist de verificación. Para análisis/optimización de campañas ya existentes, usar sem-google-demarketing. Para planeación mensual de creativos/ads, usar planeacion-ads-mensual."
---

# Wizard de Creación de Campañas Google Ads — De Marketing

Este skill convierte el proceso de crear una campaña de Google Ads en un flujo guiado paso a paso, de modo que cualquier miembro del equipo de De Marketing (incluso sin experiencia profunda en SEM) pueda lanzar campañas con calidad de consultor experto.

## Para quién es este skill

- **Operadores de campañas** (Mauricio, Juan Pablo) que ejecutan la pauta pero no necesitan decidir estrategia desde cero
- **Consultor senior** (Miguel) para acelerar el onboarding de clientes nuevos
- **Clientes directos** a través del equipo — todos reciben la misma calidad estandarizada

## Principios inviolables

1. **Siempre empezar en PAUSED.** Nunca se crea una campaña ENABLED en el primer paso. La campaña se verifica en la UI antes de ir live.
2. **El CPL objetivo del cliente es el ancla.** Sin CPL objetivo documentado, detener el wizard y pedirlo.
3. **La voz de marca viene del skill de brand guidelines.** Para copy, siempre consultar `demarketing-brand-guidelines` (o el del cliente correspondiente: `m2energy-brand-guidelines`, `profitops-brand-guidelines`, etc.).
4. **No inventar datos del cliente.** Si falta customer_id, landing page URL, conversión configurada — detenerse y pedirlo. Marcar `[Por confirmar]`.
5. **Todo cambio queda loggeado.** El MCP worker registra cada mutación en `env.LOGS` KV namespace — no ocultar operaciones.
6. **La campaña debe ser auditable.** Naming estandarizado: `[Cliente] - [Producto/Servicio] - [Canal]` (ej: `DeMkt - Core Consultoría - Search`).

---

## Pre-requisitos antes de empezar el wizard

Antes de iniciar, el operador debe tener:

- [ ] **Customer ID de Google Ads** del cliente (formato `XXX-XXX-XXXX`)
- [ ] **Landing page activa y con tracking GA4/GTM verificado** — el wizard valida con `HEAD` request (debe devolver 200 OK)
- [ ] **Conversión principal existe en GA4** — el wizard valida activamente con `ga4_list_key_events(property_id)` (la conversión debe estar marcada como Key Event, no solo existir como evento)
- [ ] **Conversión disparó recientemente** — el wizard valida con `gads_campaign_performance(customer_id, date_range="last_30d")` sobre cualquier campaña existente. Si 0 conversiones en 30 días en toda la cuenta, el tracking probablemente está roto → detener wizard hasta arreglar
- [ ] **Conversión importada a Google Ads como Primary conversion action** (confirmación del operador, o inspeccionar `gads_list_conversion_actions` si la tool existe)
- [ ] **CPL objetivo** del cliente documentado (en MXN)
- [ ] **Presupuesto mensual aprobado** para la campaña (cualquier monto que decida el consultor con el cliente — el wizard no impone mínimos arbitrarios)
- [ ] **Servicio/producto específico** que se va a promover (no "marketing en general" — especificidad)
- [ ] **Saldo disponible en la cuenta Google Ads** — OR confirmación explícita de que se corre en modo PAUSED sin intención de activar inmediatamente (caso: pruebas, demos, setup previo a aprobar billing)
- [ ] **Acceso al skill del cliente** si existe (`demarketing-web`, `m2energy-brand-guidelines`, etc.)

Si falta customer_id, landing page válida, conversión principal, CPL objetivo, servicio específico, o el skill del cliente: **detener el wizard**. Los demás ítems pueden seguir con override explícito del operador (ej: sin saldo pero es prueba, o tracking reciente 0 con justificación).

---

## Índice de referencias

Carga solo el archivo relevante para la fase en que estás.

| Fase del wizard | Archivo |
|---|---|
| Flujo completo end-to-end de las 10 fases | `references/wizard-completo.md` |
| Estrategia: CPL, budget, bidding, estructura | `references/estrategia.md` |
| Investigación de keywords + match types + estructura de ad groups | `references/keywords-y-negativos.md` |
| Escribir RSAs (headlines, descriptions, paths) con brand voice | `references/copy-rsa.md` |
| Diseñar extensiones (sitelinks, callouts, snippets, call, image) | `references/extensiones.md` |
| Ejecución — orden de llamadas al worker y rollback | `references/ejecucion.md` |
| Preflight QA + verificación en UI + decisión de activación | `references/verificacion.md` |
| Geo targets México (IDs + estrategia geográfica) | `references/data-geo-mexico.md` |
| Plantillas de estructura + copy por vertical de cliente | `references/data-verticales.md` |
| Cómo integrar con otros skills de De Marketing | `references/integracion-skills.md` |
| Tools pendientes de agregar al MCP worker | `references/worker-roadmap.md` |

---

## Flujo principal del wizard (resumen)

El wizard tiene 10 fases. Lee `references/wizard-completo.md` para la versión detallada.

```
┌─ FASE 0: Pre-requisitos (checklist, no API calls)
│
├─ FASE 1: Brief del cliente
│  → Pregunta: cliente, servicio, ticket, CPL objetivo, budget, LP URL
│
├─ FASE 2: Estrategia de campaña
│  → Decidir: # campañas, bidding, canal (Search vs PMax), partners
│  → Referencia: estrategia.md
│
├─ FASE 3: Research de keywords + ad groups
│  → Sugerir keywords por ad group + match types
│  → Validar con GSC/GA4 data si está disponible
│  → Referencia: keywords-y-negativos.md
│
├─ FASE 4: Negativos
│  → Universales B2B + específicos del vertical + custom
│  → Referencia: keywords-y-negativos.md
│
├─ FASE 5: Copy (RSAs)
│  → Generar 10+ headlines y 4 descriptions por ad group
│  → Aplicar brand voice del skill demarketing-brand-guidelines
│  → Referencia: copy-rsa.md
│
├─ FASE 6: Extensiones / Assets
│  → Sitelinks, callouts, structured snippets, call, image
│  → Referencia: extensiones.md
│
├─ FASE 7: Preflight QA
│  → Checklist completo: naming, char limits, estructura, SOP
│  → Referencia: verificacion.md
│
├─ FASE 8: Ejecución (API calls)
│  → Llamadas al MCP worker en orden, siempre PAUSED
│  → Referencia: ejecucion.md
│
├─ FASE 9: Verificación en UI de Google Ads
│  → Checklist manual en https://ads.google.com
│  → Referencia: verificacion.md
│
└─ FASE 10: Activación consciente
   → Solo cuando fase 9 esté verde
   → Pausar 48h después si CPL dispara
```

---

## Tools que usa este skill

Del MCP worker `google-mcp-worker` (DeMarketingMx), el wizard orquesta:

**Fase 3 (research — reads):**
- `gsc_search_performance` — identifica queries con intent del cliente
- `ga4_landing_pages` — valida LP que va a recibir tráfico
- `gads_search_terms` — si ya hay campañas corriendo, extrae términos de búsqueda ya probados

**Fase 8 (ejecución — writes):**
- `gads_create_campaign_budget`
- `gads_create_campaign` (default PAUSED)
- `gads_create_campaign_criterion` (geo + idioma + negativos)
- `gads_create_ad_group`
- `gads_create_keywords`
- `gads_create_rsa`
- **[Por agregar al worker]** `gads_create_sitelinks`, `gads_create_callouts`, `gads_create_structured_snippets`

**Fase 10 (activación — write):**
- `gads_update_campaign_status` — pasa de PAUSED a ENABLED solo con confirmación explícita

---

## Integración con otros skills

Este wizard **consulta** otros skills durante el flujo. No los reemplaza.

| Skill | Cuándo llamarlo |
|---|---|
| `demarketing-brand-guidelines` | Fase 5 (copy) y 6 (extensiones) — voz, tono, colores |
| Skill del cliente correspondiente (ej: `m2energy-brand-guidelines`, `profitops-brand-guidelines`) | Fase 5 y 6 cuando la campaña es para cliente distinto a De Marketing |
| `sitio-web-demarketing` o `sitio-web-[cliente]` | Fase 6 (sitelinks) — qué URLs de la LP están vivas |
| `sem-google-demarketing` | Fase 2 (estrategia) — validar estructura, bidding, CPL contra SOP |
| `analitica-web-demarketing` | Pre-requisitos — validar que `generate_lead` está configurado |
| `planeacion-ads-mensual` | Antes del wizard — si ya hay plan mensual, extraer de ahí los parámetros |

Ver `references/integracion-skills.md` para el detalle de cada punto de integración.

---

## Reglas de calidad (no negociables)

Aplicadas automáticamente por el wizard en Fase 7 (preflight):

- Mínimo **3 ad groups** en campaña nueva (salvo cuenta con < $10k/mes donde 1 es suficiente)
- Mínimo **10 headlines y 4 descriptions** por RSA
- Al menos **2 headlines con la keyword principal** del ad group
- Al menos **1 headline con CTA explícito** ("Agenda", "Cotiza", "Contacta", "Descarga")
- Mínimo **4 sitelinks + 6 callouts + 1 structured snippet** (B2B) / **4 sitelinks + 8 callouts** (B2C)
- Máximo **15 keywords por ad group** (óptimo 8-12)
- Negativos mínimos: lista universal B2B + específicos del vertical (ver `keywords-y-negativos.md`)
- Budget diario: **sin mínimo rígido**. El consultor/cliente decide el monto según su contexto. Si el budget es agresivamente bajo (<$150 MXN/día, floor técnico de Google Ads, o <CPL objetivo × 2), **alertar con contexto honesto** sobre el impacto esperado (aprendizaje más lento, menor volumen) pero **no bloquear**. El juicio es del operador.
- Campaña siempre **PAUSED** al crearse
- Conversión principal debe estar importada de GA4 antes de crear (o el algoritmo no tendrá a qué optimizar)

---

## ¿Cuándo NO usar este skill?

- **Optimización de campañas existentes** → usar `sem-google-demarketing`
- **Planeación mensual de creativos** → usar `planeacion-ads-mensual`
- **Meta Ads / Facebook / Instagram** → usar `sem-meta-demarketing`
- **Solo generar copy sin ejecutar** → usar `planeacion-ads-mensual`
- **Auditoría o diagnóstico** → usar `sem-google-demarketing`

Este skill es específicamente para **crear una campaña Search nueva de principio a fin**.
