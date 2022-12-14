import React from 'react'
import Corousal from '../components/Corousal'
import Footer from '../components/Footer'
import Moviescont from '../components/Moviescont'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Corousal />
      <Moviescont />
      <Footer />
    </div>
  )
}

export default Home