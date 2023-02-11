"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"input",title:"<map-input>",slug:"/elements/input/"},l=void 0,s={unversionedId:"elements/input",id:"elements/input",title:"<map-input>",description:"L\u2019\xe9l\xe9ment ` est une entr\xe9e HTML input \xe9tendue par type, utilis\xe9e dans les \xe9l\xe9ments  d\u2019une carte en ligne. Les attributs qui s\u2019appliquent \xe0 l\u2019entr\xe9e d\xe9pendent de l\u2019attribut type. Nous avons plusieurs types d\u2019\xe9l\xe9ments ` \xe0 notre disposition.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/input.md",sourceDirName:"elements",slug:"/elements/input/",permalink:"/web-map-doc/fr/docs/elements/input/",draft:!1,tags:[],version:"current",frontMatter:{id:"input",title:"<map-input>",slug:"/elements/input/"},sidebar:"sidebar",previous:{title:"<map-extent>",permalink:"/web-map-doc/fr/docs/elements/extent/"},next:{title:"<map-datalist>",permalink:"/web-map-doc/fr/docs/elements/datalist/"}},o={},d=[{value:"Attributs",id:"attributs",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>axis</code>",id:"axis",level:3},{value:"<code>units</code>",id:"units",level:3},{value:"<code>position</code>",id:"position",level:3},{value:"<code>rel</code>",id:"rel",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>step</code>",id:"step",level:3},{value:"<code>shard</code>",id:"shard",level:3},{value:"<code>list</code>",id:"list",level:3},{value:"Exemples",id:"exemples",level:2},{value:"Input step",id:"input-step",level:3},{value:"L\u2019entr\xe9e rel=tile g\xe9n\xe8re une demande soumise aux services de cartes Web (WMS) pour obtenir des pav\xe9s.",id:"lentr\xe9e-reltile-g\xe9n\xe8re-une-demande-soumise-aux-services-de-cartes-web-wms-pour-obtenir-des-pav\xe9s",level:3},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>")," est une entr\xe9e HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," \xe9tendue par ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", utilis\xe9e dans les \xe9l\xe9ments ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," d\u2019une carte en ligne. Les attributs qui s\u2019appliquent \xe0 l\u2019entr\xe9e d\xe9pendent de l\u2019attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),". Nous avons plusieurs types d\u2019\xe9l\xe9ments ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>")," \xe0 notre disposition."),(0,r.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>")," d\xe9clare une variable que le code polyfill d\xe9finit pour son usage en fonction de ses attributs, puisque la carte modifie l\u2019\xe9tendue de la fen\xeatre d\u2019affichage en r\xe9action \xe0 ce que fait l\u2019utilisateur."),(0,r.kt)("iframe",{src:"../../../demo/map-input-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,r.kt)("h2",{id:"attributs"},"Attributs"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"D\xe9finit le nom de la variable cr\xe9\xe9e par l\u2019entr\xe9e. Le mod\xe8le d\u2019adresse URL ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-link>")," ",(0,r.kt)("a",{parentName:"p",href:"../link#tref"},"tref attribute")," peut ensuite r\xe9f\xe9rencer la variable avec la notation de r\xe9f\xe9rence des variables ",(0,r.kt)("inlineCode",{parentName:"p"},"{name}"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"D\xe9finit le ",(0,r.kt)("strong",{parentName:"p"},"type")," de l\u2019entr\xe9e."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoom"),(0,r.kt)("td",{parentName:"tr",align:null},"Cette valeur enti\xe8re varie de 0 \xe0 un nombre entier quelconque qui ne peut exc\xe9der 25, selon la projection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"L\u2019entr\xe9e d\u2019un emplacement capture ",(0,r.kt)("strong",{parentName:"td"},"une")," valeur d\u2019",(0,r.kt)("inlineCode",{parentName:"td"},"axis")," d\u2019un point \xe0 deux dimensions (repr\xe9sent\xe9 par une paire de coordonn\xe9es) dans l\u2019\xe9tendue de la carte \u2013 p. exe., l\u2019emplacement ",(0,r.kt)("inlineCode",{parentName:"td"},"top-right"),", ou, lorsqu\u2019il interroge un serveur, celui o\xf9 l\u2019utilisateur clique ou qu\u2019il touche sur la carte.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"L\u2019entr\xe9e de la largeur capture la largeur de l\u2019\xe9tendue de la fen\xeatre d\u2019affichage de la carte en pixels normalis\xe9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"L\u2019entr\xe9e de la hauteur capture la hauteur de l\u2019\xe9tendue de la fen\xeatre d\u2019affichage de la carte en pixels normalis\xe9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Cet attribut \xe9tablit une variable pouvant servir \xe0 transmettre un (#shard)  fixe ou ","[un domaine fixe de valeurs]"," au serveur lorsque l\u2019utilisateur demande des ressources cartographiques.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},(0,r.kt)("inlineCode",{parentName:"h3"},"value")),(0,r.kt)("p",null,"En r\xe8gle g\xe9n\xe9rale, le code polyfill d\xe9finit l\u2019attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," qu\u2019il utilise pour g\xe9n\xe9rer des adresses URL \xe0 partir de ",(0,r.kt)("a",{parentName:"p",href:"../link#tref"},"mod\xe8les d\u2019adresses URL")," pour r\xe9cup\xe9rer des ressources du serveur, comme des pav\xe9s, des images ou des cartes."),(0,r.kt)("p",null,"En particulier, les auteurs utilisent ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," pour pr\xe9ciser la valeurs d\u2019entr\xe9e ",(0,r.kt)("inlineCode",{parentName:"p"},'type="zoom"'),". Lorsque ",(0,r.kt)("inlineCode",{parentName:"p"},'type="zoom"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," d\xe9finit la valeur des attributs ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," du niveau de zoom des \xe9l\xe9ments ",(0,r.kt)("strong",{parentName:"p"},"sibling")," ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input type="location">')," connexes. Permet aux auteurs d\u2019\xe9tablir des limites de ressources natives / du serveur sur la base de ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link tref="...">'),"."),(0,r.kt)("p",null,"Les entr\xe9es sont  associ\xe9es par leurs variables r\xe9f\xe9renc\xe9es par une valeur ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link tref="https://example.org/{z}/{col}/{row}/"...>'),". Dans l\u2019exemple ci-dessus, les r\xe9f\xe9rences de variable ",(0,r.kt)("inlineCode",{parentName:"p"},"{z}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{row}")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"{col}")," associent les variables (",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>"),"'s) appel\xe9es ",(0,r.kt)("strong",{parentName:"p"},"z"),", ",(0,r.kt)("strong",{parentName:"p"},"row")," et ",(0,r.kt)("strong",{parentName:"p"},"col"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"axis"},(0,r.kt)("inlineCode",{parentName:"h3"},"axis")),(0,r.kt)("p",null,"Cet attribut ne s\u2019appliquent qu\u2019aux entr\xe9es ",(0,r.kt)("inlineCode",{parentName:"p"},'type="location"'),". Il \xe9tablit l\u2019axe de la coordonn\xe9e \xe0 s\xe9rialiser  sous forme de ",(0,r.kt)("a",{parentName:"p",href:"#"},"variable nomm\xe9e"),". Cette valeur identifie l\u2019axe auquel s\u2019appliquent les attributs ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),", de fa\xe7on \xe0 ce que le code polyfill ne produise pas de requ\xeates visant des ressources spatiales (pav\xe9s, etc.) hors des limites de l\u2019axe natif. ",(0,r.kt)("inlineCode",{parentName:"p"},"axis")," peut prendre les valeurs suivantes :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom de l\u2019axe"),(0,r.kt)("th",{parentName:"tr",align:null},"CRS"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"row")),(0,r.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe vertical positif, orient\xe9 vers le bas de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s de l\u2019axe sont des pav\xe9s. Chaque niveau de zoom \xe9tant un syst\xe8me distinct de r\xe9f\xe9rence des coordonn\xe9es crs d\u2019un tableau de pav\xe9s, les valeurs de coordonn\xe9es ne s\u2019appliquent donc qu\u2019\xe0 lui.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"column")),(0,r.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s de l\u2019axe sont des pav\xe9s. Chaque niveau de zoom \xe9tant un syst\xe8me distinct de r\xe9f\xe9rence des coordonn\xe9es crs d\u2019un tableau de pav\xe9s, les valeurs de coordonn\xe9es ne s\u2019appliquent donc qu\u2019\xe0 lui.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"easting")),(0,r.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est un emplacement g\xe9ographique d\xe9fini. Ses unit\xe9s sont habituellement des m\xe8tres, mais avec certaines projections (WGS84 en particulier), la transformation \xe0 partir d\u2019un CRS g\xe9ographique, c\u2019est-\xe0-dire de la longitude, en abscisse constitue la ",(0,r.kt)("a",{parentName:"td",href:"https://fr.wikipedia.org/wiki/Application_identit%C3%A9"},"transformation de l\u2019identit\xe9"),". Dans ce cas, les valeurs en abscisse pourraient \xeatre exprim\xe9es en degr\xe9s d\xe9cimaux. ",(0,r.kt)("strong",{parentName:"td"},"pcrs")," signifie projected coordinate reference system (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es projet\xe9es). Prenez note que, puisque le pcrs constitue un \xab canevas infini \xbb, il existe des emplacements pour lesquels la transformation des coordonn\xe9es pcrs en coordonn\xe9es gcrs n\u2019est pas d\xe9finie.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"northing")),(0,r.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe vertical positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est un emplacement g\xe9ographique d\xe9fini. Ses unit\xe9s sont habituellement des m\xe8tres, mais avec certaines projections (WGS84 en particulier), la transformation \xe0 partir d\u2019un CRS g\xe9ographique, c\u2019est-\xe0-dire de la latitude, vers une valeur nulle constitue la ",(0,r.kt)("a",{parentName:"td",href:"https://fr.wikipedia.org/wiki/Application_identit%C3%A9"},"transformation de l\u2019identit\xe9"),". Dans ce cas, les valeurs nulles pourraient \xeatre exprim\xe9es en degr\xe9s d\xe9cimaux. Prenez note que, puisque le pcrs constitue un \xab canevas infini \xbb, il existe des emplacements pour lesquels la transformation des coordonn\xe9es pcrs en coordonn\xe9es gcrs n\u2019est pas d\xe9finie.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latitude")),(0,r.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"La latitude d\u2019un point situ\xe9 sur un ellipso\xefde est l\u2019angle entre une ligne perpendiculaire \xe0 la surface de l\u2019ellipso\xefde en un point quelconque et le plan de l\u2019\xe9quateur. ",(0,r.kt)("strong",{parentName:"td"},"gcrs")," signifie geographic coordinate reference system (syst\xe8me de r\xe9f\xe9rences des coordonn\xe9es g\xe9ographiques).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"longitude")),(0,r.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude d\u2019un point pr\xe9cis de la position est-ouest sur la surface de l\u2019objet de r\xe9f\xe9rence (la Terre).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s sont des pixels de dimensions d\xe9finies. Chaque niveau de zoom tcrs \xe9tant unique, les valeurs de coordonn\xe9es ne s\u2019appliquent qu\u2019\xe0 lui. ",(0,r.kt)("strong",{parentName:"td"},"tcrs")," signifie syst\xe8me de r\xe9f\xe9rences des coordonn\xe9es en pav\xe9s. Les pav\xe9s de chaque crs ",(0,r.kt)("strong",{parentName:"td"},"tilematrix")," (tableau de pav\xe9s) sont d\xe9finis comme \xe9tant l\u2019agr\xe9gation de pixels dans le niveaux de zoom ",(0,r.kt)("strong",{parentName:"td"},"tcrs")," correspondants.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe vertical positif, orient\xe9 vers le bas de l\u2019\xe9cran et dont l\u2019origine est en haut \xe0 gauche. Les unit\xe9s sont des pixels de dimensions d\xe9finies. Chaque niveau de zoom tcrs \xe9tant unique, les valeurs de coordonn\xe9es ne s\u2019appliquent qu\u2019\xe0 lui.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:null},"tile, map"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe horizontal positif, orient\xe9 vers la droite de l\u2019\xe9cran. Chaque pav\xe9, tout comme la fen\xeatre d\u2019affichage de la carte, a un crs de pav\xe9s de dimensions d\xe9finies et dont l\u2019origine est en haut \xe0 gauche (de chaque pav\xe9 dans le cas d\u2019un crs ",(0,r.kt)("strong",{parentName:"td"},"tile")," \u2013 le syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es en pav\xe9s \u2013 et de la fen\xeatre d\u2019affichage de la carte dans le cas du crs ",(0,r.kt)("strong",{parentName:"td"},"map"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"j")),(0,r.kt)("td",{parentName:"tr",align:null},"tile, map"),(0,r.kt)("td",{parentName:"tr",align:null},"Axe vertical positif, orient\xe9 vers le base de l\u2019\xe9cran. Chaque pav\xe9, tout comme la fen\xeatre d\u2019affichage de la carte, a un crs de pav\xe9s de dimensions d\xe9finies et dont l\u2019origine est en haut \xe0 gauche (de chaque pav\xe9 dans le cas d\u2019un crs ",(0,r.kt)("strong",{parentName:"td"},"tile")," et de la fen\xeatre d\u2019affichage de la carte dans le cas du crs ",(0,r.kt)("strong",{parentName:"td"},"map"),").")))),(0,r.kt)("p",null,"Lorsque l\u2019utilisateur veut obtenir l\u2019axe de coordonn\xe9es du pav\xe9 en entier dans la projection ",(0,r.kt)("inlineCode",{parentName:"p"},"OSMTILE"),", il peut entrer l\u2019emplacement avec ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input name="y" type="location" units="tilematrix" axis="row">')," pour d\xe9finir la variable ",(0,r.kt)("strong",{parentName:"p"},"y")," r\xe9f\xe9renc\xe9e par ",(0,r.kt)("inlineCode",{parentName:"p"},"{y}")," dans un mod\xe8le d\u2019adresses URL connexe qui s\xe9rialise les valeurs de l\u2019axe ",(0,r.kt)("inlineCode",{parentName:"p"},"row")," du crs ",(0,r.kt)("strong",{parentName:"p"},"tilematrix"),". Une s\xe9rie d\u2019\xe9v\xe9nements d\u2019entr\xe9e d\u2019emplacement est g\xe9n\xe9r\xe9e par le code polyfill, comme en a besoin la carte pour couvrir de pav\xe9s la fen\xeatre d\u2019affichage de la carte.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"units"},(0,r.kt)("inlineCode",{parentName:"h3"},"units")),(0,r.kt)("p",null,"Identifie le syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es connexe sp\xe9cifique auquel l\u2019\xe9v\xe9nement d\u2019entr\xe9e d\u2019emplacement est r\xe9f\xe9renc\xe9e. Dans MapML, le terme \xab projection \xbb est synonyme de l\u2019ensemble de crs reli\xe9s entre eux par le nom de la projection. Dans tous les cas et quelle que soit la projection, il existe un ensemble de crs dont chacun est reli\xe9s math\xe9matiquement \xe0 l\u2019autre. Ces crs sont connus et identifi\xe9s dans l\u2019espace de nommage du nom de la projection par le tableau des valeurs de mots-cl\xe9s suivant :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CRS"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Pour chaque niveau de zoom (c.-\xe0-d. \xe0 une valeur pr\xe9d\xe9finie du d\xe9nominateur d\u2019\xe9chelle), les emplacements sont exprim\xe9s en termes de pixels mis \xe0 l\u2019\xe9chelle, avec l\u2019origine de l\u2019espace des pixels se situant dans le coin sup\xe9rieur gauche. Les coordonn\xe9es des pixels d\u2019un emplacement affich\xe9 \xe0 un niveau de zoom quelconque sont ind\xe9pendantes de celles d\u2019un emplacement affich\xe9 \xe0 tout autre niveau de zoom. Autrement dit, vous devez conna\xeetre le niveau de zoom d\u2019une coordonn\xe9e du syst\xe8me de r\xe9f\xe9rences des coordonn\xe9es en pav\xe9s tcrs pour la localiser sur la carte ou la traiter d\u2019une fa\xe7on ou d\u2019une autre.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tilematrix"),(0,r.kt)("td",{parentName:"tr",align:null},"Chaque niveau de zoom a un tableau de pav\xe9s appel\xe9 tilematrix. Chaque pav\xe9 constitue les coordonn\xe9es dans ce crs (syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es), et les axes sont appel\xe9s ",(0,r.kt)("inlineCode",{parentName:"td"},"row")," et ",(0,r.kt)("inlineCode",{parentName:"td"},"column"),". Les pav\xe9s sont d\xe9finis comme \xe9tant des carr\xe9s de 256 pixels d\u2019ar\xeate dans le tcrs connexe, au niveau de zoom donn\xe9.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Le syst\xe8me de r\xe9f\xe9rence des coordonn\xe9es projet\xe9es (pcrs) est d\xe9fini par une relation math\xe9matique avec un syst\xe8me de r\xe9f\xe9rence des donn\xe9es g\xe9od\xe9sique gcrs sous-jacent au moyen d\u2019une technique dite \xab de projection \xbb. Les coordonn\xe9es du pcrs sont ind\xe9pendantes de l\u2019\xe9chelle et du niveau de zoom, et sont con\xe7ues pour repr\xe9senter des coordonn\xe9es g\xe9ographiques sur une surface plane, comme l\u2019\xe9cran d\u2019un appareil. Les unit\xe9s de mesure des coordonn\xe9es pcrs sont habituellement des m\xe8tres (\xe0 l\u2019exception notable des coordonn\xe9es pcrs dans la projection ",(0,r.kt)("inlineCode",{parentName:"td"},"WGS84"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gcrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Les coordonn\xe9es g\xe9ographiques sont r\xe9f\xe9renc\xe9es \xe0 divers ellipso\xefdes et ne sont pas n\xe9cessairement comparables d\u2019une projection \xe0 l\u2019autre. WGS 84 constitue un ellipso\xefde courant \xe0 l\u2019heure actuelle, et est d\xe9fini et utilis\xe9 par la constellation des satellites de positionnement mondial (GPS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},"Le CRS de la carte est dynamique, en ce sens que son origine se situe en haut \xe0 gauche dans la fen\xeatre d\u2019affichage de l\u2019utilisateur, avec des pixels mis \xe0 l\u2019\xe9chelle comme unit\xe9s. Cela permet d\u2019identifier les coordonn\xe9es d\u2019image \xe0 utiliser, habituellement par les services de cartes Web et d\u2019autre services semblables, qui utilisent une image virtuelle pour permettre la recherche de donn\xe9es sur les propri\xe9t\xe9s d\u2019une caract\xe9ristique pr\xe9sente sur la carte, sans n\xe9cessairement transf\xe9rer les caract\xe9ristiques sur le r\xe9seau.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tile"),(0,r.kt)("td",{parentName:"tr",align:null},"Peu importe le niveau de zoom, chaque pav\xe9 a un syst\xe8me implicite de coordonn\xe9es \xe0 pav\xe9s mis \xe0 l\u2019\xe9chelle allant de 0 \xe0 255, tant dans le sens horizontal que vertical. Ces coordonn\xe9es sont utilis\xe9es par le Service Web des pav\xe9s cartographiques (WMTS) et d\u2019autres services semblables pour identifier un pixel qui servira \xe0 rechercher les valeurs des propri\xe9t\xe9s de la caract\xe9ristique, sans transf\xe9rer la g\xe9om\xe9trie de cette derni\xe8re sur le r\xe9seau.")))),(0,r.kt)("p",null,"Il arrive parfois qu\u2019on utilise des entr\xe9es d\u2019emplacement pour g\xe9n\xe9rer des demandes de d\xe9coupage en carr\xe9s des pav\xe9s \xe0 partir des services de cartes Web (WMS) ou des services semblables qui n\u2019utilisent pas les pav\xe9s. Dans un tel cas, on peut pr\xe9ciser les ",(0,r.kt)("inlineCode",{parentName:"p"},"units")," comme un tableau de pav\xe9s ",(0,r.kt)("inlineCode",{parentName:"p"},"tilematrix"),", ce qui implique que l\u2019\xe9v\xe9nement d\u2019entr\xe9e d\u2019emplacement attendu est celui d\u2019un pav\xe9, et le mot-cl\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," est ensuite utilis\xe9 pour d\xe9crire le coin du pav\xe9, coin \xe0 partir duquel la coordonn\xe9e doit \xeatre s\xe9rialis\xe9e. Dans ce cas, la valeur ",(0,r.kt)("inlineCode",{parentName:"p"},"axis")," peut \xeatre pr\xe9cis\xe9e comme ",(0,r.kt)("inlineCode",{parentName:"p"},"easting")," (abscisse), ou un autre nom d\u2019axe associ\xe9 \xe0 la projection, pour obtenir la coordonn\xe9e du coin du pav\xe9 qui est trait\xe9 par le code polyfill : "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'<map-input name="xmin" type="location" units="tilematrix" position="top-left" axis="easting">')),(0,r.kt)("p",null,"Intrins\xe8quement, le crs de la coordonn\xe9e demand\xe9e est d\xe9duit du nom de l\u2019axe plut\xf4t qu\u2019en demandant \xe0 l\u2019auteur de pr\xe9ciser explicitement le crs de l\u2019axe comm un autre attribut de ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-input>"),". "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"position"},(0,r.kt)("inlineCode",{parentName:"h3"},"position")),(0,r.kt)("p",null,"Permet \xe0 l\u2019auteur de pr\xe9ciser un coin pr\xe9d\xe9fini de la fen\xeatre d\u2019affichage ou du pav\xe9, qui est utilis\xe9 comme valeur d\u2019emplacement \xe0 s\xe9rialiser. S\u2019il n\u2019y a pas de ",(0,r.kt)("inlineCode",{parentName:"p"},"position"),", les coordonn\xe9es d\u2019entr\xe9e de l\u2019emplacement sont g\xe9n\xe9r\xe9es lorsque l\u2019utilisateur clique sur la carte ou touche celle-ci, et qui servent \xe0 g\xe9n\xe9rer des requ\xeates interactives destin\xe9es au serveur."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mot-cl\xe9 de position"),(0,r.kt)("th",{parentName:"tr",align:null},"description du mot-cl\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top-left"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifie l\u2019emplacement dans le coin sup\xe9rieur gauche du pav\xe9 ou de la fen\xeatre d\u2019affichage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top-right"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifie l\u2019emplacement dans le coin sup\xe9rieur droit du pav\xe9 ou de la fen\xeatre d\u2019affichage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottom-left"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifie l\u2019emplacement dans le coin inf\xe9rieur gauche du pav\xe9 ou de la fen\xeatre d\u2019affichage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottom-right"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifie l\u2019emplacement dans le coin inf\xe9rieur droit du pav\xe9 ou de la fen\xeatre d\u2019affichage")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"position")," peut prendre d\u2019autres valeurs, mais aucune n\u2019est mise en \u0153uvre pour le moment."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rel"},(0,r.kt)("inlineCode",{parentName:"h3"},"rel")),(0,r.kt)("p",null,"Pr\xe9cise l\u2019entit\xe9 \xe0 laquelle s\u2019applique la ",(0,r.kt)("inlineCode",{parentName:"p"},"position"),". Les valeurs possibles sont ",(0,r.kt)("inlineCode",{parentName:"p"},"tile")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),". Si l\u2019on ne pr\xe9cise pas de valeur, ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," est utilis\xe9e par d\xe9faut. ",(0,r.kt)("inlineCode",{parentName:"p"},"rel"),"  permet d\u2019identifier plus facilement le crs qui contient la coordonn\xe9es s\xe9rialis\xe9e par l\u2019entr\xe9e. "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"min"},(0,r.kt)("inlineCode",{parentName:"h3"},"min")),(0,r.kt)("p",null,"\xc9tablit la valeur minimale de l\u2019axe dans le serveur. Le code polyfill ne cr\xe9e aucune demande pour obtenir des coordonn\xe9es dont la valeur est inf\xe9rieure \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"min"),". "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"max"},(0,r.kt)("inlineCode",{parentName:"h3"},"max")),(0,r.kt)("p",null,"\xc9tablit la valeur maximale de l\u2019axe dans le serveur. Le code polyfill ne cr\xe9e pas les demandes pour obtenir des coordonn\xe9es dont la valeur est sup\xe9rieure \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"step"},(0,r.kt)("inlineCode",{parentName:"h3"},"step")),(0,r.kt)("p",null,"D\xe9finit la plage de zoom en fonction des ressources qui sont demand\xe9es \xe0 l\u2019int\xe9rieur de cette plage. ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," est toujours calcul\xe9 \xe0 partir d\u2019une valeur de base de 0.  Lorsque la valeur du niveau de zoom se situe \xe0 l\u2019int\xe9rieur de l\u2019intervalle ",(0,r.kt)("inlineCode",{parentName:"p"},"step"),", les ressources sont demand\xe9es lorsque n\xe9cessaire et mises \xe0 l\u2019\xe9chelle au niveau de zoom utilis\xe9. Par exemple, si min=0 et que max=7 pour le niveau de zoom entr\xe9 avec step=4, les pav\xe9s ne sont demand\xe9s que qu\u2019au niveau de zoom=0 et mis \xe0 l\u2019\xe9chelle avec les niveaux de zoom 1, 2 et 3 alors que la carte est rendue \xe0 ces niveaux. Utiliser cet attribut permet d\u2019\xe9conomiser la largeur de bande dont profite l\u2019utilisateur et n\u2019introduit qu\u2019un l\xe9ger effet visuel qui varie avec la nature du contenu."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"shard"},(0,r.kt)("inlineCode",{parentName:"h3"},"shard")),(0,r.kt)("p",null,"L\u2019attribut bool\xe9en ",(0,r.kt)("inlineCode",{parentName:"p"},"shard")," est utilis\xe9 avec une variable ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'<map-input shard list="datalist-id>')," indique que chacune des valeurs pr\xe9cis\xe9es dans un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"map-datalist")," connexe sera utilis\xe9e \xe0 tout de r\xf4le (round robin) pour substituer et soumettre les variables d\u2019un mod\xe8le dans les demandes pour obtenir une carte. Cela s\u2019av\xe8re utile avec la ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Glossary/Domain_sharding"},"fragmentation de domaine"),", mise en \u0153uvre (notemment) par OpenStreetMap, pour accro\xeetre le parall\xe9lisme des demandes de pav\xe9s et donc am\xe9liorer le rendement."),(0,r.kt)("p",null,"Lorsque l\u2019utilisateur pr\xe9cise un attribut bool\xe9en, comme ",(0,r.kt)("inlineCode",{parentName:"p"},"shard"),", dans MapML, il doit faire attention de le coder en fonction du type de document ou de m\xe9dia dans lequel sert l\u2019\xe9l\xe9ment. Dans le cas d\u2019un document XML, il faut coder l\u2019attribut bool\xe9en ",(0,r.kt)("inlineCode",{parentName:"p"},'shard="anything"')," en appliquant les r\xe8gles d\u2019analyse syntaxique de ce format. S\u2019il s\u2019agit d\u2019un document HTML, c.-\xe0-d. que le contenu de la couche est en ligne, l\u2019utilisateur doit encoder l\u2019attribut en suivant les ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/HTML/Attributes#boolean_attributes"},"r\xe8gles concernant les attributs bool\xe9ens")," du langage HTML."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"list"},(0,r.kt)("inlineCode",{parentName:"h3"},"list")),(0,r.kt)("p",null,"L\u2019attribut ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-input list="...">')," associe un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," qui fournit les valeurs \xe0 utiliser par l\u2019interm\xe9diaire des \xe9l\xe9ments ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-option>")," de l\u2019\xe9l\xe9ment-enfant ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-datalist>"),". Voir la section ",(0,r.kt)("a",{parentName:"p",href:"#shard"},"shard")," pour plus de d\xe9tails."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"exemples"},"Exemples"),(0,r.kt)("h3",{id:"input-step"},"Input step"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="0" lat="45.409071" lon="-75.703411" controls>\n  <layer- label="OpenStreetMap" checked>\n    <map-extent units="OSMTILE" >\n      <map-input name="z" type="zoom"  value="18" min="0" max="18" step="3"></map-input>\n      <map-input name="s" type="hidden" shard="true" list="servers"></map-input>\n      <map-datalist id="servers">\n        <map-option value="a"></map-option>\n        <map-option value="b"></map-option>\n        <map-option value="c"></map-option>\n      </map-datalist>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>\n      <map-link rel="tile" tref="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("h3",{id:"lentr\xe9e-reltile-g\xe9n\xe8re-une-demande-soumise-aux-services-de-cartes-web-wms-pour-obtenir-des-pav\xe9s"},"L\u2019entr\xe9e rel=tile g\xe9n\xe8re une demande soumise aux services de cartes Web (WMS) pour obtenir des pav\xe9s."),(0,r.kt)("p",null,"Les WMS peuvent \xeatre lents \xe0 r\xe9agir, m\xeame s\u2019ils le font rapidement en r\xe9alit\xe9. Dessiner la carte \xe0 partir de pav\xe9s g\xe9n\xe9r\xe9s par autant de demandes GetMap soumises aux WMS peut am\xe9liorer la qualit\xe9 de votre carte aux yeux de l\u2019utilisateur. En revanche, il est d\xe9conseill\xe9 de proc\xe9der ainsi lorsque la couche demand\xe9e contient des \xe9tiquettes susceptibles d\u2019\xeatre reproduites dans chacun des nombreux pav\xe9s adjacents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" lat="60" lon="-95" zoom="2" controls>\n  <layer- label="Demande de pav\xe9s WMS GetMap" checked>\n    <map-extent units="CBMTILE">\n      <!\u2014ici, les unit\xe9s et les attributs d\u2019axe semblent contradictoires --\x3e \n      <!\u2014cependant, rel="tile" et units="tilematrix" informent tous les deux la carte que l\u2019\xe9v\xe9nement s\xe9rialis\xe9 a trait \xe0 un pav\xe9 dans le tcrs --\x3e\n      <map-input name="txmin" type="location" rel="tile" position="top-left" axis="easting" units="tilematrix" ></map-input>\n      <!\u2014dans ce cas, position renvoie \xe0 une position sur le pav\xe9 \xe0 r\xe9cup\xe9rer --\x3e\n      <map-input name="tymin" type="location" rel="tile" position="bottom-left" axis="northing" units="tilematrix" ></map-input>\n      <map-input name="txmax" type="location" rel="tile" position="top-right" axis="easting" units="tilematrix" ></map-input>\n      <map-input name="tymax" type="location" rel="tile" position="top-left" axis="northing" units="tilematrix" ></map-input>\n      <map-link rel="tile" tref="https://datacube.services.geo.ca/ows/msi?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=msi-color&VERSION=1.3.0&LAYERS=msi&WIDTH=256&HEIGHT=256&CRS=EPSG:3978&BBOX={txmin},{tymin},{txmax},{tymax}" ></map-link>\n      <!\u2014il faut pr\xe9ciser un niveau de zoom, mais il s\u2019agit d\u2019un bogue : \n           https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/669 --\x3e\n      <map-input name="z" type="zoom" value="25" min="0" max="25"/>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sp\xe9cifications"},"Sp\xe9cifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sp\xe9cification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-input-element-0"},"\xc9l\xe9ment input de MapML"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/input.html#the-input-element"},"\xc9l\xe9ment input en HTML"))))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/input.md"},"Modifiez cette page sur ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Clavardez avec nous sur ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}u.isMDXComponent=!0}}]);