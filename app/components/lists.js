import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Lists extends Component {

  constructor(props, context) {
    super(props);
    this.context = context;
    this.props = props;
  }

  renderContents() {
    let Data = this.context.Data;
    let lists = Data.lists;
    let listCount = Data.lists.length;

    let listArray = lists.map((list) =>
      <Link to={{
            pathname: '/results',
            query: { list: list.name }
      }} key={list.name}>
      <div className="list-item" key={list.name}>
        <div className="list-item-text">
          {list.name}
        </div>
        <div className="list-item-details">
          {list.locations.length} items • 3 not visited
        </div>
      </div>
    </Link>
    )

    return (
      <div className="contents">
        <div className="contents-header">
  				<p>RECENTLY EDITED</p>
  			</div>
        <div className="list">
  				{listArray}
        </div>
		  </div>
    );
  }

  render () {
    return (
      <div className="Lists">
        {this.renderContents()}
      </div>
    )
  }
}

Lists.contextTypes = {
  Data: React.PropTypes.object
};

export default Lists
