"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7698],{3529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/geojson-api","title":"API GeoJSON","description":"Introduction","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/geojson-api.mdx","sourceDirName":"api","slug":"/api/geojson-api","permalink":"/web-map-doc/fr/docs/api/geojson-api","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"geojson-api","title":"API GeoJSON","slug":"/api/geojson-api","toc_max_heading_level":4}}');var o=t(4848),s=t(8453),a=t(1470),i=t(9365);const l={id:"geojson-api",title:"API GeoJSON",slug:"/api/geojson-api",toc_max_heading_level:4},c=void 0,d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"GeoJSON \xe0 MapML",id:"geojson-\xe0-mapml",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Options",id:"options",level:3},{value:"Exemples",id:"exemples",level:3},{value:"Utilisation des options de base",id:"utilisation-des-options-de-base",level:4},{value:"Cha\xeene d\u2019options",id:"cha\xeene-doptions",level:4},{value:"Fonction d\u2019options",id:"fonction-doptions",level:4},{value:"Options par d\xe9faut",id:"options-par-d\xe9faut",level:4},{value:"MapML \xe0 GeoJSON",id:"mapml-\xe0-geojson",level:2},{value:"Param\xe8tres",id:"param\xe8tres-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Remarques",id:"remarques",level:6},{value:"Exemples",id:"exemples-1",level:3},{value:"Options par d\xe9faut",id:"options-par-d\xe9faut-1",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h6:"h6",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["L\u2019",(0,o.jsx)(n.strong,{children:"interface de programmation d\u2019applications (API) GeoJSON"})," est fournie sous forme de biblioth\xe8que pour convertir MapML en GeoJSON et vice versa. L\u2019API GeoJSON peut \xeatre ajout\xe9e \xe0 n\u2019importe quel document, \xe0 condition qu\u2019elle soit pr\xe9c\xe9d\xe9e du module mampl-viewer, comme suit :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n    <head>\n        <script type="module" src="mapml.js"><\/script>\n        <script src="lib/geojson.js"><\/script>\n    </head>\n    <body>\n        ...\n    </body>\n</html>    \n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"geojson-\xe0-mapml",children:"GeoJSON \xe0 MapML"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Fonction"}),(0,o.jsx)(n.th,{children:"Retours"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)("code",{children:"geojson2mapml(<Object | String> json, <Object> options)"})}),(0,o.jsxs)(n.td,{children:["\xc9l\xe9ment  MapML ",(0,o.jsx)(n.code,{children:"<map-layer>"}),"."]}),(0,o.jsxs)(n.td,{children:["Convertit une caract\xe9ristique GeoJSON ou une cha\xeene ou un objet de collection de caract\xe9ristiques en \xe9l\xe9ment MapML ",(0,o.jsx)(n.code,{children:"<map-layer>"})," contenant un ou plusieurs \xe9l\xe9ments ",(0,o.jsx)(n.code,{children:"<map-feature>"}),"."]})]})})]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Jetez un coup d\u2019\u0153il \xe0 ",(0,o.jsx)(n.a,{href:"https://maps4html.org/experiments/api/custom-map-ui/geoname-search-ui.html",children:"cette application"})," au moyen de l\u2019API geojson2mapml!"]})}),"\n",(0,o.jsx)(n.h3,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"<String | Object> json"}),(0,o.jsx)(n.td,{children:"Cha\xeene ou objet GeoJSON"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Options <Object>"}),(0,o.jsx)(n.td,{children:"Ensemble de paires de cl\xe9s ou de valeurs qui personnalise la couche de sortie MapML. Toutes les options sont facultatives et d\xe9crites ci-apr\xe8s."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.p,{children:"<Object> Ensemble de paires de cl\xe9s ou de valeurs qui personnalise la couche de sortie MapML. Toutes les options sont facultatives et d\xe9crites ci-apr\xe8s."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"label"})}),(0,o.jsx)(n.td,{children:"<String>"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"json.name"}),", ",(0,o.jsx)(n.code,{children:"json.title"}),' ou "Layer"']}),(0,o.jsxs)(n.td,{children:["D\xe9finit la ",(0,o.jsx)(n.a,{href:"https://maps4html.org/web-map-doc/docs/layers/layer/#label",children:"label"})," de la couche de sortie."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"projection"})}),(0,o.jsx)(n.td,{children:"<String>"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"OSMTILE"})}),(0,o.jsxs)(n.td,{children:["D\xe9finit la [projection]  (",(0,o.jsx)(n.a,{href:"https://maps4html.org/web-map-doc/docs/elements/mapml-viewer/#projection",children:"https://maps4html.org/web-map-doc/docs/elements/mapml-viewer/#projection"}),") de la couche de sortie. Les valeurs d\xe9finies incluent : ",(0,o.jsx)(n.code,{children:"OSMTILE"}),", ",(0,o.jsx)(n.code,{children:"CBMTILE"}),", ",(0,o.jsx)(n.code,{children:"WGS84"}),", and ",(0,o.jsx)(n.code,{children:"APSTILE"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"caption"})}),(0,o.jsx)(n.td,{children:"<String | Function>"}),(0,o.jsxs)(n.td,{children:["Utilise la valeur ",(0,o.jsx)(n.code,{children:"label"})]}),(0,o.jsxs)(n.td,{children:["Fonction qui accepte la caract\xe9ristique JSON et retourne une cha\xeene, OU une cha\xeene qui est le nom d\u2019une propri\xe9t\xe9 \xe0 mapper sur ",(0,o.jsx)(n.a,{href:"https://maps4html.org/web-map-doc/docs/elements/feature/#map-featurecaption",children:"featurecaption"}),". Si aucune propri\xe9t\xe9 associ\xe9e n\u2019est trouv\xe9e, la cha\xeene fournie sert de valeur de la l\xe9gende de la caract\xe9ristique. Voir la section ",(0,o.jsx)(n.a,{href:"#utilisation-des-options-de-base",children:"Utilisation des options de base"})," pour un exemple."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)("span",{id:"option-properties",children:(0,o.jsx)(n.code,{children:"properties"})})}),(0,o.jsx)(n.td,{children:"<Function | String | HTMLElement>"}),(0,o.jsx)(n.td,{children:(0,o.jsxs)(n.em,{children:["Les propri\xe9t\xe9s seront mapp\xe9es \xe0 un ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",children:"table"})," HTML."]})}),(0,o.jsxs)(n.td,{children:["Pr\xe9cise la fa\xe7on dont les propri\xe9t\xe9s sont mapp\xe9es. <Function> - Fonction qui accepte un argument \u2013 l\u2019objet GeoJSON feature \u2013 et qui doit retourner un HTMLElement qui devient l\u2019unique \xe9l\xe9ment-enfant de <properties>. <String> - Cha\xeene qui sera analys\xe9e syntaxiquement et utilis\xe9e comme unique \xe9l\xe9ment-enfant de ",(0,o.jsx)(n.code,{children:"<properties>"})," avec toutes les caract\xe9ristiques. <HTMLElement> - \xc9l\xe9ment qui servira d\u2019unique \xe9l\xe9ment- enfant de ",(0,o.jsx)(n.code,{children:"<properties>"})," avec toutes les caract\xe9ristiques. Voir la section ",(0,o.jsx)(n.a,{href:"#utilisation-des-options-de-base",children:"utilisation des options de base"})," pour un exemple."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"geometryFunction"})}),(0,o.jsx)(n.td,{children:"<Function>"}),(0,o.jsxs)(n.td,{children:["La g\xe9om\xe9trie ",(0,o.jsx)(n.em,{children:"MapML reproduit la valeur g\xe9om\xe9trique GeoJSON"})]}),(0,o.jsxs)(n.td,{children:["<Function> Fonction pour modifier les [descendants] g\xe9n\xe9r\xe9s (",(0,o.jsx)(n.a,{href:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements",children:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"}),") de ",(0,o.jsx)(n.code,{children:"<map-geometry>"})," qui peut ajouter des classes, ",(0,o.jsx)(n.a,{href:"https://maps4html.org/web-map-doc/docs/elements/map-a/",children:"hyperlinks"})," et des ",(0,o.jsx)(n.a,{href:"https://maps4html.org/web-map-doc/docs/elements/span/",children:"spans"})," \xe0 l\u2019instance. Un \xe9l\xe9ment ",(0,o.jsx)(n.code,{children:"<map-geometry>"})," simple est cr\xe9\xe9 par d\xe9faut. La fonction accepte deux arguments : l\u2019[\xe9l\xe9ment-enfant] g\xe9n\xe9r\xe9 (",(0,o.jsx)(n.a,{href:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements",children:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"}),") de ",(0,o.jsx)(n.code,{children:"<map-geometry>"})," et ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7946#section-3.2",children:"l\u2019objet de la caract\xe9ristique JSON"})," pour retourner un \xe9l\xe9ment-enfant modifi\xe9 de ",(0,o.jsx)(n.code,{children:"<map-geometry>"}),". Voir la section ",(0,o.jsx)(n.a,{href:"#utilisation-des-options-de-base",children:"Utilisation des options de base"})," pour un exemple."]})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"exemples",children:"Exemples"}),"\n",(0,o.jsx)(n.h4,{id:"utilisation-des-options-de-base",children:"Utilisation des options de base"}),"\n",(0,o.jsx)(n.p,{children:"Utilisation de chaque option en contexte"}),"\n","\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(i.A,{value:"label",label:"label",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="option d\u2019\xe9tiquette geojson2mapml"',children:'geojson2mapml(json, {label: "Centre-ville d\u2019Ottawa"});\n'})})}),(0,o.jsx)(i.A,{value:"projection",label:"projection",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="geojson2mapml projection option"',children:'geojson2mapml(json, {projection: "CBMTILE"});\n'})})}),(0,o.jsx)(i.A,{value:"caption",label:"caption",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="option de l\xe9gende geojson2mapml \u2013 valeur contenant une fonction"',children:'// fonction de l\xe9gende\ngeojson2mapml(json, {caption: function(feature) {\n    return feature.properties.desc + ", not a Polygon";\n    }\n});\n// valeur de la cha\xeene de l\u2019option de l\xe9gende qui renvoie \xe0 un nom de propri\xe9t\xe9\ngeojson2mapml(json, {caption: "desc"});\n'})})}),(0,o.jsx)(i.A,{value:"properties",label:"properties",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="geojson2mapml properties option - function-valued"',children:'// fonction de propri\xe9t\xe9s\ngeojson2mapml(json, {properties: function(feature) {\n    let parser = new DOMParser();\n    return parser.parseFromString("<h1>" + feature.properties.desc + "propri\xe9t\xe9 de</h1>", "text/html").body.firstChild;\n    }\n});\n// option de propri\xe9t\xe9s \u2013 valeur contenant une cha\xeene \u2013 assurez-vous de nettoyer les cha\xeenes fournies par les utilisateurs\ngeojson2mapml(json, {properties: "<p>Cette propri\xe9t\xe9 a \xe9t\xe9 ajout\xe9e \xe0 l\u2019aide d\u2019une cha\xeene de propri\xe9t\xe9s </p>"});\n'})})}),(0,o.jsx)(i.A,{value:"geometryFunction",label:"geometryFunction",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="geojson2mapml geometryFunction option"',children:'let options = {\n                geometryFunction: function (g, f) {\n                  g.setAttribute("class", f.properties.class);\n                  return g;}\n              };\ngeojson2mapml(json, options);\n'})})})]}),"\n",(0,o.jsx)(n.h4,{id:"cha\xeene-doptions",children:"Cha\xeene d\u2019options"}),"\n",(0,o.jsxs)(n.p,{children:["Exemple montrant comment utiliser des cha\xeenes pour d\xe9finir les options ",(0,o.jsx)(n.code,{children:"label"}),", ",(0,o.jsx)(n.code,{children:"projection"}),", ",(0,o.jsx)(n.code,{children:"caption"})," et ",(0,o.jsx)(n.code,{children:"properties"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let json = {\n    "name": "Nom par d\xe9faut",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "Ceci est un point"}\n};\n\n// GeoJSON \xe0 MapML\nlet output = geojson2mapml(json, {label: "Exemple 1", projection: "CBMTILE", caption: "desc", properties: "<h3>Ceci est un en-t\xeate de propri\xe9t\xe9</h3>"});\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Cliquez pour afficher la sortie HTMLElement"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<map-layer label="Example 1" checked="">\n   <map-meta name="projection" content="CBMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Ceci est un point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h3>Ceci est un en-t\xeate de propri\xe9t\xe9</h3>\n      </map-properties>\n   </map-feature>\n</map-layer>\n'})})]}),"\n",(0,o.jsx)(n.h4,{id:"fonction-doptions",children:"Fonction d\u2019options"}),"\n",(0,o.jsxs)(n.p,{children:["Exemple montrant comment les fonctions peuvent servir \xe0 d\xe9finir les options ",(0,o.jsx)(n.code,{children:"caption"})," et ",(0,o.jsx)(n.code,{children:"properties"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let json = {\n    "name": "Nom par d\xe9faut",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "Ceci est un point"}\n};\n\n// function to set caption\nlet cap = function c(j) {\n  let str = "Ce point se trouve \xe0 : (" + j.geometry.coordinates[0] + ", " + j.geometry.coordinates[1] + ").";\n  return str;\n}\n\n// fonction pour d\xe9finir des propri\xe9t\xe9s\nlet prop = function f(p) {\n  let parser = new DOMParser();\n  return parser.parseFromString("<h1>" + p.properties.desc + "\'s property</h1>", "text/html").body.firstChild;\n}\n\n// GeoJSON \xe0 MapML\nlet output = geojson2mapml(json, {label: "Exemple 2", caption: cap, properties: prop});\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Cliquez pour afficher la sortie HTMLElement"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<map-layer label="Example 2" checked="">\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Ce point se trouve \xe0 : (-75.6916809, 45.4186964).</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h1>Ceci est une propri\xe9t\xe9 du point</h1>\n      </map-properties>\n   </map-feature>\n</map-layer>\n'})})]}),"\n",(0,o.jsx)(n.h4,{id:"options-par-d\xe9faut",children:"Options par d\xe9faut"}),"\n",(0,o.jsx)(n.p,{children:"Exemple montrant la sortie par d\xe9faut lorsqu\u2019aucune option n\u2019est fournie."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let json = {\n "title": "G\xe9om\xe9trie du point",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "Ceci est un point"\n     }\n }]\n};\n\n// GeoJSON \xe0 MapML\nlet output = geojson2mapml(json);\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Cliquez pour afficher la sortie HTMLElement"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<map-layer label="G\xe9om\xe9trie du point" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>G\xe9om\xe9trie du point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Property name</th>\n                  <th role="columnheader" scope="col">Property value</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">This is a Point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</map-layer>\n'})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"mapml-\xe0-geojson",children:"MapML \xe0 GeoJSON"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Fonction"}),(0,o.jsx)(n.th,{children:"Retours"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)("code",{children:"mapml2geojson(<HTMLLayerElement> element, <Object> options)"})}),(0,o.jsx)(n.td,{children:"Objet de collection de caract\xe9ristiques JavaScript (GeoJSON)"}),(0,o.jsxs)(n.td,{children:["Cette fonction transforme l\u2019\xe9l\xe9ment- enfant ",(0,o.jsx)(n.code,{children:"<feature>"})," d\u2019un \xe9l\xe9ment ",(0,o.jsx)(n.code,{children:"<map-layer>"})," en un objet GeoJSON FeatureCollection. Vous fournissez les ",(0,o.jsx)(n.a,{href:"#options-1",children:"options"})," pour contr\xf4ler la transformation. Cette fonction doit servir dans un \xe9v\xe9nement windows.onload."]})]})})]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"mapml2geojson"})," doit \xeatre appel\xe9 dans un \xe9v\xe9nement windows.onload pour fonctionner correctement, comme suit :"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"window.onload = (event) => {\n  mapml2geojson(json);\n};\n"})})]}),"\n",(0,o.jsx)(n.h3,{id:"param\xe8tres-1",children:"Param\xe8tres"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\xc9l\xe9ment <HTMLLayerElement>"}),(0,o.jsxs)(n.td,{children:["\xc9l\xe9ment ",(0,o.jsx)(n.code,{children:"<map-layer>"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"<Object> options"}),(0,o.jsxs)(n.td,{children:["Vous fournissez des param\xe8tres au moyen d\u2019un objet d\u2019options avec des  ",(0,o.jsx)(n.a,{href:"#options-1",children:"noms d\u2019option pr\xe9d\xe9finis"}),"."]})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"options-1",children:"Options"}),"\n",(0,o.jsx)(n.p,{children:"<Object> Ensemble de paires de cl\xe9s ou de valeurs qui personnalise l\u2019objet de sortie GeoJSON. Toutes les options sont facultatives et d\xe9crites ci-apr\xe8s."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"D\xe9faut"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"propertyFunction"})}),(0,o.jsx)(n.td,{children:"<Function>"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.em,{children:"n/a"})}),(0,o.jsxs)(n.td,{children:["Fonction que vous fournissez et qui mappe l\u2019\xe9l\xe9ment ",(0,o.jsx)(n.code,{children:"<map-properties>"})," de la caract\xe9ristique \xe0 un ",(0,o.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2",children:'membre GeoJSON "properties"'}),", puisque qu\u2019il n\u2019y a que vous qui conna\xeet la conception du balisage dans votre valeur ",(0,o.jsx)(n.code,{children:"<map-properties>"}),". Si vous ne fournissez pas cette option, une fonction par d\xe9faut essaiera de renverser un \xe9l\xe9ment-enfant ",(0,o.jsx)(n.code,{children:"<table>"})," de ",(0,o.jsx)(n.code,{children:"<map-properties>"}),", comme si ce tableau \xe9tait g\xe9n\xe9r\xe9 par la ",(0,o.jsx)(n.a,{href:"#option-properties",children:"fonction d\u2019option de propri\xe9t\xe9s par d\xe9faut de geojson2mapml"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"transform"})}),(0,o.jsx)(n.td,{children:"<Boolean>"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"true"})}),(0,o.jsxs)(n.td,{children:["Transforme des valeurs ",(0,o.jsx)(n.code,{children:"<map-coordinates>"})," en valeurs ",(0,o.jsx)(n.code,{children:"gcrs"})," (longitude, latitude), si elles ne le sont pas d\xe9j\xe0. GeoJSON ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7946.html#section-4",children:"recommande"})," d\u2019utiliser les coordonn\xe9es de longitude et de latitude WGS 84, il s\u2019agit donc l\xe0 du comportement par d\xe9faut."]})]})]})]}),"\n",(0,o.jsx)(n.h6,{id:"remarques",children:"Remarques"}),"\n",(0,o.jsxs)(n.p,{children:["Au besoin, ",(0,o.jsx)(n.code,{children:"mapml2geojson"})," transforme des coordonn\xe9es en ",(0,o.jsx)(n.code,{children:"gcrs"})," par d\xe9faut avant la s\xe9rialisation. Prenez note que toutes les projections g\xe9ographiques CRS (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es) ne sont pas \xe9quivalentes, et que l\u2019interpr\xe9tation de telles coordonn\xe9es n\u2019est pas garantie conforme aux coordonn\xe9es WGS 84 ou GPS, et que, par cons\xe9quent, elles ne suivent pas n\xe9cessairement la ",(0,o.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7946#section-4",children:"recommandation GeoJSON"}),", qui requiert des coordonn\xe9es de longitude et de latitude cod\xe9es conform\xe9ment au syst\xe8me g\xe9od\xe9sique WGS 84. Le moteur de projection utilis\xe9 pour mettre en \u0153uvre cette conversion est incapable de transformer des coordonn\xe9es d\u2019un ellipso\xefde \xe0 un autre. Par cons\xe9quent, le JSON r\xe9sultant DOIT (d\u2019une mani\xe8re qui reste \xe0 d\xe9terminer) \xeatre \xe9tiquet\xe9 avec la donn\xe9e qu\u2019utilise la projection de la couche."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"exemples-1",children:"Exemples"}),"\n",(0,o.jsx)(n.h4,{id:"options-par-d\xe9faut-1",children:"Options par d\xe9faut"}),"\n",(0,o.jsx)(n.p,{children:"Exemple montrant la sortie GeoJSON par d\xe9faut lorsqu\u2019aucune option n\u2019est fournie."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<map-layer label="G\xe9ometrie du point" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>G\xe9ometrie du point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Nom de la propri\xe9t\xe9 </th>\n                  <th role="columnheader" scope="col">Nom de la propri\xe9t\xe9</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">Ceci est un point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</map-layer>\n<script>\nwindow.onload = (event) => {\n   let output = mapml2geojson(document.querySelector(\'map-layer\'))\n};\n<\/script>\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Cliquez pour afficher la sortie GeoJSON"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'{\n "title": "G\xe9om\xe9trie du point",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "Ceci est un point"\n     }\n }]\n}\n'})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const o={tabItem:"tabItem_Ymn6"};var s=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>q});var r=t(6540),o=t(4164),s=t(3104),a=t(6347),i=t(205),l=t(7485),c=t(1682),d=t(679);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,p]=h({queryString:t,groupId:o}),[j,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),f=(()=>{const e=c??j;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),x(e)}),[p,x,s]),tabValues:s}}var x=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==r&&(c(n),a(o))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...s,className:(0,o.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function q(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:p(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);