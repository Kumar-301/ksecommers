import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from 'react-spinners/PacmanLoader'
export default function Partners() {
    const[holders,setHolders]=useState([])
    const[loader,setLoader]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
            const URL="https://jsonplaceholder.typicode.com/users"
            axios.get(URL).then(res=>setHolders(res.data))
        },5000)
    })
  return (
    <section className='container'>
        <h1>Our Customers</h1>
        <div>
            {loader?(<div className='text-center' style={{paddingBottom:'100px'}}>
                    <Loader/>
                    </div>
                    ):(
                        <table>
                            <tbody>
                                <tr>
                                    <td>S.No</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                </tr>
                                {holders.map(user=>(
                                    <tr key={user.id} className="d-flex">
                                        <td><p>{user.id}</p></td>
                                        <td><p>{user.name}</p></td>
                                        <td><p>{user.email}</p></td>
                                </tr>
                                    ))}
                            </tbody>
                        </table>
                    )}
        </div>
    </section>
  )
}
