import React from 'react'
import { Navbar, Alignment, Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>Hey Taxy</Navbar.Heading>
      <Navbar.Divider />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button className="bp3-minimal" icon="home" text="Home" />
      </Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <Button className="bp3-minimal" icon="help" text="About" />
      </Link>
    </Navbar.Group>
  </Navbar>
)

export default NavBar
