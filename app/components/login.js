import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

var Data = require('../data/data.json');

class Login extends Component {

  render () {
    return (
      <div className="Login">
          <div className="Login-image"></div>
          <div className="Login-contents">
            <h1>me-mo</h1>
            <input type="username" id="username" placeholder="Username" />
            <input type="password" id="password" placeholder="Password" />
            <div className="Login-contents-buttons">
              <Link to='/home'>
                <div className="Login-contents-buttons-login">
                  Login
                </div>
              </Link>
              <Link to='/home'>
                <div className="Login-contents-buttons-signup">
                  Signup
                </div>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default Login
