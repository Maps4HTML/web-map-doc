---
id: map-a
title: "<map-a>"
slug: /other-elements/map-a/
---

L'élément `<map-a>` propose d'étendre la page Web afin d'inclure des liens entre les cartes et les emplacements.
Cet élément permet d’encapsuler des portions de coordonnées ou des géométries complètes, de manière à créer un lien à partir de la zone ou du lieu encapsulé. Si une géométrie d’entité ou une partie de géométrie est encapsulée dans un élément `<map-a>`, un trait bleu d’une largeur d’un pixel est tracé autour de l’entité (par défaut) pour indiquer à l’utilisateur qu’il s’agit d’une « entité liée ».

<iframe src="../../../demo/map-a-demo/" title="Démonstration en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributs

### `href`
  - L’URL vers laquelle mènent les points de localisation encapsulés. Note : Si l’attribut `type` de l’élément `<map-a>` correspond à text/mapml, vous pouvez fournir des fragments (voir plus bas pour en savoir plus sur les fragments).

---

### `target`
  - L’URL liée s’affichera ici. Voir le tableau ci-dessous pour obtenir plus de détails.
  - Affiche par défaut la valeur `_self` en l’absence d’une valeur valide.

---

### `type`
  - Type MIME du format de l’URL liée. Les choix possibles sont `text/html` et `text/mapml`.
  - Affiche par défaut la valeur `text/mapml` en l’absence d’une valeur `type` valide.

---

### `inplace`
  - L’attribut `inplace` est un attribut booléen  - `<map-a inplace href="..."><map-a>`
  - S’il est utilisé, le comportement de modification de la vue par défaut est ignoré et la vue de la carte n’est pas modifiée.

---

## Comportement cible pour `text/mapml`

| Valeur cible 	| Comportement                                              	|
|--------------	|-------------------------------------------------------	|
| _self        	| Remplace la couche actuelle par la couche de l’URL liée.	|
| _blank       	| Ajoute la couche de l’URL liée à la carte.                 	|
| _parent      	| Remplace toutes les couches par la couche de l’URL liée.     	|
| _top         	| Sert à parcourir la page Web jusqu’à l’URL liée.               	|

---

## Comportement cible pour `text/html`

| Valeur cible 	| Comportement                                	|
|--------------	|-----------------------------------------	|
| _self        	| Sert à parcourir la page Web jusqu’à l’URL liée. 	|
| _blank       	| Sert à ouvrir l’URL liée dans un nouvel onglet.       	|
| _parent      	| Sert à parcourir la page Web jusqu’à l’URL liée. 	|
| _top         	| Sert à parcourir la page Web jusqu’à l’URL liée. 	|

---

## Fragments de lieu

Si la valeur de l’attribut `type` correspond à `text/mapml`, vous pouvez ajouter un fragment de lieu à l’URL. Ce fragment permet d’afficher une vue panoramique du lieu donné et de faire un zoom sur celui­ci.

Les formats des fragments sont les suivants : `#zoom, longitude, latitude`.

Les URL définies uniquement en fonction des fragments de lieu permettent d’afficher une vue panoramique de la carte et de faire un zoom sur le lieu donné, peu importe la valeur cible.
C.-à-d. `<map-a href="#1, 20, 30">...</map-a>` déplacera la carte vers la latitude 30 et la longitude 20, et effectuera un zoom jusqu’au niveau 1.

---

## Exemples

### Modifier le style d’une entité liée

Pour modifier le style d’entités liées, ciblez simplement la classe `map-a` dans votre feuille de style en cascade (CSS). Après avoir cliqué sur un lien, vous pouvez cibler la classe `map-a-visited`. Voir l’exemple ci-dessous :

```html
<layer->
  <map-style>
    .map-a {
      stroke: red;
    }
    .map-a-visited {
      stroke: green;
    }
  </map-style>
  <map-feature>
    <map-properties>
      <h1>Basic</h1>
    </map-properties>
    <map-geometry>
      <map-a href="../externalMapML.mapml#2,-98,37">
        <map-polygon>
          <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192 2771 3106</map-coordinates>
        </map-polygon>
      </map-a>
    </map-geometry>
  </map-feature>
</layer->
```

### Encapsuler un type d’entités + un fragment de lieu

```html
<map-feature>
  <map-properties>
    <h1>Élémentaire</h1>
  </map-properties>
  <map-geometry>
    <map-a href="../externalMapML.mapml#2,-98,37">
      <map-polygon>
        <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192 2771 3106</map-coordinates>
      </map-polygon>
    </map-a>
  </map-geometry>
</map-feature>
```

Permet de remplacer la couche actuelle par la couche contenue dans externalMapML.mapml. Une fois que cette couche est ajoutée, la carte effectuera un zoom jusqu’au niveau 2 et se déplacera à la longitude -98 et à la latitude 37.

### Encapsuler des coordonnées de point avec `target="_blank"` 

```html
<map-feature>
  <map-properties>
    <h1>_blank cible</h1>
  </map-properties>
  <map-geometry>
    <map-polygon>
      <map-coordinates>2771 3106 2946 3113 <map-a href="file.mapml" target="_blank"> 2954 3210 </map-a> 2815 3192 2771 3106</map-coordinates>
    </map-polygon>
  </map-geometry>
</map-feature>
```

Dans cet exemple, un point sera créé à (2954, 3210). Une fois que vous aurez cliqué sur ce point, une nouvelle couche sera ajoutée à la carte.

### Définition et comportement d’un élément `<map-a>` imbriqué.

```html
<map-feature>
  <map-properties>
    <h1>Exemple avancé</h1>
  </map-properties>
  <map-geometry>
    <map-a href="parent.mapml" target="_blank">
      <map-multipolygon>
        <map-polygon>
          <map-coordinates>2771 3106 2946 3113 <map-a href="webpage.html" target="_blank" type="text/mapml"> 2954 3210 </map-a> 2815 3192 2771 3106</map-coordinates>
        </map-polygon>
        <map-a href="nested.mapml" target="_top">
          <map-polygon>
            <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>
          </map-polygon>
        </map-a>
      </map-multipolygon>
    </map-a>
  </map-geometry>
</map-feature>
```
Cet exemple avancé contient plusieurs éléments `<map-a>` imbriqués. Le comportement simple est le suivant : l’élément  `<map-a>` le plus près constitue le comportement du lien qui sera adopté par le lieu/la zone.

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [HTML a element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) |

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
| [**Entités vectorielles et superpositions (5.2)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-vectors) |  |  |  |
|                 <div class="requirement"> Prend en charge les hyperliens des marqueurs ou des entités vectorielles (5.2.3)</div>             | complet | complet |  |
| [**Interpréter les lieux et les positions sur une carte (5.3)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-locations) |  |  |  |
|           <div class="requirement">Sélectionner la vue d’une carte à partir d’un point de latitude et de longitude (5.3.1)</div>             | complet | complet | [full](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#zoomtolat-lon-zoom) |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/map-a.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
