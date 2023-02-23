---
id: input
title: "<map-input>"
slug: /elements/input/
---

L’élément `<map-input>` est une entrée HTML `input` étendue par `type`, utilisée dans les éléments `<map-extent>` d’une carte en ligne. Les attributs qui s’appliquent à l’entrée dépendent de l’attribut `type`. Nous avons plusieurs types d’éléments `<map-input>` à notre disposition.

L’élément `<map-input>` déclare une variable que le code polyfill définit pour son usage en fonction de ses attributs, puisque la carte modifie l’étendue de la fenêtre d’affichage en réaction à ce que fait l’utilisateur.

<iframe src="../../../demo/map-input-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributs

### `name`
Définit le nom de la variable créée par l’entrée. Le modèle d’adresse URL `<map-link>` [tref attribute](../link#tref) peut ensuite référencer la variable avec la notation de référence des variables `{name}`.

---
### `type`
Définit le **type** de l’entrée.

| Type          | Description                                          	|
|--------------	|--------------------------------------------------------	|
| zoom          | Cette valeur entière varie de 0 à un nombre entier quelconque qui ne peut excéder 25, selon la projection.|
| location      | L’entrée d’un emplacement capture **une** valeur d’`axis` d’un point à deux dimensions (représenté par une paire de coordonnées) dans l’étendue de la carte – p. exe., l’emplacement `top-right`, ou, lorsqu’il interroge un serveur, celui où l’utilisateur clique ou qu’il touche sur la carte. |
| width         | L’entrée de la largeur capture la largeur de l’étendue de la fenêtre d’affichage de la carte en pixels normalisés  |
| height        | L’entrée de la hauteur capture la hauteur de l’étendue de la fenêtre d’affichage de la carte en pixels normalisés |
---

### `value`
En règle générale, le code polyfill définit l’attribut `value` qu’il utilise pour générer des adresses URL à partir de [modèles d’adresses URL](../link#tref) pour récupérer des ressources du serveur, comme des pavés, des images ou des cartes.

En particulier, les auteurs utilisent `value` pour préciser la valeurs d’entrée `type="zoom"`. Lorsque `type="zoom"`, `value` définit la valeur des attributs `min` et `max` du niveau de zoom des éléments **sibling** `<map-input type="location">` connexes. Permet aux auteurs d’établir des limites de ressources natives / du serveur sur la base de `<map-link tref="...">`.

Les entrées sont  associées par leurs variables référencées par une valeur `<map-link tref="https://example.org/{z}/{col}/{row}/"...>`. Dans l’exemple ci-dessus, les références de variable `{z}`, `{row}` et `{col}` associent les variables (`<map-input>`'s) appelées **z**, **row** et **col**.

---
### `axis`
Cet attribut ne s’appliquent qu’aux entrées `type="location"`. Il établit l’axe de la coordonnée à sérialiser  sous forme de [variable nommée](#). Cette valeur identifie l’axe auquel s’appliquent les attributs `min` et `max`, de façon à ce que le code polyfill ne produise pas de requêtes visant des ressources spatiales (pavés, etc.) hors des limites de l’axe natif. `axis` peut prendre les valeurs suivantes :

| Nom de l’axe | CRS | Description                                          	|
|-----------|-----|------------------------------------------------------	|
|`row`      | tilematrix |Axe vertical positif, orienté vers le bas de l’écran et dont l’origine est en haut à gauche. Les unités de l’axe sont des pavés. Chaque niveau de zoom étant un système distinct de référence des coordonnées crs d’un tableau de pavés, les valeurs de coordonnées ne s’appliquent donc qu’à lui. |
|`column`   | tilematrix |Axe horizontal positif, orienté vers la droite de l’écran et dont l’origine est en haut à gauche. Les unités de l’axe sont des pavés. Chaque niveau de zoom étant un système distinct de référence des coordonnées crs d’un tableau de pavés, les valeurs de coordonnées ne s’appliquent donc qu’à lui.|   
|`easting`  | pcrs |Axe horizontal positif, orienté vers la droite de l’écran et dont l’origine est un emplacement géographique défini. Ses unités sont habituellement des mètres, mais avec certaines projections (WGS84 en particulier), la transformation à partir d’un CRS géographique, c’est-à-dire de la longitude, en abscisse constitue la [transformation de l’identité](https://fr.wikipedia.org/wiki/Application_identité). Dans ce cas, les valeurs en abscisse pourraient être exprimées en degrés décimaux. **pcrs** signifie projected coordinate reference system (système de référence des coordonnées projetées). Prenez note que, puisque le pcrs constitue un « canevas infini », il existe des emplacements pour lesquels la transformation des coordonnées pcrs en coordonnées gcrs n’est pas définie. | 
|`northing` | pcrs |Axe vertical positif, orienté vers la droite de l’écran et dont l’origine est un emplacement géographique défini. Ses unités sont habituellement des mètres, mais avec certaines projections (WGS84 en particulier), la transformation à partir d’un CRS géographique, c’est-à-dire de la latitude, vers une valeur nulle constitue la [transformation de l’identité](https://fr.wikipedia.org/wiki/Application_identité). Dans ce cas, les valeurs nulles pourraient être exprimées en degrés décimaux. Prenez note que, puisque le pcrs constitue un « canevas infini », il existe des emplacements pour lesquels la transformation des coordonnées pcrs en coordonnées gcrs n’est pas définie.|
|`latitude` | gcrs | La latitude d’un point situé sur un ellipsoïde est l’angle entre une ligne perpendiculaire à la surface de l’ellipsoïde en un point quelconque et le plan de l’équateur. **gcrs** signifie geographic coordinate reference system (système de références des coordonnées géographiques).|
|`longitude`| gcrs | Longitude d’un point précis de la position est-ouest sur la surface de l’objet de référence (la Terre).| 
|`x`        | tcrs | Axe horizontal positif, orienté vers la droite de l’écran et dont l’origine est en haut à gauche. Les unités sont des pixels de dimensions définies. Chaque niveau de zoom tcrs étant unique, les valeurs de coordonnées ne s’appliquent qu’à lui. **tcrs** signifie système de références des coordonnées en pavés. Les pavés de chaque crs **tilematrix** (tableau de pavés) sont définis comme étant l’agrégation de pixels dans le niveaux de zoom **tcrs** correspondants.|
|`y`        | tcrs | Axe vertical positif, orienté vers le bas de l’écran et dont l’origine est en haut à gauche. Les unités sont des pixels de dimensions définies. Chaque niveau de zoom tcrs étant unique, les valeurs de coordonnées ne s’appliquent qu’à lui.|
|`i`        | tile, map | Axe horizontal positif, orienté vers la droite de l’écran. Chaque pavé, tout comme la fenêtre d’affichage de la carte, a un crs de pavés de dimensions définies et dont l’origine est en haut à gauche (de chaque pavé dans le cas d’un crs **tile** – le système de référence des coordonnées en pavés – et de la fenêtre d’affichage de la carte dans le cas du crs **map**). |
|`j`        | tile, map | Axe vertical positif, orienté vers le base de l’écran. Chaque pavé, tout comme la fenêtre d’affichage de la carte, a un crs de pavés de dimensions définies et dont l’origine est en haut à gauche (de chaque pavé dans le cas d’un crs **tile** et de la fenêtre d’affichage de la carte dans le cas du crs **map**).|

Lorsque l’utilisateur veut obtenir l’axe de coordonnées du pavé en entier dans la projection `OSMTILE`, il peut entrer l’emplacement avec `<map-input name="y" type="location" units="tilematrix" axis="row">` pour définir la variable **y** référencée par `{y}` dans un modèle d’adresses URL connexe qui sérialise les valeurs de l’axe `row` du crs **tilematrix**. Une série d’événements d’entrée d’emplacement est générée par le code polyfill, comme en a besoin la carte pour couvrir de pavés la fenêtre d’affichage de la carte.  

---
### `units` 

Identifie le système de référence des coordonnées connexe spécifique auquel l’événement d’entrée d’emplacement est référencée. Dans MapML, le terme « projection » est synonyme de l’ensemble de crs reliés entre eux par le nom de la projection. Dans tous les cas et quelle que soit la projection, il existe un ensemble de crs dont chacun est reliés mathématiquement à l’autre. Ces crs sont connus et identifiés dans l’espace de nommage du nom de la projection par le tableau des valeurs de mots-clés suivant :


| CRS | Description |
|------|-------------|
| tcrs | Pour chaque niveau de zoom (c.-à-d. à une valeur prédéfinie du dénominateur d’échelle), les emplacements sont exprimés en termes de pixels mis à l’échelle, avec l’origine de l’espace des pixels se situant dans le coin supérieur gauche. Les coordonnées des pixels d’un emplacement affiché à un niveau de zoom quelconque sont indépendantes de celles d’un emplacement affiché à tout autre niveau de zoom. Autrement dit, vous devez connaître le niveau de zoom d’une coordonnée du système de références des coordonnées en pavés tcrs pour la localiser sur la carte ou la traiter d’une façon ou d’une autre. |
| tilematrix | Chaque niveau de zoom a un tableau de pavés appelé tilematrix. Chaque pavé constitue les coordonnées dans ce crs (système de référence des coordonnées), et les axes sont appelés `row` et `column`. Les pavés sont définis comme étant des carrés de 256 pixels d’arête dans le tcrs connexe, au niveau de zoom donné. |
| pcrs | Le système de référence des coordonnées projetées (pcrs) est défini par une relation mathématique avec un système de référence des données géodésique gcrs sous-jacent au moyen d’une technique dite « de projection ». Les coordonnées du pcrs sont indépendantes de l’échelle et du niveau de zoom, et sont conçues pour représenter des coordonnées géographiques sur une surface plane, comme l’écran d’un appareil. Les unités de mesure des coordonnées pcrs sont habituellement des mètres (à l’exception notable des coordonnées pcrs dans la projection `WGS84`). |
| gcrs | Les coordonnées géographiques sont référencées à divers ellipsoïdes et ne sont pas nécessairement comparables d’une projection à l’autre. WGS 84 constitue un ellipsoïde courant à l’heure actuelle, et est défini et utilisé par la constellation des satellites de positionnement mondial (GPS). |
| map | Le CRS de la carte est dynamique, en ce sens que son origine se situe en haut à gauche dans la fenêtre d’affichage de l’utilisateur, avec des pixels mis à l’échelle comme unités. Cela permet d’identifier les coordonnées d’image à utiliser, habituellement par les services de cartes Web et d’autre services semblables, qui utilisent une image virtuelle pour permettre la recherche de données sur les propriétés d’une caractéristique présente sur la carte, sans nécessairement transférer les caractéristiques sur le réseau. |
| tile | Peu importe le niveau de zoom, chaque pavé a un système implicite de coordonnées à pavés mis à l’échelle allant de 0 à 255, tant dans le sens horizontal que vertical. Ces coordonnées sont utilisées par le Service Web des pavés cartographiques (WMTS) et d’autres services semblables pour identifier un pixel qui servira à rechercher les valeurs des propriétés de la caractéristique, sans transférer la géométrie de cette dernière sur le réseau. |

Il arrive parfois qu’on utilise des entrées d’emplacement pour générer des demandes de découpage en carrés des pavés à partir des services de cartes Web (WMS) ou des services semblables qui n’utilisent pas les pavés. Dans un tel cas, on peut préciser les `units` comme un tableau de pavés `tilematrix`, ce qui implique que l’événement d’entrée d’emplacement attendu est celui d’un pavé, et le mot-clé `position` est ensuite utilisé pour décrire le coin du pavé, coin à partir duquel la coordonnée doit être sérialisée. Dans ce cas, la valeur `axis` peut être précisée comme `easting` (abscisse), ou un autre nom d’axe associé à la projection, pour obtenir la coordonnée du coin du pavé qui est traité par le code polyfill : 

`<map-input name="xmin" type="location" units="tilematrix" position="top-left" axis="easting">`

Intrinsèquement, le crs de la coordonnée demandée est déduit du nom de l’axe plutôt qu’en demandant à l’auteur de préciser explicitement le crs de l’axe comm un autre attribut de `<map-input>`. 

---

### `position`

Permet à l’auteur de préciser un coin prédéfini de la fenêtre d’affichage ou du pavé, qui est utilisé comme valeur d’emplacement à sérialiser. S’il n’y a pas de `position`, les coordonnées d’entrée de l’emplacement sont générées lorsque l’utilisateur clique sur la carte ou touche celle-ci, et qui servent à générer des requêtes interactives destinées au serveur.

| Mot-clé de position| description du mot-clé |
|------------------|--------------------|
| top-left | Identifie l’emplacement dans le coin supérieur gauche du pavé ou de la fenêtre d’affichage |
| top-right | Identifie l’emplacement dans le coin supérieur droit du pavé ou de la fenêtre d’affichage |
| bottom-left | Identifie l’emplacement dans le coin inférieur gauche du pavé ou de la fenêtre d’affichage |
| bottom-right | Identifie l’emplacement dans le coin inférieur droit du pavé ou de la fenêtre d’affichage |

`position` peut prendre d’autres valeurs, mais aucune n’est mise en œuvre pour le moment.

---
### `rel`

Précise l’entité à laquelle s’applique la `position`. Les valeurs possibles sont `tile` et `image`. Si l’on ne précise pas de valeur, `image` est utilisée par défaut. `rel`  permet d’identifier plus facilement le crs qui contient la coordonnées sérialisée par l’entrée. 

---
### `min`
Établit la valeur minimale de l’axe dans le serveur. Le code polyfill ne crée aucune demande pour obtenir des coordonnées dont la valeur est inférieure à `min`. 

---
### `max`
Établit la valeur maximale de l’axe dans le serveur. Le code polyfill ne crée pas les demandes pour obtenir des coordonnées dont la valeur est supérieure à `max`.

---
### `step`
Définit la plage de zoom en fonction des ressources qui sont demandées à l’intérieur de cette plage. `step` est toujours calculé à partir d’une valeur de base de 0.  Lorsque la valeur du niveau de zoom se situe à l’intérieur de l’intervalle `step`, les ressources sont demandées lorsque nécessaire et mises à l’échelle au niveau de zoom utilisé. Par exemple, si min=0 et que max=7 pour le niveau de zoom entré avec step=4, les pavés ne sont demandés que qu’au niveau de zoom=0 et mis à l’échelle avec les niveaux de zoom 1, 2 et 3 alors que la carte est rendue à ces niveaux. Utiliser cet attribut permet d’économiser la largeur de bande dont profite l’utilisateur et n’introduit qu’un léger effet visuel qui varie avec la nature du contenu.

---
## Exemples

### Input step

```html
<mapml-viewer projection="OSMTILE" zoom="0" lat="45.409071" lon="-75.703411" controls>
  <layer- label="OpenStreetMap" checked>
    <map-extent units="OSMTILE" >
      <map-input name="z" type="zoom"  value="18" min="0" max="18" step="3"></map-input>
      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>
      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>
      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </map-extent>
  </layer->
</mapml-viewer>
```

### L’entrée rel=tile génère une demande soumise aux services de cartes Web (WMS) pour obtenir des pavés.

Les WMS peuvent être lents à réagir, même s’ils le font rapidement en réalité. Dessiner la carte à partir de pavés générés par autant de demandes GetMap soumises aux WMS peut améliorer la qualité de votre carte aux yeux de l’utilisateur. En revanche, il est déconseillé de procéder ainsi lorsque la couche demandée contient des étiquettes susceptibles d’être reproduites dans chacun des nombreux pavés adjacents.

```html
<mapml-viewer projection="CBMTILE" lat="60" lon="-95" zoom="2" controls>
  <layer- label="Demande de pavés WMS GetMap" checked>
    <map-extent units="CBMTILE">
      <!—ici, les unités et les attributs d’axe semblent contradictoires --> 
      <!—cependant, rel="tile" et units="tilematrix" informent tous les deux la carte que l’événement sérialisé a trait à un pavé dans le tcrs -->
      <map-input name="txmin" type="location" rel="tile" position="top-left" axis="easting" units="tilematrix" ></map-input>
      <!—dans ce cas, position renvoie à une position sur le pavé à récupérer -->
      <map-input name="tymin" type="location" rel="tile" position="bottom-left" axis="northing" units="tilematrix" ></map-input>
      <map-input name="txmax" type="location" rel="tile" position="top-right" axis="easting" units="tilematrix" ></map-input>
      <map-input name="tymax" type="location" rel="tile" position="top-left" axis="northing" units="tilematrix" ></map-input>
      <map-link rel="tile" tref="https://datacube.services.geo.ca/ows/msi?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=msi-color&VERSION=1.3.0&LAYERS=msi&WIDTH=256&HEIGHT=256&CRS=EPSG:3978&BBOX={txmin},{tymin},{txmax},{tymax}" ></map-link>
      <!—il faut préciser un niveau de zoom, mais il s’agit d’un bogue : 
           https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/669 -->
      <map-input name="z" type="zoom" value="25" min="0" max="25"/>
    </map-extent>
  </layer->
</mapml-viewer>
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément input de MapML](https://maps4html.org/MapML/spec/#the-input-element-0) |
| [Élément input en HTML](https://html.spec.whatwg.org/multipage/input.html#the-input-element) |

---

> - [Modifiez cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/input.md)
> - [Clavardez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
