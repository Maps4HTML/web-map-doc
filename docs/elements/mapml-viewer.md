---
id: mapml-viewer
title: "<mapml-viewer>: The Map element"
slug: /elements/mapml-viewer/
---

The `<mapml-viewer>` element is the main element you can use to put a custom Web map on your page.  To create a (really) simple Web map, you might use it like this:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>A Simple Web Map[tm]</title>
  <script type="module" src="web-map/mapml-viewer.js"></script>
  <style>
    html, body {
    height: 100%; /* These styles are required if you wish to use a % based
                     height value on the mapml-viewer element. */
    }
  </style>
</head>
<body>
  <mapml-viewer projection="OSMTILE" zoom="0" lat="0.0" lon="0.0" controls>
    <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked></layer->
  </mapml-viewer>
</body>
</html>    
```

<iframe src="../../../demo/mapml-viewer-demo.html" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

Note that for the above example to run properly on your own site, you need to get a built copy of the `<mapml-viewer>` project in your site's folder. In the example, the `<mapml-viewer>` files are copied into the folder named "web-map" in your site root folder. Your own site's path to these files will depend on how you structure your folders.

`<mapml-viewer>` is an "[autonomous custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)" in HTML.  You can distinguish an autonomous custom element from a "native" HTML element by the "-" anywhere in the element name. Autonomous custom elements are supported by all modern browsers, but don't work in old browsers (e.g. Internet Explorer and old Edge).

The `<mapml-viewer>` element has several attributes to control the presentation and initial location of the map.  

## Attributes

### `projection`

`projection` - an enumerated attribute. Case-sensitive values are: "`OSMTILE`", "`WGS84`", "`CBMTILE`" and "`APSTILE`".  
The default projection is `OSMTILE`.

  - `OSMTILE` corresponds to the widely-used "Web Mercator" projected coordinate reference system, implying a "tile pyramid" zoom range from 0 to 23 (minimum tile size ~2.4m).

  - `WGS84` provides an implementation of the "pseudo plate carrée" projected coordinate reference system, wherein the easting and northing axis units are decimal degrees (not meters). In `WGS84`, zoom level 0 contains two tiles that each cover a hemisphere of Earth's surface. `WGS84` is defined with 21 zoom levels (0 to 20).  

  - `CBMTILE` is the de facto standard grid layout for the Canadian Geospatial Data Infrastructure (CGDI), defined by Natural Resources Canada, and is based on the Lambert Conformal Conic projection (EPSG:3978). Zoom levels are based on a numeric map scale denominator (e.g. 10000 corresponding to a map scale of 1:10,000), with a particular pixel resolution selected, and as a result, successive zoom levels' tiles do not nest exactly (as they do in `OSMTILE`, `WGS84` and `APSTILE`). 

  - `APSTILE` is based on the Alaska Polar Stereographic (EPSG:5936) projected coordinate reference system, and has 20 zoom levels (0 to 19).

  - other projections are possible, using the [Custom Projections API](../api/custom-projections).

### `zoom`

`zoom` - a non-negative integer.  The value establishes the initial zoom level of the map.  For a small scale view of the world, use a lower value.  Use larger values for larger scales (smaller area maps). The maximum value depends on the particular `projection` and data source. Many map data sources have limited zoom levels available.

### `lat`

`lat` - a real number latitude. The value establishes the initial latitude of the of the center of the map. Latitudes on Earth range from -90.0 (south) to 90.0 (north).  Many projections are not able to display all latitudes, and most projections have a limited range of locations where distortion is controlled or limited. In particular, OSMTILE (Web Mercator) can only display content between the latitude range -84 to 84.

### `lon`

`lon` - a real number longitude. The value establishes the initial longitude of the of the center of the map.Longitudes on Earth range from -180.0 (west) to 180.0 (east). Similar comments related to distortion apply to those for latitude. Be careful, this attribute is named "lon" NOT "long", and if you use "long" your map won't work properly.

### `controls`

`controls` - a "boolean" attribute. Turns map controls on (if present) or off (if omitted). In HTML "boolean" attributes don't have values of "true" or "false" per se - they have the implied value of "true" if the attribute exists, and an implied value of "false" if the attribute is not present.  Sometimes the default map controls may not be useful for your map, so you may turn them off and design your own.

### `controlslist`

`controlslist` - an enumerated attribute, possible values are: "`nofullscreen`", "`nolayer`", "`noreload`" and "`nozoom`".  Occasionally, you may not want your users to have access to a particular control, so you may prune the set of controls automatically presented (when you have used the `controls` boolean attribute).
