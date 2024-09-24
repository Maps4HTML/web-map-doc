---
id: layer
title: "<map-layer>"
slug: /elements/layer/
---

Maps have one or more layers. Map layers are implemented by the `<map-layer>` custom element.  
All `<mapml-viewer>` content is contained by one or more `<map-layer>` elements, either inline or by remote fetch representing the layer's content.

```html
<map-layer label="My Layer" checked>
  ...layer content goes here...
</map-layer>
```

`<map-layer>` is not a 'void' element - it must be closed with a `</map-layer>` tag.

Map content can either be inline, as shown above - between the beginning `<map-layer>` and ending `</map-layer>` tags -
or fetched, from the `<map-layer src="..."></map-layer>` source attribute URL:

```html
<map-layer label="My Layer" src="https://example.org/mapml/mylayer" checked></map-layer>
```

<iframe src="../../../demo/layer-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

This documentation uses the convention of inline content mostly.  Fetched map content
follows similar semantics, except it is parsed with the browser's XML parser and
so must follow both MapML document conventions as well as
[XML syntax rules](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction).

## Attributes

### `src`

Contains the path to a MapML document.

---

### `checked`

The `<map-layer checked>` attribute and property is boolean. When present,
the checked property value is taken to be 'true'; when not present, the property
value is 'false'.  Beware that it is the _presence_ of the attribute that makes it
true, not the value of the attribute. For example, the attribute `checked="false"`
actually turns out to be checked,
[as described by MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes).

---

### `hidden`

The `<map-layer hidden>` attribute and property is boolean. When present,
the layer is hidden in the layer control.

---

### `label`

The `label` attribute is used by inline content as the displayed text label of the
layer in the layer control.  In fetched content, the `label` attribute is ignored,
and the fetched `<map-title>` element is used.

---

### `media`

The `media` attribute is used to express map media conditions under which the layer 
content should be used (if inline content is present), or loaded from the `src` URL, 
if that attribute is present.  Map media conditions evaluate to `true` or `false`. 
A layer for which the map media condition evaluates to `false` is by default hidden. 
A layer for which the map media condition evaluates to `true` is added to the map 
according to its `checked` attribute, and is added to the layer control according
to its `hidden` attribute.

Map media queries can include map properties as documented in the [matchMedia](../../api/mapml-viewer-api#matchmedia) API.

---

### `opacity`

The `opacity` attribute is used to set the initial opacity of the `<map-layer>` element.
Valid `opacity` values range from from "0.0" to "1.0" and are reflected in the layer control
opacity input slider control. When the `opacity` attribute is not present, the opacity is set to "1.0" by default.

---

## Examples

### Layer Opacity

The following example sets the initial `opacity` for a `<map-layer>`. 

```html
<mapml-viewer projection="CBMTILE" zoom="2" lat="45" lon="-90" controls>
      <map-layer opacity = "0.5" label="CBMT" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></map-layer>
</mapml-viewer>
```

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML layer element](https://maps4html.org/MapML-Specification/spec/#the-layer-element-0) |

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
| <div class="enhancement">Display an image file as a map layer (5.1.3)</div> | [under review](https://github.com/Maps4HTML/MapML-Specification/issues/216) | [limited](https://maps4html.org/experiments/painting/) |  |
| [**User navigation (pan and zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
| <div class="discussion">Maintain reasonable scale of labels and lines when zooming (5.4.5)</div> | limited | full |  |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/layer.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)
