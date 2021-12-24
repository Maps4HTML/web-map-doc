---
id: extent
title: "<map-extent>: The Extent element"
slug: /elements/extent/
---

The `<map-extent>` element is a hypertext control that is associated to and represents the 
rectangle of the map viewport, from the user's perspective.  Map authors use it 
to compose server requests for layer content. Requests are composed using 
URL templates processed by the browser as the map moves and requires new content
to paint.  The URL templates each contain one or more variable references, with each
variable reference denoted by the name of the variable enclosed in braces `{}`.

Variables are created by the map author using the `<map-input>` element.  There are
several types of `<map-input>`, allowing the map author to reference the corners
of the extent, its width and height, and its zoom.

An example of a `<map-extent>` element being used to load image tiles for a single
URL template.

```html
<layer- label="OpenStreetMap" checked>
  <map-extent units="OSMTILE">
    <map-input name="z" type="zoom" value="18" min="0" max="18"></map-input>
    <map-input name="s" type="hidden" shard="true" list="servers"></map-input>
    <map-datalist id="servers">
      <map-option value="a"></map-option>
      <map-option value="b"></map-option>
      <map-option value="c"></map-option>
    </map-datalist>
    <map-input name="x" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
    <map-input name="y" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
    <map-link rel="tile" tref="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></map-link>
  </map-extent>
</layer->
```

<iframe src="../../../demo/extent-demo.html" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributes

### `units`

Specifies the projection of the tiles and other content that is expected from the
server.  If the projection value is not a case-sensitive match of the `<mapml-viewer>` 
`projection` attribute, the layer will be disabled in the layer control, and will
not be displayed on the map, nor content fetched.

Defined values of `units` include:

| Projection     	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| OSMTILE       | Web Mercator, with 256px x 256px tiles recursively defined inside a square bounds at zoom = 0|
| WGS84         | Pseudo plate carrée, with 256px x 256px tiles. Zoom = 0 contains two tiles in two columns, with their origin at -180,90. False easting and northing (pcrs) values inside the projection bounds correspond to longitude and latitude, respectively. |
| CBMTILE       | Lambert Conformal Conic, with 256px x 256px tiles.  Zoom levels chosen by scale denominator, so tiles do not nest.|

Author-defined values of `units` are possible, using the [Custom projections API](../../api/custom-projections/)

---

## Events

| Event name    | Description                                             |
|--------------	|--------------------------------------------------------	|
| extentload    | Fires when a layer's extent is loaded and parsed. The intent is that this event is analagous to the [media element loadedmetadata event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event), but for map layers.              |