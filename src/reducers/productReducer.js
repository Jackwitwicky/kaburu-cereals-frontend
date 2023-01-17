import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS
} from '../actionTypes/actionTypes';

const initialState = {
  allProductsFetched: false,
  loading: false,
  numOfItems: 0,
  count: 0,
  total_count: 0,
  current_page: 0,
  pages: 0,
  per_page: 0,
  products: []
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProductsFetched: true,
        loading: false,
        products: action.products
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
};
