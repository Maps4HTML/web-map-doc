---
id: static-features
title: Static Features Layer
slug: /layers/static-features
---

In this section, we will learn about creating a static feature layer. A static feature is an inline feature that is rendered on the map as SVG. This allows the feature to scale 
as you zoom in and out without distortion.


## Adding a single feature

```html
<map-layer label="My Feature Layer" checked>
  <map-feature zoom="2">
    <map-properties>
      <h1>Feature Popup Text</h1>
      <a href="http://example.org/">Feature Popup Link</a>
    </map-properties>
    <map-geometry cs="tilematrix">
      <map-polygon>
        <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>
      </map-polygon>
    </map-geometry>
  </map-feature>
</map-layer>
```

## Associated Elements

### `<map-feature>`

Parent element that contains the `<map-properties>` and `<map-geometry>` elements

#### Attributes

- `zoom`
  - This allows you to set the zoom level the feature is rendered at. The zoom value should fall within the range of 0 to the maximum zoom level of the map's [projection](http://example.org/).

---

### `<map-properties>`

This element contains the contents of the popup associated to a given feature.

---

### `<map-geometry>`

This element contains the different points, lines and polygons that will be drawn. Details on the geometry elements and it's syntax can be found [here](http://example.org/).

#### Attributes

- `cs`
  - This allows you to set the [coordinate system](http://example.org/) of the points, lines and polygons.
  - Defaults to gcrs, but can be set to tilematrix | pcrs | gcrs explicitly.

---

## Additional Context

You can also provide a set of elements to further define the static feature layer. This is the list of available additions with examples.

### `<map-link rel="license">`

Sets the attribution link of the layer. Example:

```html
<map-link rel="license" href="https://www.nrcan.gc.ca/earth-sciences/geography/topographic-information/free-data-geogratis/licence/17285" title="Canada Base Map © Natural Resources Canada"></map-link>
```

---

### `<map-meta name="zoom">`

Sets the native minimum and maximum [native zoom](http://example.org/). It also allows you to set a value, this is the default zoom of all features in the case the `<map-feature>` is missing a zoom attribute.

```html
<map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>
```

---

### `<map-meta name="projection">`

Sets the [projection](http://example.org/) of the layer. 

```html
<map-meta name="projection" content="CBMTILE"></map-meta>
```

---

### `<map-meta name="cs">`

Sets the default [coordinate system](http://example.org/) of the layer. If a feature is missing the cs attribute, it will default to this, and if this is missing it will default to gcrs.

```html
<map-meta name="cs" content="gcrs"></map-meta>
```

---

### `<map-meta name="extent">`

Sets the [extent](http://example.org/) of the layer.

```html
<map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>
```

---

## Full Examples

```html
  <mapml-viewer style="height: 500px;width:500px;" projection="CBMTILE" zoom="2" lat="45.5052040" lon="-75.2202344"
    controls>

    <map-layer label="Arizona" checked>
      <map-meta name="projection" content="CBMTILE"></map-meta>
      <map-meta name="zoom" content="min=1,max=5,value=0"></map-meta>
      <map-meta name="cs" content="gcrs"></map-meta>
      <map-meta name="extent" content="zoom=0,top-left-column=0,top-left-row=0,bottom-right-column=5,bottom-right-row=5"></map-meta>
      <map-link id="first" rel="stylesheet" type="text/css" href="first.css"></map-link>
      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Test</h1>
          <a href="http://example.org/">test</a>
        </map-properties>
        <map-geometry cs="tilematrix">
          <map-polygon>
            <map-coordinates>11 11 12 11 12 12 11 12</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>

      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Test</h1>
        </map-properties>
        <map-geometry cs="pcrs">
          <map-polygon>
            <map-coordinates>257421 -3567196 -271745 1221771 -3896544 242811 -3183549 -2613313</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>

      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Test</h1>
        </map-properties>
        <map-geometry cs="tcrs">
          <map-polygon>
            <map-coordinates>2771 3106 2946 3113 2954 3210 2815 3192</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>

      <map-feature zoom="2" class="refDiff">
        <map-properties>
          <h1>Arizona</h1>
        </map-properties>
        <map-geometry>
          <map-polygon>
            <map-coordinates>-109.042503 37.000263 -109.04798 31.331629 -111.074448 31.331629 -112.246513 31.704061
              -114.815198 32.492741 -114.72209 32.717295 -114.524921 32.755634 -114.470151 32.843265 -114.524921
              33.029481 -114.661844 33.034958 -114.727567 33.40739 -114.524921 33.54979 -114.497536 33.697668
              -114.535874 33.933176 -114.415382 34.108438 -114.256551 34.174162 -114.136058 34.305608 -114.333228
              34.448009 -114.470151 34.710902 -114.634459 34.87521 -114.634459 35.00118 -114.574213 35.138103
              -114.596121 35.324319 -114.678275 35.516012 -114.738521 36.102045 -114.371566 36.140383 -114.251074
              36.01989 -114.152489 36.025367 -114.048427 36.195153 -114.048427 37.000263 -110.499369 37.00574
              -109.042503 37.000263</map-coordinates>
          </map-polygon>
        </map-geometry>
      </map-feature>
    </map-layer>
  </mapml-viewer>
```
[ADD MAP HERE]
