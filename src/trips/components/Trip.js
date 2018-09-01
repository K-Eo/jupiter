import React from 'react'

const Trip = props => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <i className="fas fa-user mr-4 text-secondary border rounded-circle p-2" />
      <p className="card-text flex-grow-1 mb-0">Hay un nuevo pasajero</p>
      <button className="btn btn-success font-weight-bold">Atender</button>
    </li>
  )
}

export default Trip
