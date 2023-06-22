"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[1030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={id:"map-link-api",title:"HTMLLinkElement",slug:"/api/map-link-api"},l=void 0,p={unversionedId:"api/map-link-api",id:"api/map-link-api",title:"HTMLLinkElement",description:'This document is copied from the old "Custom Rendering API" page, and is under',source:"@site/docs/api/map-link-api.md",sourceDirName:"api",slug:"/api/map-link-api",permalink:"/web-map-doc/docs/api/map-link-api",draft:!1,tags:[],version:"current",frontMatter:{id:"map-link-api",title:"HTMLLinkElement",slug:"/api/map-link-api"},sidebar:"sidebar",previous:{title:"HTMLFeatureElement",permalink:"/web-map-doc/docs/api/map-feature-api"},next:{title:"About Extension",permalink:"/web-map-doc/docs/extension/about"}},o={},m=[{value:"Custom Tiles",id:"custom-tiles",level:2},{value:"<code>tileloadstart</code> Event",id:"tileloadstart-event",level:3},{value:"Example",id:"example",level:3},{value:"Custom Image",id:"custom-image",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This document is copied from the old "Custom Rendering API" page, and is under\nconstruction.  It will eventually describe the API of the map-link custom element;\nthe "Custom Rendering API" is currently sourced from the map-link custom element,\nwhich may change in the future.'),(0,r.kt)("p",null,"The Custom Rendering API allows developers to circumvent MapML's rendering and draw anything within\nHTML's domain onto the map."),(0,r.kt)("h2",{id:"custom-tiles"},"Custom Tiles"),(0,r.kt)("p",null,"To render custom tiles using JavaScript, listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},"tileloadstart")," event on a templated layer's ",(0,r.kt)("inlineCode",{parentName:"p"},'<map-link rel="tile">')," element."),(0,r.kt)("h3",{id:"tileloadstart-event"},(0,r.kt)("inlineCode",{parentName:"h3"},"tileloadstart")," Event"),(0,r.kt)("p",null,"This event is fired when a tile is first being created, the event contains the following structure in its detail property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  x: 1,    // tilematrix x value of the tile loaded\n  y: 2,    // tilematrix y value of the tile loaded\n  zoom: 3, // zoom level of the tile loaded\n  appendTile: function appendTile ( customTile ) {...} // pass custom tile as an argument to function\n}\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="0" lat="45" lon="-75" controls>\n  <layer- label="Custom Tiles" checked>\n    <map-meta name="zoom" content="min=0,max=23" ></map-meta>\n    <map-extent units="OSMTILE">\n      <map-input name="zoomLevel" type="zoom" min="0" max="23" value="1" ></map-input>\n      <map-input name="row" type="location" axis="row" units="tilematrix" min="0" max="2" ></map-input>\n      <map-input name="col" type="location" axis="column" units="tilematrix" min="0" max="2" ></map-input>\n      \x3c!-- listen for the tileloadstart event on this element --\x3e\n      <map-link rel="tile" title="" tref="" ></map-link>\n    </map-extent>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("p",null,"The JavaScript for creating custom tiles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let layer = document.querySelector("body > mapml-viewer > layer- > map-extent > map-link");\n    layer.addEventListener("tileloadstart", (e) => {\n      let customTile = document.createElement("p");\n      customTile.innerHTML = `x: ${e.detail.x} y: ${e.detail.y} zoom: ${e.detail.zoom}`;\n      e.detail.appendTile(customTile);\n    });\n')),(0,r.kt)("p",null,"In this example the ",(0,r.kt)("inlineCode",{parentName:"p"},"customTile")," is an HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),", but you can use any HTML Element. Simply append the\ncreated element using the ",(0,r.kt)("inlineCode",{parentName:"p"},"(tileloadstart event).detail.appendTile()")," function, passing the custom tile as an argument of the function."),(0,r.kt)("h2",{id:"custom-image"},"Custom Image"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Needs to be implemented.")),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-link-element"},"HTMLLinkElement - not (fully) specified yet"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"requirement"),(0,r.kt)("span",{class:"enhancement"},"enhancement"),(0,r.kt)("span",{class:"impractical"},"impractical"),(0,r.kt)("span",{class:"undecided"},"undecided"),(0,r.kt)("span",{class:"discussion"},"under discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#properties"},(0,r.kt)("strong",{parentName:"a"},"Properties"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#methods"},(0,r.kt)("strong",{parentName:"a"},"Methods"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#events"},(0,r.kt)("strong",{parentName:"a"},"Events"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"none"),(0,r.kt)("td",{parentName:"tr",align:"center"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"partial *")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Exceptions *"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"The <map-link> element will emit the tileloadstart event, but it's behaviour is experimental and requires markup to conform to the example given above"))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/api/map-link-api.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}u.isMDXComponent=!0}}]);