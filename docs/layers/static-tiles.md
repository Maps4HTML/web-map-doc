---
id: static-tiles
title: Static Tiles Layer
slug: /layers/static-tiles
---

In this section, we will learn about creating a static tile layer. A static tile is a single image that occupies an entry on the map grid. You can specify the column, row and zoom
to present an image at that location on the map.

## Adding a single tile

Add an image file to your project directory. Now you can access this image in MapML.

```html
<map-layer label="My Static Tile Layer" checked>
  <map-tile zoom="0" row="1" col="1" src="my-tile.png"></map-tile>
</map-layer>

```

## Associated Elements

### `<map-tile>`

#### Attributes

- `col`
  - The col attribute allows you to set the column value of the static tile.
- `row`
  - The row attribute allows you to set the row value of the static tile.
- `src`
  - The src attribute lets you set the path to the image source of the static tile.
- `zoom`
  - This allows you to set the zoom level the tile is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of a [projection](http://example.org/).

---

## Additional Context

You can also provide a set of elements to further define the static tile layer. This is the list of available additions with examples.

### `<map-link rel="license">` 

Sets the attribution link of the layer. Example:

```html
<map-link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map © Natural Resources Canada"></map-link>
```

---

### `<map-meta name="zoom">` 

Sets the native minimum and maximum [native zoom](http://example.org/).

```html
<map-meta name="zoom" content="min=1,max=4"></map-meta>
```

---

### `<map-meta name="projection">` 

Sets the [projection](http://example.org/) of the layer. 

```html
<map-meta name="projection" content="CBMTILE"></map-meta>
```

---

## Full Examples

```html
<mapml-viewer projection="CBMTILE" zoom="2" lat="59" lon="-53" width="900" height="400" controls>
  <map-layer label="Static MapML with tiles" checked>
    <map-meta name="zoom" content="min=1,max=4"></map-meta>
    <map-meta name="projection" content="CBMTILE"></map-meta>
    <map-link rel="license"
      href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285"
              title="Canada Base Map © Natural Resources Canada"></map-link>
    <map-tile zoom="3" row="18" col="17" src="data/cbmt/3/c17_r18.png"></map-tile>
    <map-tile zoom="2" row="10" col="11" src="data/cbmt/2/c11_r10.png"></map-tile>
    <map-tile zoom="2" row="10" col="9" src="data/cbmt/2/c9_r10.png"></map-tile>
    <map-tile zoom="2" row="11" col="9" src="data/cbmt/2/c9_r11.png"></map-tile>
  </map-layer>
</mapml-viewer>
```
[ADD MAP HERE]