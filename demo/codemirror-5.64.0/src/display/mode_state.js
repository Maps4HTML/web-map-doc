import{getMode}from"../modes.js";import{startWorker}from"./highlight_worker.js";import{regChange}from"./view_tracking.js";export function loadMode(e){e.doc.mode=getMode(e.options,e.doc.modeOption),resetModeState(e)}export function resetModeState(e){e.doc.iter((e=>{e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)})),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,startWorker(e,100),e.state.modeGen++,e.curOp&&regChange(e)}