import React, { useContext } from 'react'
import { Newcontext } from './Posts'
export default function Getusecontect() {
    const name=useContext(Newcontext)
  return (
    <div>
        <h1>Get context name</h1>
        <p>Hello, {name}</p>
    </div>
  )
}
