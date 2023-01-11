import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { productReducer } from './reducers/productReducer';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(productReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
