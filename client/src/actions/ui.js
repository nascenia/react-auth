import { createAction } from 'redux-actions'
import * as types from '../constants/ui'

export const changeDescription = createAction(types.CHANGE_DESCRIPTION)
export const changeTitle = createAction(types.CHANGE_TITLE)
