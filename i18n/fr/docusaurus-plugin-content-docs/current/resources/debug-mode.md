---
id: debug-mode
title: Mode débogage
slug: /resources/debug-mode
---

Cette fonction permet de déboguer la carte et le système de coordonnées de la carte. Elle permet d’ajouter les éléments visuels suivants à une carte : contours de pavés, centre de projection et étendues des couches. Elle contient aussi un volet de débogage qui indique l’emplacement actuel du pointeur de la souris dans les différents systèmes de coordonnées.

![Carte en mode débogage](../assets/img/debug.png)

- Le trait pointillé rouge représente les limites de pavés selon le niveau de zoom actuel.
- Le trait plein rouge représente l’étendue de la couche. Si la carte contient plusieurs couches, le trait plein peut être de différentes couleurs.
- Le volet inférieur gauche indique l’emplacement actuel du pointeur de la souris.

## Accès au mode de débogage 

### Menu contextuel de la carte

Le mode de débogage peut être activé dans le menu contextuel de la carte (right-click or Shift-F10):

![La carte en mode débogage](../assets/img/toggle-debug.gif)


### API de la carte 

Le mode de débogage peut aussi être activé à partir de l’API du visualiseur. Voir la méthode [`toggleDebug()` ](../api/mapml-viewer-api.md#toggledebug) pour en savoir plus.
