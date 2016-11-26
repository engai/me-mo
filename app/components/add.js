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

  componentWillMount() {
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.async = true;

    let hi = `function utmx_section(){}function utmx(){}(function(){var
    k='134638487-0',d=document,l=d.location,c=d.cookie;
    if(l.search.indexOf('utm_expid='+k)>0)return;
    function f(n){if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.
    indexOf(';',i);return escape(c.substring(i+n.length+1,j<0?c.
    length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;d.write(
    '<sc'+'ript src="'+'http'+(l.protocol=='https:'?'s://ssl':
    '://www')+'.google-analytics.com/ga_exp.js?'+'utmxkey='+k+
    '&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='+new Date().
    valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
    '" type="text/javascript" charset="utf-8"><\/sc'+'ript>')})();`

    script.append(hi);
    script.append("utmx('url','A/B');")
    document.head.prepend(script);
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
      <div className="Add2">
        {this.renderContents()}
      </div>
    )
  }
}

export default Add
