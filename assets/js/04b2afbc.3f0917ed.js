"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9760],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),o=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(a),c=i,h=u["".concat(r,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,m(m({ref:t},s),{},{components:a})):n.createElement(h,m({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,m=new Array(l);m[0]=c;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p[u]="string"==typeof e?e:i,m[1]=p;for(var o=2;o<l;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),i=(a(7294),a(3905));const l={id:"templated-images",title:"Templated Images Layer",slug:"/layers/templated-images"},m=void 0,p={unversionedId:"layers/templated-images",id:"layers/templated-images",title:"Templated Images Layer",description:"In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms.",source:"@site/docs/layers/templated-images.md",sourceDirName:"layers",slug:"/layers/templated-images",permalink:"/web-map-doc/docs/layers/templated-images",draft:!1,tags:[],version:"current",frontMatter:{id:"templated-images",title:"Templated Images Layer",slug:"/layers/templated-images"}},r={},o=[{value:"Adding a templated image layer",id:"adding-a-templated-image-layer",level:2},{value:"Associated Elements",id:"associated-elements",level:2},{value:"<code>&lt;map-extent&gt;</code>",id:"map-extent",level:3},{value:"<code>&lt;map-input&gt;</code>",id:"map-input",level:3},{value:"<code>&lt;map-link&gt;</code>",id:"map-link",level:3},{value:"Additional Context",id:"additional-context",level:2},{value:"<code>&lt;map-meta name=&quot;zoom&quot;&gt;</code>",id:"map-meta-namezoom",level:3},{value:"Full Examples",id:"full-examples",level:2}],s={toc:o},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we will learn how to create a templated image layer. A templated image layer is a layer that fetches a single image file on pans and zooms."),(0,i.kt)("h2",{id:"adding-a-templated-image-layer"},"Adding a templated image layer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Toporama" checked>\n  <map-meta name="zoom" content="min=4,max=5"></map-meta>\n  <map-extent units="CBMTILE">\n    <map-input name="z" type="zoom" value="19" min="4" max="4"></map-input>\n    <map-input name="w" type="width"></map-input>\n    <map-input name="h" type="height"></map-input>\n    <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743" max="3952277"></map-input>\n    <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085" max="3952277"></map-input>\n    <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743" max="3952277"></map-input>\n    <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085" max="3952277"></map-input>\n    <map-link rel="image" tref="http://my-wms.ca?FORMAT=image/jpeg&amp;WIDTH={w}&amp;HEIGHT={h}&amp;BBOX={xmin},{ymin},{xmax},{ymax}"></map-link>\n  </map-extent>\n</layer->\n')),(0,i.kt)("h2",{id:"associated-elements"},"Associated Elements"),(0,i.kt)("h3",{id:"map-extent"},(0,i.kt)("inlineCode",{parentName:"h3"},"<map-extent>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"units"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This allows you to define what the ",(0,i.kt)("a",{parentName:"li",href:"http://example.org/"},"projection")," of the templated tiles are.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"map-input"},(0,i.kt)("inlineCode",{parentName:"h3"},"<map-input>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"axis")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This attribute is only useful on inputs of type ",(0,i.kt)("strong",null,"location"),", it sets the axis the following input defines. This value also defines what the ",(0,i.kt)("strong",null,"min")," and ",(0,i.kt)("strong",null,"max")," value's units."),(0,i.kt)("li",{parentName:"ul"},"Options are, row | column | easting | northing | latitude | longitude"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This allows you to name the input, this name is then used in the url template used in the ",(0,i.kt)("inlineCode",{parentName:"li"},"<map-link>")," href attribute."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the ",(0,i.kt)("strong",null,"type")," of the input."),(0,i.kt)("li",{parentName:"ul"},"Options are, zoom | location | width | height"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the maximum of the bounds of the layer on the given ",(0,i.kt)("strong",null,"axis"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"min")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the minimum of the bounds of the layer on the given ",(0,i.kt)("strong",null,"axis"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"position")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the position of the input, this can either be top-left or bottom-right."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"value")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the zoom level the inputs of type ",(0,i.kt)("strong",null,"location"),"'s ",(0,i.kt)("strong",null,"min")," and ",(0,i.kt)("strong",null,"max")," are defined at.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"map-link"},(0,i.kt)("inlineCode",{parentName:"h3"},"<map-link>")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rel")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set this to image in the case of a templated image layer."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"title")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the title of the layer, this is the title shown in the layer controls."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the type of the returned data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tref")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile.")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"additional-context"},"Additional Context"),(0,i.kt)("p",null,"You can also provide a set of elements to further define the templated tile layer. This is the list of available additions with examples."),(0,i.kt)("h3",{id:"map-meta-namezoom"},(0,i.kt)("inlineCode",{parentName:"h3"},'<map-meta name="zoom">')),(0,i.kt)("p",null,"Sets the zoom range of the layer, in the following example the user can zoom from zoom level 1 to 5. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<map-meta name="zoom" content="min=1,max=5"></map-meta>\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"full-examples"},"Full Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="4" lat="53.331" lon="-91.667" controls>\n  <layer- label="Toporama" checked>\n    <map-meta name="zoom" content="min=4,max=5"></map-meta>\n    <map-extent units="CBMTILE">\n      <map-input name="z" type="zoom" value="19" min="4" max="4"></map-input>\n      <map-input name="w" type="width"></map-input>\n      <map-input name="h" type="height"></map-input>\n      <map-input name="xmin" type="location" units="pcrs" position="top-left" axis="easting" min="-6207743.103886206" max="3952277.216154434"></map-input>\n      <map-input name="ymin" type="location" units="pcrs" position="bottom-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434"></map-input>\n      <map-input name="xmax" type="location" units="pcrs" position="top-right" axis="easting" min="-6207743.103886206" max="3952277.216154434"></map-input>\n      <map-input name="ymax" type="location" units="pcrs" position="top-left" axis="northing" min="-3362085.3441706896" max="3952277.216154434"></map-input>\n      <map-link rel="image" tref="http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?SERVICE=WMS&amp;REQUEST=GetMap&amp;FORMAT=image/jpeg&amp;TRANSPARENT=FALSE&amp;STYLES=&amp;VERSION=1.3.0&amp;LAYERS=WMS-Toporama&amp;WIDTH={w}&amp;HEIGHT={h}&amp;CRS=EPSG:3978&amp;BBOX={xmin},{ymin},{xmax},{ymax}&amp;m4h=t"></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,i.kt)("p",null,"[ADD MAP HERE]"))}d.isMDXComponent=!0}}]);