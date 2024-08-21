---
id: datalist
title: "<map-datalist>"
slug: /elements/datalist/
---

The `<map-datalist>` element is an extension of HTML `<datalist>`. It is a child of the `<map-extent>` element and is used by the `list` attribute of the `<map-input>` element by linking the `id` of `<map-datalist>`:

```html
<map-input name="s" type="hidden" shard="true" list="servers"></map-input>
<map-datalist id="servers">
  <map-option value="a"></map-option>
  <map-option value="b"></map-option>
  <map-option value="c"></map-option>
</map-datalist>
```

The `<map-datalist>` is used alongside the `shard` attribute of `<map-input>`. It can list a set of values that will be used in a round-robin fashion for template variable substitution. This is useful for [domain sharding](https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding) to increase parallelism of tile requests. Read more about it [here](../input/#shard).

The `<map-datalist>` element contains one or more `<map-option>` elements.

<iframe src="../../../demo/map-datalist-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributes

### `id`
Sets the id of the `<map-datalist>` element. This id is used by the `list` attribute of the `<map-input>` element, allowing it to link to the datalist.

<details>
<summary>Click to view an example of the link between &lt;map-datalist&gt; and &lt;map-input&gt;</summary>

``` html
<map-input name="s" type="hidden" shard="true" list="servers"></map-input>
<map-datalist id="servers">
  <map-option value="a"></map-option>
  <map-option value="b"></map-option>
  <map-option value="c"></map-option>
</map-datalist>
```

</details> 


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