---
id: installation
title: Installation
---

## Install the `<mapml-viewer>` suite of custom elements

### Requirements

To install the `<mapml-viewer>` in your web site project, you use the Node Package Manager (npm), so to get that you must install [node.js](https://nodejs.org/en/download/). npm should be installed by the linked installers.  You can now obtain the latest version of the `<mapml-viewer>` suite of custom elements, by installing it in the node_modules directory of your web site directory, using the following commands:

```bash
$ cd ../test

$ npm install @maps4html/web-map-custom-element

+ @maps4html/web-map-custom-element@0.8.3
added 1 package from 2 contributors and audited 1 package in 1.605s
found 0 vulnerabilities

$
```

Once installation is complete, you will have a node_modules/@maps4html/web-map-custom-element subdirectory, containing a `dist` folder with the required JavaScript, CSS and HTML files to support the `<mapml-viewer>`.  

#### Add the Script to a Web page

Add the following to the `<head>` of your HTML code:

```html
<script type="module" src="./node_modules/@maps4html/web-map-custom-element/dist/mapml-viewer.js"></script>
```

You can now use `<mapml-viewer>`, `<layer->` and the other elements described here on your web pages.

