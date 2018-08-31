import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './HomeContainer'
import Settings from './Settings'

class Passenger extends Component {
  render() {
    return (
      <Router>
        <div className="bg-gray d-flex flex-column h-100 justify-content-between">
          <Nav />
          <Route exact={true} path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    )
  }
}

export default Passenger
