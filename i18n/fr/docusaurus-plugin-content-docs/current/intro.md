---
id: intro
title: Introduction
slug: /
---

La suite d'éléments personnalisés de carte Web fournit un visualiseur de carte Web qui est conçu d'après la balise `<video>` en HTML5. C'est un moyen simple de commencer à publier des cartes Web.

Par exemple, un balisage comme celui-ci :

```html
<mapml-viewer projection="CBMTILE" zoom="3" lat="62.7" lon="-90.3" controls>
  <map-layer label="CBMT" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></map-layer>
  <map-layer label="Restaurants" src="demo/restaurants.mapml" checked></map-layer>
  <map-layer label="Provinces et territoires du Canada" src="demo/canada.mapml" checked></map-layer>
</mapml-viewer>
```

peut être utilisé pour créer une carte comme celle-ci :

![La carte Web en action](assets/img/mapml-viewer.png)
