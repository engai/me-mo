import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

const Tabs = () => (
  <div className="tabs">
    <div className="tabs__buttons">
      <IndexLink activeClassName='tabs-active' to='/add'>
        <div className="tabs__buttons-set">
					  <img id="icon-add" src="./images/add.png" />

				</div>
      </IndexLink>
      <IndexLink activeClassName='tabs-active' to='/home'>
        <div className="tabs__buttons-set">
					<img id="icon-home" src="./images/home.png" />
				</div>
      </IndexLink>
      <IndexLink activeClassName='tabs-active' to='/lists'>
        <div className="tabs__buttons-set">
					<img id="icon-lists" src="./images/lists.png" />
				</div>
      </IndexLink>
    </div>
  </div>
)

export default Tabs
