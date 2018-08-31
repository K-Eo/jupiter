import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Nav = ({ location }) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
      {location.pathname === '/settings' && (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-chevron-left fa-lg" />
            </Link>
          </li>
        </ul>
      )}

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="fas fa-cog fa-lg" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Nav)
