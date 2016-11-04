import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
var Data = require('../data/data.json');

class Location extends Component {

  constructor(props, context) {
    super(props);
    this.context = context;
    this.props = props;

    let name = this.props.location.query.location;
    let currentData = null;

    for(let i = 0; i < Data.local.length; i++){
      if(name === Data.local[i].name){
        currentData = Data.local[i];
        break;
        console.log(i);
      }
    }

    this.state = {
      location: "",
      tags: "",
      notes: "",
      info: "",
    };
  }

  handleLocationInput(event) {
    console.log(event.target.value);
    this.setState({
      location: event.target.value
    });
  }
  handleTagsInput(event) {
    console.log(event.target.value);
    this.setState({
      tags: event.target.value
    });
  }
  handleNotesInput(event) {
    console.log(event.target.value);
    this.setState({
      notes: event.target.value
    });
  }
  handleInfoInput(event) {
    console.log(event.target.value);
    this.setState({
      info: event.target.value
    });
  }
  handleDataUpdate(event) {

    event.preventDefault();
    console.log("hi1");
    let exists = false;

    Data.local.push({
      "name": this.state.location,
      "address": this.state.info,
      "tags": [this.state.tags],
      "notes": this.state.notes
    });

    console.log("hi2");
    for(var i = 0; i < Data.lists.length; i++){
      if(Data.lists[i].name === this.state.tags){
        Data.lists[i].locations.unshift(this.state.location);
        exists = true;
      }
    }
    console.log("hi3");

    if(!exists) {
      Data.lists.push({
        "name": this.state.tags,
        "locations": [this.state.location]
      })
    }
  }

  renderContents() {
    return (
      <div className="contents">
  			<div className="contents-header">
  				<p>LOCATION NAME</p>
  			</div>
        <input type="location" id="location" value={this.props.location.query.location} onChange={this.handleLocationInput.bind(this)}/>
        <div className="contents-header">
  				<p>IMAGES</p>
  			</div>
        <div id="images">
          <img src="../images/addphoto.png" />
          <img src="../images/placeholder.png" />
          <img src="../images/placeholder.png" />
          <img src="../images/placeholder.png" />
        </div>
        <div className="contents-header">
  				<p>TAGS</p>
  			</div>
        <input type="tags" id="tags" placeholder="ex: #Family #Summer16 #Food" onChange={this.handleTagsInput.bind(this)}/>
        <div className="contents-header">
  				<p>NOTES</p>
  			</div>
        <input type="notes" id="notes" placeholder="Enter Notes" onChange={this.handleNotesInput.bind(this)}/>
        <div className="contents-header">
  				<p>INFO</p>
  			</div>
        <input type="info" id="info" placeholder={"9500 Gilman Drive"} onChange={this.handleInfoInput.bind(this)}/>
        <div className="contents-header">
  				<p>MAP</p>
  			</div>
        <div className="map">
          <img src="../images/map.png" />
        </div>
		  </div>
    );
  }

  render () {

    console.log(this.props.location.query.originPage);

    let origin;
    if(this.props.location.query.originPage === "home"){
      origin = "/home";
    }
    else{
      origin = "/results";
    }

    console.log(origin);

    return (
      <div className="Location">
        <Link to={origin}>
          <img id="location-back" src="../images/back.png" />
        </Link>
        {this.renderContents()}
      </div>
    )
  }
}


export default Location
