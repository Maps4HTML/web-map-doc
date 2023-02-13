---
id: geometry
title: "<map-geometry>"
slug: /elements/geometry/
---
Un élément `<map-geometry>` est l’élément-enfant de `<map-feature>` et sert à décrire la géométrie de la caractéristique.

Un élément `<map-geometry>` a un élément-enfant qui peut être `<map-point>`, `<map-linestring>`, `<map-polygon>`, `<map-multipoint>`, `<map-multilinestring>`, `<map-multipolygon>` ou `<map-geometrycollection>`.

<iframe src="../../../demo/map-geometry-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributs 

### `cs`

Définit le système de coordonnées de la géométrie. Si aucun `cs` n’est fourni, le système de coordonnées des éléments descendants `<map-coordinates>` est déterminé par un retour vers n’importe `<map-meta name="cs" content="...">` dans la portée. Si aucun système de coordonnées n’est identifié par un élément `<map-meta>`, la valeur par défaut de `pcrs` (coordonnées projetées) est utilisée.

Système de référence de coordonnées
| CRS | Description |
|------|-------------|
| tcrs | Pour chaque niveau de zoom (c.-à-d. à une valeur prédéfinie du dénominateur d’échelle), les emplacements sont exprimés en termes de pixels mis à l’échelle, dont l’origine de l’espace se situe dans le coin supérieur gauche. Les coordonnées des pixels d’un emplacement affiché à un niveau de zoom quelconque sont indépendantes de celles d’un emplacement affiché à tout autre niveau de zoom. Autrement dit, vous devez connaître le niveau de zoom d’une coordonnée du système de références des coordonnées en pavés tcrs pour la localiser sur la carte ou la traiter d’une façon ou d’une autre. |
| tilematrix | Chaque niveau de zoom a un tableau de pavés appelé tilematrix. Chaque pavé constitue les coordonnées dans ce crs (système de référence des coordonnées), et les axes sont appelés `row` et `column`. Les pavés sont déinis comme étant des carrés de 256 pixels d’arête dans le tcrs connexe, au niveau de zoom donné. |
| pcrs | Le système de référence des coordonnées projetées (pcrs) est défini par une relation mathématique avec un système de référence des données géodésique gcrs sous-jacent au moyen d’une technique dite « de projection ». Les coordonnées du pcrs sont indépendantes de l’échelle et du niveau de zoom, et sont conçues pour représenter des coordonnées géographiques sur une surface plane, comme l’écran d’un appareil. Les unités de mesure des coordonnées pcrs sont habituellement des mètres (à l’exception notable des coordonnées pcrs dans la projection `WGS84`). |
| gcrs | Les coordonnées géographiques sont référencées à divers ellipsoïdes et ne sont pas nécessairement comparables d’une projection à l’autre. WGS 84 constitue un ellipsoïde courant à l’heure actuelle, et est défini et utilisé par la constellation des satellites de positionnement mondial (GPS). |
| map | Le crs de la carte est dynamique, en ce sens que son origine se situe en ahut à gauche dans la fenêtre d’affichage de l’utilisateur, avec des pixels mis à l’échelle comme unités. Cela permet d’identifier les coordonnées d’image à utiliser, habituellement par les services de cartes Web et d’autre services semblables, qui utilisent une image viruelle pour permettre la recherche de données sur les propriétés d’une caractéristique présente sur la carte, sans nécessairement transférer les caractéristiques sur le réseau. |
| tile | Peu importe le niveau de zoom, chaque pavé a un système implicite de référence des coordonnées à pavés (tcrs) mis à l’échelle allant de 0 à 255, tant dans le sens horizontal que vertical. Ces coordonnées sont utilisées par le Service Web des pavés cartographiques (WMTS) et d’autres services semblables pour identifier un pixel qui servira à rechercher les valeurs des propriétés de la caractéristique, sans transférer la géométrie de cette dernière sur le réseau. |

---

## Éléments-enfants


### `<map-point>`

Cet élément contient un élément `<map-coordinates>` qui contient lui-même une unique position. L’ordre des axes est - x, suivi de y et séparé par une espace typographique. Prenez note que la longitude et la latitude (coordonnées gcrs) sont toujours présentées dans cet ordre, quel que soit le type de géométrie.

---

### `<map-linestring>`

Cet élément contient un élément `<map-coordinates>` qui contient lui-même deux positions ou plus. L’ordre des axes est - x, suivi de y et séparé par une espace typographique.

---

### `<map-polygon>`

Cet élément contient un ou plusieurs éléments `<map-coordinates>`, chacun contenant lui-même trois positions ou plus. L’ordre des axes est - x, suivi de y et séparé par une espace typographique.

Les premières et dernières positions de chaque élément-enfant `<map-coordinates>` sont égales ou à la même position.

Le premier élément `<map-coordinates>` représente l’extérieur du polygone, et les éléments `<map-coordinates>` subséquents représentent des trous. L’ordre d’enroulement des positions dans l’élément-enfant `<map-coordinates>` doit dépendre de l’orientation des axes du système de référence des coordonnées utilisé, et si l’élément `<map-coordinates>` représente l’extérieur d’un polygone ou un trou. Avec WGS84, l’extérieur doit avoir un ordre d’enroulement antihoraire, et les trous, un ordre d’enroulement horaire.

---

### `<map-multipoint>`

Ceet élément contient un élément `<map-coordinates>` qui contient lui-même une ou plusieurs positions. L’ordre des axes est - x, suivi de y et séparé par une espace typographique.

---

### `<map-multilinestring>`

Cet élément contient un ou plusieurs éléments `<map-coordinates>`, chacun contenant lui-même deux positions ou plus. L’ordre des axes est - x, suivi de y et séparé par une espace typographique.

---

### `<map-multipolygon>`

Cet élément contient un ou plusieurs éléments `<map-polygon>`. L’ordre des axes est - x, suivi de y et séparé par une espace typographique.

Pour chaque polygone membre, les mêmes contraintes non schéma s’appliquent aux éléments descendants `<map-coordinates>` des multipolygones et aux éléments descendants `<map-coordinates>` des polygones.

---

### `<map-geometrycollection>`

Cet élément contient un ou plusieurs éléments `<map-point>`, `<map-linestring>`, `<map-polygon>`, `<map-multipoint>`, `<map-multilinestring>`, `<map-multipolygon>`.

Pour chaque géométrie membre, les mêmes contraintes non schéma s’appliquent qu’au type unique de géométrie dont il a été question précédemment.

---


## Exemples

### Point
```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Géométrie en mode point" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>Point</map-featurecaption>
      <!—Les coordonnées de la géométrie sont celles du gcrs, puisque le système de référence des coordonnées par défaut est pcrs -->
      <map-geometry cs="gcrs">
        <map-point class="point">
          <map-coordinates>-75.6916809 45.4186964</map-coordinates>
        </map-point>
      </map-geometry>
      <map-properties><h2>Ceci est un point</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

### LineString

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Géométrie en mode ligne" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>Ligne</map-featurecaption>
      <!—Les coordonnées de la géométrie sont celles de gcrs, puisque le système de référence des coordonnées par défaut est pcrs -->
      <map-geometry cs="gcrs">
        <map-linestring class="line">
          <map-coordinates>-75.6168365 45.471929 -75.6855011 45.458445 -75.7016373 45.4391764 -75.7030106 45.4259255 -75.7236099 45.4208652 -75.7565689 45.4117074 -75.7833481 45.384225 -75.8197403 45.3714435 -75.8516693 45.377714</map-coordinates>
        </map-linestring>
      </map-geometry>
      <map-properties><h2>Ceci est une ligne</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

### Polygon

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Géométrie en mode polygone" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>Polygone</map-featurecaption>
      <!-- Les coordonnées de la géométrie sont celles de gcrs, puisque le système de référence des coordonnées par défaut est pcrs -->
      <map-geometry cs="gcrs">
        <map-polygon class="polygon">
          <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>
          <map-coordinates>-75.6596588 45.4211062 -75.6338958 45.4254436 -75.6277127 45.4066458 -75.6572542 45.4097792 -75.6596588 45.4211062</map-coordinates>
        </map-polygon>
      </map-geometry>
      <map-properties><h2>Ceci est un polygone</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

### MultiPoint

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Géométrie en mode multipoint" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>MultiPoint</map-featurecaption>
      <!-- Les coordonnées de la géométrie sont celles de gcrs, puisque le système de référence des coordonnées par défaut est pcrs -->
      <map-geometry cs="gcrs">
        <map-multipoint class="point">
          <map-coordinates>-75.7016373 45.4391764 -75.7236099 45.4208652 -75.7833481 45.384225</map-coordinates>
        </map-multipoint>
      </map-geometry>
      <map-properties><h2>Ceci est un multipoint</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

### MultiLineString

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Géométrie en mode multiligne" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>MultiLineString</map-featurecaption>
      <!-- Les coordonnées de la géométrie sont celles de gcrs, puisque le système de référence des coordonnées par défaut est pcrs -->
      <map-geometry cs="gcrs">
        <map-multilinestring class="line">
          <map-coordinates>-75.6168365 45.471929 -75.6855011 45.458445 -75.7016373 45.4391764 -75.7030106 45.4259255</map-coordinates>
          <map-coordinates>-75.7565689 45.4117074 -75.7833481 45.384225 -75.8197403 45.3714435 -75.8516693 45.377714</map-coordinates>
        </map-multilinestring>
      </map-geometry>
      <map-properties><h2>Ceci est une multiligne</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

### MultiPolygon

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Géométrie en mode multipolygone" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>MultiPolygon</map-featurecaption>
      <!-- Les coordonnées de la géométrie sont celles de gcrs, puisque le système de référence des coordonnées par défaut est pcrs -->
      <map-geometry cs="gcrs">
        <map-multipolygon class="polygon">
          <map-polygon>
          	<map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>
          </map-polygon>
          <map-polygon>
          	<map-coordinates>-75.6744295 45.4728920 -75.7053451 45.4439942 -75.7063756 45.4249616 -75.7489704 45.4177324 -75.7788555 45.4003785 -75.7943133 45.4321899 -75.6744295 45.4728920</map-coordinates>
          </map-polygon>
        </map-multipolygon>
      </map-geometry>
      <map-properties><h2>Ceci est un multipolygone</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

### GeometryCollection

```html
<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>
  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->
  <layer- label="Collection de géométries" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-feature>
      <map-featurecaption>Collection de géométries</map-featurecaption>
      <!-- Les coordonnées de la géométrie sont celles de gcrs, puisque le système de référence des coordonnées par défaut est pcrs -->
      <map-geometry cs="gcrs">
        <map-geometrycollection>
          <map-polygon class="polygon">
            <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>
          </map-polygon>
          <map-linestring class="line">
            <map-coordinates>-75.6168365 45.471929 -75.6855011 45.458445 -75.7016373 45.4391764 -75.7030106 45.4259255 -75.7236099 45.4208652 -75.7565689 45.4117074 -75.7833481 45.384225 -75.8197403 45.3714435 -75.8516693 45.377714</map-coordinates>
          </map-linestring>
          <map-point class="point">
            <map-coordinates>-75.6916809 45.4186964</map-coordinates>
          </map-point>
        </map-geometrycollection>
      </map-geometry>
      <map-properties><h2>Ceci est une collection de géométries</h2></map-properties>
    </map-feature>
  </layer->
</mapml-viewer>
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément geometry de MapML](https://maps4html.org/MapML/spec/#the-geometry-element-0) |

---

> - [Modifiez le contenu de cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/geometry.md)
> - [Clavardez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
