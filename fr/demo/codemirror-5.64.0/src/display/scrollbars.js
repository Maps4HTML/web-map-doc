import{addClass,elt,rmClass}from"../util/dom.js";import{on}from"../util/event.js";import{scrollGap,paddingVert}from"../measurement/position_measurement.js";import{ie,ie_version,mac,mac_geMountainLion}from"../util/browser.js";import{updateHeightsInViewport}from"./update_lines.js";import{Delayed}from"../util/misc.js";import{setScrollLeft,updateScrollTop}from"./scrolling.js";export function measureForScrollbars(t){let e=t.display,l=e.gutters.offsetWidth,i=Math.round(t.doc.height+paddingVert(t.display));return{clientHeight:e.scroller.clientHeight,viewHeight:e.wrapper.clientHeight,scrollWidth:e.scroller.scrollWidth,clientWidth:e.scroller.clientWidth,viewWidth:e.wrapper.clientWidth,barLeft:t.options.fixedGutter?l:0,docHeight:i,scrollHeight:i+scrollGap(t)+e.barHeight,nativeBarWidth:e.nativeBarWidth,gutterWidth:l}}class NativeScrollbars{constructor(t,e,l){this.cm=l;let i=this.vert=elt("div",[elt("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),r=this.horiz=elt("div",[elt("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=r.tabIndex=-1,t(i),t(r),on(i,"scroll",(()=>{i.clientHeight&&e(i.scrollTop,"vertical")})),on(r,"scroll",(()=>{r.clientWidth&&e(r.scrollLeft,"horizontal")})),this.checkedZeroWidth=!1,ie&&ie_version<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}update(t){let e=t.scrollWidth>t.clientWidth+1,l=t.scrollHeight>t.clientHeight+1,i=t.nativeBarWidth;if(l){this.vert.style.display="block",this.vert.style.bottom=e?i+"px":"0";let l=t.viewHeight-(e?i:0);this.vert.firstChild.style.height=Math.max(0,t.scrollHeight-t.clientHeight+l)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(e){this.horiz.style.display="block",this.horiz.style.right=l?i+"px":"0",this.horiz.style.left=t.barLeft+"px";let e=t.viewWidth-t.barLeft-(l?i:0);this.horiz.firstChild.style.width=Math.max(0,t.scrollWidth-t.clientWidth+e)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&t.clientHeight>0&&(0==i&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:l?i:0,bottom:e?i:0}}setScrollLeft(t){this.horiz.scrollLeft!=t&&(this.horiz.scrollLeft=t),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")}setScrollTop(t){this.vert.scrollTop!=t&&(this.vert.scrollTop=t),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")}zeroWidthHack(){let t=mac&&!mac_geMountainLion?"12px":"18px";this.horiz.style.height=this.vert.style.width=t,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new Delayed,this.disableVert=new Delayed}enableZeroWidthBar(t,e,l){t.style.pointerEvents="auto",e.set(1e3,(function i(){let r=t.getBoundingClientRect();("vert"==l?document.elementFromPoint(r.right-1,(r.top+r.bottom)/2):document.elementFromPoint((r.right+r.left)/2,r.bottom-1))!=t?t.style.pointerEvents="none":e.set(1e3,i)}))}clear(){let t=this.horiz.parentNode;t.removeChild(this.horiz),t.removeChild(this.vert)}}class NullScrollbars{update(){return{bottom:0,right:0}}setScrollLeft(){}setScrollTop(){}clear(){}}export function updateScrollbars(t,e){e||(e=measureForScrollbars(t));let l=t.display.barWidth,i=t.display.barHeight;updateScrollbarsInner(t,e);for(let r=0;r<4&&l!=t.display.barWidth||i!=t.display.barHeight;r++)l!=t.display.barWidth&&t.options.lineWrapping&&updateHeightsInViewport(t),updateScrollbarsInner(t,measureForScrollbars(t)),l=t.display.barWidth,i=t.display.barHeight}function updateScrollbarsInner(t,e){let l=t.display,i=l.scrollbars.update(e);l.sizer.style.paddingRight=(l.barWidth=i.right)+"px",l.sizer.style.paddingBottom=(l.barHeight=i.bottom)+"px",l.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(l.scrollbarFiller.style.display="block",l.scrollbarFiller.style.height=i.bottom+"px",l.scrollbarFiller.style.width=i.right+"px"):l.scrollbarFiller.style.display="",i.bottom&&t.options.coverGutterNextToScrollbar&&t.options.fixedGutter?(l.gutterFiller.style.display="block",l.gutterFiller.style.height=i.bottom+"px",l.gutterFiller.style.width=e.gutterWidth+"px"):l.gutterFiller.style.display=""}export let scrollbarModel={native:NativeScrollbars,null:NullScrollbars};export function initScrollbars(t){t.display.scrollbars&&(t.display.scrollbars.clear(),t.display.scrollbars.addClass&&rmClass(t.display.wrapper,t.display.scrollbars.addClass)),t.display.scrollbars=new scrollbarModel[t.options.scrollbarStyle]((e=>{t.display.wrapper.insertBefore(e,t.display.scrollbarFiller),on(e,"mousedown",(()=>{t.state.focused&&setTimeout((()=>t.display.input.focus()),0)})),e.setAttribute("cm-not-content","true")}),((e,l)=>{"horizontal"==l?setScrollLeft(t,e):updateScrollTop(t,e)}),t),t.display.scrollbars.addClass&&addClass(t.display.wrapper,t.display.scrollbars.addClass)}