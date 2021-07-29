---
id: web-map
title: <map is="web-map">
slug: /maps/web-map
---

The HTML `<map>` element has been deployed and in use in browsers since the mid-90's. It was used to provide visually appealing yet accessible home pages, by giving the Web developer the ability to design links as invisible yet interactive polygonal areas on top of one or more images.  Use of this facility became known as "client side image maps", and was often used to provide site navigation links.

In recent years, client side image maps have fallen out of wide use, due to improvements in other areas of the Web platform.  However, some sites still use image maps to provide a simple, accessible, but simultaneously visual user experience.

The web-map custom element suite provides a set of proof-of-concept "[customized built-in](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)" elements based on `<map>`, `<area>` and `<img>` that will "fall back" to a client side image map in older browsers, or in the absence of JavaScript (scripting disabled).

:::caution

Note that because not all modern Web browsers implement HTML's customized built-in elements, it is not recommended to use this proof-of-concept on a public Web site, as end-user confusion may be the result.

:::

The following markup may work on Chrome and Firefox, although it may take some fine tuning:

```html
<img usemap="#mymap" src="../map1.png" width="700" height="400" alt="Map area">
<map name="mymap" is="web-map" zoom="17" lat="45.398043" lon="-75.70683" controls>
    <layer- id="osm" src="https://geogratis.gc.ca/mapml/osmtile/osm/" label="Open Street Map" checked></layer->
    <layer- id="marker" label="Marker layer" src="../marker.mapml"></layer->
    <area is="map-area" href='http://example.com/marker/' alt="rectangle" coords="255,145,275,190" shape="rect">
    <area is="map-area" id="donut" alt="Circle" href='http://example.com/circle/' coords="250,250,25" shape="circle">
    <area is="map-area" id="hole" coords="250,250,7" shape="circle">
    <area is="map-area" id="rect" href='http://example.com/rectangle/' alt="Rectangle" coords="345,290,415,320" shape="rect">
    <area is="map-area" id="poly" href='http://example.com/polygon/' alt="Polygon" coords="392,116,430,100,441,128,405,145" shape="poly">
</map>
```

To experiment with the `web-map` and `map-area` custom elements, you should link your `<script type="module" src="web-map.js"></script>` to the `web-map.js` file that is built by the web-map custom element suite build process.

In theory, if you take steps to provide the fallback markup, a normal (progressive) Web map experience will be had by most users, while those using an older browser or perhaps even Safari may get the "fallback" client side image map experience.  

An older example of such a Web map may be found in [this](https://maps4html.org/Web-Map-Custom-Element/blog/progressive-web-maps.html) blog post.  Please raise an [issue](https://github.com/Maps4HTML/Web-Map-Custom-Element/issues) if you have comments about how that example works for you.

