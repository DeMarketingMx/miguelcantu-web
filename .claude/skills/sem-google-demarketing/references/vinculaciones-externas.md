# Vinculaciones Externas — Google Ads

## Principio general
Las vinculaciones son el sistema nervioso de la cuenta. Sin ellas, el tracking es incompleto, el smart bidding no tiene datos para optimizar, y los reportes mienten. **Configurar antes de activar campañas, siempre.**

---

## 1. Google Analytics 4 (GA4)

### Por qué vincular
- Importar conversiones de GA4 a Google Ads (alternativa o complemento a los tags directos)
- Ver el comportamiento de los usuarios de Ads dentro del sitio (tiempo en página, páginas visitadas, rebote)
- Crear audiencias en GA4 y usarlas en Google Ads para remarketing y segmentación
- Comparar datos de sesiones/usuarios entre ambas plataformas

### Cómo vincular
1. Google Ads → Herramientas → Cuentas vinculadas → Google Analytics → Vincular
2. Seleccionar la propiedad GA4 correcta del cliente
3. Activar "Importación de datos" para audiencias
4. Activar "Auto-tagging" en Google Ads (debe estar activo para que GA4 reciba datos de Ads correctamente)

### Configuración post-vinculación
- En GA4: Admin → Eventos → marcar como conversión los eventos que quieres importar a Ads
- En Google Ads: Conversiones → Importar → Google Analytics 4 → seleccionar los eventos relevantes
- Definir cuáles serán conversiones **primarias** (las que smart bidding usará para optimizar) vs. **secundarias** (solo para reporteo)

### Verificación
- Activar una conversión de prueba (enviar formulario de prueba) y verificar que aparece tanto en GA4 como en Google Ads dentro de las 24-48 horas
- Comparar sesiones de Google Ads en GA4 vs. clics en Google Ads (no serán iguales, pero la diferencia no debería ser > 20%)

---

## 2. Google Tag Manager (GTM)

### Por qué es crítico
GTM es el intermediario entre el sitio web del cliente y todas las plataformas de tracking (Google Ads, GA4, Meta, etc.). Centraliza los tags para no depender de cambios en el código del sitio.

### Configuración mínima en GTM para Google Ads

**Tags obligatorios:**
- Google Ads Conversion Tracking tag → para cada tipo de conversión (formulario, llamada, WhatsApp)
- Google Ads Remarketing tag → para construir audiencias de visitantes

**Cómo configurar conversión de formulario:**
1. Identificar el trigger correcto: ¿hay thank you page? usar Page View trigger en esa URL
2. Si no hay thank you page: usar Form Submission trigger o un Click trigger en el botón de envío
3. Crear el tag con el Conversion ID y Conversion Label de Google Ads (se obtiene en Ads → Conversiones → detalles)
4. Publicar el contenedor de GTM y verificar con GTM Preview Mode

**Cómo verificar que funciona:**
- GTM Preview Mode → simular el evento → verificar que el tag se dispara
- Google Tag Assistant (extensión Chrome) → verificar que el tag llega a Google Ads
- Google Ads → Conversiones → el estado debe cambiar a "Grabando" dentro de 24-48 horas después de una conversión real

**Errores comunes:**
- Tag con Conversion ID incorrecto → no reporta a la cuenta correcta
- Trigger disparando en cada página en lugar de solo en la thank you page → infla las conversiones
- Contenedor GTM no publicado después de hacer cambios → los tags no están activos

---

## 3. Google Search Console

### Por qué vincular
- Ver qué búsquedas orgánicas están generando clics al sitio (complementa la estrategia de keywords de Ads)
- Identificar oportunidades: términos con buen posicionamiento orgánico donde también conviene pagar (o no)
- Detectar problemas de indexación que afecten la landing page

### Cómo vincular
1. Google Ads → Herramientas → Cuentas vinculadas → Search Console → Vincular
2. Debe ser el mismo email con acceso tanto a Google Ads como a Search Console del cliente
3. Si el cliente administra Search Console, pedirle que acepte la solicitud de vinculación

### Uso en estrategia SEM
- Revisar qué páginas del sitio tienen mejor posicionamiento orgánico → si ya rankean #1-3, puede no ser prioritario pagar por esas keywords
- Identificar términos donde el cliente aparece orgánicamente en posición 4-10 → buena oportunidad para Ads (capturar tráfico que el orgánico no alcanza)

---

## 4. Google Business Profile (para campañas locales)

### Por qué vincular
- Activa el **Location Asset** en los anuncios (muestra dirección y horarios)
- Mejora el Ad Rank para búsquedas con intent local ("cerca de mí", "[servicio] en [ciudad]")
- Las reseñas del perfil pueden aparecer como **Seller Ratings** en los anuncios

### Cómo vincular
1. Google Ads → Herramientas → Cuentas vinculadas → Google Business Profile → Vincular
2. Buscar el perfil del cliente por nombre o ID
3. Si el cliente es el dueño del perfil, necesita aprobar la solicitud

### Requisito previo
El Google Business Profile debe estar verificado y activo. Si no lo está, este es un prerequisito antes de vincular.

---

## 5. Merchant Center (para ecommerce)

### Cuándo aplica
Solo para clientes con tienda en línea que quieran campañas de Shopping o PMax con feed de productos.

### Cómo vincular
1. Merchant Center → Configuración → Cuentas vinculadas → Google Ads → agregar ID de cuenta
2. En Google Ads, aceptar la solicitud
3. Verificar que el feed de productos está activo y sin errores en Merchant Center

### Prerequisitos
- Feed de productos en Merchant Center activo (manual, Google Sheets, o integración directa con CMS como Shopify/WooCommerce)
- Certificación de sitio web en Merchant Center completada
- Sin errores críticos en el diagnóstico del feed

---

## 6. CRM (HubSpot, Salesforce, Pipedrive, etc.)

### Por qué conectar
- Importar datos de leads cerrados/calificados a Google Ads → el algoritmo aprende cuáles búsquedas y usuarios generan clientes reales, no solo leads
- Permite optimizar por **calidad de lead** en lugar de solo cantidad
- Customer Match: subir lista de clientes actuales para crear audiencias similares

### Opciones de integración

**Opción 1 — Conversión offline (recomendada para B2B):**
- Cuando un lead se cierra en el CRM, importar ese evento como "conversión offline" a Google Ads con el GCLID correspondiente
- Requiere: guardar el GCLID en el CRM desde el momento en que llega el lead (tag en el formulario que capture el GCLID del clic)
- Configurar en Google Ads: Conversiones → Importaciones de conversiones offline

**Opción 2 — Customer Match:**
- Subir lista de emails de clientes actuales a Google Ads
- Google la cruza con cuentas de Gmail/Google para crear una audiencia
- Usar para: excluir clientes actuales de campañas de adquisición, crear audiencias similares, aumentar bid para compradores previos
- Mínimo 1,000 emails válidos para que la audiencia tenga tamaño utilizable

**Opción 3 — Webhooks / Zapier:**
- Para CRMs que no tienen integración nativa con Google Ads
- Zapier puede conectar el CRM con Google Ads para importar conversiones cuando cambia el estado de un lead

---

## 7. Call Tracking

### Cuándo aplica
Cuando las llamadas telefónicas son una conversión importante para el cliente.

### Opciones

**Call Asset nativo de Google Ads:**
- Activa el número de teléfono directamente en el anuncio
- Trackea llamadas de más de X segundos (recomendado: 60 segundos mínimo para que sea una llamada real)
- Configurable en Google Ads → Assets → Call
- Sin costo adicional, pero solo trackea llamadas que vienen del anuncio, no del sitio

**Call tracking de terceros (CallRail, WhatConverts, etc.):**
- Asigna números de tracking únicos por fuente (Google Ads, orgánico, directo)
- Permite grabar llamadas y calificar la calidad del lead
- Se integra con GA4 y Google Ads vía GTM
- Recomendado cuando las llamadas son la conversión principal y la calidad del lead importa

**Configuración básica de call tracking con GTM:**
1. El proveedor de call tracking provee un script → instalar vía GTM
2. Configurar evento en GA4 cuando se produce la llamada
3. Importar evento de GA4 a Google Ads como conversión
4. Definir duración mínima de llamada para contarla como conversión

---

## Checklist de vinculaciones por cliente nuevo

| Vinculación | ¿Aplica? | Estatus | Responsable |
|---|---|---|---|
| GA4 | Siempre | 🔴 Pendiente / 🟢 Activo | |
| GTM | Siempre | 🔴 Pendiente / 🟢 Activo | |
| Search Console | Siempre | 🔴 Pendiente / 🟢 Activo | |
| Google Business Profile | Si tiene local físico | 🔴 / 🟢 | |
| Merchant Center | Solo ecommerce | 🔴 / 🟢 / N/A | |
| CRM (conversiones offline) | Si hay seguimiento de ventas | 🔴 / 🟢 / N/A | |
| Call tracking | Si las llamadas son conversión | 🔴 / 🟢 / N/A | |
