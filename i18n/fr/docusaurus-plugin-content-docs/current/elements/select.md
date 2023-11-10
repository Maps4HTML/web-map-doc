---
id: select
title: "<map-select>"
slug: /elements/select/
---

L’élément `<map-select>` est une extension de l’élément HTML `<select>`. Il est utilisé comme enfant de l’élément `<map-extent>`. L’élément `<map-select>` déclare une variable avec des éléments prédéfinis `<map-option>’s`, lesquels sont sélectionnés dans le contrôle des couches et utilisés par le polyfill.

L’élément `<map-select>` contient un ou plusieurs éléments `<map-option>`.

<iframe src="../../../demo/map-select-demo/" title="Démo en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

:::tip

Pour visualiser les données selon différents horodatages, modifiez l’option `<map-select>` dans le contrôle des couches.

:::

## Attributs 

### `name`
Définit le nom de la variable créée par l’entrée. La variable peut ensuite être référencée par le modèle URL `<map-link>` [tref attribute](../link#tref), à l’aide de la notation de référence de la variable `{name}`. 
 


---

### `id`
Définit l’ID de l’élément `<map-select>`, lequel indique l’élément sélectionné dans le document actuel.

---

## Éléments enfants 

### `<map-option>`

Cet élément contient les options de l’élément `<map-select>`. Un élément `<map-select>` peut contenir un ou plusieurs éléments `<map-option>`.

---

## Exemples

### Changer de source de carte
```html
<mapml-viewer projection="OSMTILE" zoom="2" lat="65" lon="-90" controls="">
  <layer- label="Carte de base" checked>
    <map-extent units="OSMTILE" checked>
      <map-input name="z" type="zoom"  value="18" min="0" max="18"></map-input>
      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>
      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>
      <map-link rel="license" href="https://www.openstreetmap.org/copyright" title="OpenStreetMap"></map-link>
      <map-link rel="license" href="https://www.openstreetmap.bzh/" title="Équipe OpenStreetMap Breton"></map-link>
      
      <map-select id="urlOptions" name="source">
        <map-option value="tile.openstreetmap.bzh/br">OpenStreetMap_BZH</map-option>
        <map-option value="tile.openstreetmap.org">OpenStreetMap_Mapnik</map-option>    
      </map-select>
      
      <map-link rel="tile" tref="https://{source}/{z}/{x}/{y}.png" ></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « style »](https://maps4html.org/MapML/spec/#the-select-element-0) |
| [Élément HTML « style »](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) |

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
| [**Cas d'utilisation des auteurs de contenu (3.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#content-author-use-cases) |  |  |  |
| <div class="undecided"> Fournir des couches cartographiques alternatives que l'utilisateur peut sélectionner (3.1.9)</div>             | complet | complet |  |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/select.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
