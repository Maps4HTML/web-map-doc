"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[2739],{8064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"layers/templated-features","title":"Templated Features Layer","description":"In this section, we will learn how to create a templated feature layer. A templated feature layer is a layer that fetches a single .mapml file on pans and zooms.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/layers/templated-features.md","sourceDirName":"layers","slug":"/layers/templated-features","permalink":"/web-map-doc/fr/docs/layers/templated-features","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"templated-features","title":"Templated Features Layer","slug":"/layers/templated-features"}}');var l=t(4848),a=t(8453);const s={id:"templated-features",title:"Templated Features Layer",slug:"/layers/templated-features"},r=void 0,o={},d=[{value:"Adding a templated feature layer",id:"adding-a-templated-feature-layer",level:2},{value:"Associated Elements",id:"associated-elements",level:2},{value:"<code>&lt;map-extent&gt;</code>",id:"map-extent",level:3},{value:"<code>&lt;map-input&gt;</code>",id:"map-input",level:3},{value:"<code>&lt;map-link&gt;</code>",id:"map-link",level:3},{value:"Additional Context",id:"additional-context",level:2},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",level:3},{value:"Full Examples",id:"full-examples",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"In this section, we will learn how to create a templated feature layer. A templated feature layer is a layer that fetches a single .mapml file on pans and zooms."}),"\n",(0,l.jsx)(n.h2,{id:"adding-a-templated-feature-layer",children:"Adding a templated feature layer"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<map-layer label="Alabama" checked>\n  <map-meta name="zoom" content="min=2,max=5"></map-meta>\n  <map-extent units="CBMTILE" checked hidden>\n    <map-input name="z" type="zoom" min="2" max="18" value="0"></map-input>\n    <map-input name="xmin" type="location" units="gcrs" axis="longitude" position="top-left" min="-76" max="-74"></map-input>\n    <map-input name="ymin" type="location" units="gcrs" axis="latitude" position="bottom-right" min="45" max="46"></map-input>\n    <map-input name="xmax" type="location" units="gcrs" axis="longitude" position="bottom-right" min="-76" max="-74"></map-input>\n    <map-input name="ymax" type="location" units="gcrs" axis="latitude" position="top-left" min="45" max="46"></map-input>\n    <map-link rel="features" tref="data/alabama_feature.mapml?{xmin}{ymin}{xmax}{ymax}{z}"></map-link>\n  </map-extent>\n</map-layer>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"associated-elements",children:"Associated Elements"}),"\n",(0,l.jsx)(n.h3,{id:"map-extent",children:(0,l.jsx)(n.code,{children:"<map-extent>"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"units"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["This allows you to define what the ",(0,l.jsx)(n.a,{href:"http://example.org",children:"projection"})," of the templated features."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"map-input",children:(0,l.jsx)(n.code,{children:"<map-input>"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"axis"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["This attribute is only useful on inputs of type ",(0,l.jsx)("strong",{children:"location"}),", it sets the axis the following input defines. This value also defines what the ",(0,l.jsx)("strong",{children:"min"})," and ",(0,l.jsx)("strong",{children:"max"})," value's units."]}),"\n",(0,l.jsx)(n.li,{children:"Options are, row | column | easting | northing | latitude | longitude"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"name"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["This allows you to name the input, this name is then used in the url template used in the ",(0,l.jsx)(n.code,{children:"<map-link>"})," href attribute."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"type"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Sets the ",(0,l.jsx)("strong",{children:"type"})," of the input."]}),"\n",(0,l.jsx)(n.li,{children:"Options are, zoom | location"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"max"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Sets the maximum of the bounds of the layer on the given ",(0,l.jsx)("strong",{children:"axis"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"min"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Sets the minimum of the bounds of the layer on the given ",(0,l.jsx)("strong",{children:"axis"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"position"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Sets the position of the input, this can either be top-left or bottom-right."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"value"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Sets the zoom level the inputs of type ",(0,l.jsx)("strong",{children:"location"}),"'s ",(0,l.jsx)("strong",{children:"min"})," and ",(0,l.jsx)("strong",{children:"max"})," are defined at."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"map-link",children:(0,l.jsx)(n.code,{children:"<map-link>"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"rel"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Set this to features in the case of a templated features layer."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"title"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Sets the title of the layer, this is the title shown in the layer controls."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"type"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Sets the type of the returned data."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"tref"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"additional-context",children:"Additional Context"}),"\n",(0,l.jsx)(n.p,{children:"You can also provide a set of elements to further define the templated feature layer. This is the list of available additions with examples."}),"\n",(0,l.jsx)(n.h3,{id:"map-meta-namezoom",children:(0,l.jsx)(n.code,{children:'<map-meta name="zoom">'})}),"\n",(0,l.jsx)(n.p,{children:"Sets the zoom range of the layer. The layer will make requests from zoom levels 1 to 5 in the example below."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<map-meta name="zoom" content="min=1,max=5"></map-meta>\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"full-examples",children:"Full Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<mapml-viewer projection="CBMTILE" zoom="3" lat="45.5052040" lon="-75.2202344" controls>\n  <map-layer label="Alabama" checked>\n    <map-meta name="zoom" content="min=2,max=5"></map-meta>\n    <map-extent units="CBMTILE" checked hidden>\n      <map-input name="z" type="zoom" min="2" max="18" value="0"></map-input>\n      <map-input name="xmin" type="location" units="gcrs" axis="longitude" position="top-left" min="-76" max="-74"></map-input>\n      <map-input name="ymin" type="location" units="gcrs" axis="latitude" position="bottom-right" min="45" max="46"></map-input>\n      <map-input name="xmax" type="location" units="gcrs" axis="longitude" position="bottom-right" min="-76" max="-74"></map-input>\n      <map-input name="ymax" type="location" units="gcrs" axis="latitude" position="top-left" min="45" max="46"></map-input>\n      <map-link rel="features" tref="data/alabama_feature.mapml?{xmin}{ymin}{xmax}{ymax}{z}"></map-link>\n    </map-extent>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,l.jsx)(n.p,{children:"[ADD MAP HERE]"})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const l={},a=i.createContext(l);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);