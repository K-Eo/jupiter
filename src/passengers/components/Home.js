import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron text-center m-0">
              <i className="fas fa-car-side fa-4x text-gray mb-4" />

              <p className="m-0 text-secondary">Aún no hay nada que mostrar</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-top py-4">
        <div className="container">
          <button className="btn btn-success btn-block btn-lg font-weight-bold">
            Pedir Taxi
          </button>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Home
