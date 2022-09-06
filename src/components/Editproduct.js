import React, { useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateProducts } from '../config/services';

export default function Editproduct() {
  let {id}=useParams()
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { title: '', price: '', imgUrl: ''}
);
  let navigate=useNavigate()
  const addItem=(event)=>{
    const{name,value}=event.target
    setState({...state,[name]:value})
  }
  const updateDetails=(event)=>{
    event.preventDefault()
    updateProducts(id,state).then(res=>{
      navigate('/products')
    })
  }
  console.log(state)
  return (
    <div className='container'>
      <form onSubmit={updateDetails}>
        <div className='form-group'>
          <label htmlFor="imgId">Image Url</label>
          <input id='imgId' type="text" name='imgUrl' className='form-control' onChange={addItem} />
        </div>
        <div className='form-group'>
          <label htmlFor="titleId">Title</label>
          <input id='titleId' type="text" name='title' className='form-control' onChange={addItem} />
        </div>
        <div className='form-group'>
          <label htmlFor="pricenum">Price</label>
          <input id='pricenum' type="number" name='price' className='form-control' onChange={addItem} />
        </div>
        <input type="submit" value="submit" className='mt-4 btn btn-outline-success'/>
      </form>
    </div>
  )
}
