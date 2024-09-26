"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[2867],{9019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(4848),l=t(8453);const s={id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},i="HTMLLayerElement",c={id:"api/layer-api",title:"HTMLLayerElement",description:"Propri\xe9t\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/layer-api.md",sourceDirName:"api",slug:"/api/layer-api",permalink:"/web-map-doc/fr/docs/api/layer-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},sidebar:"sidebar",previous:{title:"HTMLMapmlViewerElement",permalink:"/web-map-doc/fr/docs/api/mapml-viewer-api"},next:{title:"HTMLFeatureElement",permalink:"/web-map-doc/fr/docs/api/map-feature-api"}},a={},d=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"checked",id:"checked",level:3},{value:"hidden",id:"hidden",level:3},{value:"disabled",id:"disabled",level:3},{value:"label",id:"label",level:3},{value:"src",id:"src",level:3},{value:"opacity",id:"opacity",level:3},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"zoomTo()",id:"zoomto",level:3},{value:"mapml2geojson(options)",id:"mapml2geojsonoptions",level:3},{value:"Param\xe8tres",id:"param\xe8tres",level:4},{value:"Options",id:"options",level:4},{value:"Remarques",id:"remarques",level:6},{value:"\xc9v\xe9nements",id:"\xe9v\xe9nements",level:2},{value:"Exemples",id:"exemples",level:2},{value:"mapml2geojson",id:"mapml2geojson",level:3},{value:"Options par d\xe9faut",id:"options-par-d\xe9faut",level:4},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h6:"h6",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"htmllayerelement",children:"HTMLLayerElement"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n",(0,r.jsx)(n.h3,{id:"checked",children:"checked"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLLayerElement.checked"})," est une valeur bool\xe9enne de lecteur et d\u2019\xe9criture qui active ou d\xe9sactive la couche et reproduit l\u2019attribut v\xe9rifi\xe9 (checked). L\u2019\xe9tat v\xe9rifi\xe9 est reproduit dans l\u2019interface utilisateur du contr\xf4le de la couche sous la forme d\u2019une case \xe0 cocher \xe0 c\xf4t\xe9 du nom de cette derni\xe8re. La propri\xe9t\xe9 v\xe9rifi\xe9e peut servir \xe0 effectuer un changement programmatique de l\u2019\xe9tat v\xe9rifi\xe9 de la couche.\nLa propri\xe9t\xe9 v\xe9rifi\xe9e ne peut \xeatre modifi\xe9e si l\u2019\xe9tat de la propri\xe9t\xe9 est \xab d\xe9sactiv\xe9e \xbb)."]}),"\n",(0,r.jsx)(n.p,{children:"Pour activer l\u2019\xe9tat v\xe9rifi\xe9 d\u2019une couche activ\xe9e :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlayer.checked = true; // les valeurs valides sont true | false\n"})}),"\n",(0,r.jsx)(n.p,{children:"Pour lire l\u2019\xe9tat v\xe9rifi\xe9 de la couche :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlet isChecked = layer.checked;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hidden",children:"hidden"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLLayerElement.hidden"})," est une valeur bool\xe9enne de lecture et d\u2019\xe9criture qui ne masque ou n\u2019affiche la couche qu\u2019au niveau du contr\xf4le de la couche. Masquer la couche n\u2019a aucune incidence sur la pr\xe9sence de son contenu sur la carte, seulement sur le contr\xf4le de la pr\xe9sence de la couche.\nCela peut \xeatre utile pour g\xe9rer les couches de courte dur\xe9e dans la carte, comme les r\xe9sultats d\u2019une recherche, sans que l\u2019utilisateur soit oblig\xe9 de g\xe9rer l\u2019\xe9tat de la couche, ce dont se charge votre application.\nCela est \xe9galement pratique pour g\xe9rer une couche permanente sans surcharger l\u2019interface utilisateur."]}),"\n",(0,r.jsx)(n.p,{children:"Pour d\xe9finir que la couche est masqu\xe9e ou la mettre \xe0 jour avec cet \xe9tat :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlayer.hidden = true; // les valeurs valides sont true | false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pour obtenir la valeur hidden de ",(0,r.jsx)(n.code,{children:"<layer->"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlet isHidden = layer.hidden;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"disabled",children:"disabled"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLLayerElement.disabled"})," donne un acc\xe8s en lecture seule \xe0 l\u2019\xe9tat d\xe9sactiv\xe9 de la couche. Une couche est d\xe9sactiv\xe9e si son contenu n\u2019est pas rendu, soit parce qu\u2019il sort compl\xe8tement de l\u2019\xe9tendue de la carte affich\xe9e ou parce qu\u2019une erreur est associ\xe9e au traitement de la couche, par exemple lorsque celle-ci se trouve dans un projection incompatible avec celle de la carte. Lorsqu\u2019une couche est d\xe9sactiv\xe9e, l\u2019utilisateur ne peut interagir avec elle au niveau du contr\xf4le de la couche, et elle n\u2019est pas visible dans la fen\xeatre d\u2019affichage de la carte. Si la couche devient activ\xe9e, par exemple \xe0 la suite d\u2019une manipulation de la carte, l\u2019utilisateur peut interagir avec elle au niveau du contr\xf4le de la couche, et elle est visible dans la fen\xeatre d\u2019affichage de la carte."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"label",children:"label"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLLayerElement.label"})," refl\xe8te l'attribut de contenu ",(0,r.jsx)(n.code,{children:"label"}),", et sp\xe9cifie un\nnom accessible de repli pour la couche, si le nom accessible n'est pas fourni par un\n\xe9l\xe9ment local ",(0,r.jsx)(n.code,{children:"<map-title>"})," enfant de l'\xe9l\xe9ment ",(0,r.jsx)(n.code,{children:"<layer->"}),", ou dans l'\xe9l\xe9ment\n",(0,r.jsx)(n.code,{children:"<map-head>"})," d'un document MapML charg\xe9 via la valeur URL dans l'attribut ",(0,r.jsx)(n.code,{children:"src"}),",\nrespectivement."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour d\xe9finir la label de ",(0,r.jsx)(n.code,{children:"<layer->"})," ou mettre \xe0 jour celle-ci :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlayer.label = \"Nouveau titre\";\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pour obtenir la valeur de la label de ",(0,r.jsx)(n.code,{children:"<layer->"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlet label = layer.label;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"src",children:"src"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLLayerElement.src"})," reproduit l\u2019attribut HTML src et pr\xe9cise l\u2019adresse URL du document MapML de la couche. La propri\xe9t\xe9 src peut ne pas \xeatre d\xe9finie si la couche contient du contenu en ligne. Si la propri\xe9t\xe9 src retourne une valeur, tout contenu en ligne est omis.\nPour d\xe9finir ou mettre \xe0 jour la src de ",(0,r.jsx)(n.code,{children:"<layer->"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlayer.src = \"https://example.org\";\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pour obtenir la valeur (adresse URL) de la src de ",(0,r.jsx)(n.code,{children:"<layer->"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlet url = layer.src;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"opacity",children:"opacity"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLLayerElement.opacity"})," donne acc\xe8s en lecture ou en \xe9criture \xe0 la valeur d\u2019",(0,r.jsx)(n.code,{children:"opacity"}),', qui correspond dans le contr\xf4le de couche pour chaque couche, sous "Opacit\xe9".']}),"\n",(0,r.jsxs)(n.p,{children:["Pour d\xe9finir ou mettre \xe0 jour l\u2019opacit\xe9 de ",(0,r.jsx)(n.code,{children:"<layer->"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlayer.opacity = 0.5; // les valeurs valides vont de 0.0 \xe0 1.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pour obtenir la valeur de l\u2019opacit\xe9 de ",(0,r.jsx)(n.code,{children:"<layer->"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlet opacity = layer.opacity;\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"m\xe9thodes",children:"M\xe9thodes"}),"\n",(0,r.jsx)(n.h3,{id:"zoomto",children:"zoomTo()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLLayerElement.zoomTo()"})," Zoom sur l'\xe9tendue de la couche dans la carte,\nau niveau de zoom maximum dans lequel l'\xe9tendue s'inscrit compl\xe8tement."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let layer = document.querySelector('layer-');\nlayer.zoomTo();\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"mapml2geojsonoptions",children:"mapml2geojson(options)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Fonction"}),(0,r.jsx)(n.th,{children:"Retours"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:"mapml2geojson(<Object> options)"})}),(0,r.jsx)(n.td,{children:"Objet de collection de caract\xe9ristiques JavaScript (GeoJSON)"}),(0,r.jsxs)(n.td,{children:["Cette fonction transforme l\u2019\xe9l\xe9ment- enfant ",(0,r.jsx)(n.code,{children:"<feature>"})," d\u2019un \xe9l\xe9ment ",(0,r.jsx)(n.code,{children:"<layer->"})," en un objet GeoJSON FeatureCollection. Vous fournissez les ",(0,r.jsx)(n.a,{href:"#options",children:"options"})," pour contr\xf4ler la transformation. Cette fonction doit servir dans un \xe9v\xe9nement windows.onload."]})]})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mapml2geojson"})," doit \xeatre appel\xe9 dans un \xe9v\xe9nement windows.onload pour fonctionner correctement, comme suit :"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"window.onload = (event) => {\n  let layer = document.querySelector('layer-');\n  layer.mapml2geojson();\n};\n"})})]}),"\n",(0,r.jsx)(n.h4,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xc9l\xe9ment <HTMLLayerElement>"}),(0,r.jsxs)(n.td,{children:["\xc9l\xe9ment ",(0,r.jsx)(n.code,{children:"<layer->"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"<Object> options"}),(0,r.jsxs)(n.td,{children:["Vous fournissez des param\xe8tres au moyen d\u2019un objet d\u2019options avec des  ",(0,r.jsx)(n.a,{href:"#options",children:"noms d\u2019option pr\xe9d\xe9finis"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.p,{children:"<Object> Ensemble de paires de cl\xe9s ou de valeurs qui personnalise l\u2019objet de sortie GeoJSON. Toutes les options sont facultatives et d\xe9crites ci-apr\xe8s."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"D\xe9faut"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"propertyFunction"})}),(0,r.jsx)(n.td,{children:"<Function>"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"n/a"})}),(0,r.jsxs)(n.td,{children:["Fonction que vous fournissez et qui mappe l\u2019\xe9l\xe9ment ",(0,r.jsx)(n.code,{children:"<map-properties>"})," de la caract\xe9ristique \xe0 un ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2",children:'membre GeoJSON "properties"'}),", puisque qu\u2019il n\u2019y a que vous qui conna\xeet la conception du balisage dans votre valeur ",(0,r.jsx)(n.code,{children:"<map-properties>"}),". Si vous ne fournissez pas cette option, une fonction par d\xe9faut essaiera de renverser un \xe9l\xe9ment-enfant ",(0,r.jsx)(n.code,{children:"<table>"})," de ",(0,r.jsx)(n.code,{children:"<map-properties>"}),", comme si ce tableau \xe9tait g\xe9n\xe9r\xe9 par la ",(0,r.jsx)(n.a,{href:"mapml-viewer-api#options",children:"fonction d\u2019option de propri\xe9t\xe9s par d\xe9faut de geojson2mapml"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"transform"})}),(0,r.jsx)(n.td,{children:"<Boolean>"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{children:["Transforme des valeurs ",(0,r.jsx)(n.code,{children:"<map-coordinates>"})," en valeurs ",(0,r.jsx)(n.code,{children:"gcrs"})," (longitude, latitude), si elles ne le sont pas d\xe9j\xe0. GeoJSON ",(0,r.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7946.html#section-4",children:"recommande"})," d\u2019utiliser les coordonn\xe9es de longitude et de latitude WGS 84, il s\u2019agit donc l\xe0 du comportement par d\xe9faut."]})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"remarques",children:"Remarques"}),"\n",(0,r.jsxs)(n.p,{children:["Au besoin, ",(0,r.jsx)(n.code,{children:"mapml2geojson"})," transforme des coordonn\xe9es en ",(0,r.jsx)(n.code,{children:"gcrs"})," par d\xe9faut avant la s\xe9rialisation. Prenez note que toutes les projections g\xe9ographiques CRS (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es) ne sont pas \xe9quivalentes, et que l\u2019interpr\xe9tation de telles coordonn\xe9es n\u2019est pas garantie conforme aux coordonn\xe9es WGS 84 ou GPS, et que, par cons\xe9quent, elles ne suivent pas n\xe9cessairement la ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#section-4",children:"recommandation GeoJSON"}),", qui requiert des coordonn\xe9es de longitude et de latitude cod\xe9es conform\xe9ment au syst\xe8me g\xe9od\xe9sique WGS 84. Le moteur de projection utilis\xe9 pour mettre en \u0153uvre cette conversion est incapable de transformer des coordonn\xe9es d\u2019un ellipso\xefde \xe0 un autre. Par cons\xe9quent, le JSON r\xe9sultant DOIT (d\u2019une mani\xe8re qui reste \xe0 d\xe9terminer) \xeatre \xe9tiquet\xe9 avec la donn\xe9e qu\u2019utilise la projection de la couche."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\xe9v\xe9nements",children:"\xc9v\xe9nements"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom de l\u2019\xe9v\xe9nement"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"changestyle"}),(0,r.jsx)(n.td,{children:"D\xe9clench\xe9 avant que la couche ne change de src parce que l\u2019utilisateur a s\xe9lectionn\xe9 un autre style au niveau du contr\xf4le de la couche"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"changeprojection"}),(0,r.jsx)(n.td,{children:"D\xe9clench\xe9 avant que la couche ne change de projection parce que la projection d\xe9clar\xe9e n\u2019est pas \xe9gale \xe0 celle de la carte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"loadedmetadata"}),(0,r.jsxs)(n.td,{children:["D\xe9clench\xe9 lorsque les m\xe9tadonn\xe9es d'une couche ont \xe9t\xe9 charg\xe9es. L\u2019intention est que cet \xe9v\xe9nement soit analogue \xe0 l\u2019\xe9v\xe9nement ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event",children:"loadedmetadata de l\u2019\xe9l\xe9ment m\xe9dia"}),", mais avec les couches d\u2019une carte."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"map-change"}),(0,r.jsxs)(n.td,{children:["D\xe9clench\xe9 lorsque l'attribut ",(0,r.jsx)(n.code,{children:"checked"})," change d'\xe9tat"]})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,r.jsx)(n.h3,{id:"mapml2geojson",children:"mapml2geojson"}),"\n",(0,r.jsx)(n.h4,{id:"options-par-d\xe9faut",children:"Options par d\xe9faut"}),"\n",(0,r.jsx)(n.p,{children:"Exemple montrant la sortie GeoJSON par d\xe9faut lorsqu\u2019aucune option n\u2019est fournie."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<layer- label="G\xe9ometrie du point" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>G\xe9ometrie du point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Nom de la propri\xe9t\xe9 </th>\n                  <th role="columnheader" scope="col">Nom de la propri\xe9t\xe9</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">Ceci est un point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</layer->\n<script>\nwindow.onload = (event) => {\n   let layer = document.querySelector(\'layer-\');\n   let output = layer.mapml2geojson();\n};\n<\/script>\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Cliquez pour afficher la sortie GeoJSON"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n "title": "G\xe9om\xe9trie du point",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "Ceci est un point"\n     }\n }]\n}\n'})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Sp\xe9cification"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://maps4html.org/MapML-Specification/spec/#dom-htmllayerelement",children:"HTMLLayerElement"})})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"exigences",children:"Exigences"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-",children:"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub"})}),"\n",(0,r.jsx)("p",{children:(0,r.jsxs)("b",{children:[(0,r.jsx)("span",{class:"requirement",children:"exigence"}),"\n",(0,r.jsx)("span",{class:"enhancement",children:"am\xe9lioration"}),"\n",(0,r.jsx)("span",{class:"impractical",children:"peu pratique"}),"\n",(0,r.jsx)("span",{class:"undecided",children:"ind\xe9cis"}),"\n",(0,r.jsx)("span",{class:"discussion",children:"en cours de discussion"})]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"}}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Spec"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Viewer"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"API"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"#propri%C3%A9t%C3%A9s",children:(0,r.jsx)(n.strong,{children:"Propri\xe9t\xe9s"})})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"complet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"#m%C3%A9thodes",children:(0,r.jsx)(n.strong,{children:"M\xe9thodes"})})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"complet"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/layer-api.md",children:["Modifier cette page sur ",(0,r.jsx)(n.strong,{children:"Github"})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Discutez avec nous sur ",(0,r.jsx)(n.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);