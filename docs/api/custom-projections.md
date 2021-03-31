---
id: custom-projections
title: Custom Projections API
slug: /api/custom-projections
---

## Introduction

MapML defines a few built-in tiled CRS projections, including Web Mercator (OSMTILE), pseudo-plate carrée (WGS84), and  Canada's base map tile grid (CBMTILE). 

The `<mapml-viewer>` and `<map is="web-map">` custom elements provide the "GeoReferencing API", which gives you the ability to create custom projections and use them in the `<mapml-viewer>` or `<map is="web-map">` elements, defined using extended JSON-based "proj4" syntax, supported by the proj4js library.

For example:

```html
<!DOCTYPE html>
<html lang="en">
   <head>
     <meta charset="utf-8" >
     <title>Example Custom Projection</title>
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <script type="module" src="web-map/mapml-viewer.js"></script>
     <script type="module">
       let customProjectionDefinition = `{
          "projection": "ATLAS_POLAR_MAP",
          "proj4string" : "+proj=aeqd +lat_0=90 +lon_0=-90 +x_0=0 +y_0=0 +ellps=sphere +units=m +no_defs +type=crs",
          "origin" : [-20015200,20015200],
          "resolutions" :  [33073,16536.5,8268.246,4134.123,2067.061,1033.531,516.765],
          "bounds" : [[4979939,-4846977],[-5139071,3980038]],
          "tilesize" : 256
        }`;
      let map = document.querySelector("mapml-viewer");
      let cProjection = map.defineCustomProjection(customProjectionDefinition);    
      map.projection = cProjection;
    </script>
   </head>
   <body>
  <body>
    <mapml-viewer projection="ATLAS_POLAR_MAP" zoom="2" lat="83.48919" lon="-87.7687" controls>
      <layer- label="Atlas of Canada Polar Wall Map" checked>
        <link rel="license" title="Canadian Federal Geospatial Platform" href="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/">
        <extent units="ATLAS_POLAR_MAP">
          <input type="zoom" name="z" min="0" max="6" value="6" >
          <input type="location" name="x" axis="column" units="tilematrix" min="116" max="186">
          <input type="location" name="y" axis="row" units="tilematrix" min="125" max="184">
          <link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/tile/{z}/{y}/{x}/">
          <link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN_A/MapServer/tile/{z}/{y}/{x}/">
        </extent>
      </layer->
    </mapml-viewer>
  </body>
</html>
```

### Details

We won't discuss the actual `<mapml-viewer>` or `<map is="web-map">` elements here, except to say that the map `projection` attribute should have the exact same value of the `projection` member of the JSON object you pass to the GeoReferencing API's `defineCustomProjection` method, and every `<layer->` element in the map must declare and be encoded in that coordinate system, in order to display correctly.

The GeoReferencing API is provided by the `<mapml-viewer>` or `<map is="web-map">` element.  In a browser implementation, the API might be defined on the window object, but because of the ES6 modules used by custom elements, it is convenient to locate it on the mapping element which uses it.

To successfully call the `defineCustomProjection` method, you need to encode the projection method and parameters as members of a JSON string.  The process of doing this is not always simple, but is helped by resources such as https://spatialreference.org, where you can obtain the proj4 version of virtually any CRS definition. 

Remember to enclose member names in quotes followed by a colon: e.g. "projection": "MY_PROJECTION_NAME".  String values are also enclosed in quotes, and numbers and arrays following normal [JSON syntax](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

There are several required members to a custom projection definition:

- `projection` - this is a string name you give to your projection. We recommend using UPPERCASE to make projection names stand out. Colon ":" characters in the name are not permitted, because these names should not be confused with EPSG: or ogc: URI code lists, because what is being defined here is a CRS that has Web mapping specific parameters, discussed below.
- `proj4string` - This string is processed by [proj4js](http://proj4js.org/), so needs to provide parameters of a projection method supported by that library, in the format that it supports.
- `origin` - an array of two numbers representing the origin of the tile grid in coordinates of the projected coordinate system, typically meters.  The origin is always at the upper left of the tile grid space, and the column and row numbers increase to the right and down, respectively, following the WMTS standard.  If your tile source is configured according to the "TMS" community standard, you
- `resolutions` - an array of numbers, sorted in descending order of size in meters, of the "real-world" dimensions of a square pixel. The resolution is calculated using a nominal pixel size of 0.28mm, defined by the WMTS standard. NOTE THIS IS NOT TYPICALLY THE SAME VALUE THAT IS USED BY ESRI TILE SERVICES, WHICH USE 96 DPI AS THE NOMINAL SIZE (settable). Because scale varies over the extent of any projected coordinate system, the pixel resolution is usually valid only in limited locations, for example in Web Mercator, along the equator. The locations where pixel resolution is valid depend on the projection method and parameters.  The set of resolutions must match the set of resolutions of tiles in a cache, if you intend to use your custom projection with an existing tile service.
- `bounds` - an array of two arrays of coordinate pairs, defining a bounding box around part of the projected coordinate system, in meters typically. Requests should be valid and latitude / longitude are defined within these bounds.  Requests for maps, tiles and coordinate transformations that fall completely outside these bounds will not execute, preventing redundant traffic and errors.  
- `tilesize` - tiles are always square, and usually 256 pixels on a side.  You can specify another size here as an integer value.  Values of 256, 512, 1024, 2048 or 4096 should work.

