---
id: features
title: Extension Features 
slug: /extension/features
---

There are several additional requirements that are addressed by the extension.

![Extension popup](../assets/img/render-mapml.png)

### Localization

By default, the extension uses the browser's locale to display any `<mapml-viewer>` UI in the user's locale. Note that if the UI is not localized to your browser's language, it is likely because there currently exists no translation of the UI strings for your locale.  Localization contributions are welcome.  Languages that are available at the time of writing are english, french and swedish.

### Feature Indexing

When turned on through the extension, enables a square in the middle of the map to enable a keyboard index menu of features located inside the square. 

![Feature Index Example](../assets/img/feature-index.png)

### Announce Move and Zoom

When toggled through the extension, announces the map movement and zoom through screen readers.

### Render MapML resources

When turned on through the extension popup (it is on by default as shown above, but can be turned off), the extension enables the rendering of map documents that have no host document, just as browsers can render image resources (image/*) that have no host document, by synthesizing a host document at run time.  The feature will recognize documents that are served to a browser tab (a top level browsing context) that are served with the "text/mapml" or "application/xml" Content-Type header. In the latter case, the extension will "sniff" for a root `<mapml- xmlns="https://www.w3.org/1999/xhtml">` element.

### Set a coordinate system for copy operations

By default, the coordinate system (cs) for copying extent is PCRS, and the cs for copying location is GCRS. When changed to another cs through the extension, the cs will be set to the selected cs for the following copy operations.

## Requirements

[Report problems with these requirements on GitHub](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/new?title=-SUMMARIZE+THE+PROBLEM-&body=-DESCRIBE+THE+PROBLEM-)

<p><b><span class="requirement">requirement</span>
<span class="enhancement">enhancement</span>
<span class="impractical">impractical</span>
<span class="undecided">undecided</span>
<span class="discussion">under discussion</span></b></p>

|  | Spec | Viewer | API |
|:---------------------------------------------------------------------------------|:------: |:-----: |:---: |
| [**The GeoWeb - proposed Epic**](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/172) |  |  |  |
| <div class="discussion">[Enable federation via links](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/19)</div> | full | full |  |
| [**Client-side Mapping API Capabilities (6.0)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis) |  |  |  |
| <div class="discussion">[Create, initialise, and display a map from a map document resource](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/259)</div> | full | full |  |

---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/extension/features.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)
