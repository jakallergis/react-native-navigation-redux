import { Stacks } from '../navigators/Stack'
export const stackState = (state, action) => Stacks.router.getStateForAction(action, state)