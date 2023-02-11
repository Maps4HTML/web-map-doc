---
id: select
title: "<map-select>"
slug: /elements/select/
---

L’élément `<map-select>` est une extension de l’élément HTML `<select>`. Il est utilisé comme enfant de l’élément `<map-extent>`. L’élément `<map-select>` déclare une variable avec des éléments prédéfinis `<map-option>’s`, lesquels sont sélectionnés dans le contrôle des couches et utilisés par le polyfill.

L’élément `<map-select>` contient un ou plusieurs éléments `<map-option>`.

<iframe src="../../../demo/map-select-demo/" title="Démo en MapML" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

:::tip

Pour visualiser les données selon différents horodatages, modifiez l’option `<map-select>` dans le contrôle des couches.

:::

## Attributs 

### `name`
Définit le nom de la variable créée par l’entrée. La variable peut ensuite être référencée par le modèle URL `<map-link>` [tref attribute](../link#tref), à l’aide de la notation de référence de la variable `{name}`. 
 


---

### `id`
Définit l’ID de l’élément `<map-select>`, lequel indique l’élément sélectionné dans le document actuel.

---

## Éléments enfants 

### `<map-option>`

Cet élément contient les options de l’élément `<map-select>`. Un élément `<map-select>` peut contenir un ou plusieurs éléments `<map-option>`.

---

## Spécifications

| Spécification                                                |
|--------------------------------------------------------------|
| [Élément MapML « style »](https://maps4html.org/MapML/spec/#the-select-element-0) |
| [Élément HTML « style »](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element) |

---

> - [Modifier cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/select.md)
> - [Discutez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
