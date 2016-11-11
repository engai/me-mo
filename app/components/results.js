import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
var Data = require('../data/data.json');

class Results extends Component {

  constructor(props, context) {
    super(props);
    this.context = context;
    this.props = props;
  }

  renderPlace() {
    let listClicked = this.props.location.query.list;
    let locations = [];

    for(let i in Data.lists){
      if(Data.lists[i].name === listClicked){
        locations = Data.lists[i].locations;
      }
    }

    let placeList = locations.map((name) => {

      let place = {};
      for (let i in Data.local) {
        if(Data.local[i].name === name){
          place = Data.local[i];
        }
      }

      return(
      <Link to={{
          pathname: '/location',
          query: { location: place.name , originPage: "results", listClicked: listClicked }
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
    );
  }
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
  				<p>{this.props.location.query.list}</p>
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

Results.contextTypes = {
  Data: React.PropTypes.object
};

export default Results
