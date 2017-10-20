import { createAction } from 'redux-actions'
import * as types from '../constants/api'
import api from '../api/requests'
import userApi from '../api/users'
import * as ErrorTypes from '../constants/error'

// actions for manageing request
export const fetchRequests = createAction(types.FETCH_REQUESTS, api.fetchRequests)
export const addRequest = createAction(types.ADD_REQUEST, api.addRequest)
export const deleteRequest = createAction(types.DELETE_REQUEST, api.deleteRequest)
export const updateRequest = createAction(types.UPDATE_REQUEST, api.updateRequest)

// actions for managing users
export const userSignIn = createAction(types.USER_SIGNIN, userApi.signIn)
export const oUserSignUp = createAction(types.USER_SIGNUP)
export const userSignOut = createAction('USER_SING_OUT')

// actions for managing errors
export const addError = createAction('ADD_ERROR')
export const resetError = createAction('RESET_ERROR_MESSAGE')

// this is chunk action creator that return
// function instead of action object
export const userSignUp = function(user){
  return function(dispatch){
    userApi.signUp(user).
    then((res) =>{
      dispatch(addError(['User sign up succesful']));
    })
    .catch((error) =>{
      dispatch(addError(error.response.data));
    })
  }
}
