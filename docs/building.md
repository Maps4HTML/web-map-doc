---
id: building
title: Building from source
---

## Build the project from source code

As an alternative to installing a published version of the library with npm, you may wish to build the latest changes from the project from a clone of the source code. You will first require a working installation of node.js and npm. 

Clone the project using git:

```bash
$ git clone https://github.com/Maps4HTML/MapML.js.git MapML.js
Cloning into 'MapML.js'...
remote: Enumerating objects: 23005, done.
remote: Counting objects: 100% (959/959), done.
remote: Compressing objects: 100% (472/472), done.
remote: Total 23005 (delta 602), reused 746 (delta 473), pack-reused 22046
Receiving objects: 100% (23005/23005), 92.76 MiB | 34.93 MiB/s, done.
Resolving deltas: 100% (8424/8424), done.
Updating files: 100% (217/217), done.

$
```

Change directories, into the cloned directory and run "npm install" to install the project's development dependencies:

```bash
prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js (main)
$ cd MapML.js
$ npm install --legacy-peer-deps
...
added 976 packages from 513 contributors and audited 978 packages in 33.576s

prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js (main)
$
```

Finally, build the project from source with "grunt", which should have been installed by npm in the previous step:

```bash
$ grunt default
Running "clean:dist" (clean) task
>> 1 path cleaned.

Running "copy:main" (copy) task
MODIFYING:  node_modules/leaflet/dist/leaflet-src.js
MODIFYING:  node_modules/proj4/dist/proj4-src.js
PATCHING:  node_modules/proj4leaflet/src/proj4leaflet.js
MODIFYING:  node_modules/@runette/leaflet-fullscreen/dist/Leaflet.fullscreen.js
MODIFYING:  index.html
Copied 12 files

Running "copy:images" (copy) task
Copied 5 files

Running "jshint:files" (jshint) task
>> 30 files lint free.

Running "rollup:main" (rollup) task

Running "uglify:dist" (uglify) task
>> 1 file created 259.75 kB ΓåÆ 125.97 kB

Done.

prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js (main)
$
```

As reported by the last command, you should now have a folder named 'dist' in your project directory, containing the build artifacts that are necessary to create Web pages containing maps. You can copy the `dist` folder into your Web site, where you create HTML pages that refer to the root JavaScript module that encompasses the `<mapml-viewer>` custom elements. For example:

```bash
prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js/mysite (main)
$ mkdir mysite
$ cp -r dist mysite
$ cd mysite
$ cat > index.html << EOF
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>index.html</title>
    <script type="module" src="dist/mapml.js"></script>
    <style>
      html,body {height: 100%;}
      * {padding: 0;margin: 0;padding: 0;}
      mapml-viewer:defined {max-width: 100%;width: 100%;height: 100%;border: none;vertical-align: middle;}
    </style>
  </head>
  <body>
    <mapml-viewer projection="CBMTILE" zoom="2" lat="45" lon="-90" controls>
      <map-layer label="Canada Base Map" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></map-layer>
    </mapml-viewer>
  </body>
</html>
EOF
prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js/mysite (main)
$ 
```

You can serve your mysite directory with any Web server. If you load index.html in a Web browser, you should see a full-size interactive Web map of Canada.
