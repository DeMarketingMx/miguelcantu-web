# Auditoría de Cuenta Nueva — Onboarding Meta Ads

## Caso 1: Cuenta heredada — auditoría completa

### Fase 1: Business Manager y estructura de cuenta

**Verificar accesos y estructura:**
- [ ] ¿De Marketing tiene rol de Admin o Advertiser en el Business Manager del cliente?
- [ ] ¿La Ad Account está dentro del Business Manager del cliente (no en cuenta personal)?
  - Cuenta personal = riesgo crítico. Si el cliente pierde acceso, se pierde historial y audiencias.
- [ ] ¿Hay múltiples Ad Accounts activas? → consolidar si es posible
- [ ] ¿El Pixel está asignado al Business Manager correcto?
- [ ] ¿Las páginas de Facebook e Instagram están vinculadas al BM?
- [ ] ¿La forma de pago está en la Ad Account correcta?
- [ ] ¿Hay límite de gasto configurado? → puede pausar campañas si se alcanza sin avisar

**Red flags inmediatas:**
- Cuenta personal en lugar de BM → migrar antes de invertir más
- Múltiples Pixels en el mismo sitio → datos inflados, consolidar a uno
- Pixel sin actividad en últimos 7 días con sitio activo → tracking roto
- "Account Disabled" o restricciones activas → resolver antes de cualquier campaña
- Sin dominio verificado → limita conversiones rastreables post-iOS 14

---

### Fase 2: Pixel y tracking

Ver `pixel-capi-tracking.md` para detalle completo.

Resumen de lo que revisar:
- [ ] ¿El Pixel ID del sitio coincide con el de Events Manager?
- [ ] ¿Hay eventos de conversión activos y disparándose? (Events Manager → últimas 24-48 horas)
- [ ] ¿Cuál es el Event Match Quality (EMQ) del evento principal? Objetivo: > 6/10
- [ ] ¿Está configurada la Conversions API (CAPI)? → crítico para presupuestos > $15,000 MXN/mes
- [ ] ¿El dominio está verificado en Business Manager?
- [ ] ¿Los 8 eventos prioritarios están correctamente ordenados? (límite post-iOS 14)

---

### Fase 3: Estructura de campañas

- [ ] ¿Cuántas campañas activas hay? ¿Objetivo claro para cada una?
- [ ] ¿Hay campañas sin conversiones en 30+ días? → candidatas a pausar
- [ ] ¿El presupuesto está distribuido de forma lógica?
- [ ] ¿Hay ad sets con menos de $150 MXN/día? → insuficiente para que el algoritmo aprenda
- [ ] ¿Hay demasiados ad sets compitiendo entre sí en la misma campaña (audience overlap)?

Documenta para el template:
- Lista de campañas activas con objetivo, budget, evento de optimización, bid strategy, CPL actual

---

### Fase 4: Audiencias

- [ ] ¿Hay Custom Audiences creadas desde el Pixel?
- [ ] ¿Las Custom Audiences tienen mínimo 1,000 personas para retargeting?
- [ ] ¿Hay Lookalike Audiences creadas a partir de conversores o customer list?
- [ ] ¿Se están excluyendo conversores de las campañas de prospección?
- [ ] ¿Hay Customer List actualizada?
- [ ] ¿Alguna audiencia de prospección tiene frecuencia >3 de forma consistente? → saturada

---

### Fase 5: Creativos y copy

- [ ] ¿Cuántos creativos activos hay por ad set? (ideal: 3-5)
- [ ] ¿Hay creativos con >4 semanas sin refresh? → probable fatiga
- [ ] ¿Cuál es el CTR promedio de link click? (benchmark B2B: >1%, B2C: >1.5%)
- [ ] ¿Hay creativos con frecuencia >4 y CTR cayendo? → reemplazar
- [ ] ¿Los creativos tienen variedad de formatos?
- [ ] ¿Hay anuncios rechazados activos?

---

### Fase 6: Landing pages y destinos

- [ ] ¿Los anuncios llevan al destino correcto?
- [ ] ¿Las LPs cargan bien en móvil? (>60% del tráfico de Meta es móvil)
- [ ] ¿Los Instant Forms tienen todos los campos necesarios?
- [ ] ¿Los leads de Instant Forms están llegando al CRM o email del cliente?
- [ ] ¿El tiempo de respuesta a leads es < 1 hora? (crítico para calidad de conversión)

---

### Output de la auditoría

1. **Semáforo por área:** 🔴 Crítico / 🟡 Atención / 🟢 En orden
2. **Issues críticos** → resolver antes de invertir más (tracking, cuenta en riesgo, conversiones mal configuradas)
3. **Issues de optimización** → próximas 2 semanas
4. **Oportunidades** → nuevos creativos, audiencias, tipos de campaña
5. **Llenar template** → `template-meta.md`

---

## Caso 2: Cuenta nueva desde cero

### Setup obligatorio antes de lanzar la primera campaña

**Business Manager:**
- [ ] Crear BM en business.facebook.com (si no existe)
- [ ] Crear Ad Account dentro del BM del cliente (no cuenta personal)
- [ ] Agregar páginas de Facebook e Instagram al BM
- [ ] Configurar método de pago en la Ad Account
- [ ] Dar acceso al BM de De Marketing como Partner

**Pixel y tracking (antes de gastar un peso):**
- [ ] Crear Pixel en Events Manager
- [ ] Instalar Pixel en el sitio (via GTM recomendado)
- [ ] Verificar el dominio en Business Manager
- [ ] Configurar y verificar el evento de conversión principal
- [ ] Configurar CAPI si el presupuesto > $15,000 MXN/mes lo justifica
- [ ] Priorizar los 8 eventos en Events Manager → conversión principal en #1

**Audiencias iniciales:**
- [ ] Crear "Visitantes del sitio — últimos 30 días" (crece automáticamente)
- [ ] Crear "Conversores — últimos 90 días" (para exclusión futura)
- [ ] Subir Customer List si el cliente tiene emails de clientes actuales

**Estructura recomendada para inicio:**
- 1 campaña de prospección con objetivo Leads o Conversions
- 1-2 ad sets máximo — no fragmentar el budget
- 3-5 creativos para que el algoritmo pruebe
- Budget conservador los primeros 7-10 días hasta salir del Learning Phase
- Excluir conversores desde el día 1

Ver estrategia de puja en `bidding-estrategias.md`.
