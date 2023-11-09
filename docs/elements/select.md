---
id: select
title: "<map-select>"
slug: /elements/select/
---

The `<map-select>` element is an extension of HTML `<select>` and is used as a child of the `<map-extent>` element. The `<map-select>` element declares a variable with predefined `<map-option>'s` which are selected through the layer control and used by the polyfill.

The `<map-select>` element contains one or more `<map-option>` elements.

<iframe src="../../../demo/map-select-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

:::tip

Change the `<map-select>` option through the layer control (top-right of the map) to view data for different timestamps.

:::

## Attributes

### `name`
Sets the name of the variable created by the input. The variable can then be 
referenced by the URL template `<map-link>` [tref attribute](../link#tref), 
using the `{name}` variable reference notation.

---

### `id`
Sets the id of the `<map-select>` element, identifies the select within the current document.

---

## Child Elements

### `<map-option>`

This element contains the options for the `<map-select>` element. A `<map-select>` element can contain one or more `<map-option>` elements.

---

## Examples

### Change map source
```html
<mapml-viewer projection="OSMTILE" zoom="2" lat="65" lon="-90" controls="">
  <layer- label="Basemap" checked="">
    <map-extent units="OSMTILE" >
      <map-input name="z" type="zoom"  value="18" min="0" max="18"></map-input>
      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>
      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>
      <map-link rel="license" href="https://www.openstreetmap.org/copyright" title="OpenStreetMap"/>
      <map-link rel="license" href="https://www.openstreetmap.bzh/" title="Breton OpenStreetMap Team"/>
      
      <map-select id="urlOptions" name="source">
        <map-option value="tile.openstreetmap.bzh/br">OpenStreetMap_BZH</map-option>
        <map-option value="tile.openstreetmap.org">OpenStreetMap_Mapnik</map-option>    
      </map-select>
      
      <map-link rel="tile" tref="https://{source}/{z}/{x}/{y}.png" />
    </map-extent>
  </layer->
</mapml-viewer>
```

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML style element](https://maps4html.org/MapML/spec/#the-select-element-0) |
| [HTML style element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) |

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
| [**Content author use cases (3.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#content-author-use-cases) |  |  |  |
|                 <div class="undecided"> Provide alternative map layers which the user can select (3.1.9)</div>             | full | full |  |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/select.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)