"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9678],{4827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"layers/static-features","title":"Static Features Layer","description":"In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale","source":"@site/docs/layers/static-features.md","sourceDirName":"layers","slug":"/layers/static-features","permalink":"/web-map-doc/docs/layers/static-features","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"static-features","title":"Static Features Layer","slug":"/layers/static-features"}}');var s=a(4848),r=a(8453);const o={id:"static-features",title:"Static Features Layer",slug:"/layers/static-features"},l=void 0,i={},m=[{value:"Adding a single feature",id:"adding-a-single-feature",level:2},{value:"Associated Elements",id:"associated-elements",level:2},{value:"<code>&lt;map-feature&gt;</code>",id:"map-feature",level:3},{value:"Attributes",id:"attributes",level:4},{value:"<code>&lt;map-properties&gt;</code>",id:"map-properties",level:3},{value:"<code>&lt;map-geometry&gt;</code>",id:"map-geometry",level:3},{value:"Attributes",id:"attributes-1",level:4},{value:"Additional Context",id:"additional-context",level:2},{value:"<code>&lt;map-link rel=&quot;license&quot;&gt;</code>",id:"map-link-rellicense",level:3},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",level:3},{value:"<code>&lt;map-meta name=&quot;projection&quot;&gt;</code>",id:"map-meta-nameprojection",level:3},{value:"<code>&lt;map-meta name=&quot;cs&quot;&gt;</code>",id:"map-meta-namecs",level:3},{value:"<code>&lt;map-meta name=&quot;extent&quot;&gt;</code>",id:"map-meta-nameextent",level:3},{value:"Full Examples",id:"full-examples",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale\nas you zoom in and out without distortion."}),"\n",(0,s.jsx)(t.h2,{id:"adding-a-single-feature",children:"Adding a single feature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<map-layer label="My Feature Layer" checked>\n  <map-feature zoom="2">\n    <map-properties>\n      <h1>Feature Popup Text</h1>\n      <a href="http://example.org/">Feature Popup Link</a>\n    </map-properties>\n    <map-geometry cs="tilematrix">\n      <map-polygon>\n        <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>\n      </map-polygon>\n    </map-geometry>\n  </map-feature>\n</map-layer>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"associated-elements",children:"Associated Elements"}),"\n",(0,s.jsx)(t.h3,{id:"map-feature",children:(0,s.jsx)(t.code,{children:"<map-feature>"})}),"\n",(0,s.jsxs)(t.p,{children:["Parent element that contains the ",(0,s.jsx)(t.code,{children:"<map-properties>"})," and ",(0,s.jsx)(t.code,{children:"<map-geometry>"})," elements"]}),"\n",(0,s.jsx)(t.h4,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"zoom"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["This allows you to set the zoom level the feature is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of the map's ",(0,s.jsx)(t.a,{href:"http://example.org/",children:"projection"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"map-properties",children:(0,s.jsx)(t.code,{children:"<map-properties>"})}),"\n",(0,s.jsx)(t.p,{children:"This element contains the contents of the popup associated to a given feature."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"map-geometry",children:(0,s.jsx)(t.code,{children:"<map-geometry>"})}),"\n",(0,s.jsxs)(t.p,{children:["This element contains the different points, lines and polygons that will be drawn. Details on the geometry elements and it's syntax can be found ",(0,s.jsx)(t.a,{href:"http://example.org/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["This allows you to set the ",(0,s.jsx)(t.a,{href:"http://example.org/",children:"coordinate system"})," of the points, lines and polygons."]}),"\n",(0,s.jsx)(t.li,{children:"Defaults to gcrs, but can be set to tilematrix | pcrs | gcrs explicitly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"additional-context",children:"Additional Context"}),"\n",(0,s.jsx)(t.p,{children:"You can also provide a set of elements to further define the static feature layer. This is the list of available additions with examples."}),"\n",(0,s.jsx)(t.h3,{id:"map-link-rellicense",children:(0,s.jsx)(t.code,{children:'<map-link rel="license">'})}),"\n",(0,s.jsx)(t.p,{children:"Sets the attribution link of the layer. Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<map-link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map \xa9 Natural Resources Canada"></map-link>\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"map-meta-namezoom",children:(0,s.jsx)(t.code,{children:'<map-meta name="zoom">'})}),"\n",(0,s.jsxs)(t.p,{children:["Sets the native minimum and maximum ",(0,s.jsx)(t.a,{href:"http://example.org/",children:"native zoom"}),". It also allows you to set a value, this is the default zoom of all features in the case the ",(0,s.jsx)(t.code,{children:"<map-feature>"})," is missing a zoom attribute."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"map-meta-nameprojection",children:(0,s.jsx)(t.code,{children:'<map-meta name="projection">'})}),"\n",(0,s.jsxs)(t.p,{children:["Sets the ",(0,s.jsx)(t.a,{href:"http://example.org/",children:"projection"})," of the layer."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<map-meta name="projection" content="CBMTILE"></map-meta>\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"map-meta-namecs",children:(0,s.jsx)(t.code,{children:'<map-meta name="cs">'})}),"\n",(0,s.jsxs)(t.p,{children:["Sets the default ",(0,s.jsx)(t.a,{href:"http://example.org/",children:"coordinate system"})," of the layer. If a feature is missing the cs attribute, it will default to this, and if this is missing it will default to gcrs."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<map-meta name="cs" content="gcrs"></map-meta>\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"map-meta-nameextent",children:(0,s.jsx)(t.code,{children:'<map-meta name="extent">'})}),"\n",(0,s.jsxs)(t.p,{children:["Sets the ",(0,s.jsx)(t.a,{href:"http://example.org/",children:"extent"})," of the layer."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"full-examples",children:"Full Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'  <mapml-viewer style="height: 500px;width:500px;" projection="CBMTILE" zoom="2" lat="45.5052040" lon="-75.2202344"\n    controls>\n\n    <map-layer label="Arizona" checked>\n      <map-meta name="projection" content="CBMTILE"></map-meta>\n      <map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>\n      <map-meta name="cs" content="gcrs"></map-meta>\n      <map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>\n      <map-link id="first" rel="stylesheet" type="text/css" href="first.css"></map-link>\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n          <a href="http://example.org/">test</a>\n        </map-properties>\n        <map-geometry cs="tilematrix">\n          <map-polygon>\n            <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n        </map-properties>\n        <map-geometry cs="pcrs">\n          <map-polygon>\n            <map-coordinates>257421 -3567196 -271745 1221771 -3896544 242811 -3183549 -2613313</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Test</h1>\n        </map-properties>\n        <map-geometry cs="tcrs">\n          <map-polygon>\n            <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n\n      <map-feature zoom="2" class="refDiff">\n        <map-properties>\n          <h1>Arizona</h1>\n        </map-properties>\n        <map-geometry>\n          <map-polygon>\n            <map-coordinates>-109.042503 37.000263 -109.04798 31.331629 -111.074448 31.331629 -112.246513 31.704061\n              -114.815198 32.492741 -114.72209 32.717295 -114.524921 32.755634 -114.470151 32.843265 -114.524921\n              33.029481 -114.661844 33.034958 -114.727567 33.40739 -114.524921 33.54979 -114.497536 33.697668\n              -114.535874 33.933176 -114.415382 34.108438 -114.256551 34.174162 -114.136058 34.305608 -114.333228\n              34.448009 -114.470151 34.710902 -114.634459 34.87521 -114.634459 35.00118 -114.574213 35.138103\n              -114.596121 35.324319 -114.678275 35.516012 -114.738521 36.102045 -114.371566 36.140383 -114.251074\n              36.01989 -114.152489 36.025367 -114.048427 36.195153 -114.048427 37.000263 -110.499369 37.00574\n              -109.042503 37.000263</map-coordinates>\n          </map-polygon>\n        </map-geometry>\n      </map-feature>\n    </map-layer>\n  </mapml-viewer>\n'})}),"\n",(0,s.jsx)(t.p,{children:"[ADD MAP HERE]"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var n=a(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);