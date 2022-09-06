import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../App'
import { deleteProducts,getProducts} from '../config/services'

export default function Products() {
    const deleteCart=useContext(getCart)
    const{getupdatedCart}=deleteCart
    const[pro,setPro]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
        getProducts().then(res=>setPro(res.data))
    },[])
    const delItem=(id)=>{
        deleteProducts(id)
        .then(res=>{
            if(res){
                getProducts().then(res=>setPro(res.data))
            }
        })
        if(localStorage.getItem("cart")!=undefined){
            let arr=JSON.parse(localStorage.getItem("cart")) 
            let newFilter=arr.filter(val=>val!==id) 
            localStorage.setItem('cart',JSON.stringify(newFilter))
            getupdatedCart(newFilter)
        }
    }
    const getInfo=(id)=>{
        navigate(`/productsinfo/${id}`)
    }
    const editPro=(id)=>{
        navigate(`/editproduct/${id}`)
    }
  return (
    <div className='container'>
        <div className='row'>
        {pro.map(item=>(
            <div key={item.id} className="card col-sm-4">
            <img src={item.imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: {item.price} /-</p>
                <div>
                    <button className='btn btn-warning me-2' onClick={()=>editPro(item.id)}>Edit</button>
                    <button className='btn btn-success me-2' onClick={()=>getInfo(item.id)}>Info</button>
                    <button className='btn btn-danger' onClick={()=>delItem(item.id)} >Delete</button>
                </div>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}
