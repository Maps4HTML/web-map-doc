---
id: custom-handlers
title: Custom Search Handlers
slug: /user-guide/custom-handlers
---

The [search control](../user-guide/search) works out of the box with GeoJSON
APIs, such as [Photon](https://photon.komoot.io/).  When your geocoding service
returns a different format, you can write **custom event handlers** to transform
the responses and feed them to the search control results panel via the `setResults()` method.

This tutorial walks through connecting the 
[CGDI Geolocator API](https://natural-resources.canada.ca/maps-tools-publications/satellite-elevation-air-photos/geolocation-service) to the search control.  The 
Geolocator API returns a flat JSON array, not GeoJSON, so to use it, you need to write
your own custom search handler.

## Markup the HTML for Maps

Create an HTML page with a `<mapml-viewer>` including the `controls` and `controlslist="search"` attributes.  Inside a child `<map-layer>`, add two `<map-link>` elements; one with `rel="search"` and
the other with `rel="suggestions"`. Both links' URL template (in the `tref` attribute) should point
to the Geolocator service endpoint.  The Geolocator API can be used for suggestions as well as search, so the links' `tref` values are identical:

```html
<mapml-viewer projection="CBMTILE" zoom="2" lat="65" lon="-96"
              controls controlslist="search"
              style="width:100%;height:50vh;">
  <map-layer label="Canada Base Map" checked>
    <!-- highlight-start -->
    <map-link rel="suggestions"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=en&keys=geonames"></map-link>
    <map-link rel="search"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=en&keys=geonames"></map-link>
    <!-- highlight-end -->
    <map-extent units="CBMTILE" checked hidden>
      <map-input name="z" type="zoom" min="0" max="17" value="17"></map-input>
      <map-input name="y" type="location" axis="row" units="tilematrix"></map-input>
      <map-input name="x" type="location" axis="column" units="tilematrix"></map-input>
      <map-link rel="tile"
                tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/tile/{z}/{y}/{x}?m4h=t"></map-link>
    </map-extent>
  </map-layer>
</mapml-viewer>
```

## Understand the Response Format

Open an API request in your <a href="https://geolocator.api.geo.ca/?q=ottawa&lang=en&keys=geonames" target="_blank">browser</a>, and examine the response format.  Each result object looks like:

| Field      | Meaning |
|------------|---------|
| `name`     | Place name |
| `province` | Province name |
| `category` | Feature type (City, River, etc.) |
| `lat`      | Latitude |
| `lng`      | Longitude |
| `bbox`     | `[west, south, east, north]` |

This is not GeoJSON, so the default handler cannot use it directly.

## The `setResults()` Item Structure

Both the `mapsuggestions` and `mapsearch` events contain a `setResults()` method reference
on `e.detail`.  You call it with one argument (an array of item objects): 

```js
e.detail.setResults([
  { text: "Ottawa, Ontario (City)", value: "Ottawa", lat: 45.4, lng: -75.7, bbox: [...] },
  // ...
]);
```

Each item object can have these properties:

| Property | Required | Purpose |
|----------|----------|---------|
| `text`   | yes      | Display label for the dropdown button |
| `value`  | no       | If present, clicking the item **re-searches** with this string.  If absent, clicking **navigates** the map to the location. |
| `lat`    | no       | Latitude for navigation | 
| `lng`    | no       | Longitude for navigation |
| `bbox`   | no       | `[west, south, east, north]` — preferred for navigation |

The `value` property distinguishes between a **suggestion** and a
**search result**, which behave differently in the search results panel:

- **Suggestions** (`mapsuggestions` handler) — include `value` so that clicking
  a suggestion fills the search input and triggers a full search.
- **Search Results** (`mapsearch` handler) — omit `value` so that clicking a result
  navigates the map to the item's location.

## Handle `mapsuggestions`

Listen for the `mapsuggestions` event on the `<mapml-viewer>`.  Call `e.preventDefault()`
to suppress the default behaviour (GeoJSON parsing into the search results panel), transform 
the response to item structure, and call `setResults()`:

```html
<script>
  const viewer = document.querySelector('mapml-viewer');

  viewer.addEventListener('mapsuggestions', (e) => {
    e.preventDefault();
    const items = [];
    for (const { data } of e.detail.responses) {
      if (!Array.isArray(data)) continue;
      for (const r of data) {
        items.push({
          text: `${r.name}, ${r.province} (${r.category})`,
          // highlight-next-line
          value: r.name,   // ← includes value: clicking re-searches
          lat: r.lat,
          lng: r.lng,
          bbox: r.bbox || undefined
        });
      }
    }
    e.detail.setResults(items);
  });
</script>
```

The control creates the dropdown buttons, wires up keyboard navigation (Arrow
keys, Escape), and — because each item has a `value` — clicking a suggestion
puts `value` into the search input and fires a new search automatically.

## Handle `mapsearch`

Add a second listener for `mapsearch`.  This time, **omit `value`** from the items so that
clicking a result navigates the map:

```js
viewer.addEventListener('mapsearch', (e) => {
  e.preventDefault();
  const items = [];
  for (const { data } of e.detail.responses) {
    if (!Array.isArray(data)) continue;
    for (const r of data) {
      items.push({
        text: `${r.name}, ${r.province} (${r.category})`,
        // highlight-next-line
        // no value — clicking navigates to the location
        lat: r.lat,
        lng: r.lng,
        bbox: r.bbox || undefined
      });
    }
  }
  e.detail.setResults(items);
  // Navigate to the first result (like the default handler does)
  // highlight-start
  if (items.length > 0 && items[0].bbox) {
    viewer.zoomToExtent(...items[0].bbox);
  } else if (items.length > 0 && items[0].lat != null) {
    viewer.zoomTo(items[0].lat, items[0].lng, 14);
  }
  // highlight-end
});
```

When the user clicks a result, the control navigates to that item's `bbox` or
`lat`/`lng`.  The [`zoomToExtent`](../api/mapml-viewer-api/#zoomtoextent) call
above handles the initial auto-navigation to the first result when the search
fires — matching the default handler's behaviour.

## Render Results on the Map (Optional)

If you want search results to appear as markers/features on the map, convert
the Geolocator data to GeoJSON and pass it to
[`geojson2mapml()`](../api/mapml-viewer-api/#geojson2mapml):

```js
let resultsLayer = null;

viewer.addEventListener('mapsearch', (e) => {
  e.preventDefault();

  // Clean up previous results
  if (resultsLayer) {
    resultsLayer.remove();
    resultsLayer = null;
  }

  // Build the dropdown (same as above)
  const items = [];
  const features = [];
  for (const { data } of e.detail.responses) {
    if (!Array.isArray(data)) continue;
    for (const r of data) {
      items.push({
        text: `${r.name}, ${r.province} (${r.category})`,
        lat: r.lat, lng: r.lng, bbox: r.bbox || undefined
      });
      features.push({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [r.lng, r.lat] },
        properties: { name: r.name, province: r.province, category: r.category },
        bbox: r.bbox || undefined
      });
    }
  }
  e.detail.setResults(items);

  // Navigate to the first result
  if (items.length > 0 && items[0].bbox) {
    viewer.zoomToExtent(...items[0].bbox);
  } else if (items.length > 0 && items[0].lat != null) {
    viewer.zoomTo(items[0].lat, items[0].lng, 14);
  }

  if (features.length === 0) return;
  const fc = { type: 'FeatureCollection', features };

  resultsLayer = viewer.geojson2mapml(fc, {
    label: 'Search Results',
    projection: viewer.projection,
    caption: (f) => f.properties.name
  });
});
```

The `geojson2mapml()` method returns a `<map-layer>` element that is
automatically added to the map.  Store the reference so you can remove it
before adding the next round of results.

## Complete Example

Putting it all together:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Geolocator Search</title>
  <script type="module" src="mapml.js"></script>
  <style>
    html, body { height: 100%; margin: 0; }
    mapml-viewer { display: block; box-sizing: border-box; }
  </style>
</head>
<body>

<mapml-viewer projection="CBMTILE" zoom="2" lat="65" lon="-96"
              controls controlslist="search"
              style="width:100%;height:100dvh;">
  <map-layer label="Canada Base Map" checked>
    <map-link rel="suggestions"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=en&keys=geonames"></map-link>
    <map-link rel="search"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=en&keys=geonames"></map-link>
    <map-extent units="CBMTILE" checked hidden>
      <map-input name="z" type="zoom" min="0" max="17" value="17"></map-input>
      <map-input name="y" type="location" axis="row" units="tilematrix"></map-input>
      <map-input name="x" type="location" axis="column" units="tilematrix"></map-input>
      <map-link rel="tile"
                tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/tile/{z}/{y}/{x}?m4h=t"></map-link>
    </map-extent>
  </map-layer>
</mapml-viewer>

<script>
  const viewer = document.querySelector('mapml-viewer');

  // --- Suggestions (typeahead) ---
  viewer.addEventListener('mapsuggestions', (e) => {
    e.preventDefault();
    const items = [];
    for (const { data } of e.detail.responses) {
      if (!Array.isArray(data)) continue;
      for (const r of data) {
        items.push({
          text: `${r.name}, ${r.province} (${r.category})`,
          value: r.name,
          lat: r.lat,
          lng: r.lng,
          bbox: r.bbox || undefined
        });
      }
    }
    e.detail.setResults(items);
  });

  // --- Search results ---
  viewer.addEventListener('mapsearch', (e) => {
    e.preventDefault();
    const items = [];
    for (const { data } of e.detail.responses) {
      if (!Array.isArray(data)) continue;
      for (const r of data) {
        items.push({
          text: `${r.name}, ${r.province} (${r.category})`,
          lat: r.lat,
          lng: r.lng,
          bbox: r.bbox || undefined
        });
      }
    }
    e.detail.setResults(items);
    // Navigate to the first result
    if (items.length > 0 && items[0].bbox) {
      viewer.zoomToExtent(...items[0].bbox);
    } else if (items.length > 0 && items[0].lat != null) {
      viewer.zoomTo(items[0].lat, items[0].lng, 14);
    }
  });
</script>

</body>
</html>
```

## Next Steps

- See the [Search](../user-guide/search) user guide for the full list of
  control options, multi-layer search, and accessibility details.
- See the [`mapsearch`](../api/mapml-viewer-api/#mapsearch) and
  [`mapsuggestions`](../api/mapml-viewer-api/#mapsuggestions) event reference
  for the complete `e.detail` structure.

## Things to Watch Out For

- **Coordinate order**: GeoJSON uses `[longitude, latitude]` arrays, but `setResults()` items use named `lat` and `lng` properties — there is no array order to worry about. Just be careful when building GeoJSON features in [Render Results on the Map](#render-results-on-the-map-optional): the `coordinates` array must be `[lng, lat]`, not `[lat, lng]`.
- **The response is an array, not an object**: The Geolocator returns a bare JSON array `[{...}, {...}]` at the top level — no wrapping `features` or `results` property.
- **CORS must be enabled on the remote API**: The search control fetches the geocoding URL directly from the browser using `fetch()`. If the API server does not include an `Access-Control-Allow-Origin` header in its response, the browser will block the request and no results will appear. The Geolocator API used in this tutorial supports CORS, so no proxy is needed. If you try a different geocoding service and get no suggestions or results, open the browser's developer console (F12 → Console) and look for an error like _"has been blocked by CORS policy"_. If you see that, the API does not permit cross-origin requests and you will need to either use a server-side proxy or choose a CORS-friendly endpoint.
- **Rate limits**: The API is free for normal use but avoid hammering it. The search control already debounces suggestions (300ms), which helps.
- **The `hidden` attribute vs `checked`**: `hidden` hides the layer from the layer control panel; `checked` controls whether it renders. You want both — `hidden` (to keep it out of the UI) and `checked` (so the features actually show). `geojson2mapml()` sets `checked` by default, so you only need to add `hidden` yourself.
- **`value` controls click behaviour**: Both events use the same `e.detail.setResults()` method and the same item structure `{ text, value?, lat?, lng?, bbox? }`. If `value` is present, clicking triggers a search (suggestion mode). If `value` is absent but `lat`/`lng` are present, clicking navigates the map (result mode). Include `value` for suggestions, omit it for final results.