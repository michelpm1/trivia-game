import loadReducers from './loadRedux/reducers'
import questionsReducer from './questionsRedux/reducers'
import { combineReducers } from 'redux'

export default combineReducers({ load: loadReducers, status: questionsReducer })