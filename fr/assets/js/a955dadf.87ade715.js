"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5716],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>h});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(l),c=a,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return l?n.createElement(h,r(r({ref:t},m),{},{components:l})):n.createElement(h,r({ref:t},m))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var o=2;o<i;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},9206:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=l(7462),a=(l(7294),l(3905));const i={id:"using-styles",title:"Utilisation des styles mvt",slug:"/user-guide/using-styles"},r=void 0,s={unversionedId:"user-guide/using-styles",id:"user-guide/using-styles",title:"Utilisation des styles mvt",description:"L'API `` d\xe9clarative",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/using-styles.md",sourceDirName:"user-guide",slug:"/user-guide/using-styles",permalink:"/web-map-doc/fr/docs/user-guide/using-styles",draft:!1,tags:[],version:"current",frontMatter:{id:"using-styles",title:"Utilisation des styles mvt",slug:"/user-guide/using-styles"},sidebar:"sidebar",previous:{title:"Cr\xe9ation de styles mvt personnalis\xe9s",permalink:"/web-map-doc/fr/docs/user-guide/creating-styles"},next:{title:"Introduction \xe0 MapML",permalink:"/web-map-doc/fr/docs/user-guide/getting-started"}},p={},o=[{value:"L&#39;API <code>&lt;map-link&gt;</code> d\xe9clarative",id:"lapi-map-link-d\xe9clarative",level:2},{value:"Les modules <code>application/pmtiles+stylesheet</code>",id:"les-modules-applicationpmtilesstylesheet",level:2},{value:"Ordre de recherche pour les feuilles de style li\xe9es",id:"ordre-de-recherche-pour-les-feuilles-de-style-li\xe9es",level:2}],m={toc:o},d="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"lapi-map-link-d\xe9clarative"},"L'API ",(0,a.kt)("inlineCode",{parentName:"h2"},"<map-link>")," d\xe9clarative"),(0,a.kt)("p",null,"L'interface d\xe9veloppeur-utilisateur pour utiliser le style mvt dans le polyfill MapML est similaire \xe0 (l'une des fa\xe7ons)\ndont les feuilles de style CSS sont import\xe9es dans un document HTML, en utilisant l'\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link>"),".  Un ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link>")," templ\xe9\nvers une ressource pmtiles ou mvt sera associ\xe9 \xe0 un \xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},'<map-link type="application/pmtiles+stylesheet">')," dans son ascendance DOM :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<map-extent units="OSMTILE" checked="checked" hidden="hidden">\n  <map-link id="linked-stylesheet" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>\n  <map-link id="templated-link" rel="tile" type="application/pmtiles" \n    tref="https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light"></map-link>\n</map-extent>\n...\n')),(0,a.kt)("p",null,"Dans l'exemple ci-dessus, le lien ",(0,a.kt)("inlineCode",{parentName:"p"},'<map-link id="templated-link">')," sera ",(0,a.kt)("a",{parentName:"p",href:"#ordre-de-recherche-pour-les-feuilles-de-style-li%C3%A9es"},"associ\xe9")," au lien de feuille de style ",(0,a.kt)("inlineCode",{parentName:"p"},'<map-link id="linked-stylesheet">'),"."),(0,a.kt)("h2",{id:"les-modules-applicationpmtilesstylesheet"},"Les modules ",(0,a.kt)("inlineCode",{parentName:"h2"},"application/pmtiles+stylesheet")),(0,a.kt)("p",null,"La ressource de feuille de style ci-dessus, ",(0,a.kt)("inlineCode",{parentName:"p"},"lightTheme.js"),", qui peut avoir n'importe quel nom, mais doit \xeatre ",(0,a.kt)("strong",{parentName:"p"},"structur\xe9e")," comme un module JavaScript, pour \xeatre consomm\xe9e par la polyfill comme d\xe9crit dans ",(0,a.kt)("a",{parentName:"p",href:"creating-styles"},"la section pr\xe9c\xe9dente")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const pmtilesRules = new Map();\npmtilesRules.set(\n  'https://maps4html.org/experiments/vector-tiles/pmtiles/spearfish.pmtiles?theme=light',\n  { theme: { theme: 'light' } }\n);\nexport { pmtilesRules };\n")),(0,a.kt)("p",null,"Le module ",(0,a.kt)("strong",{parentName:"p"},"doit")," d\xe9finir une exportation nomm\xe9e ",(0,a.kt)("inlineCode",{parentName:"p"},"pmtilesRules")," qui ",(0,a.kt)("strong",{parentName:"p"},"doit")," \xeatre de\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map"},"type Map"),". Chaque entr\xe9e dans le Map doit \xeatre la valeur\n",(0,a.kt)("strong",{parentName:"p"},"exacte")," de la cha\xeene de caract\xe8res du mod\xe8le d'URL ",(0,a.kt)("inlineCode",{parentName:"p"},"tref")," de la (des) ressource(s) \xe0 partir de laquelle (desquelles) les tuiles mvt seront obtenues.  "),(0,a.kt)("p",null,"La raison pour laquelle la cl\xe9 de la carte doit \xeatre la valeur exacte de la cha\xeene du mod\xe8le d'URL ",(0,a.kt)("inlineCode",{parentName:"p"},"tref")," est que le polyfill utilisera la cha\xeene du mod\xe8le d'URL trouv\xe9e dans l'attribut ",(0,a.kt)("inlineCode",{parentName:"p"},'<map-link tref="...">')," ",(0,a.kt)("inlineCode",{parentName:"p"},"tref")," comme cl\xe9 pour ",(0,a.kt)("strong",{parentName:"p"},"rechercher")," les r\xe8gles de style dans la carte ",(0,a.kt)("inlineCode",{parentName:"p"},"pmtilesRules")," qui doivent \xeatre appliqu\xe9es au contenu. "),(0,a.kt)("p",null,"Chaque ",(0,a.kt)("inlineCode",{parentName:"p"},'<map-link type="application/pmtiles"...>')," ou ",(0,a.kt)("inlineCode",{parentName:"p"},'<map-link type="application/vnd.mapbox-vector-tile"...>')," que vous cr\xe9ez doit \xeatre associ\xe9 \xe0 un ensemble de r\xe8gles de style ou \xe0 un th\xe8me. La question de l'encodage des r\xe8gles de style et des th\xe8mes a \xe9t\xe9 abord\xe9e dans la section pr\xe9c\xe9dente. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Les th\xe8mes pr\xe9d\xe9finis que vous pouvez utiliser sont les suivants : ",(0,a.kt)("inlineCode",{parentName:"p"},"light"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dark"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"white"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"grayscale")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"black"),". Vous devez inclure le nom du th\xe8me dans le mod\xe8le d'URL en tant que param\xe8tre (m\xeame s'il n'est pas requis par la ressource pmtiles ou mvt), afin que le mod\xe8le d'URL puisse \xeatre rendu unique et distinct des autres cl\xe9s ",(0,a.kt)("inlineCode",{parentName:"p"},"pmtilesRules")," utilisant la m\xeame ressource pmtiles ou mvt.")),(0,a.kt)("h2",{id:"ordre-de-recherche-pour-les-feuilles-de-style-li\xe9es"},"Ordre de recherche pour les feuilles de style li\xe9es"),(0,a.kt)("p",null,"Les styles pour un mod\xe8le d'URL ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link>")," donn\xe9 doivent \xeatre trouv\xe9s via un ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link rel=stylesheet>")," associ\xe9.  Le polyfill MapML\nrecherche le ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link rel=stylesheet>")," associ\xe9 vers le haut dans la  hi\xe9rarchie de l'\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link>"),", en s'arr\xeatant \xe0 l'\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<layer>"),"\nqui l'entoure.  Le lien de feuille de style associ\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link rel=\xab stylesheet \xbb type=\xab application/pmtiles+stylesheet \xbb...>"),"\npeut \xeatre situ\xe9 dans l'\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-extent>"),", en tant que fr\xe8re de la ressource ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link rel=\xab tile \xbb tref=\xab ... \xbb>")," \xe0 styliser, ou\ndans l'\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-head>")," (lorsqu'il est utilis\xe9 dans un contenu MapML distant) ou ",(0,a.kt)("inlineCode",{parentName:"p"},"<layer->")," (lorsqu'il est utilis\xe9 dans un contenu MapML local)."),(0,a.kt)("p",null,"Seule la ",(0,a.kt)("strong",{parentName:"p"},"premier")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<map-link rel=stylesheet>")," dans l'ordre du document trouv\xe9 sera associ\xe9 ; si aucune r\xe8gle de style ou th\xe8me pour le mod\xe8le d'URL\n",(0,a.kt)("inlineCode",{parentName:"p"},"tref"),", les messages d'erreur de la console peuvent aider \xe0 clarifier la situation."),(0,a.kt)("p",null,"Exemple de cas o\xf9 les feuilles de style li\xe9es sont recherch\xe9es par la polyfill, contenu distant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<mapml- xmlns="http://www.w3.org/1999/xhtml">\n  <map-head>\n    <map-title>pmtiles</map-title>\n\n    <map-link data-testid="operative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>\n\n    \x3c!-- Seule la premi\xe8re feuille de style dans l\'ordre du document \xe0 l\'int\xe9rieur du chemin de recherche du conteneur est utilis\xe9e... --\x3e\n    <map-link data-testid="inoperative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>\n\n    <map-link rel="license" title="\xa9 OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>\n  </map-head>\n  <map-body>\n    <map-extent data-testid="light-me" label="light" units="OSMTILE" >\n\n      \x3c!-- ce type devrait utiliser la feuille de style operative-light dans l\'en-t\xeate de la carte --\x3e\n      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=light"></map-link>\n\n    </map-extent>\n    <map-extent data-testid="dark-me" label="dark" units="OSMTILE" checked="checked" >\n\n      <map-link data-testid="operative-dark" rel="stylesheet" type="application/pmtiles+stylesheet" href="darkTheme.js"></map-link>\n      <map-link data-testid="inoperative-light" rel="stylesheet" type="application/pmtiles+stylesheet" href="lightTheme.js"></map-link>\n      \n      \x3c!-- ce type devrait utiliser la feuille de style operative-dark de la fratrie pr\xe9c\xe9dente (premi\xe8re dans l\'ordre des documents dans le chemin de recherche) --\x3e\n      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>\n\n    </map-extent>\n  </map-body>\n</mapml->\n')),(0,a.kt)("p",null,"Exemple de cas o\xf9 les feuilles de style li\xe9es sont recherch\xe9es par le polyfill, contenu local :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n<mapml-viewer data-testid="viewer" projection="OSMTILE" zoom="0" lat="0" lon="0" width="400" height="400">\n  <layer- data-testid="dark">\n    <map-title>PMTiles test dark</map-title>\n    <map-link rel="license" title="\xa9 OpenStreetMap contributors CC BY-SA" href="https://www.openstreetmap.org/copyright"></map-link>\n    <map-extent units="OSMTILE" checked>\n      \x3c!-- la feuille de style li\xe9e est membre de la fratrie de map-extent --\x3e\n      <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>\n      <map-link rel="tile" type="application/pmtiles" tref="spearfish.pmtiles?theme=dark"></map-link>\n    </map-extent>\n  </layer->\n  <layer- checked data-testid="light">\n    <map-title>{z}/{x}/{y}.mvt test</map-title>\n    \x3c!-- pas de map-head disponible, les enfants de l\'\xe9l\xe9ment layer- sont recherch\xe9s pour les feuilles de style li\xe9es --\x3e\n    <map-link rel="stylesheet" type="application/pmtiles+stylesheet" href="pmtilesRulesModule.js"></map-link>\n    <map-extent units="OSMTILE" checked="checked">\n      <map-input name="beans" type="zoom" value="18" min="0" max="2"></map-input>\n      <map-input name="foo" type="location" units="tilematrix" axis="column" min="0" max="262144"></map-input>\n      <map-input name="bar" type="location" units="tilematrix" axis="row" min="0" max="262144"></map-input>\n      <map-link rel="tile" type="application/vnd.mapbox-vector-tile" tref="tiles/osmtile/{beans}/{foo}/{bar}.mvt?theme=light"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')))}u.isMDXComponent=!0}}]);