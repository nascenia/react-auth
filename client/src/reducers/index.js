import { combineReducers } from 'redux'
import form from './form'
import requests from './requests'
import user from './user'
import errors from './errors'
import { reducer } from 'react-redux-sweetalert';

const reducers = combineReducers({
  form, requests, user, errors, sweetalert: reducer
})

export default reducers
