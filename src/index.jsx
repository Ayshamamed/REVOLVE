import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router/App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import "./i18n/i18n"; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

 