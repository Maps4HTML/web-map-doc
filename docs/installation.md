---
id: installation
title: Installation
---

## Quick start

### Import the `<mapml-viewer>` component

```html
<!-- Import the component from the unpkg CDN -->
<script type="module" src="https://unpkg.com/@maps4html/web-map-custom-element@latest/dist/mapml-viewer.js"></script>

<!-- Use the custom mapping elements in your web pages like any other standard HTML element -->
<mapml-viewer projection="OSMTILE" zoom="0" lat="0.0" lon="0.0" controls>
  <layer- label="OpenStreetMap" src="https://geogratis.gc.ca/mapml/en/osmtile/osm/" checked></layer->
</mapml-viewer>
```

---

## Download `<mapml-viewer>` suite

| Version | Description                                 |
|---------|---------------------------------------------|
| [master](https://github.com/Maps4HTML/Web-Map-Custom-Element/archive/master.zip)  | Latest version developed on `master` branch, needs to be built, using the [steps to clone the repository](/web-map-doc/docs/installation#clone-mapml-viewer-repository) |
| [v0.8.0](https://github.com/Maps4HTML/Web-Map-Custom-Element/archive/v0.8.0.zip)  | Latest zip release                          |

### Using a downloaded version

#### Extract the zip file

Extract the zip file downloaded from the links above, in there you will find many files, the following are needed for full functionality:

- layer.js
- leaflet-src.js
- leaflet.css
- leaflet.fullscreen.css
- Leaflet.fullscreen.js
- map-area.js
- mapml-viewer.js
- mapml.css
- mapml.min.js
- proj4-src.js
- proj4leaflet.js

#### Add the script to a Web page

Copy/move these files to your webpage's directory and add the following to the `<head>` of your HTML code:

```html
<script type="module" src="path/to/mapml-viewer.js"></script>
```

You can now use `<mapml-viewer>`, `<layer->` and the other elements that come in the `<mapml-viewer>` element suite on your webpages.

---

## Clone `<mapml-viewer>` repository

An alternative to downloading the .zip file is to clone the github repository. This option allows you to make any modifications and view the source code more easily.

### Requirements

- [Node.js](https://nodejs.org/en/download/)

Run the following commands in bash:

```bash
git clone https://github.com/Maps4HTML/Web-Map-Custom-Element
```

```bash
cd Web-Map-Custom-Element #enters root of repository
npm install               #installs dependencies
npm install -g grunt-cli  #installs grunt command line tool
grunt clean copy rollup   #builds mapml
```

After the build is complete a `dist` folder will be created with the contents.
See [Add the script to a Web page](/web-map-doc/docs/installation#add-the-script-to-a-web-page) on how to use the contents.
