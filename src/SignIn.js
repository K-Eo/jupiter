import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase, { uiConfig } from './firebase'

const SignIn = props => {
  return (
    <React.Fragment>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

      <div className="border-top border-secondary mt-5 mb-2 w-50 mx-auto" />

      <div className="text-center">
        <a href="/" className="text-secondary">
          Conductores
        </a>
      </div>
    </React.Fragment>
  )
}

export default SignIn
