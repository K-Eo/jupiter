import * as types from './types'
import * as constants from '../constants'

const createInitialState = {
  error: '',
  id: null,
  status: constants.REQUEST_OK,
}

export const create = (state = createInitialState, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return Object.assign({}, state, { status: constants.REQUEST_FETCHING })
    case types.CREATE_SUCCESS:
      return Object.assign({}, state, {
        id: action.id,
        status: constants.REQUEST_OK,
      })
    case types.CREATE_FAILURE:
      return Object.assign({}, state, { status: constants.REQUEST_FAILURE })
    default:
      return state
  }
}
