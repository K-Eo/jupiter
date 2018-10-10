import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home/Home'
import NavBar from './components/NavBar'
import About from './components/About'
const Routes = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
)

export default Routes
