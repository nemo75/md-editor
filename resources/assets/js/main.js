' use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');





var App = React.createClass({
 	componentDidMount: function(){
 		console.log("didmount")
 		// var result = this.options.getValue(); 

 		 // function  prout(){
 		 // 	console.log(result);
 		 // }
		 // setInterval(prout, 1050)
 	},
	getInitialState: function(){
		return {
			code: ""
		};
	},
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});
			$(".ReactCodeMirror").on("keypress keyup keydown",function(e){
				var code = " ";
				$('#resultat').append(code);
			});
	},
	render: function() {
		var options = {
			lineNumbers: true,
			matchBrackets: true,
			lineWrapping: true,
			mode: "markdown"
		};
		return <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
	}
});

ReactDOM.render(<App />, document.getElementById('big'));































// var Message = React.createClass({
// 	render : function() {
// 		return (
// 			<div>{this.props.text}</div>
// 			);
// 	}
// });

// var Input = React.createClass({
// 	inputChange: function(e){
// 		this.props.onChange(e.target.value)
// 		console.log("inputhcnage")
// 	},
// 	componentDidMount: function(){
// 		console.log("didmount")
// 		var textArea = document.getElementById('code');
// 		var myCodeMirror = CodeMirror.fromTextArea(textarea, {
// 			lineNumbers: true,
// 			matchBrackets: true,
// 			lineWrapping: true,
// 			mode: 'markdown',	
// 		}); 
// 			 var result = myCodeMirror.getValue(); 

// 		 // function  prout(){
// 		 // 	console.log(result);
// 		 // }
// 		 // setInterval(prout, 1050)

 
// 	},
// 	handleSubmit : function(e) {
// 		console.log("fefe")
// 		e.preventDefault();
// 		this.setState({text: ' '});
// 	},
// 	render : function() {
// 		return (
// 			<form onSubmit={this.handleSubmit} >
// 				<label>Type your Markdown</label>
// 				<textarea  id="code" value={this.props.text}  cols="100" rows="20"></textarea>
// 				<button type="submit">Post</button>
// 			</form>
// 			);
// 	}
// });
// var Result = React.createClass({
// 	getInitialState: function(){
// 		return {text:''};
// 	},
// 	onChange : function (text) {
// 		this.setState({text})
// 	},
// 	render : function() {
// 		return (
// 			<div className="container">
// 			<div id="editeur"><Container onChange={this.onChange}/></div>
// 			<div className="contain">
// 			<label>Your results</label>
// 			<div id="resultat"><Message text={this.state.text}/></div>
// 			</div>
// 			</div>
// 			);
// 	}
// });

// var Container = React.createClass({
// 	getInitialState: function(){
// 		return {text:''};
// 	},
// 	render : function() {
// 		return (
// 			<Input value={this.state.text} onChange={this.props.onChange}/>
// 			);
// 	}
// });

// ReactDOM.render(
// 	<Result />,
// 	document.getElementById('big')
// );