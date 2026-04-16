---
name: demarketing-brand-guidelines
description: Applies De Marketing's official brand colors and typography to any artifact, presentation, document, or visual output. Use this skill whenever creating or styling deliverables for De Marketing — including presentations (.pptx), Word documents (.docx), PDFs, HTML pages, React components, dashboards, social media assets, or any visual content that should carry De Marketing's brand identity. Trigger whenever the user mentions De Marketing branding, brand colors, corporate styling, visual identity, or asks for something "on brand" or "with our colors". Also trigger when creating any deliverable where De Marketing is the author or sender.
---

# De Marketing Brand Styling

## Overview

To access De Marketing's official brand identity and style resources, use this skill. De Marketing is a digital marketing agency positioned as a premium, executive-level consultancy — think "the McKinsey of digital marketing agencies." All visual outputs should reflect authority, professionalism, and modern sophistication.

**Keywords**: branding, corporate identity, visual identity, post-processing, styling, brand colors, typography, De Marketing brand, visual formatting, visual design, on-brand, corporate styling, agency branding

## Brand Guidelines

### Brand Positioning

De Marketing is positioned as a premium B2B digital marketing consultancy. Visual style should be:
- Clean, minimal, and executive
- High contrast with generous white space
- Data-driven and modern, not flashy or startup-casual
- Comparable to top-tier consulting firms (McKinsey, Bain, Deloitte Digital)

### Colors

**Primary Colors:**

- Navy (Primary): `#16273f` — Main brand color. Use for headers, primary backgrounds, key UI elements, and anywhere brand presence is needed most.
- Navy Dark (Secondary): `#2e4769` — Supporting navy tone. Use for secondary sections, hover states, gradients alongside primary, and depth layering.

**Neutral Colors:**

- Black: `#121212` — Primary text color and dark backgrounds.
- White: `#fafafa` — Light backgrounds, card surfaces, and text on dark backgrounds.
- Light Gray: `#dddfe3` — Subtle backgrounds, borders, dividers, and input field backgrounds.
- Mid Gray: `#808187` — Secondary text, captions, metadata, and placeholder text.

**Accent Color:**

- Green Lime: `#9be564` — Primary accent for CTAs, highlights, data points, success states, and visual emphasis. Use sparingly and strategically to draw attention — it is the brand's signature differentiator.

### Color Usage Rules

1. **Primary navy `#16273f`** should dominate branded surfaces (headers, footers, sidebars, title slides).
2. **Green lime `#9be564`** is accent only — use for CTAs, key metrics, chart highlights, icons, and small emphasis elements. Never as a large background.
3. **Text on dark backgrounds** should be `#fafafa` (white).
4. **Text on light backgrounds** should be `#121212` (black) for body, `#16273f` (navy) for headings.
5. **Secondary text** uses `#808187` (mid gray) for captions, footnotes, and supporting info.
6. **Backgrounds** should primarily be `#fafafa` (white) or `#16273f` (navy). Use `#dddfe3` for subtle section dividers or alternating rows.

### Typography

- **Headings**: Inter (SemiBold 600 or Bold 700), with Arial as fallback
- **Body Text**: Inter (Regular 400 or Medium 500), with Arial as fallback
- **Captions/Small Text**: Inter (Regular 400), with Arial as fallback
- **Note**: Inter is a system-available font on most modern systems. For best results, ensure Inter is installed in your environment.

**CRITICAL — Inter is the ONLY approved typeface for De Marketing.** All outputs — HTML, PPTX, DOCX, PDF, React, social media assets, and any other format — MUST use Inter (with Arial as fallback). No other typefaces (Outfit, JetBrains Mono, Roboto, Space Grotesk, etc.) should be used in De Marketing branded materials. This rule applies to ALL skills that generate visual content for De Marketing, including the Visual Content Engine.

**Loading Inter in HTML/Web:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Typography Hierarchy

| Element | Font | Weight | Size (pptx) | Size (web) | Color |
|---------|------|--------|-------------|------------|-------|
| H1 / Title | Inter | Bold 700 or ExtraBold 800 | 36-44pt | 2.5-3rem | `#16273f` or `#fafafa` on dark |
| H2 / Section | Inter | SemiBold 600 | 28-32pt | 1.75-2rem | `#16273f` |
| H3 / Subsection | Inter | SemiBold 600 | 20-24pt | 1.25-1.5rem | `#16273f` |
| Body | Inter | Regular 400 | 14-16pt | 1rem | `#121212` |
| Caption | Inter | Regular 400 | 10-12pt | 0.875rem | `#808187` |
| CTA / Accent text | Inter | SemiBold 600 | 14-16pt | 1rem | `#9be564` or `#fafafa` |
| Eyebrow / Tag | Inter | SemiBold 600 | 10-12pt | 0.75-0.875rem | `#9be564` (accent) or `#808187` |
| Metric / KPI number | Inter | ExtraBold 800 | 36-48pt | 2.5-4rem | `#9be564` (accent) |

### Logo

**⚠️ CRITICAL RULE: NEVER use PNG logo images in HTML, web, presentations, or any screen-rendered output.** The PNG logo files have a solid background that creates visible rectangles against any non-matching background color. This looks unprofessional and is strictly prohibited.

**Text-only logo (MANDATORY for HTML / Web / React / Presentations / Social Media):**

Instead of a PNG image, always render the brand name as styled text: **"DE MARKETING"** in Inter Bold 700, uppercase, with letter-spacing of 2-4px.

**Logo text color rules (contrast-first):**

| Background | Logo text color | Hex |
|------------|----------------|-----|
| Dark (navy, navy-deep, black, or any dark color) | White | `#fafafa` |
| Light (white, light gray, or any light color) | Navy Primary | `#16273f` |

This ensures WCAG AA contrast compliance in all contexts.

**CSS reference for text logo:**
```css
.brand-text {
    font-family: 'Inter', Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(11px, 0.9vw, 15px); /* adjust per context */
    letter-spacing: 3px;
    text-transform: uppercase;
    /* color: #fafafa on dark backgrounds */
    /* color: #16273f on light backgrounds */
}
```

**PNG logo files — LIMITED USE ONLY:**

The following files exist in the `assets/` directory but are ONLY for physical print and DOCX/PDF headers where the logo can be placed inside a matching navy banner:

- `logo_horizontal_navy.png` — Horizontal logo with navy `#16273f` background. Use ONLY in DOCX/PDF headers inside a full-width navy banner so the background blends.
- `logo_horizontal_dark.png` — Horizontal logo with black `#121212` background. Use ONLY on pure black printed backgrounds.

**When to use PNG vs text logo:**

| Format | Logo type | Notes |
|--------|-----------|-------|
| HTML / React / Web | **Text only** | "DE MARKETING" in Inter Bold |
| HTML-to-PDF reports | **Text only** | "DE MARKETING" in Inter Bold in header bar |
| PPTX (presentations) | **Text only** | "DE MARKETING" in Inter Bold |
| Social media assets | **Text only** | "DE MARKETING" in Inter Bold |
| DOCX headers | PNG allowed | Inside full-width navy banner only |
| PDF headers (native) | PNG allowed | Inside full-width navy banner only |
| Print materials | PNG allowed | On matching background only |

**Logo Placement Rules:**

1. **Default position**: Top-left corner of the document/slide/screen.
2. **HTML/Web/Presentations**: Text logo in the brand bar or navigation area. No PNG.
3. **Documents (DOCX/PDF)**:
   - Full-width navy `#16273f` banner at top of the header area, PNG logo top-left inside it, approximately 150px wide.
   - The navy banner ensures the PNG logo's navy background blends invisibly.
   - Footer: thin gray line with "De Marketing | Departamento de Marketing Estratégico Externo | demarketing.mx" in mid gray.


## Print-Optimized HTML Reports (PDF Export via Chrome)

When creating HTML reports designed to be exported as PDF via Chrome's "Print to PDF" function, follow these rules strictly. This is the standard format for all client-facing performance reports, proposals, and presentations generated in HTML.

### Page Structure

Each page is a `<div class="page">` with fixed letter-size dimensions:

```css
@page { size: letter; margin: 0; }

.page {
    width: 8.5in;
    height: 11in;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    page-break-after: always;
    page-break-inside: avoid;
}
.page:last-child { page-break-after: avoid; }
```

**Critical print rules:**
- `print-color-adjust: exact` and `-webkit-print-color-adjust: exact` on `body` to preserve colors
- Each `.page` has `overflow: hidden` to prevent content from bleeding across pages
- ALL content must fit within 8.5×11in — calibrate font sizes and padding to prevent overflow
- Never rely on auto page breaks; manually control content per page

### Header Bar

Every content page (not the cover) has a navy header bar at the top:

```css
.header-bar {
    background: #16273f;
    padding: 12px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
```

Left side: text logo "De Marketing" in Inter Bold 700, white.
Right side: page label in Inter 500, mid-gray, uppercase, letter-spacing 1px.

### Footer

Every page has a footer pinned to the bottom:

```css
.footer {
    border-top: 1px solid #dddfe3;
    padding: 8px 40px;
    color: #808187;
    font-size: 0.6rem;
    text-align: center;
    flex-shrink: 0;
    margin-top: auto;
}
```

Footer text: "De Marketing · Departamento de Marketing Estratégico Externo · demarketing.mx"

### Cover Page

Full navy background, centered content:
- Text logo "De Marketing" in Inter Bold, white, large (1.4rem)
- H1 title: Inter Bold 700, 2.3rem, white
- Subtitle: Inter Regular, 1.1rem, green lime accent
- Date: Inter Regular, 0.85rem, mid-gray
- Client badge: bordered pill in green lime with uppercase text

### Content Body

```css
.body {
    padding: 28px 40px 12px 40px;
    flex: 1;
    overflow: hidden;
}
```

### Typography Scale for Print Reports

All sizes are calibrated to fit letter-size pages without overflow:

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Section title | 1.2rem | Bold 700 | Navy, with green lime 3px bottom border |
| Section subtitle | 0.92rem | SemiBold 600 | Navy Dark |
| Body text | 0.78rem | Regular 400 | Black |
| Small / caption | 0.68rem | Regular 400 | Mid Gray |
| KPI card value | 1.4rem | Bold 700 | Navy (or green lime for accent) |
| KPI card label | 0.6rem | Medium 500 | Mid Gray, uppercase |
| Table header | 0.65rem | SemiBold 600 | White on navy background |
| Table body | 0.72rem | Regular 400 | Black |

### Component Library for Print Reports

**KPI Cards:** 4-column grid with border, rounded corners (8px), centered values:
```css
.kpi-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 12px 0 16px 0;
}
```

**Tables:** Navy header with white text, alternating row backgrounds, right-aligned numbers:
```css
thead th { background: #16273f; color: #fafafa; }
tbody tr:nth-child(even) { background: #f5f6f7; }
td.num { text-align: right; font-variant-numeric: tabular-nums; }
```

**Callout boxes:** Green lime left border for positive highlights, navy left border for context/notes:
```css
.callout {
    background: rgba(155,229,100,0.08);
    border-left: 3px solid #9be564;
    padding: 10px 14px;
    border-radius: 0 6px 6px 0;
}
.callout-navy {
    background: rgba(22,39,63,0.04);
    border-left: 3px solid #16273f;
}
```

**Bar charts (CSS-only):** Horizontal bars with navy/green fills for CPL, CTR, or conversion comparisons.

**Projection box:** Navy background, large green lime number for projected range, white supporting text.

**Next steps / bullet points:** Green lime dot (6-8px) + text, flex layout.

### Chrome PDF Export Instructions

When delivering print HTML reports, include these instructions for the recipient:
1. Open in Chrome
2. Ctrl+P (or Cmd+P on Mac)
3. Destination: "Save as PDF"
4. Paper size: "Letter"
5. Margins: "None"
6. Enable: "Background graphics"


## Features

### Smart Font Application

- Applies Inter font across all text elements with appropriate weight variants
- Headings (24pt and larger): Inter SemiBold/Bold/ExtraBold
- Body text: Inter Regular/Medium
- Metrics and KPIs: Inter ExtraBold 800
- Eyebrows and tags: Inter SemiBold 600
- Automatically falls back to Arial if Inter is unavailable
- Preserves readability across all systems

### Text Styling

- Headings (24pt+): Inter Bold, navy `#16273f`
- Body text: Inter Regular, black `#121212`
- Smart color selection based on background (white text on dark, dark text on light)
- Preserves text hierarchy and formatting

### Shape and Accent Colors

- Primary shapes and backgrounds use navy `#16273f` or navy dark `#2e4769`
- Accent elements (icons, highlights, chart data points, CTAs) use green lime `#9be564`
- Borders and dividers use light gray `#dddfe3`
- Maintains executive, consulting-firm aesthetic while staying on-brand

### Presentation-Specific Guidelines (PPTX)

- **Title slides**: Navy `#16273f` full background, white `#fafafa` text, accent green `#9be564` for subtitle or decorative element
- **Content slides**: White `#fafafa` background, navy headings, black body text, navy banner at top with text logo
- **Data/chart slides**: Navy and green lime as primary chart colors, gray for secondary series
- **Divider slides**: Navy background with white text
- **Footer/page numbers**: Mid gray `#808187`

### Document-Specific Guidelines (DOCX/PDF)

- Header: Full-width navy `#16273f` banner with PNG logo (`logo_horizontal_navy.png`) top-left (DOCX/native PDF only)
- Headers: Inter Bold, navy `#16273f`
- Body: Inter Regular, black `#121212`
- Accent lines or borders: Green lime `#9be564` (thin, 1-2pt)
- Tables: Navy header row with white text, alternating white/light gray rows
- Page numbers and footers: Mid gray `#808187`
- Footer text: "De Marketing | Departamento de Marketing Estratégico Externo | demarketing.mx"

### Web/HTML/React-Specific Guidelines

- Primary buttons: Navy `#16273f` background, white text. Hover: `#2e4769`
- Accent/CTA buttons: Green lime `#9be564` background, navy `#16273f` text
- Cards: White `#fafafa` background, light gray `#dddfe3` border, subtle shadow
- Navigation: Navy `#16273f` background with text logo ("DE MARKETING" in Inter Bold, white) on left
- Links: Navy `#16273f`, hover to `#2e4769`
- Success/positive indicators: Green lime `#9be564`

## Technical Details

### Font Management

- Uses system-installed Inter font when available
- Provides automatic fallback to Arial
- No font installation required — works with existing system fonts
- For best results, pre-install Inter font in your environment (available from Google Fonts)
- For HTML: load via Google Fonts CDN (`fonts.googleapis.com`)

### Color Application

- Uses RGB color values for precise brand matching
- Applied via python-pptx's RGBColor class for presentations
- Uses CSS hex values for web outputs
- Maintains color fidelity across different systems

### RGB Values Reference

| Color | Hex | RGB |
|-------|-----|-----|
| Navy (Primary) | `#16273f` | (22, 39, 63) |
| Navy Dark (Secondary) | `#2e4769` | (46, 71, 105) |
| Black | `#121212` | (18, 18, 18) |
| White | `#fafafa` | (250, 250, 250) |
| Light Gray | `#dddfe3` | (221, 223, 227) |
| Mid Gray | `#808187` | (128, 129, 135) |
| Green Lime (Accent) | `#9be564` | (155, 229, 100) |


## AI-Generated Image Guidelines

### Core Principles

1. **Hyper-realism is mandatory.** Every image — especially those with people — must be indistinguishable from a real photograph or a real professional design. If an image "looks AI," it fails. Reject and regenerate.
2. **No generic stock vibes.** No smiling diverse team around a laptop, no handshake photos, no "business meeting" clichés. De Marketing's imagery must feel editorial, intentional, and premium — like a McKinsey or Harvard Business Review visual.
3. **Brand palette integration.** All images must feel cohesive with De Marketing's color palette. This doesn't mean every image is navy and lime — it means the tonal mood, lighting, and post-processing align with the brand's sophisticated, dark-toned identity.
4. **Every visual must have context.** Never place a growth chart, dashboard, or data visualization as decoration. If it shows data, the data must make sense for the content it accompanies. Numbers, labels, and trends must be plausible and relevant.
5. **Inspired by top-tier consulting, never copied.** The visual language draws from firms like McKinsey (editorial photography + abstract art) but maintains De Marketing's own identity through its color palette, subjects, and digital-native perspective.

### Anti-Patterns — NEVER Generate These

- Hands with wrong finger count or anatomical distortions
- Text in images (AI-generated text is always wrong — add text as overlay in code instead)
- Overly saturated neon colors, purple/pink/electric blue gradients
- People with plastic skin, dead eyes, or uncanny valley features
- Generic stock compositions (pointing at screens, celebrating with fists, etc.)
- Watermarks, artifacts, or blurred edges that reveal AI generation
- Images that feel "busy" or cluttered — De Marketing is minimal and clean
- Emojis or cartoon elements in any professional imagery
- Laptop/phone screens showing clearly fake or unreadable UI

### Image Categories

#### Category 1: Editorial Photography (People)

**When to use:** Blog posts about strategy, leadership, team culture, client relationships, industry insights.

**Style:**
- Ultra-photorealistic — must pass as a professional editorial photograph
- Natural lighting preferred (window light, golden hour, or soft studio)
- Shallow depth of field (f/1.8–f/2.8 equivalent) for environmental portraits
- Candid or semi-posed — never stiff corporate portraits
- Subjects: business professionals in real work contexts (whiteboard sessions, focused analysis, presenting to a small group, walking through a modern office)
- Wardrobe: business casual to smart casual — no suits/ties (too formal), no t-shirts (too casual)
- Diversity must feel natural, not performative
- Skin tones, textures, and lighting must be flawless — no plastic/airbrushed look

**Color grading:**
- Slightly desaturated, warm-neutral tones
- Dark, moody shadows leaning navy/blue-gray (aligning with brand)
- Highlights should be clean white, not blown out
- Overall mood: confident, calm, intelligent — not energetic or startup-casual

**Environments:**
- Modern offices with clean lines, glass, and natural materials
- Conference rooms with natural light
- Coworking spaces that feel premium (not WeWork-generic)
- City contexts (urban architecture, high-rise views) — Monterrey or international

**Prompt structure example:**
```
Editorial photograph, [subject description], [environment], natural window lighting, 
shallow depth of field, slightly desaturated warm tones with cool navy shadows, 
shot on Sony A7IV 85mm f/1.8, editorial style, ultra-realistic, no text
```

#### Category 2: Abstract & Conceptual Art

**When to use:** Blog covers for technical topics (SEO algorithms, analytics frameworks, AI concepts), section backgrounds, decorative elements where a literal image would feel forced.

**Style:**
- Sophisticated abstract compositions — think data-as-art
- Geometric forms, flowing data streams, network visualizations rendered as fine art
- 3D renders are acceptable if they look premium (glass, metal, light refraction)
- Can incorporate brand colors more directly than photography
- Must feel intentional and curated — not random AI art

**Color palette for abstracts:**
- Primary: deep navy (#16273f) and dark backgrounds
- Accent: green lime (#9be564) used as light traces, data points, or glowing elements
- Supporting: white/light gray for contrast, mid-gray for depth
- Allowed accent: subtle warm tones (amber, copper) for variety — but navy/lime should dominate

**Sub-styles:**
- **Data Flow:** Flowing lines, particle systems, or network nodes representing data movement — for analytics and AI content
- **Geometric Precision:** Clean geometric shapes, grids, and structured compositions — for process-oriented content (SEO audits, SEM structure)
- **Light & Material:** Glass, metal, liquid, or light-based abstractions — for innovation and technology content
- **Topographic/Cartographic:** Contour lines, map-like abstractions — for strategy and market analysis content

**Prompt structure example:**
```
Abstract digital art, [concept description], dark navy background (#16273f), 
green lime (#9be564) accent light traces, sophisticated minimal composition, 
8K render, professional art direction, no text, no watermarks
```

#### Category 3: Dashboard & Data Mockups

**When to use:** Case studies, service pages showing results, blog posts about analytics or reporting.

**Rules:**
- **Data must be plausible.** If showing a Google Analytics dashboard, metrics must be realistic (e.g., bounce rate 35-65%, not 2%). If showing ad spend, CPL must align with the industry discussed.
- **Prefer code-rendered dashboards over AI-generated ones.** Build mockup dashboards in HTML/React with real data structures, then screenshot. AI image generators produce fake UIs with unreadable text.
- **If AI-generated:** Show the dashboard on a device (laptop, monitor) at an angle with shallow DOF — this hides UI imperfections and feels more editorial.
- **Brand the dashboard:** Use De Marketing's color palette for the chart colors (navy bars, lime accents, gray secondary).
- **Context required:** Always pair a dashboard image with a caption or surrounding text that explains what the viewer is looking at.

**Acceptable mockup types:**
- Google Analytics/GA4 style dashboards (traffic, conversions, user behavior)
- Google Ads performance dashboards (CTR, CPC, ROAS, impressions)
- SEO ranking trackers (keyword positions, organic traffic growth)
- Social media performance panels
- Custom reporting dashboards in De Marketing's brand style

**Prompt structure for device mockups:**
```
Professional photograph of a MacBook Pro displaying a marketing analytics dashboard, 
clean modern desk setup, shallow depth of field, soft natural lighting, 
navy and lime green color scheme on screen, ultra-realistic, editorial style
```

#### Category 4: Growth & Data Visualizations

**When to use:** Inline in blog posts to illustrate trends, in case studies to show results, as supporting visuals for data-driven arguments.

**Rules:**
- **Build in code, not AI.** Charts and graphs should be rendered with libraries (Chart.js, Recharts, D3) using real or realistic data — never AI-generated charts.
- **Brand colors only:** Navy for primary series, lime for accent/highlight, gray for secondary, white background or navy background.
- **Labels matter.** Every axis, every data point must have a readable label. No decoration-only charts.
- **Types to use:** Line charts (growth over time), bar charts (comparisons), funnel charts (conversion flows), pie/donut (budget allocation). Avoid 3D charts.
- **Animation optional:** If on web, subtle entrance animations are acceptable. If for print/static, clean static renders.

### Guidelines by Content Pillar

Each content pillar has its own visual identity within the De Marketing brand. This ensures visual consistency within a topic while maintaining variety across the site.

#### Pilar 1: SEO (Search Engine Optimization)

**Visual identity:** Precision, structure, organic growth.

**Image types:**
- **Blog covers:** Abstract art with network/graph structures representing link building and site architecture. Flowing organic shapes suggesting natural growth. Topographic contour lines representing search landscape mapping.
- **In-article:** Code-rendered charts showing keyword ranking progressions, organic traffic growth curves, SERP position distributions. Screenshots of actual tools (Search Console, Ahrefs, Semrush) with sensitive data redacted.
- **Conceptual photos:** Overhead shots of structured layouts (architectural blueprints, organized workspaces) as metaphors for site structure and technical SEO.

**Color emphasis:** Navy dominates (representing depth/authority), lime accents on growth metrics and positive trends.

**Mood:** Methodical, analytical, patient — SEO is a long game.

#### Pilar 2: SEM (Search Engine Marketing / Paid Ads)

**Visual identity:** Speed, precision targeting, measurable impact.

**Image types:**
- **Blog covers:** Abstract art with sharp geometric forms, targeting reticles, or precision-cut light beams — representing exact audience targeting. Glass or metallic materials with light refraction.
- **In-article:** Branded dashboard mockups showing ad performance (CTR, CPC, ROAS). Funnel visualizations for conversion paths. Before/after comparisons of campaign optimizations.
- **Conceptual photos:** People analyzing data on screens in focused, high-stakes environments. Close-up shots of screens with analytics (shot at angle with DOF to avoid fake text).

**Color emphasis:** Lime more prominent (representing active performance, real-time results), navy as grounding base.

**Mood:** Dynamic, precise, results-oriented — SEM is about immediate measurable impact.

#### Pilar 3: Analítica Web (Analytics)

**Visual identity:** Clarity from complexity, insight extraction.

**Image types:**
- **Blog covers:** Abstract data-flow visualizations — streams of light converging into clarity. Prism/lens metaphors (raw data entering, structured insight exiting). Neural network or constellation-style node maps.
- **In-article:** GA4 dashboard mockups, funnel visualizations, cohort analysis charts, attribution model diagrams — all code-rendered with brand colors.
- **Conceptual photos:** Professional at a large monitor showing dashboards (shot editorially). Close-up of hands on keyboard with screen reflection showing data.

**Color emphasis:** Balanced navy/lime — navy for the raw data, lime for the insights and discoveries.

**Mood:** Investigative, revelatory, empowering — analytics transforms noise into signal.

#### Pilar 4: Inteligencia Artificial (AI)

**Visual identity:** Sophistication, human augmentation, future-forward.

**Image types:**
- **Blog covers:** Premium 3D abstract renders with glass, metal, and light — representing AI processing. Flowing particle systems or neural pathway visualizations. Human hands interacting with holographic/translucent interfaces (must be hyper-realistic).
- **In-article:** Before/after workflow comparisons, process diagrams showing AI integration points, tool interface screenshots.
- **Conceptual photos:** Professionals working alongside AI tools naturally (not sci-fi). Clean workspace setups with multiple screens showing AI-powered dashboards. Focus on augmentation narrative (human + AI = better), not replacement.

**Color emphasis:** Navy deep backgrounds with lime as the "intelligence glow" — lime represents the AI layer adding value.

**Mood:** Cutting-edge but accessible, empowering not threatening — AI as a competitive advantage.

**Critical rule:** NEVER depict robots, android faces, or sci-fi clichés. De Marketing uses AI practically — imagery should reflect real business application, not futurism.

#### Pilar 5: Diseño Web (Web Design & Development)

**Visual identity:** Craft, precision, visual excellence.

**Image types:**
- **Blog covers:** Abstract compositions inspired by UI grids, layout structures, or component systems. Isometric or perspective views of web page wireframes rendered as art. Material studies (glass cards, layered surfaces, frosted panels).
- **In-article:** Device mockups showing real website examples (De Marketing client sites or reference sites). Code snippets styled in brand colors. Component library previews. Performance score screenshots (Lighthouse, PageSpeed).
- **Conceptual photos:** Designer/developer workspace — clean desk, large monitor with code or design tools, focused professional. Close-up of design details on screen.

**Color emphasis:** Full palette — web design content can showcase the complete De Marketing color system in action through UI examples.

**Mood:** Crafted, intentional, detail-obsessed — every pixel matters.

### Image Specifications

#### Dimensions by Use Case

| Use case | Dimensions | Aspect ratio | Format |
|----------|-----------|--------------|--------|
| Blog cover / OG image | 1200 × 630 px | 1.91:1 | WebP (PNG fallback) |
| Blog hero (full-width) | 1920 × 1080 px | 16:9 | WebP |
| Blog inline image | 800 × 450 px | 16:9 | WebP |
| Case study hero | 1920 × 1080 px | 16:9 | WebP |
| Service page visual | 800 × 600 px | 4:3 | WebP |
| Social media (LinkedIn) | 1200 × 627 px | 1.91:1 | PNG |
| Social media (Instagram) | 1080 × 1080 px | 1:1 | PNG |

#### File Naming Convention

```
[pillar]-[type]-[descriptor].[ext]

Examples:
seo-cover-link-building-strategy.webp
sem-mockup-google-ads-dashboard.webp
analytics-abstract-data-flow.webp
ia-cover-ai-marketing-automation.webp
web-mockup-landing-page-redesign.webp
```

#### Optimization Rules

- All images must be optimized for web (WebP preferred, <200KB for covers, <100KB for inline)
- Provide 2x resolution versions for retina displays when used as hero images
- Always include meaningful `alt` text describing the image content for accessibility
- Lazy-load all images below the fold

### Quality Checklist — Before Publishing Any AI Image

Before using any AI-generated image on the De Marketing site or materials, verify:

- [ ] **Realism test:** Would a viewer assume this is a real photo/professional design? If any doubt, reject.
- [ ] **Hand/face check:** If people are present — count fingers, check eyes, verify anatomical accuracy.
- [ ] **Text check:** No AI-generated text visible anywhere in the image. All text must be added via code overlay.
- [ ] **Brand alignment:** Colors, mood, and style match De Marketing's identity and the specific content pillar.
- [ ] **Context check:** If showing data/charts/dashboards, do the numbers and labels make sense for the topic?
- [ ] **No artifacts:** No blurred edges, watermarks, weird textures, or generation artifacts.
- [ ] **Composition:** Clean, minimal, with clear focal point — not cluttered or busy.
- [ ] **Format:** Correct dimensions and file size for the intended use case.
