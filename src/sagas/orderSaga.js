import { call, put, takeEvery } from 'redux-saga/effects';
import createOrder from '../api/order/create-order';
import fetchCart from '../api/order/fetch-cart';
import updateCart from '../api/order/update-cart';
import removeFromCart from '../api/order/remove-from-cart';

import {
  CREATE_ORDER,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
  FETCH_CART,
  FETCH_CART_FAILED,
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_FAILED,
  REMOVE_FROM_CART_SUCCESS,
  SHOW_ALERT,
  UPDATE_CART,
  UPDATE_CART_FAILED,
  UPDATE_CART_ITEM_QUANTITY,
  UPDATE_CART_ITEM_QUANTITY_FAILED,
  UPDATE_CART_ITEM_QUANTITY_SUCCESS,
  UPDATE_CART_SUCCESS
} from '../actionTypes/actionTypes';
import updateCartItemQuantity from '../api/order/update-cart-item-quantity';
import { ERROR_ALERT_TYPE, SUCCESS_ALERT_TYPE } from '../reducers/alertReducer';

function* createOrderSaga(action) {
  try {
    const orderData = { lineItemsAttributes: [action.data] };
    const orderResponse = yield call(createOrder, orderData);

    // store guest token for future calls
    localStorage.setItem('guest_token', orderResponse.data.token);
    localStorage.setItem('order_number', orderResponse.data.number);
    console.log('The order response is: ', orderResponse);
    yield put({
      type: CREATE_ORDER_SUCCESS,
      lineItems: orderResponse.data.lineItems
    });
    yield put({
      type: SHOW_ALERT,
      data: {
        message: 'Added to Cart successfully',
        alertType: SUCCESS_ALERT_TYPE
      }
    });
  } catch (e) {
    console.log('***The error is: ', e);
    yield put({ type: CREATE_ORDER_FAILED, message: e.message });
  }
}

function* updateCartSaga(action) {
  try {
    action.data.data = { lineItemsAttributes: [action.data.data] };
    const orderResponse = yield call(updateCart, action.data);

    console.log('The order response is: ', orderResponse);
    yield put({
      type: UPDATE_CART_SUCCESS,
      lineItems: orderResponse.data.lineItems
    });
    yield put({
      type: SHOW_ALERT,
      data: {
        message: 'Added to Cart successfully',
        alertType: SUCCESS_ALERT_TYPE
      }
    });
  } catch (e) {
    console.log('***The error is: ', e);
    yield put({ type: UPDATE_CART_FAILED, message: e.message });
  }
}

function* updateCartItemQuantitySaga(action) {
  try {
    action.data.data = { lineItem: action.data.data };
    const orderResponse = yield call(updateCartItemQuantity, action.data);

    yield put({
      type: UPDATE_CART_ITEM_QUANTITY_SUCCESS,
      lineItem: orderResponse.data
    });
    yield put({
      type: SHOW_ALERT,
      data: {
        message: 'Cart updated successfully',
        alertType: SUCCESS_ALERT_TYPE
      }
    });
  } catch (e) {
    console.log('***The error is: ', e);
    yield put({ type: UPDATE_CART_ITEM_QUANTITY_FAILED, message: e.message });
    yield put({
      type: SHOW_ALERT,
      data: {
        message: 'Unable to update cart item',
        alertType: ERROR_ALERT_TYPE
      }
    });
  }
}

function* removeFromCartSaga(action) {
  try {
    yield call(removeFromCart, action.data);
    yield put({
      type: REMOVE_FROM_CART_SUCCESS
    });

    const orderResponse = yield call(fetchCart, action.data);
    yield put({
      type: FETCH_CART_SUCCESS,
      lineItems: orderResponse.data.lineItems
    });
    yield put({
      type: SHOW_ALERT,
      data: {
        message: 'Item removed successfully',
        alertType: SUCCESS_ALERT_TYPE
      }
    });
  } catch (e) {
    console.log('***The error is: ', e);
    yield put({ type: REMOVE_FROM_CART_FAILED, message: e.message });
  }
}

function* fetchCartSaga(action) {
  try {
    const orderResponse = yield call(fetchCart, action.data);
    console.log('The cart is: ', orderResponse);
    yield put({
      type: FETCH_CART_SUCCESS,
      lineItems: orderResponse.data.lineItems,
      id: orderResponse.data.id,
      displayPrice: orderResponse.data.displayItemTotal,
      orderNumber: orderResponse.data.number
    });
  } catch (e) {
    console.log('***The error is: ', e);
    yield put({ type: FETCH_CART_FAILED, message: e.message });
  }
}

function* orderSaga() {
  yield takeEvery(CREATE_ORDER, createOrderSaga);
  yield takeEvery(FETCH_CART, fetchCartSaga);
  yield takeEvery(UPDATE_CART, updateCartSaga);
  yield takeEvery(UPDATE_CART_ITEM_QUANTITY, updateCartItemQuantitySaga);
  yield takeEvery(REMOVE_FROM_CART, removeFromCartSaga);
}

export default orderSaga;
