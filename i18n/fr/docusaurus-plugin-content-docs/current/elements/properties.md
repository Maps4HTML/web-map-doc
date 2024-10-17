---
id: properties
title: "<map-properties>"
slug: /elements/properties/
---
L’élément `<map-properties>` est l’enfant de l’élément `<map-feature>`. Il sert à définir le contenu de la fenêtre contextuelle associée à une entité donnée.

Un élément `<map-properties>` peut contenir un élément HTML pour décrire le contenu de l’entité.

<iframe src="../../../demo/map-properties-demo/" title="Démo en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

---

## Exemples 

### Tableau des propriétés 

Dans l’exemple suivant, la fenêtre contextuelle s’affiche sous forme de [tableau HTML](https://html.spec.whatwg.org/multipage/tables.html#the-table-element).

```html
<mapml-viewer projection="OSMTILE" zoom="12" lat="45.42" lon="-75.70">
  <map-layer label="OpenStreetMap" src="../data/osm.mapml" checked></map-layer>
  <map-layer label="Ottawa" checked>
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
              <td itemprop="name">Ville</td>
            </tr>
            <tr>
              <th scope="row">Site Web</th>
              <td itemprop="website"><a href="https://ottawa.ca/" target="_blank">Ottawa</a></td>
            </tr>
          </tbody>
        </table>
      </map-properties>
    </map-feature>
  </map-layer>
</mapml-viewer>
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « properties » ](https://maps4html.org/MapML-Specification/spec/#the-properties-element-0) |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/properties.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
