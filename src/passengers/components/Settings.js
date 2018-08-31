import React from 'react'

const Settings = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img
                src="https://placehold.it/100"
                className="img-fluid rounded-circle"
                alt="#USER_PROFILE_IMAGE"
              />

              <h6 className="mb-0 mt-4">#USER_NAME</h6>
              <p className="text-secondary">#USER_EMAIL</p>

              <button className="btn btn-danger btn-block mt-5">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      <div />
    </React.Fragment>
  )
}

export default Settings
