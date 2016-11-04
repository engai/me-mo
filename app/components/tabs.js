import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

const Tabs = () => (
  <div className="tabs">
    <div className="tabs__buttons">
      <IndexLink activeClassName='tabs-active' to='/add'>
        <div className="tabs__buttons-set">
					  <img src="./images/add.svg" />
            <div className="tabs-color"></div>
				</div>
      </IndexLink>
      <IndexLink activeClassName='tabs-active' to='/home'>
        <div className="tabs__buttons-set">
					<img src="./images/home.svg" />
          <div className="tabs-color"></div>
				</div>
      </IndexLink>
      <IndexLink activeClassName='tabs-active' to='/lists'>
        <div className="tabs__buttons-set">
					<img src="./images/lists.svg" />
          <div className="tabs-color"></div>
				</div>
      </IndexLink>
    </div>
  </div>
)

export default Tabs
