---
id: layer-api
title: "HTMLLayerElement"
slug: /api/layer-api
---

# HTMLLayerElement

## Properties

### checked

`HTMLLayerElement.checked` is a boolean read/write value that turns the layer on and off,
and reflects the checked attribute. The checked state is reflected in the layer 
control user interface for the layer via a checkbox next to the layer name.  The 
checked property can be used to programatically change the checked state of the layer.
The checked property can't be changed if the disabled property is set.

To set the checked state of a layer to on:

```js
let layer = document.querySelector('layer-');
layer.checked = true; // valid values are true | false
```

To read the checked state of the layer:

```js
let layer = document.querySelector('layer-');
let isChecked = layer.checked;
```
---

### hidden
`HTMLLayerElement.hidden` is a boolean  read/write value that hides or unhides the
layer in the layer control only.  The hidden state has no bearing on the presence
of layer content on the map, it only affects the layer presence layer control. 
This can be useful for managing short-lived layers, such as search results, to the map without 
forcing the user to manage the layer state, which is done by your application.
It can also be useful for managing a permanent base layer without cluttering the
user interface.

To set/update whether the layer is "hidden":

```js
let layer = document.querySelector('layer-');
layer.hidden = true; // valid values are true | false
```

To get the `<layer->`'s hidden value:

```js
let layer = document.querySelector('layer-');
let isHidden = layer.hidden;
```
---

### disabled
`HTMLLayerElement.disabled` provides READ-ONLY access to the disabled state of the
layer.  A layer becomes disabled if its contents are not rendered, either by being
completely outside the current map extent or by having an error associated to the
layer processing, such as being in a projection that is incompatible with the
projection of the map. When a layer is disabled, the user can't interact with it
in the layer control, and it will not be visible in the map viewport.  If a layer
becomes not-disabled, through manipulation of the map, for example, the layer
will become interactable in the layer control, and should be visible in the 
map viewport.

---

### label
`HTMLLayerElement.label` reflects the `label` content attribute, and specifies a 
fallback accessible name for the layer, if the accessible name is not provided 
via a local `<map-title>` element child of the `<layer->` element, or in the 
`<map-head>` of a remote MapML document, loaded via the `src` URL value, respectively.

To set/update the `<layer->`'s label:

```js
let layer = document.querySelector('layer-');
layer.label = "New Title";
```

To get the `<layer->`'s label value:

```js
let layer = document.querySelector('layer-');
let label = layer.label;
```
---

### src
`HTMLLayerElement.src` reflects the src HTML attribute, and specifies the URL of the
MapML document for the layer.  The src property may be undefined if the layer
contains inline content.  If the src property returns a value, any inline content 
will be ignored.
To set/update the `<layer->`'s src:

```js
let layer = document.querySelector('layer-');
layer.src = "https://example.org";
```

To get the `<layer->`'s src value (URL):

```js
let layer = document.querySelector('layer-');
let url = layer.src;
```
---
### opacity
`HTMLLayerElement.opacity` provides read/write access to the `opacity` value, and is reflected in the layer control for each layer, under "Opacity".

To set/update the `<layer->`'s opacity:

```js
let layer = document.querySelector('layer-');
layer.opacity = 0.5; // valid values from 0 to 1
```

To get the `<layer->`'s opacity value:

```js
let layer = document.querySelector('layer-');
let opacity = layer.opacity;
```

---
## Methods

### zoomTo()
`HTMLLayerElement.zoomTo()` Zoom to the layer's extent in the map, at the maximum
zoom level in which the extent fits completely.

```js
let layer = document.querySelector('layer-');
layer.zoomTo();
```

---

### mapml2geojson(options)

`HTMLLayerElement.mapml2geojson(options)` returns the layer in GeoJSON format.

| Function | Returns | Description |
|----------|---------|-------------|
| <code>mapml2geojson(\<Object\> options)</code> | A JavaScript (GeoJSON) feature collection object | This function transforms the `<feature>` element children of a `<layer->` element to a GeoJSON FeatureCollection object. You supply [options](#options) to control the transformation. This function must be used inside a windows.onload event.

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
| \<Object\> options | Optional. You supply parameters via an options object with [predefined option names](#options). |

#### Options

\<Object\> A set of key/value pairs that customize the output GeoJSON object. All are optional and detailed below.

| Option | Type | Default | Description |
|------|------|---------------|--------|
| `propertyFunction` | \<Function\> | _n/a_ | A function you supply that maps the features' `<map-properties>` element to a [GeoJSON "properties" member](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2), since only you know the markup design in your `<map-properties>` value. If you don't supply this option, a default function will attempt to reverse a `<table>` child of the `<map-properties>` element, as if that table was generated by the [default properties option function from geojson2mapml](mapml-viewer-api#options). |
| `transform` | \<Boolean\> | `true` | Transform `<map-coordinates>` values to `gcrs` (longitude,latitude) values, if they are not already so. GeoJSON [recommends](https://www.rfc-editor.org/rfc/rfc7946.html#section-4) using WGS 84 longitude,latitude coordinates, so this is the default behaviour. |
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
| loadedmetadata | Fired when the metadata for a layer has loaded. The intent is that this event is analagous to the [media element loadedmetadata event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event), but for map layers. |
|  map-change   | Fired when the `checked` attribute changes state            |
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

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [HTMLLayerElement](https://maps4html.org/MapML-Specification/spec/#dom-htmllayerelement) |

---

## Requirements

[Report problems with these requirements on GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">requirement</span>
<span class="enhancement">enhancement</span>
<span class="impractical">impractical</span>
<span class="undecided">undecided</span>
<span class="discussion">under discussion</span></b></p>

|  | Spec | Viewer | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Properties**](#properties) | full | full | full |
| [**Methods**](#methods) | full | full | full |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/api/layer-api.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)
