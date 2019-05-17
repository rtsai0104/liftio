import { combineReducers } from 'redux';
import customerReducer from './customer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  customers: customerReducer
});