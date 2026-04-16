# Audiencias — Meta Ads

## Los tres niveles del funnel

```
FRÍO (Prospección)                   TIBIO (Retargeting)               CALIENTE
─────────────────────────────────    ──────────────────────────────    ──────────────────
Core Audiences (intereses)           Visitantes del sitio web          Conversores recientes
Lookalike de conversores             Engagement IG/FB                  Clientes actuales
Lookalike de customer list           Viewers de video 50%+             → Excluir en prospección
Advantage+ Audience                  Abrieron Instant Form             → Lookalike de calidad
```

---

## Core Audiences (Intereses y Comportamientos)

### Cuándo usar
- Cuentas nuevas sin historial de pixel ni customer list suficiente
- Nichos donde los intereses están muy bien definidos
- Complemento cuando Advantage+ no entrega bien

### Segmentación disponible

**Demografía:** edad, género, ubicación (radio en km desde una dirección), idioma

**Intereses:** Meta los infiere del comportamiento online. Categorías amplias o específicas.

**Comportamientos:** tipo de dispositivo, compradores frecuentes online, comportamiento de negocios

**Targeting B2B en Meta (limitado vs. LinkedIn):**
- Cargo (Job Title) — calidad variable, Meta se basa en lo que el usuario declara en su perfil
- Sector y tamaño de empresa
- Nivel educativo como proxy para roles senior
- **Regla:** en B2B, los intereses (marketing digital, negocios, emprendimiento) suelen funcionar mejor que el targeting por cargo. El cargo declarado en Facebook no es tan confiable como en LinkedIn.

### Tamaños recomendados para México

| Tipo | Tamaño |
|---|---|
| Prospección nicho B2B | 200K - 1M |
| Prospección B2C | 500K - 5M |
| Retargeting | Mínimo 1,000 personas activas |
| Lookalike 1% México | ~100-300K |

---

## Custom Audiences

### Pixel — Visitantes del sitio web

| Audiencia | Ventana | Uso |
|---|---|---|
| Todos los visitantes | 30 días | Base de retargeting |
| Todos los visitantes | 60-90 días | Base para Lookalike |
| Visitantes página de servicio | 30 días | Retargeting alta intención |
| Visitantes página de precios | 14-30 días | Retargeting urgente |
| Conversores | 90-180 días | Exclusión en prospección + Lookalike |
| Abandono de carrito | 14-30 días | Retargeting urgente (ecommerce) |

### Customer List

Subir emails y/o teléfonos de:
- **Clientes actuales** → excluir de prospección, crear Lookalike
- **Leads calificados (MQLs/SQLs)** → retargeting con mensaje de conversión, Lookalike
- **Leads fríos** → retargeting con nurturing

**Cómo subir:** Audiences → Crear audiencia → Custom Audience → Lista de clientes → CSV

**Match rate esperado:** 40-70% es normal. Si es < 30%:
- Revisar que los emails son personales (no corporativos — Meta tiene más cuentas personales)
- Agregar teléfono además del email para mejorar el matcheo

**Frecuencia de actualización:** mensual mínimo. Lista desactualizada = audiencia pequeña y match rate bajo.

### Engagement en Meta

| Audiencia | Fuente | Ventana | Uso |
|---|---|---|---|
| Interactuaron con página Facebook | Facebook Page | 30-90 días | Retargeting |
| Interactuaron con perfil Instagram | Instagram Business | 30-90 días | Retargeting |
| Abrieron Instant Form (no enviaron) | Lead Form | 7-30 días | Retargeting con fricción diferente |
| Enviaron Instant Form | Lead Form | 90 días | Exclusión + Lookalike |
| Vieron video al 50%+ | Video ad | 30-90 días | Retargeting intención media |
| Vieron video al 95%+ | Video ad | 30-90 días | Muy alta intención |

---

## Lookalike Audiences

Meta analiza la audiencia base e identifica perfiles similares en Facebook/Instagram.

### Cuándo crear Lookalikes
- Base tiene mínimo 100 personas (Meta recomienda 1,000-50,000 para mejor calidad)
- Hay suficiente historial de conversiones (mínimo 30-50 conversiones en la base)

### Mejores bases (de más a menos calidad)

1. **Conversores del pixel** (enviaron formulario, compraron)
2. **Customer list de clientes actuales**
3. **Customer list de MQLs calificados**
4. **Visitantes de páginas de alta intención** (precios, contacto, servicios)
5. **Engagement de IG/FB** (calidad más baja pero útil si no hay más datos)

### Porcentaje de Lookalike para México

| % | Similitud | Cuándo usar |
|---|---|---|
| 1% | Alta | Budget suficiente para audiencia pequeña pero de calidad |
| 2-3% | Media | Balance calidad/volumen |
| 5-10% | Baja | Cuando 1-3% se satura o se necesita más escala |

Empezar con 1%. Expandir a 2-3% cuando la frecuencia del 1% supera 3+ o el CPL sube.

---

## Advantage+ Audience

Permite dar al algoritmo una audiencia sugerida como punto de partida, pero Meta puede ir más allá si encuentra mejores resultados afuera de esa audiencia.

### Cuándo usar
- Cuentas con buen historial de pixel (50+ conversiones/mes)
- Cuando las audiencias core se saturan
- Cuando se quiere escalar sin crear nuevas audiencias manualmente

### Configuración
1. A nivel ad set → activar Advantage+ Audience
2. Ingresar audiencia sugerida (intereses, demografía) como señal
3. Opcionalmente: agregar Custom Audience como señal más fuerte

### Advantage+ vs. Audiencias detalladas

| | Advantage+ | Audiencias detalladas |
|---|---|---|
| Control | Bajo | Alto |
| Cuentas maduras (50+ conv/mes) | Generalmente mejor rendimiento | Variable |
| Cuentas nuevas | Riesgo de mal gasto inicial | Más predecible |

---

## Exclusiones — siempre aplicar en prospección

- [ ] **Conversores recientes** (últimos 30-90 días) → no pagar por alguien que ya convirtió
- [ ] **Clientes actuales** (customer list actualizada) → no pagar por retener con budget de adquisición
- [ ] **Empleados del cliente** (si tiene lista) → contamina métricas de calidad de lead

**Por qué importan:** sin exclusiones, Meta puede seguir mostrando ads de prospección a personas que ya convirtieron, haciendo que el CPL aparente sea mejor de lo real (estás pagando por "re-adquirir" a alguien que ya era tuyo).

---

## Audience Overlap (canibalización interna)

Cuando dos ad sets en la misma campaña se solapan, compiten entre sí en la subasta → sube el CPL de ambos.

**Cómo detectar:**
Audiences → seleccionar dos audiencias → "Mostrar superposición de audiencias"

**Regla:** < 20% de overlap entre ad sets activos de la misma campaña.

**Cómo resolver:**
- Consolidar ad sets solapados en uno solo
- Agregar audiencia solapada como exclusión en uno de los ad sets
- Usar CBO (Campaign Budget Optimization) para que Meta distribuya el budget y minimice la competencia interna automáticamente
