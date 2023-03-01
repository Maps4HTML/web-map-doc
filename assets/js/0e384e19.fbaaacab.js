"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"intro",title:"Introduction",slug:"/"},i=void 0,l={unversionedId:"intro",id:"intro",title:"Introduction",description:"The web-map custom element suite provides a Web map viewer which is modelled after the HTML5 `` tag. It is a simple way to get started publishing Web maps.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/web-map-doc/docs/",draft:!1,tags:[],version:"current",frontMatter:{id:"intro",title:"Introduction",slug:"/"},sidebar:"sidebar",next:{title:"Installation",permalink:"/web-map-doc/docs/installation"}},c={},p=[],s={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The web-map custom element suite provides a Web map viewer which is modelled after the HTML5 ",(0,a.kt)("inlineCode",{parentName:"p"},"<video>")," tag. It is a simple way to get started publishing Web maps. "),(0,a.kt)("p",null,"For example, markup such as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="3" lat="62.7" lon="-90.3" controls>\n  <layer- label="CBMT" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></layer->\n  <layer- label="Restaurants" src="demo/restaurants.mapml" checked></layer->\n  <layer- label="Canada\'s Provinces and Territories" src="demo/canada.mapml" checked></layer->\n</mapml-viewer>\n')),(0,a.kt)("p",null,"can be used to create a map like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The web-map in action",src:r(9352).Z,width:"1198",height:"896"})))}m.isMDXComponent=!0},9352:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mapml-viewer-bbd58f0cd77ab384a790771d22009401.png"}}]);