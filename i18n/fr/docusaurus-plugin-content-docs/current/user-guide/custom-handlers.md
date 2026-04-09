---
id: custom-handlers
title: Gestionnaires de recherche personnalisés
slug: /user-guide/custom-handlers
---

Le [contrôle de recherche](../user-guide/search) fonctionne directement avec les API GeoJSON, telles que [Photon](https://photon.komoot.io/). Lorsque votre service de géocodage retourne un format différent, vous pouvez écrire des **gestionnaires d'événements personnalisés** pour transformer les réponses et les fournir au panneau de résultats du contrôle de recherche via la méthode `setResults()`.

Ce tutoriel guide la connexion de l'[API Géolocalisateur de l'ICDG](https://ressources-naturelles.canada.ca/carte-outils-publications/imagerie-satellitaire-donnees-elevation-photos-aeriennes/service-geolocalisation) au contrôle de recherche. L'API Géolocalisateur retourne un tableau JSON simple, et non du GeoJSON, donc pour l'utiliser, vous devez écrire votre propre gestionnaire de recherche personnalisé.

## Baliser le HTML pour les cartes

Créez une page HTML avec un `<mapml-viewer>` incluant les attributs `controls` et `controlslist="search"`. À l'intérieur d'un élément enfant `<map-layer>`, ajoutez deux éléments `<map-link>` ; un avec `rel="search"` et l'autre avec `rel="suggestions"`. Le gabarit d'URL (dans l'attribut `tref`) des deux liens doit pointer vers le point de terminaison du service Géolocalisateur. L'API Géolocalisateur peut être utilisée aussi bien pour les suggestions que pour la recherche, donc les valeurs `tref` des liens sont identiques :

```html
<mapml-viewer projection="CBMTILE" zoom="2" lat="65" lon="-96"
              controls controlslist="search"
              style="width:100%;height:50vh;">
  <map-layer label="Carte de base du Canada" checked>
    <!-- highlight-start -->
    <map-link rel="suggestions"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=fr&keys=geonames"></map-link>
    <map-link rel="search"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=fr&keys=geonames"></map-link>
    <!-- highlight-end -->
    <map-extent units="CBMTILE" checked hidden>
      <map-input name="z" type="zoom" min="0" max="17" value="17"></map-input>
      <map-input name="y" type="location" axis="row" units="tilematrix"></map-input>
      <map-input name="x" type="location" axis="column" units="tilematrix"></map-input>
      <map-link rel="tile"
                tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/tile/{z}/{y}/{x}?m4h=t"></map-link>
    </map-extent>
  </map-layer>
</mapml-viewer>
```

## Comprendre le format de réponse

Ouvrez une requête API dans votre <a href="https://geolocator.api.geo.ca/?q=ottawa&lang=fr&keys=geonames" target="_blank">navigateur</a>, et examinez le format de la réponse. Chaque objet de résultat ressemble à :

| Champ      | Signification |
|------------|---------------|
| `name`     | Nom du lieu |
| `province` | Nom de la province |
| `category` | Type d'entité (Ville, Rivière, etc.) |
| `lat`      | Latitude |
| `lng`      | Longitude |
| `bbox`     | `[ouest, sud, est, nord]` |

Ce n'est pas du GeoJSON, donc le gestionnaire par défaut ne peut pas l'utiliser directement.

## La structure d'un élément de `setResults()`

Les événements `mapsuggestions` et `mapsearch` contiennent tous deux une référence à la méthode `setResults()` sur `e.detail`. Vous l'appelez avec un argument (un tableau d'objets d'éléments) :

```js
e.detail.setResults([
  { text: "Ottawa, Ontario (City)", value: "Ottawa", lat: 45.4, lng: -75.7, bbox: [...] },
  // ...
]);
```

Chaque objet d'élément peut avoir ces propriétés :

| Propriété | Requis | Objectif |
|-----------|--------|----------|
| `text`    | oui    | Libellé d'affichage pour le bouton de la liste déroulante |
| `value`   | non    | Si présent, cliquer sur l'élément **relance une recherche** avec cette chaîne. Si absent, cliquer **navigue** la carte vers l'emplacement. |
| `lat`     | non    | Latitude pour la navigation |
| `lng`     | non    | Longitude pour la navigation |
| `bbox`    | non    | `[ouest, sud, est, nord]` — privilégié pour la navigation |

La propriété `value` distingue une **suggestion** d'un **résultat de recherche**, qui se comportent différemment dans le panneau de résultats de recherche :

- **Suggestions** (gestionnaire `mapsuggestions`) — incluent `value` afin que cliquer sur une suggestion remplisse le champ de recherche et déclenche une recherche complète.
- **Résultats de recherche** (gestionnaire `mapsearch`) — omettent `value` afin que cliquer sur un résultat navigue la carte vers l'emplacement de l'élément.

## Gérer `mapsuggestions`

Écoutez l'événement `mapsuggestions` sur le `<mapml-viewer>`. Appelez `e.preventDefault()` pour supprimer le comportement par défaut (analyse GeoJSON dans le panneau de résultats de recherche), transformez la réponse en structure d'éléments, et appelez `setResults()` :

```html
<script>
  const viewer = document.querySelector('mapml-viewer');

  viewer.addEventListener('mapsuggestions', (e) => {
    e.preventDefault();
    const items = [];
    for (const { data } of e.detail.responses) {
      if (!Array.isArray(data)) continue;
      for (const r of data) {
        items.push({
          text: `${r.name}, ${r.province} (${r.category})`,
          // highlight-next-line
          value: r.name,   // ← inclut value : cliquer relance une recherche
          lat: r.lat,
          lng: r.lng,
          bbox: r.bbox || undefined
        });
      }
    }
    e.detail.setResults(items);
  });
</script>
```

Le contrôle crée les boutons de la liste déroulante, configure la navigation au clavier (touches fléchées, Échap) et — parce que chaque élément a une `value` — cliquer sur une suggestion place `value` dans le champ de recherche et déclenche automatiquement une nouvelle recherche.

## Gérer `mapsearch`

Ajoutez un deuxième écouteur pour `mapsearch`. Cette fois, **omettez `value`** des éléments afin que cliquer sur un résultat navigue la carte :

```js
viewer.addEventListener('mapsearch', (e) => {
  e.preventDefault();
  const items = [];
  for (const { data } of e.detail.responses) {
    if (!Array.isArray(data)) continue;
    for (const r of data) {
      items.push({
        text: `${r.name}, ${r.province} (${r.category})`,
        // highlight-next-line
        // pas de value — cliquer navigue vers l'emplacement
        lat: r.lat,
        lng: r.lng,
        bbox: r.bbox || undefined
      });
    }
  }
  e.detail.setResults(items);
  // Naviguer vers le premier résultat (comme le gestionnaire par défaut)
  // highlight-start
  if (items.length > 0 && items[0].bbox) {
    viewer.zoomToExtent(...items[0].bbox);
  } else if (items.length > 0 && items[0].lat != null) {
    viewer.zoomTo(items[0].lat, items[0].lng, 14);
  }
  // highlight-end
});
```

Lorsque l'utilisateur clique sur un résultat, le contrôle navigue vers le `bbox` ou le `lat`/`lng` de cet élément. L'appel [`zoomToExtent`](../api/mapml-viewer-api/#zoomtoextent) ci-dessus gère la navigation automatique initiale vers le premier résultat lorsque la recherche se déclenche — reproduisant le comportement du gestionnaire par défaut.

## Afficher les résultats sur la carte (optionnel)

Si vous souhaitez que les résultats de recherche apparaissent sous forme de marqueurs/entités sur la carte, convertissez les données du Géolocalisateur en GeoJSON et passez-les à [`geojson2mapml()`](../api/mapml-viewer-api/#geojson2mapml) :

```js
let resultsLayer = null;

viewer.addEventListener('mapsearch', (e) => {
  e.preventDefault();

  // Nettoyer les résultats précédents
  if (resultsLayer) {
    resultsLayer.remove();
    resultsLayer = null;
  }

  // Construire la liste déroulante (comme ci-dessus)
  const items = [];
  const features = [];
  for (const { data } of e.detail.responses) {
    if (!Array.isArray(data)) continue;
    for (const r of data) {
      items.push({
        text: `${r.name}, ${r.province} (${r.category})`,
        lat: r.lat, lng: r.lng, bbox: r.bbox || undefined
      });
      features.push({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [r.lng, r.lat] },
        properties: { name: r.name, province: r.province, category: r.category },
        bbox: r.bbox || undefined
      });
    }
  }
  e.detail.setResults(items);

  // Naviguer vers le premier résultat
  if (items.length > 0 && items[0].bbox) {
    viewer.zoomToExtent(...items[0].bbox);
  } else if (items.length > 0 && items[0].lat != null) {
    viewer.zoomTo(items[0].lat, items[0].lng, 14);
  }

  if (features.length === 0) return;
  const fc = { type: 'FeatureCollection', features };

  resultsLayer = viewer.geojson2mapml(fc, {
    label: 'Résultats de recherche',
    projection: viewer.projection,
    caption: (f) => f.properties.name
  });
});
```

La méthode `geojson2mapml()` retourne un élément `<map-layer>` qui est automatiquement ajouté à la carte. Conservez la référence afin de pouvoir le supprimer avant d'ajouter la prochaine série de résultats.

## Exemple complet

En mettant le tout ensemble :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Recherche avec le Géolocalisateur</title>
  <script type="module" src="mapml.js"></script>
  <style>
    html, body { height: 100%; margin: 0; }
    mapml-viewer { display: block; box-sizing: border-box; }
  </style>
</head>
<body>

<mapml-viewer projection="CBMTILE" zoom="2" lat="65" lon="-96"
              controls controlslist="search"
              style="width:100%;height:100dvh;">
  <map-layer label="Carte de base du Canada" checked>
    <map-link rel="suggestions"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=fr&keys=geonames"></map-link>
    <map-link rel="search"
              tref="https://geolocator.api.geo.ca/?q={searchTerms}&lang=fr&keys=geonames"></map-link>
    <map-extent units="CBMTILE" checked hidden>
      <map-input name="z" type="zoom" min="0" max="17" value="17"></map-input>
      <map-input name="y" type="location" axis="row" units="tilematrix"></map-input>
      <map-input name="x" type="location" axis="column" units="tilematrix"></map-input>
      <map-link rel="tile"
                tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/tile/{z}/{y}/{x}?m4h=t"></map-link>
    </map-extent>
  </map-layer>
</mapml-viewer>

<script>
  const viewer = document.querySelector('mapml-viewer');

  // --- Suggestions (anticipation) ---
  viewer.addEventListener('mapsuggestions', (e) => {
    e.preventDefault();
    const items = [];
    for (const { data } of e.detail.responses) {
      if (!Array.isArray(data)) continue;
      for (const r of data) {
        items.push({
          text: `${r.name}, ${r.province} (${r.category})`,
          value: r.name,
          lat: r.lat,
          lng: r.lng,
          bbox: r.bbox || undefined
        });
      }
    }
    e.detail.setResults(items);
  });

  // --- Résultats de recherche ---
  viewer.addEventListener('mapsearch', (e) => {
    e.preventDefault();
    const items = [];
    for (const { data } of e.detail.responses) {
      if (!Array.isArray(data)) continue;
      for (const r of data) {
        items.push({
          text: `${r.name}, ${r.province} (${r.category})`,
          lat: r.lat,
          lng: r.lng,
          bbox: r.bbox || undefined
        });
      }
    }
    e.detail.setResults(items);
    // Naviguer vers le premier résultat
    if (items.length > 0 && items[0].bbox) {
      viewer.zoomToExtent(...items[0].bbox);
    } else if (items.length > 0 && items[0].lat != null) {
      viewer.zoomTo(items[0].lat, items[0].lng, 14);
    }
  });
</script>

</body>
</html>
```

## Prochaines étapes

- Consultez le guide d'utilisation [Recherche](../user-guide/search) pour la liste complète des options du contrôle, la recherche multicouche et les détails d'accessibilité.
- Consultez la référence des événements [`mapsearch`](../api/mapml-viewer-api/#mapsearch) et [`mapsuggestions`](../api/mapml-viewer-api/#mapsuggestions) pour la structure complète de `e.detail`.

## Points à surveiller

- **Ordre des coordonnées** : GeoJSON utilise des tableaux `[longitude, latitude]`, mais les éléments de `setResults()` utilisent des propriétés nommées `lat` et `lng` — il n'y a pas d'ordre de tableau à gérer. Faites simplement attention lors de la construction des entités GeoJSON dans la section [Afficher les résultats sur la carte](#afficher-les-résultats-sur-la-carte-optionnel) : le tableau `coordinates` doit être `[lng, lat]`, et non `[lat, lng]`.
- **La réponse est un tableau, pas un objet** : Le Géolocalisateur retourne un tableau JSON simple `[{...}, {...}]` au niveau supérieur — sans propriété englobante `features` ou `results`.
- **CORS doit être activé sur l'API distante** : Le contrôle de recherche récupère l'URL de géocodage directement depuis le navigateur en utilisant `fetch()`. Si le serveur API n'inclut pas un en-tête `Access-Control-Allow-Origin` dans sa réponse, le navigateur bloquera la requête et aucun résultat n'apparaîtra. L'API Géolocalisateur utilisée dans ce tutoriel prend en charge CORS, aucun proxy n'est donc nécessaire. Si vous essayez un autre service de géocodage et n'obtenez aucune suggestion ni résultat, ouvrez la console de développement du navigateur (F12 → Console) et recherchez une erreur comme _« has been blocked by CORS policy »_. Si vous voyez cela, l'API ne permet pas les requêtes inter-origines et vous devrez soit utiliser un proxy côté serveur, soit choisir un point de terminaison compatible CORS.
- **Limites de débit** : L'API est gratuite pour une utilisation normale, mais évitez de la surcharger. Le contrôle de recherche applique déjà un rebond sur les suggestions (300 ms), ce qui aide.
- **L'attribut `hidden` vs `checked`** : `hidden` masque la couche du panneau de contrôle des couches ; `checked` contrôle si elle s'affiche. Vous voulez les deux — `hidden` (pour la garder hors de l'interface) et `checked` (pour que les entités s'affichent réellement). `geojson2mapml()` définit `checked` par défaut, vous n'avez donc qu'à ajouter `hidden` vous-même.
- **`value` contrôle le comportement au clic** : Les deux événements utilisent la même méthode `e.detail.setResults()` et la même structure d'élément `{ text, value?, lat?, lng?, bbox? }`. Si `value` est présent, cliquer déclenche une recherche (mode suggestion). Si `value` est absent mais que `lat`/`lng` sont présents, cliquer navigue la carte (mode résultat). Incluez `value` pour les suggestions, omettez-le pour les résultats finaux.
