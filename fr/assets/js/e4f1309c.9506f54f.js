"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[2097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"map-extent-api",title:"HTMLExtentElement",slug:"/api/map-extent-api"},i="HTMLExtentElement",p={unversionedId:"api/map-extent-api",id:"api/map-extent-api",title:"HTMLExtentElement",description:"Propri\xe9t\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/map-extent-api.md",sourceDirName:"api",slug:"/api/map-extent-api",permalink:"/web-map-doc/fr/docs/api/map-extent-api",draft:!1,tags:[],version:"current",frontMatter:{id:"map-extent-api",title:"HTMLExtentElement",slug:"/api/map-extent-api"},sidebar:"sidebar",previous:{title:"HTMLFeatureElement",permalink:"/web-map-doc/fr/docs/api/map-feature-api"},next:{title:"HTMLLinkElement",permalink:"/web-map-doc/fr/docs/api/map-link-api"}},c={},u=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"units",id:"units",level:3},{value:"checked",id:"checked",level:3},{value:"hidden",id:"hidden",level:3},{value:"disabled",id:"disabled",level:3},{value:"label",id:"label",level:3},{value:"opacity",id:"opacity",level:3},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"Ev\xe9nements",id:"ev\xe9nements",level:2},{value:"Exemples",id:"exemples",level:2},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}],o={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"htmlextentelement"},"HTMLExtentElement"),(0,r.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,r.kt)("h3",{id:"units"},"units"),(0,r.kt)("p",null,"La propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"units")," est en lecture seule et renvoie la valeur initiale de\n",(0,r.kt)("a",{parentName:"p",href:"../elements/extent/#units"},"l'attribut de contenu ",(0,r.kt)("inlineCode",{parentName:"a"},"units")),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"checked"},"checked"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLExtentElement.checked")," est une valeur bool\xe9enne en lecture/\xe9criture qui\nactive ou d\xe9sactive le map-extent, et refl\xe8te l'attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"checked"),". L'\xe9tat\n",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," est refl\xe9t\xe9 dans l'interface utilisateur du contr\xf4le de couche pour le\nmap-extent, s'il n'est pas dans l'\xe9tat ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden"),', via une case \xe0 cocher \xe0 c\xf4t\xe9 du\nnom du map-extent.  La propri\xe9t\xe9 "checked" peut \xeatre utilis\xe9e pour modifier par\nprogramme l\'\xe9tat ',(0,r.kt)("inlineCode",{parentName:"p"},"checked")," de l'\xe9tendue.  La propri\xe9t\xe9 checked ne peut pas \xeatre\nmodifi\xe9e si la propri\xe9t\xe9 disabled est d\xe9finie."),(0,r.kt)("p",null,"Pour activer l'\xe9tat ",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," d'un map-extent :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nextent.checked = true; // valid values are true | false\n")),(0,r.kt)("p",null,"To read the checked state of the map-extent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nlet isChecked = extent.checked;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hidden"},"hidden"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLExtentElement.hidden")," est une valeur bool\xe9enne en lecture/\xe9criture qui cache\nou d\xe9-cache le map-extent map-extent dans le contr\xf4le de couche uniquement.",(0,r.kt)("br",{parentName:"p"}),"\n","L'\xe9tat ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden")," n'a pas de rapport avec la pr\xe9sence du contenu du map-extent sur\nla carte, il n'affecte que la pr\xe9sence du map-extent dans le contr\xf4le des couches.\nCela peut \xeatre utile pour simplifier la repr\xe9sentation du contr\xf4le des couches\nd'une couche parentale contenant un seul map-extent, sans encombrer l'interface\nutilisateur. "),(0,r.kt)("p",null,"Permet de d\xe9finir/mettre \xe0 jour si l'\xe9tendue de la carte est cach\xe9e dans le\ncontr\xf4le de la couche :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nextent.hidden = true; // valid values are true | false\n")),(0,r.kt)("p",null,"Pour obtenir la valeur cach\xe9e de ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nlet isHidden = extent.hidden;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabled"},"disabled"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLExtentElement.disabled")," fournit un acc\xe8s en mode READ-ONLY \xe0 l'\xe9tat d\xe9sactiv\xe9\nde l'\xe9l\xe9ment map-extent.  Un map-extent devient d\xe9sactiv\xe9 si son contenu n'est pas\nrendu, soit parce qu'il est compl\xe8tement en dehors des limites du map-extent\nactuel, soit parce qu'une erreur est associ\xe9e au au traitement du map-extent,\ntelle qu'une projection incompatible avec la projection de la carte. Lorsqu'un\nmap-extent est d\xe9sactiv\xe9, l'utilisateur peut toujours interagir avec lui d'une\ncertaine mani\xe8re dans le contr\xf4le de couche, mais il ne sera pas visible dans la\nfen\xeatre de visualisation de la carte.  Si un map-extent est activ\xe9, \xe0 la suite\nd'une manipulation de la carte, par exemple, le map-extent deviendra totalement\ninteractif dans le contr\xf4le de couche, et devrait \xeatre visible dans la fen\xeatre\nd'affichage de la carte (bien que difficile \xe0 voir, en fonction de l'opacit\xe9 et\nde la taille de l'\xe9l\xe9ment, entre autres consid\xe9rations). "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"label"},"label"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLExtentElement.label")," refl\xe8te l'attribut de contenu ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," et sp\xe9cifie un\nnom accessible de repli pour l'\xe9tendue dans le contr\xf4le de couche. Si l'attribut\nde contenu  n'est pas fourni, une variante internationalis\xe9e de \"Sub-Layer\" sera\nrenvoy\xe9e comme valeur par d\xe9faut."),(0,r.kt)("p",null,"Pour d\xe9finir/mettre \xe0 jour l'\xe9tiquette de ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nextent.label = \"New Accessible Name\";\n")),(0,r.kt)("p",null,"Pour obtenir la valeur de l'\xe9tiquette de ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nlet label = extent.label;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"opacity"},"opacity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLExtentElement.opacity")," fournit un acc\xe8s en mode lecture/\xe9criture \xe0 la valeur\n",(0,r.kt)("inlineCode",{parentName:"p"},"opacity"),', et est refl\xe9t\xe9e dans le contr\xf4le de couche pour chaque map-extent, sous\n"Opacity". Si aucun attribut de contenu attribut ',(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," n'est d\xe9fini,\nl'attribution de la propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," ne cr\xe9era pas pas l'attribut, mais\nl'opacit\xe9  du contenu sur la carte et dans la repr\xe9sentation du contr\xf4le de\ncouche (entr\xe9e du curseur) sera modifi\xe9e."),(0,r.kt)("p",null,"Pour d\xe9finir/mettre \xe0 jour l'opacit\xe9 de ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nextent.opacity = 0.5; // valid values from 0 to 1\n")),(0,r.kt)("p",null,"Pour obtenir la valeur d'opacit\xe9 de ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-extent>")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let extent = document.querySelector('map-extent');\nlet opacity = extent.opacity;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"m\xe9thodes"},"M\xe9thodes"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"ev\xe9nements"},"Ev\xe9nements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom de l'\xe9v\xe9nement"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"exemples"},"Exemples"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sp\xe9cifications"},"Sp\xe9cifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sp\xe9cification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#dom-htmlextentelement"},"HTMLExtentElement"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"exigences"},"Exigences"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-R%C3%89SUMER+LE+PROBL%C3%88ME-&body=-D%C3%89CRIRE+LE+PROBL%C3%88ME-"},"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"exigence"),(0,r.kt)("span",{class:"enhancement"},"am\xe9lioration"),(0,r.kt)("span",{class:"impractical"},"peu pratique"),(0,r.kt)("span",{class:"undecided"},"ind\xe9cis"),(0,r.kt)("span",{class:"discussion"},"en cours de discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sp\xe9c."),(0,r.kt)("th",{parentName:"tr",align:"center"},"Visualiseur"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#propri%C3%A9t%C3%A9s"},(0,r.kt)("strong",{parentName:"a"},"Propri\xe9t\xe9s"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"complet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"complet"),(0,r.kt)("td",{parentName:"tr",align:"center"},"complet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#m%C3%A9thodes"},(0,r.kt)("strong",{parentName:"a"},"M\xe9thodes"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#ev%C3%A9nements"},(0,r.kt)("strong",{parentName:"a"},"Ev\xe9nements"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o")))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/map-extent-api.md"},"Modifier cette page sur ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Discutez avec nous sur ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}s.isMDXComponent=!0}}]);