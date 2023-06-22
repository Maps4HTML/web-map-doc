"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[5927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={id:"datalist",title:"<map-datalist>",slug:"/elements/datalist/"},i=void 0,p={unversionedId:"elements/datalist",id:"elements/datalist",title:"<map-datalist>",description:"L\u2019\xe9l\xe9ment ` est une extension de l\u2019\xe9l\xe9ment HTML . Il est l\u2019\xe9l\xe9ment-enfant de  et est utilis\xe9 par l\u2019attribut list de l\u2019\xe9l\xe9ment  en liant l\u2019id de ` :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/elements/datalist.md",sourceDirName:"elements",slug:"/elements/datalist/",permalink:"/web-map-doc/fr/docs/elements/datalist/",draft:!1,tags:[],version:"current",frontMatter:{id:"datalist",title:"<map-datalist>",slug:"/elements/datalist/"}},o={},s=[{value:"Attributs",id:"attributs",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"\xc9l\xe9ments-enfants",id:"\xe9l\xe9ments-enfants",level:2},{value:"<code>&lt;map-option&gt;</code>",id:"map-option",level:3},{value:"Attributs",id:"attributs-1",level:4},{value:"Sp\xe9cifications",id:"sp\xe9cifications",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," est une extension de l\u2019\xe9l\xe9ment HTML ",(0,l.kt)("inlineCode",{parentName:"p"},"<datalist>"),". Il est l\u2019\xe9l\xe9ment-enfant de ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-extent>")," et est utilis\xe9 par l\u2019attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," de l\u2019\xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-input>")," en liant l\u2019",(0,l.kt)("inlineCode",{parentName:"p"},"id")," de ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<map-input name="s" type="hidden" shard="true" list="servers"></map-input>\n<map-datalist id="servers">\n  <map-option value="a"></map-option>\n  <map-option value="b"></map-option>\n  <map-option value="c"></map-option>\n</map-datalist>\n')),(0,l.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," est utilis\xe9 de concert avec l\u2019attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"shard")," de l\u2019\xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-input>"),". Il peut r\xe9pertorier un ensemble de valeurs utilis\xe9es \xe0 tour de r\xf4le (round robin) comme substitution des variables d\u2019un mod\xe8le. Cela s\u2019av\xe8re utile avec le ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding"},"fractionnement de domaines")," pour accro\xeetre le parall\xe9lisme des requ\xeates de pav\xe9s. Pour en savoir plus, cliquez ",(0,l.kt)("a",{parentName:"p",href:"https://maps4html.org/web-map-doc/docs/elements/input/#shard"},"here"),"."),(0,l.kt)("p",null,"L\u2019\xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," contient un ou plusieurs \xe9l\xe9ments ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-option>"),"."),(0,l.kt)("iframe",{src:"../../../demo/map-datalist-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,l.kt)("h2",{id:"attributs"},"Attributs"),(0,l.kt)("h3",{id:"id"},(0,l.kt)("inlineCode",{parentName:"h3"},"id")),(0,l.kt)("p",null,"D\xe9finit l\u2019id de l\u2019\xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>"),". Cet id est utilis\xe9 par l\u2019attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," de l\u2019\xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-input>"),", ce qui lui permet d\u2019\xe9tablir un lien avec datalist."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Cliquez pour afficher un exemple de lien entre <map-datalist> et <map-input>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<map-input name="s" type="hidden" shard="true" list="servers"></map-input>\n<map-datalist id="servers">\n  <map-option value="a"></map-option>\n  <map-option value="b"></map-option>\n  <map-option value="c"></map-option>\n</map-datalist>\n'))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\xe9l\xe9ments-enfants"},"\xc9l\xe9ments-enfants"),(0,l.kt)("h3",{id:"map-option"},(0,l.kt)("inlineCode",{parentName:"h3"},"<map-option>")),(0,l.kt)("p",null,"Cet \xe9l\xe9ment contient les valeurs de datalist. Un \xe9l\xe9ment ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-datalist>")," peut contenir un ou plusieurs \xe9l\xe9ments ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-option>"),"."),(0,l.kt)("h4",{id:"attributs-1"},"Attributs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Cet attribut permet de d\xe9finir la valeur de l\u2019option datalist.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sp\xe9cifications"},"Sp\xe9cifications"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sp\xe9cification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-datalist-element-0"},"\xc9l\xe9ment datalist de MapML"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/dev/form-elements.html#the-datalist-element"},"\xc9l\xe9ment datalist en HTML"))))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/feature.md"},"Modifiez le contenu de cette page sur ",(0,l.kt)("strong",{parentName:"a"},"Github"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Clavardez avec nous sur ",(0,l.kt)("strong",{parentName:"a"},"Gitter"))))))}u.isMDXComponent=!0}}]);