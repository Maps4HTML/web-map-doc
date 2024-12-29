"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[2139],{4512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"layers/templated-images","title":"Templated Images Layer","description":"In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms.","source":"@site/docs/layers/templated-images.md","sourceDirName":"layers","slug":"/layers/templated-images","permalink":"/web-map-doc/docs/layers/templated-images","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"templated-images","title":"Templated Images Layer","slug":"/layers/templated-images"}}');var a=t(4848),l=t(8453);const s={id:"templated-images",title:"Templated Images Layer",slug:"/layers/templated-images"},m=void 0,o={},p=[{value:"Adding a templated image layer",id:"adding-a-templated-image-layer",level:2},{value:"Associated Elements",id:"associated-elements",level:2},{value:"<code>&lt;map-extent&gt;</code>",id:"map-extent",level:3},{value:"<code>&lt;map-input&gt;</code>",id:"map-input",level:3},{value:"<code>&lt;map-link&gt;</code>",id:"map-link",level:3},{value:"Additional Context",id:"additional-context",level:2},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",level:3},{value:"Full Examples",id:"full-examples",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms."}),"\n",(0,a.jsx)(n.h2,{id:"adding-a-templated-image-layer",children:"Adding a templated image layer"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<map-layer label="Toporama" checked>\n  <map-meta name="zoom" content="min=4,max=5"></map-meta>\n  <map-extent units="CBMTILE" checked hidden>\n    <map-input name="z" type="zoom" value="19" min="4" max="4"></map-input>\n    <map-input name="w" type="width"></map-input>\n    <map-input name="h" type="height"></map-input>\n    <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743" max="3952277"></map-input>\n    <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085" max="3952277"></map-input>\n    <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743" max="3952277"></map-input>\n    <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085" max="3952277"></map-input>\n    <map-link rel="image" tref="http://my-wms.ca?FORMAT=image/jpeg&amp;WIDTH={w}&amp;HEIGHT={h}&amp;BBOX={xmin},{ymin},{xmax},{ymax}"></map-link>\n  </map-extent>\n</map-layer>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"associated-elements",children:"Associated Elements"}),"\n",(0,a.jsx)(n.h3,{id:"map-extent",children:(0,a.jsx)(n.code,{children:"<map-extent>"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"units"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This allows you to define what the ",(0,a.jsx)(n.a,{href:"http://example.org/",children:"projection"})," of the templated tiles are."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"map-input",children:(0,a.jsx)(n.code,{children:"<map-input>"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"axis"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This attribute is only useful on inputs of type ",(0,a.jsx)("strong",{children:"location"}),", it sets the axis the following input defines. This value also defines what the ",(0,a.jsx)("strong",{children:"min"})," and ",(0,a.jsx)("strong",{children:"max"})," value's units."]}),"\n",(0,a.jsx)(n.li,{children:"Options are, row | column | easting | northing | latitude | longitude"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"name"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This allows you to name the input, this name is then used in the url template used in the ",(0,a.jsx)(n.code,{children:"<map-link>"})," href attribute."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"type"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Sets the ",(0,a.jsx)("strong",{children:"type"})," of the input."]}),"\n",(0,a.jsx)(n.li,{children:"Options are, zoom | location | width | height"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"max"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Sets the maximum of the bounds of the layer on the given ",(0,a.jsx)("strong",{children:"axis"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"min"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Sets the minimum of the bounds of the layer on the given ",(0,a.jsx)("strong",{children:"axis"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"position"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Sets the position of the input, this can either be top-left or bottom-right."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"value"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Sets the zoom level the inputs of type ",(0,a.jsx)("strong",{children:"location"}),"'s ",(0,a.jsx)("strong",{children:"min"})," and ",(0,a.jsx)("strong",{children:"max"})," are defined at."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"map-link",children:(0,a.jsx)(n.code,{children:"<map-link>"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"rel"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Set this to image in the case of a templated image layer."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"title"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Sets the title of the layer, this is the title shown in the layer controls."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"type"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Sets the type of the returned data."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"tref"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"additional-context",children:"Additional Context"}),"\n",(0,a.jsx)(n.p,{children:"You can also provide a set of elements to further define the templated tile layer. This is the list of available additions with examples."}),"\n",(0,a.jsx)(n.h3,{id:"map-meta-namezoom",children:(0,a.jsx)(n.code,{children:'<map-meta name="zoom">'})}),"\n",(0,a.jsx)(n.p,{children:"Sets the zoom range of the layer, in the following example the user can zoom from zoom level 1 to 5."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<map-meta name="zoom" content="min=1,max=5"></map-meta>\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"full-examples",children:"Full Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<mapml-viewer projection="CBMTILE" zoom="4" lat="53.331" lon="-91.667" controls>\n  <map-layer label="Toporama" checked>\n    <map-meta name="zoom" content="min=4,max=5"></map-meta>\n    <map-extent units="CBMTILE" checked hidden>\n      <map-input name="z" type="zoom" value="19" min="4" max="4"></map-input>\n      <map-input name="w" type="width"></map-input>\n      <map-input name="h" type="height"></map-input>\n      <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743.103886206" max="3952277.216154434"></map-input>\n      <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434"></map-input>\n      <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743.103886206" max="3952277.216154434"></map-input>\n      <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434"></map-input>\n      <map-link rel="image" tref="http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3978&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t"></map-link>\n    </map-extent>\n  </map-layer>\n</mapml-viewer>\n'})}),"\n",(0,a.jsx)(n.p,{children:"[ADD MAP HERE]"})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>m});var i=t(6540);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);