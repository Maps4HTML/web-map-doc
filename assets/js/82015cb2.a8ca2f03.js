"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[6580],{5437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"layers/templated-tiles","title":"Templated Tiles Layer","description":"In this section, we will learn how to create a templated tile layer. A templated layer is a layer that makes HTTP requests for it\'s data. In this case requests are made to fill in the grid of tiles available on the map\'s viewport.","source":"@site/docs/layers/templated-tiles.md","sourceDirName":"layers","slug":"/layers/templated-tiles","permalink":"/web-map-doc/docs/layers/templated-tiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"templated-tiles","title":"Templated Tiles Layer","slug":"/layers/templated-tiles"}}');var i=t(4848),a=t(8453);const s={id:"templated-tiles",title:"Templated Tiles Layer",slug:"/layers/templated-tiles"},r=void 0,d={},o=[{value:"Adding a templated layer",id:"adding-a-templated-layer",level:2},{value:"Associated Elements",id:"associated-elements",level:2},{value:"<code>&lt;map-extent&gt;</code>",id:"map-extent",level:3},{value:"<code>&lt;map-input&gt;</code>",id:"map-input",level:3},{value:"<code>&lt;map-link&gt;</code>",id:"map-link",level:3},{value:"Additional Context",id:"additional-context",level:2},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",level:3},{value:"Full Examples",id:"full-examples",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this section, we will learn how to create a templated tile layer. A templated layer is a layer that makes HTTP requests for it's data. In this case requests are made to fill in the grid of tiles available on the map's viewport."}),"\n",(0,i.jsx)(n.h2,{id:"adding-a-templated-layer",children:"Adding a templated layer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<map-layer label="Templated Tile Layer" checked>\n  <map-extent units="my-projection" checked>\n    <map-input name="zoomLevel" type="zoom" min="1" max="1" value="0"></map-input>\n    <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2"></map-input>\n    <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2"></map-input>\n    <map-link rel="tile" type="text/mapml" title="Templated Tiles" tref="tiles/{zoomLevel}/r{row}_c{col}.mapml"></map-link>\n  </map-extent>\n</map-layer>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"associated-elements",children:"Associated Elements"}),"\n",(0,i.jsx)(n.h3,{id:"map-extent",children:(0,i.jsx)(n.code,{children:"<map-extent>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"units"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This allows you to define what the ",(0,i.jsx)(n.a,{href:"http://example.org/",children:"projection"})," of the templated tiles are."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"map-input",children:(0,i.jsx)(n.code,{children:"<map-input>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"axis"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This attribute is only useful on inputs of type ",(0,i.jsx)("strong",{children:"location"}),", it sets the axis the following input defines. This value also defines what the ",(0,i.jsx)("strong",{children:"min"})," and ",(0,i.jsx)("strong",{children:"max"})," value's units."]}),"\n",(0,i.jsx)(n.li,{children:"Options are, row | column | easting | northing | latitude | longitude"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This allows you to name the input, this name is then used in the url template used in the ",(0,i.jsx)(n.code,{children:"<map-link>"})," href attribute."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"type"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sets the ",(0,i.jsx)("strong",{children:"type"})," of the input."]}),"\n",(0,i.jsx)(n.li,{children:"Options are, zoom | location"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"max"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sets the maximum of the bounds of the layer on the given ",(0,i.jsx)("strong",{children:"axis"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"min"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sets the minimum of the bounds of the layer on the given ",(0,i.jsx)("strong",{children:"axis"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"value"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sets the zoom level the inputs of type ",(0,i.jsx)("strong",{children:"location"}),"'s ",(0,i.jsx)("strong",{children:"min"})," and ",(0,i.jsx)("strong",{children:"max"})," are defined at."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"map-link",children:(0,i.jsx)(n.code,{children:"<map-link>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"rel"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set this to tile in the case of a templated tile layer."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"title"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sets the title of the layer, this is the title shown in the layer controls."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"type"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sets the type of the returned data."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"tref"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"additional-context",children:"Additional Context"}),"\n",(0,i.jsx)(n.p,{children:"You can also provide a set of elements to further define the templated tile layer. This is the list of available additions with examples."}),"\n",(0,i.jsx)(n.h3,{id:"map-meta-namezoom",children:(0,i.jsx)(n.code,{children:'<map-meta name="zoom">'})}),"\n",(0,i.jsxs)(n.p,{children:["Sets the native minimum and maximum ",(0,i.jsx)(n.a,{href:"http://example.org/",children:"native zoom"}),". It also allows you to set a value, this is the default zoom of all features in the case the ",(0,i.jsx)(n.code,{children:"<map-feature>"})," is missing a zoom attribute."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"full-examples",children:"Full Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<mapml-viewer projection="WGS84" zoom="1" lat="59.87304909" lon="-53.22587225" width="900" height="400" controls>\n  <map-layer label="Inline Templated Tile" checked>\n    <map-meta name="zoom" content="min=1,max=2"></map-meta>\n    <map-extent units="WGS84" checked hidden>\n      <map-input name="zoomLevel" type="zoom" min="1" max="1" value="0"></map-input>\n      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2"></map-input>\n      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2"></map-input>\n      <map-link rel="tile" type="text/mapml" title="Templated Tile Layer" tref="data/wgs84/{zoomLevel}/r{row}_c{col}.mapml"></map-link>\n    </map-extent>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,i.jsx)(n.p,{children:"[ADD MAP HERE]"})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var l=t(6540);const i={},a=l.createContext(i);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);