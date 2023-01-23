import {
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILED,
  UPDATE_CART,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILED,
  UPDATE_CART_ITEM_QUANTITY,
  UPDATE_CART_ITEM_QUANTITY_FAILED,
  UPDATE_CART_ITEM_QUANTITY_SUCCESS
} from '../actionTypes/actionTypes';

const initialState = {
  cartFetched: false,
  loading: false,
  error: '',
  id: 0,
  displayPrice: 'Ksh0',
  orderNumber: 0,
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
        lineItems: action.lineItems,
        id: action.id,
        orderNumber: action.orderNumber,
        displayPrice: action.displayPrice
      };
    case CREATE_ORDER_FAILED:
    case FETCH_CART_FAILED:
    case UPDATE_CART_FAILED:
    case UPDATE_CART_ITEM_QUANTITY_FAILED:
    case REMOVE_FROM_CART_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    case FETCH_CART:
    case UPDATE_CART:
    case REMOVE_FROM_CART:
    case UPDATE_CART_ITEM_QUANTITY:
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
    case UPDATE_CART_ITEM_QUANTITY_SUCCESS: {
      const foundIndex = state.lineItems.findIndex(
        (lineItem) => lineItem.id === action.lineItem.id
      );
      const updatedLineItems = [...state.lineItems];
      updatedLineItems[foundIndex] = action.lineItem;
      return {
        ...state,
        cartFetched: true,
        loading: false,
        lineItems: updatedLineItems
      };
    }
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
