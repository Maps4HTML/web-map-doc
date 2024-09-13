"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"quick-start",title:"Guide de d\xe9marrage rapide MapML",slug:"/user-guide/quick-start"},o=void 0,c={unversionedId:"user-guide/quick-start",id:"user-guide/quick-start",title:"Guide de d\xe9marrage rapide MapML",description:"Apprenez \xe0 cr\xe9er rapidement votre premi\xe8re carte.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/quick-start.md",sourceDirName:"user-guide",slug:"/user-guide/quick-start",permalink:"/web-map-doc/fr/docs/user-guide/quick-start",draft:!1,tags:[],version:"current",frontMatter:{id:"quick-start",title:"Guide de d\xe9marrage rapide MapML",slug:"/user-guide/quick-start"},sidebar:"sidebar",previous:{title:"HTMLLinkElement",permalink:"/web-map-doc/fr/docs/api/map-link-api"},next:{title:"Cr\xe9ation de styles mvt personnalis\xe9s",permalink:"/web-map-doc/fr/docs/user-guide/creating-styles"}},l={},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apprenez \xe0 cr\xe9er rapidement votre premi\xe8re carte."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/wJDEk6Z-w5k?si=o8P1_PNJe0OQZOwQ&rel=0",title:"Lecteur vid\xe9o YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Voir le code HTML pr\xe9sent\xe9 dans la vid\xe9o"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Getting Started</title>\n    <script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/mapml/dist/mapml-viewer.js"><\/script>\n</head>\n<body>\n    <mapml-viewer width="800" height="400" projection="OSMTILE" zoom="1" lat="60.0" lon="-100.0" controls>\n        <layer- label="OpenStreetMap" src="https://maps4html.org/web-map-doc/demo/data/osm.mapml" checked></layer-> \n    </mapml-viewer>\n</body>\n</html>\n'))),(0,a.kt)("p",null,"Passez au tutoriel suivant (Introduction \xe0 MapML) pour une pr\xe9sentation plus d\xe9taill\xe9e."))}d.isMDXComponent=!0}}]);