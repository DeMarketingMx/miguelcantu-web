# Ad Copy — RSA, Ángulos y Quality Score

## Estructura del RSA (Responsive Search Ad)

### Límites técnicos
| Elemento | Límite | Mínimo recomendado |
|---|---|---|
| Headlines | 30 caracteres c/u | 10-15 headlines por RSA |
| Descriptions | 90 caracteres c/u | 4 descriptions por RSA |
| Display path | 15 caracteres c/u (2 campos) | Siempre llenar |

### Cómo Google combina los elementos
Google prueba combinaciones automáticamente y aprende cuáles tienen mejor CTR y conversión. Por eso importa:
- **Cantidad:** más headlines = más combinaciones posibles = mejor aprendizaje
- **Variedad:** cada headline debe aportar un ángulo diferente, no repetir la misma idea con palabras distintas
- **Independencia:** cada headline debe funcionar en cualquier posición (puede aparecer como H1, H2 o H3)

### Ad Strength — objetivos
- **Excelente:** máximo potencial de combinaciones
- **Bueno:** aceptable para lanzar
- **Regular / Bajo:** requiere más headlines o más variedad

**Errores que reducen Ad Strength:**
- Headlines muy similares entre sí
- Menos de 8 headlines
- Menos de 3 descriptions
- No incluir keywords en ningún headline
- No incluir CTAs

---

## Ángulos de copy para RSA

Cada RSA debe cubrir la mayoría de estos ángulos (no todos en el mismo headline):

| Ángulo | Propósito | Ejemplos de formato |
|---|---|---|
| **Keyword directa** | Relevancia, Quality Score | "Agencia de Marketing Digital", "[Servicio] en Monterrey" |
| **Beneficio principal** | Qué gana el cliente | "Más Leads, Menos Costo por Clic", "Aumenta tus Ventas Online" |
| **Diferenciador** | Por qué elegirlos | "12 Años de Experiencia", "Especialistas en B2B" |
| **CTA directo** | Acción a tomar | "Solicita tu Diagnóstico Gratis", "Agenda una Demo Hoy" |
| **Prueba social** | Credibilidad | "+200 Clientes Satisfechos", "Caso de éxito: +40% Leads" |
| **Urgencia / escasez** | Activar decisión | "Disponibilidad Limitada Este Mes", "Oferta Hasta el Viernes" |
| **Pregunta / dolor** | Conectar con el problema | "¿Tu Publicidad No Convierte?", "¿Gastas en Ads Sin Resultados?" |
| **Precio / valor** | Ancla de valor | "Desde $X/mes", "ROI Garantizado o No Cobras" |
| **Geolocalización** | Relevancia local | "Servicio en Monterrey y CDMX", "Empresa Local, Resultados Globales" |
| **Garantía / riesgo cero** | Reducir fricción | "Sin Permanencia", "Primer Mes Sin Costo", "Garantía de Resultados" |

**Regla:** no uses todos en el mismo RSA, pero sí cubre al menos 5-6 ángulos diferentes para dar variedad real al algoritmo.

---

## Cómo entregar copy al cliente / equipo

Siempre en tabla con conteo de caracteres:

```
HEADLINES (máx 30 caracteres)
| # | Headline | Chars | Ángulo |
|---|---|---|---|
| 1 | Agencia Google Ads Monterrey | 28 | Keyword + geo |
| 2 | +200 Clientes B2B Satisfechos | 30 | Prueba social |
| 3 | Solicita tu Diagnóstico Gratis | 30 | CTA + beneficio |
...

DESCRIPTIONS (máx 90 caracteres)
| # | Description | Chars |
|---|---|---|
| 1 | Especialistas en Google Ads para empresas B2B. Más leads, menor CPL. | 69 |
...

DISPLAY PATH
/path1/path2 → ej: /Google-Ads/Monterrey
```

---

## Quality Score — qué es y cómo mejorarlo

### Componentes del Quality Score (1-10)
1. **CTR esperado (peso más alto):** ¿El anuncio genera clics en relación a su posición?
2. **Relevancia del anuncio:** ¿El copy del anuncio es relevante para la keyword?
3. **Experiencia en la landing page:** ¿La LP es relevante, útil y de fácil navegación?

### Por qué importa el QS
Un QS alto reduce el CPC real y mejora la posición del anuncio. A igual bid que un competidor, QS más alto = menor costo por clic y mejor posición.

**Fórmula conceptual:**
`Ad Rank = Bid × Quality Score × Expected Impact of Extensions`

### Cómo mejorar cada componente

**CTR esperado (el más impactante):**
- Incluir la keyword en al menos 1-2 headlines del RSA
- Usar CTAs claros y relevantes para la intención de búsqueda
- Activar todos los assets/extensiones relevantes (aumentan CTR)
- Revisar ad copy de keywords con QS < 5 y reescribir
- Verificar que el match type no está atrayendo búsquedas irrelevantes (si las búsquedas no son relevantes, el CTR cae)

**Relevancia del anuncio:**
- 1 tema por ad group (las keywords del ad group deben compartir intención)
- El headline principal debe incluir la keyword exacta o una variación cercana
- Alinear el mensaje del anuncio con lo que el usuario realmente busca

**Experiencia en landing page:**
- LP debe cargarse rápido (< 3 segundos en móvil)
- Debe contener el término de búsqueda en el título o primer párrafo
- Debe tener CTA claro y visible sin hacer scroll
- Contenido relevante y sin elementos engañosos
- Navegación fácil, sin popups agresivos

### Diagnóstico por QS

| QS | Estado | Acción |
|---|---|---|
| 8-10 | Excelente | Mantener, no tocar |
| 6-7 | Bueno | Monitorear, pequeñas mejoras |
| 4-5 | Regular | Revisar copy y relevancia de ad group |
| 1-3 | Crítico | Reescribir copy, revisar LP y estructura de ad group. Si persiste, pausar keyword. |

**Nota:** keywords con QS 1-3 pagando más por peores posiciones. Es mejor pausarlas que seguir pagando de más.

---

## Reglas de copy para industrias reguladas

Aplica cuando el cliente opera en sectores con restricciones de Google:

**Salud / médico:**
- No garantizar resultados de tratamientos
- No usar "cura", "elimina", "garantizado" sin respaldo clínico
- Las cuentas de salud pueden requerir certificación de Google

**Financiero / crédito / inversiones:**
- No prometer rendimientos específicos
- Incluir disclaimers si aplica (puede ir en description)
- Cuentas de servicios financieros pueden requerir verificación

**Legal:**
- No garantizar resultados en casos legales
- "Consulta gratis" es seguro; "Ganamos el 95% de los casos" requiere respaldo

**General:**
- Nunca usar marcas registradas de competidores en el copy sin permiso
- "Mejor que X" o comparaciones directas pueden ser rechazadas por Google
- Si un anuncio es rechazado, revisar la política específica en Google Ads Help antes de reescribir

---

## Proceso de testing de copy

Para mejorar copy sistemáticamente:

1. **Hipótesis clara antes del test:** "Creemos que agregar prueba social en H1 mejorará el CTR"
2. **Cambio de una variable a la vez** (no cambiar 5 headlines al mismo tiempo)
3. **Mínimo 200-300 impresiones** por variación para resultados estadísticamente confiables
4. **Métrica de éxito:** CTR (para awareness) o conv rate (para conversión directa)
5. **Documentar resultado** en el template del cliente → sección "Historial de Tests y Aprendizajes"
6. **Aplicar aprendizaje** al resto de ad groups similares
