import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Login from './components/Session/Login/Login';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'products/:productId',
    element: <ProductPage />
  },
  {
    path: 'products',
    element: <Products />
  },
  {
    path: 'cart',
    element: <Cart />
  },
  {
    path: 'login',
    element: <Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
