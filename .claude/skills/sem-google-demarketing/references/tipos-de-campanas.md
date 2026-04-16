# Tipos de Campaña — Google Ads

## Mapa de decisión rápida

| Objetivo | Primera opción | Segunda opción | Evitar |
|---|---|---|---|
| Leads B2B con intent alto | Search | — | PMax como única campaña |
| Leads B2C con intent alto | Search | PMax como complemento | Display sin remarketing |
| Reconocimiento / branding | Demand Gen | Display | Search (caro para awareness) |
| Remarketing | Demand Gen | Display | — |
| Ventas ecommerce | PMax | Shopping | Search solo |
| Tráfico a contenido | Demand Gen | Display | — |
| Video / YouTube | Video (YouTube) | Demand Gen | — |

---

## Search

**Qué es:** Anuncios de texto que aparecen en resultados de búsqueda de Google cuando alguien busca activamente.

**Cuándo usar:**
- Capturar demanda existente (alguien ya está buscando lo que ofrece el cliente)
- Negocios B2B o servicios con tickets altos donde el intent importa
- Cuando el CPL objetivo requiere precisión de segmentación

**Cuándo NO es suficiente sola:**
- Cuando hay muy poco volumen de búsqueda en la categoría (industrias muy nicho)
- Cuando el objetivo es generar demanda, no capturarla

**Estructura interna:**
- 1 campaña por objetivo/servicio principal
- 1 ad group por intención de búsqueda
- Máx 15-20 keywords por ad group (mejor 8-12 bien elegidas)
- Mínimo 1 RSA por ad group, idealmente 2 para testing
- Assets/extensiones: sitelinks, callouts, structured snippets como mínimo

**Match types recomendados por etapa:**
- Cuenta nueva: exact + phrase para controlar gasto
- Cuenta con datos (30+ conv/mes): incorporar broad con smart bidding
- Nunca broad sin smart bidding activo

---

## Performance Max (PMax)

**Qué es:** Campaña automatizada que corre en todos los inventarios de Google (Search, Display, YouTube, Gmail, Maps, Discover) con un solo presupuesto.

**Cuándo usar:**
- Como complemento de Search, no como reemplazo
- Ecommerce con feed de Merchant Center → máximo potencial
- Cuando Search ya está optimizado y se quiere escalar
- Cuentas con historial de conversiones suficiente (50+ conv/mes idealmente)

**Cuándo NO usar:**
- Como única campaña en cuenta nueva → se convierte en caja negra sin datos
- Cuando el cliente no tiene assets creativos (imágenes, videos) de calidad
- Presupuestos menores a $15,000-20,000 MXN/mes → Search es más eficiente

**Configuración crítica de PMax:**
- **URL expansion:** desactivar o agregar URLs de exclusión si hay páginas que no deben recibir tráfico (blog, carreras, etc.)
- **Search themes:** agregar señales de keywords relevantes para orientar al algoritmo
- **Audience signals:** cargar customer match, remarketing, y audiencias similares
- **Asset groups:** mínimo 1 asset group bien construido; separar por línea de servicio si hay diferencias
- **Exclusiones de marca:** excluir keywords de marca propia para no canibalizar campañas de branded Search

**Assets mínimos requeridos para PMax:**
- 5+ imágenes horizontales (1200x628)
- 5+ imágenes cuadradas (1200x1200)
- 1+ imagen de logo
- 5+ headlines (30 chars)
- 5+ descriptions largas (90 chars)
- 1 video (si no se provee, Google genera uno automático de baja calidad → mejor proveerlo)

---

## Display

**Qué es:** Anuncios visuales (imagen/banner) en la Red de Display de Google (millones de sitios web, apps, YouTube).

**Cuándo usar:**
- Remarketing a visitantes del sitio web
- Awareness en audiencias específicas
- Clientes B2C con funnel largo donde el touchpoint visual suma

**Cuándo NO es la prioridad:**
- Como primera campaña en cuenta nueva (sin lista de remarketing)
- Para generar leads directos en B2B (tasa de conversión muy baja)
- Presupuestos ajustados donde cada peso debe rendir en conversiones

**Tipos de segmentación en Display:**
- Remarketing (más eficiente) — requiere lista activa de visitantes
- In-market audiences — usuarios con comportamiento de compra activo en la categoría
- Custom segments — basados en búsquedas o URLs visitadas
- Placements manuales — sitios específicos donde quieres aparecer

**Formatos requeridos (mínimo):**
- Responsive Display Ads: cargar múltiples imágenes y headlines, Google los combina
- Imágenes estáticas: 300x250, 728x90, 160x600, 320x50 (mobile)

---

## Demand Gen

**Qué es:** Evolución de Discovery Ads. Aparece en YouTube (in-feed, pre-roll corto), Gmail y Discover. Más visual, orientado a generar demanda e interés.

**Cuándo usar:**
- Remarketing visual de alta calidad
- Audiencias similares a clientes actuales
- Parte alta del funnel cuando hay assets visuales/video de calidad
- Como puente entre awareness (YouTube) y conversión (Search)

**Diferencia vs Display:**
- Demand Gen tiene acceso a YouTube in-feed y Shorts → más alcance
- Mejor para audiencias frías de calidad
- CTR y engagement típicamente más alto que Display estándar

**Assets recomendados:**
- Videos de 15-30 segundos para YouTube
- Imágenes de alta calidad (mismo spec que PMax)
- Headlines y descriptions orientados a generar curiosidad/interés, no solo conversión directa

---

## Video (YouTube)

**Qué es:** Campañas exclusivas para inventario de YouTube. Mayor control sobre formatos vs Demand Gen.

**Formatos principales:**
- **In-stream skippable:** se puede saltar a los 5 segundos. Cobra por vista (30+ seg) o clic. Ideal para storytelling.
- **In-stream non-skippable:** 15 segundos, no se puede saltar. Cobra por impresión (CPM). Solo branding.
- **In-feed:** aparece en resultados de búsqueda de YouTube y feed. Cobra por clic al video.
- **Bumper ads:** 6 segundos, no skippable. CPM. Solo para mensajes muy cortos de refuerzo.

**Cuándo usar YouTube dedicado:**
- Cliente con presupuesto para awareness (mínimo $20,000-30,000 MXN/mes solo para este objetivo)
- Producto/servicio que se demuestra mejor en video
- Estrategia de funnel completo donde YouTube es el top

**Regla de los primeros 5 segundos (in-stream skippable):**
Los primeros 5 segundos deben tener: marca visible + propuesta de valor o gancho. El usuario va a saltar — si no lo enganchas en 5 segundos, el resto del video no importa para ese usuario.

---

## Combinaciones recomendadas por tipo de cliente

**Cliente B2B servicios (lead gen):**
- Search (primary) + Remarketing Display/Demand Gen (secondary)
- PMax solo cuando Search está maduro y hay presupuesto para escalar

**Cliente B2C servicios locales:**
- Search con geo + PMax como complemento
- Demand Gen para remarketing visual

**Ecommerce:**
- PMax con feed de Merchant Center (primary)
- Search para branded y categorías de alto intent (secondary)
- Display remarketing para carrito abandonado

**Presupuesto limitado (< $15,000 MXN/mes en pauta):**
- Solo Search. Concentrar todo en capturar la demanda existente.
- No distribuir presupuesto en múltiples tipos de campaña — perderás eficiencia en todos.
