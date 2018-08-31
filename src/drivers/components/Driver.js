import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import NoMatch from '../../components/NoMatch'

class Driver extends Component {
  render() {
    return (
      <Router>
        <div className="bg-gray d-flex flex-column h-100 justify-content-between">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Driver
