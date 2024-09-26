---
id: datalist
title: "<map-datalist>"
slug: /elements/datalist/
---

The `<map-datalist>` element is an extension of HTML `<datalist>`. It is a child of the `<map-extent>` element and is used by the `list` attribute of the `<map-input>` element by linking the `id` of `<map-datalist>`:

The `<map-datalist>` element contains one or more `<map-option>` elements.

<iframe src="../../../demo/map-datalist-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributes

### `id`
Sets the id of the `<map-datalist>` element. This id is used by the `list` attribute of the `<map-input>` element, allowing it to link to the datalist.

---

## Child Elements

### `<map-option>`

This element contains the values for the datalist. A `<map-datalist>` element can contain one or more `<map-option>` elements.

#### Attributes

- `value`
  - This allows you to set the value of the the datalist option.

---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML datalist element](https://maps4html.org/MapML-Specification/spec/#the-datalist-element-0) |
| [HTML datalist element](https://html.spec.whatwg.org/dev/form-elements.html#the-datalist-element) |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/datalist.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)