import { combineReducers } from 'redux'

import { auth } from '../auth/reducers'
import { create } from '../trips/reducers'

const tripsReducer = combineReducers({
  create: create,
})

const appReducer = combineReducers({
  auth: auth,
  trips: tripsReducer,
})

export default appReducer
