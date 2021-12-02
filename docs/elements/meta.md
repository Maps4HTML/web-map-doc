---
id: meta
title: "<map-meta>: The metadata element"
slug: /elements/meta
---

The `<map-meta>` element is an extended HTML `meta` element, for use in Web 
maps.

<!-- demo / example -->


## Attributes

### `name`

The `name` attribute identifies the type of metadata that is being set. Possible
values of `name` related to maps include:

| Name          | Description                                          	  |
|--------------	|--------------------------------------------------------	|
| projection    | Set the projection for the document |
| extent        | Define the bounds of the document in terms of corner position keywords and axis names, potentially combined with a zoom value if necessary (depending on coordinate system). |
| cs            | Identifies the default coordinate reference system of coordinate strings found in the document. |
| zoom          | Specify the zoom range min, max and default zoom value for displaying the document contents. The 'native' zoom range of [templated map content](link#tref) is specified by the min/max attributes of associated [zoom inputs](input#type).  If templated content is not described by associated zoom input min/max/value attributes, the values specified in a `<map-meta name=zoom>` will be used as fallback, if it exists.  If no `<map-meta name=zoom>` exists, the corresponding min/max values from the projection will be used. |

---
### `content`

| `name`          | `content` value                                          	  |
|--------------	|--------------------------------------------------------	|
| projection    | A case-sensitive [projection name](mapml-viewer#projection), or a [custom projection name](../api/custom-projections#details) |
| extent        | \(\(_[position keyword](input#position)_\)-\(_[axis name\(input#axis)_\)=\(_axis value_\)\(,\)\)4\(,\)\(zoom=\(_zoom value_\)\)0,1 |
| cs            | A case-sensitive [coordinate system abbreviation](input#units). |
| zoom          | (min=_minimum zoom value_,max=_maximum zoom value_,)(value=_current zoom value_) |

---

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| [Content categories](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories) | [Metadata content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#metadata_content) |
| Permitted content | None, it is an [empty element](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element).  |
| Tag omission | While the HTML `<meta>` element is a void element, the polyfill `<map-link>` must have an end tag. |
| Permitted parents | Inline: the `<layer->` element. In a MapML document: the `<map-head>` element. |
| Implicit ARIA role   | [No corresponding role](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role) |
| Permitted ARIA roles | No role permitted |
| DOM interface | [HTMLMetaElement extension](api/HTMLMetaElement) |

---

## Examples

```html
  <layer- label="Favourite Restaurant" checked>
    <map-meta name="projection" content="OSMTILE"></map-meta>
    <map-meta name="zoom" content="min=0,max=22,value=3" ></map-meta>
    <map-meta name="cs" content="gcrs" ></map-meta>
    <map-meta name="extent" content="top-left-easting=-8433179, top-left-northing=5689316, bottom-right-easting=-8420968, bottom-right-northing=5683139"></map-meta>
    <map-feature>
      <map-featurecaption>Big Daddy's Crab Shack</map-featurecaption>
        <map-geometry>
            <map-point>
              <map-coordinates>-75.690276 45.41868</map-coordinates>
            </map-point>
        </map-geometry>
    </map-feature>
  </layer->
```

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [Map Markup Language](https://maps4html.org/MapML/spec/#the-meta-element-0) |
| [HTML meta element](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element) |
---

## Requirements

---

## See Also

---


