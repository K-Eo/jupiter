import { combineReducers } from 'redux'

import { auth } from '../auth/reducers'
import { create, trips } from '../trips/reducers'

const tripsReducer = combineReducers({
  create: create,
})

const entities = combineReducers({
  trips: trips,
})

const appReducer = combineReducers({
  auth: auth,
  entities: entities,
  trips: tripsReducer,
})

export default appReducer
