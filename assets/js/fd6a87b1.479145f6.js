"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"features",title:"Extension Features",slug:"/extension/features"},s=void 0,i={unversionedId:"extension/features",id:"extension/features",title:"Extension Features",description:"There are several additional requirements that are addressed by the extension.",source:"@site/docs/extension/features.md",sourceDirName:"extension",slug:"/extension/features",permalink:"/web-map-doc/docs/extension/features",draft:!1,tags:[],version:"current",frontMatter:{id:"features",title:"Extension Features",slug:"/extension/features"},sidebar:"sidebar",previous:{title:"Extension Installation",permalink:"/web-map-doc/docs/extension/installation"},next:{title:"Debug Mode",permalink:"/web-map-doc/docs/resources/debug-mode"}},l={},p=[{value:"Localization",id:"localization",level:3},{value:"Feature Indexing",id:"feature-indexing",level:3},{value:"Announce Zoom Level",id:"announce-zoom-level",level:3},{value:"Render MapML resources",id:"render-mapml-resources",level:3},{value:"Set a coordinate system for copy operations",id:"set-a-coordinate-system-for-copy-operations",level:3},{value:"Requirements",id:"requirements",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are several additional requirements that are addressed by the extension."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Extension popup",src:n(4247).Z,width:"302",height:"425"})),(0,r.kt)("h3",{id:"localization"},"Localization"),(0,r.kt)("p",null,"By default, the extension uses the browser's locale to display any ",(0,r.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," UI in the user's locale. Note that if the UI is not localized to your browser's language, it is likely because there currently exists no translation of the UI strings for your locale.  Localization contributions are welcome.  Languages that are available at the time of writing are english, french and swedish."),(0,r.kt)("h3",{id:"feature-indexing"},"Feature Indexing"),(0,r.kt)("p",null,"When turned on through the extension, enables a square in the middle of the map to enable a keyboard index menu of features located inside the square. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feature Index Example",src:n(5701).Z,width:"1278",height:"1277"})),(0,r.kt)("h3",{id:"announce-zoom-level"},"Announce Zoom Level"),(0,r.kt)("p",null,"When toggled through the extension, announces the zoom level through screen readers (this is on by default)."),(0,r.kt)("h3",{id:"render-mapml-resources"},"Render MapML resources"),(0,r.kt)("p",null,'When turned on through the extension popup (it is on by default as shown above, but can be turned off), the extension enables the rendering of map documents that have no host document, just as browsers can render image resources (image/*) that have no host document, by synthesizing a host document at run time.  The feature will recognize documents that are served to a browser tab (a top level browsing context) that are served with the "text/mapml" or "application/xml" Content-Type header. In the latter case, the extension will "sniff" for a root ',(0,r.kt)("inlineCode",{parentName:"p"},'<mapml- xmlns="http://www.w3.org/1999/xhtml">')," element."),(0,r.kt)("h3",{id:"set-a-coordinate-system-for-copy-operations"},"Set a coordinate system for copy operations"),(0,r.kt)("p",null,"By default, the coordinate system (cs) for copying the map extent using the map\ncontext menu is projected coordinates (PCRS), and that for copying locations is\nby default geodetic (GCRS). When changed to another through the extension\nuser interface, the selected cs will be used for subsequent copy operations."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"requirement"),(0,r.kt)("span",{class:"enhancement"},"enhancement"),(0,r.kt)("span",{class:"impractical"},"impractical"),(0,r.kt)("span",{class:"undecided"},"undecided"),(0,r.kt)("span",{class:"discussion"},"under discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/172"},(0,r.kt)("strong",{parentName:"a"},"The GeoWeb - proposed Epic"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"discussion"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/19"},"Enable federation via links"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis"},(0,r.kt)("strong",{parentName:"a"},"Client-side Mapping API Capabilities (6.0)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"discussion"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/259"},"Create, initialise, and display a map from a map document resource"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/extension/features.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0},5701:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feature-index-9aab6d59cd3afda76f7b1e7a4e7c39fe.png"},4247:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/render-mapml-dede5f5b3e908191ab914eb47fb97b1b.png"}}]);