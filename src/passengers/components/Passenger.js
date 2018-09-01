import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './HomeContainer'
import Nav from '../../components/Nav'
import NoMatch from '../../components/NoMatch'
import Scaffold from '../../components/Scaffold'
import Settings from './SettingsContainer'

class Passenger extends Component {
  render() {
    return (
      <Router>
        <Scaffold>
          <Nav />

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route component={NoMatch} />
          </Switch>
        </Scaffold>
      </Router>
    )
  }
}

export default Passenger
