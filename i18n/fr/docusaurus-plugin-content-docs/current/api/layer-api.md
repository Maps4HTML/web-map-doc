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
HTMLLayerElement.hidden est une valeur booléenne de lecture et d’écriture qui ne masque ou n’affiche la couche qu’au niveau du contrôle de la couche. Masquer la couche n’a aucune incidence sur la présence de son contenu sur la carte, seulement sur le contrôle de la présence de la couche. 
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
HTMLLayerElement.disabled donne un accès en lecture seule à l’état désactivé de la couche. Une couche est désactivée si son contenu n’est pas rendu, soit parce qu’il sort complètement de l’étendue de la carte affichée ou parce qu’une erreur est associée au traitement de la couche, par exemple lorsque celle-ci se trouve dans un projection incompatible avec celle de la carte. Lorsqu’une couche est désactivée, l’utilisateur ne peut interagir avec elle au niveau du contrôle de la couche, et elle n’est pas visible dans la fenêtre d’affichage de la carte. Si la couche devient activée, par exemple à la suite d’une manipulation de la carte, l’utilisateur peut interagir avec elle au niveau du contrôle de la couche, et elle est visible dans la fenêtre d’affichage de la carte.

---

HTMLLayerElement.label donne un accès en lecture et en écriture à l’étiquette utilisée au niveau du contrôle de la couche.

Pour définir la label de `<layer->` ou mettre à jour celle-ci :

:::Mise en garde
Cette fonction n’est pas encore mise en œuvre. Ne met pas à jour l’étiquette au niveau du contrôle de la couche à l’heure actuelle.
:::

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
HTMLLayerElement.src reproduit l’attribut HTML src et précise l’adresse URL du document MapML de la couche. La propriété src peut ne pas être définie si la couche contient du contenu en ligne. Si la propriété src retourne une valeur, tout contenu en ligne est omis.
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
HTMLLayerElement.opacity donne accès en lecture ou en écriture au pourcentage (%) d’opacité, qui correspond à la position du curseur dans le contrôle de la couche.

Pour définir ou mettre à jour l’opacité de `<layer->` :

```js
let layer = document.querySelector('layer-');
layer.opacity = 0.5; // les valeurs valides vont de 0 à 1
```

Pour obtenir la valeur de l’opacité de `<layer->` :

```js
let layer = document.querySelector('layer-');
let opacity = layer.opacity;
```

---
## Méthodes

### focus()
HTMLLayerElement.focus() effectue un zoom sur l’étendue de la couche. Remarque : le nom de cette méthode est erroné et sera corrigé, conformément à [ce problème](https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/587).


Pour que l’étendue de la couche corresponde le plus possible à celle de la carte :

```js
let layer = document.querySelector('layer-');
layer.focus();
```
---

## Événements

| Nom de l’événement      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| changestyle     | Déclenché avant que la couche ne change de src parce que l’utilisateur a sélectionné un autre style au niveau du contrôle de la couche |
| changeprojection | Déclenché avant que la couche ne change de projection parce que la projection déclarée n’est pas égale à celle de la carte |
| extentload | Déclenché lorsque les métadonnées d’une couche ont été chargées, mais avant le chargement des pavés, des caractéristiques et de tout autre contenu |
---
