import React from 'react'

import { REQUEST_FETCHING } from '../../constants'

const Home = props => {
  console.log(props)
  const isLoading = props.status === REQUEST_FETCHING || props.id != null

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {isLoading ? (
              <div className="jumbotron text-center m-0">
                <i className="fas fa-circle-notch fa-spin fa-4x text-gray mb-4" />
                <p className="m-0 text-secondary">
                  Espere un momento mientras buscamos un taxi cerca de su
                  posición
                </p>
              </div>
            ) : (
              <div className="jumbotron text-center m-0">
                <i className="fas fa-car-side fa-4x text-gray mb-4" />
                <p className="m-0 text-secondary">
                  Aún no hay nada que mostrar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="bg-white border-top py-4">
        <div className="container">
          {isLoading ? (
            <button className="btn btn-danger btn-block btn-lg font-weight-bold">
              Cancelar
            </button>
          ) : (
            <button
              className="btn btn-success btn-block btn-lg font-weight-bold"
              onClick={props.createTrip}
            >
              Pedir Taxi
            </button>
          )}
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Home
