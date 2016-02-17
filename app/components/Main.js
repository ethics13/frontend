// var React = require('react');
// var ReactDom = require('react-dom');

import React from 'react';
// import ReactDom from 'react-dom';

export class Main extends React.Component {
	render() {
		return (


<div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            MENU
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}








			// <div>YOU DID IT</div>
// 		);
// 	}
// }



// var Main = React.createClass({
// 	render: function(){
// 		return(
// 			<div>
// 			Hello Dufus
// 			</div>
// 			)
// 	}
// });

// ReactDom.render(<Main />, document.getElementById('app'))
module.exports = Main;