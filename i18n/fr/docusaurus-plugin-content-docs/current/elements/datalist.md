---
id: datalist
title: "<map-datalist>"
slug: /elements/datalist/
---

L’élément `<map-datalist>` est une extension de l’élément HTML `<datalist>`. Il est l’élément-enfant de `<map-extent>` et est utilisé par l’attribut `list` de l’élément `<map-input>` en liant l’`id` de `<map-datalist>` :

L’élément `<map-datalist>` contient un ou plusieurs éléments `<map-option>`.

<iframe src="../../../demo/map-datalist-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributs

### `id`
Définit l’id de l’élément `<map-datalist>`. Cet id est utilisé par l’attribut `list` de l’élément `<map-input>`, ce qui lui permet d’établir un lien avec datalist.

---

## Éléments-enfants

### `<map-option>`

Cet élément contient les valeurs de datalist. Un élément `<map-datalist>` peut contenir un ou plusieurs éléments `<map-option>`.

#### Attributs

- `value`
  - Cet attribut permet de définir la valeur de l’option datalist.

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément datalist de MapML](https://maps4html.org/MapML-Specification/spec/#the-datalist-element-0) |
| [Élément datalist en HTML](https://html.spec.whatwg.org/dev/form-elements.html#the-datalist-element) |

---

> - [Modifiez le contenu de cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/datalist.md)
> - [Clavardez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
