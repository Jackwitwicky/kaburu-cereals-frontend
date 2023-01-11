import { call, put, takeEvery } from 'redux-saga/effects';
import getProducts from '../api/product/get-products';

function* fetchProducts() {
  try {
    const productResponse = yield call(getProducts);
    yield put({
      type: 'GET_PRODUCTS_SUCCESS',
      products: productResponse.data.products
    });
  } catch (e) {
    yield put({ type: 'GET_PRODUCTS_FAILED', message: e.message });
  }
}

function* productSaga() {
  yield takeEvery('GET_PRODUCTS', fetchProducts);
}

export default productSaga;
