import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Nav from '../../components/Nav'
import NoMatch from '../../components/NoMatch'
import Scaffold from '../../components/Scaffold'
import Settings from './SettingsContainer'

import { fetchTrips } from '../../trips/actions'

class Driver extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.listen === false && this.props.listen === true) {
      this.ref = this.props.dispatch(fetchTrips())
    }

    if (prevProps.listen === true && this.props.listen === false && this.ref) {
      this.ref.off()
    }
  }

  componentWillUnmount() {
    if (this.ref) {
      this.ref.off()
    }
  }

  render() {
    return (
      <Router>
        <Scaffold>
          <Nav />

          <Switch>
            <Route path="/settings" component={Settings} />
            <Route exact={true} path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Scaffold>
      </Router>
    )
  }
}

const mapStateToProps = state => state.driver

export default connect(mapStateToProps)(Driver)
