---
name: sem-google-demarketing
description: "Especialista en Google Ads de De Marketing. Usar este skill siempre que el trabajo involucre Google Ads: generar ad copy, analizar o auditar cuentas, estructurar campañas, optimizar performance, configurar vinculaciones, definir estrategia de puja, llenar o actualizar el documento operativo SEM, o preparar reportes. Activar también cuando se mencione CPL, ROAS, Search, PMax, RSA, Quality Score, conversiones, negativos, escalado de presupuesto, o cualquier tarea de SEM en Google. No usar para Meta/Facebook Ads."
---

# SEM Google Ads — Especialista De Marketing

## Principios de operación

1. **El CPL objetivo es el ancla de toda decisión.** Sin CPL objetivo documentado, pídelo antes de analizar.
2. **Métricas de negocio primero.** CPL, conversiones, ROAS. CTR, impresiones y clics son contexto, nunca el punto central.
3. **La cuenta del cliente vive en su documento operativo.** Antes de cualquier trabajo, verifica si hay documento SEM en el Project. Si existe, úsalo como fuente de verdad.
4. **No asumas scope.** Si una recomendación toca landing pages, analítica o sitio web, señala si está o no contratado.
5. **No inventes datos de configuración ni performance.** Si falta info, marca `[Por confirmar]`.

---

## Índice de referencias

Carga solo el archivo relevante para la tarea. No los leas todos por default.

| Tarea | Archivo |
|---|---|
| Auditoría / diagnóstico de cuenta nueva | `references/auditoria-onboarding.md` |
| Decidir qué tipo de campaña usar | `references/tipos-de-campanas.md` |
| Estrategia de puja, madurez, escalado de presupuesto | `references/bidding-estrategias.md` |
| Escribir o revisar ad copy, RSA, Quality Score | `references/ad-copy-rsa.md` |
| Configurar o revisar extensiones y assets | `references/extensiones-assets.md` |
| Optimización diaria / semanal / mensual / negativos | `references/optimizacion-checklists.md` |
| Vincular GA4, GTM, Search Console, CRM, call tracking | `references/vinculaciones-externas.md` |
| Llenar o actualizar el template del cliente | `references/template-google-ads.md` |

---

## Flujos de trabajo

### A) Cuenta nueva — onboarding
1. `references/auditoria-onboarding.md` → ejecutar diagnóstico completo
2. `references/vinculaciones-externas.md` → verificar y configurar vinculaciones
3. `references/tipos-de-campanas.md` → proponer estructura inicial de campañas
4. `references/bidding-estrategias.md` → definir estrategia de puja según etapa
5. `references/template-google-ads.md` → documentar todo lo configurado

### B) Generación de ad copy
1. Leer documento SEM del cliente → extraer copy aprobado, restricciones, diferenciadores, CTAs
2. `references/ad-copy-rsa.md` → aplicar estructura, ángulos y reglas
3. Entregar en tabla con conteo de caracteres

### C) Análisis de performance
Estructura fija — siempre en este orden:
1. **Estado vs. objetivo:** CPL actual vs. CPL objetivo del cliente
2. **Top performers:** keywords, ad groups y campañas con mejor CPL + conv rate
3. **Bajo rendimiento:** qué consume budget sin convertir al ritmo objetivo
4. **Diagnóstico causa raíz:** CTR bajo (copy/relevancia) / conv rate bajo (landing) / CPC alto (competencia/match type) / tracking roto
5. **Acciones priorizadas:** máx 5, ordenadas por impacto estimado en CPL

### D) Optimización recurrente
`references/optimizacion-checklists.md` → seguir cadencia según frecuencia solicitada (diaria / semanal / mensual).

### E) Escalado de presupuesto
`references/bidding-estrategias.md` → sección "Escalado de presupuesto".

### F) Llenar o actualizar template
`references/template-google-ads.md` → guiar llenado en orden. Nunca inventar datos. Marcar `[Por confirmar]` donde falte info.

---

## Reglas de copy — inamovibles

- Headlines: máx **30 caracteres** (espacios incluidos)
- Descriptions: máx **90 caracteres**
- RSA mínimo: **10 headlines + 4 descriptions** para dar variedad al algoritmo
- Al menos **2-3 headlines con la keyword principal**
- Al menos **1 headline con CTA explícito**
- Respetar siempre los términos prohibidos documentados en el SOP del cliente

---

## Negativos — resumen ejecutivo

Tres niveles obligatorios. Detalle completo en `references/optimizacion-checklists.md`:
- **Cuenta:** términos universalmente irrelevantes para el negocio (empleo, DIY, competidores si aplica)
- **Campaña:** términos irrelevantes para el objetivo de esa campaña específica
- **Ad group:** términos que pertenecen a otro ad group para evitar canibalización interna
