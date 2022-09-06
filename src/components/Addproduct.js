import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProducts } from '../config/services'
export default function Addproduct() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { title: '', price: '', imgUrl: '', titleError: '', priceError: '', imageError: '' }
);
  let navigate=useNavigate()
  const addItem=(event)=>{
    const{name,value}=event.target
    setState({...state,[name]:value})
  }
  const validate1=()=>{
    let value=state.price
    let reg=new RegExp('^[0-9]*$')
    const{priceError}=state
    if(value===''){
        setState({priceError:"Required"})
        return false
    }
    else if(!reg.test(value)){
      setState({priceError:"please Enter valid numbers"})
      return false
    }else{
      setState({priceError:""})
      return true
    }
  }
  const validate2=()=>{
    let value=state.title
    let reg=new RegExp('^[A-Za-z]*$')
    if(value===""){
      setState({titleError:"Required"})
      return false
    }else if(!reg.test(value)){
      setState({titleError:"Enter only Alphabets"})
      return false
    }else {
      setState({titleError:""})
      return true
    }
  }
  const validate3=()=>{
    let value=state.imgUrl
    let reg= /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
    if(value===""){
      setState({imageError:"Required"})
      return false
    }else if(!reg.test(value)){
      setState({imageError:"Enter URL correctly"})
      return false
    }else{
      setState({imageError:""})
      return true
    }
  }
  const validate=()=>{
    let sp1=validate1()
    let sp2=validate2()
    let sp3=validate3()
    return sp1&&sp2
  }
  const postDetails=(event)=>{
    event.preventDefault()
    let result=validate()
    if(result){
      addProducts(state).then(res=>{
        navigate('/products')
      })
    }
  }
  return (
    <div className='container'>
      <form onSubmit={postDetails}>
        <div className='form-group'>
          <label htmlFor="imgId">Image Url</label>
          <input id='imgId' type="text" name='imgUrl' className='form-control' onChange={addItem} />
          <p className='text-danger'>{state.imageError}</p>
        </div>
        <div className='form-group'>
          <label htmlFor="titleId">Title</label>
          <input id='titleId' type="text" name='title' className='form-control' onChange={addItem} />
          <p className='text-danger'>{state.titleError}</p>
        </div>
        <div className='form-group'>
          <label htmlFor="pricenum">Price</label>
          <input id='pricenum' type="number" name='price' className='form-control' onChange={addItem} />
          <p className='text-danger'>{state.priceError}</p>
        </div>
        <input type="submit" value="submit" className='mt-4 btn btn-outline-success'/>
      </form>
    </div>
  )
}
