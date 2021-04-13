---
id: map-a
title: <map-a>
slug: /other-elements/map-a
---

In this section we'll learn about the `<map-a>` element. This element allows you to wrap parts of
coordinates and feature types entirely, changing the interaction of whatever is wrapped.

## Attributes

- `href`
  - The URL that the wrapped location points to. Note - If the `type` of the `<map-a>` is text/mapml
  you can provide fragments, more on fragments below.

- `target`
  - This is where the linked URL will be displayed. See table below for more details.
  - Defaults to `_self`, in the absence of a valid value.

- `type`
  - This is the mime type of the linked URL's format. Options are `text/html` & `text/mapml`.
  - Defaults to `text/mapml`, in the absence of a valid type value.
  

#### Target Behavior for `text/mapml`

| Target Value 	| Behavior                                              	|
|--------------	|-------------------------------------------------------	|
| _self        	| Replaces the current layer with the linked URL layer. 	|
| _blank       	| Adds the linked URL layer to the map.                 	|
| _parent      	| Replace all the layers with the linked URL layer.     	|
| _top         	| Navigate the webpage to the linked URL.               	|

#### Target Behavior for `text/html`

| Target Value 	| Behavior                                	|
|--------------	|-----------------------------------------	|
| _self        	| Navigate the webpage to the linked URL. 	|
| _blank       	| Open the linked URL in a new tab.       	|
| _parent      	| Navigate the webpage to the linked URL. 	|
| _top         	| Navigate the webpage to the linked URL. 	|

#### Location fragments

If the `type` attribute's value is `text/mapml`, you have the ability add a location fragment
to the URL. This will pan & zoom the map to the given location.

Fragments are in the following format `#zoom, longitude, latitude`.

URL's solely defined in terms of location fragments pan and zoom the map to the given location regardless of the target value.
i.e. `<map-a href="#1, 20, 30">...</map-a>` will pan to latitude: 30, longitude: 20 and zoom to level 1.

---

## Examples

#### Wrapping a Feature Type + Location Fragment 

```html
<feature>
  <properties>
    <h1>Basic</h1>
  </properties>
  <geometry>
    <map-a href="../externalMapML.mapml#2,-98,37">
      <polygon>
        <coordinates>2771 3106 2946 3113 2954 3210 2815 3192 2771 3106</coordinates>
      </polygon>
    </map-a>
  </geometry>
</feature>
```

This will replace the current layer with the layer within externalMapML.mapml, once it's added the map will then goto
zoomlevel: 2, longitude: -98, latitude: 37.

#### Wrapping a point coordinate with `target="_blank"` 

```html
<feature>
  <properties>
    <h1>_blank target</h1>
  </properties>
  <geometry>
    <polygon>
      <coordinates>2771 3106 2946 3113 <map-a href="file.mapml" target="_blank"> 2954 3210 </map-a> 2815 3192 2771 3106</coordinates>
    </polygon>
  </geometry>
</feature>
```

In this example, a point will be created at (2954, 3210) which, once clicked, adds a new layer to the map.

#### Nested `<map-a>` definition and behavior

```html
<feature>
  <properties>
    <h1>Advanced Example</h1>
  </properties>
  <geometry>
    <map-a href="parent.mapml" target="_blank">
      <multipolygon>
        <polygon>
          <coordinates>2771 3106 2946 3113 <map-a href="webpage.html" target="_blank" type="text/mapml"> 2954 3210 </map-a> 2815 3192 2771 3106</coordinates>
        </polygon>
        <map-a href="nested.mapml" target="_top">
          <polygon>
            <coordinates>11 11 12 11 12 12 11 12</coordinates>
          </polygon>
        </map-a>
      </multipolygon>
    </map-a>
  </geometry>
</feature>
```
In this advanced example there are multiple nested `<map-a>`. The simple behavior is, the closest `<map-a>` is the link
behavior that the given location/area will adopt.