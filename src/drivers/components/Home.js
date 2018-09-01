import React from 'react'

import TripList from '../../trips/components/TripsListContainer'

const Home = () => {
  return (
    <div className="flex-grow-1 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron text-center m-0">
              <i className="fas fa-car-side fa-4x text-gray mb-4" />
              <p className="m-0 text-secondary">
                Aquí se muestran las notificaciones de taxis
              </p>

              <button className="btn btn-primary font-weight-bold mt-4">
                Recibir Pasajeros
              </button>
            </div>

            <TripList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
