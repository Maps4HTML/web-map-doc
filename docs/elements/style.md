---
id: style
title: "<map-style>"
slug: /elements/style/
---

The `<map-style>` element allows map authors to embed CSS into map layers. The CSS can be used to style the geometry of the layer using [`<map-span>`](../../other-elements/span/), and by setting the class attribute to the [child elements](../geometry/#child-elements) of the geometry.

:::note

All the Demo's on the documentation pages contain a "CSS" tab which adds the CSS using the `<map-style>` element dynamically.

:::

<iframe src="../../../demo/map-style-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

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
| [MapML style element](https://maps4html.org/MapML/spec/#styling) |
| [HTML style element](https://html.spec.whatwg.org/#the-style-element) |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/style.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)