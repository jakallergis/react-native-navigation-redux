import { NUMBER_INCREASE } from './types'
import { NUMBER_DECREASE } from './types'
import { NUMBER_RESET } from './types'

export function syncIncrease() {
  return {
    type: NUMBER_INCREASE
  }
}

export function numberDecrease() {
  return {
    type: NUMBER_DECREASE
  }
}

export function numberReset() {
  return {
    type: NUMBER_RESET
  }
}

export const asyncIncrease = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(syncIncrease())
    }, time)
  }
}