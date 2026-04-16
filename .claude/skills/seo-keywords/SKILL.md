---
name: seo-keywords
description: "Ensures all web copy is keyword-focused for SEO. Each project has a .keywords.md file with target keywords, search intent, and priority. TRIGGER when: writing page copy, creating blog posts, editing headings, writing meta descriptions, creating new pages, user mentions keywords, posicionamiento, palabras clave, SEO copy, keyword-focused, rankear, posicionar."
user-invocable: true
argument-hint: "[audit|list|suggest]"
---

# SEO Keywords — Keyword-Focused Writing

Este skill asegura que TODO el copy del sitio web este alineado con las palabras clave target para posicionamiento organico. No basta con escribir buen copy — tiene que incluir los terminos que la gente busca.

## Como Funciona

Cada proyecto web tiene un archivo `.keywords.md` en la raiz del proyecto. Este archivo es la fuente de verdad de que keywords queremos posicionar.

**Antes de escribir CUALQUIER copy** (headings, body text, meta descriptions, blog posts, alt text), consulta `.keywords.md` para asegurar que incluyas las keywords relevantes de forma natural.

---

## Estructura de `.keywords.md`

El archivo debe tener este formato:

```markdown
# Target Keywords — [Nombre del Proyecto]

## Primary Keywords (posicionar en top 3)
| Keyword | Search Intent | Volume | Current Position | Target Page |
|---------|--------------|--------|-----------------|-------------|
| [keyword] | [informational/transactional/navigational] | [alto/medio/bajo] | [#pos o "no rankea"] | [/ruta] |

## Secondary Keywords (posicionar en top 10)
| Keyword | Search Intent | Volume | Target Page |
|---------|--------------|--------|-------------|
| [keyword] | [intent] | [vol] | [/ruta] |

## Long-tail Keywords (blog posts y contenido)
| Keyword | Search Intent | Target Content |
|---------|--------------|---------------|
| [keyword] | [intent] | [blog post o seccion] |

## Keyword Clusters
| Cluster/Pilar | Keywords del cluster |
|--------------|---------------------|
| [tema pilar] | kw1, kw2, kw3, kw4 |
```

---

## Reglas de Implementacion

### Donde colocar keywords

| Elemento | Regla | Ejemplo |
|----------|-------|---------|
| **H1** | Keyword primaria del target page. Solo 1 H1 por pagina. | "Consultoria en Marketing Digital para Empresas B2B" |
| **H2-H3** | Keywords secundarias o variantes naturales. | "Estrategia de Marketing Digital Basada en Datos" |
| **Meta title** | Keyword primaria al inicio. Max 60 chars. | "Marketing Digital para Empresas \| Miguel Cantu" |
| **Meta description** | Keyword primaria + CTA. Max 155 chars. Natural, no stuffing. | "Consultoria en marketing digital para empresas B2B en Mexico. Estrategia basada en datos. Agenda una consulta sin compromiso." |
| **First paragraph** | Keyword primaria en las primeras 100 palabras del body. | |
| **Alt text de imagenes** | Keyword relevante + descripcion real de la imagen. | alt="Miguel Cantu consultor de marketing digital en conferencia" |
| **URL slug** | Keyword en slug, separada por guiones. Corto. | /consultoria/marketing-digital |
| **Internal links** | Anchor text con keywords (no "click aqui"). | `<a href="/consultoria/marketing-digital">consultoria en marketing digital</a>` |
| **Blog post titles** | Long-tail keyword como titulo. | "Que es la Transformacion Digital y Por Que Importa en 2026" |

### Reglas de densidad y naturalidad

1. **Keyword density 1-2%** — no mas. Si suena forzado, reescribe.
2. **Usa variantes naturales** — sinonimos, plural/singular, con/sin acento, reordenado.
3. **Nunca sacrifiques legibilidad por keywords** — el copy debe sonar humano primero.
4. **LSI keywords** — incluye terminos relacionados que Google espera ver junto a tu keyword.
5. **No repitas la misma keyword en H1 y H2** — usa variantes.

### Ejemplo de variantes naturales

Keyword primaria: "consultoria en marketing digital"
Variantes validas:
- consultoria de marketing digital
- consultor de marketing digital
- asesoria en marketing digital
- consultoria marketing digital Mexico
- estrategia de marketing digital

---

## Workflow por Tipo de Contenido

### Al escribir una pagina nueva
1. Leer `.keywords.md` → identificar keyword primaria + 2-3 secundarias para esa pagina
2. Escribir H1 con keyword primaria
3. Escribir meta title (keyword al inicio) y meta description (keyword + CTA)
4. Body: keyword primaria en primer parrafo, secundarias en H2s y body
5. Verificar: anchor text de links internos usa keywords

### Al escribir un blog post
1. Leer `.keywords.md` → seccion "Long-tail Keywords"
2. Titulo = long-tail keyword (o variante natural)
3. Meta description con la keyword
4. Keyword en primeras 100 palabras
5. H2s cubren subtemas del cluster
6. Internal links a paginas que queremos posicionar (con anchor text keyword)

### Al auditar copy existente
1. Leer `.keywords.md`
2. Para cada pagina target: verificar que la keyword primaria aparece en H1, title, description, first paragraph
3. Verificar internal links con anchor text keyword
4. Buscar paginas sin keyword asignada (oportunidad perdida)
5. Buscar keywords sin pagina target (necesita contenido nuevo)

---

## Comandos

### `/seo-keywords audit`
Lee `.keywords.md` y audita las paginas del sitio contra las keywords target. Reporta: keywords presentes, ausentes, mal posicionadas.

### `/seo-keywords list`
Muestra la lista de keywords target del proyecto actual.

### `/seo-keywords suggest`
Analiza el contenido actual del sitio y sugiere keywords adicionales basado en el contenido existente, competencia, y gaps.

---

## Integracion con Otros Skills

| Skill | Como se integra |
|-------|----------------|
| `copywriting` | Usa este skill ANTES de copywriting. Primero define keywords, luego escribe copy. |
| `copy-editing` | Al editar copy, verifica que las keywords no se pierdan en la edicion. |
| `seo-audit` | seo-audit revisa el SEO tecnico. seo-keywords revisa el SEO de contenido. Se complementan. |
| `content-strategy` | Los keyword clusters definen la estrategia de blog. Pillar pages = keyword clusters. |
| `web-sections-catalog` | Al planear secciones, verifica que las keywords target tengan donde vivir. |
| `schema-markup` | Keywords informan que schema usar (FAQPage si hay keywords de pregunta, HowTo si hay keywords de proceso). |
