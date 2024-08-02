---
id: quick-start
title: MapML Quick Start Guide
slug: /tutorials/quick-start
---

Learn how to quickly create your first map.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-MBNTf3qdOk?si=UAojRDNLuIx2ycYT&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<details>
<summary>View the HTML code shown in the video</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Getting Started</title>
	<script type="module" src="https://cdn.jsdelivr.net/npm/@maps4html/web-map-custom-element/dist/mapml-viewer.js"></script>
</head>
<body>
	<mapml-viewer width="800" height="400" projection="OSMTILE" zoom="1" lat="60.0" lon="-100.0" controls>
		<layer- label="OpenStreetMap" src="https://maps4html.org/web-map-doc/demo/data/osm.mapml" checked></layer->	
	</mapml-viewer>
</body>
</html>
```
</details>

Continue with the next tutorial (MapML Introduction) for a more detailed look.