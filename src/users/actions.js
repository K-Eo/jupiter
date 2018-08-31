import { db } from '../firebase'
import * as types from './types'

const login = user => ({
  type: types.LOGIN,
  user: user,
})

export const logout = () => ({
  type: types.LOGOUT,
})

export const persistAsync = user => {
  return async dispatch => {
    try {
      await db.ref('users/' + user.id).set(user)
      dispatch(login(user))
    } catch (e) {
      console.log(e)
    }
  }
}
