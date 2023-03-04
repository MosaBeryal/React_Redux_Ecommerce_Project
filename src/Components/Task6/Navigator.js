import React, { useState } from 'react'
import Footer from './Footer'
import Home from './Pages/Home'
import Navb from './Navb'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import ProductDetail from './Pages/ProductDetail'
import Store from './Pages/Products'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart'
import {Provider} from "react-redux"
import store from './store/store'
function Navigator(){
   const [cart,setCart]=useState([]);


  function addToCart(data){
    setCart([...cart,data])

  }
  
  
  return (
    <div>
      {/* the binding we install react-Redux gives us binding to use provider through which we inject the store> */}
      <Provider store={store}>

      
      <Router>
      <Navb/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/store' element={<Store addToCart={addToCart}/>}/>
        <Route path="/store/productdetail/:id" element={<ProductDetail addToCart={addToCart}/>} />
        <Route path='/cart' element={<Cart data={cart}  />}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>    
      
    
      </Provider>
  
       </div>
  )
}

export default Navigator
