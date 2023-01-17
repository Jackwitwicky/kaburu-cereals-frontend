import { combineReducers } from 'redux';
import { order } from './orderReducer';
import { products } from './productReducer';

export default combineReducers({
  order,
  products
});
