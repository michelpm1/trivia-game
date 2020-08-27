import { combineReducers } from 'redux';
import loadReducers from './loadRedux/reducers';
import questionsReducer from './questionsRedux/reducers';

export default combineReducers({
  load: loadReducers,
  status: questionsReducer,
});
