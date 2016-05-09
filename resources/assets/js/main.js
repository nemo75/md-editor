' use strict'
var React = require('react');
var ReactDOM = require('react-dom');


// console.log(myCodeMirror);

// function setOutput(val){
// 	var result = document.getElementById('code');
// 	console.log(result.innerHTML);
// 	$(".result").append(result.innerHTML);
// }
// setOutput();

var Message = React.createClass({
	render : function() {
		return (
			<div>{this.props.text}</div>
			);
	}
});

var Input = React.createClass({
	inputChange: function(e){
		this.props.onChange(e.target.value)
	},
	handleSubmit : function(e) {
		e.preventDefault();
		this.setState({text: ' '});
	},
	render : function() {
		return (
			<form onSubmit={this.handleSubmit}>
			<label for="">Type your Markdown</label>
			<textarea onChange={this.inputChange} value={this.props.text} id="code" cols="150" rows="20"/>
			</form>
			);
	}
});
var Result = React.createClass({
	getInitialState: function(){
		return {text:''};
	},
	onChange : function (text) {
		this.setState({text})
	},
	render : function() {
		return (
			<div className="container">
			<div id="editeur"><Container onChange={this.onChange}/></div>
			<div className="contain">
			<label>Your results</label>
			<div id="resultat"><Message text={this.state.text}/></div>
			</div>
			</div>
			);
	}
});

var Container = React.createClass({
	getInitialState: function(){
		return {text:''};
	},
	render : function() {
		return (
			<div className="editeur">
			<Input value={this.state.text} onChange={this.props.onChange}/>
			</div>
			);
	}
});

ReactDOM.render(
	<Result />,
	document.getElementById('big')
);

var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
	lineNumbers: true,
	matchBrackets: true,
	lineWrapping: true,
	mode: 'markdown'
});