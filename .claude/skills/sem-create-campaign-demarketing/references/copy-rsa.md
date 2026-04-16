# Copy de RSAs — Fase 5

## Paso 0 — CRÍTICO: cargar brand guidelines

**Antes de generar cualquier headline o description, ejecutar:**

```
Skill("demarketing-brand-guidelines")      # para De Marketing
# O el skill del cliente correspondiente:
Skill("m2energy-brand-guidelines")         # para M2Energy
Skill("profitops-brand-guidelines")        # para Profit Ops
Skill("miguel-cantu-brand-guidelines")     # para Miguel Cantú
```

**De ese skill, extraer:**
- Voz de marca (tono, registro, formalidad)
- Vocabulario permitido / prohibido
- CTAs de marca estándar
- Posicionamiento (ej: "premium B2B consultancy, like McKinsey")
- Diferenciadores documentados

Sin esto, el copy va a sonar genérico. **Es el paso que hace la diferencia entre copy de stock y copy de consultor.**

---

## Estructura obligatoria de RSA

Cada RSA (Responsive Search Ad) debe tener:

| Elemento | Cantidad | Max chars | Recomendación |
|---|---|---|---|
| Headlines | 10-15 | 30 c/u | **10 mínimo para que el algoritmo tenga variedad** |
| Descriptions | 4 | 90 c/u | **4 exactos, no 2 ni 3** |
| Path1 | 1 | 15 | Categoría (ej: `consultoria`) |
| Path2 | 1 | 15 | Específico (ej: `b2b-mty`) |
| Final URL | 1 | — | Landing page del servicio específico |

---

## Distribución obligatoria de 10 headlines

De los 10 headlines, respetar este balance:

| Categoría | # Headlines | Ejemplo (B2B Consulting) |
|---|---|---|
| **Keyword principal** (match de la búsqueda) | 2 | `Agencia Marketing B2B MTY` |
| **Propuesta de valor / diferenciador** | 2 | `Marketing con IA para B2B` |
| **Social proof** (años, clientes, resultados) | 2 | `+15 Años Experiencia B2B` |
| **CTA explícito** (acción) | 2 | `Agenda Tu Diagnóstico` |
| **Urgencia / especificidad** | 2 | `Consultoría MTY Senior` |

**Esto garantiza:** cobertura de intent (keyword match), razón para hacer clic (diferenciador + social proof), y acción (CTA).

### Ejemplos reales por categoría

**Keyword principal (versiones cortas de la query):**
- `Agencia Marketing B2B MTY` (25)
- `Consultoría Marketing Digital` (29)
- `Agencia Google Ads México` (24)

**Propuesta de valor:**
- `Marketing con IA para B2B` (25)
- `Inbound + Google Ads + CRM` (26)
- `Estrategia + Ejecución 360°` (26)

**Social proof:**
- `+15 Años Experiencia B2B` (24)
- `+50 Clientes B2B Activos` (24)
- `Equipo Certificado Google` (25)

**CTA:**
- `Agenda Tu Diagnóstico` (21)
- `Diagnóstico Gratis MTY` (22)
- `Cotiza en 24 Horas` (18)

**Urgencia / especificidad:**
- `Consultoría MTY Senior` (22)
- `Solo Para Empresas B2B` (22)
- `Clientes $10M-$500M Año` (23)

---

## Descriptions — estructura obligatoria

4 descriptions, cada una con estructura diferente:

### Description 1 — Features + CTA
```
Consultoría en Inbound Marketing, Google Ads, CRM y Analítica para empresas B2B. Agenda.
```

### Description 2 — Social proof + CTA
```
Más de 15 años ayudando a empresas medianas B2B a escalar con marketing digital. Contacta.
```

### Description 3 — Diferenciador + CTA
```
Diagnóstico gratuito. Estrategia personalizada. Resultados medibles desde el día 1.
```

### Description 4 — Garantía / sin riesgo + CTA
```
Equipo senior certificado Google. Sin contratos forzosos. Agenda tu sesión gratuita.
```

---

## Reglas inviolables de copy

### Reglas de escritura

- **Capitalización:** Title Case en headlines (cada palabra importante con mayúscula). En descriptions, Sentence case (solo primera palabra).
- **Sin emoji** — Google a veces los rechaza o los convierte
- **Sin caracteres especiales raros** (™, ®, ©, etc.) — Google los rechaza a veces
- **Acentos sí** — Google Ads soporta UTF-8 bien
- **Sin MAYÚSCULAS GRITADAS** — Google rechaza all-caps de más de una palabra

### Reglas de contenido

- **Nunca prometer lo imposible:** no decir "100% garantizado" si no lo es
- **Nunca decir "clic aquí"** como headline — es penalizado
- **Nunca usar "barato"** si el cliente es premium — rompe posicionamiento
- **Nunca reusar exactamente el mismo texto** en headline y description
- **Evitar superlativos vacíos:** "el mejor", "el más grande" sin prueba

### Reglas de compliance

- Si el cliente es del sector **financiero**: evitar garantías de rendimiento, promesas de dinero
- Si es **salud**: evitar afirmaciones médicas absolutas, diagnósticos
- Si es **educación**: no prometer empleo, salario específico
- Si es **inmobiliario**: no afirmar "plusvalía garantizada"

---

## Path1 y Path2

**Display URL visual** en el anuncio. No es el URL real (ese es Final URL), es la versión "bonita" que ve el usuario.

### Patrones recomendados

Formato: `dominio.com/path1/path2`

**Para De Marketing:**
- `/consultoria/b2b-mty` (21 chars usados de 15+15 disponibles)
- `/google-ads/mty`
- `/marketing/b2b`
- `/inbound/b2b`

**Reglas:**
- Usar guiones (-), no espacios ni underscore
- Minúsculas
- Sin acentos (aunque path1 los permite, mejor evitar)
- Debe reflejar de QUÉ es el anuncio, no ser genérico

**Ejemplos malos:**
- ❌ `/servicios/info` (genérico)
- ❌ `/home` (no agrega valor)
- ❌ `/Consultoria/B2B_MTY` (mayúsculas, underscore)

---

## Final URL

**Reglas:**
- **HTTPS obligatorio**
- **Debe estar viva** (HEAD 200) — verificar antes de crear
- **Debe coincidir con el intent del ad group**
  - Ad group "Google Ads Service" → URL `/servicios/google-ads`, NO la home `/`
  - Ad group "Inbound Marketing" → URL `/servicios/inbound-marketing`
- **Debe tener tracking GA4/GTM activo** (validar con skill `analitica-web-demarketing`)
- **Debe tener el formulario GHL o equivalente funcionando** (validar con skill `sitio-web-demarketing`)

### URL parameters recomendados

Para atribución limpia, todas las LPs deben aceptar UTM params auto-generados por Google Ads:

```
https://demarketing.mx/servicios/google-ads?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&gclid={gclid}
```

Pero **NO agregarlos manualmente al Final URL** — Google Ads los agrega via auto-tagging (si está activado en la cuenta, que es el default).

---

## Generación automatizada con Claude

Cuando el wizard esté en Fase 5, usar este prompt interno:

```
Genera 10 headlines y 4 descriptions para un RSA de Google Ads con:

CONTEXTO:
- Cliente: [nombre]
- Vertical: [vertical]
- Servicio: [servicio específico]
- Diferenciadores: [lista del brief]
- Keyword principal del ad group: [keyword]
- Brand voice: [extraído del skill de brand guidelines]
- Vocabulario prohibido: [lista]

REGLAS:
- 10 headlines en Title Case, máx 30 chars
- Distribución: 2 keyword, 2 propuesta de valor, 2 social proof, 2 CTA, 2 urgencia
- 4 descriptions en Sentence case, máx 90 chars
- Distribución: 1 features+CTA, 1 social proof+CTA, 1 diferenciador+CTA, 1 garantía+CTA
- Sin emoji, sin caracteres especiales, sin all-caps

OUTPUT:
Tabla con columnas: tipo | texto | chars
```

---

## QA de copy antes de enviar a API

Antes de crear el RSA via `gads_create_rsa`:

1. **Contar caracteres** de cada headline y description
2. **Validar que NO exceden** los límites
3. **Buscar palabras prohibidas** del cliente
4. **Buscar duplicados exactos** entre headlines
5. **Confirmar que hay diversidad** (no 5 headlines que digan lo mismo con sinónimos)
6. **Confirmar que cada description termina en punto** (estándar de calidad)
7. **Confirmar que las 4 descriptions son distintas** en ángulo

La tool `gads_create_rsa` del worker ya valida char limits antes de llamar a la API — pero el wizard debe validar ANTES para dar feedback inmediato al operador sin gastar un round-trip al worker.
