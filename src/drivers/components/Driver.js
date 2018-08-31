import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Nav from '../../components/Nav'
import NoMatch from '../../components/NoMatch'
import Scaffold from '../../components/Scaffold'

class Driver extends Component {
  render() {
    return (
      <Router>
        <Scaffold>
          <Nav />

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Scaffold>
      </Router>
    )
  }
}

export default Driver
