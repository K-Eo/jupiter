import { combineReducers } from 'redux'

import { auth } from '../auth/reducers'
import { create, trips } from '../trips/reducers'
import { listen } from '../drivers/reducers'

const tripsReducer = combineReducers({
  create: create,
})

const entities = combineReducers({
  trips: trips,
})

const driver = combineReducers({
  listen: listen,
})

const appReducer = combineReducers({
  auth: auth,
  driver: driver,
  entities: entities,
  trips: tripsReducer,
})

export default appReducer
