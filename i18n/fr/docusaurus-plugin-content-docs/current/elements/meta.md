---
id: meta
title: "<map-meta>"
slug: /elements/meta/
---

L’élément `<map-meta>` est un élément HTML étendu `meta` utilisé dans les cartes Web.

<!-- démo/exemple -->
<iframe src="../../../demo/map-meta-demo/" title="Démo en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributs 

### `name`

L’attribut `name` indique le type de métadonnées définies. Les valeurs possibles de l’attribut `name` dans une carte sont les suivantes :


| Nom          | Description                                          	  |
|--------------	|--------------------------------------------------------	|
| projection    | Établit la [projection](../mapml-viewer/#projection) for the document |
| extent        | Définit les limites du document en ce qui a trait aux mots-clés situés dans les coins et aux noms des axes, et peut comprendre une valeur de zoom, au besoin (selon le système de coordonnées). |
| cs            | Indique le système de référence de coordonnées par défaut des chaînes de coordonnées qui se trouvent dans le document. |
| zoom          | Indique les valeurs minimale et maximale de la plage de zoom et la valeur de zoom par défaut pour afficher le contenu du document. La plage de zoom ‘native’ du [contenu modélisé d’une carte](../link#tref) est précisée par les attributs min/max des [entrées de zoom](../input#type) connexes. Si le contenu modélisé n’est pas décrit par les attributs min/max/value des entrées de zoom connexes, les valeurs précisées dans un élément `<map-meta name=zoom>`, s’il y a lieu, serviront de solution de rechange. Si aucun élément `<map-meta name=zoom>` n’existe, les valeurs min/max correspondantes de la projection seront utilisées. |

---
### `content`

| `name`          | `content` valeur                                          	  |
|--------------	|--------------------------------------------------------	|
| projection    | [Nom de la projection] sensible à la casse (../mapml-viewer#projection), ou [nom de la projection personnalisée](../../api/custom-projections#details) |
| extent        | \(\(_[position keyword](../input#position)_\)-\(_[axis name](../input#axis)_\)=\(_axis value_\)\(,\)\)4\(,\)\(zoom=\(_zoom value_\)\)0,1 |
| cs            | [Abréviation du système de coordonnées] sensible à la casse](../input#units). |
| zoom          | (min=_valeur de zoom minimale_,max=_valeur de zoom maximale_,)(value=_valeur de zoom actuelle_) |

---

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| [Catégories de contenu](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories) | [Contenu de métadonnées](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content) |
| Contenu autorisé | Aucun, il s’agit d’un [élément vide](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element).  |
| Omission de balises | Bien que l’élément HTML `<meta>` soit un élément vide, le polyfill `<map-link>` doit avoir une balise de fin. |
| Parents autorisés | En ligne : élément `<layer->`. Dans un document MapML : élément `<map-head>`. |
| Rôle ARIA implicite | [Aucun rôle correspondant](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role) |
| Rôles ARIA autorisés | Aucun rôle autorisé |
| DOM interface | [HTMLMetaElement extension](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement) |

---

## Exemples

### Réglage du zoom

Utiliser l’élément `<map-meta>` pour préciser la plage de zoom natif et de zoom alternatif pour un élément `<map-feature>`.
Le codage des coordonnées de l’entité est strictement déterminé par l’attribut `<map-geometry cs="gcrs">`, lequel indique au polyfill comment analyser et traiter les chaînes de coordonnées comprises dans les éléments descendants `<map-coordinates>`.



```html
<layer- label="Restaurant préféré" checked>
  <map-meta name="projection" content="OSMTILE"></map-meta>
  <map-meta name="zoom" content="min=0,max=22,value=3"></map-meta>
  <map-feature>
    <map-featurecaption>Big Daddy's Crab Shack</map-featurecaption>
      <map-geometry cs="gcrs">
          <map-point>
            <map-coordinates>-75.690276 45.41868</map-coordinates>
          </map-point>
      </map-geometry>
  </map-feature>
</layer->
```

### Réglage de la portée 

Utiliser l’élément `<map-meta>` pour établir la **portée** pcrs (easting,northing) d’une couche de carte, dont les coordonnées sont codées en tant que paires du système gcrs. 
 

```html
<layer- label="Restaurant préféré" checked>
  <map-meta name="projection" content="OSMTILE"></map-meta>
  <map-meta name="zoom" content="min=0,max=22,value=3"></map-meta>
  <map-meta name="extent" content="top-left-easting=-8433179, top-left-northing=5689316, bottom-right-easting=-8420968,bottom-right-northing=5683139"></map-meta>
  <map-feature>
    <map-featurecaption>Big Daddy's Crab Shack</map-featurecaption>
      <map-geometry cs="gcrs">
          <map-point>
            <map-coordinates>-75.690276 45.41868</map-coordinates>
          </map-point>
      </map-geometry>
  </map-feature>
</layer->
```

### Variable alternative cs pour &lt;map-geometry&gt;

Utiliser l’élément `<map-meta>` pour préciser le codage des coordonnées alternatives dans la couche.
Le codage des coordonnées est indiqué à l’aide de l’élément `<map-meta name="cs" content="gcrs">`. 
Une telle déclaration indique au polyfill comment analyser et traiter les coordonnées n’ayant pas de déclaration de codage des coordonnées alternatives ancêtres `<map-geometry cs="">`. Il est à noter que le niveau de zoom auquel l’entité devrait être affiché, et l'entité, n’est pas précisé.
Ces deux valeurs reviendront aux valeurs par défaut de la projection.
 

```html
<layer- label="Restaurant préféré" checked>
  <map-meta name="projection" content="OSMTILE"></map-meta>
  <map-meta name="cs" content="gcrs" ></map-meta>
  <map-feature>
    <map-featurecaption>Big Daddy's Crab Shack</map-featurecaption>
      <map-geometry>
          <map-point>
            <map-coordinates>-75.690276 45.41868</map-coordinates>
          </map-point>
      </map-geometry>
  </map-feature>
</layer->
```

### Métadonnées par défaut

Permet à toutes les valeurs de métadonnées de correspondre par défaut à celles de la projection de la carte. L’entité sera affichée à tous les niveaux de zoom et les coordonnées sont interprétées par défaut comme des coordonnées du `gcrs` (longitude et latitude). 

La portée de la couche correspond par défaut à celle de la projection.


```html
<layer- label="Restaurant préféré" checked>
  <map-feature>
    <map-featurecaption>Big Daddy's Crab Shack</map-featurecaption>
      <map-geometry>
          <map-point>
            <map-coordinates>-75.690276 45.41868</map-coordinates>
          </map-point>
      </map-geometry>
  </map-feature>
</layer->
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « meta »](https://maps4html.org/MapML/spec/#the-meta-element-0) |
| [Élément HTML « meta »](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element) |
---

## Exigences


Les exigences doivent être consignées.

---

## Voir aussi



---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/meta.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)

