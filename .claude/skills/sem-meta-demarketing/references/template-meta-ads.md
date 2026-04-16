# Meta Ads — Contexto Operativo del Cliente

> **Instrucción para Claude:** Usa este documento para análisis de campañas, generación de copy y creativos, recomendaciones de optimización y reporteo de Meta Ads. Respeta la estructura de campañas definida, los lineamientos de copy y creativos aprobados, el budget asignado y las audiencias configuradas. Al analizar datos, conecta siempre con CPL objetivo y métricas de negocio. Meta es canal de generación de demanda — el creativo y el hook son el motor principal de conversión.

---

## Cliente:
## Última actualización:
## Actualizado por:

---

## Configuración General

- **Business Manager ID:**
- **Ad Account ID:**
- **Business Manager:** (De Marketing / cuenta propia del cliente)
- **Presupuesto mensual en pauta Meta:** $
- **Moneda de la cuenta:**
- **Zona horaria:**
- **Ventana de atribución:** (7 días clic / 1 día vista — o configuración custom)
- **CPL objetivo:** $
- **CPL actual (último mes):** $
- **Etapa de madurez:** (nueva / crecimiento / madura)

---

## Pixel y Conversiones

### Meta Pixel
- **Pixel ID:**
- **Dominio verificado:** (sí / no — dominio:)
- **Método de instalación:** (GTM / manual / plugin / CAPI)
- **Conversions API (CAPI):** (sí / no — método: partner integration / GTM server-side / manual)
- **Event Match Quality Score principal:** (1-10)

### Eventos Configurados

| Evento | Tipo | Método | Parámetros custom | Conversión principal | Estatus |
|---|---|---|---|---|---|
| `Lead` | Estándar | GTM / CAPI | | sí / no | Activo |
| `PageView` | Estándar | GTM | | no | Activo |
| `ViewContent` | Estándar | GTM | | no | |
| | | | | | |

### Configuración iOS 14
- **Eventos prioritarios configurados (máx 8):**
  1. (primer lugar = conversión principal)
  2.
  3.

---

## Estructura de Campañas

### Campaña 1: [Nombre]
- **Objetivo:** (Leads / Sales / Traffic / Awareness)
- **Tipo de compra:** (Auction / Reach & Frequency)
- **Budget:** (diario $ / lifetime $)
- **Evento de optimización:**
- **Bid strategy:** (Lowest Cost / Cost Cap $ / Bid Cap $)
- **Placements:** (Advantage+ / manual — especificar si es manual)
- **Programación:** (24/7 / horario específico)
- **Ad Sets:**
  1.
  2.
  3.
- **Estatus:** (activa / pausada / en prueba)
- **Performance actual:**
  - Spend mensual: $
  - Leads/conversiones: 
  - CPL: $
  - CTR (link): %
  - CPM: $
  - Frecuencia:

### Campaña 2: [Nombre]
*(Duplicar estructura)*

---

## Audiencias

### Custom Audiences Activas

| Audiencia | Fuente | Ventana | Tamaño | Uso |
|---|---|---|---|---|
| Visitantes del sitio | Pixel | 30 días | | Retargeting |
| Conversores (excluir) | Pixel | 90 días | | Exclusión |
| Customer list | CRM | N/A | | Exclusión + base lookalike |
| | | | | |

### Lookalike Audiences

| Base | % | País | Tamaño estimado | CPL | Notas |
|---|---|---|---|---|---|
| Customer list | 1% | México | | $ | |
| | 2% | | | | |

### Exclusiones Estándar (siempre aplicar en prospección)
- [ ] Clientes actuales (customer list)
- [ ] Conversores últimos 90 días (Pixel)
- [ ] Audiencia de retargeting activa

---

## Creativos — Lineamientos

- **Estilo visual aprobado:** (lifestyle / corporativo / ilustrado / UGC / testimonial / datos)
- **Paleta de colores:** (respetar Brand Kit del cliente)
- **Texto en imagen:** mínimo
- **Formato de video preferido:** (9:16 para Reels/Stories / 1:1 para Feed)
- **Duración de video ideal:** (15-30 seg Stories/Reels / 30-45 seg Feed)
- **Subtítulos en video:** sí (siempre)

### Elementos que funcionan para este cliente
1.
2.
3.

### Elementos que NO funcionan
1.
2.

### Frecuencia de refresh de creativos
Cada semanas (o cuando frecuencia > 3.5 o CTR cae > 20%).

### Creativos Top Performers (referencia)

#### Creativo 1: [Descripción]
- **Formato:**
- **Hook visual:**
- **Copy (primera línea):**
- **Headline:**
- **CTA:**
- **Performance:** CPL $ / CTR % / Frecuencia al pausar
- **¿Por qué funcionó?**

#### Creativo 2: [Descripción]
*(Duplicar)*

---

## Ad Copy — Lineamientos

- **Tono:** (profesional / conversacional / urgente / educativo)
- **Persona gramatical:** (tú / usted)
- **Propuesta de valor principal en ads:**
- **CTAs aprobados:**
  1.
  2.
  3.
- **Diferenciadores a destacar:**
  1.
  2.
  3.
- **Palabras / frases a EVITAR:**
  1.
  2.

### Restricciones de Políticas de Meta
- [ ] Categoría especial declarada: (ninguna / crédito / empleo / vivienda / político)
- [ ] Restricciones de industria:
- [ ] Rechazos frecuentes documentados:

---

## Landing Pages / Destinos

| URL | Campaña | Conv rate | Tipo |
|---|---|---|---|
| | | % | LP dedicada / home / Instant Form / WhatsApp |
| | | | |

### Instant Forms (si aplica)

| Formulario | Campaña | Tipo | Campos | Conv rate | Calidad de leads |
|---|---|---|---|---|---|
| | | More Volume / Higher Intent | | % | Alta / Media / Baja |

### Integración de Leads
- **Destino de leads:** (email / CRM / Zapier / manual)
- **Herramienta de integración:**
- **Tiempo objetivo de primer contacto:** horas
- **Último QA de integración:** (fecha)

---

## Creative Testing — Historial

| Fecha | Variable | Creativo A | Creativo B | Resultado | Aprendizaje |
|---|---|---|---|---|---|
| | (hook / formato / copy / audiencia) | | | Ganó A / B / Sin diferencia | |

---

## Reglas Automatizadas Activas

| Regla | Condición | Acción |
|---|---|---|
| Alerta CPL | CPL > objetivo × 1.5 por 3 días | Notificación |
| Frecuencia alta | Frecuencia > 3.5 en 7 días | Notificación |
| | | |

---

## Notas y Contexto

- **Relación con otros canales:** (ej: "leads de Meta requieren más nurturing que los de Google")
- **Cambios recientes en la cuenta:**
- **Problemas conocidos:**
- **Próximos pasos:**

---

*Última actualización: [fecha]*
*Actualizado por: [nombre]*
