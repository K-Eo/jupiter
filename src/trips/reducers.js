import * as types from './types'
import * as constants from '../constants'
import * as states from './constants'

const createInitialState = {
  error: '',
  id: null,
  state: states.READY,
  status: constants.REQUEST_OK,
}

export const create = (state = createInitialState, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return Object.assign({}, state, {
        error: '',
        id: null,
        state: states.BOOKING,
        status: constants.REQUEST_FETCHING,
      })
    case types.CREATE_SUCCESS:
      return Object.assign({}, state, {
        id: action.id,
        state: states.WAITING_DRIVER,
        status: constants.REQUEST_OK,
      })
    case types.CREATE_FAILURE:
      return Object.assign({}, state, {
        state: states.FAILURE,
        status: constants.REQUEST_FAILURE,
      })
    case types.CANCEL_REQUEST:
      return Object.assign({}, state, {
        error: '',
        state: states.CANCELING,
        status: constants.REQUEST_FETCHING,
      })
    case types.CANCEL_SUCCESS:
      return Object.assign({}, state, {
        error: '',
        id: null,
        state: states.READY,
        status: constants.REQUEST_OK,
      })
    case types.CANCEL_FAILURE:
      return Object.assign({}, state, {
        state: states.FAILURE,
        status: constants.REQUEST_FAILURE,
      })
    default:
      return state
  }
}
