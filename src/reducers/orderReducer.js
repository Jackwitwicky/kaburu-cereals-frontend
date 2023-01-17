import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILED,
  UPDATE_CART,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED
} from '../actionTypes/actionTypes';

const initialState = {
  cartFetched: false,
  loading: false,
  error: '',
  lineItems: []
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        loading: true
      };
    case CREATE_ORDER_SUCCESS:
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cartFetched: true,
        loading: false,
        lineItems: action.lineItems
      };
    case CREATE_ORDER_FAILED:
    case FETCH_CART_FAILED:
    case UPDATE_CART_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    case FETCH_CART:
      return {
        ...state,
        loading: true
      };
    case UPDATE_CART:
      return {
        ...state,
        loading: true
      };
    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        cartFetched: true,
        loading: false,
        lineItems: action.lineItems
      };
    default:
      return state;
  }
};
