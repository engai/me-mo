import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Lists extends Component {

  renderContents() {
    return (
      <div className="contents">
  			<div className="contents-header">
  				<p>Lists</p>
  			</div>
		  </div>
    );
  }

  render () {
    return (
      <div className="Lists">
        {this.renderContents()}
      </div>
    )
  }
}

export default Lists
