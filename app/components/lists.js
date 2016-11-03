import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

var Data = require('../data/data.json');

class Lists extends Component {

  renderContents() {
    let lists = Data.lists;
    let listCount = Data.lists.length;

    let listArray = lists.map((list) =>
      <div className="list-item" key={list.name}>
        <div className="list-item-text">
          # {list.name}
        </div>
        <div className="list-item-details">
          {list.locations.length} items • 3 not visited
        </div>
      </div>
    )

    return (
      <div className="contents">
        <div className="contents-header">
  				<p>RECENTLY EDITED</p>
  			</div>
        <div className="list">
  				{listArray}
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
