import { handleActions } from 'redux-actions'
import * as ApiAction from '../constants/api'

const initialState = {
  title: '',
  description: '',
  id: 0,
  user: { },
  agent: { },
  status: 'pending'
}

const request = handleActions({
  [ApiAction.ADD_REQUEST]: {
    next: (state, action) => action.payload,
    throw: (state, action) => initialState
  },

  [ApiAction.UPDATE_REQUEST]: {
    next: (state, action) => state.id === action.payload.id ? action.payload : state,
    throw: (state, action) => initialState
  }
}, initialState)

const requests = handleActions({
  [ApiAction.FETCH_REQUESTS]: {
    next: (state, action) => action.payload,
    throw: (state, aciton) => []
  },

  [ApiAction.ADD_REQUEST]: {
    next: (state, action) => [...state, request(state, action)],
    throw: (state, action) => state
  },

  [ApiAction.UPDATE_REQUEST]: {
    next: (state, action) => state.map(s => request(s, action)),
    throw: (state, action) => state
  },

  [ApiAction.DELETE_REQUEST]: {
    next: (state, action) => state.filter((t, i) => t.id !== action.payload),
    throw: (state, action) => action.payload
  }
}, [])

export default requests
