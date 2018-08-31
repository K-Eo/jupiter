import { db } from '../firebase'
import * as types from './types'

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
