# Tipos de Campaña y Objetivos — Meta Ads

## Mapa de decisión rápida

| Objetivo del cliente | Primera opción | Segunda opción | Evitar |
|---|---|---|---|
| Leads B2B | Leads (Higher Intent Form o sitio web) | Conversions (hacia LP) | Awareness como única campaña |
| Leads B2C | Conversions (hacia LP) | Leads (Instant Form) | Traffic sin evento de conversión |
| Ventas ecommerce | Sales (catalog / ASC) | Conversions | Traffic sin pixel activo |
| Reconocimiento / branding | Awareness (Reach & Frequency) | Engagement | Conversions (caro para awareness) |
| Retargeting | Conversions o Leads | Sales (si ecommerce) | — |
| Tráfico a contenido | Traffic (Landing Page Views) | Engagement | — |

---

## Objetivos de campaña

### Awareness
**Cuándo usar:** marca nueva, categoría sin demanda existente, B2C con ciclo de compra largo, o como complemento de la estrategia de funnel (top of funnel).

**Optimización:** alcance (Reach) o impresiones — Meta no optimiza por conversiones.

**Tipo de compra recomendado para awareness:** Reach & Frequency para control predecible de cobertura y frecuencia. Auction si necesitas flexibilidad.

**Métricas a reportar:** alcance único, frecuencia, CPM, Thumbstop Rate (% que detienen el scroll en los primeros 3 segundos).

**Cuándo NO usar:** cuando el cliente quiere leads directos con presupuesto limitado. Awareness consume budget sin conversiones directas. No mezclar objetivos en la misma campaña.

---

### Traffic
**Cuándo usar:** llevar visitas al sitio cuando no hay conversiones configuradas aún, o para contenido editorial donde el objetivo es la visita.

**Optimización:** Link Clicks o Landing Page Views (LPV es más calificado — Meta solo cuenta cuando la página realmente cargó).

**Problema estructural:** Meta optimiza para clics baratos, no para usuarios que convierten. El tráfico de campañas de Traffic tiene peor calidad de lead que el de Conversions.

**Cuándo usar sobre Conversions:** cuando hay < 50 conversiones/mes y el algoritmo no tiene datos suficientes para optimizar. En ese caso, usar LPV como proxy.

---

### Engagement
**Cuándo usar:** crecer comunidad, retargeting de personas que interactuaron con la página.

**Uso estratégico como audiencia:** crear Custom Audience de "personas que interactuaron con la página en los últimos 60-90 días" → estas tienen afinidad con la marca → retargeting de mayor calidad que solo visitantes web.

**No usar para lead gen directo.** Like no es lead.

---

### Leads ⭐
**La opción más usada en De Marketing para lead generation.**

Permite dos destinos:
- **Instant Form (Lead Ad):** formulario nativo de Meta, sin salir de la app
- **Sitio web:** lleva al usuario a la landing page del cliente

**Cuándo usar Instant Form:**
- LP del cliente convierte mal o no existe
- Tráfico principalmente móvil (más fácil llenar en la app que en un sitio)
- El cliente tiene proceso de calificación sólido (los leads de Instant Form son más fríos)
- Quieres volumen alto de leads para nutrir

**Cuándo usar destino sitio web:**
- La LP convierte bien (> 3-5%)
- El producto/servicio requiere que el usuario entienda la propuesta antes de dejar sus datos
- Leads de mayor intención (el esfuerzo de visitar el sitio filtra)

**Tipos de Instant Form:**

| Tipo | Característica | Cuándo usar |
|---|---|---|
| **More Volume** | Mínima fricción, pre-llenado, sin confirmación | Cuando el cliente puede manejar volumen alto y calificarlo |
| **Higher Intent** | Agrega paso de revisión antes de enviar | B2B con tickets altos, cuando la calidad del lead es crítica |

**Configuración de Instant Form — campos recomendados:**
- Nombre completo (pre-llenado)
- Email (pre-llenado — idealmente el personal, no el corporativo)
- Teléfono (pre-llenado)
- Empresa (manual — filtra leads sin empresa)
- 1-2 preguntas de calificación custom (Higher Intent) — ej: "¿Cuántos empleados tiene su empresa?"
- Política de privacidad del cliente → obligatorio incluirla

**Integración de leads de Instant Form:**
Sin integración, el cliente descarga los leads manualmente desde Ads Manager — muy ineficiente. Configurar:
- Zapier o Make → CRM del cliente (Kommo, HubSpot, Pipedrive)
- LeadsBridge (especialista en integraciones de Meta)
- Nativo si el CRM tiene integración directa con Meta

---

### Conversions
Optimiza para que el usuario complete un evento de conversión en el sitio web del cliente.

**Cuándo usar sobre Leads:**
- La LP del cliente convierte bien
- Quieres mayor intención (el usuario visitó el sitio y tomó la acción)
- El negocio puede esperar 7-14 días de Learning Phase

**Requisito:** mínimo 50 eventos de optimización por semana para que el algoritmo aprenda eficientemente. Si no se alcanza, usar Traffic (LPV) como paso previo.

---

### Sales (ecommerce)
Para tiendas en línea con catálogo de productos en Commerce Manager.

**Dynamic Product Ads (DPA):** Meta muestra automáticamente los productos más relevantes para cada usuario.
- Prospección DPA: muestra productos del catálogo a audiencias nuevas
- Retargeting DPA: muestra el producto exacto que el usuario vio, agregó al carrito, o no compró

**Requisitos:**
- Catálogo activo en Commerce Manager
- Pixel con eventos `ViewContent`, `AddToCart`, `Purchase` activos
- Inventario actualizado en el catálogo (mínimo diariamente)

**Advantage+ Shopping Campaigns (ASC):**
La campaña más automatizada de Meta para ecommerce. Meta decide audiencia, placements y creativos.

Usar cuando: historial > 50 compras/mes, buen catálogo de assets creativos, cuenta madura.
No usar cuando: cuenta nueva, presupuesto bajo, control granular necesario.

---

## Tipos de compra: Auction vs. Reach & Frequency

### Auction (el default)
- El budget compite en subasta en tiempo real
- Flexible: se puede pausar, editar, cambiar budget en cualquier momento
- Entrega variable (no predecible día a día)
- **Usar para:** campañas de conversión, leads, retargeting, la mayoría de casos

### Reach & Frequency
- Compras el inventario con anticipación a CPM fijo
- Control exacto de cuántas personas alcanzas y con qué frecuencia
- No se puede modificar una vez activado
- Requiere audiencia > 200,000 personas
- **Usar para:** campañas de awareness con cobertura controlada, lanzamientos de producto, eventos con fecha fija

---

## Advantage+ Placements vs. Placements manuales

### Advantage+ Placements (recomendado por default)
Meta distribuye el budget entre todos los placements según rendimiento en tiempo real.

**Ventaja:** el algoritmo encuentra los mejores placements dinámicamente, incluyendo los que no habrías elegido manualmente.

### Placements manuales — cuándo usarlos
- Solo tienes creativos verticales (9:16) → excluir Desktop Feed
- Audience Network genera leads de muy baja calidad para este cliente específico → excluir
- Categorías especiales o restricciones de industria
- Campañas de Stories/Reels específicamente

### Placements por objetivo

| Objetivo | Placements prioritarios |
|---|---|
| Awareness / Branding | Instagram Reels + Stories, Facebook Feed |
| Lead gen | Facebook Feed, Instagram Feed, Instagram Stories, Reels |
| Ecommerce | Facebook Feed, Instagram Feed, Instagram Shopping |
| Retargeting | Facebook Feed + Instagram Feed |

---

## Estructura recomendada por tipo de cliente

**B2B servicios:**
```
Campaña 1 — Prospección
  Objetivo: Leads (Higher Intent Form o sitio web)
  Ad Set 1: Advantage+ Audience con señales de intereses B2B
  Ad Set 2: Lookalike 1% de conversores (cuando haya suficientes)
  Creativos: 3-5 variaciones (imagen + video + carrusel)

Campaña 2 — Retargeting
  Objetivo: Leads o Conversions
  Ad Set 1: Visitantes web 30 días (excluir conversores)
  Ad Set 2: Engagement IG/FB 60 días
  Creativos: diferentes a prospección (testimoniales, casos de éxito, urgencia)
```

**B2C servicios locales:**
```
Campaña 1 — Prospección
  Geo: ciudad/radio específico
  Advantage+ Audience con intereses relevantes
  Budget suficiente para ≥ 50 eventos/semana

Campaña 2 — Retargeting
  Visitantes web + engagement
```

**Ecommerce:**
```
Campaña 1 — Prospección: Sales (ASC o manual con catalog)
Campaña 2 — Retargeting: Sales DPA (ViewContent + AddToCart)
Campaña 3 (opc): Awareness top of funnel para nuevas audiencias
```

**Presupuesto < $10,000 MXN/mes:**
Solo una campaña, máximo 2 ad sets. No fragmentar. Dejar que el algoritmo trabaje con suficiente presupuesto por ad set (mínimo $150-200 MXN/día por ad set).
