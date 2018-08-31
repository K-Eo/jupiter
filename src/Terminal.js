import React from 'react'
import { connect } from 'react-redux'

import Driver from './drivers/components/Driver'
import Passenger from './passengers/components/Passenger'
import SignIn from './auth/components/SignIn'

import { DRIVER } from './auth/constants'

const Terminal = ({ signedIn, mode }) => {
  if (!signedIn) {
    return <SignIn />
  }

  if (mode === DRIVER) {
    return <Driver />
  } else {
    return <Passenger />
  }
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps)(Terminal)
