---
name: web-sections-catalog
description: "Catalogo exhaustivo de secciones web por tipo de pagina. Guia que contenido va en cada seccion y por que. TRIGGER when: user plans page structure, asks what sections to include, builds new page, discusses page content, mentions secciones, estructura de pagina, que debe tener la pagina de, what sections should, page layout planning."
user-invocable: true
argument-hint: "[page-type]"
---

# Web Sections Catalog / Catalogo de Secciones Web

Referencia exhaustiva para planificar la estructura de cualquier pagina web B2B. Orientado a empresas de consultoria, industriales y de servicios. Stack: Next.js + Tailwind CSS.

Cuando el usuario pregunte que secciones debe tener una pagina, usa este catalogo como fuente de verdad. Adapta las recomendaciones al tipo de empresa y pagina especifica.

---

## 1. Section Types Master List / Lista Maestra de Tipos de Seccion

### 1.1 Hero

- **Nombre ES:** Hero / Banner Principal
- **Descripcion:** La primera seccion visible. Comunica la propuesta de valor principal en segundos. Es la primera impresion del sitio y debe responder "que haces, para quien, y por que importa". Debe tener un CTA claro.
- **Contenido requerido:**
  - Headline principal (max 8 palabras)
  - Subheadline / descripcion (max 20 palabras)
  - Texto del CTA primario (ej. "Solicita una Cotizacion")
  - Texto del CTA secundario (opcional, ej. "Conoce Nuestros Servicios")
  - Imagen de fondo o ilustracion/video de fondo
- **Layout variants:**
  1. **Split 50/50** -- Texto a la izquierda, imagen/video a la derecha. Limpio y profesional.
  2. **Full-width background** -- Imagen o video de fondo con overlay oscuro y texto centrado encima.
  3. **Asymmetric** -- Texto ocupa 60%, imagen 40% con forma geometrica o recorte diagonal.
- **Best used on:** Homepage, Landing Page, Service Detail, About

---

### 1.2 Social Proof / Logo Bar

- **Nombre ES:** Barra de Logos / Prueba Social
- **Descripcion:** Tira horizontal de logos de clientes, alianzas o medios que han mencionado la empresa. Genera confianza inmediata sin requerir que el visitante lea nada. Funciona de forma visual y subconsciente.
- **Contenido requerido:**
  - 5-12 logos de clientes o partners (formato SVG o PNG transparente)
  - Titulo opcional (ej. "Empresas que confian en nosotros", "Trusted by")
- **Layout variants:**
  1. **Scroll infinito** -- Logos en carrusel automatico horizontal. Ideal cuando hay 8+ logos.
  2. **Grid estatico** -- Logos en fila(s) sin movimiento. Limpio y minimalista.
  3. **Con contexto** -- Logos con un pequeno texto arriba tipo "Mas de 50 empresas confian en nosotros".
- **Best used on:** Homepage (justo debajo del Hero), Landing Page, About, Service Detail

---

### 1.3 Stats / Key Numbers

- **Nombre ES:** Estadisticas / Numeros Clave
- **Descripcion:** 3-5 metricas que demuestran experiencia, escala o resultados. Los numeros son procesados rapido por el cerebro y generan credibilidad cuantificable. Ideal para empresas que pueden respaldar con datos.
- **Contenido requerido:**
  - 3-5 metricas con numero + etiqueta (ej. "150+ Proyectos Completados", "15 Anios de Experiencia")
  - Icono por metrica (opcional)
- **Layout variants:**
  1. **Counter row** -- Numeros en fila horizontal con animacion de conteo al hacer scroll.
  2. **Cards** -- Cada stat en una card con icono, numero grande y descripcion.
  3. **Background accent** -- Fondo de color de marca con stats en blanco. Rompe el patron visual.
- **Best used on:** Homepage, About, Landing Page, Service Detail

---

### 1.4 Services Grid

- **Nombre ES:** Grid de Servicios
- **Descripcion:** Vista general de todos los servicios en formato de tarjetas. Permite al visitante escanear rapidamente la oferta completa. Cada tarjeta debe enlazar a la pagina de servicio individual.
- **Contenido requerido:**
  - Nombre de cada servicio
  - Descripcion corta (1-2 oraciones por servicio)
  - Icono o imagen por servicio
  - Link a la pagina de detalle de cada servicio
- **Layout variants:**
  1. **Grid 3 columnas** -- 3 cards por fila. Balanceado y limpio para 6-9 servicios.
  2. **Grid 2 columnas con iconos grandes** -- Mas espacio para descripcion. Bueno para 4-6 servicios.
  3. **Lista con iconos** -- Formato vertical, icono a la izquierda, texto a la derecha. Bueno para 8+ servicios.
- **Best used on:** Homepage, Services Hub

---

### 1.5 Services Detailed

- **Nombre ES:** Servicios Detallados
- **Descripcion:** Seccion que describe un servicio con mas profundidad. Incluye beneficios, proceso, y resultado esperado. Usa mas espacio vertical que el grid y permite expandir cada servicio.
- **Contenido requerido:**
  - Nombre del servicio
  - Descripcion extendida (2-4 parrafos)
  - Lista de beneficios o caracteristicas (bullet points)
  - Imagen representativa del servicio
  - CTA especifico (ej. "Cotiza este servicio")
- **Layout variants:**
  1. **Alternating split** -- Imagen izquierda / texto derecha, luego se alterna. Ritmo visual.
  2. **Tabs o acordeon** -- Un servicio visible, los demas colapsados. Ahorra espacio vertical.
  3. **Cards expandibles** -- Grid que al hacer click expande el detalle sin cambiar de pagina.
- **Best used on:** Service Detail, Services Hub, Landing Page

---

### 1.6 About / Why Us

- **Nombre ES:** Sobre Nosotros / Por Que Elegirnos
- **Descripcion:** Seccion que humaniza la empresa y explica su diferenciador. Responde "por que deberia elegirte a ti en lugar de la competencia". Puede incluir historia breve, valores, o enfoque unico.
- **Contenido requerido:**
  - Titulo de seccion
  - Texto narrativo (2-3 parrafos)
  - 3-4 razones/diferenciadores con titulo + descripcion corta
  - Imagen del equipo, oficina o fundador
  - CTA (ej. "Conoce Nuestra Historia")
- **Layout variants:**
  1. **Split image + text** -- Foto a un lado, texto al otro. Clasico y efectivo.
  2. **Story format** -- Narrativa centrada con imagen de fondo sutil.
  3. **Pillars** -- 3-4 columnas con icono + titulo + texto para cada diferenciador.
- **Best used on:** Homepage, About, Landing Page

---

### 1.7 Team

- **Nombre ES:** Equipo
- **Descripcion:** Muestra los miembros clave del equipo con foto y cargo. Humaniza la empresa y genera confianza. En B2B es especialmente importante porque el cliente quiere saber con quien va a trabajar.
- **Contenido requerido:**
  - Nombre completo de cada miembro
  - Cargo / Puesto
  - Foto profesional (cuadrada o circular)
  - Bio corta (1-2 oraciones, opcional)
  - Links a LinkedIn (opcional)
- **Layout variants:**
  1. **Grid de fotos** -- 3-4 columnas, foto arriba, nombre y cargo abajo.
  2. **Carrusel** -- Scroll horizontal para equipos grandes (8+).
  3. **Featured + grid** -- Fundador/CEO destacado arriba, resto en grid debajo.
- **Best used on:** About, Team (standalone), Homepage (version reducida)

---

### 1.8 Testimonials

- **Nombre ES:** Testimonios
- **Descripcion:** Citas textuales de clientes satisfechos. La prueba social mas poderosa. Idealmente incluyen nombre, cargo, empresa y foto. Funcionan mejor despues de mostrar servicios o resultados (prueba despues de la afirmacion).
- **Contenido requerido:**
  - Cita textual del cliente (2-4 oraciones)
  - Nombre completo del cliente
  - Cargo / Puesto
  - Nombre de la empresa
  - Foto del cliente (opcional pero recomendado)
  - Logo de la empresa del cliente (opcional)
  - Rating/estrellas (opcional)
- **Layout variants:**
  1. **Carrusel de cards** -- Una card visible con flechas para navegar. Ahorra espacio.
  2. **Grid 2-3 columnas** -- Todos los testimonios visibles. Mejor si hay 3-6.
  3. **Testimonio destacado** -- Una cita grande y prominente, con cards menores abajo.
- **Best used on:** Homepage, Service Detail, Landing Page, About

---

### 1.9 Case Studies / Portfolio

- **Nombre ES:** Casos de Exito / Portafolio
- **Descripcion:** Muestra proyectos realizados con resultados concretos. Es la prueba definitiva de que la empresa puede entregar lo que promete. Cada caso debe tener resultado medible cuando sea posible.
- **Contenido requerido:**
  - Titulo del proyecto / nombre del cliente
  - Descripcion breve del reto y solucion
  - Resultados clave (metricas)
  - Imagen o screenshot del proyecto
  - Link a caso de estudio completo
  - Industria / categoria (para filtros)
- **Layout variants:**
  1. **Grid con hover** -- Imagenes en grid, info aparece al hover.
  2. **Cards con preview** -- Imagen + titulo + descripcion corta + CTA "Ver caso".
  3. **Featured slider** -- Caso destacado grande arriba, thumbnails abajo.
- **Best used on:** Homepage, Case Studies, Service Detail, Landing Page

---

### 1.10 Process / How It Works

- **Nombre ES:** Proceso / Como Funciona
- **Descripcion:** Explica paso a paso como es trabajar con la empresa. Reduce incertidumbre y ansiedad del prospect. El cliente quiere saber que esperar antes de contactar. Generalmente 3-6 pasos.
- **Contenido requerido:**
  - 3-6 pasos con numero, titulo y descripcion
  - Icono por paso (opcional)
  - Resultado final / output esperado
- **Layout variants:**
  1. **Timeline horizontal** -- Pasos en linea horizontal con conectores.
  2. **Timeline vertical** -- Pasos de arriba a abajo con linea conectora. Mejor para 5+ pasos.
  3. **Cards numeradas** -- Cards con numero grande, titulo y texto. Sin linea conectora.
- **Best used on:** Homepage, Service Detail, About, Landing Page

---

### 1.11 FAQ Accordion

- **Nombre ES:** Preguntas Frecuentes (Acordeon)
- **Descripcion:** Lista de preguntas y respuestas colapsables. Resuelve objeciones comunes y reduce carga al equipo de ventas. Tambien beneficia SEO (puede aparecer como rich snippet). Coloca las preguntas mas importantes primero.
- **Contenido requerido:**
  - 5-10 preguntas con sus respuestas
  - Agrupacion por tema (opcional, si hay 10+)
- **Layout variants:**
  1. **Acordeon simple** -- Preguntas que se expanden al click. Estandar y limpio.
  2. **Split** -- Preguntas a la izquierda, respuesta expandida a la derecha.
  3. **Con categorias** -- Tabs o filtros arriba para agrupar FAQs por tema.
- **Best used on:** FAQ (standalone), Service Detail, Pricing, Landing Page, Contact

---

### 1.12 Blog Preview

- **Nombre ES:** Preview del Blog / Articulos Recientes
- **Descripcion:** Muestra los 3 articulos mas recientes del blog. Demuestra autoridad, actividad y conocimiento del tema. Tambien mejora SEO al generar links internos.
- **Contenido requerido:**
  - 3 posts recientes con: titulo, excerpt, imagen, fecha, categoria
  - Link a la pagina completa del blog
- **Layout variants:**
  1. **Grid 3 columnas** -- 3 cards en fila. Limpio y estandar.
  2. **Featured + 2** -- Un post grande a la izquierda, 2 mas pequenos a la derecha.
  3. **Lista horizontal** -- Cards en scroll horizontal (bueno para mobile-first).
- **Best used on:** Homepage, About, Service Detail

---

### 1.13 CTA Banner

- **Nombre ES:** Banner de Llamada a la Accion
- **Descripcion:** Franja horizontal con fondo de color de marca y un CTA prominente. Rompe el flujo de la pagina y recuerda al visitante la accion que queremos que tome. Simple y directo.
- **Contenido requerido:**
  - Headline corto (ej. "Listo para transformar tu negocio?")
  - Texto del boton CTA
  - Subtexto opcional (1 oracion)
- **Layout variants:**
  1. **Full-width color** -- Fondo solido de color de marca con texto centrado y boton.
  2. **Con imagen** -- Imagen de fondo con overlay y texto.
  3. **Asimetrico** -- Texto a un lado, boton al otro.
- **Best used on:** Todas las paginas (mid-page y/o end-page)

---

### 1.14 CTA Section

- **Nombre ES:** Seccion de Llamada a la Accion
- **Descripcion:** Seccion mas elaborada que el banner. Incluye mas contexto sobre por que actuar ahora. Puede incluir beneficios resumidos, garantia, o urgencia. Usualmente la seccion final antes del footer.
- **Contenido requerido:**
  - Headline principal
  - Subheadline / parrafo de soporte (2-3 oraciones)
  - CTA primario (boton)
  - CTA secundario (link o boton ghost, opcional)
  - Elementos de confianza (ej. "Sin compromiso", "Respuesta en 24h")
- **Layout variants:**
  1. **Centered stack** -- Todo centrado verticalmente. Headline, texto, boton.
  2. **Split con imagen** -- Texto a un lado, imagen o ilustracion al otro.
  3. **Con testimonial** -- CTA acompaniado de una cita de cliente para reforzar.
- **Best used on:** Homepage, Service Detail, Landing Page, About, Contact

---

### 1.15 Newsletter

- **Nombre ES:** Suscripcion a Newsletter
- **Descripcion:** Formulario simple para capturar email. Ofrece contenido de valor a cambio (ej. tips, guias, tendencias del sector). Construye base de datos para email marketing.
- **Contenido requerido:**
  - Titulo (ej. "Recibe insights de la industria cada semana")
  - Descripcion breve del valor que recibiran
  - Campo de email
  - Texto del boton (ej. "Suscribirse")
  - Nota de privacidad (link a politica)
- **Layout variants:**
  1. **Inline** -- Dentro de una seccion existente, campo de email + boton en linea.
  2. **Card centrada** -- Card con fondo distinto, centrada en la pagina.
  3. **Footer integrado** -- Dentro del footer como parte del layout.
- **Best used on:** Blog Listing, Blog Post, Homepage, Footer (global)

---

### 1.16 Pricing / Plans

- **Nombre ES:** Precios / Planes
- **Descripcion:** Tabla o cards comparando planes, paquetes o niveles de servicio. Importante en B2B cuando hay paquetes definidos. Si los precios son custom, usar "Cotiza" como CTA en lugar de precio fijo.
- **Contenido requerido:**
  - Nombre de cada plan/paquete
  - Precio o indicador (ej. "Desde $X", "Personalizado")
  - Lista de features incluidas por plan
  - CTA por plan (ej. "Elegir Plan", "Cotizar")
  - Plan recomendado/destacado (opcional)
  - Toggle mensual/anual (opcional)
- **Layout variants:**
  1. **Cards 3 columnas** -- 3 cards lado a lado con el plan recomendado mas grande o destacado.
  2. **Tabla comparativa** -- Tabla con checkmarks para cada feature por plan.
  3. **Acordeon / tabs** -- Un plan visible a la vez. Util en mobile.
- **Best used on:** Pricing, Landing Page, Service Detail

---

### 1.17 Comparison Table

- **Nombre ES:** Tabla Comparativa
- **Descripcion:** Compara tu solucion vs competidores o vs no hacer nada. Muestra claramente por que tu opcion es mejor. Muy efectiva en landing pages para prospects que estan evaluando opciones.
- **Contenido requerido:**
  - Columnas: tu solucion vs alternativa(s)
  - Filas: criterios de comparacion (5-10)
  - Checkmarks, X marks, o valores por celda
  - Titulo de seccion
- **Layout variants:**
  1. **Tabla clasica** -- Filas y columnas con checkmarks/X. Tu columna destacada.
  2. **Cards lado a lado** -- Dos cards comparando "Con nosotros" vs "Sin nosotros".
  3. **Before/After inline** -- Formato de dos listas lado a lado.
- **Best used on:** Landing Page, Pricing, Service Detail

---

### 1.18 Locations / Offices

- **Nombre ES:** Ubicaciones / Oficinas
- **Descripcion:** Muestra las sedes fisicas de la empresa. Importante para empresas con presencia regional o que necesitan transmitir accesibilidad geografica.
- **Contenido requerido:**
  - Nombre de cada ubicacion
  - Direccion completa
  - Telefono y/o email por ubicacion
  - Horario de atencion
  - Coordenadas para mapa (opcional)
  - Foto de la oficina (opcional)
- **Layout variants:**
  1. **Cards + mapa** -- Cards de ubicaciones a la izquierda, mapa interactivo a la derecha.
  2. **Grid de cards** -- Cards con foto, direccion y contacto.
  3. **Mapa full-width** -- Mapa grande con pins, detalle al hacer click en cada pin.
- **Best used on:** Contact, About, Footer (version simplificada)

---

### 1.19 Timeline / History

- **Nombre ES:** Linea de Tiempo / Historia
- **Descripcion:** Cronologia de la empresa mostrando hitos importantes. Genera credibilidad al demostrar trayectoria. Especialmente valiosa para empresas con 10+ anios de historia.
- **Contenido requerido:**
  - Anio por cada hito
  - Titulo del hito
  - Descripcion breve (1-2 oraciones)
  - Imagen por hito (opcional)
- **Layout variants:**
  1. **Timeline vertical** -- Linea central con hitos alternando izquierda/derecha.
  2. **Timeline horizontal** -- Scroll horizontal con puntos en una linea.
  3. **Cards por decada** -- Agrupacion por periodos con cards dentro de cada uno.
- **Best used on:** About, Homepage (version resumida)

---

### 1.20 Values / Mission / Vision

- **Nombre ES:** Valores / Mision / Vision
- **Descripcion:** Comunica los principios fundamentales de la empresa. En B2B importa porque el cliente evalua alineacion de valores antes de establecer relaciones de largo plazo.
- **Contenido requerido:**
  - Mision (1 oracion clara)
  - Vision (1 oracion clara)
  - 3-6 valores con titulo y descripcion
  - Icono por valor (opcional)
- **Layout variants:**
  1. **Tres columnas** -- Mision, Vision, Valores en columnas separadas.
  2. **Valores en grid** -- Mision/Vision arriba como texto destacado, valores en grid abajo.
  3. **Cards con icono** -- Cada valor en su propia card con icono y texto.
- **Best used on:** About, Careers, Homepage (version resumida)

---

### 1.21 Awards / Certifications

- **Nombre ES:** Premios / Certificaciones
- **Descripcion:** Muestra reconocimientos, certificaciones industriales, o membresías. Genera credibilidad institucional. Muy relevante en industrias reguladas o donde las certificaciones son decisivas (ISO, STPS, etc.).
- **Contenido requerido:**
  - Logo/badge de cada certificacion o premio
  - Nombre del premio/certificacion
  - Anio de obtencion (opcional)
  - Descripcion breve (opcional)
- **Layout variants:**
  1. **Logo bar** -- Similar a social proof, fila de badges/logos.
  2. **Cards con detalle** -- Card por certificacion con logo, nombre y descripcion.
  3. **Showcase** -- Una certificacion destacada con contexto, resto en grid.
- **Best used on:** About, Homepage, Service Detail, Footer (badges)

---

### 1.22 Partners / Integrations

- **Nombre ES:** Socios / Integraciones
- **Descripcion:** Muestra alianzas estrategicas, partners tecnologicos, o integraciones disponibles. En B2B, las alianzas validan capacidad tecnica y amplian confianza.
- **Contenido requerido:**
  - Logo de cada partner
  - Nombre del partner
  - Tipo de relacion (ej. "Partner Certificado", "Integración Nativa")
  - Link a pagina del partner (opcional)
- **Layout variants:**
  1. **Logo grid** -- Grid de logos con hover que muestra nombre/tipo.
  2. **Cards** -- Card por partner con logo, nombre y descripcion de la alianza.
  3. **Categorized** -- Partners agrupados por tipo (tecnologicos, comerciales, etc.).
- **Best used on:** Homepage, About, Service Detail

---

### 1.23 Video / Demo

- **Nombre ES:** Video / Demo
- **Descripcion:** Seccion con video embebido (YouTube, Vimeo o autohosted). Un video bien hecho puede comunicar en 2 minutos lo que toma 10 paginas de texto. Ideal para demos de producto, tours de instalaciones, o mensaje del CEO.
- **Contenido requerido:**
  - Video (URL de YouTube/Vimeo o archivo)
  - Titulo de seccion
  - Descripcion breve (1-2 oraciones)
  - Thumbnail personalizado (recomendado)
- **Layout variants:**
  1. **Centered** -- Video centrado con titulo y descripcion arriba.
  2. **Split** -- Video a un lado, texto descriptivo al otro.
  3. **Full-width** -- Video con ancho completo, titulo superpuesto o debajo.
- **Best used on:** Homepage, About, Service Detail, Landing Page

---

### 1.24 Downloads / Resources

- **Nombre ES:** Descargas / Recursos
- **Descripcion:** Seccion con materiales descargables: fichas tecnicas, whitepapers, guias, catalogos. En B2B industrial es fundamental tener fichas tecnicas accesibles. Puede requerir email a cambio (lead magnet).
- **Contenido requerido:**
  - Nombre del recurso
  - Descripcion breve
  - Tipo de archivo y tamano
  - Icono de tipo de archivo (PDF, XLSX, etc.)
  - Link de descarga o formulario de captura
- **Layout variants:**
  1. **Lista** -- Lista vertical con icono, nombre, descripcion y boton de descarga.
  2. **Cards** -- Card por recurso con preview/thumbnail.
  3. **Categorized tabs** -- Recursos agrupados por tipo o tema con tabs de navegacion.
- **Best used on:** Service Detail, Resources (standalone), Landing Page (como lead magnet)

---

### 1.25 Contact Form

- **Nombre ES:** Formulario de Contacto
- **Descripcion:** Formulario para que el visitante envie un mensaje o solicite informacion. Es el principal punto de conversion en sitios B2B. Debe ser corto (5-7 campos max) para no desalentar al usuario.
- **Contenido requerido:**
  - Campos: Nombre, Email, Telefono (opcional), Empresa (opcional), Mensaje
  - Texto del boton de envio
  - Mensaje de confirmacion post-envio
  - Nota de privacidad
  - Opcion de asunto o tipo de consulta (dropdown, opcional)
- **Layout variants:**
  1. **Split** -- Formulario a un lado, info de contacto al otro. El mas comun y efectivo.
  2. **Centrado** -- Formulario centrado con ancho limitado. Simple y directo.
  3. **Multi-step** -- Formulario en pasos (paso 1: datos, paso 2: detalle). Para formularios complejos.
- **Best used on:** Contact, Landing Page, Service Detail (version simplificada)

---

### 1.26 Contact Info

- **Nombre ES:** Informacion de Contacto
- **Descripcion:** Datos de contacto de la empresa: telefono, email, direccion, horario. Complementa al formulario. Algunos clientes prefieren llamar directamente.
- **Contenido requerido:**
  - Telefono(s)
  - Email(s)
  - Direccion fisica
  - Horario de atencion
  - Links a redes sociales
- **Layout variants:**
  1. **Sidebar** -- Columna lateral junto al formulario.
  2. **Cards por tipo** -- Card para telefono, card para email, card para direccion.
  3. **Inline con iconos** -- Lista horizontal o vertical con iconos de contacto.
- **Best used on:** Contact, Footer (global)

---

### 1.27 Map

- **Nombre ES:** Mapa
- **Descripcion:** Mapa embebido (Google Maps o Mapbox) mostrando la ubicacion de la empresa. Da confianza al mostrar que hay un lugar fisico real. Ayuda a clientes que quieren visitar la oficina.
- **Contenido requerido:**
  - Coordenadas o direccion para el pin
  - Zoom level
  - Estilo del mapa (puede personalizarse para coincidir con la marca)
- **Layout variants:**
  1. **Full-width** -- Mapa en ancho completo debajo de la info de contacto.
  2. **Inline con info** -- Mapa a un lado, datos de contacto al otro.
  3. **Background** -- Mapa como fondo con card de contacto superpuesta.
- **Best used on:** Contact, Locations

---

### 1.28 Breadcrumbs

- **Nombre ES:** Migas de Pan / Breadcrumbs
- **Descripcion:** Navegacion contextual que muestra la jerarquia de la pagina actual. Mejora UX en sitios con muchos niveles y beneficia SEO (rich snippets). No es una seccion visual sino un componente funcional.
- **Contenido requerido:**
  - Generado automaticamente basado en la estructura del sitio
  - Separador (> o /)
- **Layout variants:**
  1. **Text simple** -- Texto pequeno arriba del contenido: Home > Servicios > Consultoria.
  2. **Con icono home** -- Icono de casa para Home, texto para el resto.
  3. **Background sutil** -- En una franja con fondo gris claro para diferenciarse.
- **Best used on:** Service Detail, Blog Post, Individual Case Study, todas las paginas internas

---

### 1.29 Page Header (Internal Pages)

- **Nombre ES:** Encabezado de Pagina Interna
- **Descripcion:** Hero simplificado para paginas internas (no Homepage). Titulo de la pagina, descripcion corta, y opcionalmente breadcrumbs. Menos dramatico que el Hero principal pero establece contexto.
- **Contenido requerido:**
  - Titulo de la pagina
  - Descripcion corta (1 oracion)
  - Breadcrumbs (opcional)
  - Imagen de fondo (opcional, puede ser patron o color solido)
- **Layout variants:**
  1. **Centrado minimal** -- Titulo centrado con descripcion, fondo de color solido.
  2. **Con imagen** -- Imagen de fondo con overlay, titulo superpuesto.
  3. **Left-aligned** -- Titulo y descripcion alineados a la izquierda, estilo contenido.
- **Best used on:** Todas las paginas internas (About, Services, Contact, Blog, etc.)

---

### 1.30 Features / Benefits Grid

- **Nombre ES:** Grid de Caracteristicas / Beneficios
- **Descripcion:** Grid de 4-8 beneficios o features con icono y texto. Diferente al Services Grid porque no enlaza a paginas individuales -- son atributos o ventajas. Enfocado en el "que gana el cliente".
- **Contenido requerido:**
  - 4-8 features/beneficios con titulo y descripcion (1-2 oraciones)
  - Icono por feature
  - Titulo de seccion
- **Layout variants:**
  1. **Grid 2x3 o 2x4** -- Iconos con texto en grid uniforme.
  2. **Lista con iconos** -- Formato vertical, mas detalle por item.
  3. **Alternating** -- Feature izquierda, feature derecha, alternando con imagenes.
- **Best used on:** Service Detail, Homepage, Landing Page, About

---

### 1.31 Client Profile / Ideal Customer

- **Nombre ES:** Perfil del Cliente Ideal
- **Descripcion:** Describe para quien es el servicio o producto. Permite al visitante auto-calificarse: "esto es para mi" o "esto no es para mi". Reduce leads no calificados y aumenta conversion de los correctos.
- **Contenido requerido:**
  - Titulo (ej. "Es para ti si...")
  - 4-6 puntos que describen al cliente ideal
  - Contra-puntos opcionales ("No es para ti si...")
  - Imagen representativa (opcional)
- **Layout variants:**
  1. **Checklist** -- Lista con checkmarks verdes para "si" y X rojas para "no".
  2. **Cards** -- "Para ti" en una card, "No para ti" en otra.
  3. **Split** -- Texto a un lado, imagen del cliente ideal al otro.
- **Best used on:** Service Detail, Landing Page, Pricing

---

### 1.32 Differentiator Section

- **Nombre ES:** Seccion de Diferenciadores
- **Descripcion:** Explica que hace diferente a la empresa. Mas profundo que el "Why Us" -- se enfoca en 1-3 diferenciadores clave con detalle. El argumento central de venta.
- **Contenido requerido:**
  - 1-3 diferenciadores con titulo, descripcion y evidencia
  - Icono o imagen por diferenciador
  - Datos o metricas de respaldo (opcional)
- **Layout variants:**
  1. **Split por diferenciador** -- Un diferenciador ocupa una seccion completa, alternando imagen/texto.
  2. **Cards grandes** -- Cards con mas espacio y detalle que un grid estandar.
  3. **Storytelling** -- Formato narrativo que explica el "por que" detras de cada diferenciador.
- **Best used on:** Homepage, About, Service Detail, Landing Page

---

### 1.33 Trust Indicators

- **Nombre ES:** Indicadores de Confianza
- **Descripcion:** Micro-elementos que generan confianza: badges de seguridad, garantias, numeros de registro, membresías. Pueden ser una seccion propia o integrarse en otras secciones (especialmente cerca de CTAs).
- **Contenido requerido:**
  - Badges o iconos (SSL, garantia, certificaciones)
  - Texto de soporte (ej. "Datos protegidos con encriptacion SSL")
  - Logos de asociaciones o entidades reguladoras
- **Layout variants:**
  1. **Badge bar** -- Fila de badges/iconos debajo de un CTA o formulario.
  2. **Cards mini** -- Pequenas cards con icono + texto corto.
  3. **Inline** -- Integrados como lista debajo de un formulario o boton.
- **Best used on:** Landing Page, Contact, Pricing, Footer

---

### 1.34 Before / After

- **Nombre ES:** Antes / Despues
- **Descripcion:** Muestra el contraste entre la situacion del cliente antes y despues de trabajar con la empresa. Muy efectivo para servicios de transformacion, mejora, o consultoria. Visual e impactante.
- **Contenido requerido:**
  - Titulo de seccion
  - Estado "Antes" (problemas, dolor, situacion actual)
  - Estado "Despues" (beneficios, resultados, mejora)
  - Imagenes comparativas (si aplica)
  - Metricas de mejora (opcional)
- **Layout variants:**
  1. **Split horizontal** -- "Antes" a la izquierda (tonos oscuros/rojos), "Despues" a la derecha (tonos claros/verdes).
  2. **Slider interactivo** -- Imagen con slider que revela antes/despues al deslizar.
  3. **Timeline mini** -- Antes arriba, flecha de transformacion, despues abajo.
- **Best used on:** Service Detail, Landing Page, Case Studies, Homepage

---

### 1.35 ROI Calculator / Interactive Tool

- **Nombre ES:** Calculadora de ROI / Herramienta Interactiva
- **Descripcion:** Herramienta que permite al visitante calcular ahorros, retorno de inversion, o dimensionar su necesidad. Altamente engaging y diferenciador. Genera leads calificados porque el usuario invierte tiempo interactuando.
- **Contenido requerido:**
  - Variables de entrada (sliders, inputs, dropdowns)
  - Formula o logica de calculo
  - Resultado visual (numero, grafica)
  - CTA post-resultado (ej. "Quieres lograr esto? Hablemos")
  - Disclaimer si aplica
- **Layout variants:**
  1. **Formulario + resultado** -- Inputs a la izquierda, resultado a la derecha.
  2. **Step-by-step** -- Wizard de 3-4 pasos que termina mostrando el resultado.
  3. **Inline** -- Calculadora compacta dentro de una seccion existente.
- **Best used on:** Landing Page, Service Detail, Pricing, Homepage

---

### 1.36 Industry Specialization

- **Nombre ES:** Especializacion por Industria
- **Descripcion:** Muestra las industrias o sectores que la empresa atiende. En B2B, los clientes quieren saber si tienes experiencia en SU industria. Reduce el riesgo percibido.
- **Contenido requerido:**
  - Lista de industrias (5-10)
  - Icono o imagen por industria
  - Descripcion breve de la experiencia en esa industria (opcional)
  - Link a caso de estudio por industria (ideal)
- **Layout variants:**
  1. **Icon grid** -- Grid de iconos con nombre de industria debajo.
  2. **Cards** -- Card por industria con icono, nombre y descripcion.
  3. **Tabs** -- Una industria visible a la vez con tab navigation.
- **Best used on:** Homepage, About, Services Hub, Landing Page

---

### 1.37 Methodology

- **Nombre ES:** Metodologia
- **Descripcion:** Explica el framework o enfoque propietario de la empresa. Mas detallado que "Process" -- es el "como" profundo. Genera percepcion de sofisticacion y rigor. Ideal para consultoras y empresas de servicios profesionales.
- **Contenido requerido:**
  - Nombre de la metodologia (si tiene nombre propio)
  - 4-6 fases o componentes con titulo y descripcion
  - Diagrama o grafico visual del framework
  - Resultado final esperado
- **Layout variants:**
  1. **Diagrama circular** -- Fases en circulo mostrando el ciclo.
  2. **Piramide o funnel** -- Fases en forma de embudo.
  3. **Timeline con detalle** -- Similar a proceso pero con mas profundidad por fase.
- **Best used on:** About, Service Detail, Landing Page

---

### 1.38 Guarantee / Risk Reversal

- **Nombre ES:** Garantia / Eliminacion de Riesgo
- **Descripcion:** Elimina el miedo a equivocarse. Puede ser garantia de satisfaccion, periodo de prueba, SLA, o compromiso de resultados. En B2B el riesgo de una mala decision es alto, por eso esta seccion es critica en la conversion.
- **Contenido requerido:**
  - Tipo de garantia
  - Condiciones (claro y transparente)
  - Icono o badge de garantia
  - Texto de soporte que explique por que ofreces esto
- **Layout variants:**
  1. **Card destacada** -- Card con borde de color, icono de escudo/check, texto de garantia.
  2. **Banner** -- Franja de color con icono y texto de garantia.
  3. **Integrado en CTA** -- Texto de garantia justo debajo del boton de CTA.
- **Best used on:** Landing Page, Pricing, Service Detail, Contact

---

## 2. Page-by-Page Checklists / Checklists por Tipo de Pagina

Usa estas listas para planificar que secciones incluir en cada pagina. Las secciones estan ordenadas en el orden recomendado de aparicion (de arriba a abajo).

### 2.1 Homepage

La pagina mas importante. Debe comunicar que haces, para quien, y por que confiarte en maximo 5 segundos. Funciona como hub que dirige a las paginas de detalle.

**REQUIRED (obligatorio):**
1. Hero
2. Social Proof / Logo Bar
3. Services Grid
4. About / Why Us (version resumida)
5. CTA Section (final)

**RECOMMENDED (recomendado):**
6. Stats / Key Numbers
7. Testimonials
8. Case Studies / Portfolio (3 destacados)
9. Process / How It Works
10. CTA Banner (mid-page)
11. Blog Preview

**OPTIONAL (opcional):**
12. Video / Demo
13. Industry Specialization
14. Awards / Certifications
15. Partners / Integrations
16. Newsletter
17. Differentiator Section
18. Before / After
19. ROI Calculator

---

### 2.2 About / Nosotros

Pagina que humaniza la empresa. El visitante ya sabe que haces (vio el Home), ahora quiere saber QUIEN eres y POR QUE.

**REQUIRED:**
1. Page Header
2. About / Why Us (version extendida, narrativa)
3. Values / Mission / Vision
4. Team
5. CTA Section (final)

**RECOMMENDED:**
6. Stats / Key Numbers
7. Timeline / History
8. Awards / Certifications
9. Social Proof / Logo Bar
10. Differentiator Section
11. Methodology

**OPTIONAL:**
12. Video / Demo (mensaje del CEO, tour de oficina)
13. Partners / Integrations
14. Industry Specialization
15. Locations / Offices
16. Blog Preview
17. Testimonials
18. Guarantee / Risk Reversal

---

### 2.3 Services Hub (pagina categoria)

Pagina que lista todos los servicios. El visitante quiere escanear rapidamente y encontrar lo que necesita. Cada servicio debe tener link a su pagina de detalle.

**REQUIRED:**
1. Page Header
2. Services Grid
3. CTA Section (final)

**RECOMMENDED:**
4. Process / How It Works (general)
5. Social Proof / Logo Bar
6. Testimonials (general)
7. CTA Banner (mid-page)
8. Industry Specialization

**OPTIONAL:**
9. Stats / Key Numbers
10. Case Studies / Portfolio
11. FAQ Accordion
12. Video / Demo
13. Differentiator Section
14. Features / Benefits Grid

---

### 2.4 Service Detail (pagina individual de servicio)

Pagina de venta de un servicio especifico. Debe convencer al visitante de que este servicio resuelve su problema y que tu empresa es la mejor opcion para entregarlo.

**REQUIRED:**
1. Page Header (con breadcrumbs)
2. Services Detailed (descripcion completa)
3. Features / Benefits Grid
4. CTA Section (final)

**RECOMMENDED:**
5. Process / How It Works (especifico a este servicio)
6. Testimonials (relevantes a este servicio)
7. Case Studies / Portfolio (de este servicio)
8. FAQ Accordion
9. CTA Banner (mid-page)
10. Social Proof / Logo Bar

**OPTIONAL:**
11. Pricing / Plans (si aplica)
12. Comparison Table
13. Before / After
14. Client Profile / Ideal Customer
15. ROI Calculator
16. Differentiator Section
17. Downloads / Resources (fichas tecnicas)
18. Video / Demo
19. Guarantee / Risk Reversal
20. Methodology
21. Related Services (links a otros servicios)

---

### 2.5 Contact / Contacto

Pagina de conversion principal. Debe ser simple, sin distracciones, y hacer que contactar sea lo mas facil posible. Evitar secciones informativas que distraigan del formulario.

**REQUIRED:**
1. Page Header
2. Contact Form
3. Contact Info

**RECOMMENDED:**
4. Map
5. Trust Indicators
6. Social Proof / Logo Bar (version pequena)
7. FAQ Accordion (preguntas sobre el proceso de contacto)

**OPTIONAL:**
8. Locations / Offices (si hay multiples)
9. Guarantee / Risk Reversal
10. Testimonials (1 solo, como refuerzo)

---

### 2.6 Blog Listing

Pagina que lista todos los articulos. Funciona como biblioteca de contenido. Debe facilitar la busqueda y descubrimiento.

**REQUIRED:**
1. Page Header
2. Blog Grid/List (con paginacion)
3. Categorias/Tags (filtros)

**RECOMMENDED:**
4. Featured Post (articulo destacado arriba)
5. Newsletter (captura de email)
6. Search Bar

**OPTIONAL:**
7. Sidebar con categorias, posts populares, CTA
8. CTA Banner
9. Social Proof / Logo Bar

---

### 2.7 Blog Post

Pagina de articulo individual. El contenido es rey aqui. Las secciones de soporte no deben competir con el contenido del articulo.

**REQUIRED:**
1. Breadcrumbs
2. Post Header (titulo, fecha, autor, categoria)
3. Post Content (el articulo)
4. Author Bio

**RECOMMENDED:**
5. Table of Contents (para posts largos)
6. Related Posts (3 posts relacionados)
7. Newsletter
8. Share Buttons (redes sociales)
9. CTA Banner (conversion)

**OPTIONAL:**
10. Comments
11. Sidebar con CTA o posts populares
12. Downloads / Resources (si el post tiene material descargable)

---

### 2.8 Case Studies / Portfolio (listing)

Pagina que muestra todos los casos de exito. Debe permitir filtrar por industria, servicio, o tipo de proyecto.

**REQUIRED:**
1. Page Header
2. Case Studies Grid (con filtros)
3. CTA Section (final)

**RECOMMENDED:**
4. Stats / Key Numbers (resultados globales)
5. Social Proof / Logo Bar
6. Testimonials

**OPTIONAL:**
7. CTA Banner (mid-page)
8. Industry Specialization
9. Video / Demo (reel de proyectos)

---

### 2.9 Individual Case Study

Pagina de caso de exito individual. Estructura clasica: Reto > Solucion > Resultados. Debe ser concreta y orientada a datos.

**REQUIRED:**
1. Breadcrumbs
2. Case Study Header (cliente, industria, servicio)
3. Challenge / Reto (problema del cliente)
4. Solution / Solucion (que hiciste)
5. Results / Resultados (metricas, impacto)
6. CTA Section (final)

**RECOMMENDED:**
7. Testimonial del cliente
8. Before / After (si aplica)
9. Key Metrics (stats section con resultados)
10. Related Case Studies
11. Gallery / Screenshots (imagenes del proyecto)

**OPTIONAL:**
12. Video / Demo (video del proyecto)
13. Timeline del proyecto
14. Downloads / Resources (resumen descargable)

---

### 2.10 Pricing / Plans

Pagina dedicada a precios o paquetes. Debe ser clara, transparente, y facilitar la decision. Si los precios son custom, enfocarse en "que incluye cada nivel" mas que en numeros.

**REQUIRED:**
1. Page Header
2. Pricing / Plans (cards o tabla)
3. CTA Section (final)

**RECOMMENDED:**
4. FAQ Accordion (preguntas sobre precios, pagos, que incluye)
5. Comparison Table
6. Guarantee / Risk Reversal
7. Testimonials
8. Trust Indicators

**OPTIONAL:**
9. Features / Benefits Grid (que obtienes)
10. Process / How It Works
11. Client Profile / Ideal Customer (por plan)
12. Social Proof / Logo Bar
13. ROI Calculator

---

### 2.11 FAQ (standalone)

Pagina dedicada a preguntas frecuentes. Util para SEO y para reducir carga al equipo de ventas.

**REQUIRED:**
1. Page Header
2. FAQ Accordion (con categorias/agrupacion)
3. CTA Section (final, "No encontraste tu respuesta? Contactanos")

**RECOMMENDED:**
4. Search/Filter (para encontrar preguntas)
5. Contact Info (link rapido a contacto)

**OPTIONAL:**
6. CTA Banner
7. Social Proof / Logo Bar
8. Downloads / Resources (guias relacionadas)

---

### 2.12 Landing Page (ads/campanas)

Pagina enfocada 100% en conversion. Sin navegacion completa (header minimal). Cada seccion debe acercar al visitante a la accion. Cero distracciones.

**REQUIRED:**
1. Hero (con CTA muy prominente)
2. Social Proof / Logo Bar
3. Features / Benefits Grid
4. CTA Section (final, repetir el CTA del hero)

**RECOMMENDED:**
5. Stats / Key Numbers
6. Testimonials
7. Process / How It Works
8. Before / After
9. FAQ Accordion (objeciones comunes)
10. Guarantee / Risk Reversal
11. Trust Indicators
12. CTA Banner (mid-page)

**OPTIONAL:**
13. Video / Demo
14. Comparison Table
15. Client Profile / Ideal Customer
16. ROI Calculator
17. Case Studies (1-2 mini casos)
18. Pricing / Plans
19. Differentiator Section
20. Methodology
21. Contact Form (inline, sin ir a otra pagina)

---

### 2.13 Legal (Privacy Policy, Terms)

Paginas legales. Simple, limpio, legible. No necesitan vender nada.

**REQUIRED:**
1. Page Header
2. Legal Content (texto legal completo)
3. Last Updated Date

**RECOMMENDED:**
4. Table of Contents (para documentos largos)
5. Breadcrumbs

**OPTIONAL:**
6. Contact Info (para dudas legales)

---

### 2.14 Team Page (standalone)

Pagina dedicada exclusivamente al equipo. Mas detalle que la seccion de Team en About.

**REQUIRED:**
1. Page Header
2. Team (grid completo)
3. CTA Section (final, "Quieres ser parte del equipo?" o "Trabaja con nosotros")

**RECOMMENDED:**
4. About / Why Us (cultura de la empresa)
5. Values / Mission / Vision (version breve)
6. Stats / Key Numbers (tamano del equipo, experiencia combinada)

**OPTIONAL:**
7. Video / Demo (video del equipo, dia tipico)
8. Awards / Certifications
9. Testimonials (del equipo sobre trabajar ahi)
10. Open Positions (si aplica)

---

### 2.15 Careers (si aplica)

Pagina de atraccion de talento. Vende la empresa como lugar de trabajo.

**REQUIRED:**
1. Page Header (hero de employer branding)
2. Values / Mission / Vision
3. Open Positions / Job Listings
4. CTA Section (final, "Aplica ahora")

**RECOMMENDED:**
5. About / Why Us (cultura)
6. Team (fotos del equipo)
7. Features / Benefits Grid (beneficios de trabajar ahi)
8. Testimonials (del equipo)
9. Video / Demo (cultura, oficina)

**OPTIONAL:**
10. Process / How It Works (proceso de contratacion)
11. Stats / Key Numbers
12. Awards / Certifications (Great Place to Work, etc.)
13. Gallery (fotos de oficina, eventos)
14. FAQ Accordion (sobre el proceso de aplicacion)

---

## 3. Section Flow Rules / Reglas de Orden de Secciones

Estas reglas aplican al ordenar secciones en cualquier pagina. No son absolutas, pero seguirlas produce layouts efectivos y probados.

### Reglas de posicion

1. **Hero/Page Header SIEMPRE es primero.** Sin excepciones. Es lo primero que ve el visitante.

2. **Social Proof alto en la pagina.** Idealmente justo despues del Hero. Los logos trabajan de forma subconsciente y generan confianza antes de que el visitante procese el contenido.

3. **Stats cerca del top.** Despues del Hero o Social Proof. Los numeros se procesan rapido y anclan la percepcion de escala/experiencia.

4. **CTA aparece al menos 2 veces.** Uno a mitad de pagina (CTA Banner) y uno al final (CTA Section). En landing pages, puede aparecer 3-4 veces.

5. **Testimonials despues de claims.** Siempre coloca testimonios DESPUES de presentar servicios, features, o resultados. La secuencia es: afirmacion -> prueba.

6. **FAQ cerca del final.** Resuelve las ultimas objeciones antes del CTA final. Secuencia ideal: contenido -> FAQ -> CTA final.

7. **Blog Preview al final.** Es contenido complementario, no central. Va antes del CTA final o del footer.

### Reglas de ritmo visual

8. **Alternar fondos claros y oscuros.** Cada seccion debe tener un fondo ligeramente diferente (blanco, gris claro, color de marca, oscuro). Esto crea ritmo visual y separa el contenido sin necesidad de lineas o bordes.

9. **No poner dos secciones text-heavy consecutivas.** Si una seccion es un parrafo largo, la siguiente debe ser visual (stats, logos, imagenes, grid). Esto evita fatiga de lectura.

10. **Secciones visuales como descanso.** Social Proof, Stats, Logo Bar, Video son "descansos visuales" entre secciones de contenido denso.

### Reglas de conversion

11. **En landing pages, el primer CTA debe estar visible sin scroll (above the fold).** El Hero de una landing page DEBE tener un CTA visible.

12. **No poner CTA inmediatamente despues de otro CTA.** Necesita al menos una seccion de contenido entre dos CTAs.

13. **Trust indicators cerca de CTAs.** Badges de seguridad, garantias, y otros indicadores de confianza deben estar cerca (visualmente) del boton de accion.

14. **Formularios de contacto no deben competir con contenido.** En la pagina de contacto, el formulario es lo principal. No rodees el formulario de secciones informativas pesadas.

### Reglas de estructura

15. **Breadcrumbs solo en paginas internas de segundo nivel o mas.** Homepage y paginas de primer nivel (About, Services, Contact) no los necesitan. Service Detail, Blog Post, Case Study si.

16. **Sidebar solo en Blog Post y paginas de contenido largo.** Las paginas de marketing funcionan mejor full-width.

17. **Footer se considera seccion.** Incluye links de navegacion, contacto basico, newsletter (opcional), legal, y redes sociales. Es constante en todo el sitio.

18. **Consistencia entre paginas.** Si usas CTA Banner en Homepage, usalo tambien en Services y About. El visitante se acostumbra al patron.

---

## 4. Content Checklist Per Section / Checklist de Contenido por Seccion

Usa estas listas para solicitar contenido al cliente. Cada item es algo que el cliente debe proveer o aprobar.

### Hero
- [ ] Headline principal (max 8 palabras, claro y directo)
- [ ] Subheadline (max 20 palabras, expande el headline)
- [ ] Texto del CTA primario (ej. "Solicita tu Cotizacion")
- [ ] Texto del CTA secundario (opcional)
- [ ] Imagen/video de fondo (alta resolucion, min 1920x1080)
- [ ] Version mobile de la imagen (opcional, 750x1334)

### Social Proof / Logo Bar
- [ ] 5-12 logos de clientes (SVG o PNG transparente, tamano similar)
- [ ] Titulo de seccion (ej. "Confian en nosotros")
- [ ] Permiso de uso de cada logo (confirmacion verbal del cliente)

### Stats / Key Numbers
- [ ] 3-5 metricas con numero exacto + etiqueta
- [ ] Formato: numero (ej. "150+") + descripcion (ej. "Proyectos Completados")
- [ ] Asegurar que los numeros son verificables y actualizados

### Services Grid
- [ ] Nombre de cada servicio
- [ ] Descripcion corta (max 2 oraciones por servicio)
- [ ] Icono por servicio (o definir estilo de iconos para que el dev los elija)
- [ ] URL de la pagina de detalle de cada servicio

### Services Detailed
- [ ] Titulo del servicio
- [ ] Descripcion extendida (2-4 parrafos)
- [ ] Lista de 4-6 beneficios o features
- [ ] Imagen representativa
- [ ] CTA especifico

### About / Why Us
- [ ] Historia breve de la empresa (2-3 parrafos)
- [ ] 3-4 diferenciadores con titulo + descripcion
- [ ] Foto del equipo, oficina o fundador(es)
- [ ] Anio de fundacion

### Team
- [ ] Nombre completo de cada miembro
- [ ] Cargo / Puesto
- [ ] Foto profesional (cuadrada, min 400x400, fondo uniforme)
- [ ] Bio corta 1-2 oraciones (opcional)
- [ ] URL de LinkedIn (opcional)

### Testimonials
- [ ] Cita textual (2-4 oraciones, en palabras del cliente)
- [ ] Nombre completo del cliente
- [ ] Cargo / Puesto
- [ ] Nombre de la empresa
- [ ] Foto del cliente (min 200x200, opcional pero recomendado)
- [ ] Logo de la empresa del cliente (opcional)
- [ ] Permiso de uso del testimonio

### Case Studies
- [ ] Nombre del proyecto o cliente
- [ ] Industria / sector
- [ ] Servicio utilizado
- [ ] Reto / problema (2-3 oraciones)
- [ ] Solucion implementada (2-3 oraciones)
- [ ] Resultados con metricas (3-5 datos concretos)
- [ ] Imagenes del proyecto (screenshots, fotos, antes/despues)
- [ ] Testimonio del cliente (ideal)
- [ ] Permiso de uso del nombre del cliente

### Process / How It Works
- [ ] 3-6 pasos con numero, titulo y descripcion (1-2 oraciones por paso)
- [ ] Resultado final / entregable esperado
- [ ] Tiempo estimado del proceso (opcional)

### FAQ
- [ ] 5-10 preguntas con respuestas completas
- [ ] Ordenar de mas frecuente a menos frecuente
- [ ] Agrupar por tema si hay 10+ preguntas
- [ ] Incluir preguntas sobre: precios, tiempos, proceso, garantias, soporte

### Blog Preview
- [ ] Tener al menos 3 articulos publicados (si no hay, no incluir esta seccion)
- [ ] Cada post necesita: titulo, excerpt (max 2 oraciones), imagen (1200x630), fecha, categoria

### CTA Banner
- [ ] Headline corto y directo (ej. "Listo para empezar?")
- [ ] Texto del boton CTA
- [ ] Subtexto opcional (1 oracion de soporte)

### CTA Section
- [ ] Headline principal
- [ ] Subheadline / parrafo (2-3 oraciones)
- [ ] CTA primario (texto del boton)
- [ ] CTA secundario (opcional)
- [ ] Elementos de confianza (ej. "Sin compromiso", "Respuesta en 24h")

### Pricing / Plans
- [ ] Nombre de cada plan/paquete
- [ ] Precio o indicador de rango
- [ ] 5-10 features por plan con disponibilidad (incluido / no incluido)
- [ ] Plan recomendado (cual destacar)
- [ ] CTA por plan

### Contact Form
- [ ] Campos requeridos: Nombre, Email, Telefono, Empresa, Mensaje
- [ ] Campos opcionales adicionales (asunto, tipo de consulta, presupuesto)
- [ ] Texto del boton de envio
- [ ] Mensaje de confirmacion post-envio
- [ ] Email(s) donde llegan los formularios

### Contact Info
- [ ] Telefono principal (con codigo de pais)
- [ ] Email principal de contacto
- [ ] Direccion fisica completa
- [ ] Horario de atencion
- [ ] Links a redes sociales (LinkedIn, Facebook, Instagram, etc.)
- [ ] WhatsApp Business (numero y mensaje predeterminado)

### Map
- [ ] Direccion exacta o coordenadas GPS
- [ ] Indicar si hay estacionamiento o referencias para llegar

### Timeline / History
- [ ] Lista de hitos con anio, titulo y descripcion
- [ ] Imagenes por hito (opcional)
- [ ] Ordenar cronologicamente

### Values / Mission / Vision
- [ ] Declaracion de Mision (1 oracion, max 25 palabras)
- [ ] Declaracion de Vision (1 oracion, max 25 palabras)
- [ ] 3-6 valores con nombre y descripcion (1-2 oraciones cada uno)

### Awards / Certifications
- [ ] Logo/badge de cada certificacion
- [ ] Nombre oficial de la certificacion
- [ ] Entidad que otorga
- [ ] Anio o vigencia

### Video / Demo
- [ ] URL del video (YouTube/Vimeo) o archivo de video
- [ ] Thumbnail personalizado (1280x720)
- [ ] Titulo y descripcion de contexto

### Downloads / Resources
- [ ] Archivo por recurso (PDF, XLSX, etc.)
- [ ] Nombre del recurso
- [ ] Descripcion breve
- [ ] Decidir si es descarga libre o requiere email (lead magnet)

### Guarantee / Risk Reversal
- [ ] Tipo de garantia (satisfaccion, resultados, SLA, etc.)
- [ ] Condiciones y terminos
- [ ] Duracion de la garantia

### Industry Specialization
- [ ] Lista de 5-10 industrias que atienden
- [ ] Icono representativo por industria
- [ ] Experiencia o caso relevante por industria (opcional)

### Methodology
- [ ] Nombre de la metodologia (si tiene nombre propio)
- [ ] 4-6 fases con titulo y descripcion
- [ ] Diagrama o flujo visual (puede ser creado por el dev)

---

## 5. Quick Reference / Referencia Rapida

### Cuando el usuario pregunta "que secciones debe tener la pagina de [X]":
1. Identifica el tipo de pagina en la seccion 2 (Page-by-Page Checklists)
2. Lista las secciones REQUIRED primero
3. Sugiere las RECOMMENDED explicando por que
4. Menciona las OPTIONAL solo si el contexto lo amerita
5. Aplica las reglas de orden de la seccion 3

### Cuando el usuario esta construyendo una pagina nueva:
1. Pregunta que tipo de pagina es
2. Pregunta que contenido tiene disponible el cliente
3. Recomienda secciones basandote en el contenido disponible (no recomiendes testimonios si no tienen testimonios)
4. Sugiere un orden usando las reglas de la seccion 3
5. Proporciona el checklist de contenido de la seccion 4 para lo que falta

### Cuando el usuario pregunta sobre una seccion especifica:
1. Busca la seccion en la seccion 1 (Master List)
2. Proporciona la descripcion, contenido requerido y layout variants
3. Sugiere en que paginas usarla
4. Si va a implementarla, proporciona el checklist de contenido de la seccion 4

### Prioridad de secciones cuando el tiempo/presupuesto es limitado:
**Tier 1 (minimo viable):** Hero, Services Grid, About/Why Us, Contact Form, CTA Section
**Tier 2 (profesional):** + Social Proof, Stats, Testimonials, Process, FAQ
**Tier 3 (completo):** + Case Studies, Blog, Video, Industry, Awards, Downloads
**Tier 4 (premium):** + ROI Calculator, Comparison Table, Before/After, Methodology, Interactive tools
