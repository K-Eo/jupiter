import React from 'react'

import Trip from './TripContainer'

const TripList = ({ trips, listen }) => {
  if (!listen) {
    return null
  }

  if (trips.length === 0) {
    return (
      <div className="col-12">
        <div className="jumbotron text-center m-0">
          <i className="fas fa-circle-notch fa-2x fa-spin text-gray mb-3" />
          <p className="m-0 text-secondary">Esperando pasajeros</p>
        </div>
      </div>
    )
  }

  return (
    <div className="col-12">
      <div className="card">
        <ul className="list-group list-group-flush">
          {trips.map(trip => (
            <Trip key={trip.id} {...trip} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TripList
