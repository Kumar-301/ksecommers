import axios from 'axios'
import React, { createContext, useState } from 'react'
import Loader from 'react-spinners/PacmanLoader'
import Fetchdata from './Fetchdata'
export const Newcontext=createContext()
export default function Posts() {
    let name="chandu senapathi"
    const[posts,setPosts]=useState([])
    const [loader,setLoader]=useState(true)
    const getPosts=()=>{
        setTimeout(()=>{
            setLoader(false)
            const URL="https://jsonplaceholder.typicode.com/posts"
            axios.get(URL).then(res=>setPosts(res.data))
        },1000)
    }
  return (
    <div className='container'>
        <Newcontext.Provider value={name}>
        <h2>Get all Posts</h2>
        <button className='text-info' onClick={getPosts}>Get Posts</button>
        <div>
            {loader?(<div className='text-center' style={{paddingBottom:'100px'}}>
                    <Loader color='red'/>
                    </div>
                    ):(
                        <table >
                            <tbody>
                                <tr>
                                    <td>S.No</td>
                                    <td>Post</td>
                                    <td>Body</td>
                                </tr>
                                {posts.map(post=>(
                                    <tr key={post.id} className="border-bottom-0">
                                        <td><p>{post.id}</p></td>
                                        <td><p>{post.title}</p></td>
                                        <td><p>{post.body}</p></td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    )}
        </div>
        <Fetchdata/>
        </Newcontext.Provider>
    </div>
  )
}
