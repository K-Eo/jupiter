import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DriverSignIn from './DriverSignInContainer'
import NoMatch from '../../components/NoMatch'
import PassengerSignIn from './PassengerSignInContainer'

const SignIn = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={PassengerSignIn} />
        <Route path="/drivers" component={DriverSignIn} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default SignIn
