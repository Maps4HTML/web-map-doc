---
id: custom-projections
title: API de projections personnalisées
slug: /api/custom-projections
---

## Introduction

MapML définit quelques projections CRS (Système de référence des coordonnées) intégrées en pavés, dont la projection Web Mercator (OSMTILE), la projection pseudo-plate carrée (WGS84) et la grille de pavés de base du Canada (CBMTILE). 

L’élément personnalisé `<mapml-viewer>` fournit l’interface de programmation d’applications (API) personnalisée des projections, qui vous permet de créer vos propres projections et de les utiliser dans l’élément `<mapml-viewer>`, défini avec la syntaxe "proj4" étendue du langage JSON et prise en charge par la bibliothèque proj4js.

Exemple :

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Example Custom Projection</title>
  <script type="module" src="web-map/mapml-viewer.js"></script>
  <script type="module">
    let customProjectionDefinition = `{
      "projection": "ATLAS_POLAR_MAP",
      "proj4string" : "+proj=aeqd +lat_0=90 +lon_0=-90 +x_0=0 +y_0=0 +ellps=sphere +units=m +no_defs +type=crs",
      "origin" : [-20015200,20015200],
      "resolutions" :  [33073,16536.5,8268.246,4134.123,2067.061,1033.531,516.765],
      "bounds" : [[4979939,-4846977],[-5139071,3980038]],
      "tilesize" : 256
      }`;
    let map = document.querySelector("mapml-viewer");
    let cProjection = map.defineCustomProjection(customProjectionDefinition);    
    map.projection = cProjection;
  </script>
</head>
<body>
  <mapml-viewer projection="ATLAS_POLAR_MAP" zoom="2" lat="83.48919" lon="-87.7687" controls>
    <layer- label="Carte polaire murale de l’Atlas du Canada" checked>
    <map-link rel="license" title="Plateforme géospatiale fédérale canadienne" href="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/"></map-link>
      <map-extent units="ATLAS_POLAR_MAP">
        <map-input type="zoom" name="z" min="0" max="6" value="6" ></map-input>
        <map-input type="location" name="x" axis="column" units="tilematrix" min="116" max="186"></map-input>
        <map-input type="location" name="y" axis="row" units="tilematrix" min="125" max="184"></map-input>
        <map-link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/tile/{z}/{y}/{x}/"></map-link>
        <map-link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN_A/MapServer/tile/{z}/{y}/{x}/"></map-link>
      </map-extent>
    </layer->
  </mapml-viewer>
</body>
</html>
```

### Détails

Nous n’examinerons pas l’élément `<mapml-viewer>` lui-même ici, sauf pour dire que l’attribut `projection` de la carte doit avoir la même valeur que le membre `projection` de l’objet JSON que vous transmettez à la méthode `defineCustomProjection` de l’API personnalisée des projections, et que chaque élément `<layer->` présent dans la carte doit comporter une déclaration et être programmé dans ce système de coordonnées pour s’afficher correctement.

L’API personnalisée des projections est fournie par l’élément `<mapml-viewer>`. Dans un navigateur, elle peut être définie sur l’objet de fenêtre. Toutefois, parce que des éléments personnalisés utilisent des modules ES6, il est pratique de la placer sur l’élément de mappage qui l’utilise.

Pour que l’appel de la méthode `defineCustomProjection` réussisse, vous devez coder la méthode de projection et les paramètres de projection sous la forme de membres d’une chaîne JSON. La marche à suivre pour ce faire n’est pas toujours simple, mais diverses ressources peuvent vous faciliter la vie, comme https://spatialreference.org où vous pouvez obtenir la version proj4 de pratiquement n’importe quelle définition SRC.

N’oubliez pas de mettre le nom du membre entre guillemets, suivi d’un deux-points. Par exemple, "projection": "NOM_DE_MA_PROJECTION". Les valeurs comportant une chaîne sont également insérées dans des guillemets, et les nombres et tableaux suivent la [syntaxe JSON] normale (https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON).

La définition d’une projection personnalisée requiert plusieurs membres.

- `projection` - Nom (chaîne de caractères) donné à votre projection. Nous recommandons d’utiliser uniquement des majuscules pour mettre en évidence le nom des projections. Vous ne pouvez pas mettre un deux-points (":") dans le nom, car ceci créerait une confusion avec celui des listes de codes URI EPSG: ou ogc:. En effet, nous définissons ici une projection CRS qui comporte des paramètres propres au mappage en ligne, dont nous parlerons plus loin.
- `proj4string` - Cette chaîne étant traitée par [proj4js](http://proj4js.org/), il faut fournir les paramètres d’une méthode de projection prise en charge par cette bibliothèque et dans un format compatible avec celle-ci.
- `origin` - Tableau à deux nombres qui représentent l’origine de la grille de pavés en coordonnées du système de coordonnées projetées, dont les unités sont habituellement des mètres. L’origine se trouve toujours dans le coin supérieur gauche de la grille de pavés, et les numéros de colonnes et de rangées augmentent de façon séquentielle, respectivement vers la droite et vers le bas, comme le prévoit la norme du service Web des pavés cartographiques (SWPC).  
- `resolutions` - Tableau de nombres, triés selon leur taille en mètres en ordre décroissant, des dimensions « réelles » d’un pixel carré. La résolution est calculée sur la base d’une taille de pixel nominale établie à 0,28 mm, telle que définie par la norme SWPC. PRENEZ NOTE QUE LES SERVICES DE PAVÉS DE L’ENVIRONMENTAL SYSTEMS RESEARCH INSTITUTE (ESRI) NE SE SERVENT HABITUELLEMENT PAS DE CETTE VALEUR PARCE QU’ILS UTILISENT UNE TAILLE NOMINALE DE 96 POINTS PAR POUCES (PPP) (réglable). Puisque l’échelle varie dans l’étendue de tout système de coordonnées projetées, la résolution en pixels n’est habituellement valide que là où les dimensions sont limitées, par exemple le long de l’équateur dans la projection Web Mercator. Les endroits où la résolution en pixels est valide changent en fonction de la méthode et des paramètres de la projection. Si vous voulez utiliser votre projection personnalisée avec un service de pavés existants, l’ensemble de résolutions doit correspondre à celui des pavés dans un cache.
- `bounds` - Tableau composé de deux tableaux de paires de coordonnées, qui définit une zone de délimitation autour d’une partie du système de référence des coordonnées projetées, habituellement en mètres. Les requêtes doivent être valides, la latitude et la longitude étant définies à l’intérieur de ces limites. Les requêtes visant des cartes, des pavés et des transformations de coordonnées qui dépassent ces limites ne seront pas exécutées pour éliminer le trafic redondant et les erreurs.  
- `tilesize` - Les pavés sont toujours carrés et ont habituellement 256 pixels d’arête, mais vous pouvez ajuster cette dimension par un nombre entier. Les nombres 256, 512, 1024, 2048 ou 4096 devraient tous fonctionner.

