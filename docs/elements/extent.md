---
id: extent
title: "<map-extent>"
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
<mapml-viewer projection="OSMTILE" lat="10" lon="0" zoom="1">
  <layer- label="OpenStreetMap" checked>
    <map-extent units="OSMTILE">
      <map-input name="z" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="x" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="y" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

<iframe src="../../../demo/extent-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

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

### `label`

Specifies a label for an extent which is displayed in the layer control. When a `label` is not provided, the extent is hidden by default in the layer control.

---

## Events

| Event name    | Description                                             |
|--------------	|--------------------------------------------------------	|
| extentload    | Fires when a layer's extent is loaded and parsed. The intent is that this event is analagous to the [media element loadedmetadata event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event), but for map layers.              |

---

## Examples

### Multiple Extent

The following example shows multiple `<map-extent>` elements in a layer. The different elements can be selected from the three dots menu of the Basemap layer.

```html
<mapml-viewer projection="OSMTILE" zoom="2" lat="53.331" lon="-91.667" controls>
  <!-- Change Basemap using the three dots menu of the basemap layer -->
  <layer- label="Basemap" checked="">
    <!-- This extent will be hidden in the layer control since no label is provided -->
    <map-extent units="OSMTILE">
      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>
    </map-extent>
      <map-extent label="Nat Geo" units="OSMTILE">
      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/WMTS/tile/1.0.0/NatGeo_World_Map/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>
    </map-extent>
    <map-extent label="Imagery" units="OSMTILE">
      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>
      <map-link rel="tile" tref="https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/WMTS/tile/1.0.0/Reference_World_Boundaries_and_Places/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

### WMS Request

The following example shows a Web Map Service Request using `<map-link>` to request map images.

```html
<mapml-viewer projection="OSMTILE" zoom="4" lat="53.331" lon="-91.667" controls>
  <layer- label="Toporama" checked="">
    <map-extent xmlns="http://www.w3.org/1999/xhtml" units="OSMTILE">
      <!-- URL parameters for WMS Request -->
      <map-input name="z" type="zoom" value="18" min="4" max="18"></map-input>
      <map-input name="w" type="width"></map-input>
      <map-input name="h" type="height"></map-input>
      <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <!-- Web Map Service requesting image -->
      <map-link rel="image" tref="https://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3857&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML extent element](https://maps4html.org/MapML/spec/#the-extent-element-0) |

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
| [**Rendering base layers (5.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering) |  |  |  |
| <div class="requirement">Display a map using tile data from an author-specified web map service (5.1.4)</div> | full | full |  |
| [**User navigation (pan and zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
| <div class="undecided">Load additional map tiles when they pan into view (5.4.3)</div> | full | full |  |
| <div class="discussion">Dynamically load different resolution map tile on zoom (5.4.6)</div> | full | full |  |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/extent.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)