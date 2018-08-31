import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import DriverSignIn from './DriverSignInContainer'
import PassengerSignIn from './PassengerSignInContainer'

const NoMatch = () => {
  return <Redirect to="/" push={false} />
}

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
