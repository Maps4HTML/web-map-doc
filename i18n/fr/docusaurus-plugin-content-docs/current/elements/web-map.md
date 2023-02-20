---
id: web-map
title: <map is="web-map">
slug: /elements/web-map
---

L’élément HTML `<map>` a été déployé dans le milieu des années 1990 et est utilisé dans les navigateurs depuis. Il sert à créer des pages d’accueil à la fois attrayantes sur le plan visuel et accessibles, et il permet aux développeurs Web de concevoir des liens sous forme de polygones invisibles, mais interactifs superposés à une ou à plusieurs images. Cette fonction, appelée « image cliquable côté client », a souvent été utilisée pour fournir des liens de navigation sur le site.

Au cours des dernières années, les images cliquables côté client ont perdu de leur popularité en raison des améliorations apportées aux autres volets de la plateforme Web. Cependant, certains sites utilisent toujours les images cliquables pour fournir une expérience utilisateur à la fois simple, accessible et visuelle.

Les éléments personnalisés de cartes Web fournissent un ensemble d’éléments de validation de principe « [personnalisés et intégrés](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) » fondés sur les éléments `<map>`, `<area>` et `<img>` qui seront « ramenés » à une une image cliquable côté client dans les anciens navigateurs ou en l’absence de JavaScript (script désactivé).

:::avertissement

Il est à noter qu’étant donné que [tous les navigateurs Web récents ne prennent pas en charge les éléments intégrés personnalisés en HTML](https://caniuse.com/mdn-api_customelementregistry_builtin), il n’est pas recommandé d’utiliser cette validation de principe sur un site Web public puisque cela pourrait entraîner de la confusion chez les utilisateurs.

:::

:::avertissement

Dans certains navigateurs, l’élément intégré personnalisé `<map>` n’est pas accessible aux utilisateurs de lecteur d’écran en raison d’un [bogue de Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1208405).

:::

Le balisage suivant pourrait fonctionner dans Chrome et Firefox, mais il pourrait nécessiter quelques mises au point :

```html
<img usemap="#mymap" src="../map1.png" width="700" height="400" alt="Map area">
<map name="mymap" is="web-map" zoom="17" lat="45.398043" lon="-75.70683" controls>
  <layer- id="osm" src="https://geogratis.gc.ca/mapml/osmtile/osm/" label="Open Street Map" checked></layer->
  <layer- id="marker" label="Marker layer" src="../marker.mapml"></layer->
  <area is="map-area" href="http://example.com/marker/" alt="rectangle" coords="255,145,275,190" shape="rect">
  <area is="map-area" id="donut" alt="Circle" href='http://example.com/circle/' coords="250,250,25" shape="circle">
  <area is="map-area" id="hole" coords="250,250,7" shape="circle">
  <area is="map-area" id="rect" href="http://example.com/rectangle/" alt="Rectangle" coords="345,290,415,320" shape="rect">
  <area is="map-area" id="poly" href="http://example.com/polygon/" alt="Polygon" coords="392,116,430,100,441,128,405,145" shape="poly">
</map>
```

Pour expérimenter les éléments personnalisés `web-map` et `map-area`, vous devriez lier votre `<script type="module" src="web-map.js"></script>` au fichier `web-map.js` créé par le processus de génération des éléments personnalisés de cartes Web.

En théorie, si vous prenez des mesures pour fournir un balisage alternatif, la plupart des utilisateurs auront une expérience normale (progressive) avec la carte Web, tandis que ceux qui utilisent un ancien navigateur ou même Safari pourraient obtenir une expérience inverse avec l’image cliquable côté client. 

Pour obtenir un exemple antérieur d’une telle carte Web, veuillez consulter cet [article de blogue sur les cartes Web progressives](https://maps4html.org/Web-Map-Custom-Element/blog/progressive-web-maps.html). Veuillez soulever un [problème](https://github.com/Maps4HTML/Web-Map-Custom-Element/issues) si vous souhaitez faire part de vos commentaires sur le fonctionnement de cet exemple.

## Attributs 

Les attributs de l’élément intégré personnalisé `<map>` sont identiques à ceux de l’élément [`<mapml-viewer>`](mapml-viewer).

