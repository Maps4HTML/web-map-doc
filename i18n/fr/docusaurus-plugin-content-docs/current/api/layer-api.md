---
id: layer-api
title: "HTMLLayerElement"
slug: /api/layer-api
---

# HTMLLayerElement

## Propriétés

### checked

`HTMLLayerElement.checked` est une valeur booléenne de lecteur et d’écriture qui active ou désactive la couche et reproduit l’attribut vérifié (checked). L’état vérifié est reproduit dans l’interface utilisateur du contrôle de la couche sous la forme d’une case à cocher à côté du nom de cette dernière. La propriété vérifiée peut servir à effectuer un changement programmatique de l’état vérifié de la couche.
La propriété vérifiée ne peut être modifiée si l’état de la propriété est « désactivée »).

Pour activer l’état vérifié d’une couche activée :

```js
let layer = document.querySelector('layer-');
layer.checked = true; // les valeurs valides sont true | false
```

Pour lire l’état vérifié de la couche :

```js
let layer = document.querySelector('layer-');
let isChecked = layer.checked;
```
---

### hidden
`HTMLLayerElement.hidden` est une valeur booléenne de lecture et d’écriture qui ne masque ou n’affiche la couche qu’au niveau du contrôle de la couche. Masquer la couche n’a aucune incidence sur la présence de son contenu sur la carte, seulement sur le contrôle de la présence de la couche. 
Cela peut être utile pour gérer les couches de courte durée dans la carte, comme les résultats d’une recherche, sans que l’utilisateur soit obligé de gérer l’état de la couche, ce dont se charge votre application.
Cela est également pratique pour gérer une couche permanente sans surcharger l’interface utilisateur.

Pour définir que la couche est masquée ou la mettre à jour avec cet état :

```js
let layer = document.querySelector('layer-');
layer.hidden = true; // les valeurs valides sont true | false
```

Pour obtenir la valeur hidden de `<layer->` :

```js
let layer = document.querySelector('layer-');
let isHidden = layer.hidden;
```
---

### disabled
`HTMLLayerElement.disabled` donne un accès en lecture seule à l’état désactivé de la couche. Une couche est désactivée si son contenu n’est pas rendu, soit parce qu’il sort complètement de l’étendue de la carte affichée ou parce qu’une erreur est associée au traitement de la couche, par exemple lorsque celle-ci se trouve dans un projection incompatible avec celle de la carte. Lorsqu’une couche est désactivée, l’utilisateur ne peut interagir avec elle au niveau du contrôle de la couche, et elle n’est pas visible dans la fenêtre d’affichage de la carte. Si la couche devient activée, par exemple à la suite d’une manipulation de la carte, l’utilisateur peut interagir avec elle au niveau du contrôle de la couche, et elle est visible dans la fenêtre d’affichage de la carte.

---

### label
`HTMLLayerElement.label` reflète l'attribut de contenu `label`, et spécifie un 
nom accessible de repli pour la couche, si le nom accessible n'est pas fourni par un 
élément local `<map-title>` enfant de l'élément `<layer->`, ou dans l'élément 
`<map-head>` d'un document MapML chargé via la valeur URL dans l'attribut `src`, 
respectivement.

Pour définir la label de `<layer->` ou mettre à jour celle-ci :

```js
let layer = document.querySelector('layer-');
layer.label = "Nouveau titre";
```

Pour obtenir la valeur de la label de `<layer->` :

```js
let layer = document.querySelector('layer-');
let label = layer.label;
```
---
### src
`HTMLLayerElement.src` reproduit l’attribut HTML src et précise l’adresse URL du document MapML de la couche. La propriété src peut ne pas être définie si la couche contient du contenu en ligne. Si la propriété src retourne une valeur, tout contenu en ligne est omis.
Pour définir ou mettre à jour la src de `<layer->` :

```js
let layer = document.querySelector('layer-');
layer.src = "https://example.org";
```

Pour obtenir la valeur (adresse URL) de la src de `<layer->` :

```js
let layer = document.querySelector('layer-');
let url = layer.src;
```
---
### opacity
`HTMLLayerElement.opacity` donne accès en lecture ou en écriture à la valeur d’`opacity`, qui correspond dans le contrôle de couche pour chaque couche, sous "Opacité".

Pour définir ou mettre à jour l’opacité de `<layer->` :

```js
let layer = document.querySelector('layer-');
layer.opacity = 0.5; // les valeurs valides vont de 0.0 à 1.0
```

Pour obtenir la valeur de l’opacité de `<layer->` :

```js
let layer = document.querySelector('layer-');
let opacity = layer.opacity;
```

---
## Méthodes

### zoomTo()
`HTMLLayerElement.zoomTo()` Zoom sur l'étendue de la couche dans la carte, 
au niveau de zoom maximum dans lequel l'étendue s'inscrit complètement.

```js
let layer = document.querySelector('layer-');
layer.zoomTo();
```

---

### mapml2geojson(options)

| Fonction | Retours | Description |
|----------|---------|-------------|
| <code>mapml2geojson(\<Object\> options)</code> | Objet de collection de caractéristiques JavaScript (GeoJSON) | Cette fonction transforme l’élément- enfant `<feature>` d’un élément `<layer->` en un objet GeoJSON FeatureCollection. Vous fournissez les [options](#options) pour contrôler la transformation. Cette fonction doit servir dans un événement windows.onload.

:::caution

`mapml2geojson` doit être appelé dans un événement windows.onload pour fonctionner correctement, comme suit :

``` js
window.onload = (event) => {
  let layer = document.querySelector('layer-');
  layer.mapml2geojson();
};
```

:::

#### Paramètres

| Paramètre | Description |
|------|--------------|
| Élément \<HTMLLayerElement\> | Élément `<layer->` |
| \<Object\> options | Vous fournissez des paramètres au moyen d’un objet d’options avec des  [noms d’option prédéfinis](#options). |

#### Options

\<Object\> Ensemble de paires de clés ou de valeurs qui personnalise l’objet de sortie GeoJSON. Toutes les options sont facultatives et décrites ci-après.

| Option | Type | Défaut | Description |
|------|------|---------------|--------|
| `propertyFunction` | \<Function\> | _n/a_ | Fonction que vous fournissez et qui mappe l’élément `<map-properties>` de la caractéristique à un [membre GeoJSON "properties"](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2), puisque qu’il n’y a que vous qui connaît la conception du balisage dans votre valeur `<map-properties>`. Si vous ne fournissez pas cette option, une fonction par défaut essaiera de renverser un élément-enfant `<table>` de `<map-properties>`, comme si ce tableau était généré par la [fonction d’option de propriétés par défaut de geojson2mapml](mapml-viewer-api#options). |
| `transform` | \<Boolean\> | `true` | Transforme des valeurs `<map-coordinates>` en valeurs `gcrs` (longitude, latitude), si elles ne le sont pas déjà. GeoJSON [recommande](https://www.rfc-editor.org/rfc/rfc7946.html#section-4) d’utiliser les coordonnées de longitude et de latitude WGS 84, il s’agit donc là du comportement par défaut. |
###### Remarques

Au besoin, `mapml2geojson` transforme des coordonnées en `gcrs` par défaut avant la sérialisation. Prenez note que toutes les projections géographiques CRS (système de référence des coordonnées) ne sont pas équivalentes, et que l’interprétation de telles coordonnées n’est pas garantie conforme aux coordonnées WGS 84 ou GPS, et que, par conséquent, elles ne suivent pas nécessairement la [recommandation GeoJSON](https://datatracker.ietf.org/doc/html/rfc7946#section-4), qui requiert des coordonnées de longitude et de latitude codées conformément au système géodésique WGS 84. Le moteur de projection utilisé pour mettre en œuvre cette conversion est incapable de transformer des coordonnées d’un ellipsoïde à un autre. Par conséquent, le JSON résultant DOIT (d’une manière qui reste à déterminer) être étiqueté avec la donnée qu’utilise la projection de la couche.

---
## Événements

| Nom de l’événement      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| changestyle     | Déclenché avant que la couche ne change de src parce que l’utilisateur a sélectionné un autre style au niveau du contrôle de la couche |
| changeprojection | Déclenché avant que la couche ne change de projection parce que la projection déclarée n’est pas égale à celle de la carte |
| loadedmetadata | 	Déclenché lorsque les métadonnées d'une couche ont été chargées. L’intention est que cet événement soit analogue à l’événement [loadedmetadata de l’élément média](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event), mais avec les couches d’une carte. |
| map-change    | Déclenché lorsque l'attribut `checked` change d'état              |
---

## Exemples

### mapml2geojson
#### Options par défaut
Exemple montrant la sortie GeoJSON par défaut lorsqu’aucune option n’est fournie. 
``` html
<layer- label="Géometrie du point" checked="">
   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>
   <map-meta name="projection" content="OSMTILE"></map-meta>
   <map-meta name="cs" content="gcrs"></map-meta>
   <map-feature>
      <map-featurecaption>Géometrie du point</map-featurecaption>
      <map-geometry>
         <map-point>
            <map-coordinates>-75.6916809 45.4186964</map-coordinates>
         </map-point>
      </map-geometry>
      <map-properties>
         <table>
            <thead>
               <tr>
                  <th role="columnheader" scope="col">Nom de la propriété </th>
                  <th role="columnheader" scope="col">Nom de la propriété</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">prop0</th>
                  <td itemprop="prop0">Ceci est un point</td>
               </tr>
            </tbody>
         </table>
      </map-properties>
   </map-feature>
</layer->
<script>
window.onload = (event) => {
   let layer = document.querySelector('layer-');
   let output = layer.mapml2geojson();
};
</script>
```

<details>
<summary>Cliquez pour afficher la sortie GeoJSON</summary>

``` js
{
 "title": "Géométrie du point",
 "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],
 "type": "FeatureCollection",
 "features": [{
     "type": "Feature",
     "geometry": {
         "type": "Point",
         "coordinates": [-75.6916809, 45.4186964]
     },
     "properties": {
         "prop0": "Ceci est un point"
     }
 }]
}
```

</details>

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [HTMLLayerElement](https://maps4html.org/MapML-Specification/spec/#dom-htmllayerelement) |

---

## Exigences

[Signaler les problèmes liés à ces exigences sur GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">exigence</span>
<span class="enhancement">amélioration</span>
<span class="impractical">peu pratique</span>
<span class="undecided">indécis</span>
<span class="discussion">en cours de discussion</span></b></p>

|  | Spec | Viewer | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Propriétés**](#propriétés) | complet | complet | complet |
| [**Méthodes**](#méthodes) | complet | complet | complet |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/layer-api.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
