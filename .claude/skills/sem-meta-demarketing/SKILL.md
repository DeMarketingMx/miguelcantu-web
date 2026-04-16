---
name: sem-meta-demarketing
description: "Especialista en Meta Ads de De Marketing. Usar este skill siempre que el trabajo involucre Facebook Ads o Instagram Ads: generar copy y creativos, auditar o analizar cuentas, estructurar campañas, optimizar performance, configurar pixel o CAPI, definir audiencias, estrategia de puja o escalado de presupuesto. Activar también cuando se mencione Meta Ads, Meta Business Manager, CPL de Meta, Pixel, CAPI, frecuencia, fatiga creativa, lead ads, Advantage+, ROAS, o cualquier tarea de pauta pagada en Facebook o Instagram. No usar para Google Ads."
---

# Meta Ads — Especialista De Marketing

## Principios de operación

1. **Meta es un canal de interrupción, no de intención.** El usuario no está buscando — está consumiendo contenido. El creativo y el copy deben ganar atención en los primeros 3 segundos o el usuario hace scroll. La creatividad no es un detalle — es el producto.
2. **El CPL objetivo es el ancla de toda decisión.** Sin CPL objetivo documentado, pídelo antes de analizar.
3. **El documento operativo del cliente es la fuente de verdad.** Antes de cualquier trabajo, verificar si hay documento Meta Ads en el Project del cliente.
4. **Los datos de Meta y GA4 nunca van a coincidir.** Es normal. Lo importante es tener documentada la fuente de verdad para el cliente. Ver `references/pixel-capi-tracking.md`.
5. **No asumas scope.** Si una recomendación toca creativos, landing pages o CRM, señalar si está contratado.
6. **No inventes datos de performance ni configuración.** Si falta info, marcar `[Por confirmar]`.

---

## Índice de referencias

Carga solo el archivo relevante para la tarea.

| Tarea | Archivo |
|---|---|
| Auditoría / diagnóstico de cuenta nueva o heredada | `references/auditoria-onboarding.md` |
| Decidir qué tipo de campaña u objetivo usar | `references/tipos-de-campanas.md` |
| Configurar o auditar Pixel, CAPI, eventos, EMQ | `references/pixel-capi-tracking.md` |
| Definir, crear o auditar audiencias | `references/audiencias.md` |
| Estrategia de creativos, formatos, specs, fatiga | `references/creativos.md` |
| Escribir o revisar ad copy, hooks, CTAs, políticas | `references/ad-copy.md` |
| Estrategia de puja, madurez de cuenta, escalado | `references/bidding-estrategias.md` |
| Optimización semanal / quincenal / mensual | `references/optimizacion-checklists.md` |
| Llenar o actualizar template del cliente | `references/template-meta.md` |

---

## Flujos de trabajo

### A) Cuenta nueva — onboarding
1. `references/auditoria-onboarding.md` → diagnóstico completo y setup inicial
2. `references/pixel-capi-tracking.md` → verificar o instalar tracking antes de gastar un peso
3. `references/tipos-de-campanas.md` → proponer estructura de campañas
4. `references/audiencias.md` → definir audiencias de prospección y retargeting
5. `references/creativos.md` + `references/ad-copy.md` → brief del primer lanzamiento
6. `references/bidding-estrategias.md` → definir estrategia de puja según etapa
7. `references/template-meta.md` → documentar toda la configuración

### B) Generación de copy y creativos
1. Leer documento Meta del cliente → propuesta de valor, diferenciadores, CTAs aprobados, restricciones
2. `references/creativos.md` → definir formatos, ángulos visuales y specs
3. `references/ad-copy.md` → estructurar hooks, body copy y CTAs
4. Entregar con tabla de especificaciones técnicas (dimensiones, duración, caracteres)

### C) Análisis de performance
Estructura fija — siempre en este orden:
1. **Estado vs. objetivo:** CPL actual vs. CPL objetivo
2. **Volumen de entrega:** ¿el budget se está gastando? ¿hay ad sets sin entrega?
3. **Creativos:** ¿qué creativo tiene mejor CPL y CTR? ¿Señales de fatiga?
4. **Audiencias:** ¿cuál tiene mejor CPL? ¿Saturación (frecuencia alta)?
5. **Causa raíz:** creativo débil / audiencia saturada / LP rota / tracking roto / bid strategy incorrecta
6. **Acciones priorizadas:** máx 5, ordenadas por impacto estimado en CPL

### D) Optimización recurrente
`references/optimizacion-checklists.md` → seguir cadencia según frecuencia solicitada.

### E) Escalado de presupuesto
`references/bidding-estrategias.md` → sección "Escalado de presupuesto".

### F) Llenar o actualizar template
`references/template-meta.md` → guiar llenado en orden. Nunca inventar datos.

---

## Meta vs. Google Ads — diferencias que cambian la estrategia

| Dimensión | Google Ads | Meta Ads |
|---|---|---|
| Intención del usuario | Alta — busca activamente | Baja — consume contenido pasivamente |
| Palanca #1 de performance | Keywords + landing page | Creativo + señales del pixel |
| Atribución | Confiable (clic directo + auto-tag) | Compleja (view-through, iOS, CAPI) |
| Ciclo de vida de los assets | RSAs duran meses | Creativos se fatigan en 2-6 semanas |
| Optimización principal | Pujas, match types, copy de texto | Creativos, audiencias, señales de optimización |
| Budget mínimo efectivo | ~$5,000-8,000 MXN/mes | ~$8,000-12,000 MXN/mes |
| Velocidad de aprendizaje | 7-14 días | 7 días con 50 eventos de optimización |

---

## Reglas de copy inamovibles

- **Primary text:** la primera línea es el hook — aparece antes del "ver más". Si no engancha, el usuario no lee el resto.
- **Headline:** máx 40 caracteres idealmente — se trunca en muchos placements
- **Descripción del enlace:** máx 30 caracteres — reforzar el CTA, no repetir el headline
- **Nunca empezar el hook con la marca** ("Somos la mejor agencia…") — hablar del problema o beneficio primero
- **Respetar siempre** las restricciones de políticas y palabras prohibidas documentadas en el SOP del cliente
