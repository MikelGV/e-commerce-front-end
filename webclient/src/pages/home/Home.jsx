import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Navbar from '../../components/navbar/navbar'
import Slider from '../../components/Slider/Slider'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home