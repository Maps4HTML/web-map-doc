/*! @maps4html/web-map-custom-element 11-10-2023 */

class MapExtent extends HTMLElement{static get observedAttributes(){return["units","checked","label","opacity"]}get units(){return this.getAttribute("units")}set units(e){["OSMTILE","CBMTILE","WGS84","APSTILE"].includes(e)&&this.setAttribute("units",e)}get checked(){return this.hasAttribute("checked")}set checked(e){e?this.setAttribute("checked",""):this.removeAttribute("checked")}get label(){return this.hasAttribute("label")?this.getAttribute("label"):""}set label(e){e&&this.setAttribute("label",e)}get opacity(){return this._opacity}set opacity(e){1<+e||+e<0||this.setAttribute("opacity",e)}attributeChangedCallback(e,t,r){e}constructor(){super()}connectedCallback(){this.querySelector("map-link[rel=query], map-link[rel=features]")&&!this.shadowRoot&&this.attachShadow({mode:"open"});let e="LAYER-"===this.parentNode.nodeName.toUpperCase()?this.parentNode:this.parentNode.host;e.whenReady().then(()=>{this._layer=e._layer}).catch(()=>{throw new Error("Layer never became ready")})}disconnectedCallback(){}whenReady(){return new Promise((t,e)=>{let r,a;this._layer?t():(r=setInterval(function(e){e._layer&&(clearInterval(r),clearTimeout(a),t())},300,this),a=setTimeout(function(){clearInterval(r),clearTimeout(a),e("Timeout reached waiting for extent to be ready")},1e4))})}}export{MapExtent};
//# sourceMappingURL=map-extent.js.map