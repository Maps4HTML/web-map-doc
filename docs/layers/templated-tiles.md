---
id: templated-tiles
title: Templated Tiles Layer
slug: /layers/templated-tiles
---

In this section, we will learn how to create a templated tile layer. A templated layer is a layer that makes HTTP requests for it's data. In this case requests are made to fill in the grid of tiles available on the map's viewport.

## Adding a templated layer

```html
<map-layer label="Templated Tile Layer" checked>
  <map-extent units="my-projection" checked>
    <map-input name="zoomLevel" type="zoom" min="1" max="1" value="0"></map-input>
    <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2"></map-input>
    <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2"></map-input>
    <map-link rel="tile" type="text/mapml" title="Templated Tiles" tref="tiles/{zoomLevel}/r{row}_c{col}.mapml"></map-link>
  </map-extent>
</map-layer>
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
  - Options are, zoom | location

- `max`
  - Sets the maximum of the bounds of the layer on the given <strong>axis</strong>.

- `min`
  - Sets the minimum of the bounds of the layer on the given <strong>axis</strong>.

- `value`
  - Sets the zoom level the inputs of type <strong>location</strong>'s <strong>min</strong> and <strong>max</strong> are defined at.

---

### `<map-link>`

- `rel`
  - Set this to tile in the case of a templated tile layer.

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
Sets the native minimum and maximum [native zoom](http://example.org/). It also allows you to set a value, this is the default zoom of all features in the case the `<map-feature>` is missing a zoom attribute.

```html
<map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>
```

---

## Full Examples

```html
<mapml-viewer projection="WGS84" zoom="1" lat="59.87304909" lon="-53.22587225" width="900" height="400" controls>
  <map-layer label="Inline Templated Tile" checked>
    <map-meta name="zoom" content="min=1,max=2"></map-meta>
    <map-extent units="WGS84" checked hidden>
      <map-input name="zoomLevel" type="zoom" min="1" max="1" value="0"></map-input>
      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2"></map-input>
      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2"></map-input>
      <map-link rel="tile" type="text/mapml" title="Templated Tile Layer" tref="data/wgs84/{zoomLevel}/r{row}_c{col}.mapml"></map-link>
    </map-extent>
  </map-layer>
</mapml-viewer>
```

[ADD MAP HERE]