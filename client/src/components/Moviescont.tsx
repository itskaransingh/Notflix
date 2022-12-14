import React from 'react'
import Movieslist from './Movieslist'
import {Ncontext} from '../context/Contextapi'


const Moviescont = () => {
  const {lists} = Ncontext()
  return (
    <div>
     {lists?.map((l)=>(
       <Movieslist l={l}/>
     ))
     }
    </div>
  )
}

export default Moviescont