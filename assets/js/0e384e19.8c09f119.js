(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mapml-viewer-bbd58f0cd77ab384a790771d22009401.png"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(116)),i={id:"intro",title:"Introduction",slug:"/"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"The web-map custom element suite provides a Web map viewer 'widget' which is modelled somewhat after the HTML5 ` tag: a fairly simple way to get started publishing Web content of the mapping variety.  If you're familiar with that HTML ` developer and user experience you may find developing with and using the web-map custom element suite familiar.",source:"@site/docs/intro.md",slug:"/",permalink:"/web-map-doc/docs/",version:"current",sidebar:"sidebar",next:{title:"Installation",permalink:"/web-map-doc/docs/installation"}},l=[],p={toc:l};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The web-map custom element suite provides a Web map viewer 'widget' which is modelled somewhat after the HTML5 ",Object(o.b)("inlineCode",{parentName:"p"},"<video>")," tag: a fairly simple way to get started publishing Web content of the mapping variety.  If you're familiar with that HTML ",Object(o.b)("inlineCode",{parentName:"p"},"<video>")," developer and user experience you may find developing with and using the web-map custom element suite familiar."),Object(o.b)("p",null,"For example, markup such as this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="3" lat="62.7" lon="-90.3" controls>\n  <layer- label="CBMT" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></layer->\n  <layer- label="Restaurants" src="demo/restaurants.mapml" checked></layer->\n  <layer- label="Canada\'s Provinces and Territories" src="demo/canada.mapml" checked></layer->\n</mapml-viewer>\n')),Object(o.b)("p",null,"can be used to create a map like this:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"The web-map in action",src:n(165).default})))}s.isMDXComponent=!0}}]);