"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3331],{9131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"elements/properties","title":"<map-properties>","description":"L\u2019\xe9l\xe9ment ` est l\u2019enfant de l\u2019\xe9l\xe9ment `. Il sert \xe0 d\xe9finir le contenu de la fen\xeatre contextuelle associ\xe9e \xe0 une entit\xe9 donn\xe9e.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/properties.md","sourceDirName":"elements","slug":"/elements/properties/","permalink":"/web-map-doc/fr/docs/elements/properties/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"properties","title":"<map-properties>","slug":"/elements/properties/"},"sidebar":"sidebar","previous":{"title":"<map-geometry>","permalink":"/web-map-doc/fr/docs/elements/geometry/"},"next":{"title":"<map-span>","permalink":"/web-map-doc/fr/docs/elements/span/"}}');var s=n(4848),a=n(8453);const o={id:"properties",title:"<map-properties>",slug:"/elements/properties/"},i=void 0,l={},p=[{value:"Exemples",id:"exemples",level:2},{value:"Tableau des propri\xe9t\xe9s",id:"tableau-des-propri\xe9t\xe9s",level:3},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["L\u2019\xe9l\xe9ment ",(0,s.jsx)(t.code,{children:"<map-properties>"})," est l\u2019enfant de l\u2019\xe9l\xe9ment ",(0,s.jsx)(t.code,{children:"<map-feature>"}),". Il sert \xe0 d\xe9finir le contenu de la fen\xeatre contextuelle associ\xe9e \xe0 une entit\xe9 donn\xe9e."]}),"\n",(0,s.jsxs)(t.p,{children:["Un \xe9l\xe9ment ",(0,s.jsx)(t.code,{children:"<map-properties>"})," peut contenir un \xe9l\xe9ment HTML pour d\xe9crire le contenu de l\u2019entit\xe9."]}),"\n",(0,s.jsx)("iframe",{src:"../../../demo/map-properties-demo/",title:"D\xe9mo en MapML",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"exemples",children:"Exemples"}),"\n",(0,s.jsx)(t.h3,{id:"tableau-des-propri\xe9t\xe9s",children:"Tableau des propri\xe9t\xe9s"}),"\n",(0,s.jsxs)(t.p,{children:["Dans l\u2019exemple suivant, la fen\xeatre contextuelle s\u2019affiche sous forme de ",(0,s.jsx)(t.a,{href:"https://html.spec.whatwg.org/multipage/tables.html#the-table-element",children:"tableau HTML"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" zoom="12" lat="45.42" lon="-75.70">\n  <map-layer label="OpenStreetMap" src="../data/osm.mapml" checked></map-layer>\n  <map-layer label="Ottawa" checked>\n    <map-meta name="projection" content="OSMTILE"></map-meta>\n    <map-meta name="cs" content="gcrs"></map-meta>\n    <map-feature>\n      <map-featurecaption>Ottawa</map-featurecaption>\n      <map-geometry>\n        <map-point class="ottawa">\n          <map-coordinates>-75.697193 45.421530</map-coordinates>\n        </map-point>\n      </map-geometry>\n      <map-properties>\n        <table>\n          <thead>\n            <tr>\n              <th role="columnheader" scope="col">Property name</th>\n              <th role="columnheader" scope="col">Property value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope="row">Name</th>\n              <td itemprop="amenity">Ottawa</td>\n            </tr>\n            <tr>\n              <th scope="row">Type</th>\n              <td itemprop="name">Ville</td>\n            </tr>\n            <tr>\n              <th scope="row">Site Web</th>\n              <td itemprop="website"><a href="https://ottawa.ca/" target="_blank">Ottawa</a></td>\n            </tr>\n          </tbody>\n        </table>\n      </map-properties>\n    </map-feature>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"sp\xe9cifications",children:"Sp\xe9cifications"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Sp\xe9cification"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-properties-element-0",children:"\xc9l\xe9ment MapML \xab properties \xbb "})})})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/properties.md",children:["Modifier cette page sur ",(0,s.jsx)(t.strong,{children:"Github"})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Discutez avec nous sur ",(0,s.jsx)(t.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);