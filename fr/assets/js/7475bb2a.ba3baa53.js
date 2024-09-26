"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[1909],{2139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=t(4848),s=t(8453);const l={id:"map-link-api",title:"HTMLLinkElement",slug:"/api/map-link-api"},r=void 0,a={id:"api/map-link-api",title:"HTMLLinkElement",description:'Ce document est une copie de l\'ancienne page "Custom Rendering API", et est',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/map-link-api.md",sourceDirName:"api",slug:"/api/map-link-api",permalink:"/web-map-doc/fr/docs/api/map-link-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"map-link-api",title:"HTMLLinkElement",slug:"/api/map-link-api"},sidebar:"sidebar",previous:{title:"HTMLExtentElement",permalink:"/web-map-doc/fr/docs/api/map-extent-api"},next:{title:"Guide de d\xe9marrage rapide MapML",permalink:"/web-map-doc/fr/docs/user-guide/quick-start"}},c={},d=[{value:"Pav\xe9s personnalis\xe9s",id:"pav\xe9s-personnalis\xe9s",level:2},{value:"\xc9v\xe9nement <code>tileloadstart</code>",id:"\xe9v\xe9nement-tileloadstart",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Image personnalis\xe9e",id:"image-personnalis\xe9e",level:2},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Ce document est une copie de l'ancienne page \"Custom Rendering API\", et est\nen cours de construction.  Il d\xe9crira \xe0 terme l'API de l'\xe9l\xe9ment personnalis\xe9 map-link ;\nl'\"API de rendu personnalis\xe9\" provient actuellement de l'\xe9l\xe9ment personnalis\xe9 map-link,\nce qui pourrait changer \xe0 l'avenir."}),"\n",(0,i.jsx)(n.p,{children:"L\u2019interface de programmation d\u2019applications (API) de rendu personnalis\xe9 permet aux d\xe9veloppeurs de contourner la fonction de rendu de MapML et de dessiner ce qu\u2019ils veulent sur la carte, \xe0 condition que cela fasse partie du domaine HTML."}),"\n",(0,i.jsx)(n.h2,{id:"pav\xe9s-personnalis\xe9s",children:"Pav\xe9s personnalis\xe9s"}),"\n",(0,i.jsxs)(n.p,{children:["Pour effectuer le rendu de pav\xe9s personnalis\xe9s avec JavaScript, \xe9coutez l\u2019\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"tileloadstart"})," sur un \xe9l\xe9ment ",(0,i.jsx)(n.code,{children:'<map-link rel="tile">'})," d\u2019une couche produite suivant un mod\xe8le."]}),"\n",(0,i.jsxs)(n.h3,{id:"\xe9v\xe9nement-tileloadstart",children:["\xc9v\xe9nement ",(0,i.jsx)(n.code,{children:"tileloadstart"})]}),"\n",(0,i.jsx)(n.p,{children:"Cet \xe9v\xe9nement est d\xe9clench\xe9 \xe0 la cr\xe9ation d\u2019un pav\xe9, et contient la structure suivante dans sa propri\xe9t\xe9 des d\xe9tails :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  x: 1,    // valeur x de tilematrix du pav\xe9 charg\xe9\n  y: 2,    // valeur y de tilematrix du pav\xe9 charg\xe9\n  zoom: 3, // niveau de zoom du pav\xe9 charg\xe9\n  appendTile: function appendTile ( customTile ) {...} // transmet le pav\xe9 personnalis\xe9 comme un argument de fonction\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"La carte :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" zoom="0" lat="45" lon="-75" controls>\n  <layer- label="pav\xe9s personnalis\xe9s" checked>\n    <map-meta name="zoom" content="min=0,max=23" ></map-meta>\n    <map-extent units="OSMTILE" checked hidden>\n      <map-input name="zoomLevel" type="zoom" min="0" max="23" value="1" ></map-input>\n      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" ></map-input>\n      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" ></map-input>\n      \x3c!-- \xe9coutez l\u2019\xe9v\xe9nement tileloadstart sur cet \xe9l\xe9ment --\x3e\n      <map-link rel="tile" title="" tref="" ></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n'})}),"\n",(0,i.jsx)(n.p,{children:"Script Java pour cr\xe9er des pav\xe9s personnalis\xe9s :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'let layer = document.querySelector("body > mapml-viewer > layer- > map-extent > map-link");\n    layer.addEventListener("tileloadstart", (e) => {\n      let customTile = document.createElement("p");\n      customTile.innerHTML = `x: ${e.detail.x} y: ${e.detail.y} zoom: ${e.detail.zoom}`;\n      e.detail.appendTile(customTile);\n    });\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Dans cet exemple, ",(0,i.jsx)(n.code,{children:"customTile"})," est une balise HTML ",(0,i.jsx)(n.code,{children:"<p>"}),", mais vous  pouvez utiliser n\u2019importe quel \xe9l\xe9ment HTML. Il suffit d\u2019ajouter l\u2019\xe9l\xe9ment cr\xe9\xe9 avec la fonction ",(0,i.jsx)(n.code,{children:"(tileloadstart event).detail.appendTile()"}),", ce qui transmet le pav\xe9 personnalis\xe9 en argument de la fonction."]}),"\n",(0,i.jsx)(n.h2,{id:"image-personnalis\xe9e",children:"Image personnalis\xe9e"}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"\xc0 mettre en \u0153uvre."})}),"\n",(0,i.jsx)(n.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Sp\xe9cification"})})}),(0,i.jsx)(n.tbody,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-link-element",children:"HTMLLinkElement - pas encore (compl\xe8tement) sp\xe9cifi\xe9"})})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"exigences",children:"Exigences"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-",children:"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:[(0,i.jsx)("span",{class:"requirement",children:"exigence"}),"\n",(0,i.jsx)("span",{class:"enhancement",children:"am\xe9lioration"}),"\n",(0,i.jsx)("span",{class:"impractical",children:"peu pratique"}),"\n",(0,i.jsx)("span",{class:"undecided",children:"ind\xe9cis"}),"\n",(0,i.jsx)("span",{class:"discussion",children:"en cours de discussion"})]})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"}}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Sp\xe9c."}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Visualiseur"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"API"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#propri%C3%A9t%C3%A9s",children:(0,i.jsx)(n.strong,{children:"Propri\xe9t\xe9s"})})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"s/o"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"s/o"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"s/o"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#m%C3%A9thodes",children:(0,i.jsx)(n.strong,{children:"M\xe9thodes"})})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"s/o"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"s/o"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"s/o"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#ev%C3%A9nements",children:(0,i.jsx)(n.strong,{children:"Ev\xe9nements"})})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"aucun"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"s/o"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"partiel *"})]})]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Exceptions *"}),(0,i.jsx)("ol",{children:(0,i.jsx)("li",{children:"L'\xe9l\xe9ment <map-link> \xe9mettra l'\xe9v\xe9nement tileloadstart, mais son comportement est exp\xe9rimental et n\xe9cessite un balisage conforme \xe0 l'exemple donn\xe9 ci-dessus."})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/map-link-api.md",children:["Modifier cette page sur ",(0,i.jsx)(n.strong,{children:"Github"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Discutez avec nous sur ",(0,i.jsx)(n.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);