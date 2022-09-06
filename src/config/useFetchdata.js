import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetchdata(url) {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(url)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    })
  return data
}
