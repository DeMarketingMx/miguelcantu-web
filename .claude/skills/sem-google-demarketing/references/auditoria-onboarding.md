# Auditoría de Cuenta Nueva — Onboarding Google Ads

## Cuándo usar este proceso
- Cliente nuevo que ya tiene cuenta de Google Ads activa (heredada)
- Cliente nuevo sin cuenta previa (cuenta desde cero)
- Revisión trimestral profunda de cuenta existente

---

## Caso 1: Cuenta heredada — auditoría completa

### Fase 1: Estado general de la cuenta (30 min)

**Configuración básica:**
- [ ] ¿La cuenta está vinculada al MCC de De Marketing?
- [ ] ¿La moneda y zona horaria son correctas? (no se puede cambiar después)
- [ ] ¿El modelo de atribución está configurado? (recomendado: basado en datos, o último clic si no hay volumen suficiente)
- [ ] ¿Hay conversiones configuradas? ¿Cuántas son primarias vs. secundarias?
- [ ] ¿Las conversiones realmente se están disparando? (revisar últimos 30 días en "Resumen de conversiones")
- [ ] ¿Hay conversiones duplicadas o mal configuradas?

**Red flags inmediatas a documentar:**
- Conversiones en 0 con campañas activas → tracking roto, prioridad crítica
- Estrategia de puja en tCPA/tROAS con menos de 30 conv/mes → el algoritmo no tiene datos suficientes
- Budget diario agotándose antes del mediodía → pacing problem o budget subdimensionado
- Quality Score promedio menor a 5 en keywords principales
- CTR menor a 1% en Search → copy irrelevante o match types mal configurados
- Campañas sin ninguna conversión en más de 45 días activas

---

### Fase 2: Estructura de campañas

- [ ] ¿Hay una campaña por objetivo de negocio o están mezclados?
- [ ] ¿Los ad groups tienen un tema semántico claro (1 intención por ad group)?
- [ ] ¿Hay ad groups con más de 20-25 keywords? (señal de sobre-agrupación)
- [ ] ¿PMax y Search están corriendo en paralelo sin segmentación clara? (riesgo de canibalización)
- [ ] ¿Hay campañas activas que llevan más de 45 días sin una sola conversión?
- [ ] ¿El budget está distribuido acorde al valor de cada objetivo?

**Documenta para el template:**
- Lista de campañas activas con tipo, objetivo, budget diario, estrategia de puja, conversiones/mes y CPL actual

---

### Fase 3: Keywords

- [ ] ¿Qué match types se están usando? ¿Hay política definida?
- [ ] ¿Hay keywords con Quality Score < 4? (impactan CPC y posición)
- [ ] ¿Hay keywords con cero impresiones en los últimos 30 días? (sin volumen o bid muy bajo)
- [ ] ¿Hay keywords duplicadas entre ad groups de la misma campaña?
- [ ] Revisar search terms report de los últimos 90 días → ¿hay términos irrelevantes con gasto significativo?
- [ ] ¿Existe lista de negativos? ¿A qué nivel (cuenta / campaña / ad group)?

**Acción inmediata si no hay negativos:** construir lista base antes de activar cualquier campaña. Ver `optimizacion-checklists.md`.

---

### Fase 4: Ad copy

- [ ] ¿Hay RSAs en cada ad group? (mínimo 1 RSA activo por ad group)
- [ ] ¿Cuál es el Ad Strength de los RSAs activos? (objetivo: "Bueno" o "Excelente")
- [ ] ¿Los headlines incluyen la keyword principal?
- [ ] ¿Hay CTAs claros?
- [ ] ¿El copy está alineado con la landing page? (message match)
- [ ] ¿Hay anuncios de texto expandido activos? (deprecados — solo observar, no crear nuevos)

---

### Fase 5: Landing pages

- [ ] ¿Cada campaña tiene landing page específica o están mandando todo al home?
- [ ] ¿Las LPs tienen formulario visible arriba del fold?
- [ ] ¿El mensaje de la LP es consistente con el ad (message match)?
- [ ] ¿Cómo es la velocidad de carga móvil? (PageSpeed > 70 ideal)
- [ ] ¿Los formularios están trackeados como conversiones?
- [ ] ¿Hay thank you page configurada post-conversión?

---

### Fase 6: Audiencias y remarketing

- [ ] ¿Hay listas de remarketing creadas en GA4 o directamente en Google Ads?
- [ ] ¿Las campañas de Search tienen audiencias en modo observación como mínimo?
- [ ] ¿Se están excluyendo los conversores actuales para no desperdiciar budget?
- [ ] ¿Hay customer match list actualizada (emails de clientes)?

---

### Fase 7: Vinculaciones (verificar antes de cualquier cambio)

- [ ] GA4 vinculado y con importación de conversiones activa (o tags directos)
- [ ] Google Tag Manager configurado
- [ ] Google Search Console vinculada
- [ ] Looker Studio conectado (si ya existe dashboard)

Para detalle de vinculaciones: `references/vinculaciones-externas.md`

---

### Output de la auditoría

Al terminar, entrega un resumen con:

1. **Semáforo general:** 🔴 Crítico / 🟡 Requiere atención / 🟢 En orden
2. **Issues críticos** (tracking roto, conversiones mal configuradas, budget mal distribuido) → acción inmediata
3. **Issues de optimización** (copy débil, negativos insuficientes, ad groups sobrecargados) → próximas 2 semanas
4. **Oportunidades** (nuevos tipos de campaña, audiencias sin explotar, keywords de expansión) → próximo mes
5. **Template del cliente:** llenar con los datos encontrados en `references/template-google-ads.md`

---

## Caso 2: Cuenta desde cero

### Checklist de configuración inicial

**Antes de crear la primera campaña:**
- [ ] Crear cuenta en MCC de De Marketing (o vincular cuenta propia del cliente)
- [ ] Configurar moneda (MXN) y zona horaria (México - Ciudad de México)
- [ ] Configurar conversiones antes de activar campañas — nunca al revés
- [ ] Vincular GA4, GTM, Search Console (ver `references/vinculaciones-externas.md`)
- [ ] Definir CPL objetivo con Miguel/cliente antes de configurar cualquier estrategia de puja
- [ ] Construir lista de negativos base (ver `references/optimizacion-checklists.md`)
- [ ] Verificar que las landing pages están listas y con tracking funcionando

**Configuración de conversiones mínima requerida:**
- Formulario de contacto (primaria)
- WhatsApp click o llamada telefónica (primaria)
- Visita a thank you page como respaldo (secundaria)

**Estructura recomendada para cuenta nueva:**
- Arrancar con 1-2 campañas de Search (máximo) con exact/phrase match
- Budget conservador los primeros 30 días para recolectar datos
- NO usar tCPA ni tROAS hasta tener mínimo 30 conversiones en los últimos 30 días
- Usar Maximize Conversions en fase inicial
- Revisar search terms diariamente la primera semana

Ver estrategia de puja por etapa en `references/bidding-estrategias.md`.
