var blint=require("blint");["mode","lib","addon","keymap"].forEach((function(e){blint.checkDir(e,{browser:!0,allowedGlobals:["CodeMirror","define","test","requirejs","globalThis","WeakSet"],ecmaVersion:5,tabs:"lib"==e})})),["src"].forEach((function(e){blint.checkDir(e,{browser:!0,allowedGlobals:["WeakSet"],ecmaVersion:6,semicolons:!1})})),module.exports={ok:blint.success()};