import { combineReducers } from 'redux';
import newsReducer from './newsState';

export default combineReducers({
  newsState: newsReducer
});
