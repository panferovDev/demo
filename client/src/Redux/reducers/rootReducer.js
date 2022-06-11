import { combineReducers } from 'redux';
import userReducer from './userReducer';
import wordReducer from './wordReducer';

const rootReducer = combineReducers({
  user: userReducer,
  words: wordReducer,
});

export default rootReducer;
