"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[165],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2907:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"layer",title:"<layer->: The Layer element",slug:"/layers/layer/"},c=void 0,p={unversionedId:"elements/layer",id:"elements/layer",title:"<layer->: The Layer element",description:"Maps have one or more layers. Map layers are implemented by the `` custom element.",source:"@site/docs/elements/layer.md",sourceDirName:"elements",slug:"/layers/layer/",permalink:"/web-map-doc/docs/layers/layer/",tags:[],version:"current",frontMatter:{id:"layer",title:"<layer->: The Layer element",slug:"/layers/layer/"},sidebar:"sidebar",previous:{title:"<mapml-viewer>: The Map element",permalink:"/web-map-doc/docs/elements/mapml-viewer/"},next:{title:"<map-extent>: The Extent element",permalink:"/web-map-doc/docs/elements/extent/"}},s=[{value:"Attributes",id:"attributes",children:[{value:"<code>src</code>",id:"src",children:[],level:3},{value:"<code>checked</code>",id:"checked",children:[],level:3},{value:"<code>hidden</code>",id:"hidden",children:[],level:3},{value:"<code>label</code>",id:"label",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Maps have one or more layers. Map layers are implemented by the ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," custom element.",(0,l.kt)("br",{parentName:"p"}),"\n","All ",(0,l.kt)("inlineCode",{parentName:"p"},"<mapml-viewer>")," content is contained by one or more ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," elements, either inline or by remote fetch representing the layer's content."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Layer" checked>\n  ...layer content goes here...\n</layer->\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," is not a 'void' element - it must be closed with a ",(0,l.kt)("inlineCode",{parentName:"p"},"</layer->")," tag."),(0,l.kt)("p",null,"Map content can either be inline, as shown above - between the beginning ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer->")," and ending ",(0,l.kt)("inlineCode",{parentName:"p"},"</layer->")," tags -\nor fetched, from the ",(0,l.kt)("inlineCode",{parentName:"p"},'<layer- src="..."></layer->')," source attribute URL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<layer- label="My Layer" src="https://example.org/mapml/mylayer" checked></layer->\n')),(0,l.kt)("iframe",{src:"../../../demo/layer-demo.html",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,l.kt)("p",null,"This documentation uses the convention of inline content mostly.  Fetched map content\nfollows similar semantics, except it is parsed with the browser's XML parser and\nso must follow both MapML document conventions as well as\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction"},"XML syntax rules"),"."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("h3",{id:"src"},(0,l.kt)("inlineCode",{parentName:"h3"},"src")),(0,l.kt)("p",null,"Contains the path to a MapML document."),(0,l.kt)("h3",{id:"checked"},(0,l.kt)("inlineCode",{parentName:"h3"},"checked")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer- checked>")," attribute and property is boolean. When present,\nthe checked property value is taken to be 'true'; when not present, the property\nvalue is 'false'.  Beware that it is the ",(0,l.kt)("em",{parentName:"p"},"presence")," of the attribute that makes it\ntrue, not the value of the attribute. For example, the attribute ",(0,l.kt)("inlineCode",{parentName:"p"},'checked="false"'),"\nactually turns out to be checked,\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes"},"as described by MDN Web docs"),"."),(0,l.kt)("h3",{id:"hidden"},(0,l.kt)("inlineCode",{parentName:"h3"},"hidden")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<layer- hidden>")," attribute and property is boolean. When present,\nthe layer is hidden in the layer control."),(0,l.kt)("h3",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h3"},"label")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," attribute is used by inline content as the displayed text label of the\nlayer in the layer control.  In fetched content, the ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," attribute is ignored,\nand the fetched ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-title>")," element is used."))}m.isMDXComponent=!0}}]);