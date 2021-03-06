import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Location extends Component {

  constructor(props, context) {
    super(props);
    this.context = context;
    this.props = props;

    let Data = this.context.Data;

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

  renderContents() {
    let Data = this.context.Data;
    let name = this.props.location.query.location;
    let place;

    for(let i in Data.local){
      if(Data.local[i].name === name ){
        place = Data.local[i];
        break;
      }
    }

    return (
      <div className="contents">
        <div className="image-placeholder">
          <img src={place.images[0]} />
        </div>
  			<div className="contents-header">
  				<p>LOCATION NAME</p>
  			</div>
        <input type="location" id="location" value={place.name} onChange={this.handleLocationInput.bind(this)}/>
        <div className="contents-header">
  				<p>TAG</p>
  			</div>
        <input type="tags" id="tags" value={place.tags} onChange={this.handleTagsInput.bind(this)}/>
        <div className="contents-header">
  				<p>NOTES</p>
  			</div>
        <div id="notes">
          <input type="notes" value={place.notes} onChange={this.handleNotesInput.bind(this)}/>
        </div>
        <div className="contents-header">
  				<p>ADDRESS</p>
  			</div>
        <div id="info">
          <input type="info" value={place.address} onChange={this.handleInfoInput.bind(this)}/>
        </div>
		  </div>
    );
  }

  render () {

    let origin;
    if(this.props.location.query.originPage === "home"){
      origin = "/home";
    }
    else if(this.props.location.query.originPage === "search") {
        origin = {
          pathname: "/results",
          query : {
            list: this.props.location.query.listClicked,
            originPage: "home"
          }
        }
    }
    else{
      origin = {
        pathname: "/results",
        query : {
          list: this.props.location.query.listClicked
        }
      }
    }

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

Location.contextTypes = {
  Data: React.PropTypes.object
};

export default Location
