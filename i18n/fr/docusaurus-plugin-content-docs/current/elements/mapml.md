---
id: mapml
title: "<mapml->"
slug: /elements/mapml/
---

L’élément `<mapml->` est la racine d’un document MapML (avec une extension de fichier .mapml) et il représente une couche. Un document MapML peut être extrait comme ressource distante à partir de l’URL de l’attribut source `<layer- src="..."></layer->` :

```html
<layer- label="Ma couche" src="https://example.org/mapml/mylayer" checked></layer->
```

Un élément `<mapml->` indique que le document se trouve dans l’espace de noms xhtml, et 
il doit contenir un élément `<map-head>`, suivi d’un élément `<map-body>`.

<iframe src="../../../demo/mapml-demo/" title="Démo en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

<details>
<summary>Cliquez pour voir le contenu de « ../data/osm.mapml » dans la démonstration au-dessus de </summary>

``` html
<mapml- xmlns="http://www.w3.org/1999/xhtml">
  <map-head>
    <map-title>OpenStreetMap</map-title>
    <meta http-equiv="Content-Type" content="text/mapml;projection=OSMTILE"/>
    <meta charset="utf-8"/>
    <map-link rel="license" href="https://www.openstreetmap.org/copyright" title="© OpenStreetMap contributors CC BY-SA"></map-link>
  </map-head>
  <map-body>
    <map-extent units="OSMTILE" checked="checked" hidden="hidden">
      <map-input name="z" type="zoom"  value="18" min="0" max="18"></map-input>
      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>
      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>
      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png" ></map-link>
    </map-extent>
  </map-body>
</mapml->
```

</details> 


## Attributes

### `lang`

L’attribut `lang` définit le langage principal du document MapML, comme le définit l'élément HTML [ici](https://html.spec.whatwg.org/multipage/dom.html#attr-lang).

### `xmlns`

L’attribut `xmlns` est **requis**, et il doit avoir la valeur `"http://www.w3.org/1999/xhtml"`.

---

## Éléments enfants

### `<map-head>`

L’élément `<map-head>` est le premier élément enfant de l’élément `<mapml->`. Il contient les métadonnées du document MapML.

#### Éléments enfants
  - `<map-title>`
    - L’élément titre devrait constituer le seul et unique élément de titre compris dans l’élément de tête. Il devrait contenir une chaîne de texte fournissant une description du document. Il peut être utilisé comme titre de signet.
  - `<map-base>`
    - L’élément « base » sert à déterminer l’URL qui servira d’URL de base afin de résoudre les URL relatives plus loin dans le document.
    - Un document MapML doit contenir un seul élément `<map-base>`  et celui-ci doit être inclus dans le contenu de l’élément `<map-head>` avant tout élément MapML susceptible de porter une URL aux fins de résolution, notamment l’élément `<map-link>`.
  - `<map-meta>`
    - L’élément « meta » décrit les métadonnées comprises dans un document MapML. Vous trouverez plus de détails sur l’élément « meta » et sa syntaxe [ici](../meta/).
  - `<map-link>`
    - L'élément « link » décrit les liens de métadonnées dans un document MapML. Vous trouverez plus de détails sur l’élément « link » et sa syntaxe [ici](../link/).

---

### `<map-body>`

L’élément `<map-body>` est le deuxième enfant de l’élément `<mapml->`. Il représente le contenu de l’élément MapML. Cet élément contient les [entités](../feature/) et les métadonnées du document MapML.

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « mapml »](https://maps4html.org/MapML/spec/#the-mapml-element-0) |
 
---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/mapml.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
