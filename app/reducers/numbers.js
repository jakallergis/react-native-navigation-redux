import { NUMBER_INCREASE } from '../actions/types'
import { NUMBER_DECREASE } from '../actions/types'
import { NUMBER_RESET } from '../actions/types'

export const numberState = (state = 0, action) => {
  switch (action.type) {
    case NUMBER_INCREASE:
      return state + 1
    case NUMBER_DECREASE:
      return state - 1
    case NUMBER_RESET:
      return 0
    default:
      return state
  }
}