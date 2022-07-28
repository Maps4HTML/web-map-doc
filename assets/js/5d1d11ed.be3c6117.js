"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[8914],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var m=2;m<o;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5326:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],i={id:"properties",title:"<map-properties>",slug:"/elements/properties/"},l=void 0,m={unversionedId:"elements/properties",id:"elements/properties",title:"<map-properties>",description:"A ` element is a child of ` and is used to define the content of the popup associated to a given feature.",source:"@site/docs/elements/properties.md",sourceDirName:"elements",slug:"/elements/properties/",permalink:"/web-map-doc/docs/elements/properties/",tags:[],version:"current",frontMatter:{id:"properties",title:"<map-properties>",slug:"/elements/properties/"},sidebar:"sidebar",previous:{title:"<map-geometry>",permalink:"/web-map-doc/docs/elements/geometry/"},next:{title:"<map-span>",permalink:"/web-map-doc/docs/other-elements/span/"}},c=[{value:"Examples",id:"examples",children:[{value:"Properties Table",id:"properties-table",children:[],level:3}],level:2},{value:"Specifications",id:"specifications",children:[],level:2}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"<map-properties>")," element is a child of ",(0,o.kt)("inlineCode",{parentName:"p"},"<map-feature>")," and is used to define the content of the popup associated to a given feature."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"<map-properties>")," element can contain any HTML Element to describe the feature's content. "),(0,o.kt)("iframe",{src:"../../../demo/map-properties-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"properties-table"},"Properties Table"),(0,o.kt)("p",null,"The following example displays the popup as an HTML ",(0,o.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/tables.html#the-table-element"},"table"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="12" lat="45.42" lon="-75.70">\n  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->\n  <layer- label="Ottawa" checked>\n    <map-meta name="projection" content="OSMTILE"></map-meta>\n    <map-meta name="cs" content="gcrs"></map-meta>\n    <map-feature>\n      <map-featurecaption>Ottawa</map-featurecaption>\n      <map-geometry>\n        <map-point class="ottawa">\n          <map-coordinates>-75.697193 45.421530</map-coordinates>\n        </map-point>\n      </map-geometry>\n      <map-properties>\n        <table>\n          <thead>\n            <tr>\n              <th role="columnheader" scope="col">Property name</th>\n              <th role="columnheader" scope="col">Property value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope="row">Name</th>\n              <td itemprop="amenity">Ottawa</td>\n            </tr>\n            <tr>\n              <th scope="row">Type</th>\n              <td itemprop="name">City</td>\n            </tr>\n            <tr>\n              <th scope="row">Website</th>\n              <td itemprop="website"><a href="https://ottawa.ca/" target="_blank">Ottawa</a></td>\n            </tr>\n          </tbody>\n        </table>\n      </map-properties>\n    </map-feature>\n  </layer->\n</mapml-viewer>\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML/spec/#the-properties-element-0"},"MapML properties element"))))),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/properties.md"},"Edit this page on ",(0,o.kt)("strong",{parentName:"a"},"Github"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,o.kt)("strong",{parentName:"a"},"Gitter"))))))}u.isMDXComponent=!0}}]);