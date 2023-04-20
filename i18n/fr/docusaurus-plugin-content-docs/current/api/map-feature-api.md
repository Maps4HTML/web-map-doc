---
id: map-feature-api
title: "HTMLFeatureElement"
slug: /api/map-feature-api
---

# HTMLFeatureElement

## Properties

### zoom

`HTMLFeatureElement.zoom` gets or sets the 'native' zoom of the feature; `zoom` 
[reflects](https://html.spec.whatwg.org/#example-reflect-incantation) the
content attribute of the same name. Map features' geometry and other properties 
are scale-dependent.  It's expected that features served by HTML (MapML) services 
will express the native or natural scale of the feature through its `zoom`, `min` 
and `max` (zoom) content and IDL attributes.

To set the zoom:
```js
let feature = document.querySelector('map-feature');
feature.zoom = 5; // set's the 'native' zoom of the feature
```

To get the zoom:
```js
let feature = document.querySelector('map-feature');
let zoom = feature.zoom; 
```
---

### min

:::caution
Not implemented yet
:::

To set the min:
```js
let feature = document.querySelector('map-feature');
feature.min = 5; // feature will not be rendered on zoom levels 0-4
```

To get the min:
```js
let feature = document.querySelector('map-feature');
let min = feature.min;
```
---

### max

:::caution
Not implemented yet
:::

To set the max:
```js
let feature = document.querySelector('map-feature');
feature.max = 10; // feature will not be rendered past zoom level 10
```

To get the max:
```js
let feature = document.querySelector('map-feature');
let max = feature.max;
```
---

### extent

Read-only.  Returns the upper left and lower right coordinates of the 
feature's minimum bounding rectangle as an object value.  

For point features (which have a zero-area extent), an `extent` is calculated 
to fit the corners of a single tile centred on that location,
at an integral zoom level equal to the feature's [zoom](#zoom) property value, if set, or at the 
fallback (calculated) zoom value if no [zoom](#zoom) property is set. 

```console
> let f = document.querySelector('map-feature')
> console.log(f.extent)
> {topLeft: {…}, bottomRight: {…}, projection: 'CBMTILE'}
```

The extent object is structured as follows:

<details>
<summary>Click to view the extent object</summary>

```js
{
    "projection": "CBMTILE",
    "topLeft": {
        "tcrs": [
            {
                "horizontal": 942.662039991251,
                "vertical": 1029.0945982508472
            },
/* an object with "horizontal" and "vertical" properties for each zoom level in the array */
            {
                "horizontal": 546743983.1949257,
                "vertical": 596874866.9854914
            }
        ],
        "tilematrix": [
            {
                "horizontal": 3.6822735937158244,
                "vertical": 4.019900774417372
            },
/* an object with "horizontal" and "vertical" properties for each zoom level in the array */
            {
                "horizontal": 2135718.6843551784,
                "vertical": 2331542.4491620758
            }
        ],
/* gcrs stands for "geographic coordinate reference system" */
        "gcrs": {
            "horizontal": -75.73195696514524,
            "vertical": 45.40761073808424
        },
/* pcrs stands for "projected coordinate reference system" */
        "pcrs": {
            "horizontal": 1509108.7182317898,
            "vertical": -170864.4342066869
        }
    },
    "bottomRight": {
        "tcrs": [
            {
                "horizontal": 942.7503158533199,
                "vertical": 1029.1828741129164
            },
            {
                "horizontal": 546795183.1949255,
                "vertical": 596926066.9854914
            }
        ],
        "tilematrix": [
            {
                "horizontal": 3.6826184213020308,
                "vertical": 4.0202456020035795
            },
            {
                "horizontal": 2135918.684355178,
                "vertical": 2331742.4491620758
            }
        ],
        "gcrs": {
            "horizontal": -75.67858731979081,
            "vertical": 45.387937810298354
        },
        "pcrs": {
            "horizontal": 1512495.3916717991,
            "vertical": -174251.10764670372
        }
    }
}
```

</details>

---

## Methods

### zoomTo()

`HTMLFeatureElement.zoomTo()` Move the viewport to be centred on the feature's [`extent`](#extent).
The zoom of the map displayed depends on the native [zoom](#zoom) property of the feature.
If the feature has no specified [zoom](#zoom) property, the [`extent`](#extent) will be 'fit' into the
viewport at the largest integral zoom possible. If a [zoom](#zoom) property is available,
the viewport will be centred on the centre of the feature's [`extent`](#extent) at that zoom
value, whether or not the [`extent`](#extent) fits completely within the viewport.

#### Syntax

```js
let f = document.querySelector('map-feature');
f.zoomTo(); // re-center the map on the feature at its native zoom
```
#### Parameters

None.

#### Return value

None ([undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

---

### click(tbd: event)

The `click` method simulates a mouse click on the feature.

#### Syntax:

```js
let f = document.querySelector('map-feature');
f.click();
```
#### Parameters:

None.

#### Return value:

None ([undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).


---

### focus(tbd event, options)

#### Syntax:

```js
let f = document.querySelector('map-feature');
f.focus();
```

#### Parameters:

`options` <span class="badge">Optional</span>

An optional object for controlling aspects of the focusing process. 
This object may contain the following properties:

##### preventScroll

Copy from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#preventscroll)

##### focusVisible

Copy from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#focusvisible)

#### Return value:

None ([undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

---

### blur(tbd event)

#### Syntax

```js
let f = document.querySelector('map-feature');
f.blur();
```

#### Parameters

None.

#### Return value

None ([undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).


---

### mapml2geojson(options)

`HTMLFeatureElement.mapml2geojson(options)` returns the feature in GeoJSON format.

| Function | Returns | Description |
|----------|---------|-------------|
| <code>mapml2geojson(<Object\>&nbsp;options)</code> | A JavaScript (GeoJSON) feature object | This function transforms the `<feature>` element to a GeoJSON Feature object. You supply [options](#options) to control the transformation. 

:::caution

`mapml2geojson` must be called inside a windows.onload event to work properly. i.e.

:::

#### Syntax

``` js
window.onload = (event) => {
  let layer = document.querySelector('layer-');
  layer.mapml2geojson();
};
```

#### Parameters

| Parameter | Description |
|------|--------------|
| <Object\>&nbsp;options | Optional. You supply parameters via an options object with [predefined option names](#options). |

##### Options

<Object\> A set of key/value pairs that customize the output GeoJSON object. All are optional and detailed below.

| Option | Type | Default | Description |
|------|------|---------------|--------|
| `propertyFunction` | <Function\> | _n/a_ | A function you supply that maps the features' `<map-properties>` element to a [GeoJSON "properties" member](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2), since only you know the markup design in your `<map-properties>` value. If you don't supply this option, a default function will attempt to reverse a `<table>` child of the `<map-properties>` element, as if that table was generated by the [default properties option function from geojson2mapml](mapml-viewer-api#options). |
| `transform` | <Boolean\> | `true` | Transform `<map-coordinates>` values to `gcrs` (longitude,latitude) values, if they are not already so. GeoJSON [recommends](https://www.rfc-editor.org/rfc/rfc7946.html#section-4) using WGS 84 longitude,latitude coordinates, so this is the default behaviour. |
###### Notes

:::caution

`mapml2geojson`, by default, will transform feature coordinates to `gcrs` before serialization, if 
necessary. Note that all geographic CRS are <u>**not**</u> equivalent, and the interpretation
of such coordinates is not guaranteed to conform to WGS 84 / GPS coordinates, 
and therefore may not conform to [the GeoJSON recommendation](https://datatracker.ietf.org/doc/html/rfc7946#section-4),
which requires longitude,latitude coordinates to be
encoded as WGS 84.  The projection engine used to implement this conversion
is not capable of transforming coordinates from one [ellipsoid](https://en.wikipedia.org/wiki/Earth_ellipsoid) to another, and 
so the resulting JSON SHOULD (somehow, tbd) be tagged with the datum in use by the projection of the layer.
:::

#### Return value

A GeoJSON object representing the feature

---
## Events

| Event name      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| click | These event names were copied from [Leaflet Interactive Layer](https://leafletjs.com/reference.html#interactive-layer-event) and are subject to discussion. They are not implemented by map-feature. |
| dblclick | Actually, it's probably worth going through MDN's [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface and events for inspiration. |
| mousedown | |
| mouseup | |
| mouseover | |
| mouseout | |
| contextmenu | |
---

## Examples

### zoomTo

An example of how to use the zoomTo() method to move the map to a feature.

---

### click

An example of how to use the click() method to programmatically open a feature's 
popup.

---

### focus

An example of how to use the focus() method to move the document focus to a feature

---

### blur

An example of removing the focus from a feature and putting it on the map container, 
effectively starting the map tab sequence over for keyboard users.

---

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
