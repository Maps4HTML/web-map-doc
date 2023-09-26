/*! @maps4html/web-map-custom-element 26-09-2023 */

import"./leaflet.js";import"./mapml.js";class MapLayer extends HTMLElement{static get observedAttributes(){return["src","label","checked","hidden","opacity"]}get src(){return this.hasAttribute("src")?this.getAttribute("src"):""}set src(e){e&&this.setAttribute("src",e)}get label(){return this._layer?this._layer.getName():this.hasAttribute("label")?this.getAttribute("label"):""}set label(e){e&&this.setAttribute("label",e)}get checked(){return this.hasAttribute("checked")}set checked(e){e?this.setAttribute("checked",""):this.removeAttribute("checked")}get hidden(){return this.hasAttribute("hidden")}set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get opacity(){return this._opacity??this.getAttribute("opacity")}set opacity(e){1<+e||+e<0||this.setAttribute("opacity",e)}constructor(){super()}disconnectedCallback(){this.hasAttribute("data-moving")||this._onRemove()}_onRemove(){this._layer&&this._layer.off(),this._layer&&this._layer._map&&this._layer._map.removeLayer(this._layer),this._layerControl&&!this.hidden&&this._layerControl.removeLayer(this._layer),delete this._layer,this.shadowRoot&&(this.shadowRoot.innerHTML="")}connectedCallback(){if(!this.hasAttribute("data-moving")){const e=this._onAdd.bind(this);this.parentElement.whenReady().then(()=>{e()}).catch(()=>{throw new Error("Map never became ready")})}}_onAdd(){this.getAttribute("src")&&!this.shadowRoot&&this.attachShadow({mode:"open"}),new Promise((a,t)=>{this.addEventListener("changestyle",function(e){e.stopPropagation(),this.src=e.detail.src},{once:!0}),this.addEventListener("changeprojection",function(e){e.stopPropagation(),t(e)},{once:!0});let r=this.baseURI||document.baseURI;const e=new Headers;e.append("Accept","text/mapml"),this.src?fetch(this.src,{headers:e}).then(e=>{if(!e.ok)throw new Error("HTTP error! Status: "+e.status);return e.text()}).then(e=>{let t=(new DOMParser).parseFromString(e,"text/xml");if(t.querySelector("parsererror")||!t.querySelector("mapml-"))throw new Error("Parser error");this._layer&&this._onRemove(),this._layer=M.mapMLLayer(new URL(this.src,r).href,this,t,{mapprojection:this.parentElement.projection,opacity:this.opacity}),this._attachedToMap(),this._validateDisabled(),a()}).catch(e=>{console.log("Error fetching layer content"+e)}):(this._layer&&this._onRemove(),this._layer=M.mapMLLayer(null,this,null,{mapprojection:this.parentElement.projection,opacity:this.opacity}),this._attachedToMap(),this._validateDisabled(),a())}).catch(e=>{"changeprojection"===e.type?this.src=e.detail.href:(console.log(e),this.dispatchEvent(new CustomEvent("error",{detail:{target:this}})))})}_attachedToMap(){for(var e=0,t=1,a=this.parentNode.children;e<a.length;e++)"LAYER-"===this.parentNode.children[e].nodeName&&(this.parentNode.children[e]===this?t=e+1:this.parentNode.children[e]._layer&&this.parentNode.children[e]._layer.setZIndex(e+1));var r=this.parentNode.projection||"OSMTILE";L.setOptions(this._layer,{zIndex:t,mapprojection:r,opacity:window.getComputedStyle(this).opacity}),this._layer._map=this.parentNode._map,this._layer.fire("attached"),this.checked&&this._layer.addTo(this._layer._map),this._layer.on("add remove",this._onLayerChange,this),this._layer.on("add remove",this._validateDisabled,this),this._layer._map.on("moveend layeradd",this._validateDisabled,this),this.parentNode._layerControl&&!this.hidden&&(this._layerControl=this.parentNode._layerControl,this._layerControl.addOrUpdateOverlay(this._layer,this.label)),this._layer._legendUrl&&(this.legendLinks=[{type:"application/octet-stream",href:this._layer._legendUrl,rel:"legend",lang:null,hreflang:null,sizes:null}]),this.dispatchEvent(new CustomEvent("loadedmetadata",{detail:{target:this}}))}attributeChangedCallback(e,t,a){switch(e){case"label":this.whenReady().then(()=>{this._layer.setName(a)});break;case"checked":this._layer&&("string"==typeof a?this.parentElement._map.addLayer(this._layer):this.parentElement._map.removeLayer(this._layer),this.dispatchEvent(new Event("change",{bubbles:!0})));break;case"hidden":this.parentElement&&this.parentElement._map&&this.parentElement.controls&&("string"==typeof a?this._layer&&this.parentElement._layerControl.removeLayer(this._layer):(this._layerControl=this.parentElement._layerControl,this._layerControl.addOrUpdateOverlay(this._layer,this.label),this._validateDisabled()));break;case"opacity":t!==a&&this._layer&&(this._opacity=a,this._layer.changeOpacity(a));break;case"src":t!==a&&this._layer&&(this._onRemove(),this.isConnected&&this._onAdd())}}_validateDisabled(){setTimeout(()=>{let i=this._layer,e=i?._map;if(e){let a=0,r=0,t=["_staticTileLayer","_imageLayer","_mapmlvectors","_templatedLayer"];if(i.validProjection)for(let e=0;e<t.length;e++){var s=t[e];if(this.checked&&i[s])if("_templatedLayer"===s)for(let t=0;t<i._properties._mapExtents.length;t++)for(let e=0;e<i._properties._mapExtents[t].templatedLayer._templates.length;e++)"query"!==i._properties._mapExtents[t].templatedLayer._templates[e].rel&&(r++,i._properties._mapExtents[t].removeAttribute("disabled"),i._properties._mapExtents[t].disabled=!1,i._properties._mapExtents[t].templatedLayer._templates[e].layer.isVisible||(a++,i._properties._mapExtents[t].setAttribute("disabled",""),i._properties._mapExtents[t].disabled=!0));else r++,i[s].isVisible||a++}else a=1,r=1;a===r&&0!==a?(this.setAttribute("disabled",""),this.disabled=!0):(this.removeAttribute("disabled"),this.disabled=!1),e.fire("validate")}},0)}getOuterHTML(){let t=this.cloneNode(!0);if(this.hasAttribute("src")&&(e=this._layer.getHref(),t.setAttribute("src",e)),this.querySelector("map-link")){let e=t.querySelectorAll("map-link");e.forEach(e=>{e.hasAttribute("href")?e.setAttribute("href",decodeURI(new URL(e.attributes.href.value,this.baseURI||document.baseURI).href)):e.hasAttribute("tref")&&e.setAttribute("tref",decodeURI(new URL(e.attributes.tref.value,this.baseURI||document.baseURI).href))})}var e=t.outerHTML;return t.remove(),e}_onLayerChange(){this._layer._map&&(this.checked=this._layer._map.hasLayer(this._layer))}zoomTo(){if(this.extent){let e=this.parentElement._map,t=this.extent.topLeft.pcrs,a=this.extent.bottomRight.pcrs,r=L.bounds(L.point(t.horizontal,t.vertical),L.point(a.horizontal,a.vertical)),i=e.options.crs.unproject(r.getCenter(!0));var s=this.extent.zoom.maxZoom,h=this.extent.zoom.minZoom;e.setView(i,M.getMaxZoom(r,e,h,s),{animate:!1})}}mapml2geojson(e={}){return M.mapml2geojson(this,e)}pasteFeature(e){switch(typeof e){case"string":e.trim(),"<map-feature"===e.slice(0,12)&&"</map-feature>"===e.slice(-14)&&this.insertAdjacentHTML("beforeend",e);break;case"object":"MAP-FEATURE"===e.nodeName.toUpperCase()&&this.appendChild(e)}}whenReady(){return new Promise((t,e)=>{let a,r;this._layer?t():(a=setInterval(function(e){e._layer&&(clearInterval(a),clearTimeout(r),t())},200,this),r=setTimeout(function(){clearInterval(a),clearTimeout(r),e("Timeout reached waiting for layer to be ready")},5e3))})}}export{MapLayer};
//# sourceMappingURL=layer.js.map