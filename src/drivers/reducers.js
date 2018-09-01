import * as types from './types'

export const listen = (state = false, action) => {
  switch (action.type) {
    case types.LISTEN_ON:
      return true
    case types.LISTEN_OFF:
      return false
    default:
      return state
  }
}
