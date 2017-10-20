import { handleActions } from 'redux-actions'
import * as ActionTypes from '../constants/api'
import * as ErrorActionTypes from '../constants/error'

const initialState = [];

// error reducer function
function errors(state = initialState, action) {
  const { type, error } = action
  console.log('--------- with in errors reducer');
  console.log(action);

  switch (true) {
    case error:
      return [...state,action.payload.message];
      break;
    case action.type === 'RESET_ERROR_MESSAGE':
      return [];
      break;
    case action.type ==='ADD_ERROR':
      console.log('add error call');
      return action.payload;
      break;
    default:
      return state;
  }

  return state;
}

export default errors;
