import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Link } from 'react-router-dom'

import firebase, { uiConfig } from '../../firebase'

const PassengerSignIn = () => {
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

          <div className="text-center mt-4">
            <Link to="/drivers" className="text-secondary">
              Conductores
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassengerSignIn
