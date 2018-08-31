import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configure from './stores/default'
import firebase from './firebase'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const store = configure()

firebase.auth().onAuthStateChanged(state => {
  console.log(state)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
