---
id: search
title: Recherche
slug: /user-guide/search
---

## Activer le contrôle de recherche

Le contrôle de recherche permet aux utilisateurs de rechercher un lieu par son nom et de naviguer sur la carte jusqu'à celui-ci. Pour l'activer, ajoutez le jeton `search` à l'attribut [`controlslist`](../elements/mapml-viewer/#controlslist) du visualiseur. Le bouton de recherche apparaît désactivé tant qu'au moins une `<map-layer>` cochée (`checked`) n'inclut pas un élément descendant [`<map-link rel="search">`](../elements/link/#rel).

<iframe src="../../demo/search-demo/" title="Démo MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Fournir des liens de recherche

Un lien de recherche est un élément `<map-link>` avec un attribut `rel="search"` dont la valeur de l'attribut `tref` contient un gabarit d'URL incluant la référence de variable de gabarit d'URL prédéfinie `{searchTerms}`. Le contrôle substitue la requête de l'utilisateur à la variable `{searchTerms}` et récupère l'URL résultante. Deux valeurs `rel` liées à la recherche sont reconnues :

| Valeur `rel`   | Objectif | Requis? |
|---------------|----------|---------|
| `search`      | Lien de recherche textuelle, récupéré lorsque l'utilisateur appuie sur **Entrée** ou sélectionne une suggestion dans la liste | Oui |
| `suggestions` | Lien de suggestions de termes de recherche par anticipation, récupéré et ([avec rebond](https://developer.mozilla.org/fr/docs/Glossary/Debounce) au fur et à mesure que l'utilisateur tape, minimum 2 caractères) | Non, mais recommandé |

### Dans un document MapML

Lorsque le contenu de la couche est récupéré depuis un document MapML distant (`<map-layer src="…">`), vous devez placer les liens à l'intérieur de l'élément `<map-head>` du document :

```xml
<mapml- xmlns="http://www.w3.org/1999/xhtml">
  <map-head>
    <map-title>OpenStreetMap</map-title>
    <map-link rel="search"
              tref="https://photon.komoot.io/api/?q={searchTerms}&amp;limit=5"></map-link>
    <map-link rel="suggestions"
              tref="https://photon.komoot.io/api/?q={searchTerms}&amp;limit=5"></map-link>
  </map-head>
  <map-body>
      <map-extent units="OSMTILE" checked="checked" hidden="hidden">
        <map-input name="z" type="zoom" min="0" max="18" value="3"></map-input>
        <map-input name="x" type="location" axis="column" units="tilematrix"></map-input>
        <map-input name="y" type="location" axis="row" units="tilematrix"></map-input>
        <map-link rel="tile"
                  tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></map-link>
      </map-extent>
  </map-body>
</mapml->
```

### En ligne dans le HTML

Lorsque le contenu de la couche est défini en ligne dans le document HTML, les liens de recherche sont des enfants directs de l'élément `<map-layer>`, comme illustré dans l'[exemple ci-dessus](#activer-le-contrôle-de-recherche).

## Gestionnaire de recherche par défaut

Lorsqu'aucun écouteur d'événement personnalisé n'appelle `e.preventDefault()`, le gestionnaire intégré s'attend à ce que chaque point de terminaison `<map-link rel="search">` ou `<map-link rel="suggestions">` retourne une **FeatureCollection GeoJSON**. Pour chaque entité, le gestionnaire recherche :

- **Nom d'affichage** — utilise `properties.display_name` si présent ; sinon construit une chaîne séparée par des virgules à partir de `properties.name`, `city`, `county`, `state` et `country` (en ignorant les doublons de `name`). Se rabat sur `"Unnamed"`.
- **Navigation sur la carte** — effectue un zoom et un panoramique pour ajuster `feature.bbox` (`[ouest, sud, est, nord]`), en se rabattant sur `properties.extent` (même format). Si aucun des deux n'est disponible, centre la carte sur la première valeur `geometry.coordinates` (`[lon, lat]`) au niveau de zoom `properties.zoom` (par défaut `14`).

L'[API de géocodage Photon](https://photon.komoot.io/) retourne du GeoJSON et fonctionne directement avec le gestionnaire par défaut.

## Gestionnaires de recherche personnalisés

Le visualiseur déclenche deux [événements personnalisés](../api/mapml-viewer-api/#events) qui vous permettent d'intercepter et de remplacer le comportement par défaut :

| Événement | Quand il se déclenche |
|-----------|----------------------|
| [`mapsearch`](../api/mapml-viewer-api/#mapsearch) | Après que l'utilisateur appuie sur **Entrée** ou sélectionne une suggestion, et que toutes les réponses de recherche arrivent |
| [`mapsuggestions`](../api/mapml-viewer-api/#mapsuggestions) | Après que les réponses de suggestions arrivent pendant que l'utilisateur tape |

Les deux événements portent la même structure `e.detail` :

```js
{
  query: "Ottawa",           // la chaîne de recherche de l'utilisateur
  responses: [               // une entrée par couche répondante
    { data: { /* JSON */ }, link: mapLinkElement, layer: mapLayerElement }
  ],
  setResults: function(items) { /* … */ }  // remplir la liste déroulante de résultats
}
```

Appelez `e.preventDefault()` pour supprimer le rendu des résultats intégré / la navigation et gérer les résultats vous-même. Utilisez `e.detail.setResults(items)` pour remplir la liste déroulante avec vos propres résultats. Pour un guide complet sur l'écriture de gestionnaires personnalisés, y compris l'utilisation de `e.detail.setResults()` pour remplir la liste déroulante et optionnellement le rendu des résultats sur la carte avec `geojson2mapml()` — consultez le tutoriel [Gestionnaires de recherche personnalisés](../user-guide/custom-handlers).

## Recherche multicouche

Lorsque plusieurs couches cochées contiennent chacune un `<map-link rel="search">`, le contrôle interroge **toutes en parallèle**. Les réponses sont regroupées dans un seul événement `mapsearch` (ou `mapsuggestions`) dont le tableau `e.detail.responses` contient une entrée par couche. Chaque entrée porte une référence à l'élément `<map-layer>` d'origine afin que vous puissiez identifier la provenance des résultats.

:::note

Le gestionnaire par défaut s'attend à ce que chaque couche retourne du **GeoJSON**. Si une couche retourne un format différent, ses résultats sont silencieusement ignorés. Lorsque vous mélangez des formats de réponse entre les couches — ou lorsqu'aucune des couches ne retourne du GeoJSON — vous **devez** fournir un [gestionnaire de recherche personnalisé](../user-guide/custom-handlers) pour traiter les réponses vous-même.

:::

## Contrôle programmatique

La propriété [`controlsList`](../api/mapml-viewer-api/#controlslist) est un `DOMTokenList`, vous pouvez donc ajouter ou supprimer le contrôle de recherche à l'exécution :

```js
const map = document.querySelector('mapml-viewer');
map.controlsList.add('search');    // afficher le bouton de recherche
map.controlsList.remove('search'); // le masquer
```

## Accessibilité

- Le bouton de recherche est désactivé lorsqu'aucune couche cochée ne possède de lien de recherche, empêchant l'activation.
- **Clavier** : appuyez sur **Entrée** dans le champ de recherche pour soumettre ; appuyez sur **Échap** pour effacer le champ (ou fermer le panneau si le champ est déjà vide). **Flèche bas** ou **Tab** depuis le champ déplace le focus vers le premier résultat ; **Flèche haut/bas** ou **Tab/Maj+Tab** permet de naviguer entre les résultats ; **Échap** depuis un résultat ramène le focus au champ de saisie. Le focus revient au bouton de recherche lorsque le panneau se ferme.

---
