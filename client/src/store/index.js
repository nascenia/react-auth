import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import reducer from '../reducers'
import ReduxThunk from 'redux-thunk'
import { saveState, loadState } from '../local_data/localStorage'
import throttle from 'lodash.throttle'

const logger = createLogger()

const middleware = [
  logger,
  promiseMiddleware,
  ReduxThunk
]
const persitedData = loadState();
const store = createStore(
  reducer,
  persitedData,
  applyMiddleware(...middleware)
)

store.subscribe(throttle(() =>{
  saveState({
    user: store.getState().user
  })
}, 1000));

export default store
