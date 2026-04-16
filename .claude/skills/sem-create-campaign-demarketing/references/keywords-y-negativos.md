# Keywords y Negativos — Fases 3 y 4

## Parte A — Keywords (Fase 3)

### Principio de estructura de ad groups

**Regla:** 1 ad group = 1 intención de búsqueda, NO 1 ad group = 1 keyword.

Ejemplos correctos:
- ✅ Ad group "Agencia Marketing Digital MTY" → contiene variaciones: `agencia marketing digital monterrey`, `agencia marketing digital mty`, `agencia de marketing mty`, etc.
- ✅ Ad group "Inbound Marketing B2B" → `inbound marketing b2b`, `agencia inbound marketing`, `consultor inbound b2b`
- ❌ Un ad group por cada keyword exacta (fragmenta mal el aprendizaje del algoritmo)

### Cantidad recomendada

- **Keywords por ad group:** 8-12 óptimo, máximo 15
- **Ad groups por campaña:** 3-5 típicamente
- **Total keywords por campaña:** 30-60

Más de 15 keywords/ad group diluye el matching y complica el aprendizaje. Si tienes 30 ideas de keywords, probablemente hay 2-3 ad groups implícitos ahí.

### Proceso de research

#### Paso 1 — Seed keywords
Pedir al operador/cliente las 5-10 "keywords madre" del servicio. Ejemplos para De Marketing:
- `agencia marketing digital monterrey`
- `consultoria marketing b2b`
- `agencia google ads monterrey`
- `inbound marketing`
- `crm automation`

#### Paso 2 — Reutilizar data existente
Si el cliente ya tiene historial:

**Desde SEO (GSC):**
```
Tool: gsc_search_performance
Params:
  site_url: [URL del cliente]
  date_range: last_90d
  dimensions: ["query"]
  row_limit: 100
```
Extraer queries con clicks + impressions > 0. Esas son keywords con intent REAL validado.

**Desde Ads previos (si existen):**
```
Tool: gads_search_terms
Params:
  customer_id: [cliente]
  date_range: last_90d
  filter: "all"
```
Extraer términos con conversions > 0. Esas son las que DEFINITIVAMENTE funcionan.

#### Paso 3 — Expandir con variaciones

Por cada seed, considerar:
- **Modificadores de ubicación:** `en monterrey`, `mty`, `nuevo leon`
- **Modificadores de tipo:** `agencia`, `consultor`, `consultoria`, `empresa`
- **Modificadores de segmento:** `b2b`, `empresas`, `pymes`, `startups`
- **Modificadores de intent:** `contratar`, `contratar agencia`, `cotizar`

#### Paso 4 — Asignar match types

**Distribución sugerida por ad group:**
- 60% Phrase (ej: `"agencia marketing digital monterrey"`)
- 30% Exact (ej: `[agencia marketing digital monterrey]`)
- 10% Broad — SOLO después de Etapa 2 con smart bidding

**Reglas de match type por etapa de madurez:**

| Etapa de cuenta | Broad permitido | Phrase | Exact |
|---|---|---|---|
| Etapa 1 (0-30 conv) | ❌ NO | ✅ | ✅ |
| Etapa 2 (30-80 conv) | ⚠️ Solo en keywords probadas | ✅ | ✅ |
| Etapa 3 (80+ conv) | ✅ Con smart bidding activo | ✅ | ✅ |

### Tabla de output de Fase 3

```
| Ad Group                        | Keyword                                    | Match  |
|---------------------------------|--------------------------------------------|--------|
| Agencia Marketing Digital MTY   | agencia marketing digital monterrey        | PHRASE |
| Agencia Marketing Digital MTY   | [agencia marketing digital monterrey]      | EXACT  |
| Agencia Marketing Digital MTY   | consultoria marketing digital mty          | PHRASE |
| Agencia Marketing Digital MTY   | [consultoria marketing digital monterrey]  | EXACT  |
| Agencia Marketing Digital MTY   | agencia marketing b2b                      | PHRASE |
| ...                             | ...                                        | ...    |
```

Validar con el operador antes de pasar a Fase 4.

---

## Parte B — Negativos (Fase 4)

Los negativos previenen tráfico irrelevante y son la palanca de optimización más potente. Se agregan en 3 niveles.

### Nivel 1 — Negativos Universales B2B (siempre)

Aplicar SIEMPRE a nivel **campaña** en cualquier cuenta B2B. Match type: BROAD (máxima cobertura).

```
# Empleo / capacitación
gratis
cursos
curso
tutorial
empleo
trabajo
vacante
vacantes
vacancia
pasantia
pasantías
practica
practicante
becario
freelance
freelancer

# Educación
udemy
coursera
platzi
tesis
universidad
maestria
maestría
doctorado
diplomado
certificacion

# DIY / autoservicio
como hacer
como crear
que es
ejemplos
plantilla
plantillas
template

# Tipo de contenido no deseado
pdf
descargar
download
mp3
video gratis

# Productos no relacionados
amazon
mercado libre
ebay
usado
segunda mano
```

Total: ~40 negativos universales.

### Nivel 2 — Negativos por vertical

Además de los universales, agregar según el vertical del cliente. Ver `data-verticales.md` para la lista completa por vertical.

**B2B Consulting:**
```
software
app
crm gratis
sistema
```

**Automotriz:**
```
usado
chocado
siniestrado
partes
refacciones
desarmadero
yonke
```

**Inmobiliaria:**
```
renta barata
habitacion
cuarto
pension
para compartir
roomie
```

**Salud:**
```
remedios caseros
consulta gratis
gobierno
imss
issste
donacion
```

**Educación:**
```
gratis
beca
publica
subsidiada
```

**SaaS:**
```
gratis
free
open source
github
torrent
crack
```

### Nivel 3 — Negativos custom del cliente

Preguntar al operador/cliente:

1. **Competidores** (si no queremos pujar por marca de competidor):
   - Listar nombres de marca con match EXACT

2. **Productos/servicios similares que NO ofrece:**
   - Ej: si el cliente solo hace "consultoría" pero no "capacitación", agregar `capacitacion`, `training`, `curso in company`

3. **Términos prohibidos por compliance:**
   - Sector financiero, salud, educación con regulaciones

4. **Zonas geográficas EXCLUIDAS** (raro pero posible):
   - Si solo atienden ciertas ciudades, no agregar como negativo sino manejar con geo targeting negativo

### Lista compartida (shared negative list)

**Recomendado:** crear una **Shared Negative Keyword List** llamada `[Cliente] - Universales B2B` con los Nivel 1 + Nivel 2 y aplicarla a TODAS las campañas del cliente. Así:
- Se mantiene en un solo lugar
- Cambios se propagan
- No hay que repetir la lista en cada campaña

**Cómo crearla:**
- Via worker: actualmente `gads_add_negative_keywords` soporta `negative_keyword_list_id` — se puede crear la lista primero (necesita tool nueva `gads_create_shared_set`, por agregar) y luego popularla
- Via UI: Tools > Shared Library > Negative keyword lists > + New list

### Nivel 4 — Negativos a nivel ad group

Solo para evitar **canibalización interna**. Ejemplo:
- Ad group "Agencia Marketing Digital MTY" → agregar negativo `inbound` (porque hay ad group dedicado a eso)
- Ad group "Inbound Marketing" → agregar negativo `google ads` (otro ad group lo cubre)

Regla: cada keyword activa debe servir a UN ad group específico. Si dos ad groups compiten por la misma búsqueda, agregar negativos cruzados.

### Negativos iterativos post-lanzamiento

En las primeras 2 semanas post-activación, correr diario:

```
gads_search_terms(
  customer_id = "...",
  date_range = "last_3d",
  filter = "no_conversions"
)
```

De los terms con 3+ clicks y 0 conversiones, agregar como negativos. Ver `sem-google-demarketing` → `references/optimizacion-checklists.md` para el proceso completo.
