---
id: map-link-api
title: HTMLLinkElement
slug: /api/map-link-api
---

# HTMLLinkElement

The `<map-link>` element is intended to implement an extension of the HTML `<link>` 
element and `HTMLLinkElement` API. This document reflects proposed changes to that
API and is a work in progress.


## Properties

### media

Reflects the [media](../elements/link#media) attribute of the `<map-link>` element.

---

This document is copied from the old "Custom Rendering API" page, and is under
construction.  It will eventually describe the API of the map-link custom element;
the "Custom Rendering API" is currently sourced from the map-link custom element,
which may change in the future.

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
  <map-layer label="Custom Tiles" checked>
    <map-meta name="zoom" content="min=0,max=23" ></map-meta>
    <map-extent units="OSMTILE" checked hidden>
      <map-input name="zoomLevel" type="zoom" min="0" max="23" value="1" ></map-input>
      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" ></map-input>
      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" ></map-input>
      <!-- listen for the tileloadstart event on this element -->
      <map-link rel="tile" title="" tref="" ></map-link>
    </map-extent>
  </map-layer>
</mapml-viewer>
```


The JavaScript for creating custom tiles:
```js
let layer = document.querySelector("body > mapml-viewer > map-layer > map-extent > map-link");
    layer.addEventListener("tileloadstart", (e) => {
      let customTile = document.createElement("p");
      customTile.innerHTML = `x: ${e.detail.x} y: ${e.detail.y} zoom: ${e.detail.zoom}`;
      e.detail.appendTile(customTile);
    });
```

In this example the `customTile` is an HTML `<p>`, but you can use any HTML Element. Simply append the 
created element using the `(tileloadstart event).detail.appendTile()` function, passing the custom tile as an argument of the function.


## Custom Image

:::important
Needs to be implemented.
:::

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [HTMLLinkElement - not (fully) specified yet](https://maps4html.org/MapML-Specification/spec/#the-link-element) |

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
| [**Properties**](#properties) | n/a | n/a | n/a |
| [**Methods**](#methods) | n/a | n/a | n/a |
| [**Events**](#events) | none | n/a | partial * |

<details>
<summary>Exceptions *</summary>
<ol>
<li>The &lt;map-link&gt; element will emit the tileloadstart event, but it's behaviour is experimental and requires markup to conform to the example given above</li>
</ol>

</details>

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/api/map-link-api.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)
