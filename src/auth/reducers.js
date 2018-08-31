import * as types from './types'

const authInitialState = {
  signedIn: false,
  userId: null,
}

export const auth = (state = authInitialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, { signedIn: true, userId: action.userId })
    case types.LOGOUT:
    default:
      return { signedIn: false, userId: null }
  }
}
