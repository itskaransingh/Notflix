import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-600 py-10'>
      <div className='flex text-lg gap-4 justify-center items-center flex-col'>
        <div className='font-semibold '>
      Copyright © 2022 <span className='text-blue-500'>Notflix</span>  
      </div>
      <div className="flex">Home | Series | Movies</div>
        </div>
    </div>
  )
}

export default Footer