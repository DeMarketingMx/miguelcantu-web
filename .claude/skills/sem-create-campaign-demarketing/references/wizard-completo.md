# Wizard Completo — Las 10 Fases End-to-End

Esta es la versión detallada del flujo. Seguir exactamente en este orden. No saltarse fases.

---

## FASE 0 — Pre-requisitos

**Objetivo:** asegurar que no vamos a perder tiempo en el wizard si falta algo fundamental.

**Acción:** Preguntar al operador estas 8 cosas y NO AVANZAR hasta que las 8 estén en verde.

```
1. ¿Cuál es el customer_id de Google Ads del cliente? (formato XXX-XXX-XXXX)
2. ¿Está activa la landing page? ¿URL exacta?
3. ¿Está configurado el evento de conversión principal en GA4? (ej: generate_lead)
4. ¿Está importada esa conversión en Google Ads como Primary?
5. ¿Cuál es el CPL objetivo en MXN?
6. ¿Cuánto es el presupuesto mensual aprobado?
7. ¿Qué servicio/producto específico vamos a promover?
8. ¿Hay saldo disponible en la cuenta Ads? (NO debe decir "account balance exhausted")
```

**Validaciones automatizables obligatorias (correr antes de preguntar lo demás):**

1. **Landing page viva:**
   ```
   HEAD [landing_page_url]
   ```
   Debe devolver 200 OK. Si devuelve 4xx/5xx → detener wizard, reportar al operador.

2. **Conversión existe en GA4 como Key Event:**
   ```
   ga4_list_key_events(property_id = [ga4_property_id])
   ```
   La conversión principal (`generate_lead`, `form_submit`, etc.) debe aparecer en la lista. Si no aparece → detener wizard, indicar al operador que debe marcarla como Key Event en GA4 Admin.

3. **Conversión registra eventos reales (no solo existe):**
   ```
   gads_campaign_performance(
     customer_id = [customer_id],
     date_range = "last_30d"
   )
   ```
   Si toda la cuenta tiene 0 conversiones en los últimos 30 días → **alerta crítica**. Probables causas: GTM no dispara, importación GA4→Ads rota, conversión mal mapeada. Detener wizard y pedir diagnóstico de tracking con `analitica-web-demarketing` antes de crear la campaña. (Excepción: cuenta 100% nueva sin campañas corriendo — documentar como override del operador.)

4. **Saldo de la cuenta:**
   No hay tool para esto. Preguntar al operador. Override permitido si es prueba/demo con intención de mantener PAUSED.

Si algo crítico falla: **detener el wizard** y pedir al operador que lo resuelva. No seguir con valores falsos. Los overrides se documentan explícitamente en el resumen de Fase 7 (preflight) para auditoría.

---

## FASE 1 — Brief del cliente

**Objetivo:** capturar el contexto que no está en los pre-requisitos.

**Preguntas obligatorias:**

```
1. ¿Cuál es el vertical del cliente? (B2B Consulting, SaaS, Manufactura, Automotriz, Inmobiliaria, Salud, Educación, Retail, Servicios Profesionales...)
2. ¿Cuál es el ticket promedio del cliente? (en MXN/mes o USD único)
3. ¿Cuál es el mercado geográfico?
   - Ciudad específica (MTY, CDMX, GDL...)
   - Nacional (México completo)
   - Internacional (con qué países)
4. ¿Cuáles son los 3 diferenciadores principales del cliente? (para callouts)
5. ¿Hay términos/palabras prohibidas por el cliente? (legales, marca, compliance)
6. ¿Hay competidores clave? (para excluir o para bid on brand)
7. ¿Tiene el cliente Google Business Profile verificado? (para extensiones de ubicación y call)
```

**Preguntas opcionales pero recomendadas:**

```
8. ¿Hay buyer personas documentados?
9. ¿Hay casos de éxito publicados que podamos linkear desde sitelinks?
10. ¿Hay ofertas/promociones time-limited?
```

Documentar las respuestas en un resumen que se pasará a las siguientes fases.

---

## FASE 2 — Estrategia de campaña

**Cargar:** `references/estrategia.md`

**Decisiones en esta fase:**
1. **Canal:** Search (default B2B). Solo considerar PMax si hay 50+ conv/mes histórico.
2. **Estructura:** ¿1 campaña o varias?
   - < $15k/mes → 1 campaña
   - $15k-50k/mes → 2-3 campañas
   - $50k+/mes → 3-5 campañas
3. **Bidding:**
   - Cuenta nueva (< 30 conv/mes) → `MAXIMIZE_CONVERSIONS` (sin target)
   - Cuenta con data (30+ conv/mes) → `TARGET_CPA` a 20-30% arriba del CPL objetivo
4. **Networks:**
   - Search Partners: **OFF** por default B2B
   - Display Network: **OFF** siempre en Search
5. **Budget:**
   - Daily = Mensual / 30.4
   - Distribución entre campañas según % de prioridad (60/25/15 típico)

**Output de esta fase:** documento con la estructura decidida, listo para las siguientes.

---

## FASE 3 — Keywords por ad group

**Cargar:** `references/keywords-y-negativos.md`

**Proceso:**
1. **Reutilizar data si existe:**
   - `gsc_search_performance` → ver qué buscan ya para encontrar al cliente (si hay SEO)
   - `gads_search_terms` → si hay historial de Ads, extraer términos que convirtieron
2. **Sugerir estructura de ad groups** (1 por intent, no por keyword):
   - Ad Group "Branded" (solo si el cliente tiene marca buscada)
   - Ad Group "Servicio core 1"
   - Ad Group "Servicio core 2"
   - Ad Group "Problema/síntoma" (high intent pregunta)
3. **Por cada ad group, proponer 8-12 keywords** con mix de match types:
   - 60% Phrase
   - 30% Exact
   - 10% Broad (solo si el algoritmo tiene data)

**Validación con el operador:**
- Mostrar tabla: ad_group | keyword | match_type | justificación
- Pedir aprobación o modificación antes de avanzar

---

## FASE 4 — Negativos

**Cargar:** `references/keywords-y-negativos.md` (sección de negativos)

**3 niveles:**
1. **Universales B2B** (siempre se aplican — ver lista canónica en la referencia):
   `gratis`, `curso`, `cursos`, `empleo`, `trabajo`, `vacante`, `tutorial`, `udemy`, `coursera`, etc.
2. **Por vertical** (ver `data-verticales.md`):
   - B2B Consulting excluye: `software`, `app`, `descargar`, `pdf`
   - Automotriz excluye: `usado`, `segunda mano`, `chocado`
   - Inmobiliaria excluye: `renta barata`, `habitacion compartida`
   - Salud excluye: `remedios caseros`, `gratis`, `donacion`
3. **Custom del cliente** (preguntar al operador):
   - Competidores (si no queremos bid on them)
   - Productos/servicios que NO ofrece el cliente pero son similares
   - Términos legales/compliance

**Output:** lista de negativos a aplicar a nivel campaña + ad group.

---

## FASE 5 — Copy (RSAs)

**Cargar:** `references/copy-rsa.md`

**CRÍTICO — Primero ejecutar el skill de brand:**

```
Skill("demarketing-brand-guidelines")  # o el del cliente
```

Extraer: voz, tono, vocabulario permitido/prohibido, CTAs de marca.

**Por cada ad group, generar:**

- **10 headlines** (máx 30 caracteres c/u):
  - 2 con keyword principal
  - 2 con propuesta de valor / diferenciador
  - 2 con social proof (años, clientes, premios)
  - 2 con CTA explícito
  - 2 con urgencia / especificidad (MTY, B2B, etc.)

- **4 descriptions** (máx 90 caracteres c/u):
  - 1 con features + CTA
  - 1 con social proof + CTA
  - 1 con diferenciador + CTA
  - 1 con garantía / prueba sin riesgo + CTA

- **path1 y path2** (máx 15 caracteres c/u):
  - path1: categoría (ej: `consultoria`, `marketing`, `servicio`)
  - path2: específico (ej: `b2b`, `mty`, `cotiza`)

**Validación:**
- Mostrar al operador
- Ofrecer regenerar con tono diferente
- Confirmar que NO tiene palabras prohibidas del cliente

---

## FASE 6 — Extensiones / Assets

**Cargar:** `references/extensiones.md`

**Crear por campaña:**

1. **Sitelinks (4-8 recomendado, máx 15):**
   - Cada uno: nombre corto (25 chars) + 2 descriptions (35 chars c/u) + URL
   - Para B2B: Servicios, Casos de Éxito, Blog, Contacto, Sobre Nosotros
   - Referencia URLs del sitio vía `sitio-web-demarketing` o el del cliente

2. **Callouts (6-10 recomendado, máx 20):**
   - 25 chars c/u, frases cortas
   - Diferenciadores, beneficios, prueba social
   - Ej: `+15 años experiencia`, `Diagnóstico gratis`, `Equipo certificado Google`

3. **Structured Snippets (1-3 recomendado):**
   - Header + valores (25 chars c/u)
   - Headers útiles B2B: `Services`, `Types`, `Brands`
   - Ej: Services → Inbound Marketing, Google Ads, CRM, Analítica

4. **Call Extension (si GBP tiene teléfono):**
   - Solo aparece en móvil
   - Schedule: L-V 9-19h (horario del cliente)

5. **Image Assets (opcional pero recomendado):**
   - 1200x1200 (cuadrada), 1200x628 (horizontal)
   - Si el cliente no tiene, generar con brand guidelines + AI (ver prompts en este skill)

6. **Location (si GBP verificado):**
   - Auto-detect con link a GBP
   - No hay setup manual necesario

---

## FASE 7 — Preflight QA

**Cargar:** `references/verificacion.md` (sección preflight)

**Checklist OBLIGATORIO — no avanzar hasta todo verde:**

- [ ] Naming sigue convención `[Cliente] - [Servicio] - [Canal]`
- [ ] Campaign status = PAUSED
- [ ] Bidding strategy coherente con madurez de cuenta
- [ ] Budget diario ≥ CPL esperado × 2 (para acumular data)
- [ ] Mínimo 3 ad groups (salvo excepción documentada)
- [ ] Cada ad group tiene 8-15 keywords
- [ ] Cada ad group tiene RSA con 10+ headlines y 4 descriptions
- [ ] Todos los headlines ≤ 30 chars
- [ ] Todas las descriptions ≤ 90 chars
- [ ] path1 y path2 ≤ 15 chars cada uno
- [ ] Negativos universales aplicados
- [ ] Negativos del vertical aplicados
- [ ] Geo targets coherentes con mercado del cliente
- [ ] Language coherente (1003 = Spanish típicamente)
- [ ] 4+ sitelinks, 6+ callouts, 1+ structured snippet
- [ ] Final URL de todos los RSAs apunta a página viva (HEAD 200)
- [ ] Conversión primary configurada a nivel cuenta
- [ ] Enhanced Conversions activado si aplica

Si algo falla, regresar a la fase correspondiente, corregir, volver a preflight.

---

## FASE 8 — Ejecución

**Cargar:** `references/ejecucion.md`

**Orden estricto de llamadas al MCP worker:**

```
1. gads_create_campaign_budget
   → retorna budget_resource_name

2. gads_create_campaign (status: PAUSED)
   → retorna campaign_id
   [SAFETY] Pasar contains_eu_political_advertising explícitamente

3. gads_create_campaign_criterion (batch: geo + language + negatives)
   → retorna 0 skipped ideal

Por cada ad group:
  4. gads_create_ad_group
     → retorna ad_group_id
  5. gads_create_keywords (batch)
     → retorna created_count
  6. gads_create_rsa
     → retorna resource_name del ad

7. [Por agregar al worker] gads_create_sitelinks (batch)
8. [Por agregar al worker] gads_create_callouts (batch)
9. [Por agregar al worker] gads_create_structured_snippets
```

**Rollback:** si algo falla en pasos 4-9, el operador debe ir a la UI y pausar/borrar lo creado hasta el punto de falla. No hay rollback automático (limitación de la API — solo es atomic por operation, no por wizard).

**Output:** lista de TODOS los IDs creados, guardada para la Fase 9.

---

## FASE 9 — Verificación en UI

**Cargar:** `references/verificacion.md` (sección UI check)

**Entregar al operador un checklist con TODOS los IDs creados y la URL directa:**

```
https://ads.google.com/aw/campaigns?ocid=[client-ocid]
```

El operador debe ir a la UI y verificar manualmente:

- [ ] Campaña aparece en la lista en status PAUSED (ícono ⏸)
- [ ] Budget correcto
- [ ] Bidding correcto
- [ ] Locations: solo las que definimos (Mexico si geo = 2484)
- [ ] Languages: solo las que definimos
- [ ] Negativos visibles en "Negative Keywords" del menú lateral
- [ ] Ad groups visibles con status ENABLED dentro de la campaña PAUSED
- [ ] Keywords visibles por ad group
- [ ] RSA visible con preview funcional
- [ ] Extensiones aparecen en "Assets" (sitelinks, callouts, structured snippets)
- [ ] Conversión "generate_lead" visible en Conversions > Primary

Si todo verde → pasar a Fase 10. Si algo rojo → regresar a la fase responsable y re-ejecutar.

---

## FASE 10 — Activación consciente

**REGLA DE ORO:** La activación es una decisión del consultor senior (Miguel), NO del operador. El operador deja todo listo en PAUSED; Miguel revisa y decide.

**Cuando Miguel dé luz verde:**

```
gads_update_campaign_status(
  customer_id = "...",
  campaign_id = "...",
  status = "ENABLED"
)
```

**Post-activación — plan de monitoreo primeras 48 horas:**
1. Revisar a las 6, 24 y 48 horas:
   - Impresiones (debe haber)
   - Clics (debe haber al menos 5 en 24h)
   - CPL (si hay 3+ conv y CPL > 2× target → pausar)
   - Search terms (descartar irrelevantes → negativos)
2. Si a las 48h todo estable → rotación normal semanal
3. Si CPL fuera de rango → ejecutar `sem-google-demarketing` flujo de diagnóstico

**Notificar al cliente:** enviar reporte breve con los IDs, screenshots de la campaña activa, y expectativas de performance para los primeros 15 días.
