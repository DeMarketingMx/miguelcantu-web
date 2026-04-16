# Estrategia de Puja, Madurez de Cuenta y Escalado de Presupuesto

## El ciclo de vida de una cuenta de Meta Ads

La estrategia de puja correcta depende del estado de madurez de la cuenta. Una cuenta sin historial necesita una estrategia diferente a una con 6 meses y datos de conversión sólidos.

### Fases de madurez

**Fase 1 — Aprendizaje (0 a 4 semanas)**
- Cuenta nueva o campaña nueva sin datos
- El algoritmo no sabe a quién mostrarle el anuncio
- El CPL en este período es alto e inestable — es normal
- **Objetivo:** acumular datos de conversión, no optimizar el CPL todavía
- **Prioridad:** no hacer cambios frecuentes. Cada cambio significativo reinicia el aprendizaje

**Fase 2 — Optimización (1 a 3 meses)**
- El algoritmo empieza a tener señales suficientes
- CPL se estabiliza y puede bajar progresivamente
- Espacio para probar variantes de creativos y audiencias
- **Objetivo:** reducir CPL hacia el objetivo, escalar lo que funciona

**Fase 3 — Escala (3 meses en adelante)**
- Patrones claros de qué audiencias y creativos funcionan
- Base sólida para escalar presupuesto
- El riesgo es la fatiga creativa al escalar (mayor frecuencia)
- **Objetivo:** maximizar volumen de leads manteniendo CPL en objetivo

---

## Bid Strategies — cuándo usar cada una

### Lowest Cost (Menor costo)
Meta gasta el presupuesto buscando el menor costo por resultado posible.

**Cuándo usar:**
- Cuentas nuevas sin CPL objetivo claro
- Fase de aprendizaje — no restringir al algoritmo
- Cuando se quiere maximizar volumen y el CPL no es crítico

**Ventaja:** mayor delivery, el algoritmo tiene libertad total.
**Riesgo:** sin límite, si la competencia sube, el CPL puede dispararse.

---

### Cost Cap (Límite de costo)
Meta intenta mantenerse cerca del costo objetivo por resultado configurado. Puede gastar menos del presupuesto si no encuentra conversiones al costo objetivo.

**Cuándo usar:**
- Cuenta con historial de conversiones y CPL objetivo definido
- Cuando el CPL objetivo no es negociable (margen muy ajustado)

**Cómo configurar el costo objetivo:**
- Empezar con CPL objetivo + 20% de margen (darle espacio al algoritmo)
- Ejemplo: CPL objetivo $300 MXN → configurar Cost Cap en $360 MXN
- Reducir gradualmente a medida que el algoritmo aprende

**Riesgo:** si el Cost Cap está muy bajo, la entrega se frena o se para. Señal: presupuesto sin gastar + pocas conversiones.

---

### Bid Cap (Límite de puja)
Establece el monto máximo que Meta puede pujar en cada subasta individual. Más granular que Cost Cap.

**Cuándo usar:**
- Cuentas avanzadas donde se entiende el valor de cada subasta
- Cuando se quiere máximo control sobre el costo por impresión
- Útil en industrias muy competitivas con CPMs altos

**Advertencia:** si el bid cap está demasiado bajo, la campaña simplemente no entrega.

---

### Minimum ROAS
Meta busca un ROAS mínimo por conversión, no un costo fijo.

**Cuándo usar:** solo en e-commerce donde los productos tienen valores de venta variables.
**Requiere:** evento `Purchase` con valores de conversión configurados.

---

## Período de aprendizaje — qué es y cómo manejarlo

Meta muestra "En aprendizaje" cuando una campaña, ad set o anuncio no tiene suficientes datos para optimizar.

**Cuántos eventos necesita para salir del aprendizaje:** 50 eventos de optimización por ad set por semana.

**Cuánto dura:** 7-14 días típicamente si hay volumen suficiente.

**Lo que NO se debe hacer durante el aprendizaje:**
- Cambiar el presupuesto en más del 20%
- Cambiar la estrategia de puja
- Cambiar el evento de optimización
- Pausar y reactivar la campaña
- Agregar o quitar muchos anuncios de golpe

**Señal de problema:** ad set atascado en "Aprendizaje limitado" → causas posibles: presupuesto demasiado bajo, audiencia muy estrecha, bid cap muy bajo, evento de conversión poco frecuente.

---

## Escalado de presupuesto — cuándo y cómo

### Antes de escalar, verificar
- [ ] CPL en objetivo o por debajo durante mínimo 2 semanas consecutivas
- [ ] Calidad de leads aceptable según feedback del CRM
- [ ] Frecuencia en prospección < 3 (audiencia no saturada)
- [ ] Ninguna campaña activa en período de aprendizaje

### Regla del 20% — escalado vertical
Aumentar máximo 20% del presupuesto en un solo cambio.
- Esperar mínimo 7 días antes del siguiente aumento
- Si el CPL sube > 30% después del aumento y no baja en 7 días → volver al presupuesto anterior

**Ejemplos:**
- Budget actual: $500/día → siguiente incremento: $600/día (no $900/día)
- Budget actual: $1,500/día → siguiente incremento: $1,800/día

### Escalado horizontal — más estable que subir budget
En lugar de solo aumentar presupuesto en las mismas campañas:
- Lanzar nuevas audiencias que no se han probado
- Probar nuevos formatos de creativo (si solo se usaba imagen → probar video/UGC)
- Explorar nuevos mercados geográficos
- Crear una campaña paralela con un objetivo diferente (ej: retargeting más agresivo)

**El escalado horizontal suele ser más sostenible que el vertical** — el presupuesto más alto en la misma audiencia acelera la fatiga.

### Señales de que el escalado está funcionando
- CPL sube < 15% después del aumento → el algoritmo absorbe el incremento bien
- Volumen de leads aumenta proporcionalmente al presupuesto
- Frecuencia se mantiene estable o sube muy gradualmente

### Señales de que hay que frenar el escalado
- CPL sube > 30% y no se recupera en 7-10 días
- Frecuencia sube rápidamente (la audiencia se está saturando)
- Calidad de leads cae según el CRM

---

## Budget mínimo efectivo por etapa

| Etapa | Budget mensual mínimo | Observaciones |
|---|---|---|
| Test inicial (aprendizaje) | $8,000-12,000 MXN | Para acumular datos de conversión en 2-4 semanas |
| Operación estándar | $15,000-25,000 MXN | Permite 1-2 campañas activas + algo de testing |
| Escala media | $25,000-60,000 MXN | Múltiples campañas, testing continuo de creativos |
| Escala alta | $60,000+ MXN | Justifica CAPI server-side, múltiples audiencias, producción continua de creativos |

**Nota:** con presupuesto < $8,000 MXN/mes, el algoritmo de Meta tiene dificultades para salir del período de aprendizaje. El CPL tenderá a ser más alto e inestable.

---

## CBO vs. ABO — cuándo usar cada uno

### Campaign Budget Optimization (CBO) — recomendado por default
Meta distribuye el budget entre los ad sets según dónde encuentra mejor performance.

**Ventaja:** el algoritmo es más eficiente distribuyendo budget en tiempo real que cualquier configuración manual.
**Cuándo usar:** campañas de producción donde se confía en el algoritmo.

### Ad Set Budget Optimization (ABO)
Cada ad set tiene su propio presupuesto fijo.

**Cuándo usar:**
- Tests A/B controlados donde se necesita igual exposición en cada variante
- Cuando un ad set específico siempre necesita un mínimo de presupuesto garantizado
- Escalado controlado donde se quiere controlar exactamente cuánto va a cada audiencia
