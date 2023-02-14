---
id: map-caption
title: "<map-caption>"
slug: /elements/map-caption/
---

The `<map-caption>` element is a child of `<mapml-viewer>` and is used to define an invisible caption that is adapted by screen readers when the map is in focus. Only one `<map-caption>` should be created for each map. 

<iframe src="../../../demo/map-caption-demo/" title="MapML Demo" height="410" width="100%" scrolling="no" frameBorder="0"></iframe>
---

## Specifications

| Specification                                                |
|--------------------------------------------------------------|
| [MapML caption element](https://maps4html.org/MapML/spec/#the-map-element-0) |

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
| [**Rendering base layers (5.1)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-rendering) |  |  |  |
|              <div class="requirement">Embed an interactive map viewer, using HTML markup (5.1.1)</div>           | [full](https://maps4html.org/MapML/spec/#the-map-element-0) | full | [full](https://maps4html.org/MapML/spec/#webidl-1442763376) |
|              <div class="enhancement">Generate a default map for a given area (5.1.2)</div>           | Not Planned | Not Planned | Not Planned |
|            <div class="requirement">Display a basic map without JavaScript (5.1.5)</div>             | full | [limited](https://maps4html.org/experiments/progressive-enhancement/) |  |
|            <div class="requirement">Display map content in a users preferred language (5.1.6)</div>            | [full](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/136) | [full](https://github.com/Maps4HTML/mapml-extension) |  |
| [**Interpreting locations and map positions (5.3)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-locations) |  |  |  |
|           <div class="requirement">Select map view from latitude and longitude point (5.3.1)</div>             | full | full | [full](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#zoomtolat-lon-zoom) |
|           <div class="undecided">Display map tiles defined in various common coordinate systems (5.3.3)</div>             | [full](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/14) | full | [full](https://maps4html.org/web-map-doc/docs/api/custom-projections) |
|           <div class="undecided">Reproject map tile data into a new projection or globe view (5.3.4)</div>             | [under discussion](https://github.com/Maps4HTML/HTML-Map-Element-UseCases-Requirements/issues/3) | none |  |
|           <div class="undecided">Save the location or export to other application (5.3.5)</div>             | limited | limited |  |
| [**User navigation (pan and zoom) (5.4)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-user-navigation) |  |  |  |
|            <div class="requirement">Zoom the map independently from the rest of the page (5.4.1)</div>            | full    | full   | |
|                            <div class="requirement">Pan the map display (5.4.2)</div>                             | full    | full   | |
|          <div class="undecided">Wrap/duplicate data tiles when panning around the globe (5.4.4)</div>             | none    | partial| | |
| [**Custom styling (5.5)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#map-viewers-capabilities-custom-styling) |  |  |  |
|          <div class="undecided">Apply custom styling to map controls (5.5.2)</div>              | none | none |  |
|          <div class="undecided">Toggle whether default controls are displayed (5.5.3)</div>              | full | full |  |
| [**Controlling the displayed map view and responding to user actions (6.2)**](https://maps4html.org/HTML-Map-Element-UseCases-Requirements/#client-apis-map-viewport) |  |  |  |
|          <div class="requirement">Subscribe to notifications of map events (6.2.3)</div>              | [pending](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events) | limited | [full](https://maps4html.org/web-map-doc/docs/api/mapml-viewer-api#events) |
|          <div class="requirement">Move the map to display a given location (6.2.5)</div>              | full | full |  |
---

> - [Edit this page on **Github**](https://github.com/Maps4HTML/web-map-doc/edit/main/docs/elements/map-caption.md)
> - [Chat with us on **Gitter**](https://gitter.im/Maps4HTML/chat)