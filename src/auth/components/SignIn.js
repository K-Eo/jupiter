import React from 'react'
import { connect } from 'react-redux'

import DriverSignIn from './DriverSignInContainer'
import PassengerSignIn from './PassengerSignInContainer'
import { DRIVER } from '../constants'

const SignIn = ({ mode }) => {
  if (mode === DRIVER) {
    return <DriverSignIn />
  }

  return <PassengerSignIn />
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps)(SignIn)
