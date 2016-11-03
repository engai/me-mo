/*jshint esnext: true */
import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
require('./css/global.css');

import Nav from './components/nav';
import Tabs from './components/tabs';
import Home from './components/home';
import Add from './components/add';
import Lists from './components/lists';

class Memo extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/add' component={Add} />
          <Route path='/lists' component={Lists} />
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

export default Memo
