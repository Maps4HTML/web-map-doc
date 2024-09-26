!function(){"use strict";namespace="contenteditable_";var e=CodeMirror.Pos;function t(e,n){if(e instanceof CodeMirror&&(e=e.getInputField()),1==e.nodeType)for(var o=e.firstChild;o;o=o.nextSibling){var a=t(o,n);if(a)return a}else if(3==e.nodeType&&e.nodeValue==n)return e}function n(e){for(;;){var t=e.parentNode;if(/CodeMirror-code/.test(t.className))return e;e=t}}testCM("insert_text",(function(e){t(e,"foobar").nodeValue="foo bar",e.display.input.updateFromDOM(),eq(e.getValue(),"foo bar")}),{inputStyle:"contenteditable",value:"foobar"}),testCM("split_line",(function(o){o.setSelection(e(2,3));var a=t(o,"foobar");a.nodeValue="foo";var i=n(a);i.parentNode.insertBefore(document.createElement("pre"),i.nextSibling).textContent="bar",o.display.input.updateFromDOM(),eq(o.getValue(),"one\ntwo\nfoo\nbar\nthree\nfour\n")}),{inputStyle:"contenteditable",value:"one\ntwo\nfoobar\nthree\nfour\n"}),testCM("join_line",(function(o){o.setSelection(e(2,3));var a=t(o,"foo");a.nodeValue="foobar";var i=n(a);i.parentNode.removeChild(i.nextSibling),o.display.input.updateFromDOM(),eq(o.getValue(),"one\ntwo\nfoobar\nthree\nfour\n")}),{inputStyle:"contenteditable",value:"one\ntwo\nfoo\nbar\nthree\nfour\n"}),testCM("delete_multiple",(function(o){o.setSelection(e(1,3),e(4,0));for(var a=t(o,"two"),i=n(a),l=0;l<3;l++)i.parentNode.removeChild(i.nextSibling);a.nodeValue="twothree",o.display.input.updateFromDOM(),eq(o.getValue(),"one\ntwothree\nfour\n")}),{inputStyle:"contenteditable",value:"one\ntwo\nfoo\nbar\nthree\nfour\n"}),testCM("ambiguous_diff_middle",(function(n){n.setSelection(e(0,2)),t(n,"baah").nodeValue="baaah",n.display.input.updateFromDOM(),eqCharPos(n.getCursor(),e(0,3))}),{inputStyle:"contenteditable",value:"baah"}),testCM("ambiguous_diff_start",(function(n){n.setSelection(e(0,1)),t(n,"baah").nodeValue="baaah",n.display.input.updateFromDOM(),eqCharPos(n.getCursor(),e(0,2))}),{inputStyle:"contenteditable",value:"baah"}),testCM("ambiguous_diff_end",(function(n){n.setSelection(e(0,3)),t(n,"baah").nodeValue="baaah",n.display.input.updateFromDOM(),eqCharPos(n.getCursor(),e(0,4))}),{inputStyle:"contenteditable",value:"baah"}),testCM("force_redraw",(function(e){t(e,"foo").parentNode.appendChild(document.createElement("hr")).className="inserted",e.display.input.updateFromDOM(),eq(byClassName(e.getInputField(),"inserted").length,0)}),{inputStyle:"contenteditable",value:"foo"}),testCM("type_on_empty_line",(function(n){n.setSelection(e(1,0)),t(n,"\u200b").nodeValue+="hello",n.display.input.updateFromDOM(),eq(n.getValue(),"foo\nhello\nbar")}),{inputStyle:"contenteditable",value:"foo\n\nbar"}),testCM("type_after_empty_line",(function(n){n.setSelection(e(2,0)),t(n,"bar").nodeValue="hellobar",n.display.input.updateFromDOM(),eq(n.getValue(),"foo\n\nhellobar")}),{inputStyle:"contenteditable",value:"foo\n\nbar"}),testCM("type_before_empty_line",(function(n){n.setSelection(e(0,3)),t(n,"foo").nodeValue="foohello",n.display.input.updateFromDOM(),eq(n.getValue(),"foohello\n\nbar")}),{inputStyle:"contenteditable",value:"foo\n\nbar"})}();