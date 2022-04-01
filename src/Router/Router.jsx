import React from 'react'
import {Routes,Route} from "react-router-dom";
import CartPage from '../Pages/Cart/CartPage'
import Home from '../Pages/Home/Home'
import ProductPage from '../Pages/Product/ProductPage'
import WishlistPage from '../Pages/Wishlist/WishlistPage'
import LoginPage from '../Pages/Login/LoginPage'
import SignupPage from '../Pages/Signup/SignupPage'
import "../App.css"
import Mockman from "mockman-js"

const Router = () => {
  return (<>
  
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/product' element={<ProductPage/>}/>
       <Route exact path='/cart' element={<CartPage/>}/>
       <Route exact path='/wishlist' element={<WishlistPage/>}/>
       <Route exact path='/login' element={<LoginPage/>}/>
       <Route exact path='/signup' element={<SignupPage/>}/>
       <Route exact path='/mock' element={<Mockman />}/>
     </Routes>
  </>)
}

export default Router