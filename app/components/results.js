import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
var Data = require('../data/data.json');

class Results extends Component {

  renderPlace() {
    let local = Data.local;
    let localCount = Data.local.length;


    let placeList = local.map((place) =>
      <Link to={{
          pathname: '/location',
          query: { location: place.name , originPage: "results"  }
    }} key={place.name}>
        <div className="results-place" key={place.name}>
          <div className="results-holder">
            <img src={place.images[0]} />
          </div>
          <div className="results-info">
            <h5>{place.name}</h5>
            <p>{place.distance}</p>
          </div>
        </div>
      </Link>
    )

    return (
      <div className="placeList">
        {placeList}
      </div>
    );
  }

  renderContents() {

    return (
      <div className="contents">
  			<div className="contents-header">
  				<p>RESULTS</p>
  			</div>
  			{this.renderPlace()}
		  </div>
    );
  }

  render () {
    return (
      <div className="Results">
        <Link to="/lists">
          <img id="results-back" src="../images/back.png" />
        </Link>
        {this.renderContents()}
      </div>
    )
  }
}

export default Results
