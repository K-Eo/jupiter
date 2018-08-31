import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './HomeContainer'
import Nav from './Nav'
import NoMatch from '../../components/NoMatch'
import Settings from './SettingsContainer'

class Passenger extends Component {
  render() {
    return (
      <Router>
        <div className="bg-gray d-flex flex-column h-100 justify-content-between">
          <Nav />

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Passenger
