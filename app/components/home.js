import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Home extends Component {

  constructor(props, context) {
    super(props);
    this.context = context;
    this.props = props;

    let Data = this.context.Data;
  }

  renderSearch() {
    return (
        <div className="search">
          <form action="#/results?list=%23Summer16&originPage=home">
            <img src="../images/search.png" />
    				<input type="search" id="search" placeholder="Search Nearby Location" />
          </form>
  		  </div>
    );
  }

  renderConfirm() {
    return (
        <div className="confirm">
          <img src="../images/confirm.png" />
  		  </div>
    );
  }

  renderPlace() {
    let Data = this.context.Data;
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
          <p>{place.distance} mi.</p>
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

  componentDidMount () {
    let Data = this.context.Data;
    let addingJSON = this.props.location.query;
    if (addingJSON.shouldAdd){

      Data.local.unshift({
        "name": addingJSON.name,
        "address": addingJSON.address,
        "distance": 0.8,
        "category": "",
        "tags": ["#"+addingJSON.tags],
        "hours": "M-F 11:00AM - 10:00PM",
        "notes": addingJSON.notes,
        "images": ["../images/add-place.png"]
      });

      this.props.location.query.shouldAdd = false;
      let exists = false;

      for(let i in Data.lists){
        if(("#"+addingJSON.tags) === Data.lists[i].name){
          Data.lists[i].locations.unshift(addingJSON.name);
          exists = true;
          break;
        }
      }

      if(!exists) {
        Data.lists.unshift({
          "name": "#"+addingJSON.tags,
          "locations": [addingJSON.name]
        })
      }
    }
  }

  render () {
    let confirm = this.props.location.query.shouldAdd? this.renderConfirm() : null;

    return (
      <div className="Home">
        { confirm }
        {this.renderSearch()}
        {this.renderContents()}
      </div>
    )
  }
}

Home.contextTypes = {
  Data: React.PropTypes.object
};

export default Home
