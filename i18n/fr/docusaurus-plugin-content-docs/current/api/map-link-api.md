---
id: map-link-api
title: HTMLLinkElement
slug: /api/map-link-api
---

L’interface de programmation d’applications (API) de rendu personnalisé permet aux développeurs de contourner la fonction de rendu de MapML et de dessiner ce qu’ils veulent sur la carte, à condition que cela fasse partie du domaine HTML.

## Pavés personnalisés

Pour effectuer le rendu de pavés personnalisés avec JavaScript, écoutez l’événement `tileloadstart` sur un élément `<map-link rel="tile">` d’une couche produite suivant un modèle.

### Événement `tileloadstart` 

Cet événement est déclenché à la création d’un pavé, et contient la structure suivante dans sa propriété des détails :
```js
{
  x: 1,    // valeur x de tilematrix du pavé chargé
  y: 2,    // valeur y de tilematrix du pavé chargé
  zoom: 3, // niveau de zoom du pavé chargé
  appendTile: function appendTile ( customTile ) {...} // transmet le pavé personnalisé comme un argument de fonction
}
```


### Exemple :

La carte :
```html
<mapml-viewer projection="OSMTILE" zoom="0" lat="45" lon="-75" controls>
  <layer- label="pavés personnalisés" checked>
    <map-meta name="zoom" content="min=0,max=23" ></map-meta>
    <map-extent units="OSMTILE">
      <map-input name="zoomLevel" type="zoom" min="0" max="23" value="1" ></map-input>
      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" ></map-input>
      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" ></map-input>
      <!—écoutez l’événement tileloadstart sur cet élément -->
      <map-link rel="tile" title="" tref="" ></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```


Script Java pour créer des pavés personnalisés :
```js
let layer = document.querySelector("body > mapml-viewer > layer- > map-extent > map-link");
    layer.addEventListener("tileloadstart", (e) => {
      let customTile = document.createElement("p");
      customTile.innerHTML = `x: {e.detail.x} y: {e.detail.y} zoom: {e.detail.zoom}`;
      e.detail.appendTile(customTile);
    });
```

Dans cet exemple, `customTile` est une balise HTML `<p>`, mais vous  pouvez utiliser n’importe quel élément HTML. Il suffit d’ajouter l’élément créé avec la fonction `(tileloadstart event).detail.appendTile()`, ce qui transmet le pavé personnalisé en argument de la fonction.


## Image personnalisée

:::important
À mettre en œuvre.
:::
