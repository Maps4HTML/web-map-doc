"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"installation",title:"Installation"},l=void 0,i={unversionedId:"installation",id:"installation",title:"Installation",description:"Install the `` suite of custom elements",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/web-map-doc/docs/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/web-map-doc/docs/"},next:{title:"Building from source",permalink:"/web-map-doc/docs/building"}},s={},p=[{value:"Install the <code>&lt;mapml-viewer&gt;</code> suite of custom elements",id:"install-the-mapml-viewer-suite-of-custom-elements",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Add the Script to a Web page",id:"add-the-script-to-a-web-page",level:4}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-the-mapml-viewer-suite-of-custom-elements"},"Install the ",(0,a.kt)("inlineCode",{parentName:"h2"},"<mapml-viewer>")," suite of custom elements"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To install the ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," in your web site project, you use the Node Package Manager (npm), so to get that you must install ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js"),". npm should be installed by the linked installers.  You can now obtain the latest version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," suite of custom elements, by installing it in the node_modules directory of your web site directory, using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ../test\n\n$ npm install @maps4html/web-map-custom-element\n\n+ @maps4html/web-map-custom-element@0.8.3\nadded 1 package from 2 contributors and audited 1 package in 1.605s\nfound 0 vulnerabilities\n\n$\n")),(0,a.kt)("p",null,"Once installation is complete, you will have a node_modules/@maps4html/web-map-custom-element subdirectory, containing a ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder with the required JavaScript, CSS and HTML files to support the ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),".  "),(0,a.kt)("h4",{id:"add-the-script-to-a-web-page"},"Add the Script to a Web page"),(0,a.kt)("p",null,"Add the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="./node_modules/@maps4html/web-map-custom-element/dist/mapml-viewer.js"><\/script>\n')),(0,a.kt)("p",null,"You can now use ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<layer->")," and the other elements described here on your web pages."))}c.isMDXComponent=!0}}]);