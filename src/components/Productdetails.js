import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCart } from '../App'
import { getProductsbyId } from '../config/services'

export default function Productdetails() {
    const cartData=useContext(getCart)
    const{getupdatedCart}=cartData
    let {id}=useParams()
    const [getpro,setgetPro]=useState({})
    
    useEffect(()=>{
        getProductsbyId(id)
        .then(res=>setgetPro(res.data))
        .catch(err=>console.log(err))
    },[id])

    const addtoCart=(id)=>{
      if(localStorage.getItem('cart')!=undefined){
        let arr=JSON.parse(localStorage.getItem('cart'))
        if(arr.includes(id)){
          alert("product already addedd")
        }else{
          arr.push(id)
          localStorage.setItem('cart',JSON.stringify(arr))
          getupdatedCart(arr)
          alert("product added")
        }
      }else{
        let arr=[]
        arr.push(id)
        localStorage.setItem('cart',JSON.stringify(arr))
        getupdatedCart(arr)
      }
    }
  return (
    <div className='container'>
        <img src={getpro.imgUrl}/>
        <div>
            <h2>{getpro.title}</h2>
            <p>Price: {getpro.price}/-</p>
            <button className='btn btn-success' onClick={()=>addtoCart(getpro.id)}>Add to cart</button>
        </div>
    </div>
  )
}
