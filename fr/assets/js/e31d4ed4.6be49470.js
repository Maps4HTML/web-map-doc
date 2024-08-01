"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),l=n(6010),s=n(2466),o=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var v=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(p(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},6433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),s=n(5162);const o={id:"installation",title:"Installation"},i=void 0,u={unversionedId:"installation",id:"installation",title:"Installation",description:"Installer les \xe9l\xe9ments personnalis\xe9s ``.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/web-map-doc/fr/docs/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/web-map-doc/fr/docs/"},next:{title:"Construire \xe0 partir de la source",permalink:"/web-map-doc/fr/docs/building"}},c={},p=[{value:"Installer les \xe9l\xe9ments personnalis\xe9s <code>&lt;mapml-viewer&gt;</code>.",id:"installer-les-\xe9l\xe9ments-personnalis\xe9s-mapml-viewer",level:2},{value:"CDN",id:"cdn",level:3},{value:"Node.js / NPM",id:"nodejs--npm",level:3},{value:"Ajouter le script \xe0 une page Web",id:"ajouter-le-script-\xe0-une-page-web",level:4}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installer-les-\xe9l\xe9ments-personnalis\xe9s-mapml-viewer"},"Installer les \xe9l\xe9ments personnalis\xe9s ",(0,a.kt)("inlineCode",{parentName:"h2"},"<mapml-viewer>"),"."),(0,a.kt)("h3",{id:"cdn"},"CDN"),(0,a.kt)("p",null,"Pour inclure la suite d'\xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," dans votre page, vous pouvez ajouter l'un des ",(0,a.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/R%C3%A9seau_de_diffusion_de_contenu"},"Content Delivery Network")," suivants au ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," de votre code HTML :"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"jsDelivr",label:"jsDelivr",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/web-map-custom-element/dist/mapml-viewer.js"><\/script>\n'))),(0,a.kt)(s.Z,{value:"unpkg",label:"unpkg",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="https://unpkg.com/@maps4html/web-map-custom-element/dist/mapml-viewer.js"><\/script>\n')))),(0,a.kt)("h3",{id:"nodejs--npm"},"Node.js / NPM"),(0,a.kt)("p",null,"Pour installer les \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," dans votre projet de site Web, vous devez utiliser Node Package Manager (npm). Pour ce faire, vous devez installer ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js"),". Le gestionnaire npm devrait \xeatre install\xe9 par les installateurs li\xe9s. Vous pouvez maintenant obtenir la version la plus r\xe9cente des \xe9l\xe9ments personnalis\xe9s ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),", en les installant dans le r\xe9pertoire node_modules du r\xe9pertoire de votre site Web \xe0 l\u2019aide des commandes suivantes :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ../test\n\n$ npm install @maps4html/web-map-custom-element\n\n+ @maps4html/web-map-custom-element@0.8.3\nadded 1 package from 2 contributors and audited 1 package in 1.605s\nfound 0 vulnerabilities\n\n$\n")),(0,a.kt)("p",null,"Une fois l\u2019installation termin\xe9e, le sous-r\xe9pertoire node_modules/@maps4html/web-map-custom-element sera cr\xe9\xe9, lequel contient un dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," avec les fichiers JavaScript, CSS et HTML requis pour prendre en charge les \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>"),"."),(0,a.kt)("h4",{id:"ajouter-le-script-\xe0-une-page-web"},"Ajouter le script \xe0 une page Web"),(0,a.kt)("p",null,"Ajoutez ce qui suit \xe0 l\u2019\xe9l\xe9ment ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," de votre code HTML :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="./node_modules/@maps4html/web-map-custom-element/dist/mapml-viewer.js"><\/script>\n')),(0,a.kt)("p",null,"Vous pouvez maintenant utiliser dans vos pages Web les \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"<layer->")," ainsi que les autres \xe9l\xe9ments d\xe9crits dans le pr\xe9sent document."))}f.isMDXComponent=!0}}]);