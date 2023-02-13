---
id: installation
title: Installation
---

## Installer les éléments personnalisés `<mapml-viewer>`.

### Exigences

Pour installer les éléments `<mapml-viewer>` dans votre projet de site Web, vous devez utiliser Node Package Manager (npm). Pour ce faire, vous devez installer [node.js](https://nodejs.org/en/download/). Le gestionnaire npm devrait être installé par les installateurs liés. Vous pouvez maintenant obtenir la version la plus récente des éléments personnalisés `<mapml-viewer>`, en les installant dans le répertoire node_modules du répertoire de votre site Web à l’aide des commandes suivantes :

```bash
$ cd ../test

$ npm install @maps4html/web-map-custom-element

+ @maps4html/web-map-custom-element@0.8.3
added 1 package from 2 contributors and audited 1 package in 1.605s
found 0 vulnerabilities

$
```

Une fois l’installation terminée, le sous-répertoire node_modules/@maps4html/web-map-custom-element sera créé, lequel contient un dossier `dist` avec les fichiers JavaScript, CSS et HTML requis pour prendre en charge les éléments `<mapml-viewer>`.

#### Ajouter le script à une page Web 

Ajoutez ce qui suit à l’élément `<head>` de votre code HTML :

```html
<script type="module" src="./node_modules/@maps4html/web-map-custom-element/dist/mapml-viewer.js"></script>
```

Vous pouvez maintenant utiliser dans vos pages Web les éléments `<mapml-viewer>` et `<layer->` ainsi que les autres éléments décrits dans le présent document.

