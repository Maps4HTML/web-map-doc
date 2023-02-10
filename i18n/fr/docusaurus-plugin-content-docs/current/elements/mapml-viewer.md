---
id: mapml-viewer
title: "<mapml-viewer>"
slug: /elements/mapml-viewer/
---

L’élément `<mapml-viewer>` est le principal élément à utiliser pour ajouter une carte Web dans une page. Voici comment l’utiliser pour créer une carte Web (très) simple :

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Carte Web simple [carte topographique]</title>
  <script type="module" src="web-map/mapml-viewer.js"></script>
  <style>
    html, body {
    height: 100%; /* Ces styles sont nécessaires si vous souhaitez utiliser une valeur de hauteur basée sur un pourcentage pour l’élément « mapml-viewer ». */
    }
  </style>
</head>
<body>
  <mapml-viewer projection="OSMTILE" zoom="0" lat="0.0" lon="0.0" controls>
    <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked></layer->
  </mapml-viewer>
</body>
</html>    
```

<iframe src="../../../demo/mapml-viewer-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

Notez que pour que l’exemple ci-dessus s’exécute correctement dans votre propre site, vous devez intégrer une copie du projet `<mapml-viewer>` dans le dossier de votre site. Dans cet exemple, les fichiers `<mapml-viewer>` sont copiés dans le dossier intitulé « web-map » du dossier racine du site. Le chemin d’accès vers ces fichiers depuis votre site dépendra de la façon dont vous structurez vos dossiers.

`<mapml-viewer>` est un "[élément personnalisé autonome](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)" en HTML. La présence d’un tiret (-) dans le nom de l’élément permet de distinguer un élément personnalisé autonome d’un élément HTML natif. Les éléments personnalisés autonomes sont pris en charge par tous les navigateurs récents, mais ils ne fonctionnent pas dans les anciens navigateurs (p. ex., Internet Explorer et anciennes versions d’Edge).

L’élément `<mapml-viewer>` contient plusieurs attributs permettant de déterminer la présentation et l’emplacement initial de la carte.

## Attributs

### `projection`

`projection` - attribut énuméré. Les valeurs sensibles à la casse sont les suivantes : "`OSMTILE`", "`WGS84`", "`CBMTILE`" et "`APSTILE`".  
La projection par défaut est `OSMTILE`.

  - `OSMTILE` correspond à Web Mercator, un système de référence des coordonnées projetées largement utilisé, ce qui signifie que la plage de zoom de la « pyramide de pavés » va de 0 à 23 (pavé d’une taille minimale d’environ 2,4 m).

  - `WGS84` représente le système de référence de coordonnées projetées « pseudo-plate carrée », où les unités des axes horizontal et vertical sont exprimées en degrés décimaux (et non en mètres). Dans le système `WGS84`, le niveau de zoom 0 contient deux pavés couvrant chacun un hémisphère de la Terre. Le système `WGS84` compte 21 niveaux de zoom (de 0 à 20).

  - `CBMTILE` désigne le modèle de disposition en grille standard de fait de l’Infrastructure canadienne de données géospatiales (ICDG) définie par Ressources naturelles Canada; ce modèle est fondé sur la projection conique conforme de Lambert (EPSG:3978). Les niveaux de zoom sont fondés sur un dénominateur d’échelle cartographique numérique (p. ex., 10 000 correspond à une échelle cartographique de 1:10 000), selon une résolution en pixels sélectionnée. Par conséquent, les pavés de niveaux de zoom successifs ne s’imbriquent pas exactement (comme c’est le cas dans `OSMTILE`, `WGS84` et `APSTILE`).

  - `APSTILE` est basé sur le système de projection stéréographique polaire de l’Alaska (EPSG:5936), et compte 20 niveaux de zoom (de 0 à 19).

  - D’autres projections sont possibles, au moyen d’[API de projections personnalisées](../../api/custom-projections).

---

### `zoom`

`zoom` - entier non négatif. Cette valeur établit le niveau de zoom initial de la carte. Pour obtenir une vue du monde à petite échelle, utilisez une valeur faible. Utilisez des valeurs supérieures pour obtenir une vue à grande échelle (cartes de petites zones). La valeur maximale dépend de la `projection` en question et de la source des données. Bon nombre des sources de données cartographiques offrent des niveaux de zoom limités.

---

### `lat`

`lat` - nombre réel de la latitude. Cette valeur établit la latitude initiale du centre de la carte. Sur Terre, les latitudes vont de -90.0 (Sud) à 90.0 (Nord).  De nombreuses projections ne permettent pas d’afficher toutes les latitudes et la plupart permettent de contrôler ou de limiter la distorsion dans un certain nombre d’emplacements. En particulier, OSMTILE (Web Mercator) peut afficher seulement le contenu compris entre les latitudes -84 à 84.

---

### `lon`

`lon` - nombre réel de la longitude. Cette valeur établit la longitude initiale du centre de la carte. Sur Terre, les longitudes vont de -180.0 (Ouest) à 180.0 (Est). Les mêmes commentaires formulés précédemment concernant la distorsion s’appliquent. Faites attention, le nom de cet attribut est « lon » et non « long »; votre carte ne fonctionnera pas correctement si vous utilisez « long ».

---

### `controls`

`controls` - attribut booléen. Permet d’activer (s’il est présent) ou de désactiver (s’il est omis) les commandes de la carte. Dans le langage HTML, les attributs booléens n’ont pas les valeurs « true » ou « false » comme tel. Ils ont la valeur implicite « true » si l’attribut existe, et la valeur implicite « false » si l’attribut n’existe pas. Les commandes par défaut peuvent ne pas être utiles pour votre carte, vous pouvez donc les désactiver et créer vos propres commandes.

---

### `controlslist`

`controlslist` - attribut énuméré. Les valeurs possibles sont les suivantes : "`nofullscreen`", "`nolayer`", "`noreload`" et "`nozoom`". Il se peut qu’à l’occasion, vous ne souhaitiez pas que les utilisateurs aient accès à une commande en particulier. Vous pouvez alors réduire l’ensemble des commandes offertes automatiquement (si vous avez utilisé l’attribut booléen `controls` ).

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « map »](https://maps4html.org/MapML/spec/#the-map-element-0) |
| [Élément HTML « map »](https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element) |

---

## Exigences

[Signaler les problèmes liés à ces exigences sur GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">exigence</span>
<span class="enhancement">amélioration</span>
<span class="impractical">peu pratique</span>
<span class="undecided">indécis</span>
<span class="discussion">en cours de discussion</span></b></p>

|  | Spéc. | Visualiseur | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Rendu des couches de base (5.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering) |  |  |  |
|              <div class="requirement">Intégrer un visualiseur de cartes interactives, à l’aide du balisage HTML (5.1.1)</div>           | [complet](https://maps4html.org/MapML/spec/#the-map-element-0) | complet | [complet](https://maps4html.org/MapML/spec/#webidl-1442763376) |
|              <div class="enhancement">Gérer une carte par défaut pour une région donnée (5.1.2)</div>           | Non prévu | Non prévu | Non prévu |
|            <div class="requirement">Afficher une carte de base sans JavaScript (5.1.5)</div>             | complet | [limité](http://maps4html.org/experiments/progressive-enhancement/) |  |
|            <div class="requirement">Afficher le contenu d’une carte dans la langue préférée de l’utilisateur (5.1.6)</div>            | [complet](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/136) | [complet](https://github.com/Maps4HTML/mapml-extension) |  |
| [**Interpréter les lieux et les positions sur une carte (5.3)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-locations) |  |  |  |
|           <div class="requirement">Sélectionner la vue d’une carte à partir d’un point de latitude et de longitude (5.3.1)</div>             | complet | complet | [complet](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#zoomtolat-lon-zoom) |
|           <div class="undecided">Afficher les pavés de carte définis dans divers systèmes de coordonnées courants (5.3.3)</div>             | [complet](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/14) | complet | [complet](https://maps4html.org/web-map-doc/docs/api/custom-projections) |
|           <div class="undecided">Reprojeter les données des pavés de carte dans une nouvelle projection ou dans la vue Globe (5.3.4)</div>             | [en cours de discussion](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/3) | aucun |  |
|           <div class="undecided">Sauvegarder l’emplacement ou l’exporter dans une autre application (5.3.5)</div>             | limité | limité |  |
| [**Navigation des utilisateurs (vue panoramique et zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
|            <div class="requirement">Faire un zoom sur la carte indépendamment du reste de la page (5.4.1)</div>            | complet    | complet   | |
|                            <div class="requirement">Afficher une vue panoramique de la carte (5.4.2)</div>                             | complet    | complet   | |
|          <div class="undecided">Encapsuler ou dupliquer des pavés de données au moment d’afficher une vue panoramique du monde (5.4.4)</div>             | none    | partial| | |
| [**Custom styling (5.5)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-custom-styling) |  |  |  |
|          <div class="undecided">Appliquer un style personnalisé aux commandes d’une carte (5.5.2)</div>              | aucun | aucun |  |
|          <div class="undecided">Choisir d’afficher les commandes par défaut ou non (5.5.3)</div>              | complet | complet |  |
| [**Contrôler la vue de la carte affichée et répondre aux actions de l’utilisateur (6.2)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis-map-viewport) |  |  |  |
|          <div class="requirement">S’abonner aux avis concernant les événements liés à une carte (6.2.3)</div>              | [en attente](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events) | limité | [complet](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events) |
|          <div class="requirement">Déplacer la carte pour afficher un emplacement donné (6.2.5)</div>              | complet | complet |  |
---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/mapml-viewer.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
