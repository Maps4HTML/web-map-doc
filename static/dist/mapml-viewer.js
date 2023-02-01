/*! @maps4html/web-map-custom-element 01-02-2023 */

import"./leaflet.js";import"./mapml.js";import{MapLayer}from"./layer.js";class MapViewer extends HTMLElement{static get observedAttributes(){return["lat","lon","zoom","projection","width","height","controls"]}get controls(){return this.hasAttribute("controls")}set controls(t){t=Boolean(t);t?this.setAttribute("controls",""):this.removeAttribute("controls"),this._toggleControls(t)}get controlslist(){return this.hasAttribute("controlslist")?this.getAttribute("controlslist"):""}set controlslist(t){t=t.toLowerCase();!this.controlslist.includes(t)&&["nofullscreen","nozoom","nolayer","noreload"].includes(t)&&this.setAttribute("controlslist",this.controlslist+" "+t)}get lat(){return this.hasAttribute("lat")?this.getAttribute("lat"):"0"}set lat(t){t&&this.setAttribute("lat",t)}get lon(){return this.hasAttribute("lon")?this.getAttribute("lon"):"0"}set lon(t){t&&this.setAttribute("lon",t)}get projection(){return this.hasAttribute("projection")?this.getAttribute("projection"):""}set projection(t){if(!t||!M[t])throw new Error("Undefined Projection");if(this.setAttribute("projection",t),this._map&&this._map.options.projection!==t){this._map.options.crs=M[t],this._map.options.projection=t;for(var e of this.querySelectorAll("layer-")){e.removeAttribute("disabled");e=this.removeChild(e);this.appendChild(e)}if(this._debug)for(let t=0;t<2;t++)this.toggleDebug()}else this.dispatchEvent(new CustomEvent("createmap"))}get zoom(){return this.hasAttribute("zoom")?this.getAttribute("zoom"):0}set zoom(t){t=parseInt(t,10);!isNaN(t)&&0<=t&&t<=25&&this.setAttribute("zoom",t)}get layers(){return this.getElementsByTagName("layer-")}get extent(){let t=this._map,e=M.pixelToPCRSBounds(t.getPixelBounds(),t.getZoom(),t.options.projection),o=M.convertAndFormatPCRS(e,t);return t.getMaxZoom()!==1/0&&(o.zoom={minZoom:t.getMinZoom(),maxZoom:t.getMaxZoom()}),o}constructor(){super(),this._source=this.outerHTML;let t=document.createElement("template");t.innerHTML=`<link rel="stylesheet" href="${new URL("mapml.css",import.meta.url).href}">`;let e=this.attachShadow({mode:"open"});this._container=document.createElement("div");this._container.insertAdjacentHTML("beforeend","<output role='status' aria-live='polite' aria-atomic='true' class='mapml-screen-reader-output'></output>");let o=document.createElement("style");o.innerHTML=':host {all: initial;contain: layout size;display: inline-block;height: 150px;width: 300px;border-width: 2px;border-style: inset;}:host([frameborder="0"]) {border-width: 0;}:host([hidden]) {display: none!important;}:host .leaflet-control-container {visibility: hidden!important;}';let i=document.createElement("style");i.innerHTML="mapml-viewer > * {display: none!important;}",e.appendChild(o),e.appendChild(t.content.cloneNode(!0)),e.appendChild(this._container),this.appendChild(i),this._toggleState=!1,this.controlsListObserver=new MutationObserver(t=>{t.forEach(t=>{"attributes"===t.type&&"controlslist"===t.attributeName&&this.setControls(!1,!1,!1)})}),this.controlsListObserver.observe(this,{attributes:!0})}connectedCallback(){var t,e,o,i;this.isConnected&&(t=(i=window.getComputedStyle(this)).width,e=i.height,o=parseInt(t.replace("px","")),i=parseInt(e.replace("px","")),""!==t&&""!==e&&(this.width&&this.width===o?this._container.style.width=this.width+"px":(this._container.style.width=t,this.width=o),this.height&&this.height===i?this._container.style.height=this.height+"px":(this._container.style.height=e,this.height=i),this._history||(this._history=[],this._historyIndex=-1,this._traversalCall=!1),this.addEventListener("createmap",()=>{this._map||(this._map=L.map(this._container,{center:new L.LatLng(this.lat,this.lon),projection:this.projection,query:!0,contextMenu:!0,announceMovement:M.options.announceMovement,featureIndex:!0,mapEl:this,crs:M[this.projection],zoom:this.zoom,zoomControl:!1,fadeAnimation:!0}),this._addToHistory(),M.attributionControl(this),this.setControls(!1,!1,!0),this._crosshair=M.crosshair().addTo(this._map),M.options.featureIndexOverlayOption&&(this._featureIndexOverlay=M.featureIndexOverlay().addTo(this._map)),this.setAttribute("role","application"),this._container.setAttribute("role","region"),this._container.setAttribute("aria-label","Interactive map"),this._setUpEvents())},{once:!0}),["CBMTILE","APSTILE","OSMTILE","WGS84"].includes(this.projection)&&this.dispatchEvent(new CustomEvent("createmap"))))}disconnectedCallback(){delete this._map}adoptedCallback(){}setControls(n,s,r){if(this.controls&&this._map){let e=["_zoomControl","_reloadButton","_fullScreenControl","_layerControl"],t=["nozoom","noreload","nofullscreen","nolayer"],o=this._map.getSize().y,i=0;for(let t=0;t<3;t++)this[e[t]]&&(this._map.removeControl(this[e[t]]),delete this[e[t]]);if(!this.controlslist.toLowerCase().includes("nolayer")&&!this._layerControl&&0<this.layers.length&&(this._layerControl=M.mapMlLayerControl(null,{collapsed:!0,mapEl:this}).addTo(this._map),!r)){for(var a=0;a<this.layers.length;a++)this.layers[a].hidden||(this._layerControl.addOverlay(this.layers[a]._layer,this.layers[a].label),this._map.on("moveend",this.layers[a]._validateDisabled,this.layers[a]),this.layers[a]._layerControl=this._layerControl);this._map.fire("validate")}for(var l in!this.controlslist.toLowerCase().includes("nozoom")&&!this._zoomControl&&i+93<=o&&(i+=93,this._zoomControl=L.control.zoom().addTo(this._map)),!this.controlslist.toLowerCase().includes("noreload")&&!this._reloadButton&&i+49<=o&&(i+=49,this._reloadButton=M.reloadButton().addTo(this._map)),!this.controlslist.toLowerCase().includes("nofullscreen")&&!this._fullScreenControl&&i+49<=o&&(i+=49,this._fullScreenControl=M.fullscreenButton().addTo(this._map)),t)this[e[l]]&&(this.controlslist.toLowerCase().includes(t[l])||n&&!s)&&(this._map.removeControl(this[e[l]]),delete this[e[l]])}else!this.controls&&this._map&&this._map.contextMenu._items[4].el.el.setAttribute("disabled","")}attributeChangedCallback(t,e,o){}_dropHandler(t){t.preventDefault();t=t.dataTransfer.getData("text");M._pasteLayer(this,t)}_dragoverHandler(t){t.preventDefault(),t.dataTransfer.dropEffect="copy"}_removeEvents(){this._map&&(this._map.off("preclick click dblclick mousemove mouseover mouseout mousedown mouseup contextmenu",!1,this),this._map.off("load movestart move moveend zoomstart zoom zoomend",!1,this),this.removeEventListener("drop",this._dropHandler,!1),this.removeEventListener("dragover",this._dragoverHandler,!1))}_setUpEvents(){this.addEventListener("drop",this._dropHandler,!1),this.addEventListener("dragover",this._dragoverHandler,!1),this.addEventListener("change",function(t){"LAYER-"===t.target.tagName&&this.dispatchEvent(new CustomEvent("layerchange",{details:{target:this,originalEvent:t}}))},!1),this.parentElement.addEventListener("keyup",function(t){9===t.keyCode&&"MAPML-VIEWER"===document.activeElement.nodeName&&document.activeElement.dispatchEvent(new CustomEvent("mapfocused",{detail:{target:this}}))}),this.addEventListener("keydown",function(t){86===t.keyCode&&t.ctrlKey?navigator.clipboard.readText().then(t=>{M._pasteLayer(this,t)}):32===t.keyCode&&(t.preventDefault(),this._map.fire("keypress",{originalEvent:t}))}),this.parentElement.addEventListener("mousedown",function(t){"MAPML-VIEWER"===document.activeElement.nodeName&&document.activeElement.dispatchEvent(new CustomEvent("mapfocused",{detail:{target:this}}))}),this._map.on("load",function(){this.dispatchEvent(new CustomEvent("load",{detail:{target:this}}))},this),this._map.on("preclick",function(t){this.dispatchEvent(new CustomEvent("preclick",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("click",function(t){this.dispatchEvent(new CustomEvent("click",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("dblclick",function(t){this.dispatchEvent(new CustomEvent("dblclick",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("mousemove",function(t){this.dispatchEvent(new CustomEvent("mousemove",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("mouseover",function(t){this.dispatchEvent(new CustomEvent("mouseover",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("mouseout",function(t){this.dispatchEvent(new CustomEvent("mouseout",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("mousedown",function(t){this.dispatchEvent(new CustomEvent("mousedown",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("mouseup",function(t){this.dispatchEvent(new CustomEvent("mouseup",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("contextmenu",function(t){this.dispatchEvent(new CustomEvent("contextmenu",{detail:{lat:t.latlng.lat,lon:t.latlng.lng,x:t.containerPoint.x,y:t.containerPoint.y}}))},this),this._map.on("movestart",function(){this._updateMapCenter(),this.dispatchEvent(new CustomEvent("movestart",{detail:{target:this}}))},this),this._map.on("move",function(){this._updateMapCenter(),this.dispatchEvent(new CustomEvent("move",{detail:{target:this}}))},this),this._map.on("moveend",function(){this._updateMapCenter(),this._addToHistory(),this.dispatchEvent(new CustomEvent("moveend",{detail:{target:this}}))},this),this._map.on("zoomstart",function(){this._updateMapCenter(),this.dispatchEvent(new CustomEvent("zoomstart",{detail:{target:this}}))},this),this._map.on("zoom",function(){this._updateMapCenter(),this.dispatchEvent(new CustomEvent("zoom",{detail:{target:this}}))},this),this._map.on("zoomend",function(){this._updateMapCenter(),this.dispatchEvent(new CustomEvent("zoomend",{detail:{target:this}}))},this)}_toggleControls(){this._map&&(this.setControls(!0,this._toggleState,!1),this._toggleState=!this._toggleState)}toggleDebug(){this._debug?(this._debug.remove(),this._debug=void 0):this._debug=M.debugOverlay().addTo(this._map)}_widthChanged(t){this.style.width=t+"px",this._container.style.width=t+"px",this._map&&this._map.invalidateSize(!1)}_heightChanged(t){this.style.height=t+"px",this._container.style.height=t+"px",this._map&&this._map.invalidateSize(!1)}zoomTo(t,e,o){o=Number.isInteger(+o)?+o:this.zoom;e=new L.LatLng(+t,+e);this._map.setView(e,o),this.zoom=o,this.lat=e.lat,this.lon=e.lng}_updateMapCenter(){this.lat=this._map.getCenter().lat,this.lon=this._map.getCenter().lng,this.zoom=this._map.getZoom()}_addToHistory(){var t;0<this._traversalCall?this._traversalCall--:(t=this._map.getPixelBounds().getCenter(),t={zoom:this._map.getZoom(),x:t.x,y:t.y},this._historyIndex++,this._history.splice(this._historyIndex,0,t))}back(){var t,e=this._history,o=e[this._historyIndex];0<this._historyIndex&&(this._historyIndex--,(t=e[this._historyIndex]).zoom!==o.zoom?(this._traversalCall=2,e=this._map.options.crs.scale(o.zoom)/this._map.options.crs.scale(t.zoom),this._map.panBy([t.x*e-o.x,t.y*e-o.y],{animate:!1}),this._map.setZoom(t.zoom)):(this._traversalCall=1,this._map.panBy([t.x-o.x,t.y-o.y])))}forward(){var t,e=this._history,o=e[this._historyIndex];this._historyIndex<e.length-1&&(this._historyIndex++,(t=e[this._historyIndex]).zoom!==o.zoom?(this._traversalCall=2,e=this._map.options.crs.scale(o.zoom)/this._map.options.crs.scale(t.zoom),this._map.panBy([t.x*e-o.x,t.y*e-o.y],{animate:!1}),this._map.setZoom(t.zoom)):(this._traversalCall=1,this._map.panBy([t.x-o.x,t.y-o.y])))}reload(){var t=this._history.shift(),e=this._map.getPixelBounds().getCenter(),o={zoom:this._map.getZoom(),x:e.x,y:e.y};this._history=[t],this._historyIndex=0,t.zoom!==o.zoom?(this._traversalCall=2,e=this._map.options.crs.scale(o.zoom)/this._map.options.crs.scale(t.zoom),this._map.panBy([t.x*e-o.x,t.y*e-o.y],{animate:!1}),this._map.setZoom(t.zoom)):(this._traversalCall=1,this._map.panBy([t.x-o.x,t.y-o.y]))}viewSource(){var t=new Blob([this._source],{type:"text/plain"}),t=URL.createObjectURL(t);window.open(t),URL.revokeObjectURL(t)}defineCustomProjection(t){let e=JSON.parse(t);if(!(void 0!==e&&e.proj4string&&e.projection&&e.resolutions&&e.origin&&e.bounds))throw new Error("Incomplete TCRS Definition");if(0<=e.projection.indexOf(":"))throw new Error('":" is not permitted in projection name');if(M[e.projection.toUpperCase()])return e.projection.toUpperCase();t=[256,512,1024,2048,4096].includes(e.tilesize)?e.tilesize:256;return M[e.projection]=new L.Proj.CRS(e.projection,e.proj4string,{origin:e.origin,resolutions:e.resolutions,bounds:L.bounds(e.bounds),crs:{tcrs:{horizontal:{name:"x",min:0,max:t=>Math.round(M[e.projection].options.bounds.getSize().x/M[e.projection].options.resolutions[t])},vertical:{name:"y",min:0,max:t=>Math.round(M[e.projection].options.bounds.getSize().y/M[e.projection].options.resolutions[t])},bounds:t=>L.bounds([M[e.projection].options.crs.tcrs.horizontal.min,M[e.projection].options.crs.tcrs.vertical.min],[M[e.projection].options.crs.tcrs.horizontal.max(t),M[e.projection].options.crs.tcrs.vertical.max(t)])},pcrs:{horizontal:{name:"easting",get min(){return M[e.projection].options.bounds.min.x},get max(){return M[e.projection].options.bounds.max.x}},vertical:{name:"northing",get min(){return M[e.projection].options.bounds.min.y},get max(){return M[e.projection].options.bounds.max.y}},get bounds(){return M[e.projection].options.bounds}},gcrs:{horizontal:{name:"longitude",get min(){return M[e.projection].unproject(M.OSMTILE.options.bounds.min).lng},get max(){return M[e.projection].unproject(M.OSMTILE.options.bounds.max).lng}},vertical:{name:"latitude",get min(){return M[e.projection].unproject(M.OSMTILE.options.bounds.min).lat},get max(){return M[e.projection].unproject(M.OSMTILE.options.bounds.max).lat}},get bounds(){return L.latLngBounds([M[e.projection].options.crs.gcrs.vertical.min,M[e.projection].options.crs.gcrs.horizontal.min],[M[e.projection].options.crs.gcrs.vertical.max,M[e.projection].options.crs.gcrs.horizontal.max])}},map:{horizontal:{name:"i",min:0,max:t=>t.getSize().x},vertical:{name:"j",min:0,max:t=>t.getSize().y},bounds:t=>L.bounds(L.point([0,0]),t.getSize())},tile:{horizontal:{name:"i",min:0,max:t},vertical:{name:"j",min:0,max:t},get bounds(){return L.bounds([M[e.projection].options.crs.tile.horizontal.min,M[e.projection].options.crs.tile.vertical.min],[M[e.projection].options.crs.tile.horizontal.max,M[e.projection].options.crs.tile.vertical.max])}},tilematrix:{horizontal:{name:"column",min:0,max:t=>Math.round(M[e.projection].options.crs.tcrs.horizontal.max(t)/M[e.projection].options.crs.tile.bounds.getSize().x)},vertical:{name:"row",min:0,max:t=>Math.round(M[e.projection].options.crs.tcrs.vertical.max(t)/M[e.projection].options.crs.tile.bounds.getSize().y)},bounds:t=>L.bounds([M[e.projection].options.crs.tilematrix.horizontal.min,M[e.projection].options.crs.tilematrix.vertical.min],[M[e.projection].options.crs.tilematrix.horizontal.max(t),M[e.projection].options.crs.tilematrix.vertical.max(t)])}}}),M[e.projection.toUpperCase()]=M[e.projection],e.projection}geojson2mapml(t,e={}){void 0===e.projection&&(e.projection=this.projection);e=M.geojson2mapml(t,e);return this.appendChild(e),e}}window.customElements.define("mapml-viewer",MapViewer),window.customElements.define("layer-",MapLayer);export{MapViewer};
//# sourceMappingURL=mapml-viewer.js.map