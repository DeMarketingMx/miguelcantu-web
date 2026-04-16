# Extensiones / Assets — Fase 6

Google Ads renombró "extensions" a "assets" en 2022. El concepto es el mismo: información adicional que acompaña al anuncio y aumenta CTR, relevancia y Quality Score.

**Las extensiones pueden aumentar el CTR hasta 20% y mejorar Quality Score en ~1 punto.** No son opcionales.

---

## ⚠️ Estado actual en el worker

Al momento de escribir este skill, el MCP worker **aún NO tiene tools específicas para assets**. Las extensiones se pueden crear vía:
- **UI de Google Ads manualmente** (fallback actual)
- **Tools nuevas a agregar al worker** (ver al final de este documento)

El wizard debe generar la INFORMACIÓN de las extensiones (texto, URLs, imágenes) aunque la creación técnica tenga que hacerse parcialmente en UI por ahora. Cuando se agreguen las tools, el flujo será 100% automatizado.

---

## Tipos de assets y cuándo usarlos

| Asset Type | B2B | B2C | Local Service | Ecommerce | Cantidad recomendada |
|---|---|---|---|---|---|
| **Sitelink** | ⭐ Obligatorio | ⭐ Obligatorio | ⭐ Obligatorio | ⭐ Obligatorio | 4-8 |
| **Callout** | ⭐ Obligatorio | ⭐ Obligatorio | ⭐ Obligatorio | ⭐ Obligatorio | 6-10 |
| **Structured Snippet** | ✅ Recomendado | ✅ Recomendado | ✅ Recomendado | ⭐ Obligatorio | 1-3 |
| **Call** | ✅ Si hay teléfono | ✅ Obligatorio | ⭐ Obligatorio | Opcional | 1 |
| **Location** | ✅ Si tiene GBP | Opcional | ⭐ Obligatorio | Opcional | Auto (GBP) |
| **Image** | ✅ Recomendado | ⭐ Obligatorio | ✅ Recomendado | ⭐ Obligatorio | 4-10 |
| **Price** | Opcional | Opcional | Si precios fijos | ⭐ Obligatorio | 3-8 |
| **Promotion** | Si aplica | Si aplica | Si aplica | ⭐ Obligatorio | 1-3 activas |
| **Lead Form** | ✅ B2B lead gen | Opcional | ✅ Recomendado | No aplica | 1 |
| **App** | Solo si app | Solo si app | Solo si app | Solo si app | 1 |

---

## 1. Sitelinks

**Qué son:** hasta 15 links adicionales que aparecen debajo del anuncio llevando a páginas específicas.

**Formato por sitelink:**
- Nombre/título corto: **máx 25 caracteres**
- Description 1 (opcional, muy recomendada): **máx 35 caracteres**
- Description 2 (opcional): **máx 35 caracteres**
- Final URL: específica para ese sitelink

**Regla:** Sin descriptions → aparece menos veces. Con 2 descriptions → aparece en formato expandido (más real estate).

### Sitelinks recomendados para B2B Consulting (De Marketing)

| # | Título (25) | Desc 1 (35) | Desc 2 (35) | URL |
|---|---|---|---|---|
| 1 | Nuestros Servicios | Inbound, SEO, Ads, CRM, Analítica | 6 pilares de marketing digital | /servicios |
| 2 | Casos de Éxito | Empresas B2B que escalamos | Resultados medibles y auditables | /casos |
| 3 | Diagnóstico Gratis | 30 min con consultor senior | Agenda en línea, sin costo | /diagnostico |
| 4 | Sobre De Marketing | +15 años ayudando a B2B | Equipo certificado Google | /nosotros |
| 5 | Blog y Recursos | Guías, plantillas y análisis | Contenido gratuito para B2B | /blog |
| 6 | Contacto MTY | Oficinas en Monterrey | Respondemos en menos de 24h | /contacto |

### Sitelinks recomendados para Local Service

| # | Título | Ejemplo |
|---|---|---|
| 1 | Cotización | `/cotizar` |
| 2 | Nuestros Trabajos | `/galeria` |
| 3 | Zonas de Servicio | `/cobertura` |
| 4 | Contacto WhatsApp | `/whatsapp` |

### Sitelinks recomendados para SaaS

| # | Título | Ejemplo |
|---|---|---|
| 1 | Demo en Vivo | `/demo` |
| 2 | Precios | `/pricing` |
| 3 | Integraciones | `/integrations` |
| 4 | Casos de Uso | `/use-cases` |
| 5 | Empieza Gratis | `/signup` |

### Validar URLs de sitelinks

**CRÍTICO:** todas las URLs deben devolver HTTP 200 antes de crear el sitelink. URLs muertos = anuncio rechazado por Google.

Consultar con `sitio-web-demarketing` skill para ver qué páginas existen en el sitio del cliente.

---

## 2. Callouts

**Qué son:** texto corto no-clickable que destaca beneficios/features. Aparecen debajo del anuncio junto a los sitelinks.

**Formato:**
- Texto: **máx 25 caracteres**
- Cantidad: 6-10 (Google muestra 2-6 según espacio)

**Reglas:**
- Frases cortas y punchy
- Sin puntuación innecesaria (no poner "." al final)
- Capitalización: primera letra de cada palabra relevante (Title Case)
- No duplicar con headlines del RSA

### Callouts recomendados para De Marketing (B2B Consulting)

```
+15 Años en B2B
+50 Clientes Activos
Consultores Senior
Certificados Google
Diagnóstico Gratis
Resultados Auditables
Sin Contratos Forzosos
Equipo en MTY y CDMX
IA Aplicada al Marketing
ROI Medible Mes a Mes
```

### Categorías de callouts efectivos

1. **Credibilidad:** `+15 Años Experiencia`, `+500 Clientes`, `Certificados Google`
2. **Diferenciador:** `Marketing con IA`, `Exclusivo B2B`, `Equipo Senior`
3. **Beneficio:** `Diagnóstico Gratis`, `Sin Contratos`, `ROI Medible`
4. **Urgencia / facilidad:** `Cotiza en 24h`, `Agenda en Línea`, `Respuesta Inmediata`
5. **Prueba:** `Casos Documentados`, `Resultados Medibles`, `Transparencia Total`

---

## 3. Structured Snippets

**Qué son:** lista de valores bajo un header predefinido. Dan contexto sobre qué ofrece el negocio.

**Formato:**
- Header: uno de los ~15 pre-definidos por Google
- Values: mínimo 3, máximo 10, **máx 25 caracteres c/u**

### Headers disponibles

| Header | Cuándo usar |
|---|---|
| **Services** | Cliente ofrece varios servicios |
| **Types** | Cliente ofrece varios tipos/categorías |
| **Brands** | Cliente vende varias marcas |
| **Models** | Cliente vende varios modelos |
| **Featured hotels** | Hotelería |
| **Courses** | Educación |
| **Degree programs** | Universidades |
| **Insurance coverage** | Seguros |
| **Neighborhoods** | Inmobiliaria |
| **Destinations** | Viajes |
| **Amenities** | Hotelería, inmobiliaria |
| **Shows** | Entretenimiento |
| **Styles** | Moda, diseño |

### Structured Snippets recomendados para De Marketing

```
Header: Services
Values:
- Inbound Marketing con IA
- Google Ads
- Meta Ads
- CRM Automation
- SEO
- Analítica Web
- Contenido con IA
- Consultoría Estratégica
```

---

## 4. Call Extension

**Qué son:** número de teléfono clickable que aparece en móvil.

**Formato:**
- Phone number (formato internacional: `+52 81 XXXX XXXX`)
- Call schedule (horario cuando el cliente contesta)
- Call conversion (opcional: track llamadas como conversiones)

**Reglas B2B:**
- Solo mostrar en horario laboral del cliente (ej: L-V 9-19h CST)
- Fuera de horario: Google oculta la extensión automáticamente si defines el schedule

**Cuándo agregarla:**
- Cliente tiene recepcionista o call center
- Ticket alto donde llamadas convierten mejor que formularios
- Servicios urgentes (plomería, cerrajería, médicos)

**Cuándo NO:**
- Si el cliente no tiene quién conteste → mala experiencia
- Si la conversión se da mejor en formulario/email

### Call conversion tracking

Activar esto para medir llamadas como conversiones:
- Google genera números dinámicos (call forwarding)
- Mide duración de llamada
- Se puede marcar como conversion si > 60 segundos (o el umbral que configures)
- Requiere: billing address US/CA/UK/Australia (limitación actual)

**En México:** call tracking de Google Ads no funciona nativamente. Alternativa: usar CallRail o similar y linkear a Google Ads via offline conversions.

---

## 5. Location Assets

**Qué son:** dirección física del negocio desde Google Business Profile.

**Setup:**
- Se auto-vinculan si el Google Ads account está linked con el GBP del cliente
- No hay creación manual — solo asegurar que el linkage existe (Tools > Linked Accounts > Google Business Profile)

**Cuándo son útiles:**
- Negocio local (restaurante, clínica, tienda física)
- B2B con oficina física visitable (despachos, agencias físicas)
- Nunca oculta para mejor transparencia

**Recomendado:** siempre activarlas si hay GBP verificado. Cero costo, mejora calidad.

---

## 6. Image Assets

**Qué son:** imágenes que aparecen junto al anuncio (en móvil principalmente).

**Specs:**
- Mínimo: **1200x628** (horizontal), **1200x1200** (cuadrada)
- Recomendado: subir AMBOS formatos
- Formato: JPG o PNG
- Tamaño máx: 5120 KB
- Safe zone: texto importante al centro (Google crop automático)

**Cantidad recomendada:**
- Mínimo 4 imágenes (entre horizontal y cuadrada)
- Ideal 8-10 (Google testea cuál performa mejor)

### Qué debe mostrar la imagen

**Para B2B Consulting:**
- Equipo en entorno profesional (reuniones, presentaciones)
- Resultados visualizados (dashboards, gráficos)
- Oficinas/cultura corporativa (sobrias, no startup)
- Logos de clientes famosos (con permiso)
- **NO:** stock photos genéricos, imágenes con mucho texto

**Para B2C Local:**
- Producto/servicio en uso real
- Resultados antes/después
- Equipo humano del negocio
- Cliente feliz con el servicio

### Generación con AI para De Marketing

Si el cliente no tiene banco de imágenes propio, usar Google AI Studio (Imagen 3 / Nano Banana) con los prompts del skill `demarketing-brand-guidelines`. Extraer paleta, tono visual y aplicar a prompts.

**Ejemplo de prompt alineado a De Marketing:**

```
A high-end editorial photograph of a Mexican business consultant
in a modern office in Monterrey, reviewing marketing performance
dashboards on a large monitor. Soft natural light, warm morning tones,
shallow depth of field. Minimalist aesthetic, color palette:
deep navy (#16273f), warm white, subtle orange accent.
Professional B2B consulting firm feel. 16:9 aspect ratio.
```

---

## 7. Price Assets

**Qué son:** tabla de precios clickable para servicios/productos.

**Formato:**
- Header del precio: máx 25 chars
- Descripción: máx 25 chars
- Precio: número + moneda
- URL

**Cuándo usarlas:**
- Cliente con precios fijos públicos (SaaS, servicios estándar)
- Ecommerce con rangos de precios

**Cuándo NO:**
- Consultoría B2B (precios custom)
- Servicios "desde $X" con mucha variabilidad

---

## 8. Promotion Assets

**Qué son:** ofertas con descuento/promo visibles en el anuncio.

**Formato:**
- Ocasión: Black Friday, Cyber Monday, Hot Sale, etc. (preset de Google)
- Tipo de descuento: % off, $ off, "hasta"
- Valor
- Item: qué aplica
- URL: link a la oferta

**Cuándo usarlas:**
- Cliente tiene oferta time-limited real
- Nunca para "oferta permanente" (engaño, rechazado)

---

## 9. Lead Form Asset (B2B clave)

**Qué son:** formulario embebido en el anuncio. Usuario llena sin salir de Google.

**Formato:**
- Headline del form (máx 30 chars)
- Description (máx 200 chars)
- Call-to-action button (preset: "Contact us", "Get quote", "Sign up")
- Campos: name, email, phone, company — configurables
- Privacy policy URL
- Thank you message + URL

**Pros:**
- Super alta conversión (todo dentro de Google, sin salir)
- Funciona excelente en móvil
- Los leads llegan via webhook o Google Ads UI

**Cons:**
- Leads menos cualificados (fricción baja = hay basura)
- Hay que integrar el webhook con GHL/CRM del cliente

**Cuándo usar:**
- B2B lead gen con buen equipo comercial (puede cualificar rápido)
- Cuando la LP del cliente tiene baja conversión (el form bypassa la LP)

**Cuándo NO:**
- Si el equipo comercial está saturado (los leads se enfrían)
- Cliente premium donde el filtro de la LP es bueno (no queremos saltarlo)

---

## Niveles de asset (account / campaign / ad group)

Los assets se pueden configurar a 3 niveles:

| Nivel | Cuándo usar |
|---|---|
| **Account** | Assets que aplican a TODAS las campañas (ej: callouts generales como `+15 años`) |
| **Campaign** | Assets específicos de una campaña (ej: sitelinks con URLs de ese servicio) |
| **Ad group** | Assets muy específicos (raro, solo cuando un ad group tiene propuesta muy distinta) |

**Recomendación:** empezar con assets a nivel campaña. Si ves que varios de ellos se repiten entre campañas, subirlos a nivel account.

---

## Integración con worker — tools pendientes

Cuando se agreguen al MCP worker, estas serán las tools:

```
gads_create_sitelink_asset         (input: nombre, desc1, desc2, url)
gads_create_callout_asset          (input: texto)
gads_create_structured_snippet     (input: header, values[])
gads_create_call_asset             (input: phone, schedule)
gads_create_image_asset            (input: image_url o base64, format)
gads_create_price_asset            (input: items[])
gads_create_promotion_asset        (input: occasion, discount, dates)
gads_create_lead_form_asset        (input: headline, desc, fields[], webhook)
gads_link_asset_to_campaign        (input: asset_id, campaign_id, level)
gads_link_asset_to_account         (input: asset_id)
```

**Effort estimado:** ~6-8 hrs dev para todas las tools + tests.

**Prioridad recomendada:** sitelinks + callouts + structured_snippets primero (90% del valor). Las demás en fase 2.

---

## Fallback manual (hasta que estén las tools)

Mientras no están las tools, el wizard:
1. Genera todo el texto y las URLs de los assets
2. Entrega un "handoff document" al operador con:
   - Lista exacta de sitelinks con título, desc1, desc2, URL
   - Lista de callouts
   - Structured snippet header + values
   - Specs de imágenes
3. El operador los crea manualmente en la UI: **Campaign > Assets > + New Asset**
4. La parte de la campaña, ad groups, keywords y RSA sí se crea automatizada vía worker

**Tiempo extra por este fallback:** ~10-15 minutos de UI work por campaña. Hasta tener las tools, es el tradeoff.
