# Geo Targets México — Referencia rápida

IDs oficiales de Google Ads para targeting geográfico en México.

**⚠️ IMPORTANTE — Verificación de IDs:**
Los IDs de **país** (`2484`) y **estado** (`21135-21166`) están verificados contra Google Ads API (última validación: 2026-04-16 con customer 366-587-1570).

Los **IDs de área metropolitana** fueron retirados de esta referencia porque los valores previos (`1005748` Monterrey metro, `1010691` CDMX metro, etc.) devolvieron `INVALID_CRITERION_ID` en la API de v20. Si necesitas granularidad metro/ciudad, **consulta el CSV oficial de Google** antes de usar:

- https://developers.google.com/google-ads/api/reference/data/geotargets

**Default seguro:** usar IDs de estado para cubrir áreas metro. Por ejemplo, `21153` (Nuevo León) cubre Monterrey metro; `21143` (CDMX) y `21148` (Jalisco) cubren las zonas metropolitanas de CDMX y Guadalajara respectivamente.

**Cómo se usan:**
```json
{ "type": "LOCATION", "geo_target_id": "21153" }
```

---

## País completo

| ID | Nombre | Estado |
|---|---|---|
| `2484` | **México (país completo)** | ✅ Verificado |

---

## Estados (verified set — los 3 primeros usados y confirmados vía API v20)

| ID | Estado | Estado |
|---|---|---|
| `21135` | Aguascalientes | ⚠️ Por verificar |
| `21136` | Baja California | ⚠️ Por verificar |
| `21137` | Baja California Sur | ⚠️ Por verificar |
| `21138` | Campeche | ⚠️ Por verificar |
| `21139` | Chiapas | ⚠️ Por verificar |
| `21140` | Chihuahua | ⚠️ Por verificar |
| `21141` | Coahuila | ⚠️ Por verificar |
| `21142` | Colima | ⚠️ Por verificar |
| `21143` | **Ciudad de México** | ✅ Verificado |
| `21144` | Durango | ⚠️ Por verificar |
| `21145` | Guanajuato | ⚠️ Por verificar |
| `21146` | Guerrero | ⚠️ Por verificar |
| `21147` | Hidalgo | ⚠️ Por verificar |
| `21148` | **Jalisco** (incluye Guadalajara metro) | ✅ Verificado |
| `21149` | Estado de México | ⚠️ Por verificar |
| `21150` | Michoacán | ⚠️ Por verificar |
| `21151` | Morelos | ⚠️ Por verificar |
| `21152` | Nayarit | ⚠️ Por verificar |
| `21153` | **Nuevo León** (incluye Monterrey metro) | ✅ Verificado |
| `21154` | Oaxaca | ⚠️ Por verificar |
| `21155` | Puebla | ⚠️ Por verificar |
| `21156` | Querétaro | ⚠️ Por verificar |
| `21157` | Quintana Roo | ⚠️ Por verificar |
| `21158` | San Luis Potosí | ⚠️ Por verificar |
| `21159` | Sinaloa | ⚠️ Por verificar |
| `21160` | Sonora | ⚠️ Por verificar |
| `21161` | Tabasco | ⚠️ Por verificar |
| `21162` | Tamaulipas | ⚠️ Por verificar |
| `21163` | Tlaxcala | ⚠️ Por verificar |
| `21164` | Veracruz | ⚠️ Por verificar |
| `21165` | Yucatán | ⚠️ Por verificar |
| `21166` | Zacatecas | ⚠️ Por verificar |

Los "Por verificar" siguen la progresión numérica secuencial de Google Ads y en teoría son correctos, pero no fueron probados contra la API v20. Antes de usarlos en producción, validar con una llamada de prueba.

---

## Áreas metropolitanas

**⚠️ Sección removida temporalmente.** Los IDs que estaban antes (`1005748`, `1010691`, `1010690`, etc.) fueron reportados como `INVALID_CRITERION_ID` por la Google Ads API v20 en abril 2026. Si requieres granularidad metro:

**Opción A (recomendada):** usar IDs de estado — la diferencia en alcance es marginal para la mayoría de clientes B2B.

**Opción B:** consultar el CSV oficial de Google y verificar cada ID antes de agregarlo al skill:
- https://developers.google.com/google-ads/api/reference/data/geotargets
- Descargar "Target Types" → filtrar por `Country Code = MX` y `Target Type = Metro` o `City`.

**Opción C (para casos donde sí necesitas ciudad específica):** usar `PROXIMITY` en lugar de `LOCATION` — especifica latitud/longitud + radio. Ver sección de proximity abajo.

---

## Languages

| ID | Idioma | Estado |
|---|---|---|
| `1003` | **Spanish** (recomendado para México) | ✅ Verificado |
| `1000` | English | ✅ Estándar |
| `1004` | Portuguese | ✅ Estándar |
| `1014` | French | ✅ Estándar |

**Nota:** Siempre incluir `1003` para México. Opcionalmente incluir `1000` si hay búsquedas en inglés.

---

## Estrategias geográficas por tipo de cliente

### B2B con oficina física MTY, cubre CDMX, GDL (caso típico De Marketing)
```json
[
  { "type": "LOCATION", "geo_target_id": "21153" },   // Nuevo León
  { "type": "LOCATION", "geo_target_id": "21143" },   // CDMX
  { "type": "LOCATION", "geo_target_id": "21148" },   // Jalisco
  { "type": "LANGUAGE", "language_id": "1003" }       // Spanish
]
```

Bid modifiers (aplicar solo con 30+ conversiones): estado de origen del cliente +15%, otros 0%.

### B2C local (una ciudad específica, ej. MTY)

**Usar PROXIMITY** en lugar de estado completo (que incluye municipios rurales):

```json
[
  {
    "type": "PROXIMITY",
    "latitude": 25.6866,
    "longitude": -100.3161,
    "radius_km": 25
  },
  { "type": "LANGUAGE", "language_id": "1003" }
]
```

### Cobertura nacional
```json
[
  { "type": "LOCATION", "geo_target_id": "2484" },    // México país completo
  { "type": "LANGUAGE", "language_id": "1003" }
]
```

### B2B premium (zonas financieras específicas)

**Usar PROXIMITY** — las zonas como San Pedro, Polanco, Santa Fe no son estados ni metros completos.

```json
{
  "type": "PROXIMITY",
  "latitude": 25.6595,
  "longitude": -100.4030,
  "radius_km": 10
}
```

---

## Coordenadas clave para PROXIMITY

| Zona | Latitud | Longitud | Radio sugerido |
|---|---|---|---|
| Centro MTY | 25.6866 | -100.3161 | 25 km (metro completo) |
| San Pedro Garza García | 25.6595 | -100.4030 | 10 km (zona premium) |
| Zócalo CDMX | 19.4326 | -99.1332 | 30 km (metro completo) |
| Polanco CDMX | 19.4336 | -99.1906 | 5 km (zona premium) |
| Santa Fe CDMX | 19.3585 | -99.2575 | 5 km (zona premium corporativa) |
| Centro GDL | 20.6767 | -103.3475 | 25 km (metro completo) |
| Zapopan | 20.7214 | -103.3909 | 10 km (zona residencial alta) |
| Querétaro centro | 20.5888 | -100.3899 | 20 km |
| Puebla centro | 19.0414 | -98.2063 | 20 km |

---

## Geo target settings (no cambia)

| Setting | Uso |
|---|---|
| `PRESENCE_OR_INTEREST` (default) | Físicamente ahí O interés — B2B con clientes en otras ciudades, ecommerce |
| `PRESENCE` (estricto) | Solo físicamente ahí — servicio local que no puede servir fuera |
| `SEARCH_INTEREST` | Solo interés, sin location — NO recomendado |

---

## Cómo encontrar IDs no listados (proceso confiable)

1. **CSV oficial de Google** (fuente de verdad): https://developers.google.com/google-ads/api/reference/data/geotargets
2. **GAQL query** desde el worker (requiere agregar tool `gads_query_geo_targets`):
   ```sql
   SELECT geo_target_constant.id, geo_target_constant.name, geo_target_constant.target_type
   FROM geo_target_constant
   WHERE geo_target_constant.country_code = 'MX'
     AND geo_target_constant.target_type IN ('Metro', 'City')
   LIMIT 100
   ```
3. **UI de Google Ads:** Campaign > Locations > + Add > buscar por nombre — el ID aparece en la URL de la API al inspeccionar red.

**Regla de oro:** cualquier ID que no esté marcado ✅ en esta página, validar antes de usarlo en producción.

---

## Ejemplo — De Marketing (verificado 2026-04-16)

```json
[
  { "type": "LOCATION", "geo_target_id": "21153" },   // Nuevo León (MTY)
  { "type": "LOCATION", "geo_target_id": "21143" },   // CDMX
  { "type": "LOCATION", "geo_target_id": "21148" },   // Jalisco (GDL)
  { "type": "LANGUAGE", "language_id": "1003" }       // Spanish
]
```

Estos IDs fueron usados exitosamente en la campaña `23762407637` (DeMkt - Google Ads Service - Search).
