import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router/App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import "./i18n/i18n";
import { WishlistProvider } from 'react-use-wishlist';
import { CartProvider } from 'react-use-cart';
import {  ModeProvider } from './context/ModeContext';
import { Provider } from 'react-redux';
import store from './REDUX/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeProvider>
    <CartProvider>
      <WishlistProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </WishlistProvider>
    </CartProvider>
    </ModeProvider>
  </React.StrictMode>
);

