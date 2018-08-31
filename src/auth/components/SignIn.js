import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import DriverSignIn from './DriverSignIn'
import PassengerSignIn from './PassengerSignIn'

const SignIn = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact={true} path="/" component={PassengerSignIn} />
        <Route path="/drivers" component={DriverSignIn} />
      </React.Fragment>
    </Router>
  )
}

export default SignIn
