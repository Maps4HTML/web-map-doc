"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,p(p({ref:t},o),{},{components:a})):n.createElement(k,p({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={id:"style",title:"<map-style>",slug:"/elements/style/"},p=void 0,i={unversionedId:"elements/style",id:"elements/style",title:"<map-style>",description:"The ` element allows map authors to embed CSS into map layers. The CSS can be used to style the geometry of the layer using `, and by setting the class attribute to the child elements of the geometry.",source:"@site/docs/elements/style.md",sourceDirName:"elements",slug:"/elements/style/",permalink:"/web-map-doc/docs/elements/style/",draft:!1,tags:[],version:"current",frontMatter:{id:"style",title:"<map-style>",slug:"/elements/style/"},sidebar:"sidebar",previous:{title:"<map-a>",permalink:"/web-map-doc/docs/other-elements/map-a/"},next:{title:"HTMLMapmlViewerElement",permalink:"/web-map-doc/docs/api/mapml-viewer-api"}},s={},m=[{value:"Examples",id:"examples",level:2},{value:"Styling using <code>&lt;map-span&gt;</code>",id:"styling-using-map-span",level:3},{value:"Specifications",id:"specifications",level:2},{value:"Requirements",id:"requirements",level:2}],o={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<map-style>")," element allows map authors to embed CSS into map layers. The CSS can be used to style the geometry of the layer using ",(0,r.kt)("a",{parentName:"p",href:"../../other-elements/span/"},(0,r.kt)("inlineCode",{parentName:"a"},"<map-span>")),", and by setting the class attribute to the ",(0,r.kt)("a",{parentName:"p",href:"../geometry/#child-elements"},"child elements")," of the geometry."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'All the Demo\'s on the documentation pages contain a "CSS" tab which adds the CSS using the ',(0,r.kt)("inlineCode",{parentName:"p"},"<map-style>")," element dynamically.")),(0,r.kt)("iframe",{src:"../../../demo/map-style-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"styling-using-map-span"},"Styling using ",(0,r.kt)("inlineCode",{parentName:"h3"},"<map-span>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="OSMTILE" zoom="10" lon="-75.7" lat="45.4" controls>\n  <layer- label="OpenStreetMap" src="../data/osm.mapml" checked></layer->\n  <layer- label="Polygon" checked>\n    <map-meta name="projection" content="OSMTILE"></map-meta>\n    <map-feature>\n      <map-featurecaption>Polygon</map-featurecaption>\n      \x3c!-- Setting the geometry coordinates to gcrs, as the default is pcrs --\x3e\n      <map-geometry cs="gcrs">\n        <map-polygon>\n          <map-coordinates>-75.5859375 45.4656690 -75.6813812 45.4533876 -75.6961441 45.4239978 -75.7249832 45.4083331 -75.7792282 45.3772317 -75.7534790 45.3294614 -75.5831909 45.3815724 -75.6024170 45.4273712 -75.5673981 45.4639834 -75.5859375 45.4656690</map-coordinates>\n          <map-coordinates><map-span class="hole">-75.6467062 45.4215881 -75.6889363 45.4049585 -75.6693647 45.3767494 -75.6270640 45.3924229 -75.6467062 45.4215881</map-span></map-coordinates>\n        </map-polygon>\n      </map-geometry>\n      <map-properties><h2>This is a Polygon</h2></map-properties>\n    </map-feature>\n    <map-style>.hole {stroke: #73A9AD;stroke-width: 4px;fill: none;fill-opacity: 1;}</map-style>\n  </layer->\n</mapml-viewer>\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/MapML-Specification/spec/#styling"},"MapML style element"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/#the-style-element"},"HTML style element"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,r.kt)("p",null,(0,r.kt)("b",null,(0,r.kt)("span",{class:"requirement"},"requirement"),(0,r.kt)("span",{class:"enhancement"},"enhancement"),(0,r.kt)("span",{class:"impractical"},"impractical"),(0,r.kt)("span",{class:"undecided"},"undecided"),(0,r.kt)("span",{class:"discussion"},"under discussion"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,r.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-vectors"},(0,r.kt)("strong",{parentName:"a"},"Vector features and overlays (5.2)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"undecided"},"Draw polygons or polylines as stylable, interactive vector graphics (separate from the image tiles) (5.2.2)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-custom-styling"},(0,r.kt)("strong",{parentName:"a"},"Custom styling (5.5)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"undecided"},"Apply custom styling to map markers and vector features (5.5.1)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis-creation"},(0,r.kt)("strong",{parentName:"a"},"Creating maps and map components (6.1)"))),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{class:"undecided"}," Specify the style of a map (6.1.9)")),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"},"full"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/style.md"},"Edit this page on ",(0,r.kt)("strong",{parentName:"a"},"Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,r.kt)("strong",{parentName:"a"},"Gitter"))))))}d.isMDXComponent=!0}}]);