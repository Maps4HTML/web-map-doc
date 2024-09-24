---
id: installation
title: Installation
---

## Installer les éléments personnalisés `<mapml-viewer>`.

### CDN

Pour inclure la suite d'éléments `<mapml-viewer>` dans votre page, vous pouvez ajouter l'un des liens [Content Delivery Network](https://fr.wikipedia.org/wiki/R%C3%A9seau_de_diffusion_de_contenu) suivants au `<head>` de votre code HTML :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="jsDelivr" label="jsDelivr">

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/mapml/dist/mapml.js"></script>
```

</TabItem>
<TabItem value="unpkg" label="unpkg">

```html
<script type="module" src="https://unpkg.com/@maps4html/mapml/dist/mapml.js"></script>
```

</TabItem>
</Tabs>

### Node.js / NPM

Pour installer les éléments `<mapml-viewer>` dans votre projet de site Web, vous devez utiliser Node Package Manager (npm). Pour ce faire, vous devez installer [node.js](https://nodejs.org/en/download/). Le gestionnaire npm devrait être installé par les installateurs liés. Vous pouvez maintenant obtenir la version la plus récente des éléments personnalisés `<mapml-viewer>`, en les installant dans le répertoire node_modules du répertoire de votre site Web à l’aide des commandes suivantes :

```bash
$ cd ../test

$ npm install @maps4html/mapml

+ @maps4html/mapml
added 1 package from 2 contributors and audited 1 package in 1.605s
found 0 vulnerabilities

$
```

Une fois l’installation terminée, le sous-répertoire node_modules/@maps4html/mapml sera créé, lequel contient un dossier `dist` avec les fichiers JavaScript, CSS et HTML requis pour prendre en charge les éléments `<mapml-viewer>`.

#### Ajouter le script à une page Web 

Ajoutez ce qui suit à l’élément `<head>` de votre code HTML :

```html
<script type="module" src="./node_modules/@maps4html/mapml/dist/mapml.js"></script>
```

Vous pouvez maintenant utiliser dans vos pages Web les éléments `<mapml-viewer>` et `<layer->` ainsi que les autres éléments décrits dans le présent document.

