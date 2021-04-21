---
id: layer-api
title: <layer-> API
slug: /api/layer-api
---

In this section we'll learn different API methods on the `<layer->`. It allows you to interact with
the layers through JavaScript.

| Method  	| Functionality                                            	|
|---------	|----------------------------------------------------------	|
| [checked](#checked) 	| Setter & getter related to the layer's checked state.    	|
| [focus()](#focus) 	| Method to zoom to the layer's extent.                    	|
| [hidden](#hidden)  	| Setter & getter related to the layer's hidden attribute. 	|
| [label](#label)   	| Setter & getter related to the layer's label.            	|
| [opacity](#opacity) 	| Setter & getter to set the opacity of a layer.           	|
| [src](#src)     	| Setter & getter to a fetched layer's URL.                	|

## Setter & Getters

### checked

To set/update whether the layer is "checked":

```js
<layer->.checked = true; // valid values are true | false
```

To get the `<layer->`'s checked value:

```js
let isChecked = <layer->.checked;
```

---

### hidden

To set/update whether the layer is "hidden":

```js
<layer->.hidden = true; // valid values are true | false
```

To get the `<layer->`'s hidden value:

```js
let isHidden = <layer->.hidden;
```

---

### label

To set/update the `<layer->`'s label:

:::caution
Needs To Be Implemented, Currently doesn't update the label in layer controls
:::

```js
<layer->.label = "New Title";
```

To get the `<layer->`'s label value:

```js
let label = <layer->.label;
```

---

### opacity

To set/update the `<layer->`'s opacity:

```js
<layer->.opacity = 0.5; // valid values from 0 to 1
```

To get the `<layer->`'s opacity value:

```js
let opacity = <layer->.opacity;
```

---

### src

To set/update the `<layer->`'s src:

```js
<layer->.src = "https://example.org";
```

To get the `<layer->`'s src value (URL):

```js
let url = <layer->.src;
```

---

## Methods

### focus()

To fit the layer's extent in the map as much as possible:

```js
<layer->.focus();
```

---