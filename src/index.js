import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Terminal from './Terminal'
import configure from './stores/default'
import firebase from './firebase'
import registerServiceWorker from './registerServiceWorker'
import { persistAsync, logout } from './auth/actions'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const store = configure()

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

ReactDOM.render(
  <Provider store={store}>
    <Terminal />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
