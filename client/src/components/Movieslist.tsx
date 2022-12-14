import React from 'react'
import Moviescard from './Moviescard'

const Movieslist = ({l}) => {

  return (
    <div className='flex flex-col    overflow-x-auto hide-scrollbar mx-8 py-6'>
     <div className='text-3xl pb-4 font-semibold sticky left-0 text-white' >{l.title}</div>
    <div className='flex w-max gap-7'> 
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
        <Moviescard />
    </div>
    </div>
  )
}

export default Movieslist