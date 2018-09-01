import React from 'react'

const Start = ({ listen, startListen }) => {
  if (listen) {
    return null
  }

  return (
    <div className="col-12 mt-3">
      <div className="jumbotron text-center m-0">
        <i className="fas fa-car-side fa-4x text-gray mb-4" />
        <p className="m-0 text-secondary">
          Aquí se muestran las notificaciones de taxis
        </p>

        <button
          className="btn btn-primary font-weight-bold mt-4"
          onClick={startListen}
        >
          Recibir Pasajeros
        </button>
      </div>
    </div>
  )
}

export default Start
