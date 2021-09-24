---
id: custom-rendering
title: Custom Rendering API
slug: /api/custom-rendering
---

The Custom Rendering API allows developers to circumvent MapML's rendering and draw anything within
HTML's domain onto the map.

## Custom Tiles

To render custom tiles using JavaScript, listen for the `tileloadstart` event on a templated layer's `<map-link rel="tile">` element.

### `tileloadstart` Event

This event is fired when a tile is first being created, the event contains the following structure in its detail property:
```js
{
  x: 1,    // tilematrix x value of the tile loaded
  y: 2,    // tilematrix y value of the tile loaded
  zoom: 3, // zoom level of the tile loaded
  appendTile: function appendTile ( customTile ) {...} // pass custom tile as an argument to function
}
```


### Example

The map:
```html
<mapml-viewer projection="OSMTILE" zoom="0" lat="45" lon="-75" controls>
  <layer- label="Custom Tiles" checked>
    <map-meta name="zoom" content="min=0,max=23" ></map-meta>
    <map-extent units="OSMTILE">
      <map-input name="zoomLevel" type="zoom" min="0" max="23" value="1" ></map-input>
      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" ><map-input>
      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" ><map-input>
      <!-- listen for the tileloadstart event on this element -->
      <map-link rel="tile" title="" tref="" ></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```


The JavaScript for creating custom tiles:
```js
let layer = document.querySelector("body > mapml-viewer > layer- > map-extent > map-link");
    layer.addEventListener("tileloadstart", (e) => {
      let customTile = document.createElement("p");
      customTile.innerHTML = `x: {e.detail.x} y: {e.detail.y} zoom: {e.detail.zoom}`;
      e.detail.appendTile(customTile);
    });
```

In this example the `customTile` is an HTML `<p>`, but you can use any HTML Element. Simply append the 
created element using the `(tileloadstart event).detail.appendTile()` function, passing the custom tile as an argument of the function.


## Custom Image

:::important
Needs to be implemented.
:::
