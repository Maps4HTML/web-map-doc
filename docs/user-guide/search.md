---
id: search
title: Search
slug: /user-guide/search
---

## Enabling the Search Control

The search control lets users search by place name and navigate the map to it.  To enable it, you add 
the `search` token to the viewer [`controlslist`](../elements/mapml-viewer/#controlslist) 
attribute.  The search button appears disabled until at least one `checked` `<map-layer>` includes a
[`<map-link rel="search">`](../elements/link/#rel) descendent element.

<iframe src="../../demo/search-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Providing Search Links

A search link is a `<map-link>` element with a `rel="search"` attribute whose `tref` attribute value 
contains a URL template containing the predefined `{searchTerms}` URL template variable reference.  The control substitutes the user's query for the `{searchTerms}` variable and fetches the resulting URL.  Two search-related `rel` values are recognized:

| `rel` value    | Purpose | Required? |
|---------------|---------|-----------|
| `search`      | Text search link, fetched when the user presses **Enter**, or selects a suggestion from the list | Yes |
| `suggestions` | Typeahead search term suggestion values link, fetched and ([debounced](https://developer.mozilla.org/en-US/docs/Glossary/Debounce) as the user types , minimum 2 characters) | No, but recommended |

### In a MapML document

When the layer content is fetched from a remote MapML document
(`<map-layer src="…">`), you should place the links inside the `<map-head>` element in the document:

```xml
<mapml- xmlns="http://www.w3.org/1999/xhtml">
  <map-head>
    <map-title>OpenStreetMap</map-title>
    <map-link rel="search"
              tref="https://photon.komoot.io/api/?q={searchTerms}&amp;limit=5"></map-link>
    <map-link rel="suggestions"
              tref="https://photon.komoot.io/api/?q={searchTerms}&amp;limit=5"></map-link>
  </map-head>
  <map-body>
      <map-extent units="OSMTILE" checked="checked" hidden="hidden">
        <map-input name="z" type="zoom" min="0" max="18" value="3"></map-input>
        <map-input name="x" type="location" axis="column" units="tilematrix"></map-input>
        <map-input name="y" type="location" axis="row" units="tilematrix"></map-input>
        <map-link rel="tile"
                  tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></map-link>
      </map-extent>
  </map-body>
</mapml->
```


### Inline in HTML

When layer content is defined inline in the HTML document, the search links are direct children of the
`<map-layer>` element, as shown in the [example above](#enabling-the-search-control).

## Default Search Handler

When no custom event listener calls `e.preventDefault()`, the built-in handler
expects each `<map-link rel="search">` or `<map-link rel="suggestions">` endpoint 
to return a **GeoJSON FeatureCollection**.   For each feature, the handler looks for:

- **Display name** — uses `properties.display_name` if present; otherwise
  builds a comma-separated string from `properties.name`, `city`, `county`,
  `state`, and `country` (skipping duplicates of `name`). Falls back to
  `"Unnamed"`.
- **Map navigation** — zooms and pans to fit `feature.bbox`
  (`[west, south, east, north]`), falling back to `properties.extent` (same
  format). If neither is available, centers the map on the first 
  `geometry.coordinates` (`[lon, lat]`) value at `properties.zoom` (default `14`).

The [Photon geocoding API](https://photon.komoot.io/) returns GeoJSON and works
out of the box with the default handler.

## Custom Search Handlers

The viewer fires two [custom events](../api/mapml-viewer-api/#events) that let
you intercept and replace the default behaviour:

| Event | When it fires |
|-------|---------------|
| [`mapsearch`](../api/mapml-viewer-api/#mapsearch) | After the user presses **Enter** or selects a suggestion, and all search responses arrive |
| [`mapsuggestions`](../api/mapml-viewer-api/#mapsuggestions) | After suggestions responses arrive while the user is typing |

Both events carry the same `e.detail` structure:

```js
{
  query: "Ottawa",           // the user's search string
  responses: [               // one entry per responding layer
    { data: { /* JSON */ }, link: mapLinkElement, layer: mapLayerElement }
  ],
  setResults: function(items) { /* … */ }  // populate the results dropdown
}
```

Call `e.preventDefault()` to suppress the built-in result rendering / navigation
and handle results yourself.  Use `e.detail.setResults(items)` to populate the
dropdown with your own results. For a complete walkthrough of writing custom handlers, 
including using `e.detail.setResults()` to populate the dropdown and optionally rendering
results on the map with `geojson2mapml()` — see the [Custom Search Handlers](../user-guide/custom-handlers) tutorial.

## Multi-Layer Search

When multiple `checked` layers each contain a `<map-link rel="search">`, the
control queries **all of them in parallel**.  The responses are batched into a
single `mapsearch` (or `mapsuggestions`) event whose
`e.detail.responses` array has one entry per layer.  Each entry carries a
reference to the originating `<map-layer>` element so you can tell which
results came from where.

:::note

The default handler expects every layer to return **GeoJSON**.  If any layer
returns a different format, its results are silently skipped.  When you mix
response formats across layers — or when none of the layers return GeoJSON —
you **must** provide a [custom search handler](../user-guide/custom-handlers)
to process the responses yourself.

:::

## Programmatic Control

The [`controlsList`](../api/mapml-viewer-api/#controlslist) property is a
`DOMTokenList`, so you can add or remove the search control at runtime:

```js
const map = document.querySelector('mapml-viewer');
map.controlsList.add('search');    // show the search button
map.controlsList.remove('search'); // hide it
```

## Accessibility

- The search button is disabled when no checked layer has a
  search link, preventing activation.
- **Keyboard**: press **Enter** in the search input to submit; press **Escape**
  to clear the input (or close the panel if the input is already empty).
  **Arrow Down** or **Tab** from the input moves focus to the first result; **Arrow
  Up/Down** or **Tab/Shift+Tab** navigates between results; **Escape** from a result returns
  focus to the input.  Focus returns to the search button when the panel
  closes.

---
