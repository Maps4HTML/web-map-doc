"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9728],{8659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=n(4848),a=n(8453);const o={id:"span",title:"<map-span>",slug:"/elements/span/"},l=void 0,r={id:"elements/span",title:"<map-span>",description:"The ` element is useful when used together with html global attributes such as class. This element allows you to wrap the coordinate pairs in a ` element, allowing the wrapped coordinates to be targeted by CSS selectors, and thus independently styled.",source:"@site/docs/elements/span.md",sourceDirName:"elements",slug:"/elements/span/",permalink:"/web-map-doc/docs/elements/span/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"span",title:"<map-span>",slug:"/elements/span/"},sidebar:"sidebar",previous:{title:"<map-properties>",permalink:"/web-map-doc/docs/elements/properties/"},next:{title:"<map-a>",permalink:"/web-map-doc/docs/elements/map-a/"}},i={},p=[{value:"Examples",id:"examples",level:2},{value:"Styling Polygon Holes",id:"styling-polygon-holes",level:3},{value:"Specifications",id:"specifications",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"<map-span>"})," element is useful when used together with html global attributes such as ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class",children:"class"}),". This element allows you to wrap the coordinate pairs in a ",(0,s.jsx)(t.code,{children:"<map-coordinates>"})," element, allowing the wrapped coordinates to be targeted by CSS selectors, and thus independently styled."]}),"\n",(0,s.jsx)("iframe",{src:"../../../demo/map-span-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"styling-polygon-holes",children:"Styling Polygon Holes"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>\n  <map-layer label="OpenStreetMap" src="../data/osm.mapml" checked></map-layer>\n  <map-layer label="Polygon" checked>\n    <map-meta name="projection" content="OSMTILE"></map-meta>\n    <map-feature>\n      <map-featurecaption>Polygon</map-featurecaption>\n      \x3c!-- Setting the geometry coordinates to gcrs, as the default is pcrs --\x3e\n      <map-geometry cs="gcrs">\n        <map-polygon>\n          <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>\n          <map-coordinates><map-span class="hole">-75.6467062 45.4215881 -75.6889363 45.4049585 -75.6693647 45.3767494 -75.6270640 45.3924229 -75.6467062 45.4215881</map-span></map-coordinates>\n        </map-polygon>\n      </map-geometry>\n      <map-properties><h2>This is a Polygon</h2></map-properties>\n    </map-feature>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"specifications",children:"Specifications"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Specification"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element",children:"HTML span element"})})})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/span.md",children:["Edit this page on ",(0,s.jsx)(t.strong,{children:"Github"})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"https://gitter.im/Maps4HTML/chat",children:["Chat with us on ",(0,s.jsx)(t.strong,{children:"Gitter"})]})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);