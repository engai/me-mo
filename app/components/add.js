import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
var Data = require('../data/data.json');

import ReactGA from 'react-ga';
ReactGA.initialize('UA-88060315-1');

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
    this.setState({
      location: event.target.value
    });
  }
  handleTagsInput(event) {
    this.setState({
      tags: event.target.value
    });
  }
  handleNotesInput(event) {
    this.setState({
      notes: event.target.value
    });
  }
  handleInfoInput(event) {
    this.setState({
      info: event.target.value
    });
  }

  renderVariation0() {
    if(cxApi.chooseVariation() == 0){
      console.log("Rendered 0")
      return(
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
      )
    }
  }

  renderVariation1() {
    if(cxApi.chooseVariation() == 1){
      console.log("Rendered 1")
      return(
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
          <div id="add-button">
            <span>Add</span>
          </div>
        </Link>
      )
    }
  }

  renderContents() {
    return (
      <div className="contents">
        <div className="add-placeholder">
          <img src="../images/add-place.png" />
        </div>
        <div className="contents-header add-header">
          <p>LOCATION NAME</p>
        </div>
        <input type="location" id="location" placeholder="ex: Cool Taco Place, Nice Bar" onChange={this.handleLocationInput.bind(this)}/>
        <div className="contents-header add-header">
          <p>TAG</p>
        </div>
        <input type="tags" id="tags" placeholder="ex: Family" onChange={this.handleTagsInput.bind(this)}/>
        <div className="contents-header add-header">
          <p>NOTES</p>
        </div>
        <div id="notes">
          <input type="notes" placeholder="Enter Notes" onChange={this.handleNotesInput.bind(this)}/>
        </div>
        <div className="contents-header add-header">
          <p>ADDRESS</p>
        </div>
        <div id="info">
          <input type="info" placeholder={"9500 Gilman Drive"} onChange={this.handleInfoInput.bind(this)}/>
        </div>
        {this.renderVariation0()}
		  </div>
    );
  }

  render () {
    return (
      <div className="Add2">
        {this.renderVariation1()}
        {this.renderContents()}
      </div>
    )
  }
}

export default Add
