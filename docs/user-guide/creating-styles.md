---
id: creating-styles
title: Creating custom mvt styles
slug: /user-guide/creating-styles
---

## What are mvt files

[Mapbox vector tiles (mvt)](https://github.com/mapbox/vector-tile-spec) files are a de facto standard encoding of map data optimized for rendering to HTML canvas element(s) via JavaScript and/or JSON-based encoded style information.  Cascading Style Sheet rules do not apply, because mvt content is not exposed via browser APIs, so
style rules, while [sort-of declarative](https://glazkov.com/2024/01/16/declarative-vs-imperative/), are implemented in script.

## What are pmtiles files

[pmtiles](https://docs.protomaps.com/pmtiles/) is a map tile archive format that is intended to obviate (some of) the need for complex geospatial-specific servers and APIs for tile resources on the web, to enable people to create their own localized web map sites without having to host the whole world on their domain.  The pmtiles archive format contains metadata that can be requested via http byte range requests, and subsequent requests for individual tiles are also sent as byte range requests.

The pmtiles map archive and mvt [formats](../elements/link#type) in the MapML polyfill are integrated via 
[the protomaps-leaflet library](https://docs.protomaps.com/pmtiles/leaflet).  Protomaps-leaflet is designed to support the (de facto standard) Web Mercator tile grid. This allows
the MapML polyfill to integrate support for pmtiles and mvt data sources for only the `OSMTILE` projection.  `<map-layer>` and `<map-extent>` elements and the `<mapml-viewer>` will
not work (and will be permanently `disabled`) when used with `<mapml-viewer projection="ANYTHING"...>` or `<map-extent units="ANYTHING"...>` values apart from `OSMTILE`.

Before proceeding below, you should read the [protomaps-leaflet](https://docs.protomaps.com/pmtiles/leaflet#custom-vector-data) documentation on custom styling.
Another useful source of information for styling includes [the source code examples](https://github.com/protomaps/protomaps-leaflet/tree/main/examples).

Working examples of `<mapml-viewer>` usage of themes and styles are [available on-line](https://maps4html.org/experiments/vector-tiles/pmtiles/), with available [source code](https://github.com/Maps4HTML/experiments/tree/main/vector-tiles/pmtiles).

## How to create a stylesheet module

A pmtiles stylesheet used in the MapML polyfill is a JavaScript module source file which exports  
two symbols, a `pmtilesRules` Map instance, and a Promise-valued `pmtilesRulesReady`, which is resolved when
the required Sheet is loaded, per the following example:

```javascript
const sheet = new protomapsL.Sheet(`
<html>
  <body>
    <svg id="icon_0" width="99px" height="97px" xmlns="http://www.w3.org/2000/svg">
      <image href="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl82NCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgPGltYWdlIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFBMlVsRVFWUjRuTldQTVdvQ1lSQ0Z2MElDZ2xZaFZnRUwzZmNyZGlsczBteVJUdkFLa2xaSXdKM2ZpTjE2aGhoeUFCRkVjZ2J2WUtFbmtCUkpiNWtFSlRheXNNdFd5WVBYRFBPOW1RZC9YcjVHSlRkc1Rhb21wdm12TzBZbVB1T1FRcjRQeE5yRXR3L29wQzdITFM1TVRFd3NEdmFPdHdOOERCRGIwenh5eklkMWJoSkQraTFLWHN4T1lJSjN2a0dZM2ozZ1BnRmVqUnRjWnVvK2ROeWVCM2l4Skt0TXZQeUNtMGc4bS9neXNYOXlsRlBoT0tUZ3hZYzVYZ2ZYRkkrVnhKMkpkeE85MUlDQmFFZU83dm44b2M2VkQzak1YT1AvNkFmS0Ywd3dXeU9Oc3dBQUFBQkpSVTVFcmtKZ2dnPT0iIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPgogICAgPC9zdmc+" width="99" height="97" />
    </svg>
  </body>
</html>
`);
const pmtilesRules = new Map();
const pmtilesRulesReady = sheet.load().then(() => {
  ...
  pmtilesRules.set(
    'https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light',
    { theme: { theme: 'light' } }
  );
  ...
  return pmtilesRules;
});
export { pmtilesRules, pmtilesRulesReady };
```
:::tip

Pre-defined themes that you can use include: `light`, `dark`, `white`, `grayscale` and `black`. You should include the theme name in the URL template as a parameter (even though it is not required by the pmtiles or mvt resource), so that the URL template can be made unique and distinct from other pmtilesRules keys' use of the same pmtiles or mvt resource.

:::

## The required structure of the pmtiles 'stylesheet'

The stylesheet module must export two symbols: `pmtilesRulesReady` and `pmtilesRules`.

The `pmtilesRulesReady` export must be a Promise that signals to the MapML library that
the pmttilesRules export is fully defined and ready for rendering.  If your stylesheet
uses IconSymbolizer, it may be convenient to perform resource loading and processing
via the asynchronous Sheet.load() function, which itself returns a Promise object that
may be returned by your stylesheet as the pmtilesRulesReady value, as
shown in the example above. If your stylesheet does not require icons, it should
be possible to assign an already-resolved promise as the value of pmtilesRulesReady,
via Promise.resolve(), and return that.

```javascript
const pmtilesRules = new Map();
// a Map requires a key, in this case the absolute URL of the data source (but,
// can also be the absolute value of the URL _template_ for the data source),
// and an object to be mapped by the key, in this case, an object with a `theme`
// member, whose value is itself an object with a `theme` member.
pmtilesRules.set(
    'https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light',
    { theme: { theme: 'light' } }
);
const pmtilesRulesReady = Promise.resolve();
export { pmtilesRules, pmtilesRulesReady };
```

The `pmtilesRules` export must be a [JavaScript Map-type object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), structured as follows:

- must have a unique URL template string key that will be used on the web to identify a set of rules
- has an object value that has a `theme` or a `rules` property
- `theme` property must be an object literal, itself with a `theme` property with a string theme name value: `{theme:{theme:'grayscale'}}`
- `rules` property must be an object literal, with `PAINT_RULES: [...]` and/or a `LABEL_RULES: [...]` array-valued properties
- `PAINT_RULES` and `LABEL_RULES` are arrays of objects that have required `dataLayer` and `symbolizer` properties
- `PAINT_RULES` and `LABEL_RULES` can have optional properties e.g. `filter`, `minzoom`, `maxzoom` 
- `dataLayer` is a string property that is the name of a layer encoded in the mvt data
- `symbolizer` is property of `Symbolizer`-type value

An example custom pmtiles stylesheet module for a localhost GeoServer 'spearfish' Layer Group (set up with a mvt tile cache) is as follows:

```javascript
class SpearfishSymbolizer {
  constructor(options) {
    this.color = options.color;
    this.shape = options.shape;
  }
  draw(context, geom, z, feature) {
    let pt = geom[0][0];
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    if (this.shape === 'circle') {
      context.arc(pt.x, pt.y, 3, 0, 2 * Math.PI);
    } else {
      context.rect(pt.x - 2, pt.y - 2, 4, 4);
    }
    context.stroke();
    context.fill();
  }
}
// the only other pmtilesRules keyed value besides `theme` that is supported is 
// an object with a `rules` member. The value of the `rules` member is an object 
// that has two optional array-valued members, `PAINT_RULES` and `LABEL_RULES`.
const pmtilesRules = new Map();
pmtilesRules.set(
  'http://localhost:8080/geoserver/gwc/service/wmts/rest/spearfish/OSMTILE/{z}/{y}/{x}?format=application/vnd.mapbox-vector-tile',
  {
// PAINT_RULES and LABEL_RULES are each an array of dataLayer/symbolizer objects, with optional 
// function-valued `filter` member (filter is a member of the same object as
// dataLayer and symbolizer, not a property of those objects).
    rules: {
      PAINT_RULES: [
        {
          dataLayer: 'streams',
          symbolizer: new protomapsL.LineSymbolizer({ color: 'steelblue', width: 2 })
        },
        {
          dataLayer: 'roads',
          symbolizer: new protomapsL.LineSymbolizer({ color: 'maroon', width: 2 })
        },
        {
          dataLayer: 'restricted',
          symbolizer: new protomapsL.PolygonSymbolizer({
            fill: 'red',
            opacity: 0.5
          })
        },
        {
          dataLayer: 'restricted',
          symbolizer: new protomapsL.LineSymbolizer({ color: 'red', width: 2 })
        },
        {
          dataLayer: 'archsites',
          symbolizer: new SpearfishSymbolizer({
            color: 'red',
            shape: 'square'
          })
        },
        {
          dataLayer: 'bugsites',
          symbolizer: new SpearfishSymbolizer({
            color: 'black',
            shape: 'circle'
          })
        }
      ],
      LABEL_RULES: [
        {
          dataLayer: 'archsites',
          symbolizer: new protomapsL.CenteredTextSymbolizer({
            labelProps: ['str1'],
            fill:'white',
            width:2,
            stroke:'black',
            font:"600 16px sans-serif"
          }),
          // note that filter is a property of a rule, not an option to a symbolizer
          filter: (z,f) => { return f.props['str1'].trim().toLowerCase() !== 'no name'; }
        }
      ]
    }
  }
);
export { pmtilesRules };
```

## Available imported symbols from protomaps-leaflet

The following imports from protomaps-leaflet are available on the `protomapsL` import, for use by your stylesheets:

```javascript
/* 

  CenteredSymbolizer,
  CenteredTextSymbolizer,
  CircleSymbolizer,
  FlexSymbolizer,
  Font,
  GeomType,
  GroupSymbolizer,
  IconSymbolizer,
  Index,
  Justify,
  Labeler,
  Labelers,
  LineLabelPlacement,
  LineLabelSymbolizer,
  LineSymbolizer,
  OffsetSymbolizer,
  OffsetTextSymbolizer,
  Padding,
  PmtilesSource,
  PolygonSymbolizer,
  Sheet,
  ShieldSymbolizer,
  Static,
  TextPlacements,
  TextSymbolizer,
  TileCache,
  View,
  ZxySource,
  arr,
  covering,
  createPattern,
  exp,
  getZoom,
  isCcw,
  isInRing,
  labelRules,
  leafletLayer,
  linear,
  paint,
  paintRules,
  pointInPolygon,
  pointMinDistToLines,
  pointMinDistToPoints,
  sourcesToViews,
  step,
  toIndex,
  transformGeom,
  wrap
*/
```