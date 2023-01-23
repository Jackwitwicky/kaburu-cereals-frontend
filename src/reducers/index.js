import { combineReducers } from 'redux';
import { order } from './orderReducer';
import { products } from './productReducer';
import { alert } from './alertReducer';

export default combineReducers({
  alert,
  order,
  products
});
