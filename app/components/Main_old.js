// var React = require('react');
// var ReactDom = require('react-dom');

import React from 'react';
import ReactDom from 'react-dom';

export class Main extends React.Component {
	render() {
		return (
			<div>YOU DID IT</div>
		);
	}
}



// var Main = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 			Hello Dufus
// 			</div>
// 			)
// 	}
// });

ReactDom.render(<Main />, document.getElementById('app'))