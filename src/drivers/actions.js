import * as types from './types'

export const listenOn = () => ({
  type: types.LISTEN_ON,
})

export const listenOff = () => ({
  type: types.LISTEN_OFF,
})
