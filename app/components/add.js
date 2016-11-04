import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Add extends Component {

  renderContents() {
    return (
      <div className="contents">
  			<div className="contents-header">
  				<p>LOCATION NAME</p>
  			</div>
        <input type="location" id="location" placeholder="ex: Cool Taco Place, Nice Bar" />
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
        <input type="location" id="location" placeholder="ex: #Family #Summer16 #Food" />
        <div className="contents-header">
  				<p>NOTES</p>
  			</div>
        <input type="notes" id="notes" placeholder="Enter Notes" />
        <div className="contents-header">
  				<p>INFO</p>
  			</div>
        <input type="info" id="info" placeholder={"9500 Gilman Drive"} />
        <div className="contents-header">
  				<p>MAP</p>
  			</div>
        <div className="map">
          <img src="../images/map.png" />
        </div>
        <Link to='/home'>
          <div className="add-button">
            Add
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
