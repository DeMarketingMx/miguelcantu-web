# Extensiones y Assets de Google Ads

## Por qué importan las extensiones
Las extensiones (ahora llamadas "assets" en Google Ads) aumentan el espacio visual del anuncio, mejoran el CTR y aportan contexto adicional sin costo extra por impresión. Impactan directamente el Ad Rank a través del "Expected Impact of Extensions".

**Regla:** activar todos los assets relevantes para el cliente. Más assets = mayor probabilidad de aparecer con el anuncio más completo.

---

## Assets obligatorios (configurar en todo cliente)

### 1. Sitelinks
**Qué son:** links adicionales que aparecen bajo el anuncio principal, cada uno con su propia URL.
**Cuántos configurar:** mínimo 4, ideal 6-8
**Specs:** título máx 25 caracteres, description opcional (2 líneas de 35 chars)
**Qué poner:**
- Páginas de servicio específicas
- "Sobre nosotros" / "Casos de éxito"
- "Contacto" / "Agendar cita"
- "Precios" (si aplica y si convierte)
- Blog o recursos (para awareness)

**Evitar:** links al home, páginas con baja relevancia, URLs rotas

---

### 2. Callouts
**Qué son:** textos cortos que destacan características o beneficios. Sin URL — solo texto.
**Cuántos configurar:** mínimo 4, ideal 8-10
**Specs:** máx 25 caracteres cada uno
**Qué poner:**
- Diferenciadores: "Atención Personalizada", "Sin Permanencia"
- Credenciales: "Certificados Google Partner", "+10 Años de Experiencia"
- Beneficios: "Reportes Mensuales", "Soporte Dedicado"
- Urgencia suave: "Cupo Limitado", "Consulta Sin Costo"

---

### 3. Structured Snippets
**Qué son:** listas de categorías o elementos bajo un encabezado predefinido de Google.
**Encabezados disponibles:** Servicios, Tipos, Marcas, Cursos, Destinos, Modelos, Barrios, Estilos, Programas, Seguros
**Specs:** mínimo 3 valores por snippet, máx 25 chars cada valor
**Qué poner según negocio:**
- Agencia marketing → Servicios: "SEO, Google Ads, Facebook Ads, Analítica Web"
- Clínica → Servicios: "Consulta General, Dermatología, Pediatría"
- Inmobiliaria → Tipos: "Casa, Departamento, Oficina, Local Comercial"

---

### 4. Call Asset (extensión de llamada)
**Qué es:** muestra el número telefónico del cliente directamente en el anuncio. En móvil, habilita click-to-call.
**Cuándo activar:** siempre que el cliente reciba y atienda llamadas como canal de venta
**Configuración importante:**
- Activar call reporting para trackear llamadas como conversiones
- Definir horario de atención (no mostrar el número cuando nadie contesta)
- Si la llamada es primaria conversión → configurar como conversión con valor

---

### 5. Lead Form Asset
**Qué es:** formulario nativo de Google Ads que aparece en el anuncio sin necesitar ir al sitio.
**Cuándo usar:**
- Cuando la landing page del cliente tiene mala tasa de conversión
- Campañas mobile-first donde la fricción del sitio es alta
- Como prueba para comparar CPL vs landing page tradicional
**Desventaja:** los leads llegan con menos intención y contexto que los que llenan el formulario del sitio. Calificar bien antes de reportar al cliente.
**Configuración:** definir campos mínimos (nombre, email, teléfono), mensaje de confirmación, y webhook o integración para que el lead llegue al CRM del cliente.

---

## Assets recomendados según caso

### 6. Image Asset
**Qué es:** imágenes que aparecen junto al texto del anuncio en ciertos formatos de Search.
**Cuándo activar:** siempre que el cliente tenga imágenes de calidad de sus productos/servicios/equipo
**Specs:** 1200x628 (horizontal), 1200x1200 (cuadrada). Mínimo 5 imágenes.
**No usar:** imágenes de stock genéricas, logos como única imagen, texto sobre imagen

---

### 7. Price Asset
**Qué es:** muestra un listado de productos/servicios con sus precios directamente en el anuncio.
**Cuándo usar:**
- E-commerce con precios públicos
- Servicios con paquetes definidos y precios claros
- Cuando el precio es un diferenciador competitivo (son más baratos que la competencia)
**Cuándo evitar:**
- Negocios B2B donde el precio depende del proyecto
- Cuando los precios cambian frecuentemente (requiere mantenimiento)

---

### 8. Promotion Asset
**Qué es:** destaca una oferta o promoción temporal con código de descuento o porcentaje de ahorro.
**Cuándo activar:** durante Hot Sale, Buen Fin, lanzamientos, o cuando el cliente tenga promo activa
**Specs:** ocasión (predefinida o personalizada), tipo de descuento, fechas de vigencia

---

### 9. Location Asset
**Qué es:** muestra la dirección física del negocio, horarios y distancia al usuario.
**Cuándo activar:** cualquier cliente con local físico que quiera visitas presenciales
**Requisito:** vincular Google Business Profile a la cuenta de Google Ads

---

### 10. Seller Ratings
**Qué es:** muestra la calificación de estrellas del negocio automáticamente (si tienen suficientes reseñas en Google).
**No se configura manualmente** — aparece automáticamente si el negocio tiene 100+ reseñas con 3.5+ estrellas.
**Qué hacer:** asegurarse de que el cliente tenga Google Business Profile activo y optimizado.

---

## Assets para PMax específicamente

PMax requiere un "asset group" con todos estos elementos. Checklist mínimo:

| Asset | Cantidad mínima | Cantidad ideal |
|---|---|---|
| Headlines cortos (30 chars) | 3 | 5 |
| Headlines largos (90 chars) | 1 | 5 |
| Descriptions (90 chars) | 2 | 5 |
| Imágenes horizontales (1200x628) | 1 | 5+ |
| Imágenes cuadradas (1200x1200) | 1 | 5+ |
| Logo (1200x1200 o 1200x300) | 1 | 2 |
| Video (YouTube) | 0 (opcional pero recomendado) | 1-3 |

**Advertencia crítica:** si no subes video, Google genera uno automáticamente con tus imágenes y es de baja calidad. Siempre proveer video aunque sea básico.

---

## Jerarquía de aplicación de assets

Los assets se pueden configurar a nivel:
1. **Cuenta** → aplica a todas las campañas
2. **Campaña** → aplica a esa campaña
3. **Ad group** → aplica solo a ese ad group

**Recomendación:** configurar sitelinks genéricos y callouts a nivel cuenta. Sitelinks específicos de campaña y lead forms a nivel campaña o ad group.
