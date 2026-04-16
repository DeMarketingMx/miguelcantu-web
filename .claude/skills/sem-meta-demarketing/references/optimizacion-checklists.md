# Checklists de Optimización — Meta Ads

## Principio operativo
Meta Ads no se optimiza tocando todo constantemente — se optimiza observando patrones y actuando con criterio. Cada cambio significativo reinicia el período de aprendizaje del algoritmo y genera datos inconsistentes por 7-14 días.

**Regla de oro:** si algo está funcionando, no lo toques. Si algo está fallando, diagnostica primero, cambia después.

---

## Revisión diaria (5-10 min)
Solo las primeras 2 semanas de campaña nueva, o cuando hay alertas activas.

- [ ] **Pacing del budget:** ¿la campaña está gastando al ritmo esperado?
  - Cálculo simple: budget diario / 24 × hora actual = gasto esperado
- [ ] **Anuncios rechazados:** Ads Manager → columna "Estado del anuncio"
- [ ] **Llegada de leads:** verificar en CRM o integración que los leads están llegando
- [ ] **Errores de entrega:** avisos en Ads Manager (audience too small, pixel issues, aprendizaje limitado)

---

## Revisión semanal (20-30 min)

### Performance general
- [ ] **CPL de la semana vs. CPL objetivo** — ¿cuánto pagamos por lead?
- [ ] **Volumen de leads vs. objetivo semanal**
- [ ] **Spend real vs. budget planificado** — ¿sobre o sub-gasto?

### Frecuencia — indicador clave de salud de audiencia
- [ ] Revisar frecuencia por campaña y ad set
  - Prospección: **frecuencia > 3** → señal de saturación → refrescar creativos o ampliar audiencia
  - Retargeting: **frecuencia > 5-7** → pausar o reducir presupuesto

### Creativos
- [ ] CTR por anuncio: ¿alguno cayó > 20% vs. semana anterior? → candidato a pausar
- [ ] CPL por anuncio: ¿alguno con CPL > 150% del objetivo por 7+ días? → pausar
- [ ] ¿Hay un anuncio con performance notablemente mejor? → considerar aumentar su peso

### Leads
- [ ] ¿Los leads están llegando al CRM sin interrupciones? (verificar integración activa)
- [ ] Feedback preliminar del comercial: ¿calidad aceptable esta semana?
- [ ] ¿Leads de ubicaciones o perfiles claramente fuera del target? → revisar audiencias o copy

---

## Revisión quincenal (45-60 min)

### Análisis de audiencias
- [ ] Comparar CPL por ad set → ¿cuál audiencia funciona mejor?
- [ ] Ad sets con entrega < 20% del budget asignado → problema de audience size o bid
- [ ] Ad sets con frecuencia muy alta pero sin conversiones → pausar, están quemando presupuesto
- [ ] ¿La Customer List de exclusión está actualizada con leads/clientes recientes?

### Creative fatigue check
- [ ] Tendencia de CTR de los últimos 14 días por creativo: ¿bajando semana a semana?
- [ ] CPM: ¿subiendo sin cambio en el mercado? → puede indicar menor relevance score
- [ ] Creativos activos > 4 semanas con presupuesto > $5,000 MXN/mes → evaluar refresh

### Calidad de leads
- [ ] Check formal con el cliente: leads totales → calificados → oportunidades
- [ ] Tasa de calificación: si < 30% → revisar formulario, audiencias y copy
- [ ] ¿Bajó vs. quincena anterior sin cambios en campaña? → investigar causa

### Testing
- [ ] ¿El test activo tiene datos suficientes para declarar ganador?
  - Mínimo: 10-15 conversiones por variante + 7 días de exposición
- [ ] Si hay ganador → aplicar aprendizaje, pausar perdedor
- [ ] Definir siguiente test del mes

---

## Revisión mensual (1.5-2 horas)

### Análisis completo de performance
- [ ] CPL real vs. CPL objetivo — ¿se cumplió la meta?
- [ ] Volumen de leads vs. objetivo del mes
- [ ] Spend total vs. budget — ¿cómo se ejecutó el presupuesto?
- [ ] Breakdown por campaña, ad set y top 3 creativos

### Retrospectiva de creativos
- [ ] Top 3 creativos del mes (mejor CPL o mejor CTR) — documentar por qué funcionaron
- [ ] Bottom 3 creativos del mes — ¿por qué no funcionaron?
- [ ] Patrón del mes: ¿qué tipo de hook, ángulo o formato ganó consistentemente?
- [ ] Documentar en "Historial de Tests y Aprendizajes" del template del cliente

### Audiencias
- [ ] ¿Las Customer Lists de exclusión y lookalike necesitan actualización?
- [ ] ¿Hay audiencias nuevas a probar el mes siguiente?
- [ ] Si se usa Advantage+ → revisar breakdown de audiencias sugeridas vs. expandidas

### Decisión de presupuesto
- [ ] Ver `references/bidding-estrategias.md` → sección "Escalado de presupuesto"
- [ ] ¿Se justifica aumentar el budget el mes siguiente? ¿En qué campaña?
- [ ] ¿El budget está bien distribuido entre prospección y retargeting?
  - Regla general: 70-80% prospección / 20-30% retargeting

### Reporte mensual al cliente
Estructura estándar:
1. **Resumen ejecutivo:** CPL real vs. objetivo, leads totales, spend ejecutado
2. **Performance por campaña** — tabla: campaña / spend / leads / CPL / CTR
3. **Calidad de leads:** tasa de calificación si hay dato del CRM
4. **Top creativo del mes:** qué funcionó y por qué
5. **Tests realizados:** qué se probó, qué ganó, qué aprendimos
6. **Plan del mes siguiente:** nuevos tests, ajustes de estrategia, creativos a lanzar

---

## Diagnóstico rápido de problemas frecuentes

### "Las campañas no salen del período de aprendizaje"
- ¿Cambios frecuentes en la cuenta? → cada cambio reinicia el aprendizaje
- ¿Presupuesto suficiente para 50 eventos de optimización/semana?
- Solución: estabilizar por 7-14 días sin cambios. Solo pausar/agregar anuncios, no editar ad sets.

### "El CPL se disparó de un día al otro"
1. ¿Hubo algún cambio en la cuenta? → puede ser período de reaprendizaje
2. ¿Hay eventos externos? (temporada alta, campaña de competidor)
3. ¿El creativo principal tiene frecuencia alta? → fatigue
4. ¿El Pixel sigue funcionando? → verificar en Events Manager

### "El delivery está muy bajo — no se gasta el budget"
1. Audiencia demasiado pequeña → ampliar o usar Advantage+
2. Bid cap muy bajo → el sistema no puede ganar subastas
3. Anuncios rechazados → revisar estado de cada ad
4. Cost cap demasiado bajo → no encuentra conversiones al precio solicitado

### "Muchos leads pero muy baja calidad"
- Cambiar formulario de More Volume a Higher Intent
- Agregar 1-2 preguntas de calificación
- Revisar si el copy/creativo está atrayendo el público correcto
- Activar conversiones offline para que el algoritmo aprenda de leads que sí cierran

### "Meta reporta X leads pero el CRM tiene Y"
- Diferencia normal del 20-50% por view-through attribution y iOS 14
- Documentar el delta en el template del cliente
- Usar CRM como fuente de verdad para reportar al cliente
- Mantener consistencia en la fuente de verdad — no cambiar mes a mes
