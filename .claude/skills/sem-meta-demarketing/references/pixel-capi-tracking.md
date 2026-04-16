# Pixel, Conversions API (CAPI) y Tracking

## Por qué el tracking de Meta es más complejo que Google Ads

Desde iOS 14.5 (2021), Apple requiere permiso explícito para rastrear. La mayoría de usuarios de iPhone optan por NO ser rastreados. Resultado práctico:
- El Pixel del navegador ya no puede rastrear muchas conversiones de iOS
- Meta compensa con modelado estadístico y con la Conversions API (server-side)
- **La solución:** Pixel + CAPI + dominio verificado = mejor cobertura posible

---

## Meta Pixel

### Qué es
Código JavaScript instalado en el sitio del cliente. Envía datos de comportamiento desde el navegador (client-side) al servidor de Meta.

### Instalación via GTM (recomendado)
1. Events Manager → Conectar fuentes de datos → Web → Pixel → obtener Pixel ID
2. En GTM: tag Custom HTML → pegar código base del Pixel → trigger: All Pages
3. Para eventos específicos: tags adicionales de GA4 Event o Custom HTML
4. Publicar contenedor GTM
5. Verificar con "Meta Pixel Helper" (extensión Chrome)

### Verificar que funciona
- Instalar "Meta Pixel Helper" en Chrome → navegar al sitio → debe mostrar Pixel activo y eventos
- Events Manager → seleccionar Pixel → Test Events → ingresar URL → realizar acción → ver evento en tiempo real

---

## Eventos estándar de Meta

Usar siempre los nombres oficiales de Meta — no inventar nombres custom para los eventos principales.

### Para lead generation

| Evento | Trigger | Prioridad |
|---|---|---|
| `Lead` | Envío exitoso de formulario o Instant Form | ⭐ Primario |
| `Contact` | Click en WhatsApp, teléfono o email | ⭐ Primario |
| `CompleteRegistration` | Registro a webinar, demo, prueba gratuita | ⭐ Primario |
| `ViewContent` | Vista de página de servicio clave | Secundario |
| `InitiateCheckout` | Inicio de proceso de cotización | Secundario |

### Para ecommerce

| Evento | Trigger | Prioridad |
|---|---|---|
| `Purchase` | Transacción completada (con value dinámico) | ⭐ Primario |
| `AddToCart` | Agregar producto al carrito | Secundario |
| `InitiateCheckout` | Inicio del checkout | Secundario |
| `ViewContent` | Vista de página de producto | Secundario |

### Configurar los 8 eventos prioritarios (post-iOS 14)
Meta solo optimiza con 8 eventos por dominio. El orden determina cuál se usa en caso de conflicto.

1. Events Manager → tu Pixel → Configuración → Configuración de eventos web
2. Ordenar por prioridad — conversión principal va en #1
3. Orden recomendado para lead gen: `Lead`, `Contact`, `CompleteRegistration`, `ViewContent`, otros

---

## Conversions API (CAPI)

### Qué es
Integración server-side que envía datos directamente del servidor del cliente al servidor de Meta — sin depender del navegador, cookies ni iOS.

### Por qué importa
- Recupera conversiones que el Pixel no puede rastrear
- Mejora el Event Match Quality (EMQ)
- Mejora el algoritmo de optimización
- **Recomendado para presupuestos > $15,000 MXN/mes**

### Opciones de implementación

**Partner Integration (más fácil — empezar aquí):**
Events Manager → Configuración → Conversions API → "Configurar via integraciones de socios"
- Shopify, WooCommerce, WordPress, HubSpot, Zapier, Make
- Sin código, el partner maneja la integración

**GTM Server-Side (más técnico, más control):**
- Requiere servidor de GTM (Google Cloud o similar, tiene costo)
- Mayor precisión, requiere setup técnico

**API directa:**
- El servidor del cliente envía eventos via Graph API de Meta
- Máximo control, requiere desarrollo personalizado

### Verificar CAPI activo
Events Manager → Pixel → Descripción general → en eventos principales debe aparecer "CAPI" junto a "Browser"

---

## Event Match Quality (EMQ)

### Qué es
Score 1-10 que Meta asigna según qué tan bien puede identificar al usuario de Meta detrás de una conversión. EMQ alto = mejor atribución = mejor optimización = menor CPL.

### Objetivo: > 6.0 para el evento de conversión principal

### Cómo mejorar el EMQ

| Dato enviado | Impacto | Cómo enviarlo |
|---|---|---|
| Email (hasheado) | Alto | Capturar en formulario y enviar via CAPI |
| Teléfono (hasheado) | Alto | Capturar en formulario y enviar via CAPI |
| Nombre y apellido | Medio | Formulario + CAPI |
| IP del usuario | Medio | CAPI lo captura automáticamente |
| User Agent | Medio | CAPI automático |
| fbclid | Alto | Asegurarse de que el parámetro fbclid no se pierde en la LP |

**Nota sobre fbclid:** cuando el usuario hace clic en un anuncio de Meta, la URL incluye el parámetro `fbclid`. Si la LP tiene redirects o CMS que eliminan ese parámetro, el EMQ cae. Verificar que el fbclid llega al formulario.

---

## Verificación de dominio

### Por qué es obligatorio
Sin dominio verificado: no puedes configurar los 8 eventos prioritarios, tracking menos confiable, conversiones modeladas menos precisas.

### Cómo verificar
1. Business Manager → Configuración del negocio → Brand Safety → Dominios → Agregar
2. Ingresar dominio raíz (sin www): `ejemplo.com`
3. Elegir método de verificación:
   - **Meta-tag:** agregar `<meta>` en el `<head>` del sitio (más fácil)
   - **Archivo HTML:** subir archivo al servidor raíz
   - **DNS TXT record:** agregar registro en el administrador de DNS del dominio
4. Verificar: BM → Dominios → debe mostrar palomita verde "Verificado"

---

## Discrepancias Meta vs. GA4 — qué esperar

| Fuente de discrepancia | Explicación |
|---|---|
| View-through attribution | Meta atribuye conversiones a usuarios que vieron el anuncio pero no hicieron clic. GA4 no ve ese tráfico como venido de Meta. |
| Ventana de atribución más amplia | Meta default: 7 días clic + 1 día vista. GA4 puede ser más corto. |
| iOS sin tracking | Meta modela estadísticamente. GA4 simplemente no ve esos usuarios. |
| Diferente definición de "conversión" | Meta puede contar el evento múltiples veces si el usuario convierte varias veces. |

**Discrepancia esperada normal:** Meta puede reportar 20-50% más conversiones que GA4. En cuentas con mucho tráfico iOS puede ser mayor.

**Definir y documentar la fuente de verdad:**
- Para CPL de Meta: usar Meta Ads Manager
- Para comparar entre canales: GA4
- Para total de leads del negocio: CRM
Documentar la discrepancia conocida en el template para no tener que explicarla en cada reporte.
