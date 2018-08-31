import { combineReducers } from 'redux'
import { auth } from '../auth/reducers'

const appReducer = combineReducers({
  auth: auth,
})

export default appReducer
