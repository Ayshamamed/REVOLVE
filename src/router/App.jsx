import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from '../components/Headers';
import "../assets/style.scss";
import Footer from '../components/Footer';
import Login from '../components/Login';
import Home from '../pages/Home';
import { CartProvider } from 'react-use-cart';
import Basket from '../components/Basket';
import Wishlist from '../components/Wishlist';
import AboutPage from '../components/AboutPage';
import BtnModeLang from '../components/BtnModeLang';
import ContactUs from '../components/ContactUs';
import SignUp from '../components/SignUp';


const App = () => {
  return (

    <BrowserRouter>
      <CartProvider>
        <Headers />
      <BtnModeLang/>
        <Routes>
          <Route path='/my-account' element={<Login />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/basket' element={<Basket/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
        </Routes>
         <Footer />
      </CartProvider>

    </BrowserRouter>
  )
}

export default App