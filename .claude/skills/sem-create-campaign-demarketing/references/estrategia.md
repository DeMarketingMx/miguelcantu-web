# Estrategia de Campaña — Decisiones de Fase 2

## 1. Decisión de canal

### Default: Search

Para 95% de clientes B2B de De Marketing, Search es la campaña primaria. Captura demanda con intent ya existente.

### Cuándo considerar PMax (Performance Max) como complemento

Solo SI:
- La cuenta tiene 50+ conversiones/mes ya corriendo
- Hay assets creativos (imágenes, video) de calidad
- El presupuesto total es ≥ $30k MXN/mes
- Search ya está optimizado (CPL en target, Impression Share 70%+)

**NUNCA usar PMax como única campaña en cuenta nueva.** Se convierte en caja negra.

### Cuándo considerar Display

- Remarketing visual a visitantes previos del sitio
- Cliente B2C con funnel largo
- Nunca como primera campaña

### Cuándo considerar Demand Gen

- Remarketing de alta calidad a clientes existentes (customer match)
- Audiencias similares a clientes
- Cliente con video o imágenes de calidad

---

## 2. Cantidad de campañas

| Presupuesto mensual | # Campañas recomendadas | Distribución |
|---|---|---|
| < $15k MXN | 1 | 100% a la campaña core |
| $15k - $50k MXN | 2-3 | 60% core + 25% servicio 2 + 15% nicho |
| $50k - $150k MXN | 3-5 | Split por servicio/intent |
| $150k+ MXN | 5+ | Split por servicio + geografía + branded |

### Recomendación de presupuesto (informativo, no límite rígido)

**El consultor decide el budget según el cliente.** No hay mínimo arbitrario impuesto por el skill.

Contexto útil para la conversación con el cliente:
- **Floor técnico de Google Ads:** ~$150 MXN/día. Por debajo de esto, el delivery del algoritmo es errático.
- **Umbral de aprendizaje saludable:** ~CPL objetivo × 2 por día. Por debajo, el algoritmo `MAXIMIZE_CONVERSIONS` aprende más lento y el CPL real inicial puede salir 20-80% arriba del target durante las primeras 4-8 semanas.
- **Volumen de data:** 30 conv/mes es el umbral para migrar a `TARGET_CPA`. Con budget bajo, eso puede tomar 2-4 meses en vez de 1.

**Estos son trade-offs, no reglas.** Un cliente con $5,000 MXN/mes puede arrancar perfectamente — el wizard solo le explica el impacto esperado con los números concretos y lo deja decidir.

Si dividir presupuesto entre varias campañas deja alguna muy chica (< 30-50 clics/mes proyectados), **consolidar** en menos campañas suele rendir mejor que fragmentar.

---

## 3. Estrategia de puja (bidding) por madurez de cuenta

### Etapa 1 — Cuenta nueva (0-30 conv/mes en los últimos 30 días)

**Estrategia:** `MAXIMIZE_CONVERSIONS` (sin target)

**Justificación:** el algoritmo no tiene suficiente data para aprender tCPA. Primero recolectamos conversiones a cualquier costo razonable, luego optimizamos.

**Match types permitidos:** Exact + Phrase (no Broad aún)

**Cuándo avanzar a Etapa 2:** cuando haya 30 conversiones en los últimos 30 días de forma consistente (3+ semanas seguidas).

### Etapa 2 — Cuenta en crecimiento (30-80 conv/mes)

**Estrategia:** `TARGET_CPA`

**Target inicial:** 20-30% ARRIBA del CPL objetivo real (para dar margen al algoritmo).
- Ejemplo: CPL objetivo = $500 MXN → `target_cpa` = $600-650 MXN

**Ajustes:** bajar el target 10-15% cada 2 semanas si el algoritmo está cumpliendo. Nunca más del 15% de un solo ajuste.

**Match types:** se puede incorporar Broad en keywords con buen histórico.

### Etapa 3 — Cuenta madura (80+ conv/mes)

**Estrategia:** `TARGET_CPA` agresivo, o `TARGET_ROAS` si hay valores monetarios por conversión.

**Otras opciones:** `MAXIMIZE_CONVERSION_VALUE` si todas las conversiones tienen valor asignado.

**Expansión:** PMax como complemento + nuevos canales (Demand Gen, YouTube).

---

## 4. Networks — configuración por default

Para campañas **Search de De Marketing:**

| Network | Default | Justificación |
|---|---|---|
| Google Search | ON | Es el canal principal |
| Search Partners | OFF | Tráfico de menor calidad, baja conversión B2B |
| Display Network | OFF | Solo en campañas Display dedicadas |

**Cuándo activar Search Partners:** nunca en fase inicial. Solo considerar después de Etapa 2 si el budget sobra y queremos escalar.

---

## 5. Geografía

### Geo targeting setting

**Default:** `PRESENCE_OR_INTEREST` (personas que viven O muestran interés en la zona).

Para B2B local (un despacho de MTY que solo atiende MTY), cambiar a `PRESENCE` estrictamente.

### Bid modifiers por ciudad

| Ciudad | % ajuste sugerido |
|---|---|
| Ciudad primaria del cliente (donde está) | +15% |
| Ciudades metropolitanas grandes con buen target | 0% (default) |
| Ciudades de bajo CPC pero con leads de calidad media | -10% |

Aplicar SOLO si hay 30+ conversiones para comparar. Antes, no ajustar.

---

## 6. Schedule (horario de publicación)

### Default B2B

```
Lunes a Viernes: 07:00 - 20:00
Sábados y Domingos: OFF
```

**Justificación:** los leads B2B se generan en horas laborales. Fines de semana baja calidad + mismo CPC = CPL peor.

### Cuándo activar fines de semana

- Cliente B2C
- Cliente con operación 24/7 (e-commerce, salud urgente)
- Solo después de tener 90 días de data que demuestre que convierten en fin de semana

---

## 7. Conversión principal

**CRÍTICO:** antes de lanzar cualquier campaña, validar que:

1. ✅ La conversión existe en GA4 como **Key Event**
2. ✅ Está importada en Google Ads (Tools > Conversions > Import from GA4)
3. ✅ Está marcada como **"Primary conversion action"**
4. ✅ Enhanced Conversions está activado (con parámetros hasheados en dataLayer)

**Si falta cualquiera:** detener wizard. La campaña quedaría "optimizando a nada" o a un evento equivocado → ceros resultados.

### Conversiones secundarias (observación)

Estas NO deben estar como Primary, solo como observación:
- `cta_click_contact`
- `form_submit` (separado de generate_lead)
- `faq_interaction`
- `email_click`
- `social_click`

El algoritmo optimiza solo la Primary. Las demás informan pero no dirigen.

---

## 8. Naming convention

**Formato obligatorio:** `[Cliente] - [Servicio/Producto] - [Canal]`

Ejemplos:
- ✅ `DeMkt - Core Consultoría - Search`
- ✅ `DeMkt - Google Ads Service - Search`
- ✅ `M2Energy - Paneles Solares Industriales - Search`
- ✅ `ProfitOps - CFO Outsourcing MTY - Search`
- ❌ `Campaña 1` (ambiguo)
- ❌ `Test MTY` (no identifica cliente ni servicio)

**Para ad groups:** `[Intent descriptivo]`
- ✅ `Agencia Marketing Digital MTY`
- ✅ `Consultoría B2B Alta Dirección`
- ❌ `AG 1`

**Para budgets:** `[Cliente] - [Campaña] - Daily`
- ✅ `DeMkt - Core Consultoría - Daily`

---

## Output de esta fase

Al terminar Fase 2, debe haber un documento así:

```yaml
cliente: De Marketing
customer_id: 366-587-1570
vertical: B2B Consulting Services
ticket_promedio: $30,000 MXN/mes
cpl_objetivo: $650 MXN
budget_mensual: $18,000 MXN
daily_budget: $600 MXN

estructura:
  - campaign_1:
      name: "DeMkt - Core Consultoría - Search"
      daily_budget: 360  # 60%
      bidding: MAXIMIZE_CONVERSIONS
      networks: Google Search only
      geo: [Monterrey metro, Saltillo]
      language: Spanish
  - campaign_2:
      name: "DeMkt - Google Ads Service - Search"
      daily_budget: 150  # 25%
      ...
  - campaign_3:
      name: "DeMkt - CRM Automation - Search"
      daily_budget: 90  # 15%
      ...

schedule:
  days: L-V
  hours: 07:00 - 20:00
```

Este documento se pasa a las Fases 3-8 como fuente de verdad.
