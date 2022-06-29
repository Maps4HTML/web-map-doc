---
id: layer
title: "<layer->: The Layer element"
slug: /layers/layer/
---

Maps have one or more layers. Map layers are implemented by the `<layer->` custom element.  
All `<mapml-viewer>` content is contained by one or more `<layer->` elements, either inline or by remote fetch representing the layer's content.

```html
<layer- label="My Layer" checked>
  ...layer content goes here...
</layer->
```

`<layer->` is not a 'void' element - it must be closed with a `</layer->` tag.

Map content can either be inline, as shown above - between the beginning `<layer->` and ending `</layer->` tags -
or fetched, from the `<layer- src="..."></layer->` source attribute URL:

```html
<layer- label="My Layer" src="https://example.org/mapml/mylayer" checked></layer->
```

<iframe src="../../../demo/layer-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

This documentation uses the convention of inline content mostly.  Fetched map content
follows similar semantics, except it is parsed with the browser's XML parser and
so must follow both MapML document conventions as well as
[XML syntax rules](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction).

## Attributes

### `src`

Contains the path to a MapML document.

### `checked`

The `<layer- checked>` attribute and property is boolean. When present,
the checked property value is taken to be 'true'; when not present, the property
value is 'false'.  Beware that it is the _presence_ of the attribute that makes it
true, not the value of the attribute. For example, the attribute `checked="false"`
actually turns out to be checked,
[as described by MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes).

### `hidden`

The `<layer- hidden>` attribute and property is boolean. When present,
the layer is hidden in the layer control.

### `label`

The `label` attribute is used by inline content as the displayed text label of the
layer in the layer control.  In fetched content, the `label` attribute is ignored,
and the fetched `<map-title>` element is used.

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML layer element](https://maps4html.org/MapML/spec/#the-layer-element-0) |

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
| <div class="enhancement">Display an image file as a map layer (5.1.3)</div> | [full](https://maps4html.org/MapML/spec/#the-image-element-0) | [limited](http://maps4html.org/experiments/painting/) |  |
| [**User navigation (pan and zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
| <div class="discussion">Maintain reasonable scale of labels and lines when zooming (5.4.5)</div> | limited | full |  |
| <div class="discussion">Hide or show (and maybe dynamically load) vector features and labels on zoom (5.4.7)</div> | limited | full |  |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/layer.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)