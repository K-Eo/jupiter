import * as types from './types'

const authInitialState = {
  signedIn: false,
}

export const auth = (state = authInitialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, action.user, { signedIn: true })
    case types.LOGOUT:
    default:
      return { signedIn: false }
  }
}
