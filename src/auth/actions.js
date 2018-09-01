import * as constants from './constants'
import * as types from './types'
import firebase, { db } from '../firebase'

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

export const logoutAsync = () => {
  return async dispatch => {
    try {
      await firebase.auth().signOut()
      dispatch(logout())
    } catch (e) {
      console.log(e)
    }
  }
}

export const passenger = () => ({
  type: types.MODE,
  mode: constants.PASSENGER,
})

export const driver = () => ({
  type: types.MODE,
  mode: constants.DRIVER,
})

export const passengerMode = () => {
  return dispatch => {
    localStorage.setItem('mode', constants.PASSENGER)
    return dispatch(passenger())
  }
}

export const driverMode = () => {
  return dispatch => {
    localStorage.setItem('mode', constants.DRIVER)
    return dispatch(driver())
  }
}

export const loadAppMode = () => {
  return dispatch => {
    const mode = localStorage.getItem('mode')

    if (mode === constants.DRIVER) {
      return dispatch(driver())
    }

    return dispatch(passenger())
  }
}
