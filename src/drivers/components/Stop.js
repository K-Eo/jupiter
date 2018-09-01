import React from 'react'

const Stop = ({ listen, stopListen }) => {
  if (!listen) {
    return null
  }

  return (
    <div className="col-12 my-3 text-right">
      <button className="btn btn-danger font-weight-bold" onClick={stopListen}>
        Detener
      </button>
    </div>
  )
}

export default Stop
