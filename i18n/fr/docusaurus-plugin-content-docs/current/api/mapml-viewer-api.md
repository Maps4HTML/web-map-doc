---
id: mapml-viewer-api
title: "HTMLMapmlViewerElement"
slug: /api/mapml-viewer-api
---

# HTMLMapmlViewerElement

The HTMLMapmlViewerElement interface represents the `<mapml-viewer>` element.

## Properties


| Property name      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| [controls](#controls)     	| Turns native map controls on or off. Reflects the controls attribute.    	|
| [controlslist](#controlslist) 	| Allows to change the set of native controls. Reflects the controlslist attribute. 	|
| [extent](#extent)       	| Returns the extent of the current map view. Read only.           	|
| [lat](#lat)          	| Get the map's latitude. Reflects the lat attribute. Read only.        	|
| [lon](#lon)          	| Get the map's longitude. Reflects the lon attribute. Read only.        	|
| [projection](#projection)   	| The map's projection. Reflects the projection attribute.       	|
| [zoom](#zoom)   	| The map's zoom level. Reflects the zoom attribute.      	|

### controls

To add controls to the map:
```js
let map = document.querySelector('mapml-viewer');
map.controls = true; // or false to remove controls
```

To check whether the map has controls toggled on or off:
```js
let map = document.querySelector('mapml-viewer');
let controlsAdded = map.controls;
```

---

### controlslist

To set the controlslist attribute:
```js
let map = document.querySelector('mapml-viewer');
map.controlslist = "noreload"; // values can be noreload | nofullscreen | nozoom | nolayer
```

To get the value of the controlslist:
```js
let map = document.querySelector('mapml-viewer');
let controlsList = map.controlslist;
```

---

### extent

To get the map's extent:

```js
let map = document.querySelector('mapml-viewer');
let extent = map.extent;
```
<details>
<summary>View Sample Extent</summary>

```js
/**
*extent = 
*  {
*    {
*      "topLeft": {
*        "tcrs": [
*          {
*            "horizontal": 906.7586206896551,
*            "vertical": 981.7241379310345
*          },
*          ...
*        ],
*        "tilematrix": [
*          {
*            "horizontal": 3.5420258620689653,
*            "vertical": 3.8348599137931036
*          },
*          ...
*        ],
*        "gcrs": {
*          "horizontal": -93.05456518322721,
*          "vertical": 63.783997873304855
*        },
*        "pcrs": {
*          "horizontal": 131686.24163915217,
*          "vertical": 1646487.1729743406
*        }
*      },
*      "bottomRight": {
*        "tcrs": [
*          {
*            "horizontal": 914.9655172413793,
*            "vertical": 1015.5172413793102
*          },
*          ...
*        ],
*        "tilematrix": [
*          {
*            "horizontal": 3.574084051724138,
*            "vertical": 3.9668642241379306
*          },
*          ...
*        ],
*        "gcrs": {
*          "horizontal": -85.62509797700041,
*          "vertical": 52.14641630380798
*        },
*        "pcrs": {
*          "horizontal": 446541.0380154103,
*          "vertical": 350026.2467191592
*        }
*      },
*      "projection": "CBMTILE",
*      "zoom": {
*        "minZoom": 0,
*        "maxZoom": 25
*      }
*    }
*  }
*/
```
</details>

---

### lat

To set the latitude:

:::caution
[Needs to be implemented](https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/588), currently doesn't pan the map on changes
:::

```js
let map = document.querySelector('mapml-viewer');
map.lat = 21.4; // if it's an invalid value, nothing happens
```

To get the latitude:
```js
let map = document.querySelector('mapml-viewer');
let latitude = map.lat;
```

---

### lon

To set the longitude:

:::caution
[Needs to be implemented](https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/588), currently doesn't pan the map on changes
:::

```js
let map = document.querySelector('mapml-viewer');
map.lon = 21.4; // if it's an invalid value, nothing happens
```

To get the longitude:
```js
let map = document.querySelector('mapml-viewer');
let longitude = map.lon;
```

---

### projection

To set/update the projection:

```js
let map = document.querySelector('mapml-viewer');
map.projection = "CBMTILE"; // if it's an invalid/undefined projection, nothing happens
```

To get the projection:
```js
let map = document.querySelector('mapml-viewer');
let projection = map.projection;
```

---

### zoom

To set the zoom:

:::caution
[Needs to be implemented](https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/588), currently doesn't zoom the map on changes
:::

```js
let map = document.querySelector('mapml-viewer');
map.zoom = 3; // if it's an invalid value, nothing happens
```

To get the longitude:
```js
let map = document.querySelector('mapml-viewer');
let zoom = map.zoom;
```

---

## Methods

| Method                   	| Description                                                        	|
|--------------------------	|----------------------------------------------------------------------	|
| [back()](#back)                   	| Navigates back one state in the map's movement history.                         	|
| [forward()](#forward)                	| Navigates forward in the map's panning history.                      	|
| [reload()](#reload)                 	| Clear the map's panning history and return to the starting location. 	|
| [toggleDebug()](#toggledebug)            	| Toggle the debug functionality of the map.                           	|
| [viewSource()](#viewsource)             	| View the source of the map.                                          	|
| [defineCustomProjection()](../api/custom-projections) 	| Define a [custom projection](../api/custom-projections) for use by the page.                                       	|
| [zoomTo(lat, lon, zoom)](#zoomtolat-lon-zoom) | Fly or pan the map to a (new) location and zoom level.|


### back()

To go back in the map's history:
```js
let map = document.querySelector('mapml-viewer');
map.back();
```

---

### forward()

To go forward in the map's history:
```js
let map = document.querySelector('mapml-viewer');
map.forward();
```

---

### reload()

To clear the map's history and return to the initial location:
```js
let map = document.querySelector('mapml-viewer');
map.reload();
```

---

### toggleDebug()

To toggle the map's debug mode:
```js
let map = document.querySelector('mapml-viewer');
map.toggleDebug();
```

---

### viewSource()

To view the map's view source:
```js
let map = document.querySelector('mapml-viewer');
map.viewSource();
```

---

### zoomTo(lat, lon, zoom)

To change the map's center location and zoom level:

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  let map = document.querySelector('mapml-viewer');
  map.zoomTo(crd.latitude,crd.longitude, 17); // hard-coded zoom
  // could calculate a zoom based on accuracy of position
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Events

| Event name      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| layerchange   | Fired when a layer changes src, usually by the user following a link. |
| load          | Fired when all layers have finished loading content |
| click         | Fired when the map receives both mousedown and mouseup events |
| dblclick      | Fired when the user double clicks or taps the map |
| mousemove     | Fired repeatedly as the mouse cursor traverses the map |
| mouseover     | Fired once as the mouse cursor enters the map |
| mouseout      | Fired once as the mouse cursor exits the map |
| mousedown     | Fired when the mouse's primary key is pressed down with cursor over the map |
| mouseup       | Fired when the mouse's primary key is released with cursor over the map |
| movestart     | Fired before the map starts to move / viewport changes |
| move          | Fired repeatedly as the map moves.                           |
| moveend       | Fired after the map stops moving |
| zoomstart     | Fired before the map changes zoom level |
| zoom          | Fired repeatedly as the map changes zoom |
| zoomend       | Fired after the map has changed zoom level |
| preclick      | Fired before a click on the map is triggered.  May not be a primitive. |
| contextmenu   | Fired when user right-clicks or long presses on map. May not be a primitive.|

---
