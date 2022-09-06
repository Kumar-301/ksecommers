import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Partners from './components/Partners'
import Posts from './components/Posts'
import Products from './components/Products'
import Productdetails from './components/Productdetails'
import Addproduct from './components/Addproduct'
import Editproduct from './components/Editproduct'
export let getCart=createContext()
export default function App() {
  let [arrlength,setArrlrngth]=useState([])
  const getupdatedCart=(data)=>{
    setArrlrngth(data)
  }
  useEffect(()=>{
    if(localStorage.getItem('cart')!=undefined){
      let arr=JSON.parse(localStorage.getItem('cart'))
      setArrlrngth(arr)
    }
	},[])
  return (
    <>
    <Router>
    <getCart.Provider value={{arrlength,getupdatedCart}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/partners' element={<Partners/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productsinfo/:id' element={<Productdetails/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/editproduct/:id' element={<Editproduct/>}/>
      </Routes>
      <Footer/>
      </getCart.Provider>
    </Router>
    </>
  )
}
