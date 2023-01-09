---
id: mapml
title: "<mapml->"
slug: /elements/mapml/
---

The `<mapml->` element is the root of a MapML document (with a .mapml file extension) representing a layer. A MapML document allows itself to be fetched as a remote resource from the `<layer- src="..."></layer->` source attribute URL:

```html
<layer- label="My Layer" src="https://example.org/mapml/mylayer" checked></layer->
```

A `<mapml->` element declare the document to be in the xhtml namespace, and 
must contain one `<map-head>` element, followed by one `<map-body>` element.

<iframe src="../../../demo/mapml-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

<details>
<summary>Click to view the contents of "../data/osm.mapml" from the demo above</summary>

``` html
<mapml- xmlns="https://www.w3.org/1999/xhtml">
  <map-head>
    <map-title>OpenStreetMap</map-title>
    <meta http-equiv="Content-Type" content="text/mapml;projection=OSMTILE"/>
    <meta charset="utf-8"/>
    <map-link rel="license" href="https://www.openstreetmap.org/copyright" title="© OpenStreetMap contributors CC BY-SA"/>
  </map-head>
  <map-body>
    <map-extent units="OSMTILE" >
      <map-input name="z" type="zoom"  value="18" min="0" max="18"></map-input>
      <map-input name="s" type="hidden" shard="true" list="servers"></map-input>
      <map-datalist id="servers">
        <map-option value="a"></map-option>
        <map-option value="b"></map-option>
        <map-option value="c"></map-option>
      </map-datalist>
      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>
      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>
      <map-link rel="tile" tref="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </map-extent>
  </map-body>
</mapml->
```

</details> 


## Attributes

### `lang`

The `lang` attribute defines the primary language of the MapML document. as defined by HTML [here](https://html.spec.whatwg.org/multipage/dom.html#attr-lang).

### `xmlns`

The `xmlns` attribute is **required**, and must have the value `"https://www.w3.org/1999/xhtml"`.

---

## Child Elements

### `<map-head>`

The `<map-head>` element is the first child of the `<mapml->` element. It contains metadata for the MapML document. 

#### Child Elements
  - `<map-title>`
    - The title element should exist as the one and only title element in the head element. Its content should be a text string describing the document. It is conceivably used as a bookmark title.
  - `<map-base>`
    - The base element is used to identify a URL to be used to act as a base URL in order to resolve relative URLs later in the document.
    - There must be only one `<map-base>` element in a MapML document, and it must be in the content of the `<map-head>` element, before any MapML elements which potentially carry a URL for resolution, notably the `<map-link>` element.
  - `<map-meta>`
    - The meta element describes the metadata in a MapML document. Details on the meta element and it's syntax can be found [here](../meta/).
  - `<map-link>`
    - The link element describes the metadata links in a MapML document. Details on the link element and it's syntax can be found [here](../link/).

---

### `<map-body>`

The `<map-body>` element is the second child of the `<mapml->` element. It represents the content of the MapML document. This element contains the [features](../feature/) and metadata of the MapML document.

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML mapml element](https://maps4html.org/MapML/spec/#the-mapml-element-0) |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/mapml.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)