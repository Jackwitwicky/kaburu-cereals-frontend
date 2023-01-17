import {
  CREATE_ORDER,
  FETCH_CART,
  UPDATE_CART
} from '../actionTypes/actionTypes';

const createOrder = (data) => {
  return {
    type: CREATE_ORDER,
    data
  };
};
const fetchCart = (data) => {
  return {
    type: FETCH_CART,
    data
  };
};
const updateCart = (data) => {
  return {
    type: UPDATE_CART,
    data
  };
};

export { createOrder, fetchCart, updateCart };
