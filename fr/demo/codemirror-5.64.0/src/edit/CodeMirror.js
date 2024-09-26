import{Display}from"../display/Display.js";import{onFocus,onBlur}from"../display/focus.js";import{maybeUpdateLineNumberWidth}from"../display/line_numbers.js";import{endOperation,operation,startOperation}from"../display/operations.js";import{initScrollbars}from"../display/scrollbars.js";import{onScrollWheel}from"../display/scroll_events.js";import{setScrollLeft,updateScrollTop}from"../display/scrolling.js";import{clipPos,Pos}from"../line/pos.js";import{posFromMouse}from"../measurement/position_measurement.js";import{eventInWidget}from"../measurement/widgets.js";import Doc from"../model/Doc.js";import{attachDoc}from"../model/document_data.js";import{Range}from"../model/selection.js";import{extendSelection}from"../model/selection_updates.js";import{ie,ie_version,mobile,webkit}from"../util/browser.js";import{e_preventDefault,e_stop,on,signal,signalDOMEvent}from"../util/event.js";import{copyObj,Delayed}from"../util/misc.js";import{clearDragCursor,onDragOver,onDragStart,onDrop}from"./drop_events.js";import{ensureGlobalHandlers}from"./global_events.js";import{onKeyDown,onKeyPress,onKeyUp}from"./key_events.js";import{clickInGutter,onContextMenu,onMouseDown}from"./mouse_events.js";import{themeChanged}from"./utils.js";import{defaults,optionHandlers,Init}from"./options.js";export function CodeMirror(e,o){if(!(this instanceof CodeMirror))return new CodeMirror(e,o);this.options=o=o?copyObj(o):{},copyObj(defaults,o,!1);let t=o.value;"string"==typeof t?t=new Doc(t,o.mode,null,o.lineSeparator,o.direction):o.mode&&(t.modeOption=o.mode),this.doc=t;let r=new CodeMirror.inputStyles[o.inputStyle](this),n=this.display=new Display(e,t,r,o);n.wrapper.CodeMirror=this,themeChanged(this),o.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),initScrollbars(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Delayed,keySeq:null,specialChars:null},o.autofocus&&!mobile&&n.input.focus(),ie&&ie_version<11&&setTimeout((()=>this.display.input.reset(!0)),20),registerEventHandlers(this),ensureGlobalHandlers(),startOperation(this),this.curOp.forceUpdate=!0,attachDoc(this,t),o.autofocus&&!mobile||this.hasFocus()?setTimeout((()=>{this.hasFocus()&&!this.state.focused&&onFocus(this)}),20):onBlur(this);for(let i in optionHandlers)optionHandlers.hasOwnProperty(i)&&optionHandlers[i](this,o[i],Init);maybeUpdateLineNumberWidth(this),o.finishInit&&o.finishInit(this);for(let i=0;i<initHooks.length;++i)initHooks[i](this);endOperation(this),webkit&&o.lineWrapping&&"optimizelegibility"==getComputedStyle(n.lineDiv).textRendering&&(n.lineDiv.style.textRendering="auto")}CodeMirror.defaults=defaults,CodeMirror.optionHandlers=optionHandlers;export default CodeMirror;function registerEventHandlers(e){let o=e.display;on(o.scroller,"mousedown",operation(e,onMouseDown)),on(o.scroller,"dblclick",ie&&ie_version<11?operation(e,(o=>{if(signalDOMEvent(e,o))return;let t=posFromMouse(e,o);if(!t||clickInGutter(e,o)||eventInWidget(e.display,o))return;e_preventDefault(o);let r=e.findWordAt(t);extendSelection(e.doc,r.anchor,r.head)})):o=>signalDOMEvent(e,o)||e_preventDefault(o)),on(o.scroller,"contextmenu",(o=>onContextMenu(e,o))),on(o.input.getField(),"contextmenu",(t=>{o.scroller.contains(t.target)||onContextMenu(e,t)}));let t,r={end:0};function n(){o.activeTouch&&(t=setTimeout((()=>o.activeTouch=null),1e3),r=o.activeTouch,r.end=+new Date)}function i(e,o){if(null==o.left)return!0;let t=o.left-e.left,r=o.top-e.top;return t*t+r*r>400}on(o.scroller,"touchstart",(n=>{if(!signalDOMEvent(e,n)&&!function(e){if(1!=e.touches.length)return!1;let o=e.touches[0];return o.radiusX<=1&&o.radiusY<=1}(n)&&!clickInGutter(e,n)){o.input.ensurePolled(),clearTimeout(t);let e=+new Date;o.activeTouch={start:e,moved:!1,prev:e-r.end<=300?r:null},1==n.touches.length&&(o.activeTouch.left=n.touches[0].pageX,o.activeTouch.top=n.touches[0].pageY)}})),on(o.scroller,"touchmove",(()=>{o.activeTouch&&(o.activeTouch.moved=!0)})),on(o.scroller,"touchend",(t=>{let r=o.activeTouch;if(r&&!eventInWidget(o,t)&&null!=r.left&&!r.moved&&new Date-r.start<300){let n,s=e.coordsChar(o.activeTouch,"page");n=!r.prev||i(r,r.prev)?new Range(s,s):!r.prev.prev||i(r,r.prev.prev)?e.findWordAt(s):new Range(Pos(s.line,0),clipPos(e.doc,Pos(s.line+1,0))),e.setSelection(n.anchor,n.head),e.focus(),e_preventDefault(t)}n()})),on(o.scroller,"touchcancel",n),on(o.scroller,"scroll",(()=>{o.scroller.clientHeight&&(updateScrollTop(e,o.scroller.scrollTop),setScrollLeft(e,o.scroller.scrollLeft,!0),signal(e,"scroll",e))})),on(o.scroller,"mousewheel",(o=>onScrollWheel(e,o))),on(o.scroller,"DOMMouseScroll",(o=>onScrollWheel(e,o))),on(o.wrapper,"scroll",(()=>o.wrapper.scrollTop=o.wrapper.scrollLeft=0)),o.dragFunctions={enter:o=>{signalDOMEvent(e,o)||e_stop(o)},over:o=>{signalDOMEvent(e,o)||(onDragOver(e,o),e_stop(o))},start:o=>onDragStart(e,o),drop:operation(e,onDrop),leave:o=>{signalDOMEvent(e,o)||clearDragCursor(e)}};let s=o.input.getField();on(s,"keyup",(o=>onKeyUp.call(e,o))),on(s,"keydown",operation(e,onKeyDown)),on(s,"keypress",operation(e,onKeyPress)),on(s,"focus",(o=>onFocus(e,o))),on(s,"blur",(o=>onBlur(e,o)))}let initHooks=[];CodeMirror.defineInitHook=e=>initHooks.push(e);