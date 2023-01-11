import { GET_PRODUCTS } from '../actionTypes/actionTypes';

const initialState = {
  numOfItems: 0,
  count: 0,
  total_count: 0,
  current_page: 0,
  pages: 0,
  per_page: 0,
  products: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log('The action content is: ', action);
      return {
        ...state
      };
    default:
      return state;
  }
};
