"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},o="HTMLLayerElement",i={unversionedId:"api/layer-api",id:"api/layer-api",title:"HTMLLayerElement",description:"Properties",source:"@site/docs/api/layer-api.md",sourceDirName:"api",slug:"/api/layer-api",permalink:"/web-map-doc/docs/api/layer-api",draft:!1,tags:[],version:"current",frontMatter:{id:"layer-api",title:"HTMLLayerElement",slug:"/api/layer-api"},sidebar:"sidebar",previous:{title:"HTMLMapmlViewerElement",permalink:"/web-map-doc/docs/api/mapml-viewer-api"},next:{title:"HTMLFeatureElement",permalink:"/web-map-doc/docs/api/map-feature-api"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"checked",id:"checked",level:3},{value:"hidden",id:"hidden",level:3},{value:"disabled",id:"disabled",level:3},{value:"label",id:"label",level:3},{value:"src",id:"src",level:3},{value:"opacity",id:"opacity",level:3},{value:"Methods",id:"methods",level:2},{value:"zoomTo()",id:"zoomto",level:3},{value:"mapml2geojson(options)",id:"mapml2geojsonoptions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Options",id:"options",level:4},{value:"Notes",id:"notes",level:6},{value:"Events",id:"events",level:2},{value:"Examples",id:"examples",level:2},{value:"mapml2geojson",id:"mapml2geojson",level:3},{value:"Default options",id:"default-options",level:4},{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"htmllayerelement"},"HTMLLayerElement"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"checked"},"checked"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.checked")," is a boolean read/write value that turns the layer on and off,\nand reflects the checked attribute. The checked state is reflected in the layer\ncontrol user interface for the layer via a checkbox next to the layer name.  The\nchecked property can be used to programatically change the checked state of the layer.\nThe checked property can't be changed if the disabled property is set."),(0,r.kt)("p",null,"To set the checked state of a layer to on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.checked = true; // valid values are true | false\n")),(0,r.kt)("p",null,"To read the checked state of the layer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet isChecked = layer.checked;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hidden"},"hidden"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.hidden")," is a boolean  read/write value that hides or unhides the\nlayer in the layer control only.  The hidden state has no bearing on the presence\nof layer content on the map, it only affects the layer presence layer control.\nThis can be useful for managing short-lived layers, such as search results, to the map without\nforcing the user to manage the layer state, which is done by your application.\nIt can also be useful for managing a permanent base layer without cluttering the\nuser interface."),(0,r.kt)("p",null,'To set/update whether the layer is "hidden":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.hidden = true; // valid values are true | false\n")),(0,r.kt)("p",null,"To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s hidden value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet isHidden = layer.hidden;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabled"},"disabled"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.disabled")," provides READ-ONLY access to the disabled state of the\nlayer.  A layer becomes disabled if its contents are not rendered, either by being\ncompletely outside the current map extent or by having an error associated to the\nlayer processing, such as being in a projection that is incompatible with the\nprojection of the map. When a layer is disabled, the user can't interact with it\nin the layer control, and it will not be visible in the map viewport.  If a layer\nbecomes not-disabled, through manipulation of the map, for example, the layer\nwill become interactable in the layer control, and should be visible in the\nmap viewport."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"label"},"label"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.label")," reflects the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," content attribute, and specifies a\nfallback accessible name for the layer, if the accessible name is not provided\nvia a local ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-title>")," element child of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->")," element, or in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<map-head>")," of a remote MapML document, loaded via the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," URL value, respectively."),(0,r.kt)("p",null,"To set/update the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s label:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Needs To Be Implemented, Currently doesn't update the label in layer controls")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.label = \"New Title\";\n")),(0,r.kt)("p",null,"To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s label value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet label = layer.label;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"src"},"src"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.src")," reflects the src HTML attribute, and specifies the URL of the\nMapML document for the layer.  The src property may be undefined if the layer\ncontains inline content.  If the src property returns a value, any inline content\nwill be ignored.\nTo set/update the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s src:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.src = \"https://example.org\";\n")),(0,r.kt)("p",null,"To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s src value (URL):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet url = layer.src;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"opacity"},"opacity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.opacity")," provides read/write access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity"),' value, and is reflected in the layer control for each layer, under "Opacity".'),(0,r.kt)("p",null,"To set/update the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s opacity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.opacity = 0.5; // valid values from 0 to 1\n")),(0,r.kt)("p",null,"To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"<layer->"),"'s opacity value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlet opacity = layer.opacity;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"zoomto"},"zoomTo()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.zoomTo()")," Zoom to the layer's extent in the map, at the maximum\nzoom level in which the extent fits completely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let layer = document.querySelector('layer-');\nlayer.zoomTo();\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mapml2geojsonoptions"},"mapml2geojson(options)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLLayerElement.mapml2geojson(options)")," returns the layer in GeoJSON format."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"mapml2geojson(<Object",">","\xa0","options)")),(0,r.kt)("td",{parentName:"tr",align:null},"A JavaScript (GeoJSON) feature collection object"),(0,r.kt)("td",{parentName:"tr",align:null},"This function transforms the ",(0,r.kt)("inlineCode",{parentName:"td"},"<feature>")," element children of a ",(0,r.kt)("inlineCode",{parentName:"td"},"<layer->")," element to a GeoJSON FeatureCollection object. You supply ",(0,r.kt)("a",{parentName:"td",href:"#options"},"options")," to control the transformation. This function must be used inside a windows.onload event.")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mapml2geojson")," must be called inside a windows.onload event to work properly. i.e."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.onload = (event) => {\n  let layer = document.querySelector('layer-');\n  layer.mapml2geojson();\n};\n"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<Object",">","\xa0","options"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. You supply parameters via an options object with ",(0,r.kt)("a",{parentName:"td",href:"#options"},"predefined option names"),".")))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,"<Object",">"," A set of key/value pairs that customize the output GeoJSON object. All are optional and detailed below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"propertyFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"<Function",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"A function you supply that maps the features' ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-properties>")," element to a ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.2"},'GeoJSON "properties" member'),", since only you know the markup design in your ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-properties>")," value. If you don't supply this option, a default function will attempt to reverse a ",(0,r.kt)("inlineCode",{parentName:"td"},"<table>")," child of the ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-properties>")," element, as if that table was generated by the ",(0,r.kt)("a",{parentName:"td",href:"mapml-viewer-api#options"},"default properties option function from geojson2mapml"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transform")),(0,r.kt)("td",{parentName:"tr",align:null},"<Boolean",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Transform ",(0,r.kt)("inlineCode",{parentName:"td"},"<map-coordinates>")," values to ",(0,r.kt)("inlineCode",{parentName:"td"},"gcrs")," (longitude,latitude) values, if they are not already so. GeoJSON ",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc7946.html#section-4"},"recommends")," using WGS 84 longitude,latitude coordinates, so this is the default behaviour.")))),(0,r.kt)("h6",{id:"notes"},"Notes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mapml2geojson"),", by default, will transform coordinates to ",(0,r.kt)("inlineCode",{parentName:"p"},"gcrs")," before serialization, if\nnecessary. Note that all geographic CRS are not equivalent, and the interpretation\nof such coordinates is not guaranteed to conform to WGS 84 / GPS coordinates,\nand therefore may not conform to ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-4"},"the GeoJSON recommendation"),",\nwhich requires longitude,latitude coordinates that\nare encoded as WGS 84.  The projection engine used to implement this conversion\nis not capable of transforming coordinates from one ellipsoid to another, and\nso the resulting JSON SHOULD (somehow, tbd) be tagged with the datum in use by the projection of the layer."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changestyle"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired before the layer changes src due to user selecting alternate style in layer control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changeprojection"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired before the layer changes projection due to its declared projection being not equal to that of the map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extentload"),(0,r.kt)("td",{parentName:"tr",align:null},"Fired when the metadata for a layer has loaded, but before loading tiles, features and other content")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"mapml2geojson"},"mapml2geojson"),(0,r.kt)("h4",{id:"default-options"},"Default options"),(0,r.kt)("p",null,"An example showcasing default GeoJSON output when no options are provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="Point Geometry" checked="">\n   <map-meta name="extent" content="top-left-longitude=-75.916809, top-left-latitude=45.886964, bottom-right-longitude=-75.516809,bottom-right-latitude=45.26964"></map-meta>\n   <map-meta name="projection" content="OSMTILE"></map-meta>\n   <map-meta name="cs" content="gcrs"></map-meta>\n   <map-feature>\n      <map-featurecaption>Point Geometry</map-featurecaption>\n      <map-geometry>\n         <map-point>\n            <map-coordinates>-75.6916809 45.4186964</map-coordinates>\n         </map-point>\n      </map-geometry>\n      <map-properties>\n         <table>\n            <thead>\n               <tr>\n                  <th role="columnheader" scope="col">Property name</th>\n                  <th role="columnheader" scope="col">Property value</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr>\n                  <th scope="row">prop0</th>\n                  <td itemprop="prop0">This is a Point</td>\n               </tr>\n            </tbody>\n         </table>\n      </map-properties>\n   </map-feature>\n</layer->\n<script>\nwindow.onload = (event) => {\n   let layer = document.querySelector(\'layer-\');\n   let output = layer.mapml2geojson();\n};\n<\/script>\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view the output GeoJSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n "title": "Point Geometry",\n "bbox": [-75.916809, 45.886964, -75.516809, 45.26964],\n "type": "FeatureCollection",\n "features": [{\n     "type": "Feature",\n     "geometry": {\n         "type": "Point",\n         "coordinates": [-75.6916809, 45.4186964]\n     },\n     "properties": {\n         "prop0": "This is a Point"\n     }\n }]\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#dom-htmllayerelement"},"HTMLLayerElement"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"requirement"),(0,r.kt)("span",{class:"enhancement"},"enhancement"),(0,r.kt)("span",{class:"impractical"},"impractical"),(0,r.kt)("span",{class:"undecided"},"undecided"),(0,r.kt)("span",{class:"discussion"},"under discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#properties"},(0,r.kt)("strong",{parentName:"a"},"Properties"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#methods"},(0,r.kt)("strong",{parentName:"a"},"Methods"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full")))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/api/layer-api.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0}}]);