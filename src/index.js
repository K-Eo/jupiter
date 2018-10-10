import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'

import Routes from './Routes'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  rootElement
)

registerServiceWorker()
