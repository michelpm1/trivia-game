import loadReducers from './loadRedux/reducers'

import { combineReducers } from 'redux'

export default combineReducers({ load: loadReducers })