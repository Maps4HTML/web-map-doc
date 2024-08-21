---
id: map-extent-api
title: "HTMLExtentElement"
slug: /api/map-extent-api
---

# HTMLExtentElement

## Properties

### units

The `units` property is read-only, and returns the initial value of the [`units`
content attribute](../elements/extent/#units).

---

### checked

`HTMLExtentElement.checked` is a boolean read/write value that turns the map-extent 
on and off, and reflects the `checked` attribute. The `checked` state is 
reflected in the layer control user interface for the map-extent, if it is not 
in the `hidden` state, via a checkbox next to the map-extent name.  The checked 
property can be used to programatically change the checked state of the extent. 
The checked property can't be changed if the disabled property is set.

To set the checked state of a  map-extent to on:

```js
let extent = document.querySelector('map-extent');
extent.checked = true; // valid values are true | false
```

To read the checked state of the map-extent:

```js
let extent = document.querySelector('map-extent');
let isChecked = extent.checked;
```
---

### hidden

`HTMLExtentElement.hidden` is a boolean  read/write value that hides or unhides the
map-extent in the layer control only.  The `hidden` state has no bearing on the presence
of map-extent content on the map, it only affects the map-extent presence in the
layer control. This can be useful for simplifying the layer control representation
of a single- map-extent containing parent layer without cluttering the user 
interface.

To set/update whether the map-extent is hidden in the layer control:

```js
let extent = document.querySelector('map-extent');
extent.hidden = true; // valid values are true | false
```

To get the `<map-extent>`'s hidden value:

```js
let extent = document.querySelector('map-extent');
let isHidden = extent.hidden;
```
---

### disabled

`HTMLExtentElement.disabled` provides READ-ONLY access to the disabled state of the
map-extent.  A map-extent becomes disabled if its contents are not rendered, 
either by being completely outside the current map-extent's bounds or by having 
an error associated to the map-extent processing, such as being in a projection 
that is incompatible with the projection of the map. When a map-extent is 
disabled, the user can still interact with it in some ways in the layer control, but it will 
not be visible in the map viewport.  If a map-extent becomes enabled, through 
manipulation of the map, for example, the map-extent will become fully interactive
in the layer control, and should be visible in the map viewport (although 
possibly hard to see, depending on `opacity` and feature size, among other 
considerations).

---

### label

`HTMLExtentElement.label` reflects the `label` content attribute, and specifies
a fallback accessible name for the map-extent in the layer control.  If the
`label` content attribute is not supplied, an internationalized variation of
"Sub-Layer" will be returned as the default value.

To set/update the `<map-extent>`'s label:

```js
let extent = document.querySelector('map-extent');
extent.label = "New Accessible Name";
```

To get the `<map-extent>`'s label value:

```js
let extent = document.querySelector('map-extent');
let label = extent.label;
```
---

### opacity
`HTMLExtentElement.opacity` provides read/write access to the `opacity` value, 
and is reflected in the layer control for each map-extent, under "Opacity". If no
`opacity` content attribute is set, setting the `opacity` property will not 
create the attribute, though the opacity of the map-extent on the map and in
the layer control representation (slider input) will be changed.

To set/update the `<map-extent>`'s opacity:

```js
let extent = document.querySelector('map-extent');
extent.opacity = 0.5; // valid values from 0 to 1
```

To get the `<map-extent>`'s opacity value:

```js
let extent = document.querySelector('map-extent');
let opacity = extent.opacity;
```

---
## Methods

---

## Events

| Event name      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
|  |  |
---

## Examples

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [HTMLExtentElement](https://maps4html.org/MapML-Specification/spec/#dom-htmlextentelement) |

---

## Requirements

[Report problems with these requirements on GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">requirement</span>
<span class="enhancement">enhancement</span>
<span class="impractical">impractical</span>
<span class="undecided">undecided</span>
<span class="discussion">under discussion</span></b></p>

|  | Spec | Viewer | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**Properties**](#properties) | full | full | full |
| [**Methods**](#methods) | n/a | n/a | n/a |
| [**Events**](#events) | n/a | n/a | n/a |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/api/extent-api.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)
