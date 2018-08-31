import { combineReducers } from 'redux'
import { auth } from '../users/reducers'

const appReducer = combineReducers({
  auth: auth,
})

export default appReducer
