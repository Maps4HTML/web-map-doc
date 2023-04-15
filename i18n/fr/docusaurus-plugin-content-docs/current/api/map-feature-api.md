---
id: map-feature-api
title: "HTMLFeatureElement"
slug: /api/map-feature-api
---

# HTMLFeatureElement

## Properties

### zoom

`HTMLFeatureElement.zoom`


```js
```
---

### min



---

### max

---

### extent

---

## Methods

### zoomTo()
`HTMLFeatureElement.zoomTo()` Zoom the viewport to be centred on the feature's extent.
The zoom / scale of the map displayed depends on the native zoom property of the feature.
If the feature has no specified zoom property, the extent will be 'fit' into the
viewport at the largest integral zoom / scale possible. If a zoom property is available,
the viewport will be centred on the centre of the feature's extent at that zoom
value.

For point features (which have a zero-area extent), the viewport will be centred on
the point location and will fit the extent of a single tile centred at that location,
at an integral zoom / scale equal to the zoom property value, if set, or at the 
fallback (derived) zoom value if no zoom property is set. 

```js
let f = document.querySelector('map-feature');
f.zoomTo();
```

---

### click(tbd event)

```js
let f = document.querySelector('map-feature');
f.click();
```

---

### focus(tbd event)

```js
let f = document.querySelector('map-feature');
f.focus();

---

### blur(tbd event)

```js
let f = document.querySelector('map-feature');
f.blur();

---

### mapml2geojson(options)

HTMLFeatureElement.mapml2geojson(options) returns the feature in GeoJSON format.

| Function | Returns | Description |
|----------|---------|-------------|
| <code>mapml2geojson(<Object\>&nbsp;options)</code> | A JavaScript (GeoJSON) feature object | This function transforms the `<feature>` element to a GeoJSON Feature object. You supply [options](#options) to control the transformation. 

:::caution

`mapml2geojson` must be called inside a windows.onload event to work properly. i.e.

``` js
window.onload = (event) => {
  let layer = document.querySelector('layer-');
  layer.mapml2geojson();
};
```

:::

#### Parameters

| Parameter | Description |
|------|--------------|
| <Object\>&nbsp;options | Optional. You supply parameters via an options object with [predefined option names](#options). |

#### Options

<Object\> A set of key/value pairs that customize the output GeoJSON object. All are optional and detailed below.

| Option | Type | Default | Description |
|------|------|---------------|--------|
| `propertyFunction` | <Function\> | _n/a_ | A function you supply that maps the 
features' `<map-properties>` element to a 
[GeoJSON "properties" member](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2), 
since only you know the markup design in your `<map-properties>` value. If you 
don't supply this option, a default function will attempt to reverse a 
`<table>` child of the `<map-properties>` element, as if that table was generated 
by the [default properties option function from geojson2mapml](mapml-viewer-api#options). |
| `transform` | <Boolean\> | `true` | Transform `<map-coordinates>` values to `gcrs` (longitude,latitude) values, if they are not already so. GeoJSON [recommends](https://www.rfc-editor.org/rfc/rfc7946.html#section-4) using WGS 84 longitude,latitude coordinates, so this is the default behaviour. |
###### Notes

`mapml2geojson`, by default, will transform coordinates to `gcrs` before serialization, if 
necessary. Note that all geographic CRS are not equivalent, and the interpretation
of such coordinates is not guaranteed to conform to WGS 84 / GPS coordinates, 
and therefore may not conform to [the GeoJSON recommendation](https://datatracker.ietf.org/doc/html/rfc7946#section-4),
which requires longitude,latitude coordinates that
are encoded as WGS 84.  The projection engine used to implement this conversion
is not capable of transforming coordinates from one ellipsoid to another, and 
so the resulting JSON SHOULD (somehow, tbd) be tagged with the datum in use by the projection of the layer.

---
## Events

| Event name      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| changestyle     | Fired before the layer changes src due to user selecting alternate style in layer control |
| changeprojection | Fired before the layer changes projection due to its declared projection being not equal to that of the map |
| extentload | Fired when the metadata for a layer has loaded, but before loading tiles, features and other content |
---

## Examples

### mapml2geojson
#### Default options
An example showcasing default GeoJSON output when no options are provided.
``` html
<layer- label="Point Geometry" checked="">
   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>
   <map-meta name="projection" content="OSMTILE"></map-meta>
   <map-meta name="cs" content="gcrs"></map-meta>
   <map-feature>
      <map-featurecaption>Point Geometry</map-featurecaption>
      <map-geometry>
         <map-point>
            <map-coordinates>-75.6916809 45.4186964</map-coordinates>
         </map-point>
      </map-geometry>
      <map-properties>
         <table>
            <thead>
               <tr>
                  <th role="columnheader" scope="col">Property name</th>
                  <th role="columnheader" scope="col">Property value</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">prop0</th>
                  <td itemprop="prop0">This is a Point</td>
               </tr>
            </tbody>
         </table>
      </map-properties>
   </map-feature>
</layer->
<script>
window.onload = (event) => {
   let layer = document.querySelector('layer-');
   let output = layer.mapml2geojson();
};
</script>
```

<details>
<summary>Click to view the output GeoJSON</summary>

``` js
{
 "title": "Point Geometry",
 "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],
 "type": "FeatureCollection",
 "features": [{
     "type": "Feature",
     "geometry": {
         "type": "Point",
         "coordinates": [-75.6916809, 45.4186964]
     },
     "properties": {
         "prop0": "This is a Point"
     }
 }]
}
```

</details>

---