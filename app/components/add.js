import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Add extends Component {

  renderContents() {
    return (
      <div className="contents">
  			<div className="contents-header">
  				<p>Add</p>
  			</div>
		  </div>
    );
  }


  render () {
    return (
      <div className="Add">
        {this.renderContents()}
      </div>
    )
  }
}


export default Add
