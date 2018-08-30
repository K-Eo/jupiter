import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="container">
          <h1 className="text-center text-light">Jupiter</h1>
          <h5 className="text-center font-weight-normal text-secondary">
            Alpha
          </h5>

          <div className="mt-5">
            <button className="btn btn-primary btn-block">Facebook</button>
            <button className="btn btn-light btn-block">Google</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
