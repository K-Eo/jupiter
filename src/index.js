import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Terminal from './Terminal'
import configure from './stores/default'
import firebase from './firebase'
import registerServiceWorker from './registerServiceWorker'
import { persistAsync, logout, loadAppMode } from './auth/actions'

import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'

const store = configure()

store.dispatch(loadAppMode())

firebase.auth().onAuthStateChanged(state => {
  if (state) {
    const user = {
      id: state.uid,
      name: state.displayName,
      profile_image: state.photoURL,
      email: state.email,
    }

    store.dispatch(persistAsync(user))
  } else {
    store.dispatch(logout())
  }
})

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Terminal />
  </Provider>,
  rootElement
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./Terminal', () => {
    const NextTerminal = require('./Terminal').default
    ReactDOM.render(
      <Provider store={store}>
        <NextTerminal />
      </Provider>,
      rootElement
    )
  })
}

registerServiceWorker()
