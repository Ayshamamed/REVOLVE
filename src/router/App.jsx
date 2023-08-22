import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from '../components/Headers';
import "../assets/style.scss";
import Footer from '../HOME/Footer';
import Login from '../LOGIN/Login';
import Home from '../pages/Home';
import Basket from '../components/Basket';
import Wishlist from '../components/Wishlist';
import AboutPage from '../ABOUT/AboutPage';
import ContactUs from '../components/ContactUs';
import SignUp from '../LOGIN/SignUp';
import PrivateRoute from '../user-routes/PrivateRoute';
import Blog from '../pages/Blog';
import ProductsPage from '../pages/ProductsPage';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from "../components/Spinner"
import TopBtn from '../components/TopBtn';
import ProductDetails from '../components/ProductDetails';
import { ModeContext } from '../context/ModeContext';
import AdminPanel from "../user-routes/AdminPanel";
import Dashboard from "../user-routes/Dashboard";
import AddBlog from '../user-routes/AddBlog';
import EditBlog from '../user-routes/EditBlog';


const App = () => {
  const {darkMode}=useContext(ModeContext);

  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])



  
  return (

    <>
    <main className={darkMode ? "dark" :"light"}>
    {loading? <Spinner/> : (  <BrowserRouter>
   
   <Headers/>
   <TopBtn/>
   <Routes>
     <Route path='/my-account' element={<Login />}></Route>
     <Route path='/register' element={<SignUp />}></Route>
     <Route path='/' element={<Home />}></Route>
     <Route path='/basket' element={<Basket/>}></Route>
     <Route path='/wishlist' element={<Wishlist/>}></Route>
     <Route path='/about' element={<AboutPage/>}></Route>
     <Route path='/contact' element={<ContactUs/>}></Route>
     <Route path='/blog' element={<Blog/>}></Route>
     <Route path='/products' element={<ProductsPage/>}></Route>
     <Route path='/productDetails/:id' element={<ProductDetails/>}></Route>
     <Route path='*' element={<Home />}></Route>

     <Route element={<PrivateRoute/>}>
      <Route path="/admin" element={<AdminPanel/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/addBlog" element={<AddBlog/>}/>
     <Route path="/editBlog/:id" element={<EditBlog/>}/>

     </Route>
   </Routes>
   
    <Footer />


</BrowserRouter>) }
    </main>
   
    </>
    
  
  )
}

export default App