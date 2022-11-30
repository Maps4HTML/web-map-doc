---
id: layer-api
title: "HTMLLayerElement"
slug: /api/layer-api
---

# HTMLLayerElement

## Properties

### checked

`HTMLLayerElement.checked` is a boolean read/write value that turns the layer on and off,
and reflects the checked attribute. The checked state is reflected in the layer 
control user interface for the layer via a checkbox next to the layer name.  The 
checked property can be used to programatically change the checked state of the layer.
The checked property can't be changed if the disabled property is set.

To set the checked state of a layer to on:

```js
let layer = document.querySelector('layer-');
layer.checked = true; // valid values are true | false
```

To read the checked state of the layer:

```js
let layer = document.querySelector('layer-');
let isChecked = layer.checked;
```
---

### hidden
HTMLLayerElement.hidden is a boolean  read/write value that hides or unhides the
layer in the layer control only.  The hidden state has no bearing on the presence
of layer content on the map, it only affects the layer presence layer control. 
This can be useful for managing short-lived layers, such as search results, to the map without 
forcing the user to manage the layer state, which is done by your application.
It can also be useful for managing a permanent base layer without cluttering the
user interface.

To set/update whether the layer is "hidden":

```js
let layer = document.querySelector('layer-');
layer.hidden = true; // valid values are true | false
```

To get the `<layer->`'s hidden value:

```js
let layer = document.querySelector('layer-');
let isHidden = layer.hidden;
```
---

### disabled
HTMLLayerElement.disabled provides READ-ONLY access to the disabled state of the
layer.  A layer becomes disabled if its contents are not rendered, either by being
completely outside the current map extent or by having an error associated to the
layer processing, such as being in a projection that is incompatible with the
projection of the map. When a layer is disabled, the user can't interact with it
in the layer control, and it will not be visible in the map viewport.  If a layer
becomes not-disabled, through manipulation of the map, for example, the layer
will become interactable in the layer control, and should be visible in the 
map viewport.
---

HTMLLayerElement.label provides read/write access to the label used in the layer control for
the layer.

To set/update the `<layer->`'s label:

:::caution
Needs To Be Implemented, Currently doesn't update the label in layer controls
:::

```js
let layer = document.querySelector('layer-');
layer.label = "New Title";
```

To get the `<layer->`'s label value:

```js
let layer = document.querySelector('layer-');
let label = layer.label;
```
---
### src
HTMLLayerElement.src reflects the src HTML attribute, and specifies the URL of the
MapML document for the layer.  The src property may be undefined if the layer
contains inline content.  If the src property returns a value, any inline content 
will be ignored.
To set/update the `<layer->`'s src:

```js
let layer = document.querySelector('layer-');
layer.src = "https://example.org";
```

To get the `<layer->`'s src value (URL):

```js
let layer = document.querySelector('layer-');
let url = layer.src;
```
---
### opacity
HTMLLayerElement.opacity read/write access to the opacity % value, reflected in
the layer control opacity input slider control.

To set/update the `<layer->`'s opacity:

```js
let layer = document.querySelector('layer-');
layer.opacity = 0.5; // valid values from 0 to 1
```

To get the `<layer->`'s opacity value:

```js
let layer = document.querySelector('layer-');
let opacity = layer.opacity;
```

---
## Methods

### focus()
HTMLLayerElement.focus() Zoom to the layer's extent. Note: this method is mis-named. It will
be renamed, per [this issue](https://github.com/Maps4HTML/Web-Map-Custom-Element/issues/587).        


To fit the layer's extent in the map as much as possible:

```js
let layer = document.querySelector('layer-');
layer.focus();
```
---

## Events

| Event name      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
| changestyle     | Fired before the layer changes src due to user selecting alternate style in layer control |
| changeprojection | Fired before the layer changes projection due to its declared projection being not equal to that of the map |
| extentload | Fired when the metadata for a layer has loaded, but before loading tiles, features and other content |
---
