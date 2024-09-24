---
id: layer
title: "<map-layer>"
slug: /elements/layer/
---

Les cartes sont composées d’une ou de plusieurs couches. Ces couches sont appliquées par l’élément personnalisé `<map-layer>`.
Tout le contenu `<mapml-viewer>` est compris dans un ou plusieurs éléments `<map-layer>`, en ligne ou extraits à distance, qui représentent le contenu de la couche.

```html
<map-layer label="Ma couche" checked>
  ...le contenu de la couche s’affiche ici...
</map-layer>
```

`<map-layer>` n’est pas un élément ‘void’  – il doit être fermé par une balise `</map-layer>`.

Le contenu de la carte peut être en ligne, comme il est illustré ci-dessous – entre les balises de début `<map-layer>` et de fin `</map-layer>` – ou extrait, à partir de l’URL de l’attribut source `<map-layer src="..."></map-layer>` :

```html
<map-layer label="Ma couche" src="https://example.org/mapml/mylayer" checked></map-layer>
```

<iframe src="../../../demo/layer-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

Le présent document utilise principalement la convention du contenu en ligne. Le contenu extrait d’une carte suit une sémantique similaire, à la différence qu’il est analysé par l’analyseur XML du navigateur et qu’il doit donc suivre les conventions applicables aux documents MapML ainsi que les [règles de syntaxe XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction).

## Attributs

### `src`

Contient le chemin d’accès vers un document MapML.

---

### `checked`

L’attribut `<map-layer checked>` et la valeur « property » sont boolean. Si elle est présente, la valeur « property » vérifiée est considérée comme ‘true’; si elle n’est pas présente, la valeur « property » est 'false'. Notez que c’est la _présence_ de l’attribut qui fait que la valeur est « true », et non la valeur de l’attribut. Par exemple, l’attribut `checked="false"` s’avère en fait être « checked », [comme il est décrit dans MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes).

---

### `hidden`

L’attribut `<map-layer hidden>` et la valeur « property » sont boolean. Si elle est présente, la couche est masquée dans le contrôle des couches.

---

### `label`

Le contenu en ligne utilise l’attribut  `label` comme étiquette de texte affichée de la couche dans le contrôle des couches. Dans le contenu extrait, l’attribut `label` est ignoré, et l’élément extrait `<map-title>` est utilisé.

---

### `media`

L'attribut `media` est utilisé pour exprimer les conditions de média de carte sous lesquelles le contenu de la couche doit être utilisé (si un contenu en ligne est présent) ou chargé à partir de l'URL spécifiée dans l'attribut `src`, si cet attribut est présent. Les conditions de média de carte sont évaluées à `true` ou `false`. 
Une couche pour laquelle la condition de média de carte est évaluée à `false` est, par défaut, masquée. 
Une couche pour laquelle la condition de média de carte est évaluée à `true` est ajoutée à la carte selon son attribut `checked` et est ajoutée au contrôle des couches en fonction de son attribut `hidden`.

Les requêtes de média de carte peuvent inclure des propriétés de la carte comme documenté dans l'API [matchMedia](../../api/mapml-viewer-api#matchmedia).

---

### `opacity`

L'attribut `opacity` définit l'opacité initiale de l'élément `<map-layer>`. Les valeurs d'`opacity` valides vont de "0.0" à "1.0" et sont reflétées dans le contrôle de couche
sous "Opacité" pour chaque couche. Lorsque l'attribut `opacity` n'est pas présent, l'opacité est fixée à "1.0" par défaut.

---

## Exemples

### Opacité de couche

L'exemple suivant définit l'`opacity` initiale d'un élément `<map-layer>`, à 0,5 sur 1,0. 

```html
<mapml-viewer projection="CBMTILE" zoom="2" lat="45" lon="-90" controls>
      <map-layer opacity="0.5" label="CBMT" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></map-layer>
</mapml-viewer>
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « layer »](https://maps4html.org/MapML-Specification/spec/#the-layer-element-0) |

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
| <div class="enhancement">Afficher un fichier image en tant que couche d’une carte (5.1.3)</div> | [en cours d’examen](https://github.com/Maps4HTML/MapML-Specification/issues/216) | [limité](http://maps4html.org/experiments/painting/) |  |
| [**Navigation des utilisateurs (vue panoramique et zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
| <div class="discussion">Maintenir une échelle raisonnable pour les étiquettes et les lignes lors d’un zoom (5.4.5)</div> | limité | complet |  |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/layer.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
