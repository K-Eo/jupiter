import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase, { uiConfig } from './firebase'

const SignIn = props => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="container">
        <h5 className="text-center font-weight-normal text-secondary">Alpha</h5>
        <h1 className="text-center text-light">Jupiter</h1>

        <div className="mt-5">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />

          <div className="border-top border-secondary mt-5 mb-2 w-50 mx-auto" />

          <div className="text-center">
            <a href="/" className="text-secondary">
              Conductores
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
