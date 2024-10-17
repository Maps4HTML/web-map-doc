---
id: using-styles
title: Utilisation des styles mvt
slug: /user-guide/using-styles
---

## L'API `<map-link>` déclarative
L'interface développeur-utilisateur pour utiliser le style mvt dans le polyfill MapML est similaire à (l'une des façons) 
dont les feuilles de style CSS sont importées dans un document HTML, en utilisant l'élément `<map-link>`.  Un `<map-link>` templé 
vers une ressource pmtiles ou mvt sera associé à un élément `<map-link type="application/pmtiles+stylesheet">` dans son ascendance DOM :

```html
...
<map-extent units="OSMTILE" checked="checked" hidden="hidden">
  <map-link id="linked-stylesheet" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>
  <map-link id="templated-link" rel="tile" type="application/pmtiles" 
    tref="https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light"></map-link>
</map-extent>
...
```
Dans l'exemple ci-dessus, le lien `<map-link id="templated-link">` sera [associé](#ordre-de-recherche-pour-les-feuilles-de-style-liées) au lien de feuille de style `<map-link id="linked-stylesheet">`.

## Les modules `application/pmtiles+stylesheet`
La ressource de feuille de style ci-dessus, `lightTheme.js`, qui peut avoir n'importe quel nom, mais doit être **structurée** comme un module JavaScript, pour être consommée par la polyfill comme décrit dans [la section précédente](creating-styles) :

```javascript
const pmtilesRules = new Map();
pmtilesRules.set(
  'https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light',
  { theme: { theme: 'light' } }
);
export { pmtilesRules };
```

Le module **doit** définir une exportation nommée `pmtilesRules` qui **doit** être de 
[type Map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map). Chaque entrée dans le Map doit être la valeur 
**exacte** de la chaîne de caractères du modèle d'URL `tref` de la (des) ressource(s) à partir de laquelle (desquelles) les tuiles mvt seront obtenues.  

La raison pour laquelle la clé de la carte doit être la valeur exacte de la chaîne du modèle d'URL `tref` est que le polyfill utilisera la chaîne du modèle d'URL trouvée dans l'attribut `<map-link tref="...">` `tref` comme clé pour **rechercher** les règles de style dans la carte `pmtilesRules` qui doivent être appliquées au contenu. 

Chaque `<map-link type="application/pmtiles"...>` ou `<map-link type="application/vnd.mapbox-vector-tile"...>` que vous créez doit être associé à un ensemble de règles de style ou à un thème. La question de l'encodage des règles de style et des thèmes a été abordée dans la section précédente. 

:::tip

Les thèmes prédéfinis que vous pouvez utiliser sont les suivants : `light`, `dark`, `white`, `grayscale` et `black`. Vous devez inclure le nom du thème dans le modèle d'URL en tant que paramètre (même s'il n'est pas requis par la ressource pmtiles ou mvt), afin que le modèle d'URL puisse être rendu unique et distinct des autres clés `pmtilesRules` utilisant la même ressource pmtiles ou mvt.

:::

## Ordre de recherche pour les feuilles de style liées

Les styles pour un modèle d'URL `<map-link>` donné doivent être trouvés via un `<map-link rel=stylesheet>` associé.  Le polyfill MapML
recherche le `<map-link rel=stylesheet>` associé vers le haut dans la  hiérarchie de l'élément `<map-link>`, en s'arrêtant à l'élément `<layer>` 
qui l'entoure.  Le lien de feuille de style associé `<map-link rel=« stylesheet » type=« application/pmtiles+stylesheet »...>` 
peut être situé dans l'élément `<map-extent>`, en tant que frère de la ressource `<map-link rel=« tile » tref=« ... »>` à styliser, ou 
dans l'élément `<map-head>` (lorsqu'il est utilisé dans un contenu MapML distant) ou `<map-layer>` (lorsqu'il est utilisé dans un contenu MapML local).
  
Seule la **premier** `<map-link rel=stylesheet>` dans l'ordre du document trouvé sera associé ; si aucune règle de style ou thème pour le modèle d'URL 
`tref`, les messages d'erreur de la console peuvent aider à clarifier la situation.

Exemple de cas où les feuilles de style liées sont recherchées par la polyfill, contenu distant :

```html
<mapml- xmlns="http://www.w3.org/1999/xhtml">
  <map-head>
    <map-title>pmtiles</map-title>

    <map-link data-testid="operative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>

    <!-- Seule la première feuille de style dans l'ordre du document à l'intérieur du chemin de recherche du conteneur est utilisée... -->
    <map-link data-testid="inoperative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>

    <map-link rel="license" title="© OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>
  </map-head>
  <map-body>
    <map-extent data-testid="light-me" label="light" units="OSMTILE" >

      <!-- ce type devrait utiliser la feuille de style operative-light dans l'en-tête de la carte -->
      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=light"></map-link>

    </map-extent>
    <map-extent data-testid="dark-me" label="dark" units="OSMTILE" checked="checked" >

      <map-link data-testid="operative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>
      <map-link data-testid="inoperative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>
      
      <!-- ce type devrait utiliser la feuille de style operative-dark de la fratrie précédente (première dans l'ordre des documents dans le chemin de recherche) -->
      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>

    </map-extent>
  </map-body>
</mapml->
```

Exemple de cas où les feuilles de style liées sont recherchées par le polyfill, contenu local :

```html
...
<mapml-viewer data-testid="viewer" projection="OSMTILE" zoom="0" lat="0" lon="0" width="400" height="400">
  <map-layer data-testid="dark">
    <map-title>PMTiles test dark</map-title>
    <map-link rel="license" title="© OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>
    <map-extent units="OSMTILE" checked>
      <!-- la feuille de style liée est membre de la fratrie de map-extent -->
      <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>
      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>
    </map-extent>
  </map-layer>
  <map-layer checked data-testid="light">
    <map-title>{z}/{x}/{y}.mvt test</map-title>
    <!-- pas de map-head disponible, les enfants de l'élément map-layer sont recherchés pour les feuilles de style liées -->
    <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>
    <map-extent units="OSMTILE" checked="checked">
      <map-input name="beans" type="zoom" value="18" min="0" max="2"></map-input>
      <map-input name="foo" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="bar" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" type="application/vnd.mapbox-vector-tile" tref="tiles/osmtile/{beans}/{foo}/{bar}.mvt?theme=light"></map-link>
    </map-extent>
  </map-layer>
</mapml-viewer>
```


