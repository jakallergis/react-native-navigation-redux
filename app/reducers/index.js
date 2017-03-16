import { combineReducers } from 'redux'
import { numberState } from './numbers'
import { stackState } from './navigation'

export default combineReducers({
  numberState,
  stackState
})