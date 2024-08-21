---
id: map-extent-api
title: "HTMLExtentElement"
slug: /api/map-extent-api
---

# HTMLExtentElement

## Propriétés

### units

La propriété `units` est en lecture seule et renvoie la valeur initiale de 
[l'attribut de contenu `units`](../elements/extent/#units).

---

### checked

`HTMLExtentElement.checked` est une valeur booléenne en lecture/écriture qui 
active ou désactive le map-extent, et reflète l'attribut `checked`. L'état 
`checked` est reflété dans l'interface utilisateur du contrôle de couche pour le 
map-extent, s'il n'est pas dans l'état `hidden`, via une case à cocher à côté du 
nom du map-extent.  La propriété "checked" peut être utilisée pour modifier par 
programme l'état `checked` de l'étendue.  La propriété checked ne peut pas être 
modifiée si la propriété disabled est définie.

Pour activer l'état `checked` d'un map-extent :

```js
let extent = document.querySelector('map-extent');
extent.checked = true; // valid values are true | false
```

To read the checked state of the map-extent:

```js
let extent = document.querySelector('map-extent');
let isChecked = extent.checked;
```
---

### hidden

`HTMLExtentElement.hidden` est une valeur booléenne en lecture/écriture qui cache 
ou dé-cache le map-extent map-extent dans le contrôle de couche uniquement.  
L'état `hidden` n'a pas de rapport avec la présence du contenu du map-extent sur 
la carte, il n'affecte que la présence du map-extent dans le contrôle des couches. 
Cela peut être utile pour simplifier la représentation du contrôle des couches 
d'une couche parentale contenant un seul map-extent, sans encombrer l'interface 
utilisateur. 

Permet de définir/mettre à jour si l'étendue de la carte est cachée dans le 
contrôle de la couche :

```js
let extent = document.querySelector('map-extent');
extent.hidden = true; // valid values are true | false
```

Pour obtenir la valeur cachée de `<map-extent>` :

```js
let extent = document.querySelector('map-extent');
let isHidden = extent.hidden;
```
---

### disabled

`HTMLExtentElement.disabled` fournit un accès en mode READ-ONLY à l'état désactivé 
de l'élément map-extent.  Un map-extent devient désactivé si son contenu n'est pas 
rendu, soit parce qu'il est complètement en dehors des limites du map-extent 
actuel, soit parce qu'une erreur est associée au au traitement du map-extent, 
telle qu'une projection incompatible avec la projection de la carte. Lorsqu'un 
map-extent est désactivé, l'utilisateur peut toujours interagir avec lui d'une 
certaine manière dans le contrôle de couche, mais il ne sera pas visible dans la 
fenêtre de visualisation de la carte.  Si un map-extent est activé, à la suite 
d'une manipulation de la carte, par exemple, le map-extent deviendra totalement 
interactif dans le contrôle de couche, et devrait être visible dans la fenêtre 
d'affichage de la carte (bien que difficile à voir, en fonction de l'opacité et 
de la taille de l'élément, entre autres considérations). 

---

### label

`HTMLExtentElement.label` reflète l'attribut de contenu `label` et spécifie un 
nom accessible de repli pour l'étendue dans le contrôle de couche. Si l'attribut 
de contenu  n'est pas fourni, une variante internationalisée de "Sub-Layer" sera 
renvoyée comme valeur par défaut.

Pour définir/mettre à jour l'étiquette de `<map-extent>` :

```js
let extent = document.querySelector('map-extent');
extent.label = "New Accessible Name";
```

Pour obtenir la valeur de l'étiquette de `<map-extent>` :

```js
let extent = document.querySelector('map-extent');
let label = extent.label;
```
---

### opacity

`HTMLExtentElement.opacity` fournit un accès en mode lecture/écriture à la valeur 
`opacity`, et est reflétée dans le contrôle de couche pour chaque map-extent, sous 
"Opacity". Si aucun attribut de contenu attribut `opacity` n'est défini, 
l'attribution de la propriété `opacity` ne créera pas pas l'attribut, mais 
l'opacité  du contenu sur la carte et dans la représentation du contrôle de 
couche (entrée du curseur) sera modifiée.

Pour définir/mettre à jour l'opacité de `<map-extent>` :

```js
let extent = document.querySelector('map-extent');
extent.opacity = 0.5; // valid values from 0 to 1
```

Pour obtenir la valeur d'opacité de `<map-extent>` :

```js
let extent = document.querySelector('map-extent');
let opacity = extent.opacity;
```

---
## Méthodes

---

## Evénements

| Nom de l'événement      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
|  |  |
---

## Exemples

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [HTMLExtentElement](https://maps4html.org/MapML-Specification/spec/#dom-htmlextentelement) |

---

## Exigences

[Signaler les problèmes liés à ces exigences sur GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-RÉSUMER+LE+PROBLÈME-&body=-DÉCRIRE+LE+PROBLÈME-)

<p><b><span class="requirement">exigence</span>
<span class="enhancement">amélioration</span>
<span class="impractical">peu pratique</span>
<span class="undecided">indécis</span>
<span class="discussion">en cours de discussion</span></b></p>

|  | Spéc. | Visualiseur | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Propriétés**](#propriétés) | complet | complet | complet |
| [**Méthodes**](#méthodes) | s/o | s/o | s/o |
| [**Evénements**](#evénements) | s/o | s/o | s/o |
---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/map-extent-api.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
