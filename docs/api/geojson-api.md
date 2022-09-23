---
id: geojson-api
title: GeoJSON API
slug: /api/geojson-api
---

## Introduction

The **GeoJSON API** is provided as a library which can be added to any document as long as it preceded by the mampl-viewer module, i.e.

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

### Methods

#### `geojson2mapml` - convert a GeoJSON feature or feature collection string or object  to a MapML `<layer->` element.

##### Returns - a HTMLLayerElement node

##### Parameters

| Parameter | Description |
|------|---------------------|
| <String \| Object> json | A GeoJSON string or object |
| <Function \| String \| HTMLElement> properties | A function that maps the GeoJSON features' properties member to an HTMLElement, or a string that will be parsed as an HTMLElement, or an HTMLElement. By default, properties will be mapped to an HTML table. |\
| <Function\> geometryFunction | Optional. A function you supply that can add classes, hyperlinks and spans to the created `<map-geometry>` element. Plain `<map-geometry>` element will be created by default.

###### Design notes

geometryFunction - a user supplied function that is handed the generated 
`<map-geometry>` element, and the input GeoJSON feature.  Such a function can 
perform custom markup on the geometry element:

- styling: tag `<map-geometry>` elements with class names
- linking: add links and spans into geometry coordinates



#### `mapml2geojson` - serialize a MapML `<layer->` or `<map-feature>` element as a GeoJSON feature collection object

##### Returns - a JavaScript (GeoJSON) object

##### Parameters

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
