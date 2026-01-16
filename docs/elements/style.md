---
id: style
title: "<map-style>"
slug: /elements/style/
---

The `<map-style>` element allows map authors to embed CSS into map layers. The CSS can be used to style the geometry of the layer using [`<map-span>`](../../elements/span/), and by setting the class attribute to the [child elements](../geometry/#child-elements) of the geometry.

## Attributes

### `media`

The `media` attribute is used to express media conditions under which the contained 
styles should be applied.  Media conditions evaluate to `true` or `false`. A map-style 
for which the media condition evaluates to `false` is not loaded / is removed. Styles 
contained in a `<map-style>` for which the media condition evaluates to `true` 
are applied; when the condition subsequently evaluates to `false`, the styles are removed.
An invalid media condition evaluates to `false`.

Map media queries can include map properties including: [projection](../../api/mapml-viewer-api#projection), [zoom](../../api/mapml-viewer-api#zoom), 
and [extent](../../api/mapml-viewer-api#extent).

---

:::note

All the demo's on the documentation pages contain a "CSS" tab which adds the CSS using the `<map-style>` element dynamically.

:::

<iframe src="../../../demo/map-style-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

---

## Examples

### Styling using `<map-span>`

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <map-layer label="OpenStreetMap" src="../data/osm.mapml" checked></map-layer>
  <map-layer label="Polygon" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>Polygon</map-featurecaption>
      <map-geometry cs="gcrs">
        <map-polygon>
          <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>
          <map-coordinates><map-span class="hole">-75.6467062 45.4215881 -75.6889363 45.4049585 -75.6693647 45.3767494 -75.6270640 45.3924229 -75.6467062 45.4215881</map-span></map-coordinates>
        </map-polygon>
      </map-geometry>
      <map-properties><h2>This is a Polygon</h2></map-properties>
    </map-feature>
    <map-style>.hole {stroke: #73A9AD;stroke-width: 4px;fill: none;fill-opacity: 1;}</map-style>
  </map-layer>
</mapml-viewer>
```

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML style element](https://maps4html.org/MapML-Specification/spec/#styling) |
| [HTML style element](https://html.spec.whatwg.org/#the-style-element) |

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
| [**Vector features and overlays (5.2)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-vectors) |  |  |  |
| <div class="undecided">Draw polygons or polylines as stylable, interactive vector graphics (separate from the image tiles) (5.2.2)</div> | full | full |  |
| [**Custom styling (5.5)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-custom-styling) |  |  |  |
| <div class="undecided">Apply custom styling to map markers and vector features (5.5.1)</div> | full | full |  |
| [**Creating maps and map components (6.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis-creation) |  |  |  |
|            <div class="undecided"> Specify the style of a map (6.1.9)</div>        | full | full |  |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/style.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)