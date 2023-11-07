"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"map-link-api",title:"HTMLLinkElement",slug:"/api/map-link-api"},l=void 0,p={unversionedId:"api/map-link-api",id:"api/map-link-api",title:"HTMLLinkElement",description:'Ce document est une copie de l\'ancienne page "Custom Rendering API", et est',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/map-link-api.md",sourceDirName:"api",slug:"/api/map-link-api",permalink:"/web-map-doc/fr/docs/api/map-link-api",draft:!1,tags:[],version:"current",frontMatter:{id:"map-link-api",title:"HTMLLinkElement",slug:"/api/map-link-api"},sidebar:"sidebar",previous:{title:"HTMLFeatureElement",permalink:"/web-map-doc/fr/docs/api/map-feature-api"},next:{title:"\xc0 propos de l'extension",permalink:"/web-map-doc/fr/docs/extension/about"}},o={},s=[{value:"Pav\xe9s personnalis\xe9s",id:"pav\xe9s-personnalis\xe9s",level:2},{value:"\xc9v\xe9nement <code>tileloadstart</code>",id:"\xe9v\xe9nement-tileloadstart",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Image personnalis\xe9e",id:"image-personnalis\xe9e",level:2},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ce document est une copie de l'ancienne page \"Custom Rendering API\", et est\nen cours de construction.  Il d\xe9crira \xe0 terme l'API de l'\xe9l\xe9ment personnalis\xe9 map-link ;\nl'\"API de rendu personnalis\xe9\" provient actuellement de l'\xe9l\xe9ment personnalis\xe9 map-link,\nce qui pourrait changer \xe0 l'avenir."),(0,r.kt)("p",null,"L\u2019interface de programmation d\u2019applications (API) de rendu personnalis\xe9 permet aux d\xe9veloppeurs de contourner la fonction de rendu de MapML et de dessiner ce qu\u2019ils veulent sur la carte, \xe0 condition que cela fasse partie du domaine HTML."),(0,r.kt)("h2",{id:"pav\xe9s-personnalis\xe9s"},"Pav\xe9s personnalis\xe9s"),(0,r.kt)("p",null,"Pour effectuer le rendu de pav\xe9s personnalis\xe9s avec JavaScript, \xe9coutez l\u2019\xe9v\xe9nement ",(0,r.kt)("inlineCode",{parentName:"p"},"tileloadstart")," sur un \xe9l\xe9ment ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link rel="tile">')," d\u2019une couche produite suivant un mod\xe8le."),(0,r.kt)("h3",{id:"\xe9v\xe9nement-tileloadstart"},"\xc9v\xe9nement ",(0,r.kt)("inlineCode",{parentName:"h3"},"tileloadstart")),(0,r.kt)("p",null,"Cet \xe9v\xe9nement est d\xe9clench\xe9 \xe0 la cr\xe9ation d\u2019un pav\xe9, et contient la structure suivante dans sa propri\xe9t\xe9 des d\xe9tails :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  x: 1,    // valeur x de tilematrix du pav\xe9 charg\xe9\n  y: 2,    // valeur y de tilematrix du pav\xe9 charg\xe9\n  zoom: 3, // niveau de zoom du pav\xe9 charg\xe9\n  appendTile: function appendTile ( customTile ) {...} // transmet le pav\xe9 personnalis\xe9 comme un argument de fonction\n}\n")),(0,r.kt)("h3",{id:"exemple"},"Exemple"),(0,r.kt)("p",null,"La carte :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="0" lat="45" lon="-75" controls>\n  <layer- label="pav\xe9s personnalis\xe9s" checked>\n    <map-meta name="zoom" content="min=0,max=23" ></map-meta>\n    <map-extent units="OSMTILE" checked hidden>\n      <map-input name="zoomLevel" type="zoom" min="0" max="23" value="1" ></map-input>\n      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" ></map-input>\n      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" ></map-input>\n      \x3c!-- \xe9coutez l\u2019\xe9v\xe9nement tileloadstart sur cet \xe9l\xe9ment --\x3e\n      <map-link rel="tile" title="" tref="" ></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("p",null,"Script Java pour cr\xe9er des pav\xe9s personnalis\xe9s :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let layer = document.querySelector("body > mapml-viewer > layer- > map-extent > map-link");\n    layer.addEventListener("tileloadstart", (e) => {\n      let customTile = document.createElement("p");\n      customTile.innerHTML = `x: ${e.detail.x} y: ${e.detail.y} zoom: ${e.detail.zoom}`;\n      e.detail.appendTile(customTile);\n    });\n')),(0,r.kt)("p",null,"Dans cet exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"customTile")," est une balise HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),", mais vous  pouvez utiliser n\u2019importe quel \xe9l\xe9ment HTML. Il suffit d\u2019ajouter l\u2019\xe9l\xe9ment cr\xe9\xe9 avec la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"(tileloadstart event).detail.appendTile()"),", ce qui transmet le pav\xe9 personnalis\xe9 en argument de la fonction."),(0,r.kt)("h2",{id:"image-personnalis\xe9e"},"Image personnalis\xe9e"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\xc0 mettre en \u0153uvre.")),(0,r.kt)("h2",{id:"sp\xe9cifications"},"Sp\xe9cifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sp\xe9cification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-link-element"},"HTMLLinkElement - pas encore (compl\xe8tement) sp\xe9cifi\xe9"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"exigences"},"Exigences"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"exigence"),(0,r.kt)("span",{class:"enhancement"},"am\xe9lioration"),(0,r.kt)("span",{class:"impractical"},"peu pratique"),(0,r.kt)("span",{class:"undecided"},"ind\xe9cis"),(0,r.kt)("span",{class:"discussion"},"en cours de discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sp\xe9c."),(0,r.kt)("th",{parentName:"tr",align:"center"},"Visualiseur"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#propri%C3%A9t%C3%A9s"},(0,r.kt)("strong",{parentName:"a"},"Propri\xe9t\xe9s"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#m%C3%A9thodes"},(0,r.kt)("strong",{parentName:"a"},"M\xe9thodes"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#ev%C3%A9nements"},(0,r.kt)("strong",{parentName:"a"},"Ev\xe9nements"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"aucun"),(0,r.kt)("td",{parentName:"tr",align:"center"},"s/o"),(0,r.kt)("td",{parentName:"tr",align:"center"},"partiel *")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Exceptions *"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"L'\xe9l\xe9ment <map-link> \xe9mettra l'\xe9v\xe9nement tileloadstart, mais son comportement est exp\xe9rimental et n\xe9cessite un balisage conforme \xe0 l'exemple donn\xe9 ci-dessus."))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/map-link-api.md"},"Modifier cette page sur ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Discutez avec nous sur ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}u.isMDXComponent=!0}}]);