---
id: installation
title: Installation
---

## Install the `<mapml-viewer>` suite of custom elements

### CDN

To include the `<mapml-viewer>` suite of elements on your page, you can add one of the following [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) links to the `<head>` of your HTML code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="jsDelivr" label="jsDelivr">

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/mapml@latest/dist/mapml.js"></script>
```

</TabItem>
<TabItem value="unpkg" label="unpkg">

```html
<script type="module" src="https://unpkg.com/@maps4html/mapml/dist/mapml.js"></script>
```

</TabItem>
</Tabs>

### Node.js / NPM

To install the `<mapml-viewer>` in your web site project, you use the Node Package Manager (npm), so to get that you must install [node.js](https://nodejs.org/en/download/). npm should be installed by the linked installers.  You can now obtain the latest version of the `<mapml-viewer>` suite of custom elements, by installing it in the node_modules directory of your web site directory, using the following commands:

```bash
$ cd ../test

$ npm install @maps4html/mapml

+ @maps4html/mapml
added 1 package from 2 contributors and audited 1 package in 1.605s
found 0 vulnerabilities

$
```

Once installation is complete, you will have a node_modules/@maps4html/mapml subdirectory, containing a `dist` folder with the required JavaScript, CSS and HTML files to support the `<mapml-viewer>`.  

#### Add the Script to a Web page

Add the following to the `<head>` of your HTML code:

```html
<script type="module" src="./node_modules/@maps4html/mapml/dist/mapml.js"></script>
```

You can now use `<mapml-viewer>`, `<layer->` and the other elements described here on your web pages.

