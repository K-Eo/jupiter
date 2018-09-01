import React from 'react'

import Trip from './TripContainer'

const TripList = ({ trips }) => {
  if (trips.length === 0) {
    return null
  }

  return (
    <div className="card mt-4">
      <ul className="list-group list-group-flush">
        {trips.map(trip => (
          <Trip key={trip.id} {...trip} />
        ))}
      </ul>
    </div>
  )
}

export default TripList
