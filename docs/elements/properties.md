---
id: properties
title: "<map-properties>"
slug: /elements/properties/
---
A `<map-properties>` element is a child of `<map-feature>` and is used to define the content of the popup associated to a given feature.

A `<map-properties>` element can contain any HTML Element to describe the feature's content. 

<iframe src="../../../demo/map-properties-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

---

## Examples

### Properties Table

The following example displays the popup as an HTML [table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element).

```html
<mapml-viewer projection="OSMTILE" zoom="12" lat="45.42" lon="-75.70">
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Ottawa" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-meta name="cs" content="gcrs"></map-meta>
    <map-feature>
      <map-featurecaption>Ottawa</map-featurecaption>
      <map-geometry>
        <map-point class="ottawa">
          <map-coordinates>-75.697193 45.421530</map-coordinates>
        </map-point>
      </map-geometry>
      <map-properties>
        <table>
          <thead>
            <tr>
              <th role="columnheader" scope="col">Property name</th>
              <th role="columnheader" scope="col">Property value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td itemprop="amenity">Ottawa</td>
            </tr>
            <tr>
              <th scope="row">Type</th>
              <td itemprop="name">City</td>
            </tr>
            <tr>
              <th scope="row">Website</th>
              <td itemprop="website"><a href="https://ottawa.ca/" target="_blank">Ottawa</a></td>
            </tr>
          </tbody>
        </table>
      </map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML properties element](https://maps4html.org/MapML/spec/#the-properties-element-0) |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/properties.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)