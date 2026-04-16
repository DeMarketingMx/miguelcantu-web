---
name: web-project-process
description: Proceso completo para crear sitios web profesionales tipo miguelcantu.mba. Se activa cuando el usuario menciona crear un sitio nuevo, iniciar un proyecto web para un cliente, o pregunta sobre el proceso de desarrollo web. TRIGGER cuando el usuario dice "nuevo sitio", "sitio web para [cliente]", "empezar proyecto web", "proceso web", "crear pagina web", "landing page para", o trabaja en un directorio de proyecto web nuevo.
version: 1.0.0
---

# Proceso de Creacion de Sitios Web — De Marketing

Este skill define el proceso estandar para crear sitios web profesionales. Seguir TODAS las fases en orden. Cada fase tiene un entregable que debe completarse antes de avanzar.

---

## FASE 1: Brand Guidelines (CRITICA — Todo parte de aqui)

> Sin este documento, NO se empieza a construir nada. Es la fuente de verdad para todo el proyecto.

### 1.1 Posicionamiento y Estrategia

Obtener del cliente:

```
POSICIONAMIENTO:
- Que es: [descripcion en 1 oracion]
- Que NO es: [minimo 5 anti-posicionamientos]
- Audiencia primaria: [quien compra]
- Audiencia secundaria: [quien consume contenido]
- Personalidad de marca: [3 adjetivos]
- Prioridad: [captura de clientes vs thought leadership vs ecommerce]
```

### 1.2 Paleta de Colores (9 tokens obligatorios)

SIEMPRE definir estos 9 tokens exactos:

| Token | Funcion |
|-------|---------|
| `--color-primary` | Color dominante. Navbar, headings, texto, footer |
| `--color-accent` | UN solo color de acento. CTAs, botones, links, enfasis |
| `--color-background` | Fondo principal del sitio |
| `--color-surface` | Cards, navbar, secciones destacadas |
| `--color-text` | Texto body (primary al 85% opacidad) |
| `--color-text-muted` | Texto secundario (primary al 55% opacidad) |
| `--color-accent-hover` | Hover del accent (variante mas oscura) |
| `--color-accent-light` | Background sutil para badges (accent al 8% opacidad) |
| `--color-border` | Bordes y dividers (primary al 12% opacidad) |

**Regla:** La marca es duena de UN solo color de acento. Usarlo con escasez.

### 1.3 Tipografia

SIEMPRE 2 fuentes:
- **Display** (h1-h3): Fuente con personalidad (serif o display). Peso 700.
- **Sans** (todo lo demas): Fuente limpia sans-serif. Pesos 400, 500, 600.

Escala tipografica fluid con clamp():
```css
--text-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
--text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 1rem)
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
--text-lg:   clamp(1.125rem, 1rem + 0.6vw, 1.25rem)
--text-xl:   clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)
--text-2xl:  clamp(1.5rem, 1.2rem + 1.5vw, 2rem)
--text-3xl:  clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)
--text-4xl:  clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)
--text-5xl:  clamp(3rem, 2rem + 3vw, 4.5rem)
```

### 1.4 Spacing, Radios y Sombras

```css
/* Spacing */
--space-xs: 0.25rem    --space-sm: 0.5rem     --space-md: 1rem
--space-lg: 1.5rem     --space-xl: 2rem       --space-2xl: 3rem
--space-3xl: 4rem      --space-4xl: 6rem      --space-5xl: 8rem

/* Border Radius */
--radius-sm: 4px   --radius-md: 8px   --radius-lg: 12px   --radius-xl: 16px

/* Shadows (usar primary como base) */
--shadow-sm: 0 1px 2px rgba(primary, 0.05)
--shadow-md: 0 4px 12px rgba(primary, 0.08)
--shadow-lg: 0 8px 24px rgba(primary, 0.12)
--shadow-xl: 0 16px 48px rgba(primary, 0.16)
```

Layout: max-width 1200px contenido, 1440px layout, grid 12 cols, lectura 65ch.

### 1.5 Identidad Verbal

```
TONO: [directo/formal/casual/tecnico]
PERSONA: [primera persona / tercera persona]
PRINCIPIOS:
1. Lead con beneficio, no credencial
2. Oraciones cortas. Parrafos cortos.
3. Sin superlativos ("el mejor", "lider")
4. Datos especificos > adjetivos vagos
5. CTAs directos ("Agendar consulta" no "Conoce mas")
```

### 1.6 Fotografia y Estilo Visual

- Estilo fotografico: [B&W / baja saturacion / profesional / lifestyle]
- Iconografia: Lucide React (outline, trazo fino)
- NO usar: [ilustraciones cartoon / emojis como decoracion / stock generico]

### 1.7 Prompts de Imagenes AI

**Config tecnica:**
- Herramienta: Nano Banana (MCP) con Gemini / Imagen 4
- Modelo produccion: imagen-4.0-ultra-generate-001
- Modelo testing: imagen-4.0-fast-generate-001
- Formato: 16:9 landscape, sin texto, sin personas, sin iconos

**Crear catalogo de estilos (minimo 4-6):**

Cada estilo necesita:
1. Nombre descriptivo
2. Prompt base completo con [TOPIC_MODIFIER] placeholder
3. Temas donde aplica
4. Paleta de colores mapeada desde brand colors

**Reglas:**
- 1 estilo por pieza de contenido
- Nunca repetir estilo en piezas consecutivas
- Estilo mas versatil como default
- Ultra para produccion, Fast para pruebas

### 1.8 Componentes Base

Documentar apariencia de:
- **Botones:** Primary (bg accent, texto blanco), Secondary (borde primary), Ghost (texto accent)
- **Cards:** bg surface, radius-lg, shadow-md, hover shadow-lg + translateY(-2px)
- **Navbar:** bg surface, shadow-sm, sticky, logo izq (display 700), links der (sans 500)
- **Footer:** bg primary, texto blanco, links opacity 0.7 → hover 1

### 1.9 Entregables (2 archivos OBLIGATORIOS)

**Entregable A — Skill de marca (para Claude):**
> Crear archivo `SKILL.md` en `~/.claude/skills/[cliente]-brand/`
> Este skill se convierte en la fuente de verdad que Claude usa automaticamente.

**Entregable B — HTML visual de brand guidelines (para el equipo/cliente):**
> Crear archivo `[cliente]-brand-guidelines.html` en `~/Desktop/`
> HTML standalone (solo depende de Google Fonts) que muestra visualmente TODA la identidad.

El HTML DEBE incluir estas secciones (referencia: miguel-cantu-brand-guidelines.html, enerlogix-brand-guidelines.html):
1. **Sticky nav** — Nombre del cliente + links a secciones
2. **Hero** — Badge "Brand Guidelines v1.0" + nombre + descripcion
3. **Posicionamiento** — Statement, 3 personalidad cards, grid ES vs NO ES, audiencias
4. **Paleta de colores** — Swatch cards visuales para CADA color (bloque de color arriba, info abajo)
5. **Tipografia** — Type specimens mostrando cada peso/tamano, tabla de escala fluid
6. **Espaciado, radios, sombras** — Demos visuales (barras, cajas redondeadas, cajas con sombra)
7. **Identidad verbal** — Cards de tono, Do/Don't boxes con ejemplos reales, principios de copy
8. **Componentes** — Demos de botones, cards, navbar preview, footer preview
9. **Mockup** — Browser frame con preview del sitio (navbar + hero + footer miniatura)
10. **Footer** — Credits

**Patron CSS del HTML:**
- Usar CSS variables `:root` con TODOS los tokens del brand
- Swatch cards: `.swatch` con `.swatch-color` (bloque) + `.swatch-info` (texto)
- Type specimens: `.type-specimen` con `.type-label` + muestra + `.type-meta`
- Do/Don't: `.do-box` (borde izq accent) + `.dont-box` (borde izq rojo)
- Positioning grid: 2x2 grid con ES/NO ES/Audiencia primaria/secundaria
- Mockup: `.mockup-frame` con `.mockup-browser-bar` (3 dots + URL) + contenido

**IMPORTANTE:** Este HTML se entrega AUTOMATICAMENTE al completar la Fase 1, sin que el usuario lo pida. Es parte del proceso estandar.

---

## FASE 2: Estructura y Arquitectura del Sitio

### 2.1 Mapa de Paginas

Definir TODAS las paginas con el cliente. Estructura tipica:

```
/ (Home)
/sobre-mi (o /nosotros)
/servicios/[servicio-1]
/servicios/[servicio-2]
/servicios/[servicio-n]
/blog
/blog/[slug]
/contacto
/gracias (conversion tracking, noindex)
/aviso-legal
/politica-de-privacidad
/terminos-y-condiciones
```

### 2.2 Navegacion

Decidir tipo:
- **Simple:** 5-7 links directos (sitios personales/consultoria)
- **Mega menu:** Sitios con muchos servicios/categorias
- **Mobile:** Siempre hamburger con misma estructura

### 2.3 Secciones del Homepage

Flujo narrativo recomendado:
1. **Hero** — Propuesta de valor + CTA
2. **Social proof** — Logos, numeros, credenciales
3. **Servicios** — Cards o grid de lo que ofrece
4. **Diferenciadores** — Por que elegirlo (con visuales animados)
5. **Herramientas interactivas** — Calculadora, simulador, assessment
6. **Testimonios/Casos** — Prueba social
7. **Blog destacado** — Posts recientes
8. **CTA final** — Cierre con accion

### 2.4 Elementos Visuales Entre Secciones

Decidir cuales usar:
- Fondos alternados (background/surface)
- Separadores: wave SVG, gradientes, lineas
- Componentes decorativos: AnimatedBackground, FloatingParticles, BackgroundPattern
- Animaciones: FadeIn scroll reveal, counters animados, parallax

### 2.5 Inspiracion

Documentar: "De [sitio X] nos gusta [elemento Y]"
Fuentes: Envato/ThemeForest, Awwwards, Dribbble, competidores, misma industria.

---

## FASE 3: Diseno Visual y UI

### 3.1 Setup Visual

1. Configurar Tailwind con la paleta del brand (CSS custom properties)
2. Importar Google Fonts (display + sans) via next/font
3. Definir CSS utility classes del proyecto:
   - `card-hover` — Card con efecto hover
   - `btn-primary`, `btn-outline` — Botones
   - `section-badge` — Badge de seccion
   - `section-navy` — Seccion con fondo primary
   - `section-header` — Header de seccion estandar
   - `page-header` — Header de pagina interna
   - `breadcrumb` — Navegacion breadcrumb
   - `stat-number`, `stat-label` — Estadisticas
   - `input-minimal` — Inputs de formulario

### 3.2 Componentes Animados (Lo que da vida al sitio)

Construir segun necesidad del cliente:

**Obligatorios:**
- `FadeIn.tsx` — Scroll-triggered fade con direccion configurable (up, down, left, right)
- `AnimatedCounter.tsx` — Conteo animado para estadisticas (triggered on scroll)

**Opcionales segun complejidad:**
- `AnimatedBackground.tsx` — Grid con nodos o waves de fondo
- `FloatingParticles.tsx` — Particulas con lineas conectoras
- `BackgroundPattern.tsx` — Overlay patterns (grid, dots, diagonal)
- `NeuralNetwork.tsx` — Diagrama de red neuronal interactivo
- `StrategyVisual.tsx` — Radar/compass visual
- `DecorativeChart.tsx` — Curva SVG ascendente animada
- `RadialProgress.tsx` — Progreso circular animado
- `ServiceProcess.tsx` — Proceso de servicio con conectores

### 3.3 Componentes Interactivos (Demos)

Segun el tipo de negocio, crear 1-3 de:
- `ROICalculator.tsx` — Calculadora de retorno con sliders por industria
- `ImpactCalculator.tsx` — Assessment de madurez digital
- `FunnelDemo.tsx` — Simulador de embudo de ventas
- `MaturityAssessment.tsx` — Evaluacion interactiva
- `RFMDemo.tsx` — Analisis RFM de clientes

Estos componentes generan engagement y demuestran expertise.

### 3.4 Responsive

Mobile-first. Breakpoints: sm(640) md(768) lg(1024) xl(1280) 2xl(1536).
Verificar: navbar mobile, hero sizing, cards stack, formularios touch, tablas scroll.

---

## FASE 4: Desarrollo Tecnico

### 4.1 Stack Estandar

```
Next.js (ultima estable) + Tailwind CSS 4 + Framer Motion + Cloudflare Pages
Componentes: shadcn/ui adaptado + Lucide React icons
Blog: MDX + gray-matter + remark + reading-time
```

### 4.2 Setup

```bash
npx create-next-app@latest [nombre] --typescript --tailwind --app
npm install framer-motion gray-matter remark remark-html reading-time lucide-react next-mdx-remote
npx shadcn@latest init
```

next.config.ts:
```typescript
const nextConfig = {
  output: "export",
  images: { unoptimized: true }
}
```

### 4.3 Estructura de Carpetas

```
src/
  app/
    layout.tsx              # Fonts (next/font), metadata global, Navbar + Footer
    page.tsx                # Homepage
    not-found.tsx           # Custom 404
    sitemap.ts              # Sitemap dinamico
    robots.ts               # robots.txt
    [pagina]/page.tsx       # Paginas estaticas
    blog/
      page.tsx              # Blog list + filtros + paginacion
      [slug]/page.tsx       # Blog post + ToC + related
    gracias/page.tsx        # Conversion (noindex)
  components/
    Navbar.tsx
    Footer.tsx
    FadeIn.tsx              # OBLIGATORIO — scroll animation
    AnimatedCounter.tsx     # OBLIGATORIO — stats
    ContactForm.tsx
    BlogGrid.tsx
    TableOfContents.tsx
    [visuales-animados].tsx # Segun Fase 3.2
    demos/
      [interactivos].tsx    # Segun Fase 3.3
  lib/
    blog.ts                 # getBlogPosts, getBlogPost, getRelatedPosts, markdownToHtml, inferCategory
content/
  blog/
    [slug].mdx              # Posts con frontmatter
public/
  images/blog/              # Thumbnails
  images/photos/            # Fotos del cliente
  _redirects                # 301s para Cloudflare Pages
  favicon.ico
```

### 4.4 Sistema de Blog

**Frontmatter estandar:**
```yaml
---
title: "Titulo del Post"
date: "2026-01-15"
description: "Descripcion SEO (150-160 chars)"
category: "Marketing Digital"
image: "/images/blog/slug.webp"
---
```

**Funciones en lib/blog.ts:**
- `getBlogPosts()` — Lee MDX, parsea frontmatter, calcula reading time, ordena por fecha
- `getBlogPost(slug)` — Post individual con HTML + headings para ToC
- `getRelatedPosts(slug, limit)` — Misma categoria primero, luego otros
- `inferCategory(title, content)` — Auto-clasifica en categorias definidas

**Layout blog list:** Filtros por categoria, paginacion (9/pagina), featured post grande
**Layout blog post:** Sidebar izq (related posts), sidebar der (ToC sticky + author bar + CTA)

**Thumbnails:** Generados con AI segun catalogo de estilos (Fase 1.7). 1 imagen por post.

### 4.5 Repo y Versionamiento

```bash
gh repo create DeMarketingMx/[nombre] --private --source=.
git add . && git commit -m "Initial setup" && git push -u origin main
```

### 4.6 Plantillas de Paginas (Page Templates)

Cada sitio usa estas plantillas estandar. Adaptar contenido y colores del brand skill del cliente.

**TEMPLATE 1 — Homepage**
Estructura de secciones en orden:
```
1. Hero: Full-width, fondo primary con imagen/overlay, titulo grande, CTA, social proof (avatares circulares + "+X empresas")
2. Stats: 4 numeros animados (AnimatedCounter) + fila de logos de clientes debajo
3. Servicios destacados: 2 columnas — collage de 3 imagenes superpuestas (izq) + texto con bullet points (der)
4. Por que elegirnos: Badge + titulo centrado + 3 cards con iconos (hover cambia color del icono)
5. Evaluacion/CTA intermedio: Fondo primary, 2 columnas divididas, checklist con iconos
6. Servicios cards: 3 cards con banner de imagen arriba (h-52) + titulo + desc + "Leer Mas"
7. Logos de clientes: Grid completo (6 cols desktop), grayscale → color en hover
8. Casos de exito: Grid 2x2, cards con area de imagen + tag de categoria + titulo
9. Blog: 3 cards con imagen, date badge (dia/mes) flotante, category tag, titulo
10. CTA final: Fondo primary con gradiente, badge, titulo grande, boton + telefono
```

**TEMPLATE 2 — Pagina de Servicio (con sidebar)**
```
PageHero (full width, fondo primary, titulo + breadcrumbs)
└─ Grid 2 columnas: [1fr, 320px]
   ├─ Columna izquierda (contenido):
   │   ├─ Seccion intro (titulo + texto descriptivo)
   │   ├─ Seccion beneficios/cards (3-4 cards con iconos)
   │   ├─ Seccion diferenciadores (puntos con checkmarks)
   │   └─ FAQ accordion (5 preguntas minimo)
   └─ Columna derecha (sidebar sticky top-24):
       ├─ Card navy: "Consultoria personalizada" + telefono CTA
       ├─ Enlaces rapidos: links a todas las paginas de servicio (active state)
       ├─ Brochure: boton de descarga
       └─ Redes sociales: iconos Facebook + LinkedIn
CTA navy (full width, fuera del grid)
```

**TEMPLATE 3 — Categoria de Servicios (hub)**
```
PageHero
└─ Descripcion general + datos de contacto
└─ Grid de ServiceCards (3 cols) enlazando a sub-paginas
└─ CTA navy
```

**TEMPLATE 4 — Nosotros**
```
PageHero
├─ Presentacion empresa (texto + 2 pillar cards)
├─ Plan/producto estrella (badge + descripcion)
├─ Servicios resumen
├─ Equipo directivo (grid de 3, avatar circular con iniciales + nombre + titulo)
├─ Stat destacado (numero grande en accent)
├─ Enfoque/metodologia (titulo + texto + CTA)
├─ Logos de clientes (grid completo, 13+)
└─ Testimonios (fondo primary, 2 quotes con icono, nombre, cargo, empresa)
```

**TEMPLATE 5 — Contacto**
```
PageHero
└─ Grid 2 columnas:
   ├─ Formulario (nombre*, email*, empresa, telefono, mensaje*, boton submit)
   └─ Cards de informacion (telefono, email, website, ubicaciones con iconos)
```

**TEMPLATE 6 — Blog Listing**
```
PageHero
└─ Grid de blog cards (3 cols): imagen + date badge + category + titulo + excerpt + "Leer Mas"
```

**TEMPLATE 7 — Blog Post**
```
PageHero (titulo del post + breadcrumbs)
├─ Meta (fecha + reading time + category badge)
├─ Contenido HTML (dangerouslySetInnerHTML)
├─ Seccion "Otros Articulos" (3 cards)
└─ CTA navy
IMPORTANTE: Debe exportar generateStaticParams() para static export
```

**TEMPLATE 8 — Casos de Exito**
```
PageHero
└─ Grid 2x2 de project cards: area de imagen (h-56) + tag + titulo + desc + "Ver Mas"
└─ CTA navy
```

**TEMPLATE 9 — Legal (Aviso, Privacidad, Terminos)**
```
PageHero
└─ Contenido de texto largo, max-w-3xl centrado, prose styling
```

**Componentes obligatorios para todas las plantillas:**
- `Navbar.tsx` — Sticky, fondo primary, logo + links + CTA, dropdowns, mobile hamburger
- `Footer.tsx` — Fondo primary, 4 columnas, links + contacto + ubicaciones + redes
- `FadeIn.tsx` — Scroll animation (direction, delay)
- `AnimatedCounter.tsx` — Conteo animado para stats
- `PageHero.tsx` — Hero de paginas internas (primary bg, titulo, breadcrumbs)
- `FAQ.tsx` — Accordion, 1 item abierto a la vez
- `ServiceCard.tsx` — Card con titulo, desc, link, icono opcional
- `ServiceSidebar.tsx` — Sidebar para paginas de servicio (consultoria card, nav, brochure, social)
- `StatCard.tsx` — Numero grande en accent + label

---

## FASE 5: Contenido

### 5.1 Textos del Sitio
- Cada pagina: headlines, parrafos, CTAs (usar tono de Fase 1.5)
- Homepage: seguir flujo de Fase 2.3

### 5.2 Blog Posts
- **Migracion:** Exportar → convertir a MDX → asignar categorias → generar thumbnails AI
- **Nuevo:** Crear con calendario editorial usando tono de marca

### 5.3 Imagenes
- **Fotos personales AI:** Generar con Gemini 2.5 Flash Image (hero, portrait, knowledge, mission, avatar)
- **Thumbnails blog:** Catalogo de estilos AI (Fase 1.7)
- **OG Image:** 1200x630, usar foto hero del cliente
- **Iconos:** Lucide React (outline)

### 5.4 Migracion (si aplica)
1. Exportar contenido de plataforma anterior
2. Mapear URLs viejas → nuevas
3. Crear `public/_redirects` con reglas 301
4. Verificar que ningun link se rompa

---

## FASE 6: Integraciones

### 6.1 Formulario de Contacto

**Cloudflare Worker + Resend API:**
1. Crear Worker `contact-form-[cliente]`
2. Secret: RESEND_API_KEY
3. CORS: dominio del cliente + *.pages.dev + localhost
4. Campos: nombre, email, empresa (opcional), mensaje, origen (dominio)
5. Envio via Resend API al email del cliente
6. Redirect a /gracias en exito

**Futuro:** Worker multi-cliente con mapeo origen → email destinatario.

### 6.2 Verificar Dominio en Resend
Registros DNS (DKIM, SPF) para enviar desde `contacto@dominio.com`

### 6.3 Newsletter (Opcional)
Footer con formulario → Resend Audience / Mailchimp / ConvertKit

---

## FASE 7: SEO y Metadata

### 7.1 Metadata por Pagina

```typescript
export const metadata: Metadata = {
  title: "Titulo | Nombre",
  description: "150-160 caracteres",
  openGraph: {
    title, description, url, siteName,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_MX", type: "website"
  },
  twitter: { card: "summary_large_image", title, description, images }
}
```

### 7.2 Sitemap y Robots
- `app/sitemap.ts` — Dinamico con paginas + blog posts
- `app/robots.ts` — Allow all, referenciar sitemap

### 7.3 Redirects 301
`public/_redirects` con formato: `/url-vieja /url-nueva 301`

### 7.4 Schema.org (JSON-LD)
Person/Organization, BlogPosting, BreadcrumbList, FAQPage

### 7.5 SEO Internacional (si aplica)
Subdirectorio `/en/`, diccionarios JSON, hreflang, `<html lang>` dinamico.
**Cuidado:** navbar links localizados, data files traducidos, og:locale:alternate.

---

## FASE 8: Deploy y DNS

### 8.1 Cloudflare Pages
1. Conectar repo GitHub > Pages > Create
2. Branch: main, Build: `npm run build`, Output: `out`
3. Deploy automatico en cada push

### 8.2 DNS
- CNAME `@` → `[proyecto].pages.dev` (proxied)
- CNAME `www` → `[proyecto].pages.dev` (proxied)
- SSL automatico (verificar propagacion)

### 8.3 Custom Domain
Pages > Custom domains > agregar dominio + www

---

## FASE 9: Analytics y Tracking

### 9.1 Cuentas por Cliente
- Google Analytics 4 (GA4)
- Google Search Console (GSC)
- Google Tag Manager (GTM)
- Google Ads (si aplica)
- Facebook/Meta Pixel (si aplica)

### 9.2 GTM Setup
1. Contenedor GTM en layout.tsx (head + body)
2. Tags: GA4, Conversion en /gracias, Pixel, Ads

### 9.3 Search Console
Verificar dominio → enviar sitemap → monitorear indexacion

---

## FASE 10: QA y Lanzamiento

### 10.1 Checklist Pre-Lanzamiento

**Funcionalidad:**
- [ ] Todas las paginas cargan
- [ ] Formulario envia emails
- [ ] Links internos sin 404
- [ ] Blog posts renderizan
- [ ] Redirects 301 funcionan
- [ ] Custom 404 funciona

**Responsive:**
- [ ] Mobile (iPhone SE, 14, Galaxy)
- [ ] Tablet (iPad)
- [ ] Desktop (1280, 1440, 1920)
- [ ] Navbar mobile
- [ ] Formularios touch

**SEO:**
- [ ] Title unico por pagina
- [ ] Meta description unica
- [ ] OG image configurada
- [ ] Sitemap en /sitemap.xml
- [ ] robots.txt correcto

**Performance:**
- [ ] Lighthouse > 90
- [ ] Imagenes WebP optimizadas
- [ ] Fonts cargando
- [ ] Sin console errors

**Legal:**
- [ ] Aviso legal
- [ ] Politica de privacidad
- [ ] Terminos y condiciones

### 10.2 Post-Lanzamiento
- [ ] SSL en dominio custom
- [ ] GA4 recibiendo datos
- [ ] Search Console con sitemap
- [ ] Indexacion manual de URL principal
- [ ] Formulario conversion OK

---

## Dependencias entre Fases

```
FASE 1 (Brand) ──→ FASE 2 (Estructura) ──→ FASE 3 (Diseno) ──→ FASE 4 (Dev) ──→ FASE 8 (Deploy)
                                                                      ↑                    ↓
                                              FASE 5 (Contenido) ─────┘              FASE 9 (Analytics)
                                                                                          ↓
                                              FASE 6 (Integraciones) ──→ FASE 7 (SEO) → FASE 10 (QA)
```

Fase 5 puede ir en paralelo con Fase 4.
Fase 6 necesita Fase 4 avanzada.
Fase 9 necesita dominio live (Fase 8).

---

## Herramientas del Stack

| Herramienta | Uso |
|-------------|-----|
| Claude Code + Skills | Desarrollo + consistencia de marca |
| Nano Banana (MCP) / Imagen 4 | Thumbnails e imagenes AI |
| Gemini 2.5 Flash Image | Fotos personales AI |
| GitHub (DeMarketingMx) | Repos de cada proyecto |
| Cloudflare Pages | Hosting + deploy automatico |
| Cloudflare Workers | Backend serverless (formularios) |
| Resend | Envio de emails |
| GTM + GA4 + GSC | Analytics y SEO |
| shadcn/ui + Lucide React | Componentes UI + iconos |
| Framer Motion | Animaciones |

---

## Notas Operativas

1. **Fase 1 es bloqueante.** Si el brand no esta definido, NO empezar desarrollo.
2. **Claude Code con skill de marca** asegura que cada componente respeta la identidad visual automaticamente.
3. **Cloudflare Pages necesita cambios reales** en archivos — commits vacios no disparan build.
4. **Static export** (output: 'export'): no SSR, no middleware, no route handlers runtime. Todo es build-time.
5. **Redirects en `public/_redirects`** para Cloudflare Pages, NO en next.config.ts.
6. **1 skill de marca por cliente** en `~/.claude/skills/[cliente]-brand/SKILL.md`.
7. **Framer Motion es clave** — los componentes animados (FadeIn, counters, backgrounds) son lo que diferencia un sitio generico de uno premium.
