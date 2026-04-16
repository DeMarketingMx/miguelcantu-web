# Instant Forms (Lead Ads) e Integración de Leads

## Qué son los Instant Forms
Formularios nativos de Meta que aparecen dentro de la plataforma sin necesidad de salir a un sitio web externo. El usuario llena sus datos (muchos precargados desde su perfil de Meta) y envía el formulario sin fricción.

**Ventaja:** menor fricción → más volumen de leads.
**Desventaja:** el usuario nunca visita el sitio web → el lead puede ser menos calificado (no tuvo que "esforzarse" para dar sus datos).

---

## Cuándo usar Instant Forms vs. Landing Page

| Criterio | Instant Form | Landing Page |
|---|---|---|
| Objetivo principal | Volumen de leads | Calidad de leads |
| Presupuesto disponible | Budget moderado — menos CPC desperdiciado en bounce | Budget suficiente para pagar CPC + landing optimizada |
| Estado de la landing page | LP inexistente o mal optimizada | LP bien optimizada (conv rate > 3%) |
| Buyer persona | B2C o B2B con decisión rápida | B2B de ticket alto, ciclo de venta largo |
| Velocidad de respuesta del equipo | Inmediata (< 1 hora) — los leads de IG Form se enfrían rápido | Más flexible |

**Recomendación De Marketing:** usar Instant Forms como complemento o prueba, no como única estrategia. Los leads de Instant Form requieren seguimiento inmediato — si el cliente no puede responder en < 2 horas, la calidad percibida caerá más.

---

## Tipos de Instant Form

### More Volume (Más volumen)
- Formulario con mínima fricción
- Los campos de info de contacto vienen precargados del perfil de Meta
- El usuario solo debe confirmar con un toque
- **Resultado:** mayor volumen pero menor calidad de leads
- **Cuándo usar:** cuando el embudo del cliente puede manejar mayor volumen y calificar internamente

### Higher Intent (Mayor intención)
- Agrega un paso de revisión antes del envío
- El usuario debe confirmar activamente antes de enviar
- Puede agregar preguntas de calificación
- **Resultado:** menor volumen pero mayor calidad de leads
- **Cuándo usar:** cuando el equipo de ventas es pequeño y necesita leads más calificados

---

## Configuración del Instant Form

### Campos recomendados
**Mínimo para B2B servicios:**
- Nombre completo (precargado)
- Email (precargado)
- Teléfono (precargado)
- Empresa o nombre del negocio (campo adicional — no viene precargado)

**Campos de calificación adicionales (Higher Intent):**
- "¿Cuál es tu presupuesto mensual aproximado?" → dropdown con rangos
- "¿Para cuándo necesitas este servicio?" → dropdown con opciones
- "¿Tienes un sitio web activo?" → sí/no
- "¿Cuántos empleados tiene tu empresa?" → dropdown

**Regla:** cada campo adicional reduce el volumen de envíos. Elegir solo los que el equipo de ventas realmente usará para calificar. Más de 3-4 preguntas adicionales mata el volumen.

### Configuración de la pantalla de agradecimiento (Thank You Screen)
La pantalla final después de enviar el formulario. Es el último touchpoint antes de que el usuario regrese al feed.

**Incluir:**
- Mensaje de confirmación claro: "Recibimos tu solicitud, te contactaremos en menos de 24 horas"
- CTA secundario: link al sitio web, número de WhatsApp, o "Ver más sobre nosotros"
- **Evitar:** no dejar la pantalla genérica de Meta — es la oportunidad de reforzar la marca

### Política de privacidad
Meta requiere que el Instant Form incluya un link a la política de privacidad del cliente. Si el cliente no tiene una → crear una o usar una genérica.

---

## Integración de leads — que lleguen al CRM

**El peor error:** dejar los leads en Meta sin integración. El equipo de ventas tendría que descargar un CSV manualmente. Los leads se enfrían en horas.

### Opciones de integración

**1. Zapier o Make (recomendado para la mayoría de clientes):**
- Conecta Meta Lead Ads → CRM del cliente (HubSpot, Pipedrive, Kommo, Google Sheets, etc.)
- Tiempo de transferencia: < 5 minutos del envío del formulario
- Costo: Zapier desde ~$20 USD/mes / Make tiene plan gratuito limitado
- **Configuración:** Zapier → Crear Zap → Trigger: "New Lead" en Facebook Lead Ads → Action: crear contacto en el CRM

**2. CRM con integración nativa:**
- HubSpot, Salesforce, ActiveCampaign tienen integración directa con Meta Lead Ads
- En Meta Business Suite → Integraciones → buscar el CRM del cliente
- Más estable que Zapier para CRMs grandes

**3. LeadsBridge:**
- Plataforma especializada en integraciones de leads
- Buena opción si Zapier no soporta el CRM específico del cliente

**4. Webhook personalizado (requiere dev):**
- Meta envía los leads a una URL del cliente en tiempo real
- Máxima flexibilidad pero requiere desarrollo

**5. Descarga manual (solo como último recurso):**
- Meta → Ads Manager → Formularios de leads → Descargar CSV
- Solo aceptable si el volumen es muy bajo (< 5 leads/día) y el equipo responde el mismo día

### Verificar la integración
1. Enviar un lead de prueba desde el formulario (Meta tiene opción de "lead de prueba" en Events Manager)
2. Verificar que llega al CRM en < 5 minutos
3. Verificar que todos los campos se mapean correctamente (que el email llegue al campo de email, etc.)
4. Documentar la integración en el template del cliente

---

## Proceso post-lead

Definir con el cliente antes de lanzar Lead Ads:

| Paso | Acción | Responsable | Tiempo objetivo |
|---|---|---|---|
| 1 | Lead llega al CRM via integración | Automático | < 5 min |
| 2 | Notificación al equipo de ventas | CRM / email / Slack | < 5 min |
| 3 | Primer contacto (llamada o WhatsApp) | Equipo comercial del cliente | < 1-2 horas |
| 4 | Calificación del lead | Equipo comercial | Primera llamada |
| 5 | Feedback de calidad al equipo de marketing | Equipo comercial | Semanal |

**Regla crítica:** si el equipo no puede contactar el lead en menos de 2 horas, el Instant Form no es el canal correcto o el proceso comercial necesita revisión. Los leads de Meta se enfrían más rápido que los de Google (menor intent inicial).

---

## Calidad de leads — cómo medirla y mejorarla

### Métricas de calidad (del CRM, no de Meta)
- **Tasa de contactabilidad:** % de leads a los que se logró hablar (objetivo: > 60%)
- **Tasa de calificación:** % de leads contactados que son MQL (Marketing Qualified Lead)
- **Tasa de cierre:** % de leads calificados que se convirtieron en clientes

### Señales de leads de baja calidad
- Números de teléfono incorrectos o de otro país
- Emails inválidos o genéricos (ej: aaa@gmail.com)
- Nombre de empresa inexistente
- El usuario no recuerda haber llenado el formulario (señal de que el creativo/copy fue engañoso)

### Cómo mejorar la calidad de los leads
1. **Cambiar a Higher Intent** si se está usando More Volume
2. **Agregar preguntas de calificación** (presupuesto, plazo, tamaño de empresa)
3. **Ser más específico en el copy** — si el copy es muy genérico atrae leads no calificados
4. **Excluir audiencias que generan leads de baja calidad** (si hay patrón por segmento o geografía)
5. **Cambiar a Landing Page** — el usuario que navega al sitio y llena el formulario tiene más intent
6. **Ajustar el creativo** — hooks que prometen algo que el cliente no puede entregar → atraen leads que no son el perfil correcto
