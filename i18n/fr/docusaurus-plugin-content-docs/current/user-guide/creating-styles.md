---
id: creating-styles
title: Création de styles mvt personnalisés
slug: /user-guide/creating-styles
---

## Qu'est-ce qu'un fichier mvt

Les fichiers [Mapbox vector tiles (mvt)](https://github.com/mapbox/vector-tile-spec) sont un encodage standard de facto de données cartographiques 
optimisées pour un rendu sur des éléments HTML canvas via JavaScript et/ou des informations de style encodées basées sur JSON.  Les règles relatives 
aux feuilles de style en cascade ne s'appliquent pas, car le contenu mvt n'est pas exposé via les API des navigateurs.  Les règles de style, bien 
que [en quelque sorte déclaratives](https://glazkov.com/2024/01/16/declarative-vs-imperative/), sont mises en œuvre dans le script.

## Que sont les fichiers pmtiles

[pmtiles](https://docs.protomaps.com/pmtiles/) est un format d'archivage de tuiles de cartes qui vise à éviter (en partie) le besoin de serveurs 
complexes et des API spécifiques au domaine géospatiale pour les ressources de tuiles sur le web, afin de permettre aux gens de créer leurs 
propres sites de cartes web localisées sans avoir à héberger le monde entier sur leur domaine.  Le format d'archive pmtiles contient des métadonnées 
qui peuvent être demandées via des requêtes http par plage d'octets, et les requêtes ultérieures pour des tuiles individuelles sont également envoyées 
sous forme de requêtes par plage d'octets.

Les [formats](../elements/link#type) de l'archive de carte pmtiles et mvt  dans le polyfill MapML sont intégrés via 
[la bibliothèque protomaps-leaflet](https://docs.protomaps.com/pmtiles/leaflet).  Protomaps-leaflet est conçue pour prendre en charge 
la grille de tuiles Web Mercator (standard de facto). Cela permet au polyfill MapML d'intégrer le support des sources de données pmtiles 
et mvt pour la seule projection `OSMTILE`.  Les éléments `<map-layer>` et `<map-extent>` ainsi que le `<mapml-viewer>` 
ne fonctionneront pas (et seront « désactivés » de façon permanente) s'ils sont utilisés avec des valeurs `<mapml-viewer projection=« ANYTHING »...>` 
ou `<map-extent units=« ANYTHING »...>` autres que `OSMTILE`.

Avant de poursuivre, nous vous conseillons de lire la documentation [protomaps-leaflet](https://docs.protomaps.com/pmtiles/leaflet#custom-vector-data) 
sur la personnalisation du style. Une autre source d'information utile sur le style comprend 
[les exemples du code source](https://github.com/protomaps/protomaps-leaflet/tree/main/examples).

Des exemples pratiques de l'utilisation des thèmes et des styles par `<mapml-viewer>` sont [disponibles en ligne](https://maps4html.org/experiments/vector-tiles/pmtiles/), avec [code source](https://github.com/Maps4HTML/experiments/tree/main/vector-tiles/pmtiles).

## Comment créer un module de feuille de style

Une feuille de style pmtiles utilisée dans le polyfill MapML est un fichier source de module JavaScript qui exporte un seul symbole, qui doit être nommé `pmtilesRules` :

```javascript
const pmtilesRules = new Map();
...
pmtilesRules.set(
  'https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light',
  { theme: { theme: 'light' } }
);
...
export { pmtilesRules };
```
:::tip

Les thèmes prédéfinis que vous pouvez utiliser sont les suivants : `light`, `dark`, `white`, `grayscale` et `black`. Vous devez inclure le nom du 
thème dans le modèle d'URL en tant que paramètre (même s'il n'est pas requis par la ressource pmtiles ou mvt), afin que le modèle d'URL puisse être 
rendu unique et distinct des autres clés `pmtilesRules` utilisant la même ressource pmtiles ou mvt.

:::

L'export `pmtilesRules` doit être un [JavaScript Map-type object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map), structuré comme suit :

- doit avoir une clé unique de type « URL template string » qui sera utilisée sur le web pour identifier un ensemble de règles
- a une valeur d'objet qui a une propriété `theme` ou `rules`.
- La propriété `theme` doit être un objet littéral, lui-même avec une propriété `theme` avec une valeur de nom de thème en chaîne : `{theme:{theme:'grayscale'}}`
- la propriété `rules` doit être un objet littéral, avec `PAINT_RULES : [...]` et/ou un tableau `LABEL_RULES : [...]` avec des propriétés à valeur de tableau
- `PAINT_RULES` et `LABEL_RULES` sont des tableaux d'objets ayant les propriétés requises `dataLayer` et `symbolizer`.
- `PAINT_RULES` et `LABEL_RULES` peuvent avoir des propriétés optionnelles telles que `filter`, `minzoom`, `maxzoom`. 
- `dataLayer` est une propriété de type chaine de caractères qui est le nom d'une couche encodée dans les données mvt
- `symbolizer` est une propriété de type `Symbolizer`.

Voici un exemple de module de feuille de style pmtiles personnalisé pour un groupe de couches GeoServer localhost 'spearfish' (configuré avec un cache de tuiles mvt) :

```javascript
class SpearfishSymbolizer {
  constructor(options) {
    this.color = options.color;
    this.shape = options.shape;
  }
  draw(context, geom, z, feature) {
    let pt = geom[0][0];
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    if (this.shape === 'circle') {
      context.arc(pt.x, pt.y, 3, 0, 2 * Math.PI);
    } else {
      context.rect(pt.x - 2, pt.y - 2, 4, 4);
    }
    context.stroke();
    context.fill();
  }
}
const pmtilesRules = new Map();
pmtilesRules.set(
  'http://localhost:8080/geoserver/gwc/service/wmts/rest/spearfish/OSMTILE/{z}/{y}/{x}?format=application/vnd.mapbox-vector-tile',
  {
    rules: {
      PAINT_RULES: [
        {
          dataLayer: 'streams',
          symbolizer: new M.protomapsL.LineSymbolizer({ color: 'steelblue', width: 2 })
        },
        {
          dataLayer: 'roads',
          symbolizer: new M.protomapsL.LineSymbolizer({ color: 'maroon', width: 2 })
        },
        {
          dataLayer: 'restricted',
          symbolizer: new M.protomapsL.PolygonSymbolizer({
            fill: 'red',
            opacity: 0.5
          })
        },
        {
          dataLayer: 'restricted',
          symbolizer: new M.protomapsL.LineSymbolizer({ color: 'red', width: 2 })
        },
        {
          dataLayer: 'archsites',
          symbolizer: new SpearfishSymbolizer({
            color: 'red',
            shape: 'square'
          })
        },
        {
          dataLayer: 'bugsites',
          symbolizer: new SpearfishSymbolizer({
            color: 'black',
            shape: 'circle'
          })
        }
      ],
      LABEL_RULES: [
        {
          dataLayer: 'archsites',
          symbolizer: new M.protomapsL.CenteredTextSymbolizer({
            labelProps: ['str1'],
            fill:'white',
            width:2,
            stroke:'black',
            font:"600 16px sans-serif"
          }),
          // notez que filter est une propriété d'une règle, et non une option pour un symboliseur
          filter: (z,f) => { return f.props['str1'].trim().toLowerCase() !== 'no name'; }
        }
      ]
    }
  }
);
export { pmtilesRules };
```

## Symboles importés disponibles à partir de protomaps-leaflet

Les importations suivantes de protomaps-leaflet sont disponibles sur la variable globale `M.protomapsL`, par exemple `M.protomapsL.CenteredSymbolizer`, pour être utilisées par vos feuilles de style :

```javascript
/* 

  CenteredSymbolizer,
  CenteredTextSymbolizer,
  CircleSymbolizer,
  FlexSymbolizer,
  Font,
  GeomType,
  GroupSymbolizer,
  IconSymbolizer,
  Index,
  Justify,
  Labeler,
  Labelers,
  LineLabelPlacement,
  LineLabelSymbolizer,
  LineSymbolizer,
  OffsetSymbolizer,
  OffsetTextSymbolizer,
  Padding,
  PmtilesSource,
  PolygonSymbolizer,
  Sheet,
  ShieldSymbolizer,
  Static,
  TextPlacements,
  TextSymbolizer,
  TileCache,
  View,
  ZxySource,
  arr,
  covering,
  createPattern,
  exp,
  getZoom,
  isCcw,
  isInRing,
  labelRules,
  leafletLayer,
  linear,
  paint,
  paintRules,
  pointInPolygon,
  pointMinDistToLines,
  pointMinDistToPoints,
  sourcesToViews,
  step,
  toIndex,
  transformGeom,
  wrap
*/
```