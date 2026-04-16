# Verificación — Fases 7, 9, 10

Cubre: Preflight QA (Fase 7) antes de ejecutar, UI check (Fase 9) después de ejecutar, y Activación consciente (Fase 10).

---

## Fase 7 — Preflight QA

### Propósito

**Última línea de defensa** antes de crear cosas en la cuenta del cliente. Si algo está mal, es MUCHO más fácil arreglarlo aquí que después.

### Checklist obligatorio — 20 items

No avanzar a Fase 8 hasta que los 20 estén en verde.

#### Naming y estructura (4)
- [ ] **Nombre de campaña** sigue formato `[Cliente] - [Servicio] - Search`
- [ ] **Nombre de budget** sigue formato `[Cliente] - [Servicio] - Daily`
- [ ] **Nombres de ad groups** describen intent, no son genéricos ("AG 1", "Test")
- [ ] **Mínimo 3 ad groups** (o excepción documentada para cuenta < $10k/mes)

#### Campaña (5)
- [ ] **Status = PAUSED** explícitamente
- [ ] **Channel = SEARCH** (o justificación si otro)
- [ ] **Bidding strategy** coherente con madurez de cuenta (Max Conv para nueva, tCPA para Etapa 2+)
- [ ] **Search Partners = false** (salvo excepción)
- [ ] **Display Network = false** en Search

#### Budget (1 hard + 1 informativo)
- [ ] **Daily budget ≥ $150 MXN** (floor técnico de Google Ads para delivery normal — hard fail)
- [ ] **Info — sin bloqueo:** reportar si daily budget < CPL objetivo × 2. Esta NO es una regla de fricción — es información para que el consultor tome decisión consciente:
   - Si `daily < CPL × 2`: advertir "aprendizaje más lento esperado, ~X conv/mes proyectado, CPL real puede iniciar Y% arriba del target por falta de data" con los números concretos. **Proceder sin override manual.** El consultor/cliente decide el budget; el wizard no impone mínimos arbitrarios.
   - Si `daily ≥ CPL × 2`: reportar "volumen estimado para algoritmo saludable" y seguir.

#### Geo y language (2)
- [ ] **Geo targets definidos** explícitamente (no "todos los países" por default)
- [ ] **Language = 1003 (Spanish)** para México (o el que aplique)

#### Keywords (3)
- [ ] **Cada ad group tiene 8-15 keywords** (no menos, no más)
- [ ] **Match types respetados** (60% Phrase, 30% Exact, 10% Broad solo en Etapa 2+)
- [ ] **Keywords coherentes con el intent del ad group** (no mezclar servicios)

#### Negativos (2)
- [ ] **Lista universal B2B aplicada** (mínimo 40 negativos)
- [ ] **Negativos del vertical aplicados** (si el cliente es de un vertical documentado)

#### Copy / RSAs (7)
- [ ] **10+ headlines por RSA**
- [ ] **4 descriptions por RSA**
- [ ] **Todos los headlines ≤ 30 chars** (sin excepciones)
- [ ] **Todas las descriptions ≤ 90 chars**
- [ ] **path1 y path2 ≤ 15 chars c/u**
- [ ] **Final URL con HTTPS y vivo (HEAD 200)**
- [ ] **Distribución de categorías de headlines respetada** (2 keyword, 2 diferenciador, 2 social proof, 2 CTA, 2 urgencia)

#### Extensiones (2)
- [ ] **Mínimo 4 sitelinks** generados (con title, 2 descriptions, URL viva)
- [ ] **Mínimo 6 callouts** generados
- [ ] **Mínimo 1 structured snippet** con header y 4+ values

#### Conversión (2)
- [ ] **Conversión principal** (ej: `generate_lead`) existe en GA4 como Key Event
- [ ] **Importada a Google Ads** como Primary

### Si algo falla

Cada item falso tiene un archivo de referencia asociado para arreglarlo:

| Item rojo | Fase a revisar | Archivo |
|---|---|---|
| Naming | Fase 2 | `estrategia.md` |
| Structure | Fase 2 | `estrategia.md` |
| Budget | Fase 2 | `estrategia.md` |
| Keywords | Fase 3 | `keywords-y-negativos.md` |
| Negativos | Fase 4 | `keywords-y-negativos.md` |
| Copy | Fase 5 | `copy-rsa.md` |
| Extensiones | Fase 6 | `extensiones.md` |
| Conversión | Fase 0 | `SKILL.md` (pre-requisitos) |

Volver a la fase, corregir, ejecutar preflight OTRA VEZ. Full loop hasta verde.

---

## Fase 9 — Verificación en UI

### Propósito

Confirmar visualmente que la API hizo lo que pedimos. La API puede aceptar una operación pero el resultado puede verse distinto de lo esperado en la UI.

### URL directa a la cuenta

```
https://ads.google.com/aw/campaigns?ocid=[client-ocid]
```

### Checklist de verificación — 15 items

#### Campaña (5)
- [ ] La campaña aparece en la lista con el nombre correcto
- [ ] Icono de PAUSED visible (⏸ gris)
- [ ] Budget diario correcto en columna Budget
- [ ] Status columna dice "Paused"
- [ ] Channel type correcto (Search)

#### Settings de la campaña (abrir detail) (4)
- [ ] Bidding strategy correcto
- [ ] Networks: solo Google Search (no partners, no display)
- [ ] Locations: solo las configuradas
- [ ] Languages: solo las configuradas

#### Ad groups y keywords (3)
- [ ] Todos los ad groups visibles en la sección Ad Groups
- [ ] Cada ad group tiene el número correcto de keywords
- [ ] Cada keyword tiene su match type correcto (verificar con el ícono)

#### Ads (1)
- [ ] Cada ad group tiene 1 RSA con preview funcional
- [ ] Preview muestra 3+ headlines y descriptions mezclados

#### Negativos (1)
- [ ] Sección "Negative Keywords" a nivel campaña muestra la lista completa
- [ ] Match types correctos

#### Extensiones (1)
- [ ] Assets (sitelinks, callouts, structured snippets) aparecen en "Assets" de la campaña

### Acciones según resultado

**Todo verde:** pasar a Fase 10.

**Algo rojo:**
- Item rojo en campaña/budget → `gads_update_campaign_budget`, `gads_update_campaign_status`
- Item rojo en keywords → arreglar en UI o borrar + recrear
- Item rojo en RSA → borrar en UI + regenerar via `gads_create_rsa`
- Item rojo en negativos → `gads_add_negative_keywords` para los faltantes

---

## Fase 10 — Activación consciente

### Regla de oro

**La activación no la hace el operador — la hace el consultor senior (Miguel).**

### Antes de activar — revalidación del consultor senior

1. **Contexto estratégico:** CPL objetivo realista? Budget suficiente? Competencia identificada?
2. **Calidad del output:** 3 headlines random suenan a De Marketing? Description diferencia? 5 keywords intent correcto?
3. **Integración técnica:** `generate_lead` jala en últimos 7 días? Enhanced Conversions? LP <3s PageSpeed? Form llega a GHL?
4. **Billing:** saldo OK, método de pago activo, cliente aprobó monto?

### Comando de activación

```
Tool: gads_update_campaign_status
{
  "customer_id": "XXX-XXX-XXXX",
  "campaign_id": "...",
  "status": "ENABLED"
}
```

### Monitoreo primeras 48 horas — OBLIGATORIO

**Hora 0:** screenshot configuración final para reporte al cliente.

**Hora 6:** impressions > 50, sin alertas de policy violations.

**Hora 24:**
```
gads_campaign_performance(customer_id, date_range="last_1d")
```
- Impressions > 100, Clicks > 5, CPC esperado
- Si hay conv → revisar CPL

**Hora 48:**
```
gads_search_terms(customer_id, campaign_id, date_range="last_2d", filter="no_conversions")
```
- Agregar negativos a terms irrelevantes
- Pausar keyword con 5+ clics 0 conv
- Pausar campaña si CPL > 2× target

### Señales de que algo está mal (Fase 10.5 — intervención)

**Pausar inmediatamente si en 24 horas:**
- CPL > 3× target
- Conv rate < 0.5% con 50+ clicks (LP rota o copy no matchea)
- 0 conversions con 100+ clicks (tracking roto)
- Policy violations
- Click fraud obvio
- Quality Score < 4 en keywords principales

**Acción:**
1. `gads_update_campaign_status` → PAUSED
2. Diagnóstico con `sem-google-demarketing`
3. Arreglar causa raíz
4. Re-activar

### Reporte al cliente post-activación

```
Subject: Campaña Google Ads — [Cliente] — Activada

Hola [Contacto del cliente],

Activamos tu campaña de Google Ads hoy. Aquí el resumen:

✅ Campaña: [Nombre]
✅ Budget mensual: $X,XXX MXN
✅ CPL objetivo: $XXX MXN
✅ Servicios/keywords cubiertos: X ad groups con Y keywords
✅ Extensiones: X sitelinks, X callouts

📊 Primer reporte: en 7 días con CPL real y recomendaciones
🚨 Monitoreamos las primeras 48h de cerca para ajustes tempranos

Cualquier pregunta, aquí estamos.

[Equipo De Marketing]
```

### Documentación post-activación

Guardar en command center del cliente:
- Screenshot de la campaña configurada
- IDs (budget, campaign, ad_groups, keywords, RSA)
- Fecha/hora de activación
- Quién revisó y aprobó
- Expectativas documentadas (CPL, volumen en 30 días)
