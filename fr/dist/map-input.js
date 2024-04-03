/*! @maps4html/web-map-custom-element 03-04-2024 */

class MapInput extends HTMLElement{static get observedAttributes(){return["name","type","value","axis","units","position","rel","min","max","step"]}get name(){return this.getAttribute("name")}set name(t){t&&this.setAttribute("name",t)}get type(){return this.getAttribute("type")}set type(t){["location"].includes(t)&&this.setAttribute("type",t)}get value(){return this.input.getValue()}set value(t){t&&this.setAttribute("value",t)}get axis(){return this.getAttribute("axis")}set axis(t){t&&this.setAttribute("axis",t)}get units(){return this.getAttribute("units")}set units(t){t&&this.setAttribute("units",t)}get position(){return this.getAttribute("position")}set position(t){t&&this.setAttribute("position",t)}get rel(){return this.getAttribute("rel")}set rel(t){t&&this.setAttribute("rel",t)}get min(){if("zoom"===this.type)return this.hasAttribute("min")?this.getAttribute("min"):this.parentElement.querySelector("map-meta[name=zoom]")?M._metaContentToObject(this.parentElement.querySelector("map-meta[name=zoom]").getAttribute("content")).min:this.getLayerEl().extent?.zoom.minZoom.toString()}set min(t){t&&this.setAttribute("min",t)}get max(){if("zoom"===this.type)return this.hasAttribute("max")?this.getAttribute("max"):this.parentElement.querySelector("map-meta[name=zoom]")?M._metaContentToObject(this.parentElement.querySelector("map-meta[name=zoom]").getAttribute("content")).max:this.getLayerEl().extent?.zoom.maxZoom.toString()}set max(t){t&&this.setAttribute("max",t)}get step(){return"zoom"!==this.type?null:this.getAttribute("step")||"1"}set step(t){t&&this.setAttribute("step",t)}getMapEl(){return M.getClosest(this,"mapml-viewer,map[is=web-map]")}getLayerEl(){return M.getClosest(this,"layer-")}attributeChangedCallback(e,t,i){this.whenReady().then(()=>{switch(e){case"name":t!==i&&null!==t&&(this.input.name=i);break;case"type":break;case"value":t!==i&&null!==t&&(this.input.value=i);break;case"axis":t!==i&&this.input&&(this.input.axis=i);break;case"units":t!==i&&this.input&&(this.input.units=i);break;case"position":t!==i&&this.input&&(this.input.position=i);break;case"rel":t!==i&&this.input&&(this.input.rel=i);break;case"min":t!==i&&this.input&&(this.input.min=i);break;case"max":t!==i&&this.input&&(this.input.max=i);break;case"step":t!==i&&this.input&&(this.input.step=i)}}).catch(t=>{console.log(t,`
in mapInput.attributeChangeCallback when changing attribute `+e)})}constructor(){super()}connectedCallback(){this.parentElement.whenReady().then(()=>{switch("MAP-EXTENT"===this.parentElement.nodeName&&(this._layer=this.parentElement._layer),this.type){case"zoom":this.initialValue=+this.getAttribute("value"),this.input=new M.ZoomInput(this.name,this.min,this.max,this.initialValue,this.step,this._layer);break;case"location":this.input=new M.LocationInput(this.name,this.position,this.axis,this.units,this.min,this.max,this.rel,this._layer);break;case"width":this.input=new M.WidthInput(this.name,this._layer);break;case"height":this.input=new M.HeightInput(this.name,this._layer);break;case"hidden":this.input=new M.HiddenInput(this.name,this.initialValue)}}).catch(t=>{console.log(t,"\nin mapInput.connectedCallback")})}disconnectedCallback(){}checkValidity(){if(this.input.validateInput())return!0;var t=new Event("invalid",{bubbles:!0,cancelable:!0,composed:!0});return this.dispatchEvent(t),!1}reportValidity(){if(this.input.validateInput())return!0;var t=new Event("invalid",{bubbles:!0,cancelable:!0,composed:!0});return this.dispatchEvent(t),console.log("Input type='"+this.type+"' is not valid!"),!1}whenReady(){return new Promise((e,i)=>{let n,s;this.input?e():(n=setInterval(function(t){t.input?(clearInterval(n),clearTimeout(s),e()):t.isConnected||(clearInterval(n),clearTimeout(s),i("map-input was disconnected while waiting to be ready"))},300,this),s=setTimeout(function(){clearInterval(n),clearTimeout(s),i("Timeout reached waiting for input to be ready")},1e4))})}}export{MapInput};
//# sourceMappingURL=map-input.js.map