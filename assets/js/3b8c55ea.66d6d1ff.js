"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[6803],{6845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(4848),r=n(8453),l=n(1470),s=n(9365);const o={id:"installation",title:"Installation"},i=void 0,u={id:"installation",title:"Installation",description:"Install the `` suite of custom elements",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/web-map-doc/docs/installation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/web-map-doc/docs/"},next:{title:"Building from source",permalink:"/web-map-doc/docs/building"}},c={},d=[{value:"Install the <code>&lt;mapml-viewer&gt;</code> suite of custom elements",id:"install-the-mapml-viewer-suite-of-custom-elements",level:2},{value:"CDN",id:"cdn",level:3},{value:"Node.js / NPM",id:"nodejs--npm",level:3},{value:"Add the Script to a Web page",id:"add-the-script-to-a-web-page",level:4}];function m(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h2,{id:"install-the-mapml-viewer-suite-of-custom-elements",children:["Install the ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," suite of custom elements"]}),"\n",(0,a.jsx)(t.h3,{id:"cdn",children:"CDN"}),"\n",(0,a.jsxs)(t.p,{children:["To include the ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," suite of elements on your page, you can add one of the following ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Content_delivery_network",children:"Content Delivery Network"})," links to the ",(0,a.jsx)(t.code,{children:"<head>"})," of your HTML code:"]}),"\n","\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(s.A,{value:"jsDelivr",label:"jsDelivr",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/mapml@latest/dist/mapml.js"><\/script>\n'})})}),(0,a.jsx)(s.A,{value:"unpkg",label:"unpkg",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script type="module" src="https://unpkg.com/@maps4html/mapml/dist/mapml.js"><\/script>\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"nodejs--npm",children:"Node.js / NPM"}),"\n",(0,a.jsxs)(t.p,{children:["To install the ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," in your web site project, you use the Node Package Manager (npm), so to get that you must install ",(0,a.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"node.js"}),". npm should be installed by the linked installers.  You can now obtain the latest version of the ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"})," suite of custom elements, by installing it in the node_modules directory of your web site directory, using the following commands:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"$ cd ../test\n\n$ npm install @maps4html/mapml\n\n+ @maps4html/mapml\nadded 1 package from 2 contributors and audited 1 package in 1.605s\nfound 0 vulnerabilities\n\n$\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once installation is complete, you will have a node_modules/@maps4html/mapml subdirectory, containing a ",(0,a.jsx)(t.code,{children:"dist"})," folder with the required JavaScript, CSS and HTML files to support the ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"add-the-script-to-a-web-page",children:"Add the Script to a Web page"}),"\n",(0,a.jsxs)(t.p,{children:["Add the following to the ",(0,a.jsx)(t.code,{children:"<head>"})," of your HTML code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script type="module" src="./node_modules/@maps4html/mapml/dist/mapml.js"><\/script>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can now use ",(0,a.jsx)(t.code,{children:"<mapml-viewer>"}),", ",(0,a.jsx)(t.code,{children:"<layer->"})," and the other elements described here on your web pages."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(6540),r=n(4164),l=n(3104),s=n(6347),o=n(205),i=n(7485),u=n(1682),c=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=h({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);