---
id: map-feature-api
title: "HTMLFeatureElement"
slug: /api/map-feature-api
---

# HTMLFeatureElement

## Propriétés

### zoom

`HTMLFeatureElement.zoom` obtient ou définit le zoom "natif" de l'élément; `zoom` 
[reflète](https://html.spec.whatwg.org/#example-reflect-incantation) l'attribut 
content du même nom. La géométrie et les autres propriétés 
des caractéristiques dépendent de l'échelle. On s'attend à ce que les 
caractéristiques servies par les services HTML (MapML) expriment l'échelle 
native ou naturelle de la caractéristique par le biais de ses attributs contenu 
`zoom`, `min` et `max` (zoom) et des attributs IDL.

Pour définir le `zoom` :
```js
let feature = document.querySelector('map-feature');
feature.zoom = 5; // définit le zoom "natif" de la fonctionnalité
```

Pour obtenir le `zoom` :
```js
let feature = document.querySelector('map-feature');
let zoom = feature.zoom; 
```
---

### min

L'attribut IDL `min` (zoom) permet d'obtenir ou de définir le zoom minimum natif de la 
caractéristique; `min` [reflète](https://html.spec.whatwg.org/#example-reflect-incantation) 
l'attribut contentu du même nom. La géométrie et les autres propriétés des 
caractéristiques de la carte dépendent de l'échelle. La valeur `min` est une valeur 
limite de zoom de rendu ; à des valeurs de zoom de carte inférieures à `min`, 
la caractéristique ne sera pas rendue.

Si la valeur `min` n'est pas fournie, une valeur de repli sera calculée; la valeur 
de repli sera la valeur de `zoom` minimale de la couche ou, si elle n'est pas spécifiée, 
la valeur minimale de la projection du visualiseur de carte, c'est-à-dire 0.

Pour définir le `min`:
```js
let feature = document.querySelector('map-feature');
feature.min = 5; // la fonctionnalité ne sera pas rendue aux niveaux de zoom 0 à 4
```

Pour obtenir le `min`:
```js
let feature = document.querySelector('map-feature');
let min = feature.min;
```
---

### max

L'attribut `max` (zoom) permet d'obtenir ou de définir le `zoom` maximal natif de la 
caractéristique; `max` [reflète](https://html.spec.whatwg.org/#example-reflect-incantation) 
l'attribut de contenu du même nom. La géométrie et les autres propriétés des 
caractéristiques de la carte dépendent de l'échelle. La valeur `max` est une valeur 
limite de [`zoom`](#zoom) de rendu; à des valeurs de [`zoom`](#zoom) de carte 
supérieures à `max`, la caractéristique ne sera pas rendue.

Si `max` n'est pas fourni, une valeur de repli sera calculée ; la valeur de repli 
sera la valeur de [`zoom`](#zoom) maximale de la couche ou, si elle n'est pas 
spécifiée, la valeur maximale de [`zoom`](#zoom) de la projection du visualiseur 
de carte, par exemple 25 (en fonction de la projection).

Pour définir le `max` :
```js
let feature = document.querySelector('map-feature');
feature.max = 10; // la fonctionnalité ne sera pas rendue au-delà du niveau de zoom 10
```

Pour obtenir le `max` :
```js
let feature = document.querySelector('map-feature');
let max = feature.max;
```
---

### extent

En lecture seule. Renvoie les coordonnées en haut à gauche et en bas à droite du 
rectangle minimal de délimitation de la caractéristique sous la forme d'une valeur 
d'objet.

Pour les caractéristiques ponctuelles (dont l'étendue est nulle), l'étendue est 
calculée pour correspondre aux coins d'une tuile unique centrée sur cet endroit, 
à un niveau de [`zoom`](#zoom) intégral égal à la valeur de la propriété de 
[`zoom`](#zoom) de la caractéristique, si elle est définie, ou à la valeur de 
[`zoom`](#zoom) de repli (calculée) si aucune propriété de [`zoom`](#zoom) n'est 
définie.

```console
> let f = document.querySelector('map-feature')
> console.log(f.extent)
> {topLeft: {…}, bottomRight: {…}, projection: 'CBMTILE'}
```

L'objet "extent" est structuré comme suit :

<details>
<summary>Cliquer pour visualiser l'objet de l'étendue</summary>

```js
{
    "projection": "CBMTILE",
    "topLeft": {
        "tcrs": [
            {
                "horizontal": 942.662039991251,
                "vertical": 1029.0945982508472
            },
/* un objet avec des propriétés "horizontales" et "verticales" pour chaque niveau de zoom dans le tableau */
            {
                "horizontal": 546743983.1949257,
                "vertical": 596874866.9854914
            }
        ],
        "tilematrix": [
            {
                "horizontal": 3.6822735937158244,
                "vertical": 4.019900774417372
            },
/* un objet avec des propriétés "horizontales" et "verticales" pour chaque niveau de zoom dans le tableau */
            {
                "horizontal": 2135718.6843551784,
                "vertical": 2331542.4491620758
            }
        ],
/* gcrs est l'abréviation de "geographic coordinate reference system" (système de référence des coordonnées géographiques) */
        "gcrs": {
            "horizontal": -75.73195696514524,
            "vertical": 45.40761073808424
        },
/* pcrs est l'abréviation de "projected coordinate reference system" (système de référence à coordonnées projetées) */
        "pcrs": {
            "horizontal": 1509108.7182317898,
            "vertical": -170864.4342066869
        }
    },
    "bottomRight": {
        "tcrs": [
            {
                "horizontal": 942.7503158533199,
                "vertical": 1029.1828741129164
            },
            {
                "horizontal": 546795183.1949255,
                "vertical": 596926066.9854914
            }
        ],
        "tilematrix": [
            {
                "horizontal": 3.6826184213020308,
                "vertical": 4.0202456020035795
            },
            {
                "horizontal": 2135918.684355178,
                "vertical": 2331742.4491620758
            }
        ],
        "gcrs": {
            "horizontal": -75.67858731979081,
            "vertical": 45.387937810298354
        },
        "pcrs": {
            "horizontal": 1512495.3916717991,
            "vertical": -174251.10764670372
        }
    }
}
```

</details>

---

## Méthodes

### zoomTo()

`HTMLFeatureElement.zoomTo()` Déplace la fenêtre d'affichage pour la centrer sur 
l'[`extent`](#extent) de la caractéristique. Le [`zoom`](#zoom) de la carte affichée 
dépend des propriétés [`zoom`](#zoom) et [`max`](#max) natives de la caractéristique. 
Si la caractéristique n'a pas de propriété 
de [`zoom`](#zoom) spécifiée, la caractéristique sera centrée sur la fenêtre d'affichage à 
la valeur de [`zoom`](#zoom) maximale, que cette valeur soit présente sur la caractéristique 
ou qu'elle soit dérivée d'une valeur de repli basée sur la couche ou la carte 
parente. Si une propriété de [`zoom`](#zoom) est disponible, la fenêtre d'affichage sera 
centrée sur le centre de l'[`extent`](#extent) de la caractéristique à cette valeur de [`zoom`](#zoom), 
que l'[`extent`](#extent) tienne ou non entièrement dans la fenêtre d'affichage.

#### Syntaxe

```js
let f = document.querySelector('map-feature');
f.zoomTo(); // recentrer la carte sur la fonctionnalité à son niveau de zoom natif
```
#### Paramètres

Aucun.

#### Valeur de retour

Aucun ([undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

---

### click()

La méthode `click` simule un clic de souris sur la caractéristique.

#### Syntaxe

```js
let f = document.querySelector('map-feature');
f.click();
```
#### Paramètres

Aucun.

#### Valeur de retour

Aucun ([undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).


---

### focus(options)

#### Syntaxe

```js
f.focus();
f.focus(options);
```

#### Paramètres

`options` <span class="badge">Optionnel</span>

Objet optionnel permettant de contrôler certains aspects du processus de focalisation.

:::caution

Les options ne sont pas encore mises en œuvre.

:::
Cet objet peut contenir les propriétés suivantes : 

##### zoomTo

L'option `zoomTo` (`false` par défaut) déplacera la fenêtre de visualisation pour 
qu'elle soit centrée sur l'[`extent`](#extent) de la caractéristique, similaire 
à la méthode [`zoomTo()`](#zoomto).

```javascript
let f = document.querySelector('map-feature');
f.focus({ zoomTo: true });
```

##### focusVisible

L'option `focusVisible` (`false` par défaut) permet d'ajouter un anneau de anneau 
de focalisation, comme si la caractéristique avait été focalisée avec le clavier.

```javascript
let f = document.querySelector('map-feature');
f.focus({ zoom: false, focusVisible: true });
```

#### Valeur de retour

Aucun ([undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

---

### blur()

La méthode `blur()` supprime la focalisation sur la caractéristique.

#### Syntaxe

```js
let f = document.querySelector('map-feature');
f.blur();
```

#### Paramètres

Aucun.

#### Valeur de retour

Aucun ([undefined](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).


---

### mapml2geojson(options)

`HTMLFeatureElement.mapml2geojson(options)` renvoie la caractéristique au format GeoJSON.

| Fonction | Retours | Description |
|----------|---------|-------------|
| <code>mapml2geojson(\<Object\> options)</code> | Un objet caractéristique JavaScript (GeoJSON) | Cette fonction transforme l'élément `<feature>` en un objet GeoJSON Feature. Vous fournissez [options](#options) pour contrôler la transformation. 

:::caution

`mapml2geojson` doit être appelé à l'intérieur d'un événement windows.onload pour fonctionner correctement.

:::

#### Syntaxe

``` js
window.onload = (event) => {
  let layer = document.querySelector('map-layer');
  layer.mapml2geojson();
};
```

#### Paramètres

| Paramètre | Description |
|------|--------------|
| \<Object\> options | <span className="badge">Optionnel</span> Vous fournissez des paramètres via un objet options avec des [noms d'options prédéfinis](#options). |

##### Options

\<Object\> Un ensemble de paires clé/valeur qui personnalisent l'objet GeoJSON de sortie. Tous ces éléments sont optionnels et détaillés ci-dessous.

| Option | Type | Défaut | Description |
|------|------|---------------|--------|
| `propertyFunction` | \<Fonction\> | _s/o_ | Une fonction que vous fournissez qui fait correspondre l'élément `<map-properties>` de la caractéristique à un [membre GeoJSON "properties"](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2), puisque vous seul connaissez la conception du balisage dans votre valeur `<map-properties>`. Si vous ne fournissez pas cette option, une fonction par défaut tentera d'inverser un enfant `<table>` de l'élément `<map-properties>`, comme si cette table avait été générée par la fonction [fonction des options de propriétés par défaut de geojson2mapml](mapml-viewer-api#options). |
| `transform` | \<Boolean\> | `true` | Transforme les valeurs `<map-coordinates>` en valeurs `gcrs` (longitude,latitude), si ce n'est pas déjà le cas. GeoJSON [recommande](https://www.rfc-editor.org/rfc/rfc7946.html#section-4) d'utiliser les coordonnées de longitude et de latitude WGS 84, c'est donc le comportement par défaut. |
###### Notes

:::caution

`mapml2geojson`, par défaut, transformera les coordonnées des caractéristiques en
`gcrs` avant la sérialisation, si nécessaire. Notez que tous les CRS géographiques 
sont <u>**non**</u>-équivalents, et l'interprétation de ces coordonnées n'est pas 
garantie conforme aux coordonnées WGS 84 / GPS, et peut donc ne pas être conforme 
à [la recommandation GeoJSON](https://datatracker.ietf.org/doc/html/rfc7946#section-4), 
qui exige que les coordonnées de longitude et de latitude soient encodées en WGS 84.  
Le moteur de projection utilisé pour mettre en œuvre cette conversion n'est pas 
capable de transformer les coordonnées d'un 
[ellipsoïde](https://en.wikipedia.org/wiki/Earth_ellipsoid) en un autre, et le 
JSON résultant DEVRAIT (d'une manière ou d'une autre, à déterminer) être marqué 
avec le datum utilisé par la projection de la couche.
:::

#### Valeur de retour

Un objet GeoJSON représentant la caractéristique

---
## Evénements

| Nom de l'événement      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| click | L'événement click se produit lorsque l'utilisateur clique ou touche la caractéristique avec le clavier ou le pointeur, ou lorsque la méthode [click()](#click) est appelée. |
| focus | L'événement de `focus` se produit lorsque la caractéristique est ciblée par le clavier ou le pointeur, ou lorsque la méthode [focus()](#focusoptions) est appelée. | |
| blur | L'événement de `blur` se produit lorsque la caractéristique perd le focus avec un clavier ou un pointeur, ou lorsque la méthode [blur()](#blur) est appelée. |
---

## Exemples

### mapml2geojson
#### Options par défaut
Un exemple montrant la sortie GeoJSON par défaut lorsqu'aucune option n'est fournie.
``` html
<map-layer label="Géométrie de point" checked="">
   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>
   <map-meta name="projection" content="OSMTILE"></map-meta>
   <map-meta name="cs" content="gcrs"></map-meta>
   <map-feature>
      <map-featurecaption>Géométrie de point</map-featurecaption>
      <map-geometry>
         <map-point>
            <map-coordinates>-75.6916809 45.4186964</map-coordinates>
         </map-point>
      </map-geometry>
      <map-properties>
         <table>
            <thead>
               <tr>
                  <th role="columnheader" scope="col">Nom de propriété</th>
                  <th role="columnheader" scope="col">Valeur de la propriété</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">prop0</th>
                  <td itemprop="prop0">Ceci est un point</td>
               </tr>
            </tbody>
         </table>
      </map-properties>
   </map-feature>
</map-layer>
<script>
window.onload = (event) => {
   let couche = document.querySelector('map-layer');
   let sortie = layer.mapml2geojson();
};
</script>
```

<details>
<summary>Cliquez pour voir la sortie GeoJSON</summary>

``` js
{
 "title": "Géométrie de point",
 "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],
 "type": "FeatureCollection",
 "features": [{
     "type": "Feature",
     "geometry": {
         "type": "Point",
         "coordinates": [-75.6916809, 45.4186964]
     },
     "properties": {
         "prop0": "Ceci est un point"
     }
 }]
}
```

</details>

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [HTMLFeatureElement](https://maps4html.org/MapML-Specification/spec/#the-feature-element) |

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
| [**Propriétés**](#propriétés) | [limité](https://github.com/Maps4HTML/MapML-Specification/issues/247) * | complet | complet |
| [**Méthodes**](#méthodes) | [aucun](https://github.com/Maps4HTML/MapML-Specification/issues/248) * | limité * | limité *|

<details>
<summary>Exceptions *</summary>
<ol>
<li>Les attributs IDL et de contenu (propriétés) de map-feature min, max et extent ne sont pas encore spécifiés</li>
<li>Les opérations (méthodes) de map-feature ne sont pas encore spécifiées</li>
<li>L'élément personnalisé map-feature implémente les méthodes mais le paramètre options de focus(options) n'est pas encore implémenté</li>
<li>Cette API est encore en cours de discussion</li>
</ol>
</details>

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/map-feature-api.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
