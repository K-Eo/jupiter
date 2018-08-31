import React from 'react'
import { connect } from 'react-redux'
import SignIn from './auth/components/SignIn'
import Passenger from './Passenger'

const Terminal = ({ signedIn }) => {
  if (signedIn) {
    return <Passenger />
  } else {
    return <SignIn />
  }
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps)(Terminal)
