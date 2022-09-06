import React from 'react'
import useFetchdata from '../config/useFetchdata'
import Getusecontect from './Getusecontect'
export default function Fetchdata() {
  let data=useFetchdata('https://jsonplaceholder.typicode.com/photos')
  return (
    <div>
      <Getusecontect/>
      <h2>Fetchdata</h2>
      {data.map(val=>
        <div>
          <h4>{val.title}</h4>
          <img src={val.url} width={200} height={200}/>
        </div>
        )}
    </div>
  )
}
