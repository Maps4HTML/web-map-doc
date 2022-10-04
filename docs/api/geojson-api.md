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

| Parameter | Type | Default | Description |
|------|------|---------------|--------|
| `label` | <String\> | `json.name`, `json.title` or "Layer" | Sets the output layer's [label](http://localhost:3000/web-map-doc/docs/layers/layer/#label). |
| `projection` |  <String\> | `OSMTILE` | Sets the output layer's [projection](http://localhost:3000/web-map-doc/docs/elements/mapml-viewer/#projection). Defined values include: `OSMTILE`, `CBMTILE`, `WGS84`, and `APSTILE`.|
| `caption` | <String&nbsp;\|&nbsp;Function\> | _No caption_ | A function that accepts the feature JSON and returns a string, OR a string that is the name of a property to be mapped to the [featurecaption](http://localhost:3000/web-map-doc/docs/elements/feature/#map-featurecaption). If a matching property is not found, the string provided will be used as the feature caption value. See [caption option <Function\> example](#caption-option)|
| `properties` | <Function&nbsp;\|&nbsp;String&nbsp;\|&nbsp;HTMLElement\> | _Properties will be mapped to an HTML [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)._ | Specifies how the properties are mapped. <Function\> - A function that accepts one argument - the GeoJSON feature object - and which must return an HTMLElement that becomes the single child element of the <properties\> element. <String\> - A string that will be parsed and used as the single child element of the `<properties>` element for all features. <HTMLElement\> - an element that will be used as the single child element of `<properties>` element for all features. See [properties option <Function\> example](#properties-option)|
| `geometryFunction` | <Function\> | _MapML geometry will mirror the GeoJSON geometry value_ | <Function\> A function to modify the generated [descendants](http://localhost:3000/web-map-doc/docs/elements/geometry/#child-elements) of `<map-geometry>` which can add classes, [hyperlinks](http://localhost:3000/web-map-doc/docs/other-elements/map-a/) and [span's](http://localhost:3000/web-map-doc/docs/other-elements/span/) to the instance. Plain `<map-geometry>` element will be created by default. The function accepts two arguments: The generated [child element](http://localhost:3000/web-map-doc/docs/elements/geometry/#child-elements) of `<map-geometry>` and the [feature json object](https://www.rfc-editor.org/rfc/rfc7946#section-3.2) to return a modified child element of the `<map-geometry>` element. See the [geometryFunction example](#geometry-option) |


### Examples

<div id="label-option"></div>

```js title="geojson2mapml label option"
geojson2mapml(json, {label: "Downtown Ottawa"});
```

<div id="projection-option"></div>

```js  title="geojson2mapml projection option"
geojson2mapml(json, {projection: "CBMTILE"});
```

<div id="caption-option"></div>

```js title="geojson2mapml caption option - function-valued"
// caption function
geojson2mapml(json, {caption: function(feature) {
    return feature.properties.desc + ", not a Polygon";
    }
});
// caption option string value referencing a property name
geojson2mapml(json, {caption: "desc"});
```

<div id="properties-option"></div>

```js  title="geojson2mapml properties option - function-valued"
// properties function
geojson2mapml(json, {properties: function(feature) {
    let parser = new DOMParser();
    return parser.parseFromString("<h1>" + properties.desc + "'s property</h1>", "text/html").body.firstChild;
    }
});
// properties option - string valued - make sure you sanitize user-supplied strings
geojson2mapml(json, {properties: "<p>This property was inserted using a properties string</p>"});
```

<div id="geometry-option"></div>

```js title="geojson2mapml geometryFunction option"
let options = {
                geometryFunction: function (g, f) {
                  g.setAttribute("class", f.properties.class);
                  return g;}
              };
geojson2mapml(json, options);
```

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
