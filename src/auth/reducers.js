import * as constants from './constants'
import * as types from './types'

const authInitialState = {
  mode: constants.PASSENGER,
  signedIn: false,
  userId: null,
}

export const auth = (state = authInitialState, action) => {
  switch (action.type) {
    case types.MODE:
      return Object.assign({}, state, { mode: action.mode })
    case types.LOGIN:
      return Object.assign({}, state, { signedIn: true, userId: action.userId })
    case types.LOGOUT:
    default:
      return { mode: constants.PASSENGER, signedIn: false, userId: null }
  }
}
