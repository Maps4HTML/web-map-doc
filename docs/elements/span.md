---
id: span
title: "<map-span>: The Span element"
slug: /other-elements/span/
---

The `<map-span>` element is useful when used together with html global attributes such as [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class). This element allows you to wrap the coordinate pairs in a `<map-coordinates>` element, allowing the wrapped coordinates to be targeted by CSS selectors, and thus independently styled.

<iframe src="../../../demo/map-span-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

---

## Examples

### Styling Polygon Holes

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Polygon" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>Polygon</map-featurecaption>
      <!-- Setting the geometry coordinates to gcrs, as the default is pcrs -->
      <map-geometry cs="gcrs">
        <map-polygon>
          <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>
          <map-coordinates><map-span class="hole">-75.6467062 45.4215881 -75.6889363 45.4049585 -75.6693647 45.3767494 -75.6270640 45.3924229 -75.6467062 45.4215881</map-span></map-coordinates>
        </map-polygon>
      </map-geometry>
      <map-properties><h2>This is a Polygon</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [HTML span element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element) |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/span.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)