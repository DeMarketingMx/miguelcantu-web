# Checklists de Optimización y Gestión de Negativos

## Cadencia de optimización

---

## Revisión diaria (10-15 min)

Solo cuando la cuenta es nueva (primeras 4 semanas) o cuando hay alertas activas.

- [ ] **Search terms:** revisar nuevas búsquedas que activaron anuncios → agregar negativos si hay términos irrelevantes con gasto
- [ ] **Presupuesto y pacing:** ¿las campañas están gastando al ritmo esperado? ¿Alguna agotó el budget antes del mediodía?
- [ ] **Conversiones del día:** ¿se están registrando? Si hay 0 conversiones con clics normales → revisar tracking
- [ ] **Alertas en la plataforma:** revisar notificaciones de Google (anuncios rechazados, problemas de conversión, etc.)

**Cuándo escalar a semanal:** cuando la cuenta lleva 4+ semanas estable sin problemas de tracking ni alertas críticas.

---

## Revisión semanal (45-60 min)

### Performance general
- [ ] Comparar CPL de la semana vs. CPL objetivo y vs. semana anterior
- [ ] Revisar conversiones totales y distribución por campaña
- [ ] Identificar campañas con CPL > 150% del objetivo → diagnósticar causa
- [ ] Revisar Impression Share: si está por debajo del 50% en Search con buen CPL → considerar aumentar budget

### Keywords
- [ ] **Search terms report (últimos 7 días):** agregar negativos por términos irrelevantes, confusos o de bajo intent
- [ ] Revisar keywords con 50+ clics sin conversión → ¿problema de copy, landing o intent?
- [ ] Revisar keywords con QS ≤ 4 → plan de mejora o pausa

### Ad copy
- [ ] Revisar Ad Strength de RSAs activos → si alguno está en "Regular" o "Bajo", agregar headlines
- [ ] ¿Hay algún headline o description con "Rendimiento bajo" en los insights del RSA? → considerar reemplazar

### Presupuesto
- [ ] ¿Alguna campaña está limitada por presupuesto consistentemente? → evaluar aumento si el CPL está en objetivo
- [ ] ¿Alguna campaña está sub-gastando? → revisar si hay problema de pujas, keywords sin búsquedas o anuncios rechazados

### Audiencias
- [ ] Revisar performance de audiencias en observación → ¿alguna tiene CPL significativamente mejor o peor?

---

## Revisión quincenal (60-90 min)

### Análisis de ad copy
- [ ] Comparar performance de RSAs entre ad groups similares → ¿qué ángulos de copy funcionan mejor?
- [ ] Evaluar si agregar o retirar assets/extensiones según performance
- [ ] Revisar call extension → ¿cuántas llamadas? ¿se están convirtiendo?

### Calidad de leads
- [ ] Consultar con el equipo comercial del cliente: ¿cómo es la calidad de los leads de la quincena?
- [ ] Si la calidad es baja: revisar match types, search terms y landing page (¿el mensaje genera expectativa incorrecta?)
- [ ] Documentar en template del cliente si hay patrones de leads de baja calidad

### Pujas y estrategia
- [ ] ¿El tCPA configurado está siendo alcanzado consistentemente? → evaluar si bajar gradualmente
- [ ] ¿Hay ad groups o campañas en período de aprendizaje? → no tocar hasta que salgan

### Landing pages
- [ ] Revisar conv rate por LP → ¿alguna cayó más del 20% vs. quincena anterior?
- [ ] Verificar que las LPs siguen cargando bien y los formularios funcionan

---

## Revisión mensual (2-3 horas)

### Análisis completo de performance
- [ ] Reporte mensual: comparativa vs. mes anterior y vs. mismo mes año pasado (si hay historial)
- [ ] CPL real vs. objetivo → ¿se cumplió la meta?
- [ ] Costo total de pauta vs. presupuesto asignado → ¿hubo sobre o sub-gasto?
- [ ] Número de conversiones y tendencia

### Keyword strategy
- [ ] Revisar keywords de mayor rendimiento (top performers) → ¿siguen siendo las mismas?
- [ ] Revisar keywords a explorar / oportunidades del template → ¿alguna lista para activar?
- [ ] Revisar negativos acumulados → consolidar en listas de negativos compartidas

### Estructura de campañas
- [ ] ¿La estructura actual sigue siendo óptima? → ¿hay ad groups que deberían separarse o fusionarse?
- [ ] ¿Hay campañas que llevan 45+ días sin conversiones? → evaluar pausa o reestructura
- [ ] ¿Hay oportunidades de nuevos tipos de campaña según la etapa de madurez? (ver `bidding-estrategias.md`)

### Tests activos
- [ ] Evaluar resultados de tests de copy en curso → ¿hay ganador estadístico?
- [ ] Definir próximo test del mes
- [ ] Documentar aprendizaje en template del cliente

### Preparación del reporte al cliente
- [ ] CPL real vs. objetivo (métrica principal)
- [ ] Conversiones totales y desglose por campaña/fuente
- [ ] Presupuesto ejecutado vs. asignado
- [ ] Top 3 insights del mes (qué funcionó, qué no, qué se probó)
- [ ] Plan del mes siguiente (qué se va a hacer diferente o a escalar)

---

## Gestión de negativos — estructura completa

### Nivel 1: Lista de negativos de cuenta

Términos que aplican para **todos los clientes B2B** como base:
- Variaciones de empleo: "trabajo", "empleos", "vacante", "sueldo", "salario", "cómo ser", "cómo convertirse"
- DIY / gratuito: "gratis", "free", "cómo hacer", "tutorial", "plantilla gratis", "curso gratis" (a menos que el cliente venda cursos)
- Información genérica: "qué es", "definición", "significado", "wikipedia"
- Competencia (si se decide excluir): nombres de competidores directos (caso a caso)

**Cómo crear lista compartida:**
Google Ads → Herramientas → Biblioteca compartida → Listas de palabras clave negativas → crear lista → aplicar a todas las campañas relevantes

---

### Nivel 2: Negativos por campaña

Términos irrelevantes para el objetivo específico de esa campaña.

**Ejemplo — Campaña de Google Ads para agencia:**
- Si hay campaña de "gestión Google Ads" → agregar como negativo en esa campaña los términos de "SEO", "Facebook Ads", "redes sociales" → para que no se coman tráfico entre sí

**Ejemplo — Campaña de servicio A de un cliente:**
- Agregar como negativos los nombres de los otros servicios del cliente → evitar que los ad groups de servicios distintos compitan entre sí

---

### Nivel 3: Negativos por ad group

Términos que pertenecen a otro ad group dentro de la misma campaña.

**Propósito:** eliminar canibalización interna. Si tienes ad groups separados por servicio, cada uno debe servir solo a su grupo de búsquedas.

**Proceso:**
1. Definir las keywords de cada ad group
2. Agregar las keywords de cada ad group como negativos en los otros ad groups de la misma campaña
3. Revisar search terms quincenalmente para detectar si hay términos que se "cuelan" al ad group incorrecto

---

### Proceso de mantenimiento de negativos

**Semanal:** revisar search terms → agregar negativos nuevos al nivel correcto (cuenta, campaña o ad group)

**Mensual:** auditar lista de negativos → verificar que no hay negativos que estén bloqueando tráfico relevante (pasa si se agrega un término muy genérico)

**Cómo verificar si un negativo está bloqueando tráfico válido:**
- Herramientas → Planificador de palabras clave → buscar el término sospechoso
- Si tiene volumen alto y es relevante para el negocio → revisar si el negativo fue mal configurado

---

## Diagnóstico de caída en conversiones

Cuando las conversiones bajan de forma inesperada, seguir este árbol de diagnóstico:

1. **¿Cayeron las impresiones?**
   - Sí → revisar si algún anuncio fue rechazado, si el presupuesto se agotó, o si bajaron las búsquedas (estacionalidad)
   - No → continuar

2. **¿Cayó el CTR?**
   - Sí → revisar si entró competencia nueva, si el copy perdió relevancia, o si hay un asset rechazado
   - No → continuar

3. **¿Cayó la tasa de conversión de la LP?**
   - Sí → revisar si la LP cambió, si el formulario se rompió, si la velocidad cayó
   - No → continuar

4. **¿Hay conversiones registradas pero no se ven en Google Ads?**
   - Puede ser problema de atribución, de ventana de conversión, o de importación desde GA4
   - Verificar en GA4 si las conversiones existen antes de diagnosticar el problema en Ads
