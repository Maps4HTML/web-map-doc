---
id: mapml-viewer-api
title: <mapml-viewer> API
slug: /api/mapml-viewer-api
---

In this section we'll learn different API methods on the `<mapml-viewer>`. It allows you to interact with
the viewer through JavaScript.

<table>
<tr><th>Setters and/or Getters</th><th>Methods</th></tr>
<tr>
<td>

| Method       	| Functionality                                          	|
|--------------	|--------------------------------------------------------	|
| [controls](#controls)     	| Setter & getter related to the controls on the map.    	|
| [controlslist](#controlslist) 	| Setter & getter related to the controlslist attribute. 	|
| [extent](#extent)       	| Returns the extent of the current map view.            	|
| [lat](#lat)          	| Setter & getter related to the map's latitude.         	|
| [lon](#lon)          	| Setter & getter related to the map's longitude.        	|
| [projection](#projection)   	| Setter & getter related to the map's projection.       	|
| [zoom](#zoom)   	| Setter & getter related to the map's zoom level.       	|

</td>
<td>

| Method                   	| Functionality                                                        	|
|--------------------------	|----------------------------------------------------------------------	|
| [back()](#back)                   	| Navigates back in the map's panning history.                         	|
| defineCustomProjection() 	| Visit the [Custom Projections API](../api/custom-projections) for more information.                                       	|
| [forward()](#forward)                	| Navigates forward in the map's panning history.                      	|
| [reload()](#reload)                 	| Clear the map's panning history and return to the starting location. 	|
| [toggleDebug()](#toggledebug)            	| Toggle the debug functionality of the map.                           	|
| [viewSource()](#viewsource)             	| View the source of the map.                                          	|

</td>
</tr>

</table>

## Setters & Getters 

### controls

To set the controls simply:
```js
<mapml-viewer>.controls = true; // or false to remove controls
```

To check whether the map has controls toggled on or off:
```js
let controlsAdded = <mapml-viewer>.controls;
```

---

### controlslist

To set the controlslist attribute:
```js
<mapml-viewer>.controlslist = "noreload"; // values can be noreload | nofullscreen | nozoom | nolayer
```

To get the value of the controlslist:
```js
let controlsList = <mapml-viewer>.controlslist;
```

---

### extent

To get the map's extent:

```js
let extent = <mapml-viewer>.extent;
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

To set the latitude simply:

:::caution
Needs To Be Implemented, Currently doesn't pan the map on changes
:::

```js
<mapml-viewer>.lat = 21.4; // if it's an invalid value, nothing happens
```

To get the latitude:
```js
let latitude = <mapml-viewer>.lat;
```

---

### lon

To set the longitude simply:

:::caution
Needs To Be Implemented, Currently doesn't pan the map on changes
:::

```js
<mapml-viewer>.lon = 21.4; // if it's an invalid value, nothing happens
```

To get the longitude:
```js
let longitude = <mapml-viewer>.lon;
```

---

### projection

To set/update the projection simply:

```js
<mapml-viewer>.projection = "CBMTILE"; // if it's an invalid/undefined projection, nothing happens
```

To get the projection:
```js
let projection = <mapml-viewer>.projection;
```

---

### zoom

To set the zoom simply:

:::caution
Needs To Be Implemented, Currently doesn't zoom the map on changes
:::

```js
<mapml-viewer>.zoom = 3; // if it's an invalid value, nothing happens
```

To get the longitude:
```js
let zoom = <mapml-viewer>.zoom;
```

---

## Methods

### back()

To go back in the map's history:
```js
<mapml-viewer>.back();
```

---

### forward()

To go forward in the map's history:
```js
<mapml-viewer>.forward();
```

---

### reload()

To clear the map's history and return to the initial location:
```js
<mapml-viewer>.reload();
```

---

### toggleDebug()

To toggle the map's debug mode:
```js
<mapml-viewer>.toggleDebug();
```

---

### viewSource()

To view the map's view source:
```js
<mapml-viewer>.viewSource();
```

---



