import * as constants from './constants'
import * as types from './types'
import { db } from '../firebase'

const login = userId => ({
  type: types.LOGIN,
  userId: userId,
})

export const logout = () => ({
  type: types.LOGOUT,
})

export const persistAsync = user => {
  return async dispatch => {
    try {
      await db.ref('users/' + user.id).set(user)
      dispatch(login(user.id))
    } catch (e) {
      console.log(e)
    }
  }
}

export const passengerMode = () => ({
  type: types.MODE,
  mode: constants.PASSENGER,
})

export const driverMode = () => ({
  type: types.MODE,
  mode: constants.DRIVER,
})
