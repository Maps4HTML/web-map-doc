---
id: span
title: "<map-span>"
slug: /elements/span/
---

L’élément `<map-span>` est utile lorsqu’il est utilisé avec des attributs HTML généraux comme [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class). Cet élément permet d’encapsuler les paires de coordonnées dans un élément `<map-coordinates>`, ce qui permet aux coordonnées encapsulées d’être ciblées par les sélecteurs des feuilles de style en cascade (CSS) et donc d’être stylisées de manière indépendante.

<iframe src="../../../demo/map-span-demo/" title="Démo en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

---

## Exemples

### Styliser les trous dans un polygone

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <map-layer label="OpenStreetMap" src="../data/osm.mapml" checked></map-layer>
  <map-layer label="Polygone" checked>
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
  </map-layer>
</mapml-viewer>
```

---

## Spécifications 

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément HTML « span »](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element) |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/span.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
