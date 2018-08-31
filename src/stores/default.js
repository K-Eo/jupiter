import * as redux from 'redux'
import thunk from 'redux-thunk'

const globalState = {}

const compose = () => {
  if (process.env.NODE_ENV === 'development') {
    return redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  } else {
    return redux.compose(redux.applyMiddleware(thunk))
  }
}

const configure = (initialState = globalState) => {
  return redux.createStore(s => s, initialState, compose())
}

export default configure
