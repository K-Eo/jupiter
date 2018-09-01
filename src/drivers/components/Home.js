import React from 'react'

import TripList from '../../trips/components/TripsListContainer'

import Stop from './StopContainer'
import Start from './StartContainer'

const Home = () => {
  return (
    <div className="flex-grow-1">
      <div className="container">
        <div className="row">
          <Stop />
          <Start />
          <TripList />
        </div>
      </div>
    </div>
  )
}

export default Home
