---
id: link
title: "<map-link>"
slug: /elements/link/
---

L’élément `<map-link>` est un élément HTML `link` étendu utilisé dans les cartes Web. La majorité des extensions se concentrent sur les nouvelles valeurs proposées de l’attribut `rel`.

L'élément `<map-link>` a plusieurs usages :

- inclure des liens d’attribution des données de couche/d’attribution de licences dans le coin inférieur droit de la carte;
- fournir des liens vers différents styles d’une couche, au moyen des valeurs rel `style` et `self`. Ces liens sont présentés à l’utilisateur sous forme d’affordances et peuvent être utilisés pour passer, par exemple, de la vue satellite à la vue carte d’une couche;
- fournir des liens vers d’autres projections d’une couche, en utilisant la valeur rel `alternate`, conjointement avec l’attribut `projection="..."`. Ces liens sont automatiquement suivis par le polyfill, s’il y a lieu;
- fournir un modèle URL traité et converti en URL et extrait par le polyfill chaque fois que la carte requiert le rendu d’un nouveau contenu, comme un pavé, en utilisant les valeurs rel `tile`, `image`, `feature` et `query`, conjointement avec l’attribut  `tref="..."`. Ces liens sont automatiquement créés et suivis/importés, s’il y a lieu;
- inclure des liens vers des graphiques de légende pour une couche. À l’heure actuelle, ces liens sont présentés comme des hyperliens, et non comme des graphiques;
- fournir des liens vers des feuilles de style en cascade (CSS) en utilisant la valeur rel `stylesheet`, lesquelles sont importées automatiquement par le polyfill;
- fournir des liens vers les couches au niveau de zoom natif suivant, en utilisant les valeurs rel `zoomin`, `zoomout`. Ces liens sont automatiquement suivis par le polyfill, s’il y a lieu.

<!-- démo/exemple -->
<iframe src="../../../demo/map-link-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>


## Attributs

### `rel`

L’attribut `rel` désigne le type de ressource auquel il est lié. MapML définit les différentes utilisations des valeurs des mots-clés `rel` nouveaux et existants.

| Value         | Description                                          	  |
|--------------	|--------------------------------------------------------	|
| `license`       | La valeur `href` renvoie à une ressource de description de licence pour la couche. L’attribut `title` est utilisé comme texte à afficher pour le lien. L’hyperlien est présenté dans le contrôle d’attribution, dans le coin inférieur droit de la fenêtre d’affichage de la carte.
| `alternate`     | La valeur rel `alternate` est utilisée avec l’attribut `projection` pour fournir le lien vers une ressource de couche équivalente dans une projection différente de celle fournie par la ressource actuelle. Cette fonction peut être très utile pour offrir une expérience conviviale aux auteurs, lorsqu’un document cartographique peut être ajouté comme une couche à une carte qui affiche une projection différente de celle de la couche. Le polyfill « renverra » automatiquement à l’autre document de projection correspondant à celui de la carte. |
| `self`       | Le lien `self style` (ou `style self`) rel indique que le document actuel fait partie d’un ensemble d’autres styles nommés pour une couche. Les autres parties de l’ensemble sont des éléments `<map-link>` étiquetés avec la relation de lien `style`. Les autres parties de l’ensemble de styles autres ou différents pour la couche sont présentées à l’utilisateur comme un ensemble de choix mutuellement exclusifs. La couche actuelle est remplacée entièrement dès que l’utilisateur sélectionne l’un des choix. |
| `style`      | La relation de lien `style` en soi désigne ce lien comme un style différent du style de la couche actuelle. Elle est souvent utilisée pour passer, par exemple, de la vue satellite à la vue cartographique d’une même couche. S’il est utilisé avec la relation de lien `self`, c.-à-d. `rel="self style"`, le document actuel est désigné comme une partie de l’ensemble des autres styles, et il est sélectionné dans l’affordance liée au contrôle de la couche pour le changement de style. |
| `tile`       | Cette relation de lien est utilisée conjointement avec l’attribut `tref="..."` pour définir un modèle URL qui définit les ressources natives des pavés (serveur). Elle peut être utilisée conjointement avec l’attribut `type="..."` pour indiquer le type de support de la ressource distante, par exemple : `type="text/mapml"` indique au polyfill d’analyser la ressource extraite et de la présenter sous forme d’entités de carte. Cette relation de lien est utilisée avec les services des pavés cartographiques Web (WMTS) normalisés et leurs équivalents non normalisés. |
| `image`      | La relation de lien `image` est utilisée de façon similaire à la relation de lien `tile`, à la différence qu’elle indique au polyfill que les ressources distantes à extraire sont des images qui seront réduites (par le serveur) afin de correspondre parfaitement à la largeur et à la hauteur de la fenêtre d’affichage de la carte. Cette relation de lien est utilisée avec les services de cartes Web normalisés (SCW) et leurs équivalents non normalisés. |
| `features`    | La relation de lien `features` indique au polyfill d’analyser la ressource extraite et de la présenter sous forme d’entités de carte. |
| `zoomin`     | Le polyfill suit automatiquement le lien `href` si l’utilisateur effectue dans la carte un zoom avant dont la valeur est supérieure à la valeur de zoom maximale de la couche actuelle. La couche de carte actuelle est alors remplacée par la ressource de la couche de carte référencée. Le polyfill ne représente pas ce lien comme une affordance visible par l’utilisateur; ce lien est suivi automatiquement. Si la ressource distante ne contient pas de lien réciproque `zoomout`, le changement d’état de la carte est unidirectionnel, c’est-à-dire que la couche est remplacée de façon permanente. |
| `zoomout`    | Le polyfill suit automatiquement le lien `href` si l’utilisateur effectue dans la carte un zoom arrière dont la valeur est inférieure à la valeur de zoom minimale de la couche actuelle. La couche de carte actuelle est alors remplacée par la ressource de la couche de carte référencée. Le polyfill ne représente pas ce lien comme une affordance visible par l’utilisateur; ce lien est suivi automatiquement. Si la ressource distante ne contient pas de lien réciproque `zoomin`, le changement d’état de la carte est unidirectionnel, c’est-à-dire que la couche est remplacée de façon permanente. |
| `legend`     | La relation de lien `legend` désigne un lien vers des métadonnées, habituellement une image, décrivant les symboles utilisés dans la couche actuelle. Actuellement, le polyfill crée un hyperlien pour l’étiquette de la couche dans le contrôle des couches, lequel hyperlien s’ouvre dans un nouveau contexte de navigation. |
| `query`      | La relation de lien `query` est utilisée conjointement avec l’attribut `tref="..."` pour établir un modèle URL permettant de créer une URL de requête de carte en fonction des gestes de l’utilisateur dans la carte, par exemple cliquer ou appuyer sur la carte. Ces URL sont extraites et la réponse est présentée dans une fenêtre contextuelle dans le haut de la carte. Ces requêtes peuvent retourner des réponses text/html ou text/mapml. Dans ce dernier cas, la réponse peut contenir plus d’une entité. Le cas échéant, une fenêtre contextuelle paginée est générée pour permettre à l’utilisateur de parcourir les métadonnées de chaque entité. |
| `stylesheet` | Ce lien permet d’importer une feuille de style en cascade (CSS) à partir de la valeur `href`. |


---

### `type`

L’attribut `type` définit le type [MIME media type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) prévu de la ressource distante. Selon la valeur [`rel` value](#rel), l’attribut `type` peut jouer un rôle important dans la détermination du comportement du polyfill.

Les valeurs communes de l’attribut `type` comprennent **text/html**, **text/mapml** et **image/\***.

---
### `title`

L’attribut `title` de la ressource liée est habituellement rendu ou présenté à l’utilisateur, par exemple, le lien `<map-link rel="license" title="Copyright FooBar Inc.">` est rendu comme un hyperlien dans l’entrée de contribution d’attribution de la couche actuelle.

---
### `href`

L’attribut `href` d’un élément `<map-link>` doit correspondre à l’URL d’une ressource pouvant être extraite.
L’URL peut être absolue ou relative.

---
### `hreflang`

Avis [désignation linguistique](https://datatracker.ietf.org/doc/html/rfc5646) concernant la ressource distante.

---
### `tref`

L’attribut `tref` contient une chaîne qui, une fois traitée, sera considérée comme une URL et sera extraite automatiquement par le polyfill. Cette chaîne est appelée modèle URL. Le traitement effectué avant qu’un modèle URL devienne une URL valide est une _substitution de référence à une variable_. Les variables sont créées par les éléments `<map-input name="foo">`. Le nom d’une variable peut être référencée dans la chaîne du modèle URL contenue dans la valeur `tref`, à l’aide de la notation de syntaxe `{foo}`. Une chaîne de modèle URL peut contenir aucune ou plusieurs références à une variable. Le traitement supprimera les références aux variables qui sont valides. Par conséquent, toutes les variables créées par les éléments `<map-input>`s qui sont référencées dans le modèle seront remplacées par la valeur de la variable au moment du traitement.

---
### `tms`

L’attribut booléen `tms` indique au polyfill que l’axe vertical (rangée) du serveur de pavés distant respecte [la convention tms](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification), où l’axe des y (rangée) est inversé (par rapport à la [convention](https://gist.github.com/tmcw/4954720#converting)), et où l’orientation positive des valeurs des rangées de pavés correspond à haut/nord. Cette convention n’est pas une norme, mais elle a malheureusement gagné en popularité auprès des professionnels des systèmes d’information géographique (SIG) à code source libre.

---
### `projection`

L’attribut `projection` indique la projection de la ressource de la couche distante.
Cet attribut est utilisé conjointement avec la valeur [`rel=alternate` rel value](#rel).

Les valeurs de projection [définies par le polyfill](../mapml-viewer#projection) comprennent : 
`OSMTILE`, `WGS84`, `CBMTILE` et `APSTILE`. Les valeurs de projection sont sensibles à la casse.

---


| <!-- -->    | <!-- -->    |
|-------------|-------------|
| [Catégories de contenu](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories) | [Contenu de métadonnées](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content) |
| Contenu autorisé | Aucun. Tout comme l’élément HTML `<link>`, l’élément `<map-link>` est un élément vide. |
| Omission de balises | Bien que l’élément HTML `<link>` soit un élément vide, le polyfill doit avoir une balise de fin. |
| Parents autorisés | Tout élément qui accepte les enfants d’un élément de métadonnées. |
| Rôle ARIA implicite   | [link](https://w3c.github.io/aria/#link) avec l’attribut `href`. |
| Rôles ARIA autorisés | Aucun rôle autorisé. |
| DOM Interface    | [HTMLLinkElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement) |

---

## Exemples

### Tile Mapping Specification (tms)

```html
<mapml-viewer  projection="OSMTILE" zoom="1" lat="0" lon="0" controls>
 <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked hidden  ></layer->
 <layer- label="Source des fichiers GeoTIFF optimisés pour l’infonuagique (COG) du service des pavés cartographiques (TMS)" checked>
   <map-extent units="OSMTILE">
       <map-input name="zoom" type="zoom"  min="1" max="12"></map-input>
       <map-input name="row" type="location" axis="row" units="tilematrix" ></map-input>
       <map-input name="col" type="location" axis="column" units="tilematrix"></map-input>
       <!-- utilise l’attribut tms pour indiquer que le cache des pavés distants suit les conventions tms -->
       <map-link tms rel="tile" tref="https://s3-eu-west-1.amazonaws.com/vito-lcv/global/2019/cog-grass-colored-fraction_grass/{zoom}/{col}/{row}.png">
   </map-link>
   </map-extent>
   </layer->
</mapml-viewer>
```

---

## Accessibilité

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [élément MapML « link »](https://maps4html.org/MapML/spec/#the-link-element-0) |
| [élément HTML « link »](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) |

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
|                        <div class="requirement">Affiche l’attribution des données cartographiques et les liens (5.2.4)</div>                   | complet | complet |  |
| [**Navigation des utilisateurs (vue panoramique et zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
| <div class="discussion">Masque ou affiche (et peut charger de façon dynamique) les entités vectorielles et les étiquettes lors du zoom (5.4.7)</div> | [complet](https://maps4html.org/MapML/spec/#link-rel-features) | [complet](https://maps4html.org/web-map-doc/docs/elements/link/#rel) |  |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/link.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
