// initialize language objects
var cplusplus = {weaklytyped: false, compiled: true, independentcmds: false, nativeexecution: true, cdialect: true};
var java = {weaklytyped: false, compiled: true, independentcmds: false, nativeexecution: false, cdialect: false};
var javascript = {weaklytyped: true, compiled: false, independentcmds: false, nativeexecution: false, cdialect: false};
var python = {weaklytyped: false, compiled: false, independentcmds: true, nativeexecution: false, cdialect: false, datadifffunctions: true};
var rust = {weaklytyped: false, compiled: true, independentcmds: false, nativeexecution: true, cdialect: false};
var bash = {weaklytyped: true, compiled: false, independentcmds: true, nativeexecution: false, cdialect:false};
var applescript = {weaklytyped: true, compiled: true, independentcmds: false, nativeexecution: false, cdialect: false};
var ruby = {weaklytyped: false, compiled: false, independentcmds: true, nativeexecution: false, cdialect: false, datadifffunctions: false};

console.log("learned languages");

var currentQuestion = "weaklytyped";
var answers = {weaklytyped: null, compiled: null, independentcmds: null, nativeexecution: null, cdialect: null, datadifffunctions: null};

var determinedLanguage = "unknown";
var languageImage = "http://icons.iconarchive.com/icons/kyo-tux/phuzion/256/Sign-Error-icon.png";

function check() {
	console.log("check running");
	
	var answersText = document.getElementById("answers");

	// template
/*if (answers.weaklytyped == REPLACEMECHECK.weaklytyped &&
	answers.compiled == REPLACEMECHECK.compiled &&
	answers.independentcmds == REPLACEMECHECK.independentcmds &&
	answers.nativeexecution == REPLACEMECHECK.nativeexecution &&
	answers.cdialect == REPLACEMECHECK.cdialect)
{
	determinedLanguage = "REPLACEMECHECK";
}*/

	if (answers.weaklytyped == cplusplus.weaklytyped &&
		answers.compiled == cplusplus.compiled &&
		answers.independentcmds == cplusplus.independentcmds &&
		answers.nativeexecution == cplusplus.nativeexecution &&
		answers.cdialect == cplusplus.cdialect)
	{
		determinedLanguage = "C++";
		languageImage = "http://www.pgpnet.dk/images/c++-logo.png";
	}

	if (answers.weaklytyped == java.weaklytyped &&
	    answers.compiled == java.compiled &&
	    answers.independentcmds == java.independentcmds &&
	    answers.nativeexecution == java.nativeexecution &&
	    answers.cdialect == java.cdialect) {
		determinedLanguage = "Java";
		languageImage = "http://gigaom2.files.wordpress.com/2011/08/java-logo.jpg";
	}

	if (answers.weaklytyped == javascript.weaklytyped &&
	    answers.compiled == javascript.compiled &&
	    answers.independentcmds == javascript.independentcmds &&
	    answers.nativeexecution == javascript.nativeexecution &&
	    answers.cdialect == javascript.cdialect)
		{
		determinedLanguage = "JavaScript";
		langaugeImage = "http://blueraiden.exofire.net/blog/wp-content/uploads/2011/09/javascript_logo.gif"
	}

	if (answers.weaklytyped == python.weaklytyped &&
	    answers.compiled == python.compiled &&
	    answers.independentcmds == python.independentcmds &&
	    answers.nativeexecution == python.nativeexecution &&
	    answers.cdialect == python.cdialect &&
	    answers.datadifffunctions == python.datadifffunctions)
	{
		determinedLanguage = "Python";
		languageImage = "http://www.python.org/community/logos/python-logo-master-v3-TM.png";
	}

	if (answers.weaklytyped == rust.weaklytyped &&
	    answers.compiled == rust.compiled &&
	    answers.independentcmds == rust.independentcmds &&
	    answers.nativeexecution == rust.nativeexecution &&
		answers.cdialect == rust.cdialect)
	{
		determinedLanguage = "Rust";
		languageImage = "http://www.rust-lang.org/logos/rust-logo-128x128-blk.png";
	}

	if (answers.weaklytyped == bash.weaklytyped &&
	    answers.compiled == bash.compiled &&
	    answers.independentcmds == bash.independentcmds &&
	    answers.nativeexecution == bash.nativeexecution &&
	    answers.cdialect == bash.cdialect)
	{
		determinedLanguage = "bash";
		languageImage = "http://blog.tuxforge.com/wp-content/uploads/2011/09/bash-logo-small.jpg";
	}

	if (answers.weaklytyped == applescript.weaklytyped &&
	    answers.compiled == applescript.compiled &&
	    answers.independentcmds == applescript.independentcmds &&
	    answers.nativeexecution == applescript.nativeexecution &&
	    answers.cdialect == applescript.cdialect)
	{
		determinedLanguage = "AppleScript";
		languageImage = "http://i1-news.softpedia-static.com/images/news2/How-To-Create-New-Text-File-in-Finder-2.png";
	}
	
	if (answers.weaklytyped == ruby.weaklytyped &&
		answers.compiled == ruby.compiled &&
		answers.independentcmds == ruby.independentcmds &&
		answers.nativeexecution == ruby.nativeexecution &&
		answers.cdialect == ruby.cdialect &&
		answers.datadifffunctions == ruby.datadifffunctions)
	{
		determinedLanguage = "Ruby";
		languageImage = "http://www.ruby-lang.org/images/logo.gif";
	}
	
	if (determinedLanguage != "unknown") {
		document.getElementById("questions").hidden = "true";
		answersText.innerHTML = "<p>Your language is " + determinedLanguage + ".</p> <br /> <img src=\"" + languageImage + "\" />";
		answersText.removeAttribute("hidden");
	}

}

function ask(answeredYes) {

	console.log("ask run");
	
	if (currentQuestion == "weaklytyped") {
	
	console.log("weakly typed if run");
		if (answeredYes) {
			console.log("variable set to true");
			answers.weaklytyped = true;
		} else {
			console.log("variable set to false");
			answers.weaklytyped = false;
		}
		document.getElementById("question").innerHTML = "Is the language compiled?";
		console.log("changed question");
		currentQuestion = "compiled";
		
	} else if (currentQuestion == "compiled") {
	
		if (answeredYes) {
			answers.compiled = true;
		} else {
			answers.compiled = false;
		}
		document.getElementById("question").innerHTML = "Can you run language commands independently, for example, on an interactive console?";
		currentQuestion = "independentcmds";
		
	} else if (currentQuestion == "independentcmds") {
	
		if (answeredYes) {
			answers.independentcmds = true;
		} else {
			answers.independentcmds = false;
		}
		document.getElementById("question").innerHTML = "Is the language executed natively - directly on the processor - instead of, for example, a virtual machine?";
		currentQuestion = "nativeexecution";
		
	} else if (currentQuestion == "nativeexecution") {
	
		if (answeredYes) {
			answers.nativeexecution = true;
		} else {
			answers.nativeexecution = false;
		}
		document.getElementById("question").innerHTML = "Is the language a C dialect?";
		currentQuestion = "cdialect";
		
	} else if (currentQuestion == "cdialect") {
	
		if (answeredYes) {
			answers.cdialect = true;
		} else {
			answers.cdialect = false;
		}
		document.getElementById("question").innerHTML = "Does the language differentiate between functions and data?";
		currentQuestion = "datadifffunctions";
		
	} else if (currentQuestion == "datadifffunctions") {
		
		if (answeredYes) {
			answers.datadifffunctions = true;
		} else {
			answers.datadifffunctions = false;
		}
		
	}
	check();
}

function transition() {
	console.log("starting transition");
	var startscreen = document.getElementById("startscreen");
	var questions = document.getElementById("questions");
	var yesbutton = document.getElementById("yesbutton");
	var nobutton = document.getElementById("nobutton");
	console.log("got element objects");

	startscreen.hidden = "true";
	console.log("startscreen hidden");
	questions.removeAttribute("hidden");
	//yesbutton.hidden = "false";
	//nobutton.hidden = "false";
	console.log("questions shown");
	console.log("ended transition");
}