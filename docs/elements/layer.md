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

## Requirements

|[**Vector features and overlays (5.2)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-vectors)| MapML spec | MapML-Viewer | MapML API |
|:----------------------------------------------------------------------------------------------------------|:---: |:---: |:---: |
|                         Show pinpoint locations or custom markers on the map (5.2.1)                        | full | full |	|
| Draw polygons or polylines as stylable, interactive vector graphics (separate from the image tiles) (5.2.2) | full | full | |
|                            Support hyperlinks from markers or vector features (5.2.3)                       | full | full | |
|                                  Display map data attribution and links (5.2.4)                             | full | full | |