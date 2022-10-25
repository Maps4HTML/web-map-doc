"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[2730],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=o,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5561:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return N},default:function(){return j},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var a=n(7462),o=n(3366),r=n(7294),l=n(3905),i=n(2389),p=n(9443);var m=function(){var e=(0,r.useContext)(p.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),d="tabItem_vU9c";function c(e){var t,n,o,l=e.lazy,i=e.block,p=e.defaultValue,c=e.values,h=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=m(),v=y.tabGroupChoices,j=y.setTabGroupChoices,w=(0,r.useState)(b),O=w[0],T=w[1],C=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=v[h];null!=x&&x!==O&&f.some((function(e){return e.value===x}))&&T(x)}var P=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==O&&(S(t),T(a),null!=h&&j(h,a))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return C.push(e)},onKeyDown:M,onFocus:P,onClick:P},o,{className:(0,u.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function h(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}var g=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},k=["components"],f={id:"geojson-api",title:"GeoJSON API",slug:"/api/geojson-api",toc_max_heading_level:4},N=void 0,b={unversionedId:"api/geojson-api",id:"api/geojson-api",title:"GeoJSON API",description:"Introduction",source:"@site/docs/api/geojson-api.mdx",sourceDirName:"api",slug:"/api/geojson-api",permalink:"/web-map-doc/docs/api/geojson-api",tags:[],version:"current",frontMatter:{id:"geojson-api",title:"GeoJSON API",slug:"/api/geojson-api",toc_max_heading_level:4},sidebar:"sidebar",previous:{title:"Custom Rendering API",permalink:"/web-map-doc/docs/api/custom-rendering"},next:{title:"About Extension",permalink:"/web-map-doc/docs/extension/about"}},y=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"GeoJSON To MapML",id:"geojson-to-mapml",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Examples",id:"examples",children:[{value:"Basic options usage",id:"basic-options-usage",children:[],level:4},{value:"Options string",id:"options-string",children:[],level:4},{value:"Options function",id:"options-function",children:[],level:4},{value:"Default options",id:"default-options",children:[],level:4}],level:3}],level:2},{value:"MapML To GeoJSON",id:"mapml-to-geojson",children:[{value:"Parameters",id:"parameters-1",children:[],level:3},{value:"Options",id:"options-1",children:[{value:"Notes",id:"notes",children:[],level:6}],level:3},{value:"Examples",id:"examples-1",children:[{value:"Default options",id:"default-options-1",children:[],level:4}],level:3}],level:2}],v={toc:y};function j(e){var t=e.components,n=(0,o.Z)(e,k);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"GeoJSON API")," is provided as a library to convert GeoJSON to and from MapML. The GeoJSON API can be added to any document as long as it is preceded by the mampl-viewer module, i.e."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n    <head>\n        <script type="module" src="mapml-viewer.js"><\/script>\n        <script src="lib/geojson.js"><\/script>\n    </head>\n    <body>\n        ...\n    </body>\n</html>    \n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"geojson-to-mapml"},"GeoJSON To MapML"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"geojson2mapml(<Object","\xa0","|","\xa0","String",">","\xa0","json,","\xa0","<Object",">","\xa0","options)")),(0,l.kt)("td",{parentName:"tr",align:null},"A MapML ",(0,l.kt)("inlineCode",{parentName:"td"},"<layer->")," element."),(0,l.kt)("td",{parentName:"tr",align:null},"Convert a GeoJSON feature or feature collection string or object to MapML ",(0,l.kt)("inlineCode",{parentName:"td"},"<layer->")," containing one or more ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-feature>")," elements.")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Check out ",(0,l.kt)("a",{parentName:"p",href:"https://maps4html.org/experiments/api/custom-map-ui/geoname-search-ui.html"},"this application")," using the geojson2mapml API!"))),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<String","\xa0","|","\xa0","Object>","\xa0","json"),(0,l.kt)("td",{parentName:"tr",align:null},"A GeoJSON string or object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<","Object",">"," options"),(0,l.kt)("td",{parentName:"tr",align:null},"A set of key/value pairs that customize the output MapML layer. All options are optional and described below.")))),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("p",null,"<","Object",">"," A set of key/value pairs that customize the output MapML layer. All options are optional and detailed below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"<String",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"json.name"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"json.title"),' or "Layer"'),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the output layer's ",(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/layers/layer/#label"},"label"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projection")),(0,l.kt)("td",{parentName:"tr",align:null},"<String",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OSMTILE")),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the output layer's ",(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/mapml-viewer/#projection"},"projection"),". Defined values include: ",(0,l.kt)("inlineCode",{parentName:"td"},"OSMTILE"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"CBMTILE"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"WGS84"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"APSTILE"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"caption")),(0,l.kt)("td",{parentName:"tr",align:null},"<String","\xa0","|","\xa0","Function",">"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the ",(0,l.kt)("inlineCode",{parentName:"td"},"label")," value"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that accepts the feature JSON and returns a string, OR a string that is the name of a property to be mapped to the ",(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/feature/#map-featurecaption"},"featurecaption"),". If a matching property is not found, the string provided will be used as the feature caption value. See ",(0,l.kt)("a",{parentName:"td",href:"#basic-options-usage"},"basic options usage")," for an example.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{id:"option-properties"},(0,l.kt)("inlineCode",{parentName:"td"},"properties"))),(0,l.kt)("td",{parentName:"tr",align:null},"<Function","\xa0","|","\xa0","String","\xa0","|","\xa0","HTMLElement",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Properties will be mapped to an HTML ",(0,l.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"},"table"),".")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies how the properties are mapped. <Function",">"," - A function that accepts one argument - the GeoJSON feature object - and which must return an HTMLElement that becomes the single child element of the <properties",">"," element. <String",">"," - A string that will be parsed and used as the single child element of the ",(0,l.kt)("inlineCode",{parentName:"td"},"<properties>")," element for all features. <HTMLElement",">"," - an element that will be used as the single child element of ",(0,l.kt)("inlineCode",{parentName:"td"},"<properties>")," element for all features. See ",(0,l.kt)("a",{parentName:"td",href:"#basic-options-usage"},"basic options usage")," for an example.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"geometryFunction")),(0,l.kt)("td",{parentName:"tr",align:null},"<Function",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"MapML geometry will mirror the GeoJSON geometry value")),(0,l.kt)("td",{parentName:"tr",align:null},"<Function",">"," A function to modify the generated ",(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"},"descendants")," of ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," which can add classes, ",(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/other-elements/map-a/"},"hyperlinks")," and ",(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/other-elements/span/"},"span's")," to the instance. Plain ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," element will be created by default. The function accepts two arguments: The generated ",(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/elements/geometry/#child-elements"},"child element")," of ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," and the ",(0,l.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc7946#section-3.2"},"feature json object")," to return a modified child element of the ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-geometry>")," element. See ",(0,l.kt)("a",{parentName:"td",href:"#basic-options-usage"},"basic options usage")," for an example.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"basic-options-usage"},"Basic options usage"),(0,l.kt)("p",null,"Showcasing how use each option."),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(g,{value:"label",label:"label",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml label option"',title:'"geojson2mapml',label:!0,'option"':!0},'geojson2mapml(json, {label: "Downtown Ottawa"});\n'))),(0,l.kt)(g,{value:"projection",label:"projection",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml projection option"',title:'"geojson2mapml',projection:!0,'option"':!0},'geojson2mapml(json, {projection: "CBMTILE"});\n'))),(0,l.kt)(g,{value:"caption",label:"caption",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml caption option - function-valued"',title:'"geojson2mapml',caption:!0,option:!0,"-":!0,'function-valued"':!0},'// caption function\ngeojson2mapml(json, {caption: function(feature) {\n    return feature.properties.desc + ", not a Polygon";\n    }\n});\n// caption option string value referencing a property name\ngeojson2mapml(json, {caption: "desc"});\n'))),(0,l.kt)(g,{value:"properties",label:"properties",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml properties option - function-valued"',title:'"geojson2mapml',properties:!0,option:!0,"-":!0,'function-valued"':!0},'// properties function\ngeojson2mapml(json, {properties: function(feature) {\n    let parser = new DOMParser();\n    return parser.parseFromString("<h1>" + feature.properties.desc + "\'s property</h1>", "text/html").body.firstChild;\n    }\n});\n// properties option - string valued - make sure you sanitize user-supplied strings\ngeojson2mapml(json, {properties: "<p>This property was inserted using a properties string</p>"});\n'))),(0,l.kt)(g,{value:"geometryFunction",label:"geometryFunction",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="geojson2mapml geometryFunction option"',title:'"geojson2mapml',geometryFunction:!0,'option"':!0},'let options = {\n                geometryFunction: function (g, f) {\n                  g.setAttribute("class", f.properties.class);\n                  return g;}\n              };\ngeojson2mapml(json, options);\n')))),(0,l.kt)("h4",{id:"options-string"},"Options string"),(0,l.kt)("p",null,"An example showcasing how strings can be used to set ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"projection"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"caption")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"properties")," options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let json = {\n    "name": "Default Name",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "This is a Point"}\n};\n\n// GeoJSON To MapML\nlet output = geojson2mapml(json, {label: "Example 1", projection: "CBMTILE", caption: "desc", properties: "<h3>This is a property heading</h3>"});\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view the output HTMLElement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Example 1" checked="">\n   <map-meta name="projection" content="CBMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>This is a Point</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h3>This is a property heading</h3>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,l.kt)("h4",{id:"options-function"},"Options function"),(0,l.kt)("p",null,"An example showcasing how functions can be used to set ",(0,l.kt)("inlineCode",{parentName:"p"},"caption")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"properties")," options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let json = {\n    "name": "Default Name",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [-75.6916809,45.4186964]\n    },\n    "properties": {"desc": "This is a Point"}\n};\n\n// function to set caption\nlet cap = function c(j) {\n  let str = "This point is located at: (" + j.geometry.coordinates[0] + ", " + j.geometry.coordinates[1] + ").";\n  return str;\n}\n\n// function to set properties\nlet prop = function f(p) {\n  let parser = new DOMParser();\n  return parser.parseFromString("<h1>" + p.properties.desc + "\'s property</h1>", "text/html").body.firstChild;\n}\n\n// GeoJSON To MapML\nlet output = geojson2mapml(json, {label: "Example 2", caption: cap, properties: prop});\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view the output HTMLElement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Example 2" checked="">\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>This point is located at: (-75.6916809, 45.4186964).</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <h1>This is a Point\'s property</h1>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,l.kt)("h4",{id:"default-options"},"Default options"),(0,l.kt)("p",null,"An example showcasing default output when no options are provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let json = {\n "title": "Point Geometry",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "This is a Point"\n     }\n }]\n};\n\n// GeoJSON To MapML\nlet output = geojson2mapml(json);\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view the output HTMLElement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Point Geometry" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Point Geometry</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Property name</th>\n                  <th role="columnheader" scope="col">Property value</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">This is a Point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</layer->\n'))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"mapml-to-geojson"},"MapML To GeoJSON"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"mapml2geojson(<HTMLLayerElement",">","\xa0","element,","\xa0","<Object",">","\xa0","options)")),(0,l.kt)("td",{parentName:"tr",align:null},"A JavaScript (GeoJSON) feature collection object"),(0,l.kt)("td",{parentName:"tr",align:null},"This function transforms the ",(0,l.kt)("inlineCode",{parentName:"td"},"<feature>")," element children of a ",(0,l.kt)("inlineCode",{parentName:"td"},"<layer->")," element to a GeoJSON FeatureCollection object. You supply ",(0,l.kt)("a",{parentName:"td",href:"#options-1"},"options")," to control the transformation. This function must be used inside a windows.onload event.")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"mapml2geojson")," must be called inside a windows.onload event to work properly. i.e."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.onload = (event) => {\n  mapml2geojson(json);\n};\n")))),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<HTMLLayerElement",">"," element"),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("inlineCode",{parentName:"td"},"<layer->")," element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<Object",">","\xa0","options"),(0,l.kt)("td",{parentName:"tr",align:null},"You supply parameters via an options object with ",(0,l.kt)("a",{parentName:"td",href:"#options-1"},"predefined option names"),".")))),(0,l.kt)("h3",{id:"options-1"},"Options"),(0,l.kt)("p",null,"<Object",">"," A set of key/value pairs that customize the output GeoJSON object. All are optional and detailed below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"propertyFunction")),(0,l.kt)("td",{parentName:"tr",align:null},"<Function",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"n/a")),(0,l.kt)("td",{parentName:"tr",align:null},"A function you supply that maps the features' ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-properties>")," element to a ",(0,l.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2"},'GeoJSON "properties" member'),", since only you know the markup design in your ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-properties>")," value. If you don't supply this option, a default function will attempt to reverse a ",(0,l.kt)("inlineCode",{parentName:"td"},"<table>")," child of the ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-properties>")," element, as if that table was generated by the ",(0,l.kt)("a",{parentName:"td",href:"#option-properties"},"default properties option function from geojson2mapml"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transform")),(0,l.kt)("td",{parentName:"tr",align:null},"<Boolean",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Transform ",(0,l.kt)("inlineCode",{parentName:"td"},"<map-coordinates>")," values to ",(0,l.kt)("inlineCode",{parentName:"td"},"gcrs")," (longitude,latitude) values, if they are not already so. GeoJSON ",(0,l.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc7946.html#section-4"},"recommends")," using WGS 84 longitude,latitude coordinates, so this is the default behaviour.")))),(0,l.kt)("h6",{id:"notes"},"Notes"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mapml2geojson"),", by default, will transform coordinates to ",(0,l.kt)("inlineCode",{parentName:"p"},"gcrs")," before serialization, if\nnecessary. Note that all geographic CRS are not equivalent, and the interpretation\nof such coordinates is not guaranteed to conform to WGS 84 / GPS coordinates,\nand therefore may not conform to ",(0,l.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-4"},"the GeoJSON recommendation"),",\nwhich requires longitude,latitude coordinates that\nare encoded as WGS 84.  The projection engine used to implement this conversion\nis not capable of transforming coordinates from one ellipsoid to another, and\nso the resulting JSON SHOULD (somehow, tbd) be tagged with the datum in use by the projection of\nthe layer."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("h4",{id:"default-options-1"},"Default options"),(0,l.kt)("p",null,"An example showcasing default GeoJSON output when no options are provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Point Geometry" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Point Geometry</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Property name</th>\n                  <th role="columnheader" scope="col">Property value</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">This is a Point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</layer->\n<script>\nwindow.onload = (event) => {\n   let output = mapml2geojson(document.querySelector(\'layer-\'))\n};\n<\/script>\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view the output GeoJSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n "title": "Point Geometry",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "This is a Point"\n     }\n }]\n}\n'))))}j.isMDXComponent=!0}}]);