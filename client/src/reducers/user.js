import { handleActions } from 'redux-actions'
import * as UiAction from '../constants/ui'
import * as ApiAction from '../constants/api'

const initialState = {
  name: '',
  email: '',
  jwt: '',
  role: '',
  error: false
}

const user = handleActions({
  ['USER_SIGNIN']: {
    next: (state, action) => Object.assign({}, state, action.payload),
    throw: (state, action) => state
  },
  ['USER_SING_OUT']:{
    next: (state, action) => initialState,
    throw: (state, action) => state
  }

}, initialState)

export default user;
