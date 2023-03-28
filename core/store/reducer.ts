import { combineReducers } from 'redux'
import * as Reducers from '@/core/reducers'

const appReducer = combineReducers(Reducers)

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export default rootReducer
