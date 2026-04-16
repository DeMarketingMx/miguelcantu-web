---
name: frontend-marketing-design
description: "Frontend design intelligence for B2B/consulting marketing websites. Auto-detects what needs improvement and applies the right Impeccable design skills + Envato reference patterns. TRIGGER when: user mentions design, improve, polish, fix UI, make it look better, mejorar diseño, se ve feo, se ve genérico, secciones, layout, rediseñar, looks off, needs work, diseño, visual, estética, look and feel, UI. Also triggers on: build page, create section, new landing, build website. Projects: website, landing page, sections, components. Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance."
user-invocable: true
argument-hint: "[improve|audit|system|reference]"
---

# Frontend Marketing Design

Unified design intelligence for B2B/consulting marketing websites. This skill is the **single entry point** for all design work — the user should never need to remember specific design commands.

## What This Skill Does

1. **Auto-detects** what aspect of the design needs work
2. **Routes** to the right Impeccable skill(s) internally
3. **References** professional Envato section patterns as quality targets
4. **Generates** design systems using searchable data (67 styles, 96 palettes, 57 font pairings)

---

## Auto-Routing: How to Handle Design Requests

When the user asks anything design-related, DO NOT ask them which specific skill to use. Instead, analyze the situation and apply the right ones automatically.

### Step 1: Detect Intent

| User says (ES/EN) | Category | What to do |
|---|---|---|
| "mejora el diseño" / "improve the design" | Full review | Audit first, then polish |
| "se ve genérico" / "looks generic/templated" | Distinctiveness | Make bolder, add personality |
| "se ve muy cargado" / "too busy/cluttered" | Simplification | Distill, then quiet down |
| "las fuentes no se ven bien" / "fonts look bad" | Typography | Fix type hierarchy and pairing |
| "los colores no me gustan" / "colors are off" | Color | Rebuild palette |
| "el layout está raro" / "layout feels off" | Spatial | Fix arrangement and rhythm |
| "no se ve bien en móvil" / "not responsive" | Responsive | Adapt for all viewports |
| "necesita animaciones" / "needs animations" | Motion | Add purposeful motion |
| "hazlo accesible" / "make it accessible" | A11y | Harden for accessibility |
| "dale más vida" / "needs more polish" | Delight | Polish + add delightful details |
| "necesito el design system" / "extract tokens" | System | Extract design tokens |
| "simplifica" / "simplify" | Reduction | Clarify copy, distill UI |
| "crea una sección de..." / "build a section for..." | Build | Use Envato patterns + Impeccable craft |
| "proyecto nuevo" / "new project" | Setup | Run context gathering flow |

### Step 2: Gather Context (if missing)

Before any design work, check for context in this order:
1. **Brand skill**: Check if there's a brand skill loaded (e.g., blk-brand, enerlogix-brand). Use it.
2. **`.impeccable.md`** in project root: If exists, use it.
3. **Ask 3 quick questions**: Target audience, brand personality (3 words), visual direction (light/dark, bold/refined).

### Step 3: Apply Design Skills

Execute the Impeccable skills by following the instructions in `~/.agents/skills/<skill-name>/SKILL.md`. Apply them in logical order:

**For full design improvement:**
1. `/audit` — Score current state, identify issues
2. `/arrange` — Fix layout and spacing first
3. `/typeset` — Fix typography hierarchy
4. `/colorize` — Improve color palette
5. `/polish` — Final detail pass

**For new builds:**
1. Check Envato reference patterns (see below)
2. `/impeccable craft` — Full shape-then-build flow
3. `/polish` — Final refinement

**For specific fixes:** Apply the single relevant skill directly.

### Step 4: Reference Envato Patterns

When building or improving sections, view the Envato screenshots for quality reference:
- **Bizio screenshots**: `~/.claude/skills/frontend-marketing-design/reference/envato/bizio/`
- **Consultry screenshots**: `~/.claude/skills/frontend-marketing-design/reference/envato/consultry/`

Read the relevant screenshot image to see the visual target before implementing.

---

## Envato Section Patterns Catalog

These are the professional section patterns extracted from Envato templates (Bizio + Consultry). Use them as the quality baseline for all client websites.

### HERO Sections

**Bizio Hero** (Navy/Corporate):
- Split layout: headline left + large photo right
- Sub-headline with description paragraph
- CTA button (primary, solid fill)
- Stats row below hero (3 numbers with labels): "135+" clients, etc.
- Trust badge: star rating + review count
- Background: white with subtle gray section below

**Consultry Hero** (Green/Professional):
- Centered headline with left-aligned text
- Video play button overlay on background image
- Logo bar of client brands below hero
- CTA: single green button "Expert More"
- Stats row: 4 large numbers (12+, 400+, 375%, 86%)
- Clean white background with green accents

### SERVICES Sections

**Bizio Services**:
- Section label "Our Services" above headline
- 2-column grid: 4 services top row + 4 bottom row
- Each: icon (outlined, navy) + bold title + short description
- Clean white cards, no borders, subtle spacing
- Alternate: detailed services page with icon grid + testimonials + FAQ

**Consultry Services**:
- Left-aligned headline with paragraph
- Progress bars showing expertise percentages
- Image with feature card overlay
- Service category tabs/icons below

### ABOUT / WHY US Sections

**Bizio About**:
- Split: text + stats left, photo right
- Large stats: "17+", "40%", "211+" with labels
- Highlighted blue banner section with checklist (checkmarks + bullet points)
- Achievement cards with percentages
- Values grid: 6 numbered values (01-06) with title + description

**Consultry About**:
- Split: large photo left, text + feature cards right
- Feature cards with green icons
- Organic/rounded aesthetic on photo edges

### TESTIMONIALS Sections

**Bizio Testimonials**:
- Grid layout: 6 testimonials in masonry-style
- Quote text + person name + role + small avatar
- Left sidebar with section title + "Learn More" button
- Dark navy background variant available

**Consultry Testimonials**:
- Full-width dark background with centered carousel
- White text on dark, client logos below

### PROCESS / STEPS Sections

**Bizio Process**:
- "4 Easy Steps" section
- Horizontal flow: numbered circles (01-04)
- Each: icon + step title + description
- Connected by visual flow line
- Light gray background

### PRICING Sections

**Bizio Pricing**:
- Split intro: headline left, description right
- 3 pricing cards side by side
- Middle card highlighted (raised, different border)
- Each: plan name, price, features list with checkmarks, CTA button
- Dark navy pricing on white background

**Consultry Pricing**:
- 3 cards with green accent on featured card
- Clean white cards with green CTA buttons

### CASE STUDIES / PORTFOLIO

**Bizio Cases**:
- Grid of cards with large image, category tag, date, author
- Title + excerpt + "Read More" link
- 3-column grid on desktop

### TEAM Sections

**Bizio Team**:
- Large portrait photos (cropped artistic angles)
- Name + role below each photo
- 3-column grid, 2 rows
- Logo bar section below

**Consultry Team**:
- Circular avatar photos
- Centered names, social media icons
- Star ratings visible

### CTA Sections

**Bizio CTA**:
- "Let's Collaborate With Us!" with full-width dark navy background
- Short copy + single CTA button
- Simple, bold, effective

**Consultry CTA**:
- Green banner: "Start consulting for your business or company now."
- Clean, prominent green background

### FAQ Sections

**Bizio FAQ**:
- 2-column accordion layout
- Clean expand/collapse with question + answer
- White background, subtle borders

### FOOTER

**Bizio Footer**:
- Dark navy background
- Logo + description left, Newsletter center, Navigation + Support right
- Contact info with icons
- Social media icons
- Copyright bar at bottom

**Consultry Footer**:
- Dark green background
- Logo left, Newsletter with email input, Navigation columns right
- Social media icons row

### BLOG Sections

**Bizio Blog**:
- Featured large card (horizontal) + 2 smaller cards (vertical stack)
- Image + category + date + title + excerpt
- "Read More" links

---

## Design System Search Tool

For generating complete design systems with recommended styles, colors, typography, and patterns:

### Generate Design System (REQUIRED for new projects)

```bash
python3 ~/.claude/skills/frontend-marketing-design/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "Project Name"
```

### Search Specific Domains

```bash
python3 ~/.claude/skills/frontend-marketing-design/scripts/search.py "<keyword>" --domain <domain>
```

| Domain | Use For |
|--------|---------|
| `product` | Product type recommendations |
| `style` | UI styles and effects |
| `typography` | Font pairings (Google Fonts) |
| `color` | Color palettes by industry |
| `landing` | Page structure and CTA strategies |
| `chart` | Chart types and libraries |
| `ux` | Best practices and anti-patterns |

### Stack Guidelines

```bash
python3 ~/.claude/skills/frontend-marketing-design/scripts/search.py "<keyword>" --stack nextjs
```

Available: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `shadcn`

---

## Impeccable Design Reference

The Impeccable skills provide deep reference material in:
- `reference/typography.md` — OpenType features, web font loading, type scales
- `reference/color-and-contrast.md` — OKLCH, contrast ratios, palette construction
- `reference/spatial-design.md` — Grids, container queries, optical adjustments
- `reference/motion-design.md` — Timing, easing, reduced motion
- `reference/interaction-design.md` — Forms, focus, loading patterns
- `reference/responsive-design.md` — Mobile-first, fluid design, container queries
- `reference/ux-writing.md` — Labels, errors, empty states
- `reference/craft.md` — Full shape-then-build workflow

Consult these when doing detailed work in each area.

---

## Key Design Rules (Always Apply)

### Typography
- Use modular type scale with `clamp()` for headings
- Pair a distinctive display font with a refined body font
- NEVER use: Inter, Roboto, Syne, DM Sans, Playfair Display, or any font from Impeccable's reflex list
- Cap body text at ~65-75ch line length
- Line-height: 1.5-1.75 for body, tighter for large headings

### Color
- Use OKLCH, not HSL
- Tint neutrals toward brand hue (even 0.005 chroma matters)
- 60-30-10 rule: 60% neutral, 30% secondary, 10% accent
- NEVER: pure black/white, purple-to-blue AI gradients, gradient text

### Layout
- 4pt spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
- Use `gap` instead of margins for sibling spacing
- Vary spacing for hierarchy — don't apply same padding everywhere
- NEVER: nest cards inside cards, identical card grids everywhere

### Absolute Bans
- NO side-stripe borders (border-left > 1px) on cards/callouts
- NO gradient text (background-clip: text + gradient)
- NO glassmorphism everywhere
- NO bounce/elastic easing
- NO monospace typography as lazy "technical" shorthand

---

## Pre-Delivery Checklist

Before delivering any design work:

- [ ] No emojis as icons (use SVG: Heroicons, Lucide)
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide visual feedback (150-300ms transitions)
- [ ] Text contrast minimum 4.5:1
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] `prefers-reduced-motion` respected
- [ ] Sections match Envato reference quality level
- [ ] Brand skill guidelines followed (if applicable)
