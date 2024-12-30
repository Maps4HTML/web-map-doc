"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[829],{6824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"elements/mapml","title":"<mapml->","description":"The ` element is the root of a MapML document (with a .mapml file extension) representing a layer. A MapML document allows itself to be fetched as a remote resource from the ` source attribute URL:","source":"@site/docs/elements/mapml.md","sourceDirName":"elements","slug":"/elements/mapml/","permalink":"/web-map-doc/docs/elements/mapml/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"mapml","title":"<mapml->","slug":"/elements/mapml/"},"sidebar":"sidebar","previous":{"title":"<map-layer>","permalink":"/web-map-doc/docs/elements/layer/"},"next":{"title":"<map-extent>","permalink":"/web-map-doc/docs/elements/extent/"}}');var a=n(4848),i=n(8453);const s={id:"mapml",title:"<mapml->",slug:"/elements/mapml/"},d=void 0,r={},c=[{value:"Attributes",id:"attributes",level:2},{value:"<code>lang</code>",id:"lang",level:3},{value:"<code>xmlns</code>",id:"xmlns",level:3},{value:"Child Elements",id:"child-elements",level:2},{value:"<code>&lt;map-head&gt;</code>",id:"map-head",level:3},{value:"Child Elements",id:"child-elements-1",level:4},{value:"<code>&lt;map-body&gt;</code>",id:"map-body",level:3},{value:"Specifications",id:"specifications",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"<mapml->"})," element is the root of a MapML document (with a .mapml file extension) representing a layer. A MapML document allows itself to be fetched as a remote resource from the ",(0,a.jsx)(t.code,{children:'<map-layer src="..."></map-layer>'})," source attribute URL:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<map-layer label="My Layer" src="https://example.org/mapml/mylayer" checked></map-layer>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.code,{children:"<mapml->"})," element declare the document to be in the xhtml namespace, and\nmust contain one ",(0,a.jsx)(t.code,{children:"<map-head>"})," element, followed by one ",(0,a.jsx)(t.code,{children:"<map-body>"})," element."]}),"\n",(0,a.jsx)("iframe",{src:"../../../demo/mapml-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:'Click to view the contents of "../data/osm.mapml" from the demo above'}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<mapml- xmlns="http://www.w3.org/1999/xhtml">\n  <map-head>\n    <map-title>OpenStreetMap</map-title>\n    <meta http-equiv="Content-Type" content="text/mapml;projection=OSMTILE"/>\n    <meta charset="utf-8"/>\n    <map-link rel="license" href="https://www.openstreetmap.org/copyright" title="\xa9 OpenStreetMap contributors CC BY-SA"></map-link>\n  </map-head>\n  <map-body>\n    \x3c!-- When \'boolean\' attributes such as \'checked\' or \'hidden\' are used in a mapml file, they must have a string value. i.e \'checked="checked"\' --\x3e\n    <map-extent units="OSMTILE" checked="checked" hidden="hidden">\n      <map-input name="z" type="zoom"  value="18" min="0" max="18"></map-input>\n      <map-input name="x" type="location" units="tilematrix" axis="column" min="0"  max="262144" ></map-input>\n      <map-input name="y" type="location" units="tilematrix" axis="row" min="0"  max="262144" ></map-input>\n      <map-link rel="tile" tref="https://tile.openstreetmap.org/{z}/{x}/{y}.png" ></map-link>\n    </map-extent>\n  </map-body>\n</mapml->\n'})})]}),"\n",(0,a.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,a.jsx)(t.h3,{id:"lang",children:(0,a.jsx)(t.code,{children:"lang"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"lang"})," attribute defines the primary language of the MapML document. as defined by HTML ",(0,a.jsx)(t.a,{href:"https://html.spec.whatwg.org/multipage/dom.html#attr-lang",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"xmlns",children:(0,a.jsx)(t.code,{children:"xmlns"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"xmlns"})," attribute is ",(0,a.jsx)(t.strong,{children:"required"}),", and must have the value ",(0,a.jsx)(t.code,{children:'"http://www.w3.org/1999/xhtml"'}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"child-elements",children:"Child Elements"}),"\n",(0,a.jsx)(t.h3,{id:"map-head",children:(0,a.jsx)(t.code,{children:"<map-head>"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"<map-head>"})," element is the first child of the ",(0,a.jsx)(t.code,{children:"<mapml->"})," element. It contains metadata for the MapML document."]}),"\n",(0,a.jsx)(t.h4,{id:"child-elements-1",children:"Child Elements"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<map-title>"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The title element should exist as the one and only title element in the head element. Its content should be a text string describing the document. It is conceivably used as a bookmark title."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<map-base>"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The base element is used to identify a URL to be used to act as a base URL in order to resolve relative URLs later in the document."}),"\n",(0,a.jsxs)(t.li,{children:["There must be only one ",(0,a.jsx)(t.code,{children:"<map-base>"})," element in a MapML document, and it must be in the content of the ",(0,a.jsx)(t.code,{children:"<map-head>"})," element, before any MapML elements which potentially carry a URL for resolution, notably the ",(0,a.jsx)(t.code,{children:"<map-link>"})," element."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<map-meta>"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The meta element describes the metadata in a MapML document. Details on the meta element and it's syntax can be found ",(0,a.jsx)(t.a,{href:"../meta/",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"<map-link>"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The link element describes the metadata links in a MapML document. Details on the link element and it's syntax can be found ",(0,a.jsx)(t.a,{href:"../link/",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"map-body",children:(0,a.jsx)(t.code,{children:"<map-body>"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"<map-body>"})," element is the second child of the ",(0,a.jsx)(t.code,{children:"<mapml->"})," element. It represents the content of the MapML document. This element contains the ",(0,a.jsx)(t.a,{href:"../feature/",children:"features"})," and metadata of the MapML document."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"specifications",children:"Specifications"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"Specification"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://maps4html.org/MapML-Specification/spec/#the-mapml-element-0",children:"MapML mapml element"})})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsxs)(t.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/mapml.md",children:["Edit this page on ",(0,a.jsx)(t.strong,{children:"Github"})]})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsxs)(t.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Chat with us on ",(0,a.jsx)(t.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var l=n(6540);const a={},i=l.createContext(a);function s(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);