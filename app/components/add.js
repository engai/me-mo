import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
var Data = require('../data/data.json');

class Add extends Component {

  constructor(props, context) {
    super(props);
    this.context = context;

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
    return (
      <div className="contents">
  			<div className="contents-header">
  				<p>LOCATION NAME</p>
  			</div>
        <input type="location" id="location" placeholder="ex: Cool Taco Place, Nice Bar" onChange={this.handleLocationInput.bind(this)}/>
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
        <Link to={{
              pathname: '/home',
              query: {
                shouldAdd: true,
                name: this.state.location,
                address: this.state.info,
                tags: [this.state.tags],
                notes: this.state.notes
              }
        }}>
          <div className="add-button">
            <span>Add</span>
          </div>
        </Link>
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
