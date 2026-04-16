# Estrategias de Puja, Madurez de Cuenta y Escalado de Presupuesto

## Estrategias de puja disponibles

| Estrategia | Objetivo | Condición mínima | Nivel de control |
|---|---|---|---|
| Manual CPC | Máximo control | Cualquier cuenta | Alto |
| Enhanced CPC (eCPC) | Maximizar conversiones con ajuste manual | Conversiones configuradas | Medio-alto |
| Maximize Clicks | Máximo tráfico | Sin requisito | Medio (sin foco en conv) |
| Maximize Conversions | Maximizar conversiones con budget dado | Conversiones activas | Medio |
| Maximize Conversion Value | Maximizar valor total de conversiones | Conversiones con valor asignado | Medio |
| Target CPA (tCPA) | CPL específico objetivo | 30+ conv/mes últimos 30 días | Bajo (algoritmo) |
| Target ROAS (tROAS) | ROAS específico objetivo | 50+ conv/mes con valor asignado | Bajo (algoritmo) |
| Target Impression Share | Posicionamiento en resultados | Cualquier cuenta | Medio |

---

## Estrategia por etapa de madurez de cuenta

### Etapa 1 — Cuenta nueva / sin datos (0-30 conversiones/mes)

**Objetivo:** recolectar datos de conversión, no optimizar aún.

- Estrategia: **Maximize Conversions** (sin tCPA definido)
- Match types: Exact + Phrase (no broad — minimizar irrelevancia)
- Budget: conservador, suficiente para 5-10 clics/día por campaña
- Revisión: **diaria** los primeros 15 días (search terms, conversiones reales)
- No activar tCPA todavía — el algoritmo no tiene suficiente data para aprender
- No activar PMax como campaña principal

**Señal para avanzar:** 30 conversiones en los últimos 30 días de forma consistente.

---

### Etapa 2 — Cuenta en crecimiento (30-80 conversiones/mes)

**Objetivo:** estabilizar CPL y empezar a escalar.

- Estrategia: **tCPA** — configurar un target 20-30% más alto que el CPL objetivo real para dar margen al algoritmo
  - Ejemplo: CPL objetivo = $500 MXN → configurar tCPA = $600-650 MXN inicialmente
- Match types: incorporar Broad en keywords de alto rendimiento probadas en Etapa 1
- Empezar a construir listas de remarketing (ya hay tráfico suficiente)
- Revisar búsquedas semanalmente y agregar negativos
- Considerar PMax como campaña complementaria si hay assets creativos

**Ajuste de tCPA:** bajar el target gradualmente (10-15% a la vez, no más) conforme el algoritmo aprende. Esperar mínimo 2 semanas entre ajustes.

**Señal para avanzar:** CPL estable en objetivo durante 30+ días consecutivos.

---

### Etapa 3 — Cuenta madura (80+ conversiones/mes)

**Objetivo:** maximizar volumen manteniendo CPL objetivo.

- Estrategia: **tCPA agresivo** o **tROAS** si hay valores asignados a conversiones
- Broad match con smart bidding en keywords core
- PMax activo como complemento de Search
- Expandir a nuevos tipos de campaña (Demand Gen, YouTube)
- Audience layering: customer match, lookalike, in-market
- Empezar a explorar nuevas geografías o segmentos

---

## Seasonal adjustments y bid modifiers

### Seasonal adjustments (ajustes estacionales)

Herramienta de Google para indicar al algoritmo que habrá un pico temporal de conversiones. Disponible solo con tCPA o tROAS.

**Cuándo usar:**
- Temporadas de alta demanda conocida (Hot Sale, Buen Fin, Navidad, temporada vacacional)
- Eventos del cliente (lanzamiento de producto, webinar, promoción especial)
- Picos estacionales documentados en el historial del cliente

**Cómo configurar:**
1. Herramientas → Biblioteca compartida → Ajustes de estacionalidad
2. Definir rango de fechas del evento
3. Ingresar % de incremento esperado en tasa de conversión (ej: +30%)
4. Aplica a nivel cuenta, campaña o grupo de anuncios

**Regla:** usar solo cuando se espera un cambio de al menos 20-30% en conv rate. Cambios pequeños no justifican el ajuste.

### Bid modifiers (ajustes de puja manuales)

Disponibles en estrategias manuales o eCPC. Con smart bidding, muchos son ignorados (el algoritmo decide).

| Modificador | Dónde aplica | Cuándo ajustar |
|---|---|---|
| Dispositivo | Campaña / ad group | Si móvil tiene CPL 40%+ mayor que desktop, reducir bid en móvil |
| Ubicación | Campaña | Si una ciudad convierte mejor, aumentar bid |
| Horario | Campaña | Si hay franjas con alto CPL consistente, reducir o excluir |
| Audiencia | Campaña / ad group | Aumentar bid en remarketing y customer match |
| Demografía | Campaña | Si un segmento etario convierte claramente mejor |

**Nota:** con Maximize Conversions y tCPA, los ajustes de dispositivo y demografía son respetados. Los de horario y ubicación también, aunque el algoritmo tiene peso propio. Revisar el impacto después de 2 semanas de cualquier ajuste.

---

## Escalado de presupuesto

### Regla de oro del escalado
**Nunca aumentar el presupuesto más del 20-25% en un solo cambio.** Cambios mayores reinician el período de aprendizaje del algoritmo de smart bidding.

### Proceso de escalado

**Antes de escalar, verificar:**
- [ ] ¿El CPL actual está en objetivo o por debajo?
- [ ] ¿Las campañas están limitadas por presupuesto? (columna "Estado" → "Limitada por presupuesto")
- [ ] ¿El volumen de búsquedas disponibles puede absorber más budget? (Impression Share < 70% indica oportunidad)
- [ ] ¿Las landing pages aguantan más tráfico? (¿conv rate se mantiene estable?)

**Si todo está en verde:**

| Aumento | Cuándo aplica |
|---|---|
| +15-20% | Escalado estándar. Esperar 7-14 días antes del siguiente incremento. |
| +25% | Máximo recomendado en un solo paso. Solo si hay confianza alta en el margen. |
| > +25% | Riesgo de reset del algoritmo. Dividir en 2 incrementos separados por 2 semanas. |

**Después del aumento:**
- Monitoreo diario por 7-10 días
- Verificar que CPL no se incrementó más del 15%
- Si el CPL sube más del 20%, reducir al budget anterior y revisar causa

### Señales de que NO es momento de escalar
- CPL por encima del objetivo en los últimos 14 días
- Impression Share alto (>85%) — ya estás capturando casi toda la demanda disponible
- Landing page con conv rate en caída
- Calidad de leads baja según feedback del equipo comercial del cliente
- Período de aprendizaje activo (no tocar el presupuesto durante el aprendizaje)

### Escalado por expansión (más eficiente que solo aumentar budget)
Antes de subir budget en las mismas campañas, evalúa:
- **Nuevas geografías:** ¿hay ciudades sin cubrir con demanda?
- **Nuevas keywords:** ¿hay términos con intent alto sin capturar?
- **Nuevos tipos de campaña:** ¿PMax puede complementar Search?
- **Nuevos servicios/productos:** ¿hay líneas del cliente sin campaña dedicada?

La expansión horizontal suele ser más eficiente que solo aumentar budget vertical en las mismas campañas.
