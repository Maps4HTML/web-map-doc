"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7238],{3879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(4848),l=n(8453);const i={id:"map-extent-api",title:"HTMLExtentElement",slug:"/api/map-extent-api"},r="HTMLExtentElement",c={id:"api/map-extent-api",title:"HTMLExtentElement",description:"Propri\xe9t\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api/map-extent-api.md",sourceDirName:"api",slug:"/api/map-extent-api",permalink:"/web-map-doc/fr/docs/api/map-extent-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"map-extent-api",title:"HTMLExtentElement",slug:"/api/map-extent-api"},sidebar:"sidebar",previous:{title:"HTMLFeatureElement",permalink:"/web-map-doc/fr/docs/api/map-feature-api"},next:{title:"HTMLLinkElement",permalink:"/web-map-doc/fr/docs/api/map-link-api"}},d={},a=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"units",id:"units",level:3},{value:"checked",id:"checked",level:3},{value:"hidden",id:"hidden",level:3},{value:"disabled",id:"disabled",level:3},{value:"label",id:"label",level:3},{value:"opacity",id:"opacity",level:3},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"Ev\xe9nements",id:"ev\xe9nements",level:2},{value:"Exemples",id:"exemples",level:2},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2},{value:"Exigences",id:"exigences",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"htmlextentelement",children:"HTMLExtentElement"})}),"\n",(0,s.jsx)(t.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n",(0,s.jsx)(t.h3,{id:"units",children:"units"}),"\n",(0,s.jsxs)(t.p,{children:["La propri\xe9t\xe9 ",(0,s.jsx)(t.code,{children:"units"})," est en lecture seule et renvoie la valeur initiale de\n",(0,s.jsxs)(t.a,{href:"../elements/extent/#units",children:["l'attribut de contenu ",(0,s.jsx)(t.code,{children:"units"})]}),"."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"checked",children:"checked"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"HTMLExtentElement.checked"})," est une valeur bool\xe9enne en lecture/\xe9criture qui\nactive ou d\xe9sactive le map-extent, et refl\xe8te l'attribut ",(0,s.jsx)(t.code,{children:"checked"}),". L'\xe9tat\n",(0,s.jsx)(t.code,{children:"checked"})," est refl\xe9t\xe9 dans l'interface utilisateur du contr\xf4le de couche pour le\nmap-extent, s'il n'est pas dans l'\xe9tat ",(0,s.jsx)(t.code,{children:"hidden"}),', via une case \xe0 cocher \xe0 c\xf4t\xe9 du\nnom du map-extent.  La propri\xe9t\xe9 "checked" peut \xeatre utilis\xe9e pour modifier par\nprogramme l\'\xe9tat ',(0,s.jsx)(t.code,{children:"checked"})," de l'\xe9tendue.  La propri\xe9t\xe9 checked ne peut pas \xeatre\nmodifi\xe9e si la propri\xe9t\xe9 disabled est d\xe9finie."]}),"\n",(0,s.jsxs)(t.p,{children:["Pour activer l'\xe9tat ",(0,s.jsx)(t.code,{children:"checked"})," d'un map-extent :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nextent.checked = true; // les valeurs valides sont true | false\n"})}),"\n",(0,s.jsx)(t.p,{children:"Pour lire l'\xe9tat coch\xe9 de l'\xe9tendue de la carte :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nlet isChecked = extent.checked;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"hidden",children:"hidden"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"HTMLExtentElement.hidden"})," est une valeur bool\xe9enne en lecture/\xe9criture qui cache\nou d\xe9-cache le map-extent map-extent dans le contr\xf4le de couche uniquement.",(0,s.jsx)(t.br,{}),"\n","L'\xe9tat ",(0,s.jsx)(t.code,{children:"hidden"})," n'a pas de rapport avec la pr\xe9sence du contenu du map-extent sur\nla carte, il n'affecte que la pr\xe9sence du map-extent dans le contr\xf4le des couches.\nCela peut \xeatre utile pour simplifier la repr\xe9sentation du contr\xf4le des couches\nd'une couche parentale contenant un seul map-extent, sans encombrer l'interface\nutilisateur."]}),"\n",(0,s.jsx)(t.p,{children:"Permet de d\xe9finir/mettre \xe0 jour si l'\xe9tendue de la carte est cach\xe9e dans le\ncontr\xf4le de la couche :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nextent.hidden = true; // les valeurs valides sont true | false\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Pour obtenir la valeur cach\xe9e de ",(0,s.jsx)(t.code,{children:"<map-extent>"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nlet isHidden = extent.hidden;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"disabled",children:"disabled"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"HTMLExtentElement.disabled"})," fournit un acc\xe8s en mode READ-ONLY \xe0 l'\xe9tat d\xe9sactiv\xe9\nde l'\xe9l\xe9ment map-extent.  Un map-extent devient d\xe9sactiv\xe9 si son contenu n'est pas\nrendu, soit parce qu'il est compl\xe8tement en dehors des limites du map-extent\nactuel, soit parce qu'une erreur est associ\xe9e au au traitement du map-extent,\ntelle qu'une projection incompatible avec la projection de la carte. Lorsqu'un\nmap-extent est d\xe9sactiv\xe9, l'utilisateur peut toujours interagir avec lui d'une\ncertaine mani\xe8re dans le contr\xf4le de couche, mais il ne sera pas visible dans la\nfen\xeatre de visualisation de la carte.  Si un map-extent est activ\xe9, \xe0 la suite\nd'une manipulation de la carte, par exemple, le map-extent deviendra totalement\ninteractif dans le contr\xf4le de couche, et devrait \xeatre visible dans la fen\xeatre\nd'affichage de la carte (bien que difficile \xe0 voir, en fonction de l'opacit\xe9 et\nde la taille de l'\xe9l\xe9ment, entre autres consid\xe9rations)."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"label",children:"label"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"HTMLExtentElement.label"})," refl\xe8te l'attribut de contenu ",(0,s.jsx)(t.code,{children:"label"})," et sp\xe9cifie un\nnom accessible de repli pour l'\xe9tendue dans le contr\xf4le de couche. Si l'attribut\nde contenu  n'est pas fourni, une variante internationalis\xe9e de \"Sub-Layer\" sera\nrenvoy\xe9e comme valeur par d\xe9faut."]}),"\n",(0,s.jsxs)(t.p,{children:["Pour d\xe9finir/mettre \xe0 jour l'\xe9tiquette de ",(0,s.jsx)(t.code,{children:"<map-extent>"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nextent.label = \"Nouveau nom accessible\";\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Pour obtenir la valeur de l'\xe9tiquette de ",(0,s.jsx)(t.code,{children:"<map-extent>"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nlet label = extent.label;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"opacity",children:"opacity"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"HTMLExtentElement.opacity"})," fournit un acc\xe8s en mode lecture/\xe9criture \xe0 la valeur\n",(0,s.jsx)(t.code,{children:"opacity"}),', et est refl\xe9t\xe9e dans le contr\xf4le de couche pour chaque map-extent, sous\n"Opacity". Si aucun attribut de contenu attribut ',(0,s.jsx)(t.code,{children:"opacity"})," n'est d\xe9fini,\nl'attribution de la propri\xe9t\xe9 ",(0,s.jsx)(t.code,{children:"opacity"})," ne cr\xe9era pas pas l'attribut, mais\nl'opacit\xe9  du contenu sur la carte et dans la repr\xe9sentation du contr\xf4le de\ncouche (entr\xe9e du curseur) sera modifi\xe9e."]}),"\n",(0,s.jsxs)(t.p,{children:["Pour d\xe9finir/mettre \xe0 jour l'opacit\xe9 de ",(0,s.jsx)(t.code,{children:"<map-extent>"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nextent.opacity = 0.5; // valeurs valides de 0 \xe0 1\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Pour obtenir la valeur d'opacit\xe9 de ",(0,s.jsx)(t.code,{children:"<map-extent>"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"let extent = document.querySelector('map-extent');\nlet opacity = extent.opacity;\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"m\xe9thodes",children:"M\xe9thodes"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"ev\xe9nements",children:"Ev\xe9nements"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Nom de l'\xe9v\xe9nement"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"exemples",children:"Exemples"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Sp\xe9cification"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://maps4html.org/MapML-Specification/spec/#dom-htmlextentelement",children:"HTMLExtentElement"})})})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"exigences",children:"Exigences"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-R%C3%89SUMER+LE+PROBL%C3%88ME-&body=-D%C3%89CRIRE+LE+PROBL%C3%88ME-",children:"Signaler les probl\xe8mes li\xe9s \xe0 ces exigences sur GitHub"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsxs)("b",{children:[(0,s.jsx)("span",{class:"requirement",children:"exigence"}),"\n",(0,s.jsx)("span",{class:"enhancement",children:"am\xe9lioration"}),"\n",(0,s.jsx)("span",{class:"impractical",children:"peu pratique"}),"\n",(0,s.jsx)("span",{class:"undecided",children:"ind\xe9cis"}),"\n",(0,s.jsx)("span",{class:"discussion",children:"en cours de discussion"})]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Sp\xe9c."}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Visualiseur"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"API"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#propri%C3%A9t%C3%A9s",children:(0,s.jsx)(t.strong,{children:"Propri\xe9t\xe9s"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"complet"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"complet"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"complet"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#m%C3%A9thodes",children:(0,s.jsx)(t.strong,{children:"M\xe9thodes"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"s/o"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"s/o"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"s/o"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"#ev%C3%A9nements",children:(0,s.jsx)(t.strong,{children:"Ev\xe9nements"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"s/o"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"s/o"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"s/o"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/api/map-extent-api.md",children:["Modifier cette page sur ",(0,s.jsx)(t.strong,{children:"Github"})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Discutez avec nous sur ",(0,s.jsx)(t.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);