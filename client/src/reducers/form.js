import { handleActions } from 'redux-actions'
import * as UiAction from '../constants/ui'
import * as ApiAction from '../constants/api'

const initialState = {
  title: '',
  description: '',
  completed: false,
  disabled: true
}

const form = handleActions({
  [UiAction.CHANGE_DESCRIPTION]: (state, action) => ({
    ...state,
    description: action.payload
  }),

  [UiAction.CHANGE_TITLE]: (state, action) => ({
    ...state,
    title: action.payload,
    disabled: action.payload.trim() === ''
  }),

  [ApiAction.ADD_REQUEST]: (state, action) => initialState
}, initialState)

export default form
