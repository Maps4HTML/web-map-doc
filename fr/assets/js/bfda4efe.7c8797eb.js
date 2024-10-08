"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[4972],{6143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const l={id:"features",title:"Fonctionnalit\xe9s de l'extension",slug:"/extension/features"},r=void 0,a={id:"extension/features",title:"Fonctionnalit\xe9s de l'extension",description:"L\u2019extension r\xe9pond \xe0 plusieurs autres exigences.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/extension/features.md",sourceDirName:"extension",slug:"/extension/features",permalink:"/web-map-doc/fr/docs/extension/features",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"features",title:"Fonctionnalit\xe9s de l'extension",slug:"/extension/features"},sidebar:"sidebar",previous:{title:"Installation de l'extension",permalink:"/web-map-doc/fr/docs/extension/installation"},next:{title:"Mode d\xe9bogage",permalink:"/web-map-doc/fr/docs/resources/debug-mode"}},c={},d=[{value:"Localisation",id:"localisation",level:3},{value:"Indexation d\u2019entit\xe9s",id:"indexation-dentit\xe9s",level:3},{value:"Annonce du niveau de zoom",id:"annonce-du-niveau-de-zoom",level:3},{value:"Annoncer l&#39;\xe9chelle",id:"annoncer-l\xe9chelle",level:3},{value:"Rendu des ressources en MapML",id:"rendu-des-ressources-en-mapml",level:3},{value:"D\xe9finir un syst\xe8me de coordonn\xe9es pour les op\xe9rations de copie",id:"d\xe9finir-un-syst\xe8me-de-coordonn\xe9es-pour-les-op\xe9rations-de-copie",level:3},{value:"Exigences",id:"exigences",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"L\u2019extension r\xe9pond \xe0 plusieurs autres exigences."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Fen\xeatre contextuelle d\u2019extension",src:t(7949).A+"",width:"298",height:"473"})}),"\n",(0,s.jsx)(n.h3,{id:"localisation",children:"Localisation"}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, l\u2019extension utilise les param\xe8tres de lieu du navigateur pour afficher une interface utilisateur ",(0,s.jsx)(n.code,{children:"<mapml-viewer>"})," dans les param\xe8tres de lieu de l\u2019utilisateur. Notez que si la langue de l\u2019interface utilisateur ne correspond pas \xe0 celle de votre navigateur, il est probable que les cha\xeenes de l\u2019interface utilisateur ne soient actuellement pas traduites pour vos param\xe8tres de lieu. Les contributions en mati\xe8re de localisation sont les bienvenues. Au moment de la r\xe9daction du pr\xe9sent document, les langues disponibles sont l\u2019anglais, le fran\xe7ais et le su\xe9dois."]}),"\n",(0,s.jsx)(n.h3,{id:"indexation-dentit\xe9s",children:"Indexation d\u2019entit\xe9s"}),"\n",(0,s.jsx)(n.p,{children:"Lorsque cette fonction est activ\xe9e au moyen de l\u2019extension, elle affiche un carr\xe9 au centre de la carte afin d\u2019ouvrir le menu de l\u2019index des entit\xe9s situ\xe9es dans le carr\xe9, lequel menu est accessible par le clavier."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Exemple d\u2019index des entit\xe9s",src:t(9138).A+"",width:"1278",height:"1277"})}),"\n",(0,s.jsx)(n.h3,{id:"annonce-du-niveau-de-zoom",children:"Annonce du niveau de zoom"}),"\n",(0,s.jsx)(n.p,{children:"L'activation de cette fonction dans l\u2019extension permet d'annoncer le niveau de zoom dans la carte au moyen de lecteurs d\u2019\xe9cran (cette option est activ\xe9e par d\xe9faut)."}),"\n",(0,s.jsx)(n.h3,{id:"annoncer-l\xe9chelle",children:"Annoncer l'\xe9chelle"}),"\n",(0,s.jsx)(n.p,{children:"Annonce l'\xe9chelle de la carte aux lecteurs d'\xe9cran en unit\xe9s m\xe9triques ou imp\xe9riales (les unit\xe9s m\xe9triques sont s\xe9lectionn\xe9es par d\xe9faut)."}),"\n",(0,s.jsx)(n.h3,{id:"rendu-des-ressources-en-mapml",children:"Rendu des ressources en MapML"}),"\n",(0,s.jsxs)(n.p,{children:["L'activation de cette fonction dans la fen\xeatre contextuelle d'extension (elle est activ\xe9e par d\xe9faut comme le montre l'image ci-dessus, mais elle peut \xeatre d\xe9sactiv\xe9e) permet d'afficher des documents cartographiques qui n'ont pas de document h\xf4te, tout comme les navigateurs peuvent pr\xe9senter des ressources d'image  (image/*) qui n'ont pas de document h\xf4te en synth\xe9tisant un document h\xf4te au moment de l'ex\xe9cution. Cette fonctionnalit\xe9 reconna\xeetra les documents qui sont servis \xe0 un onglet de navigateur (ou contexte de navigation g\xe9n\xe9ral) ou qui sont servis avec l'en-t\xeate  \"text/mapml\" ou \"application/xml\" Content-Type. Dans le dernier cas, l'extension recherchera un \xe9l\xe9ment racine ",(0,s.jsx)(n.code,{children:'<mapml- xmlns="http://www.w3.org/1999/xhtml">'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"d\xe9finir-un-syst\xe8me-de-coordonn\xe9es-pour-les-op\xe9rations-de-copie",children:"D\xe9finir un syst\xe8me de coordonn\xe9es pour les op\xe9rations de copie"}),"\n",(0,s.jsx)(n.p,{children:"Par d\xe9faut, le syst\xe8me de coordonn\xe9es (cs) pour copier l'\xe9tendue de la carte \xe0\nl'aide du menu contextuel de la carte est celui des coordonn\xe9es projet\xe9es (PCRS),\net celui pour copier les endroits est par d\xe9faut g\xe9od\xe9sique (GCRS). Lorsqu'il est\nchang\xe9 par l'interface utilisateur de l'extension, le syst\xe8me de coordonn\xe9es\ns\xe9lectionn\xe9 sera utilis\xe9 pour les op\xe9rations de copie ult\xe9rieures."}),"\n",(0,s.jsx)(n.h2,{id:"exigences",children:"Exigences"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-",children:"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsxs)("b",{children:[(0,s.jsx)("span",{class:"requirement",children:"exigence"}),"\n",(0,s.jsx)("span",{class:"enhancement",children:"am\xe9lioration"}),"\n",(0,s.jsx)("span",{class:"impractical",children:"peu pratique"}),"\n",(0,s.jsx)("span",{class:"undecided",children:"ind\xe9cis"}),"\n",(0,s.jsx)("span",{class:"discussion",children:"en cours de discussion"})]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"}}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Sp\xe9c."}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Visualiseur"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"API"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/172",children:(0,s.jsx)(n.strong,{children:"Le GeoWeb \u2013 Mod\xe8le Epic propos\xe9"})})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)("div",{class:"discussion",children:(0,s.jsx)(n.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/19",children:"Permettre la f\xe9d\xe9ration au moyen de liens"})})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis",children:(0,s.jsx)(n.strong,{children:"Capacit\xe9s de cartographie de l'API c\xf4t\xe9 client (6.0)"})})}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)("div",{class:"discussion",children:(0,s.jsx)(n.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/259",children:"Cr\xe9er, initialiser et afficher une carte \xe0 partir d'une ressource d'un document de carte"})})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"complet"}),(0,s.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/extension/features.md",children:["Modifier cette page sur ",(0,s.jsx)(n.strong,{children:"Github"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Discutez avec nous sur ",(0,s.jsx)(n.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9138:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/feature-index-9aab6d59cd3afda76f7b1e7a4e7c39fe.png"},7949:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/render-mapml-edd90fd4e5352aa7b2a8acedad2bbaa4.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);