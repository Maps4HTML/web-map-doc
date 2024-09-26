"use strict";(self.webpackChunkmapml_viewer_doc=self.webpackChunkmapml_viewer_doc||[]).push([[7733],{2317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const s={id:"building",title:"Building from source"},r=void 0,a={id:"building",title:"Building from source",description:"Build the project from source code",source:"@site/docs/building.md",sourceDirName:".",slug:"/building",permalink:"/web-map-doc/docs/building",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"building",title:"Building from source"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/web-map-doc/docs/installation"},next:{title:"<mapml-viewer>",permalink:"/web-map-doc/docs/elements/mapml-viewer/"}},l={},d=[{value:"Build the project from source code",id:"build-the-project-from-source-code",level:2}];function c(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"build-the-project-from-source-code",children:"Build the project from source code"}),"\n",(0,i.jsx)(n.p,{children:"As an alternative to installing a published version of the library with npm, you may wish to build the latest changes from the project from a clone of the source code. You will first require a working installation of node.js and npm."}),"\n",(0,i.jsx)(n.p,{children:"Clone the project using git:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ git clone https://github.com/Maps4HTML/MapML.js.git MapML.js\nCloning into 'MapML.js'...\nremote: Enumerating objects: 23005, done.\nremote: Counting objects: 100% (959/959), done.\nremote: Compressing objects: 100% (472/472), done.\nremote: Total 23005 (delta 602), reused 746 (delta 473), pack-reused 22046\nReceiving objects: 100% (23005/23005), 92.76 MiB | 34.93 MiB/s, done.\nResolving deltas: 100% (8424/8424), done.\nUpdating files: 100% (217/217), done.\n\n$\n"})}),"\n",(0,i.jsx)(n.p,{children:'Change directories, into the cloned directory and run "npm install" to install the project\'s development dependencies:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js (main)\n$ cd MapML.js\n$ npm install --legacy-peer-deps\n...\nadded 976 packages from 513 contributors and audited 978 packages in 33.576s\n\nprushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js (main)\n$\n"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, build the project from source with "grunt", which should have been installed by npm in the previous step:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ grunt default\nRunning "clean:dist" (clean) task\n>> 1 path cleaned.\n\nRunning "copy:main" (copy) task\nMODIFYING:  node_modules/leaflet/dist/leaflet-src.js\nMODIFYING:  node_modules/proj4/dist/proj4-src.js\nPATCHING:  node_modules/proj4leaflet/src/proj4leaflet.js\nMODIFYING:  node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.js\nMODIFYING:  index.html\nCopied 12 files\n\nRunning "copy:images" (copy) task\nCopied 5 files\n\nRunning "jshint:files" (jshint) task\n>> 30 files lint free.\n\nRunning "rollup:main" (rollup) task\n\nRunning "uglify:dist" (uglify) task\n>> 1 file created 259.75 kB \u0393\xe5\xc6 125.97 kB\n\nDone.\n\nprushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js (main)\n$\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As reported by the last command, you should now have a folder named 'dist' in your project directory, containing the build artifacts that are necessary to create Web pages containing maps. You can copy the ",(0,i.jsx)(n.code,{children:"dist"})," folder into your Web site, where you create HTML pages that refer to the root JavaScript module that encompasses the ",(0,i.jsx)(n.code,{children:"<mapml-viewer>"})," custom elements. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js/mysite (main)\n$ mkdir mysite\n$ cp -r dist mysite\n$ cd mysite\n$ cat > index.html << EOF\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1">\n    <title>index.html</title>\n    <script type="module" src="dist/mapml.js"><\/script>\n    <style>\n      html,body {height: 100%;}\n      * {padding: 0;margin: 0;padding: 0;}\n      mapml-viewer:defined {max-width: 100%;width: 100%;height: 100%;border: none;vertical-align: middle;}\n    </style>\n  </head>\n  <body>\n    <mapml-viewer projection="CBMTILE" zoom="2" lat="45" lon="-90" controls>\n      <layer- label="Canada Base Map" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></layer->\n    </mapml-viewer>\n  </body>\n</html>\nEOF\nprushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js/mysite (main)\n$ \n'})}),"\n",(0,i.jsx)(n.p,{children:"You can serve your mysite directory with any Web server. If you load index.html in a Web browser, you should see a full-size interactive Web map of Canada."})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);