"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9563],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7145:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"custom-projections",title:"Custom Projections API",slug:"/api/custom-projections"},l=void 0,p={unversionedId:"api/custom-projections",id:"api/custom-projections",title:"Custom Projections API",description:"Introduction",source:"@site/docs/api/custom-projections.md",sourceDirName:"api",slug:"/api/custom-projections",permalink:"/web-map-doc/docs/api/custom-projections",tags:[],version:"current",frontMatter:{id:"custom-projections",title:"Custom Projections API",slug:"/api/custom-projections"},sidebar:"sidebar",previous:{title:"HTMLLayerElement",permalink:"/web-map-doc/docs/api/layer-api"},next:{title:"Custom Rendering API",permalink:"/web-map-doc/docs/api/custom-rendering"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Details",id:"details",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"MapML defines a few built-in tiled CRS projections, including Web Mercator (OSMTILE), pseudo-plate carr\xe9e (WGS84), and  Canada's base map tile grid (CBMTILE). "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," custom element provides the custom projections API, which gives you the ability to create custom projections and use them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),' element, defined using extended JSON-based "proj4" syntax, supported by the proj4js library.'),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Example Custom Projection</title>\n  <script type="module" src="web-map/mapml-viewer.js"><\/script>\n  <script type="module">\n    let customProjectionDefinition = `{\n      "projection": "ATLAS_POLAR_MAP",\n      "proj4string" : "+proj=aeqd +lat_0=90 +lon_0=-90 +x_0=0 +y_0=0 +ellps=sphere +units=m +no_defs +type=crs",\n      "origin" : [-20015200,20015200],\n      "resolutions" :  [33073,16536.5,8268.246,4134.123,2067.061,1033.531,516.765],\n      "bounds" : [[4979939,-4846977],[-5139071,3980038]],\n      "tilesize" : 256\n      }`;\n    let map = document.querySelector("mapml-viewer");\n    let cProjection = map.defineCustomProjection(customProjectionDefinition);    \n    map.projection = cProjection;\n  <\/script>\n</head>\n<body>\n  <mapml-viewer projection="ATLAS_POLAR_MAP" zoom="2" lat="83.48919" lon="-87.7687" controls>\n    <layer- label="Atlas of Canada Polar Wall Map" checked>\n    <map-link rel="license" title="Canadian Federal Geospatial Platform" href="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/"></map-link>\n      <map-extent units="ATLAS_POLAR_MAP">\n        <map-input type="zoom" name="z" min="0" max="6" value="6" ></map-input>\n        <map-input type="location" name="x" axis="column" units="tilematrix" min="116" max="186"></map-input>\n        <map-input type="location" name="y" axis="row" units="tilematrix" min="125" max="184"></map-input>\n        <map-link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN/MapServer/tile/{z}/{y}/{x}/"></map-link>\n        <map-link rel="tile" tref="https://geoappext.nrcan.gc.ca/arcgis/rest/services/FGP/NCR_RCN_A/MapServer/tile/{z}/{y}/{x}/"></map-link>\n      </map-extent>\n    </layer->\n  </mapml-viewer>\n</body>\n</html>\n')),(0,i.kt)("h3",{id:"details"},"Details"),(0,i.kt)("p",null,"We won't discuss the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element here, except to say that the map ",(0,i.kt)("inlineCode",{parentName:"p"},"projection")," attribute should have the exact same value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"projection")," member of the JSON object you pass to the custom projections API's ",(0,i.kt)("inlineCode",{parentName:"p"},"defineCustomProjection")," method, and every ",(0,i.kt)("inlineCode",{parentName:"p"},"<layer->")," element in the map must declare and be encoded in that coordinate system, in order to display correctly."),(0,i.kt)("p",null,"The custom projections API is provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," element.  In a browser implementation, the API might be defined on the window object, but because of the ES6 modules used by custom elements, it is convenient to locate it on the mapping element which uses it."),(0,i.kt)("p",null,"To successfully call the ",(0,i.kt)("inlineCode",{parentName:"p"},"defineCustomProjection")," method, you need to encode the projection method and parameters as members of a JSON string.  The process of doing this is not always simple, but is helped by resources such as ",(0,i.kt)("a",{parentName:"p",href:"https://spatialreference.org"},"https://spatialreference.org"),", where you can obtain the proj4 version of virtually any CRS definition. "),(0,i.kt)("p",null,'Remember to enclose member names in quotes followed by a colon: e.g. "projection": "MY_PROJECTION_NAME".  String values are also enclosed in quotes, and numbers and arrays following normal ',(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"},"JSON syntax"),"."),(0,i.kt)("p",null,"There are several required members to a custom projection definition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projection"),' - this is a string name you give to your projection. We recommend using UPPERCASE to make projection names stand out. Colon ":" characters in the name are not permitted, because these names should not be confused with EPSG: or ogc: URI code lists, because what is being defined here is a CRS that has Web mapping specific parameters, discussed below.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"proj4string")," - This string is processed by ",(0,i.kt)("a",{parentName:"li",href:"http://proj4js.org/"},"proj4js"),", so needs to provide parameters of a projection method supported by that library, in the format that it supports."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin"),' - an array of two numbers representing the origin of the tile grid in coordinates of the projected coordinate system, typically meters.  The origin is always at the upper left of the tile grid space, and the column and row numbers increase to the right and down, respectively, following the WMTS standard.  If your tile source is configured according to the "TMS" community standard, you'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolutions"),' - an array of numbers, sorted in descending order of size in meters, of the "real-world" dimensions of a square pixel. The resolution is calculated using a nominal pixel size of 0.28mm, defined by the WMTS standard. NOTE THIS IS NOT TYPICALLY THE SAME VALUE THAT IS USED BY ESRI TILE SERVICES, WHICH USE 96 DPI AS THE NOMINAL SIZE (settable). Because scale varies over the extent of any projected coordinate system, the pixel resolution is usually valid only in limited locations, for example in Web Mercator, along the equator. The locations where pixel resolution is valid depend on the projection method and parameters.  The set of resolutions must match the set of resolutions of tiles in a cache, if you intend to use your custom projection with an existing tile service.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bounds")," - an array of two arrays of coordinate pairs, defining a bounding box around part of the projected coordinate system, in meters typically. Requests should be valid and latitude / longitude are defined within these bounds.  Requests for maps, tiles and coordinate transformations that fall completely outside these bounds will not execute, preventing redundant traffic and errors.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tilesize")," - tiles are always square, and usually 256 pixels on a side.  You can specify another size here as an integer value.  Values of 256, 512, 1024, 2048 or 4096 should work.")))}u.isMDXComponent=!0}}]);