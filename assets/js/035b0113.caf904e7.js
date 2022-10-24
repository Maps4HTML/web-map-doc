"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[3294],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,h=c["".concat(o,".").concat(u)]||c[u]||s[u]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3120:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={id:"map-a",title:"<map-a>",slug:"/other-elements/map-a/"},o=void 0,m={unversionedId:"elements/map-a",id:"elements/map-a",title:"<map-a>",description:"The `` element is a proposal to extend the Web to include links between maps and locations.",source:"@site/docs/elements/map-a.md",sourceDirName:"elements",slug:"/other-elements/map-a/",permalink:"/web-map-doc/docs/other-elements/map-a/",tags:[],version:"current",frontMatter:{id:"map-a",title:"<map-a>",slug:"/other-elements/map-a/"},sidebar:"sidebar",previous:{title:"<map-span>",permalink:"/web-map-doc/docs/other-elements/span/"},next:{title:"<map-style>",permalink:"/web-map-doc/docs/elements/style/"}},d=[{value:"Attributes",id:"attributes",children:[{value:"<code>href</code>",id:"href",children:[],level:3},{value:"<code>target</code>",id:"target",children:[],level:3},{value:"<code>type</code>",id:"type",children:[],level:3},{value:"<code>inplace</code>",id:"inplace",children:[],level:3}],level:2},{value:"Target Behavior for <code>text/mapml</code>",id:"target-behavior-for-textmapml",children:[],level:2},{value:"Target Behavior for <code>text/html</code>",id:"target-behavior-for-texthtml",children:[],level:2},{value:"Location fragments",id:"location-fragments",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Styling Linked Features",id:"styling-linked-features",children:[],level:3},{value:"Wrapping a Feature Type + Location Fragment",id:"wrapping-a-feature-type--location-fragment",children:[],level:3},{value:"Wrapping a point coordinate with <code>target=&quot;_blank&quot;</code>",id:"wrapping-a-point-coordinate-with-target_blank",children:[],level:3},{value:"Nested <code>&lt;map-a&gt;</code> definition and behavior",id:"nested-map-a-definition-and-behavior",children:[],level:3}],level:2},{value:"Specifications",id:"specifications",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2}],s={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-a>")," element is a proposal to extend the Web to include links between maps and locations.\nThis element allows you to wrap parts of coordinates or entire geometries, making a link out of the location/area that is wrapped. When a feature geometry or geometry part is\nwrapped in a ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-a>"),' element, it creates a blue outline that is 1 pixel wide around the feature (by default), that lets the user know it\'s a "linked feature".'),(0,l.kt)("iframe",{src:"../../../demo/map-a-demo/",title:"MapML Demo",height:"410",width:"100%",scrolling:"no",frameBorder:"0"}),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("h3",{id:"href"},(0,l.kt)("inlineCode",{parentName:"h3"},"href")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The URL that the wrapped location points to. Note - If the ",(0,l.kt)("inlineCode",{parentName:"li"},"type")," of the ",(0,l.kt)("inlineCode",{parentName:"li"},"<map-a>")," is text/mapml\nyou can provide fragments, more on fragments below.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"target"},(0,l.kt)("inlineCode",{parentName:"h3"},"target")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This is where the linked URL will be displayed. See table below for more details."),(0,l.kt)("li",{parentName:"ul"},"Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"_self"),", in the absence of a valid value.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This is the mime type of the linked URL's format. Options are ",(0,l.kt)("inlineCode",{parentName:"li"},"text/html")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"text/mapml"),"."),(0,l.kt)("li",{parentName:"ul"},"Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"text/mapml"),", in the absence of a valid type value.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"inplace"},(0,l.kt)("inlineCode",{parentName:"h3"},"inplace")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"inplace")," attribute is a boolean attribute - ",(0,l.kt)("inlineCode",{parentName:"li"},'<map-a inplace href="..."><map-a>')),(0,l.kt)("li",{parentName:"ul"},"When present, the default view-changing behavior is overridden and the map view does not change.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"target-behavior-for-textmapml"},"Target Behavior for ",(0,l.kt)("inlineCode",{parentName:"h2"},"text/mapml")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Target Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Behavior"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_self"),(0,l.kt)("td",{parentName:"tr",align:null},"Replaces the current layer with the linked URL layer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_blank"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds the linked URL layer to the map.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_parent"),(0,l.kt)("td",{parentName:"tr",align:null},"Replace all the layers with the linked URL layer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_top"),(0,l.kt)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"target-behavior-for-texthtml"},"Target Behavior for ",(0,l.kt)("inlineCode",{parentName:"h2"},"text/html")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Target Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Behavior"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_self"),(0,l.kt)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_blank"),(0,l.kt)("td",{parentName:"tr",align:null},"Open the linked URL in a new tab.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_parent"),(0,l.kt)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_top"),(0,l.kt)("td",{parentName:"tr",align:null},"Navigate the webpage to the linked URL.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"location-fragments"},"Location fragments"),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," attribute's value is ",(0,l.kt)("inlineCode",{parentName:"p"},"text/mapml"),", you have the ability add a location fragment\nto the URL. This will pan & zoom the map to the given location."),(0,l.kt)("p",null,"Fragments are in the following format ",(0,l.kt)("inlineCode",{parentName:"p"},"#zoom, longitude, latitude"),"."),(0,l.kt)("p",null,"URL's solely defined in terms of location fragments pan and zoom the map to the given location regardless of the target value.\ni.e. ",(0,l.kt)("inlineCode",{parentName:"p"},'<map-a href="#1, 20, 30">...</map-a>')," will pan to latitude: 30, longitude: 20 and zoom to level 1."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"styling-linked-features"},"Styling Linked Features"),(0,l.kt)("p",null,"To style linked features simply target the ",(0,l.kt)("inlineCode",{parentName:"p"},"map-a")," class in your CSS, once a link is clicked you can target the\n",(0,l.kt)("inlineCode",{parentName:"p"},"map-a-visited")," class. See the example below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<layer->\n  <map-style>\n    .map-a {\n      stroke: red;\n    }\n    .map-a-visited {\n      stroke: green;\n    }\n  </map-style>\n  <map-feature>\n    <map-properties>\n      <h1>Basic</h1>\n    </map-properties>\n    <map-geometry>\n      <map-a href="../externalMapML.mapml#2,-98,37">\n        <map-polygon>\n          <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192 2771 3106</map-coordinates>\n        </map-polygon>\n      </map-a>\n    </map-geometry>\n  </map-feature>\n</layer->\n')),(0,l.kt)("h3",{id:"wrapping-a-feature-type--location-fragment"},"Wrapping a Feature Type + Location Fragment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<map-feature>\n  <map-properties>\n    <h1>Basic</h1>\n  </map-properties>\n  <map-geometry>\n    <map-a href="../externalMapML.mapml#2,-98,37">\n      <map-polygon>\n        <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192 2771 3106</map-coordinates>\n      </map-polygon>\n    </map-a>\n  </map-geometry>\n</map-feature>\n')),(0,l.kt)("p",null,"This will replace the current layer with the layer within externalMapML.mapml, once it's added the map will then goto\nzoomlevel: 2, longitude: -98, latitude: 37."),(0,l.kt)("h3",{id:"wrapping-a-point-coordinate-with-target_blank"},"Wrapping a point coordinate with ",(0,l.kt)("inlineCode",{parentName:"h3"},'target="_blank"')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<map-feature>\n  <map-properties>\n    <h1>_blank target</h1>\n  </map-properties>\n  <map-geometry>\n    <map-polygon>\n      <map-coordinates>2771 3106 2946 3113 <map-a href="file.mapml" target="_blank"> 2954 3210 </map-a> 2815 3192 2771 3106</map-coordinates>\n    </map-polygon>\n  </map-geometry>\n</map-feature>\n')),(0,l.kt)("p",null,"In this example, a point will be created at (2954, 3210) which, once clicked, adds a new layer to the map."),(0,l.kt)("h3",{id:"nested-map-a-definition-and-behavior"},"Nested ",(0,l.kt)("inlineCode",{parentName:"h3"},"<map-a>")," definition and behavior"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<map-feature>\n  <map-properties>\n    <h1>Advanced Example</h1>\n  </map-properties>\n  <map-geometry>\n    <map-a href="parent.mapml" target="_blank">\n      <map-multipolygon>\n        <map-polygon>\n          <map-coordinates>2771 3106 2946 3113 <map-a href="webpage.html" target="_blank" type="text/mapml"> 2954 3210 </map-a> 2815 3192 2771 3106</map-coordinates>\n        </map-polygon>\n        <map-a href="nested.mapml" target="_top">\n          <map-polygon>\n            <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>\n          </map-polygon>\n        </map-a>\n      </map-multipolygon>\n    </map-a>\n  </map-geometry>\n</map-feature>\n')),(0,l.kt)("p",null,"In this advanced example there are multiple nested ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-a>"),". The simple behavior is, the closest ",(0,l.kt)("inlineCode",{parentName:"p"},"<map-a>")," is the link\nbehavior that the given location/area will adopt."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element"},"HTML a element"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-"},"Report problems with these requirements on GitHub")),(0,l.kt)("p",null,(0,l.kt)("b",null,(0,l.kt)("span",{class:"requirement"},"requirement"),(0,l.kt)("span",{class:"enhancement"},"enhancement"),(0,l.kt)("span",{class:"impractical"},"impractical"),(0,l.kt)("span",{class:"undecided"},"undecided"),(0,l.kt)("span",{class:"discussion"},"under discussion"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"}),(0,l.kt)("th",{parentName:"tr",align:"center"},"Spec"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Viewer"),(0,l.kt)("th",{parentName:"tr",align:"center"},"API"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-vectors"},(0,l.kt)("strong",{parentName:"a"},"Vector features and overlays (5.2)"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"}," Support hyperlinks from markers or vector features (5.2.3)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-locations"},(0,l.kt)("strong",{parentName:"a"},"Interpreting locations and map positions (5.3)"))),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{class:"requirement"},"Select map view from latitude and longitude point\xa0(5.3.1)")),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},"full"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#zoomtolat-lon-zoom"},"full"))))),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/map-a.md"},"Edit this page on ",(0,l.kt)("strong",{parentName:"a"},"Github"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitter.im/Maps4HTML/chat"},"Chat with us on ",(0,l.kt)("strong",{parentName:"a"},"Gitter"))))))}c.isMDXComponent=!0}}]);