---
id: geometry
title: "<map-geometry>: The Geometry element"
slug: /elements/geometry/
---
A `<map-geometry>` element is a child of `<map-feature>` and is used to describe the geometry of the feature.

A `<map-geometry>` element has one child element, which can be a `<map-point>`, `<map-linestring>`, `<map-polygon>`, `<map-multipoint>`, `<map-multilinestring>`, `<map-multipolygon>`, or `<map-geometrycollection>`.

<iframe src="../../../demo/map-geometry-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributes

### `cs`

Defines the Coordinate System of the geometry. When no `cs` is provided, the default `pcrs` is used.


| CRS | Description |
|------|-------------|
| tcrs | For each zoom level (i.e. at a pre-defined scale denominator value), locations are expressed in terms of scaled pixels, with the origin of pixel space at the upper left corner.  The pixel coordinates of a location at a single zoom level are independent of the pixel coordinates of a location any other zoom level.  In other words, you need to know the zoom level of a tcrs coordinate in order to locate it on a map or otherwise process it. |
| tilematrix | Each zoom level has an array of tiles, called a tilematrix.  The individual tiles constitute the coordinates in this CRS, and the axes are know as `row` and `column`.  The tiles are defined as squares of 256 pixels in the associated tcrs of the particular zoom level. |
| pcrs | Projected CRS (pcrs) are defined by a mathematical relationship with an underlying gcrs, using a technique called "projection". pcrs coordinates are scale- and zoom level-independent, and are designed to represent geographic coordinates on a planar surface, such as a device screen. The measurement units of pcrs coordinates is _usually_ meters (a notable exception being pcrs coordinates in the `WGS84` projection). |
| gcrs | Geographic coordinates are referenced to various ellipsoids, and are not necessarily comparable across projections.  A common ellipsoid today is WGS 84, which is defined and used by the global positioning satellite (GPS) constellation. |
| map | The map CRS is dynamic, in the sense that it has its origin at the upper left of the user's viewport, with scaled pixels as units.  This is used to identify image coordinates for use, typically by WMS and similar services which use a virtual image to enable query of map feature property information, without necessarily transferring the features over the network. |
| tile | Each tile in any zoom level has an implicit scaled-pixel coordinate system ranging from 0 to 255 in both horizontal and vertical directions. These coordinates are used by WMTS and similar services to identify a pixel for query of feature property values, without transferring the feature geometry over the network. |

---

## Associated Elements

### `<map-geometry>`

Parent element that contains the `<map-point>`,  `<map-linestring>`, `<map-polygon>`, `<map-multipoint>`, `<map-multilinestring>`, `<map-multipolygon>`, and `<map-geometrycollection>` elements

---

### `<map-point>`

This element contains a `map-coordinates` element containing a single position. Axis order - x followed by y, separated by whitespace.

---

### `<map-linestring>`

This element contains a `map-coordinates` element containing two or more positions. Axis order - x followed by y, separated by whitespace.

---

### `<map-polygon>`

This element contains one or more `map-coordinates` elements, each containing three or more positions. Axis order - x followed by y, separated by whitespace.

The first and last positions in every child `map-coordinates` element are equal / at the same position.

The first `map-coordinates` element represents the outside of the polygon, and subsequent `map-coordinates` elements represent holes. The "winding order" of positions in child `map-coordinates` should depend on the axis orientation of the coordinate reference system in use, and whether the `map-coordinates` element represents the exterior of a polygon, or a hole. For WGS84, the exterior should be counterclockwise and holes should be clockwise.

---

### `<map-multipoint>`

This element contains a `map-coordinates` element, containing one or more positions. Axis order - x followed by y, separated by whitespace.

---

### `<map-multilinestring>`

This element contains one or more `map-coordinates` elements, each containing two or more positions. Axis order - x followed by y, separated by whitespace.

---

### `<map-multipolygon>`

This element contains the contents one or more `<map-polygon>` elements. Axis order - x followed by y, separated by whitespace.

For each member polygon, the same non-schema constraints apply to multipolygon descendant `map-coordinates` elements, as for polygon `map-coordinates` descendant elements.

---

### `<map-geometrycollection>`

This element contains one or more `<map-point>`, `<map-linestring>`, `<map-polygon>`, `<map-multipoint>`, `<map-multilinestring>`, `<map-multipolygon>` elements.

For each member geometry, the same non-schema constraints apply as to the unique geometry type above.

---


## Examples


---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML geometry element](https://maps4html.org/MapML/spec/#the-geometry-element-0) |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/geometry.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)