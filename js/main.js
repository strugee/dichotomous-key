// initialize language objects
/*var cplusplus;
var java;
var javascript;
var python;
var rust;
var bash;
var applescript;*/

// learn c++
var cplusplus.weaklytyped = false;
var cplusplus.compiled = true;
var cplusplus.independentcmds = false;
var cplusplus.nativeexecution = true;
var cplusplus.cdialect = true;

// learn java
var java.weaklytyped = false;
var java.compiled = true;
var java.independentcmds = false;
var java.nativeexecution = false;
var java.cdialect = false;

// learn javascript
var javascript.weaklytyped = true;
var javascript.compiled = false;
var javascript.independentcmds = false;
var javascript.nativeexecution = false;
var javascript.cdialect = false;

// learn python
var python.weaklytyped = false;
var python.compiled = false;
var python.independentcmds = true;
var python.nativeexecution = false;
var python.cdialect = false;

// learn rust
var rust.weaklytyped = false;
var rust.compiled = true;
var rust.independentcmds = false;
var rust.nativeexecution = true;
var rust.cdialect = false;
b
// learn bash
var bash.weaklytyped = true;
var bash.compiled = false;
var bash.independentcmds = true;
var bash.nativeexecution = false;
var bash.cdialect = false;

// learn applescript
var applescript.weaklytyped = true;
var applescript.compiled = true;
var applescript.independentcmds = false;
var applescript.nativeexecution = false;
var applescript.cdialect = false;

console.log("learned languages");

function transition() {
	var startscreen = document.getElementById('startscreen');
	var questions = document.getElementById('questions');
	
	startscreen.hidden='true';
	questions.hidden='false';
}