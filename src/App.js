import React, { Component } from 'react'
import SignIn from './SignIn'

class App extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="container">
          <h5 className="text-center font-weight-normal text-secondary">
            Alpha
          </h5>
          <h1 className="text-center text-light">Jupiter</h1>

          <div className="mt-5">
            <SignIn />
          </div>
        </div>
      </div>
    )
  }
}

export default App
