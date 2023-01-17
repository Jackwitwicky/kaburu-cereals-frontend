import { call, put, takeEvery } from 'redux-saga/effects';
import createOrder from '../api/order/create-order';
import fetchCart from '../api/order/fetch-cart';
import updateCart from '../api/order/update-cart';

import {
  CREATE_ORDER,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
  FETCH_CART,
  FETCH_CART_FAILED,
  FETCH_CART_SUCCESS,
  UPDATE_CART,
  UPDATE_CART_FAILED,
  UPDATE_CART_SUCCESS
} from '../actionTypes/actionTypes';

function* createOrderSaga(action) {
  try {
    console.log('***About to create order: ', action.data);
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
  } catch (e) {
    console.log('***The error is: ', e);
    yield put({ type: CREATE_ORDER_FAILED, message: e.message });
  }
}

function* updateCartSaga(action) {
  try {
    action.data.data = { lineItemsAttributes: [action.data.data] };
    console.log('***About to update order: ', action.data);
    const orderResponse = yield call(updateCart, action.data);

    console.log('The order response is: ', orderResponse);
    yield put({
      type: UPDATE_CART_SUCCESS,
      lineItems: orderResponse.data.lineItems
    });
  } catch (e) {
    console.log('***The error is: ', e);
    yield put({ type: UPDATE_CART_FAILED, message: e.message });
  }
}

function* fetchCartSaga(action) {
  try {
    console.log('***About to fetch cart: ', action.data);
    const orderResponse = yield call(fetchCart, action.data);
    console.log('The fetch cart response is: ', orderResponse);
    yield put({
      type: FETCH_CART_SUCCESS,
      lineItems: orderResponse.data.lineItems
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
}

export default orderSaga;
