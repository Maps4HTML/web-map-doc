---
id: feature
title: "<map-feature>"
slug: /elements/feature/
---
Les [caractéristiques](https://en.wikipedia.org/wiki/Geographical_feature) de la carte sont des objets de localisation, réels ou imaginaires, représentés en deux dimensions selon le modèle normalisé [Simple Features (caractéristiques simples)](https://en.wikipedia.org/wiki/Simple_Features). Il existe un large éventail de formats qui permettent de coder ce modèle, en particulier GeoJSON, Keyhole Markup Language (KML) et les fichiers Shapefile (.shp), pour ne nommer que ceux-là.

Les caractéristiques de la carte sont représentées dans HTML MapML par l’élément `<map-feature>` qui est rendu sur la carte par conversion en format SVG. Cela permet de mettre la caractéristique à l’échelle sans distorsion si l’utilisateur effectue un zoom avant ou arrière. 

Un élément `<map-feature>` est le conteneur du nom accessible de la caractéristique (`<map-featurecaption>`), de ses propriétés scalaires (`<map-properties>`)  et de sa géométrie (`<map-geometry>`).  L’élément `<map-feature>` peut être modélisé sous forme de contenu HTML en ligne et comme élément-enfant de `<map-layer>` ou encore dans un document XHTML MapML comme élément- enfant de `<map-body>`.

<iframe src="../../../demo/map-feature-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributs

### `zoom`

Cet attribut permet de définir le niveau de zoom auquel la caractéristique est rendue. 
La valeur du zoom doit se situer dans une plage allant de 0 au niveau de zoom 
maximal de la [projection](../meta/#attributs) de la carte.

### `min`

L'attribut `min` (zoom) permet d'obtenir ou de définir le zoom minimum natif de la 
caractéristique. La géométrie et les autres propriétés des caractéristiques de 
la carte dépendent de l'échelle. La valeur `min` est une valeur limite de zoom de 
rendu ; à des valeurs de zoom de carte inférieures à `min`, la caractéristique 
ne sera pas rendue.

Si la valeur `min` n'est pas fournie, une valeur de repli sera calculée; la valeur 
de repli sera la valeur de `zoom` minimale de la couche ou, si elle n'est pas spécifiée, 
la valeur minimale de la projection du visualiseur de carte, c'est-à-dire 0.

### `max`

L'attribut `max` (zoom) permet d'obtenir ou de définir le `zoom` maximal natif de la 
caractéristique. La géométrie et les autres propriétés des caractéristiques de la 
carte dépendent de l'échelle. La valeur `max` est une valeur limite de 
[`zoom`](#zoom) de rendu; à des valeurs de [`zoom`](#zoom) de carte supérieures à 
`max`, la caractéristique ne sera pas rendue.

Si `max` n'est pas fourni, une valeur de repli sera calculée ; la valeur de repli 
sera la valeur de [`zoom`](#zoom) maximale de la couche ou, si elle n'est pas 
spécifiée, la valeur maximale de [`zoom`](#zoom) de la projection du visualiseur 
de carte, par exemple 25 (en fonction de la projection).

---

## Éléments-enfants

### `<map-featurecaption>`

Cet élément contient le nom accessible de la caractéristique, affiché lorsque celle-ci est active à l’écran ou que l’on y place le pointeur de la souris.

---

### `<map-properties>`

Cet élément contient l’information contextuelle d’une caractéristique donnée. Les détails sur les éléments de propriété et leur syntaxe se trouvent [ici](../properties/).

---

### `<map-geometry>`

Cet élément contient divers points, lignes et polygones qui seront dessinés. Les détails sur les éléments de géométrie et leur syntaxe se trouvent [ici](../geometry/).

#### Attributs

- `cs`
  - Cet attribut permet de définir le [système de coordonnées](../meta/#attributs) des géométries.
  - Prend la valeur pcrs (coordonnées projetées) par défaut, mais peut être défini explicitement avec les valeurs tilematrix | pcrs | gcrs.

---

## Éléments connexes

D’autres éléments peuvent s’avérer importants pour fournir le contexte des données de la caractéristique :


### `<map-meta name="zoom">`

Établit le minimum et le maximum natifs [zoom natif](../meta/#attributs). Permet également de définir une valeur; il s’agit du niveau de zoom par défaut de toutes les caractéristiques lorsque l’élément  `<map-feature>` n’a pas d’attribut de zoom.

```html
<map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>
```

---

### `<map-meta name="projection">`

Définit la [projection](../meta/#attributs) de la couche. 

```html
<map-meta name="projection" content="CBMTILE"></map-meta>
```

---

### `<map-meta name="cs">`

Définit le [système de coordonnées](../meta/#attributs) par défaut de la couche. S’il manque l’attribut cs à une caractéristique, il « reprend » la valeur fournie par un élément `map-meta` ou `pcrs` s’il n’y a pas d’élément `map-meta` dans la portée.

```html
<map-meta name="cs" content="gcrs"></map-meta>
```

---

### `<map-meta name="extent">`

Définit l’[extent](../meta/#attributs) de la couche.

```html
<map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>
```

---

## Exemples

```html
  <mapml-viewer projection="CBMTILE" zoom="2" lat="45.5052040" lon="-75.2202344"
    controls>

    <map-layer label="Arizona" checked>
      <map-meta name="projection" content="CBMTILE"></map-meta>
      <map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>
      <map-meta name="cs" content="gcrs"></map-meta>
      <map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>
      <map-link id="first" rel="stylesheet" type="text/css" href="first.css"></map-link>
      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Test</h1>
          <a href="http://example.org/">test</a>
        </map-properties>
        <map-geometry cs="tilematrix">
          <map-polygon>
            <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>

      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Test</h1>
        </map-properties>
        <map-geometry cs="pcrs">
          <map-polygon>
            <map-coordinates>257421 -3567196 -271745 1221771 -3896544 242811 -3183549 -2613313</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>

      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Test</h1>
        </map-properties>
        <map-geometry cs="tcrs">
          <map-polygon>
            <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>

      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Arizona</h1>
        </map-properties>
        <map-geometry>
          <map-polygon>
            <map-coordinates>-109.042503 37.000263 -109.04798 31.331629 -111.074448 31.331629 -112.246513 31.704061
              -114.815198 32.492741 -114.72209 32.717295 -114.524921 32.755634 -114.470151 32.843265 -114.524921
              33.029481 -114.661844 33.034958 -114.727567 33.40739 -114.524921 33.54979 -114.497536 33.697668
              -114.535874 33.933176 -114.415382 34.108438 -114.256551 34.174162 -114.136058 34.305608 -114.333228
              34.448009 -114.470151 34.710902 -114.634459 34.87521 -114.634459 35.00118 -114.574213 35.138103
              -114.596121 35.324319 -114.678275 35.516012 -114.738521 36.102045 -114.371566 36.140383 -114.251074
              36.01989 -114.152489 36.025367 -114.048427 36.195153 -114.048427 37.000263 -110.499369 37.00574
              -109.042503 37.000263</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>
    </map-layer>
  </mapml-viewer>
```
### Une caractéristique de la carte HTML en ligne

```html
<map-layer label="My Feature Layer" checked>
    <map-feature id="mem35059" zoom="17">
      <map-properties>
        <table>
          <tr><th>code</th><td>1200020</td></tr>
          <tr><th>accuracy</th><td>26</td></tr>
          <tr><th>valdate</th><td>1995</td></tr>          
          <tr>
            <th>image</th>
            <td>
              <a href="https://www.veterans.gc.ca/eng/remembrance/memorials/national-inventory-canadian-memorials/details/9304">
                <img src="https://www.veterans.gc.ca/images/remembrance/memorials/national-inventory-canadian-memorials/mem/35059-173a.jpg" width="60" height="60">
              </a>
            </td>
          </tr>
          <tr><th>thème</th><td>FO</td></tr>
          <tr><th>type</th><td>2</td></tr>
          <tr><th>élévation</th><td>61</td></tr>
          <tr><th>altiaccu</th><td>5</td></tr>
        </table>
      </map-properties>
      <map-geometry>
        <map-point>
          <map-coordinates>-75.705278 45.397778</map-coordinates>
        </map-point>
      </map-geometry>
    </map-feature>
</map-layer>
```

### Une caractéristique de la carte dans un document XHTML MapML récupéré

```html
<map-layer label="Ma couche de caractéristiques" src="https://example.org/mem/35059.mapml"></map-layer>
```

### 35059.mapml:

```html
<mapml- lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <map-head>
    <map-title>L’homme aux deux chapeaux</map-title>
    <map-meta http-equiv="Content-Type" content="text/mapml"></map-meta>
    <map-meta charset="utf-8"></map-meta>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-meta name="cs" content="gcrs"></map-meta>
    <map-link rel="license" href="http://open.canada.ca/fr/open-government-licence-canada" title="Licence du gouvernement ouvert"/>
  </map-head>
  <map-body>
    <map-feature id="mem35059">
      <map-properties>
        <table>
          <tr><th>code</th><td>1200020</td></tr>
          <tr><th>précision</th><td>26</td></tr>
          <tr><th>valider</th><td>1995</td></tr>          
          <tr>
            <th>image</th>
            <td>
              <a href="https://www.veterans.gc.ca/eng/remembrance/memorials/national-inventory-canadian-memorials/details/9304">
                <img src="https://www.veterans.gc.ca/images/remembrance/memorials/national-inventory-canadian-memorials/mem/35059-173a.jpg" width="60" height="60" />
              </a>
            </td>
          </tr>
          <tr><th>thème</th><td>FO</td></tr>
          <tr><th>type</th><td>2</td></tr>
          <tr><th>élévation</th><td>61</td></tr>
          <tr><th>altiaccu</th><td>5</td></tr>
        </table>
      </map-properties>
      <map-geometry>
        <map-point>
          <map-coordinates>-75.705278 45.397778</map-coordinates>
        </map-point>
      </map-geometry>
    </map-feature>
  </map-body>
</mapml->
```

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément feature de MapML](https://maps4html.org/MapML-Specification/spec/#the-feature-element-0) |

---

## Exigences

[Signalez tout problème avec ces exigences sur GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">exigence</span>
<span class="enhancement">amélioration</span>
<span class="impractical">inefficace</span>
<span class="undecided">indécis</span>
<span class="discussion">en discussion</span></b></p>

|  | Spéc | Visionneuse | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Caractéristiques vectorielles et calques (5.2)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-vectors) |  |  |  |
|                         <div class="requirement">Montrer des emplacements précis ou des marqueurs personnalisés sur la carte (5.2.1)</div>                        | complet | complet |	 |
| <div class="requirement">Dessiner des polygones ou des polylignes sous la forme d’images vectorielles auxquelles on peut appliquer un style (distinctes des pavés de l’image) (5.2.2)</div> | complet | complet |  |
| [**Navigation de l’utilisateur (panoramique et zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
| <div class="discussion">Masquer ou afficher (et peut-être charger dynamiquement) les caractéristiques vectorielles et les étiquettes quand on effectue un zoom (5.4.7)</div> | [complet](https://maps4html.org/MapML-Specification/spec/#the-feature-element-0) | [expérimental](https://maps4html.org/web-map-doc/docs/elements/feature/#full-examples) |  |
| [**Application de styles personnalisés (5.5)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-custom-styling) |  |  |  |
|          <div class="undecided">Appliquer un style personnalisé pour mapper les marqueurs et les caractéristiques vectorielles (5.5.1)</div>              | [complet](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/15) | limité |  |
---

> - [Modifiez le contenu de cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/feature.md)
> - [Clavardez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
