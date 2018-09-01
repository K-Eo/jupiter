import React from 'react'

import * as states from '../../trips/constants'

const Home = props => {
  return (
    <React.Fragment>
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {(props.state === states.BOOKING ||
                props.state === states.WAITING_DRIVER) && (
                <div className="jumbotron text-center m-0">
                  <i className="fas fa-circle-notch fa-spin fa-4x text-gray mb-4" />
                  <p className="m-0 text-secondary">
                    Espere un momento mientras buscamos un taxi cerca de tu
                    posición
                  </p>
                </div>
              )}

              {props.state === states.READY && (
                <div className="jumbotron text-center m-0">
                  <i className="fas fa-car-side fa-4x text-gray mb-4" />
                  <p className="m-0 text-secondary">
                    Aún no hay nada que mostrar
                  </p>
                </div>
              )}

              {props.state === states.CANCELING && (
                <div className="jumbotron text-center m-0">
                  <i className="fas fa-circle-notch fa-spin fa-4x text-gray mb-4" />
                  <p className="m-0 text-secondary">
                    Espere un momento mientras cancelamos la búsqueda
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-top py-4">
        <div className="container">
          {(props.state === states.BOOKING ||
            props.state === states.WAITING_DRIVER) && (
            <button
              className="btn btn-danger btn-block btn-lg font-weight-bold"
              onClick={() => props.cancelTrip(props.id)}
            >
              Cancelar
            </button>
          )}

          {props.state === states.READY && (
            <button
              className="btn btn-success btn-block btn-lg font-weight-bold"
              onClick={props.createTrip}
            >
              Pedir Taxi
            </button>
          )}

          {props.state === states.CANCELING && (
            <button
              className="btn btn-secondary btn-block btn-lg font-weight-bold"
              disabled
            >
              Cancelando...
            </button>
          )}
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Home
