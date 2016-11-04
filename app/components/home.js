import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
var Data = require('../data/data.json');

class Home extends Component {

  renderSearch() {
    return (
        <div className="search">
          <form action="#/results">
            <img src="../images/search.png" />
    				<input type="search" id="search" placeholder="Search" />
          </form>
  		  </div>
    );
  }

  renderPlace() {
    let local = Data.local;
    let localCount = Data.local.length;

    let placeList = local.map((place) =>
    <Link to={{
        pathname: '/location',
        query: { location: place.name, originPage: "home" }
  }} key={place.name}>
      <div className="place" key={place.name}>
        <div className="place-holder">
          <img src={place.images[0]} />
        </div>
        <div className="place-info">
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
      <div className="contents contents-home">
  			<div className="contents-header">
  				<p>WHAT'S NEARBY?</p>
  			</div>
  			{this.renderPlace()}
		  </div>
    );
  }

  render () {
    return (
      <div className="Home">
        {this.renderSearch()}
        {this.renderContents()}
      </div>
    )
  }
}

export default Home
