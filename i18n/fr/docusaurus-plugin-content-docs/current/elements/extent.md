---
id: extent
title: "<map-extent>"
slug: /elements/extent/
---

L’élément `<map-extent>` est un contrôle hypertexte associé au rectangle de la fenêtre d’affichage de la carte, rectangle qu’il représente aux yeux de l’utilisateur. Les auteurs de cartes l’utilisent pour rédiger des requêtes destinées aux serveurs dans le but d’obtenir le contenu d’une couche. Les requêtes sont créées au moyen de modèles d’adresse URL que traite le navigateur alors que la carte bouge et a besoin d’un nouveau contenu à afficher. Les modèles d’adresse URL contiennent chacun une ou plusieurs références de variable, chacune étant indiquée par le nom de la variable entre accolades `{}`.

Les variables sont créées par l’auteur de la carte au moyen de l’élément `<map-input>`. Il dispose de plusieurs types d’éléments `<map-input>`, ce qui lui permet de référencer les coins, la largeur, la hauteur et le niveau de zoom de l’étendue.

Exemple d’un élément `<map-extent>` servant à charger des pavés d’images avec un seul modèle d’adresse URL.

```html
<mapml-viewer projection="OSMTILE" lat="10" lon="0" zoom="1">
  <layer- label="OpenStreetMap" checked>
    <map-extent units="OSMTILE">
      <map-input name="z" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="x" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="y" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

<iframe src="../../../demo/extent-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributes

### `units`

Précise la projection des pavés et tout autre contenu que le serveur doit fournir. Si la valeur de la projection ne correspond pas lettre pour lettre en majuscules et minuscules à celle de l’attribut `projection` de l’élément `<mapml-viewer>`, la couche est désactivée au niveau de son contrôle et ne s’affiche pas sur la carte, et le contenu n’est pas récupéré dans le serveur.

Les valeurs d’`units` définies comprennent :

| Projection     	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| OSMTILE       | Web Mercator, avec des pavés de 256 pixels par 256 pixels, définis de façon récursive et délimités dans un carré à un niveau de zoom = 0|
| WGS84         | Pseudo-plate carrée, avec des pavés de 256 pixels par 256 pixels. Un niveau de zoom égal à 0 contient deux pavés dans deux colonnes, avec vcmme origine -180,90. Les valeurs fictives d’abscisse et d’ordonnée (pcrs) à l’intérieur des limites de la projection correspondent respectivement à la longitude et à la latitude. |
| CBMTILE       | Conique conforme de Lambert, avec des pavés de 256 pixels par 256 pixels. Les niveaux de zoom étant choisis par le dénominateur d’échelle, les pavés ne sont pas imbriqués.|

L’auteur peut définir la valeur d’`units` à l’aide de l’[Custom projections API](../../api/mapml-viewer-api/#definecustomprojectionoptions)

---

### `label`

Précise l’étiquette d’une étendue affichée au niveau du contrôle de la couche. Si aucune `label` n’est fournie, l’étendue est masquée par défaut au niveau du contrôle de la couche.

---

### `opacity`

L'attribut `opacity` est utilisé pour définir l'opacité initiale de l'élément `<map-extent>`.
Les valeurs d'opacité valides vont de "0.0" à "1.0" avec strictement une décimale et sont reflétées dans les paramètres d'étendue.
opacity input slider control. Lorsque l'attribut `opacity` n'est pas présent, l'opacité est fixée à "1.0" par défaut.

---

## Exemples

### Étendues multiples

L’exemple ci-dessous montre plusieurs éléments `<map-extent>` dans un couche. Chacun d’eux peut être sélectionné en cliquant sur les points de suspension (…) du menu de la couche de la carte de base.

```html
<mapml-viewer projection="OSMTILE" zoom="2" lat="53.331" lon="-91.667" controls>
  <!—Modifier la carte de base en cliquant sur les points de suspension (…) de la couche de la carte de base -->
  <layer- label="Carte de base" checked="">
    <!—Cette étendue est masquée au niveau du contrôle de la couche, puisqu’aucune étiquette n’est fournie -->
    <map-extent units="OSMTILE">
      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>
    </map-extent>
      <map-extent label="Nat Geo" units="OSMTILE">
      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/WMTS/tile/1.0.0/NatGeo_World_Map/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>
    </map-extent>
    <map-extent label="Imagery" units="OSMTILE">
      <map-input name="TileMatrix" type="zoom" value="18" min="0" max="18"></map-input>
      <map-input name="TileCol" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>
      <map-input name="TileRow" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>
      <map-link rel="tile" tref="https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg"></map-link>
      <map-link rel="tile" tref="https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/WMTS/tile/1.0.0/Reference_World_Boundaries_and_Places/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.png"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

### WMS Request

L’exemple ci-dessous montre une demande de service de carte en ligne utilisant l’élément `<map-link>` pour demander des images de la carte.

```html
<mapml-viewer projection="OSMTILE" zoom="4" lat="53.331" lon="-91.667" controls>
  <layer- label="Toporama" checked="">
    <map-extent xmlns="http://www.w3.org/1999/xhtml" units="OSMTILE">
      <!—Paramètres URL de la demande de service de carte en ligne -->
      <map-input name="z" type="zoom" value="18" min="4" max="18"></map-input>
      <map-input name="w" type="width"></map-input>
      <map-input name="h" type="height"></map-input>
      <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-2.003750834E7" max="2.003750834E7"></map-input>
      <!-- Web Map Service requesting image -->
      <map-link rel="image" tref="http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3857&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t"></map-link>
    </map-extent>
  </layer->
</mapml-viewer>
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément extent de MapML](https://maps4html.org/MapML/spec/#the-extent-element-0) |

---

## Exigences

[Signalez tout problème avec ces exigences sur GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">exigence</span>
<span class="enhancement">amélioration</span>
<span class="impractical">inefficace</span>
<span class="undecided">incertain</span>
<span class="discussion">en discussion</span></b></p>

|  | Spéc | Visionneuse | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Rendu des couches de base (5.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering) |  |  |  |
| <div class="requirement">Afficher une carte avec les données de pavés obtenues du service de carte en ligne précisé par l’auteur (5.1.4)</div> | full | full |  |
| [**Navigation de l’utilisateur (panoramique et zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
| <div class="undecided">Charger d’autres pavés de carte pour que le mouvement panoramique les affiche (5.4.3)</div> | full | full |  |
| <div class="discussion">Charger dynamiquement des pavés de carte à différentes résolutions lorsqu’on effectue un zoom (5.4.6)</div> | full | full |  |

---

> - [Modifiez le contenu de cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/feature.md)
> - [Clavardez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
