---
id: templated-features
title: Templated Features Layer
slug: /layers/templated-features
---

In this section, we will learn how to create a templated feature layer. A templated feature layer is a layer that fetches a single .mapml file on pans and zooms.

## Adding a templated feature layer

```html
<layer- label="Alabama" checked>
  <meta name="zoom" content="min=2,max=5" />
  <extent units="CBMTILE">
    <input name="z" type="zoom" min="2" max="18" value="0" />
    <input name="xmin" type="location" units="gcrs" axis="longitude" position="top-left" min="-76" max="-74" />
    <input name="ymin" type="location" units="gcrs" axis="latitude" position="bottom-right" min="45" max="46" />
    <input name="xmax" type="location" units="gcrs" axis="longitude" position="bottom-right" min="-76" max="-74" />
    <input name="ymax" type="location" units="gcrs" axis="latitude" position="top-left" min="45" max="46" />
    <link rel="features" tref="data/alabama_feature.mapml?{xmin}{ymin}{xmax}{ymax}{z}" />
  </extent>
</layer->
```

## Associated Elements

### `<extent>`

- `units`
  - This allows you to define what the [projection](http://example.org) of the templated features.
    
---

### `<input>`

- `axis`
    - This attribute is only useful on inputs of type <strong>location</strong>, it sets the axis the following input defines. This value also defines what the <strong>min</strong> and <strong>max</strong> value's units.
    - Options are, row | column | easting | northing | latitude | longitude

- `name`
    - This allows you to name the input, this name is then used in the url template used in the `<link>` href attribute.

- `type`
    - Sets the <strong>type</strong> of the input.
    - Options are, zoom | location

- `max`
    - Sets the maximum of the bounds of the layer on the given <strong>axis</strong>.

- `min`
    - Sets the minimum of the bounds of the layer on the given <strong>axis</strong>.

- `position`
    - Sets the position of the input, this can either be top-left or bottom-right.

- `value`
    - Sets the zoom level the inputs of type <strong>location</strong>'s <strong>min</strong> and <strong>max</strong> are defined at.

---

### `<link>`

- `rel`
    - Set this to features in the case of a templated features layer.

- `title`
    - Sets the title of the layer, this is the title shown in the layer controls.

- `type`
    - Sets the type of the returned data.

- `tref`
    - Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile.

---

## Additional Context

You can also provide a set of elements to further define the templated feature layer. This is the list of available additions with examples.

### `<meta name="zoom">`
Sets the zoom range of the layer. The layer will make requests from zoom levels 1 to 5 in the example below.

```html
<meta name="zoom" content="min=1,max=5" />
```

---

## Full Examples

```html
<mapml-viewer projection="CBMTILE" zoom="3" lat="45.5052040" lon="-75.2202344" controls>
  <layer- label="Alabama" checked>
    <meta name="zoom" content="min=2,max=5" />
    <extent units="CBMTILE">
      <input name="z" type="zoom" min="2" max="18" value="0" />
      <input name="xmin" type="location" units="gcrs" axis="longitude" position="top-left" min="-76" max="-74" />
      <input name="ymin" type="location" units="gcrs" axis="latitude" position="bottom-right" min="45" max="46" />
      <input name="xmax" type="location" units="gcrs" axis="longitude" position="bottom-right" min="-76" max="-74" />
      <input name="ymax" type="location" units="gcrs" axis="latitude" position="top-left" min="45" max="46" />
      <link rel="features" tref="data/alabama_feature.mapml?{xmin}{ymin}{xmax}{ymax}{z}" />
    </extent>
  </layer->
</mapml-viewer>
```

[ADD MAP HERE]