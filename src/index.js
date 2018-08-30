import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import firebase from './firebase'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

firebase.auth().onAuthStateChanged(state => {
  console.log(state)
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
