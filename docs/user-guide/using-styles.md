---
id: using-styles
title: Using mvt styles
slug: /user-guide/using-styles
---

## The declarative `<map-link>` API
The developer-user interface to use mvt styling in the MapML polyfill is similar to (one of the ways) how CSS stylesheets are imported into 
an HTML document, by using the &lt;map-link&gt; element.  A templated `<map-link>` to a pmtiles or mvt resource will be associated with a  
`<map-link type="application/pmtiles+stylesheet">` stylesheet link in its DOM ancestry:
```html
...
<map-extent units="OSMTILE" checked="checked" hidden="hidden">
  <map-link id="linked-stylesheet" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>
  <map-link id="templated-link" rel="tile" type="application/pmtiles" 
    tref="https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light"></map-link>
</map-extent>
...
```
In the above example the `<map-link id="templated-link">` will be [associated](#search-order-for-linked-stylesheets) with the stylesheet link `<map-link id="linked-stylesheet">`.

## application/pmtiles+stylesheet modules
The stylesheet resource above, `lightTheme.js` which can be any name, but must be **structured** as a JavaScript module, for consumption by the polyfill as described 
in [the previous section](creating-styles):

```javascript
const pmtilesRules = new Map();
pmtilesRules.set(
  'https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light',
  { theme: { theme: 'light' } }
);
export { pmtilesRules };
```

The module **must** define an export named `pmtilesRules` which **must** be of 
[type Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). Each entry in the Map must be the 
**exact** URL template string `tref` value of the resource(s) from which mvt tiles will be obtained.  

The reason that the Map key must be the exact string value of the `tref` URL template is because the polyfill will use the URL template string
found in the `<map-link tref="...">` `tref` attribute as a key to **look up** the style rules in the `pmtilesRules` Map that should be applied to the content. 

Each `<map-link type="application/pmtiles"...>` or `<map-link type="application/vnd.mapbox-vector-tile"...>`
you create should have an associated set of style rules or a theme.  The subject of how to encode style rules and themes was discussed in the previous
section. 

:::tip

Pre-defined themes that you can use include: `light`, `dark`, `white`, `grayscale` and `black`. You should include the theme name in the URL template as a parameter (even though it is not required by the pmtiles or mvt resource), so that the URL template can be made unique and distinct from other pmtilesRules keys' use of the same pmtiles or mvt resource.

:::

## Search order for linked stylesheets

The styles for a given `<map-link>`'s URL template `tref` must be found via an associated `<map-link rel=stylesheet>`.  The MapML
polyfill looks for the associated `<map-link rel=stylesheet>` upward in the `<map-link>` element's "ancestry", stopping at the 
enclosing `<layer->` element. The associated stylesheet link `<map-link rel="stylesheet" type="application/pmtiles+stylesheet"...>` 
may be located within the enclosing `<map-extent>`, as a sibling of the to-be-styled `<map-link rel="tile" tref="...">` resource, or 
within the `<map-head>` (when used in remote MapML content) or `<layer->` element (when used in local MapML content).  Only the 
**first** `<map-link rel=stylesheet>` in document order found will be associated; if no style rules or theme for the 
`tref` URL template is found, console error messages may help clarify.

Example of where linked stylesheets are sought by the polyfill, remote content:

```html
<mapml- xmlns="http://www.w3.org/1999/xhtml">
  <map-head>
    <map-title>pmtiles</map-title>

    <map-link data-testid="operative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>

    <!-- only the first stylesheet in document order within the container search path is used... -->
    <map-link data-testid="inoperative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>

    <map-link rel="license" title="© OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>
  </map-head>
  <map-body>
    <map-extent data-testid="light-me" label="light" units="OSMTILE" >

      <!-- this guy should use the operative-light stylesheet in the map-head -->
      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=light"></map-link>

    </map-extent>
    <map-extent data-testid="dark-me" label="dark" units="OSMTILE" checked="checked" >

      <map-link data-testid="operative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>
      <map-link data-testid="inoperative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>
      
      <!-- this guy should use the preceding sibling operative-dark stylesheet (first in doc order in search path) -->
      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>

    </map-extent>
  </map-body>
</mapml->
```

Example of where linked stylesheets are sought by the polyfill, local content:

```html
...
<mapml-viewer data-testid="viewer" projection="OSMTILE" zoom="0" lat="0" lon="0" width="400" height="400">
  <layer- data-testid="dark">
    <map-title>PMTiles test dark</map-title>
    <map-link rel="license" title="© OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>
    <map-extent units="OSMTILE" checked>
      <!-- linked stylesheet is a sibling child of map-extent -->
      <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>
      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>
    </map-extent>
  </layer->
  <layer- checked data-testid="light">
    <map-title>{z}/{x}/{y}.mvt test</map-title>
    <!-- no map-head available, layer- element children are searched for linked stylesheets -->
    <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>
    <map-extent units="OSMTILE" checked="checked">
      <map-input name="beans" type="zoom" value="18" min="0" max="2"></map-input>
      <map-input name="foo" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="bar" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" type="application/vnd.mapbox-vector-tile" tref="tiles/osmtile/{beans}/{foo}/{bar}.mvt?theme=light"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```


