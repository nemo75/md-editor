' use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var md = require('markdown-it')();


var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
	lineNumbers: true,
	matchBrackets: true,
	lineWrapping: true,
	mode: 'markdown'
});
console.log(myCodeMirror);

function setOutput(val){
	var result = document.getElementById('code');
	console.log(result.innerHTML);
	$(".result").append(result);
}
setOutput();