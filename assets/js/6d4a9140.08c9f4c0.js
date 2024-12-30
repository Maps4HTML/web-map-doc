"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[1702],{2921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"elements/select","title":"<map-select>","description":"The ` element is an extension of HTML  and is used as a child of the  element. The  element declares a variable with predefined \'s` which are selected through the layer control and used by the polyfill.","source":"@site/docs/elements/select.md","sourceDirName":"elements","slug":"/elements/select/","permalink":"/web-map-doc/docs/elements/select/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"select","title":"<map-select>","slug":"/elements/select/"},"sidebar":"sidebar","previous":{"title":"<map-input>","permalink":"/web-map-doc/docs/elements/input/"},"next":{"title":"<map-link>","permalink":"/web-map-doc/docs/elements/link/"}}');var l=n(4848),i=n(8453);const r={id:"select",title:"<map-select>",slug:"/elements/select/"},c=void 0,a={},d=[{value:"Attributes",id:"attributes",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"Child Elements",id:"child-elements",level:2},{value:"<code>&lt;map-option&gt;</code>",id:"map-option",level:3},{value:"Examples",id:"examples",level:2},{value:"Change map source",id:"change-map-source",level:3},{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:2}];function o(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"<map-select>"})," element is an extension of HTML ",(0,l.jsx)(t.code,{children:"<select>"})," and is used as a child of the ",(0,l.jsx)(t.code,{children:"<map-extent>"})," element. The ",(0,l.jsx)(t.code,{children:"<map-select>"})," element declares a variable with predefined ",(0,l.jsx)(t.code,{children:"<map-option>'s"})," which are selected through the layer control and used by the polyfill."]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"<map-select>"})," element contains one or more ",(0,l.jsx)(t.code,{children:"<map-option>"})," elements."]}),"\n",(0,l.jsx)("iframe",{src:"../../../demo/map-select-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:["Change the ",(0,l.jsx)(t.code,{children:"<map-select>"})," option through the layer control (top-right of the map) to view data for different timestamps."]})}),"\n",(0,l.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,l.jsx)(t.h3,{id:"name",children:(0,l.jsx)(t.code,{children:"name"})}),"\n",(0,l.jsxs)(t.p,{children:["Sets the name of the variable created by the input. The variable can then be\nreferenced by the URL template ",(0,l.jsx)(t.code,{children:"<map-link>"})," ",(0,l.jsx)(t.a,{href:"../link#tref",children:"tref attribute"}),",\nusing the ",(0,l.jsx)(t.code,{children:"{name}"})," variable reference notation."]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"id",children:(0,l.jsx)(t.code,{children:"id"})}),"\n",(0,l.jsxs)(t.p,{children:["Sets the id of the ",(0,l.jsx)(t.code,{children:"<map-select>"})," element, identifies the select within the current document."]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h2,{id:"child-elements",children:"Child Elements"}),"\n",(0,l.jsx)(t.h3,{id:"map-option",children:(0,l.jsx)(t.code,{children:"<map-option>"})}),"\n",(0,l.jsxs)(t.p,{children:["This element contains the options for the ",(0,l.jsx)(t.code,{children:"<map-select>"})," element. A ",(0,l.jsx)(t.code,{children:"<map-select>"})," element can contain one or more ",(0,l.jsx)(t.code,{children:"<map-option>"})," elements."]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.h3,{id:"change-map-source",children:"Change map source"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" zoom="2" lat="65" lon="-90" controls="">\n  <map-layer label="Basemap" checked>\n    <map-extent units="OSMTILE" checked>\n      <map-input name="z" type="zoom"  value="18" min="0" max="18"></map-input>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>\n      <map-link rel="license" href="https://www.openstreetmap.org/copyright" title="OpenStreetMap"></map-link>\n      <map-link rel="license" href="https://www.openstreetmap.bzh/" title="Breton OpenStreetMap Team"></map-link>\n      \n      <map-select id="urlOptions" name="source">\n        <map-option value="tile.openstreetmap.bzh/br">OpenStreetMap_BZH</map-option>\n        <map-option value="tile.openstreetmap.org">OpenStreetMap_Mapnik</map-option>    \n      </map-select>\n      \n      <map-link rel="tile" tref="https://{source}/{z}/{x}/{y}.png" ></map-link>\n    </map-extent>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h2,{id:"specifications",children:"Specifications"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsx)(t.tr,{children:(0,l.jsx)(t.th,{children:"Specification"})})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsx)(t.tr,{children:(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-select-element-0",children:"MapML style element"})})}),(0,l.jsx)(t.tr,{children:(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element",children:"HTML style element"})})})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-",children:"Report problems with these requirements on GitHub"})}),"\n",(0,l.jsx)("p",{children:(0,l.jsxs)("b",{children:[(0,l.jsx)("span",{class:"requirement",children:"requirement"}),"\n",(0,l.jsx)("span",{class:"enhancement",children:"enhancement"}),"\n",(0,l.jsx)("span",{class:"impractical",children:"impractical"}),"\n",(0,l.jsx)("span",{class:"undecided",children:"undecided"}),"\n",(0,l.jsx)("span",{class:"discussion",children:"under discussion"})]})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"}}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Spec"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Viewer"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"API"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#content-author-use-cases",children:(0,l.jsx)(t.strong,{children:"Content author use cases (3.1)"})})}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)("div",{class:"undecided",children:" Provide alternative map layers which the user can select (3.1.9)"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"full"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsxs)(t.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/select.md",children:["Edit this page on ",(0,l.jsx)(t.strong,{children:"Github"})]})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsxs)(t.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Chat with us on ",(0,l.jsx)(t.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);