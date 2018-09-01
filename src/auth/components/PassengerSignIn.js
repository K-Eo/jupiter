import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase, { uiConfig } from '../../firebase'

const PassengerSignIn = ({ driverMode }) => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="container">
        <h5 className="text-center font-weight-normal text-secondary">Alpha</h5>
        <h1 className="text-center">Jupiter</h1>

        <div className="mt-5">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />

          <div className="text-center mt-4">
            <button
              className="btn btn-link text-secondary"
              onClick={driverMode}
            >
              Conductores
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassengerSignIn
