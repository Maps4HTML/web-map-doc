---
id: templated-images
title: Templated Images Layer
slug: /layers/templated-images
---

In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms.

## Adding a templated image layer

```html
<layer- label="Toporama" checked>
  <map-meta name="zoom" content="min=4,max=5"></map-meta>
  <map-extent units="CBMTILE" checked hidden>
    <map-input name="z" type="zoom" value="19" min="4" max="4"></map-input>
    <map-input name="w" type="width"></map-input>
    <map-input name="h" type="height"></map-input>
    <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743" max="3952277"></map-input>
    <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085" max="3952277"></map-input>
    <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743" max="3952277"></map-input>
    <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085" max="3952277"></map-input>
    <map-link rel="image" tref="http://my-wms.ca?FORMAT=image/jpeg&amp;WIDTH={w}&amp;HEIGHT={h}&amp;BBOX={xmin},{ymin},{xmax},{ymax}"></map-link>
  </map-extent>
</layer->
```

## Associated Elements

### `<map-extent>`

- `units`
  - This allows you to define what the [projection](http://example.org/) of the templated tiles are.

---

### `<map-input>`

- `axis`
  - This attribute is only useful on inputs of type <strong>location</strong>, it sets the axis the following input defines. This value also defines what the <strong>min</strong> and <strong>max</strong> value's units.
  - Options are, row | column | easting | northing | latitude | longitude

- `name`
  - This allows you to name the input, this name is then used in the url template used in the `<map-link>` href attribute.

- `type`
  - Sets the <strong>type</strong> of the input.
  - Options are, zoom | location | width | height

- `max`
  - Sets the maximum of the bounds of the layer on the given <strong>axis</strong>.

- `min`
  - Sets the minimum of the bounds of the layer on the given <strong>axis</strong>.

- `position`
  - Sets the position of the input, this can either be top-left or bottom-right.

- `value`
  - Sets the zoom level the inputs of type <strong>location</strong>'s <strong>min</strong> and <strong>max</strong> are defined at.

---

### `<map-link>`

- `rel`
  - Set this to image in the case of a templated image layer.

- `title`
  - Sets the title of the layer, this is the title shown in the layer controls.

- `type`
  - Sets the type of the returned data.

- `tref`
  - Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile.

---

## Additional Context

You can also provide a set of elements to further define the templated tile layer. This is the list of available additions with examples.

### `<map-meta name="zoom">`
Sets the zoom range of the layer, in the following example the user can zoom from zoom level 1 to 5. 

```html
<map-meta name="zoom" content="min=1,max=5"></map-meta>
```

---

## Full Examples

```html
<mapml-viewer projection="CBMTILE" zoom="4" lat="53.331" lon="-91.667" controls>
  <layer- label="Toporama" checked>
    <map-meta name="zoom" content="min=4,max=5"></map-meta>
    <map-extent units="CBMTILE" checked hidden>
      <map-input name="z" type="zoom" value="19" min="4" max="4"></map-input>
      <map-input name="w" type="width"></map-input>
      <map-input name="h" type="height"></map-input>
      <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743.103886206" max="3952277.216154434"></map-input>
      <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434"></map-input>
      <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743.103886206" max="3952277.216154434"></map-input>
      <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434"></map-input>
      <map-link rel="image" tref="http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3978&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

[ADD MAP HERE]