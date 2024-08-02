---
id: datalist
title: "<map-datalist>"
slug: /elements/datalist/
---

L’élément `<map-datalist>` est une extension de l’élément HTML `<datalist>`. Il est l’élément-enfant de `<map-extent>` et est utilisé par l’attribut `list` de l’élément `<map-input>` en liant l’`id` de `<map-datalist>` :

```html
<map-input name="s" type="hidden" shard="true" list="servers"></map-input>
<map-datalist id="servers">
  <map-option value="a"></map-option>
  <map-option value="b"></map-option>
  <map-option value="c"></map-option>
</map-datalist>
```

L’élément `<map-datalist>` est utilisé de concert avec l’attribut `shard` de l’élément `<map-input>`. Il peut répertorier un ensemble de valeurs utilisées à tour de rôle (round robin) comme substitution des variables d’un modèle. Cela s’avère utile avec le [fractionnement de domaines](https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding) pour accroître le parallélisme des requêtes de pavés. Pour en savoir plus, cliquez [here](https://maps4html.org/web-map-doc/docs/elements/input/#shard).

L’élément `<map-datalist>` contient un ou plusieurs éléments `<map-option>`.

<iframe src="../../../demo/map-datalist-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>

## Attributs

### `id`
Définit l’id de l’élément `<map-datalist>`. Cet id est utilisé par l’attribut `list` de l’élément `<map-input>`, ce qui lui permet d’établir un lien avec datalist.

<details>
<summary>Cliquez pour afficher un exemple de lien entre &lt;map-datalist&gt; et &lt;map-input&gt;</summary>

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
| [Élément datalist de MapML](https://maps4html.org/MapML/spec/#the-datalist-element-0) |
| [Élément datalist en HTML](https://html.spec.whatwg.org/dev/form-elements.html#the-datalist-element) |

---

> - [Modifiez le contenu de cette page sur **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/elements/datalist.md)
> - [Clavardez avec nous sur **Gitter**](https://gitter.im/Maps4HTML/chat)
