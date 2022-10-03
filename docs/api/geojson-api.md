---
id: geojson-api
title: GeoJSON API
slug: /api/geojson-api
# Display h2 to h4 headings
toc_max_heading_level: 4
---

## Introduction

The **GeoJSON API** is provided as a library which can be added to any document as long as it is preceded by the mampl-viewer module, i.e.

```html
<!doctype html>
<html lang="en">
    <head>
        <script type="module" src="mapml-viewer.js"></script>
        <script src="lib/geojson.js"></script>
    </head>
    <body>
        ...
    </body>
</html>    
```

---

## GeoJSON To MapML

`geojson2mapml` - convert a GeoJSON feature or feature collection string or object  to a MapML `<layer->` element. Returns - a HTMLLayerElement node

### Parameters

| Parameter | Description |
|------|---------------------|
| <String \| Object> json | A GeoJSON string or object |
| &ltObject&gt options | A set of key/value pairs that customize the output MapML layer. All options are optional and described below. |

### Options

&ltObject&gt A set of key/value pairs that customize the output MapML layer. All options are optional and detailed below.

#### `label`
&ltString&gt Specifies the layer's [label](http://localhost:3000/web-map-doc/docs/layers/layer/#label). Default is json.name, json.title or "Layer".

```js
geojson2mapml(json, {label: "Downtown Ottawa"});
```

#### `projection`
&ltString&gt Specifies the [projection](http://localhost:3000/web-map-doc/docs/elements/mapml-viewer/#projection) of the layer (OSMTILE, WGS84, CBMTILE, APSTILE). Default is "OSMTILE".

```js
geojson2mapml(json, {projection: "CBMTILE"});
```

#### `caption`
&ltFunction | String&gt Specifies the [feature caption](http://localhost:3000/web-map-doc/docs/elements/feature/#map-featurecaption) of the feature(s).
- Function - Accepts one argument being the feature JSON and returns a String.
- String - A string that is the name of the property that will be mapped to featurecaption.

```js
// caption function
geojson2mapml(json, {caption: function(feature) {
    return feature.properties.desc + ", not a Polygon";
    }
});
// caption string referencing a property name
geojson2mapml(json, {caption: "desc"});
```

#### `properties`
&ltFunction | String | HTMLElement&gt Specifies how the properties are mapped. By default, properties will be mapped to an HTML [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table). 
- Function - A function that maps the GeoJSON features' properties member to an HTMLElement. Accepts one argument being the JSON feature properties and returns an HTMLElement.
- String - A sanitized string that will be parsed as an HTMLElement.
- HTMLElement - an HTMLElement. 

```js
// properties function
geojson2mapml(json, {properties: function(properties) {
    let parser = new DOMParser();
    return parser.parseFromString("<h1>" + properties.desc + "'s property</h1>", "text/html").body.firstChild;
    }
});
// properties string
geojson2mapml(json, {properties: "<p>This property was inserted using a properties string</p>"});
```
#### `geometryFunction`
&ltFunction&gt A function to modify the generated [children](http://localhost:3000/web-map-doc/docs/elements/geometry/#child-elements) of `<map-geometry>` which can add classes, [hyperlinks](http://localhost:3000/web-map-doc/docs/other-elements/map-a/) and [span's](http://localhost:3000/web-map-doc/docs/other-elements/span/) to the instance. Plain `<map-geometry>` element will be created by default. The function accepts two arguments: The generated [child element](http://localhost:3000/web-map-doc/docs/elements/geometry/#child-elements) of `<map-geometry>` and the [feature json object](https://www.rfc-editor.org/rfc/rfc7946#section-3.2) to return a modified child element of the `<map-geometry>` element.
###### Design notes

geometryFunction - a user supplied function that is handed the generated child of the 
`<map-geometry>` element, and the input GeoJSON feature. Such a function can 
perform custom markup on the geometry element:

- styling: tag `<map-geometry>` elements with class names
- linking: add links and spans into geometry coordinates

### Examples

#### Options string
An example showcasing how strings can be used to set `label`, `projection`, `caption` and `properties` options.
```js
let json = {
    "name": "Default Name",
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-75.6916809,45.4186964]
    },
    "properties": {"desc": "This is a Point"}
};

// GeoJSON To MapML
let output = geojson2mapml(json, {label: "Example 1", projection: "CBMTILE", caption: "desc", properties: "<h3>This is a property heading</h3>"});
```

<details>
<summary>Click to view the output HTMLElement</summary>

``` html
<layer- label="Example 1" checked="">
   <map-meta name="projection" content="CBMTILE"></map-meta>
   <map-meta name="cs" content="gcrs"></map-meta>
   <map-feature>
      <map-featurecaption>This is a Point</map-featurecaption>
      <map-geometry>
         <map-point>
            <map-coordinates>-75.6916809 45.4186964</map-coordinates>
         </map-point>
      </map-geometry>
      <map-properties>
         <h3>This is a property heading</h3>
      </map-properties>
   </map-feature>
</layer->
```

</details> 

#### Options function
An example showcasing how functions can be used to set `caption` and `properties` options.
```js
let json = {
    "name": "Default Name",
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-75.6916809,45.4186964]
    },
    "properties": {"desc": "This is a Point"}
};

// function to set caption
let cap = function c(j) {
  let str = "This point is located at: (" + j.geometry.coordinates[0] + ", " + j.geometry.coordinates[1] + ").";
  return str;
}

// function to set properties
let prop = function f(p) {
  let parser = new DOMParser();
  return parser.parseFromString("<h1>" + p.desc + "'s property</h1>", "text/html").body.firstChild;
}

// GeoJSON To MapML
let output = geojson2mapml(json, {label: "Example 2", caption: cap, properties: prop});
```

<details>
<summary>Click to view the output HTMLElement</summary>

``` html
<layer- label="Example 2" checked="">
   <map-meta name="projection" content="OSMTILE"></map-meta>
   <map-meta name="cs" content="gcrs"></map-meta>
   <map-feature>
      <map-featurecaption>This point is located at: (-75.6916809, 45.4186964).</map-featurecaption>
      <map-geometry>
         <map-point>
            <map-coordinates>-75.6916809 45.4186964</map-coordinates>
         </map-point>
      </map-geometry>
      <map-properties>
         <h1>This is a Point's property</h1>
      </map-properties>
   </map-feature>
</layer->
```

</details> 

#### Default options
An example showcasing default output when no options are provided.
```js
let json = {
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
};

// GeoJSON To MapML
let output = geojson2mapml(json);
```

<details>
<summary>Click to view the output HTMLElement</summary>

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
```

</details> 

## MapML To GeoJSON

`mapml2geojson` - serialize a MapML `<layer->` or `<map-feature>` element as a GeoJSON feature collection object. Returns - a JavaScript (GeoJSON) object

### Parameters

| Parameter | Default | Description |
|------|-------|--------------|
| <HTMLLayerElement\> element | n/a | A `<layer->` element |
| <Function\> propertyFunction | n/a | A function that maps the features' `<map-properties>` element to a [GeoJSON "properties" member](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2). |
| <Boolean\> transform | true | Transform coordinates to `gcrs` values. Note that non-gcrs values don't conform to the GeoJSON recommendation. |

###### Notes

`mapml2geojson`, by default, will transform coordinates to `gcrs` before serialization, if 
necessary. Note that all geographic CRS are not equivalent, and the interpretation
of such coordinates is not guaranteed to conform to WGS 84 / GPS coordinates, 
and therefore may not conform to [the GeoJSON recommendation](https://datatracker.ietf.org/doc/html/rfc7946#section-4),
which requires longitude,latitude coordinates that
are encoded as WGS 84.  The projection engine used to implement this conversion
is not capable of transforming coordinates from one ellipsoid to another, and 
so the resulting JSON SHOULD (somehow, tbd) be tagged with the datum in use by the projection of
the layer.

###### Design notes

- any other ideas, suggestions, corrections?

---
