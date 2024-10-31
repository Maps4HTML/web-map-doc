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

### extent

Read-only.  Returns the upper left and lower right coordinates of the 
extent's minimum bounding rectangle as an object value.  

```console
> let f = document.querySelector('map-extent')
> console.log(f.extent)
> {topLeft: {…}, bottomRight: {…}, projection: 'CBMTILE'}
```

The extent object is structured as follows:

<details>
<summary>Click to view the extent object</summary>

```js
{
    "projection": "CBMTILE",
    "topLeft": {
        "tcrs": [
            {
                "horizontal": 942.662039991251,
                "vertical": 1029.0945982508472
            },
/* an object with "horizontal" and "vertical" properties for each zoom level in the array */
            {
                "horizontal": 546743983.1949257,
                "vertical": 596874866.9854914
            }
        ],
        "tilematrix": [
            {
                "horizontal": 3.6822735937158244,
                "vertical": 4.019900774417372
            },
/* an object with "horizontal" and "vertical" properties for each zoom level in the array */
            {
                "horizontal": 2135718.6843551784,
                "vertical": 2331542.4491620758
            }
        ],
/* gcrs stands for "geographic coordinate reference system" */
        "gcrs": {
            "horizontal": -75.73195696514524,
            "vertical": 45.40761073808424
        },
/* pcrs stands for "projected coordinate reference system" */
        "pcrs": {
            "horizontal": 1509108.7182317898,
            "vertical": -170864.4342066869
        }
    },
    "bottomRight": {
        "tcrs": [
            {
                "horizontal": 942.7503158533199,
                "vertical": 1029.1828741129164
            },
            {
                "horizontal": 546795183.1949255,
                "vertical": 596926066.9854914
            }
        ],
        "tilematrix": [
            {
                "horizontal": 3.6826184213020308,
                "vertical": 4.0202456020035795
            },
            {
                "horizontal": 2135918.684355178,
                "vertical": 2331742.4491620758
            }
        ],
        "gcrs": {
            "horizontal": -75.67858731979081,
            "vertical": 45.387937810298354
        },
        "pcrs": {
            "horizontal": 1512495.3916717991,
            "vertical": -174251.10764670372
        }
    }
}
```

</details>


---
## Methods

### zoomTo()
`HTMLExtentElement.zoomTo()` Zoom to the sub-layer's extent in the map, at the maximum
zoom level in which the extent fits completely.

```js
let extent = document.querySelector('map-extent');
extent.zoomTo();
```

---

## Events

| Event name      	| Description                                          	|
|--------------	|--------------------------------------------------------	|
|  map-change   | Fired when the `checked` attribute changes state through the layer menu           |
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
