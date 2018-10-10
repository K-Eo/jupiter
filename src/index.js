import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)

registerServiceWorker()
