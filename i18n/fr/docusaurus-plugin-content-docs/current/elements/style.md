---
id: style
title: "<map-style>"
slug: /elements/style/
---

L’élément `<map-style>` permet aux auteurs de cartes d’intégrer une feuille de style en cascade (CSS) dans les couches de carte. La CSS peut être utilisée pour styliser la géométrie de la couche à l’aide de [`<map-span>`](../../other-elements/span/), ainsi qu’en réglant l’attribut « class » d’après les [éléments enfants](../geometry/#child-elements) de la géométrie.

:::note

Toutes les démonstrations comprises dans les pages de documentation contiennent un onglet « CSS », qui permet d’ajouter une CSS en utilisant l’élément `<map-style>` de manière dynamique.

:::

<iframe src="../../../demo/map-style-demo/" title="Démo en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

---

## Exemples

### Styliser à l’aide de l’élément `<map-span>`

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Polygone" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>Polygone</map-featurecaption>
      <!-- Régler les coordonnées de géométrie à gcrs, puisque la valeur par défaut correspond à pcrs -->
      <map-geometry cs="gcrs">
        <map-polygon>
          <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>
          <map-coordinates><map-span class="hole">-75.6467062 45.4215881 -75.6889363 45.4049585 -75.6693647 45.3767494 -75.6270640 45.3924229 -75.6467062 45.4215881</map-span></map-coordinates>
        </map-polygon>
      </map-geometry>
      <map-properties><h2>Il s’agit d’un polygone</h2></map-properties>
    </map-feature>
    <map-style>.hole {stroke: #73A9AD;stroke-width: 4px;fill: none;fill-opacity: 1;}</map-style>
  </layer->
</mapml-viewer>
```

---

## Spécifications 

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « style »](https://maps4html.org/MapML/spec/#styling) |
| [Élément HTML « style »](https://html.spec.whatwg.org/#the-style-element) |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/style.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
