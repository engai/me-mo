/*jshint esnext: true */
import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
require('./css/global.css');

import Nav from './components/nav';
import Tabs from './components/tabs';
import Home from './components/home';
import Add from './components/add';
import Add2 from './components/add2';
import Lists from './components/lists';
import Login from './components/login';
import Results from './components/results';
import Location from './components/location';
import ReactGA from 'react-ga';
var Data = require('./data/data.json');

ReactGA.initialize('UA-88060315-1');

class Memo extends Component {
  getChildContext() {
    return {Data: Data};
  }

  sendToGoogle() {
    ReactGA.pageview(window.location.hash);
  }

  render () {
    return (
      <Router onUpdate={this.sendToGoogle} history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/add' component={Add} />
          <Route path='/add2' component={Add2} />
          <Route path='/lists' component={Lists} />
          <Route path='/results' component={Results} />
          <Route path='/location' component={Location} />
        </Route>
      </Router>
    )
  }
}

const Container = (props) => <div>
  <Tabs />
  <Nav />
  {props.children}
</div>

Memo.childContextTypes = {
  Data: React.PropTypes.object
};

export default Memo
