---
id: building
title: Construire à partir de la source
---

## Créer le projet à partir du code source 

Plutôt que d’installer la version publiée de la bibliothèque avec npm, vous pouvez apporter les dernières modifications au projet à partir d’un clone du code source. Pour ce faire, vous devez d’abord installer node.js et npm.

Clonez le projet à l’aide du logiciel Git :

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

Changez les répertoires dans le répertoire cloné et exécutez la commande « npm install » pour installer les dépendances relatives au développement du projet :

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

Comme indiqué par la dernière commande, votre répertoire de projet devrait maintenant contenir un dossier intitulé ‘dist’, lequel contient les artéfacts de compilation nécessaires à la création de pages Web contenant des cartes. Vous pouvez copier le dossier `dist` dans votre site Web où vous créez les pages HTML qui renvoient au module JavaScript racine comprenant les éléments personnalisés `<mapml-viewer>`. Par exemple :

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
    <script type="module" src="dist/mapml-viewer.js"></script>
    <style>
      html,body {height: 100%;}
      * {padding: 0;margin: 0;padding: 0;}
      mapml-viewer:defined {max-width: 100%;width: 100%;height: 100%;border: none;vertical-align: middle;}
    </style>
  </head>
  <body>
    <mapml-viewer projection="CBMTILE" zoom="2" lat="45" lon="-90" controls>
      <layer- label="Canada Base Map" src="https://geogratis.gc.ca/mapml/en/cbmtile/cbmt/" checked></layer->
    </mapml-viewer>
  </body>
</html>
EOF
prushfor@DESKTOP-8T9A8T8 MINGW64 ~/Documents/MapML.js/mysite (main)
$ 
```

Vous pouvez gérer votre répertoire « mysite » avec n’importe quel serveur Web. Si vous chargez la page index.html dans un navigateur Web, vous devriez voir une carte Web interactive pleine grandeur du Canada.
