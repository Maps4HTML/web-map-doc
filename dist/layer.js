/*! @maps4html/web-map-custom-element 20-07-2023 */

import"./leaflet.js";import"./mapml.js";class MapLayer extends HTMLElement{static get observedAttributes(){return["src","label","checked","hidden","opacity"]}get src(){return this.hasAttribute("src")?this.getAttribute("src"):""}set src(t){t&&this.setAttribute("src",t)}get label(){return this.hasAttribute("label")?this.getAttribute("label"):""}set label(t){t&&this.setAttribute("label",t)}get checked(){return this.hasAttribute("checked")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get hidden(){return this.hasAttribute("hidden")}set hidden(t){t?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get opacity(){return this._layer._container.style.opacity||this._layer.options.opacity}set opacity(t){1<+t||+t<0||this._layer.changeOpacity(t)}constructor(){super()}disconnectedCallback(){this.hasAttribute("data-moving")||this._onRemove()}_onRemove(){this._removeEvents(),this._layer._map&&this._layer._map.removeLayer(this._layer),this._layerControl&&!this.hidden&&this._layerControl.removeLayer(this._layer),this.shadowRoot&&(this.shadowRoot.innerHTML="")}connectedCallback(){this.hasAttribute("data-moving")||this._onAdd()}_onAdd(){this.getAttribute("src")&&!this.shadowRoot&&this.attachShadow({mode:"open"}),this.parentNode.addEventListener("createmap",()=>{this._ready(),this.parentNode._map&&this._attachedToMap(),this._layerControl&&!this.hidden&&this._layerControl.addOrUpdateOverlay(this._layer,this.label)},{once:!0}),this.parentNode._map&&this.parentNode.dispatchEvent(new CustomEvent("createmap"))}adoptedCallback(){}attributeChangedCallback(t,e,a){switch(t){case"label":this?._layer?.setName(a);break;case"checked":this._layer&&("string"==typeof a?this.parentElement._map.addLayer(this._layer):this.parentElement._map.removeLayer(this._layer),this.dispatchEvent(new Event("change",{bubbles:!0})));break;case"hidden":this.parentElement&&this.parentElement._map&&this.parentElement.controls&&("string"==typeof a?this._layer&&this.parentElement._layerControl.removeLayer(this._layer):(this._layerControl=this.parentElement._layerControl,this._layerControl.addOrUpdateOverlay(this._layer,this.label),this._validateDisabled()));break;case"opacity":e!==a&&this._layer&&(this.opacity=a);break;case"src":e!==a&&this._layer&&this._reload()}}_reload(){var t=this.opacity;this._onRemove(),this.isConnected&&this._onAdd(),this.opacity=t}_onLayerExtentLoad(t){this._layer._legendUrl&&(this.legendLinks=[{type:"application/octet-stream",href:this._layer._legendUrl,rel:"legend",lang:null,hreflang:null,sizes:null}]),this._layer._title&&(this.label=this._layer._title),this._layer._map&&this._layer.fire("attached",this._layer),this._layerControl&&this._layerControl.addOrUpdateOverlay(this._layer,this.label),this._layer.error?this.dispatchEvent(new CustomEvent("error",{detail:{target:this}})):this.dispatchEvent(new CustomEvent("loadedmetadata",{detail:{target:this}}))}_validateDisabled(){setTimeout(()=>{let s=this._layer,t=s?._map;if(t){let a=0,i=0,e=["_staticTileLayer","_imageLayer","_mapmlvectors","_templatedLayer"];if(s.validProjection)for(let t=0;t<e.length;t++){var r=e[t];if(this.checked&&s[r])if("_templatedLayer"===r)for(let e=0;e<s._extent._mapExtents.length;e++)for(let t=0;t<s._extent._mapExtents[e].templatedLayer._templates.length;t++)"query"!==s._extent._mapExtents[e].templatedLayer._templates[t].rel&&(i++,s._extent._mapExtents[e].removeAttribute("disabled"),s._extent._mapExtents[e].disabled=!1,s._extent._mapExtents[e].templatedLayer._templates[t].layer.isVisible||(a++,s._extent._mapExtents[e].setAttribute("disabled",""),s._extent._mapExtents[e].disabled=!0));else i++,s[r].isVisible||a++}else a=1,i=1;a===i&&0!==a?(this.setAttribute("disabled",""),this.disabled=!0):(this.removeAttribute("disabled"),this.disabled=!1),t.fire("validate")}},0)}getOuterHTML(){let e=this.cloneNode(!0);if(this.hasAttribute("src")&&(t=this._layer.getHref(),e.setAttribute("src",t)),this.querySelector("map-link")){let t=e.querySelectorAll("map-link");t.forEach(t=>{t.hasAttribute("href")?t.setAttribute("href",decodeURI(new URL(t.attributes.href.value,this.baseURI||document.baseURI).href)):t.hasAttribute("tref")&&t.setAttribute("tref",decodeURI(new URL(t.attributes.tref.value,this.baseURI||document.baseURI).href))})}var t=e.outerHTML;return e.remove(),t}_onLayerChange(){this._layer._map&&(this.checked=this._layer._map.hasLayer(this._layer))}_ready(){var t=this.baseURI||document.baseURI,e=this.hasAttribute("opacity")?this.getAttribute("opacity"):"1.0";this._layer=M.mapMLLayer(this.src?new URL(this.src,t).href:null,this,{mapprojection:this.parentElement._map.options.projection,opacity:e}),this._layer.on("extentload",this._onLayerExtentLoad,this),this._setUpEvents()}_attachedToMap(){for(var t=0,e=1,a=this.parentNode.children;t<a.length;t++)"LAYER-"===this.parentNode.children[t].nodeName&&(this.parentNode.children[t]===this?e=t+1:this.parentNode.children[t]._layer&&this.parentNode.children[t]._layer.setZIndex(t+1));var i=this.parentNode.projection||"OSMTILE";L.setOptions(this._layer,{zIndex:e,mapprojection:i,opacity:window.getComputedStyle(this).opacity}),this._layer._map=this.parentNode._map,this._layer.fire("attached"),this.checked&&this._layer.addTo(this._layer._map),this._layer.on("add remove",this._onLayerChange,this),this._layer.on("add remove extentload",this._validateDisabled,this),this.parentNode._layerControl&&!this.hidden&&(this._layerControl=this.parentNode._layerControl,this._layerControl.addOrUpdateOverlay(this._layer,this.label)),this._layer._map.on("moveend",this._validateDisabled,this),this._layer._map.on("checkdisabled",this._validateDisabled,this)}_removeEvents(){this._layer&&this._layer.off()}_setUpEvents(){this._layer.on("loadstart",function(){this.dispatchEvent(new CustomEvent("loadstart",{detail:{target:this}}))},this),this._layer.on("changestyle",function(t){this.src=t.src,this.dispatchEvent(new CustomEvent("changestyle",{detail:{target:this}}))},this),this._layer.on("changeprojection",function(t){this.src=t.href,this.dispatchEvent(new CustomEvent("changeprojection",{detail:{target:this}}))},this)}zoomTo(){if(this.extent){let t=this._layer._map,e=this.extent.topLeft.pcrs,a=this.extent.bottomRight.pcrs,i=L.bounds(L.point(e.horizontal,e.vertical),L.point(a.horizontal,a.vertical)),s=t.options.crs.unproject(i.getCenter(!0));var r=this.extent.zoom.maxZoom,h=this.extent.zoom.minZoom;t.setView(s,M.getMaxZoom(i,t,h,r),{animate:!1})}}mapml2geojson(t={}){return M.mapml2geojson(this,t)}pasteFeature(t){switch(typeof t){case"string":t.trim(),"<map-feature"===t.slice(0,12)&&"</map-feature>"===t.slice(-14)&&this.insertAdjacentHTML("beforeend",t);break;case"object":"MAP-FEATURE"===t.nodeName.toUpperCase()&&this.appendChild(t)}}}export{MapLayer};
//# sourceMappingURL=layer.js.map