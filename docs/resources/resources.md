---
id: resources
title: Resources
slug: /resources/resources
---

This page contains descriptions and links to software resources that may help you if you wish to publish web maps from your own site.  

## GeoServer

[GeoServer](https://geoserver.org) is a full-featured spatial content management system for publishing map content to the Web.  GeoServer is a mature open source project managed under the purview of the Open Source Geospatial foundation (OSGEO). The [MapML module](https://docs.geoserver.org/latest/en/user/extensions/mapml/index.html) is a robust open source extension plugin to GeoServer that enables MapML support across many of the Open Geospatial Consortium standards supported by GeoServer.

## GDAL Geospatial Data Abstraction Library

[GDAL](https://gdal.org) is a high-performance interoperability format translator software application that reads and writes myriad formats via a modern command line API.  MapML is supported for both [raster](https://gdal.org/en/stable/programs/gdal2tiles.html#mapml-options) and [vector](https://gdal.org/en/stable/drivers/vector/mapml.html) data types.  For rasters, GDAL supports re-tiling input data into MapML compatible tile pyramids or tile matrix sets, and it writes out a text/mapml document that can be used by a `<map-layer src="..."></map-layer>` element.  For vector data, GDAL's vector API supports read-write translation of a wide variety of vector formats, including MapML.  Attribute support for _reading_ MapML is conditional on it being written in a highly specific HTML structure, i.e. it can read attributes from the format that GDAL writes out for MapML. 

## Web Map Services and Web Map Tile Services

If you have access to [standards-based map or tile services for the web](https://www.geoseer.net/), for example Minnesota MapServer, Deegree or even ESRI, it is very likely that you can "write your own" MapML to use to incorporate those services in a map that uses the [MapML.js map viewer](../installation), per the examples and documentation on this site.

## MapML Chromium Browser Extension

The [MapML Browser Extension](../extension/features/) can be used to render and otherwise control certain aspects of the MapML.js user experience. No extension is available for Firefox or Safari at this time.

