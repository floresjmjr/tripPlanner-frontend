import React from 'react'
import './Homepage.css'
import TripPlanning from './TripPlanning/TripPlanning'
import Explore from './Explore/Explore'
import Footer from '../../Footers/MainFooter'
import Header from '../../Headers/MainHeader'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <div className='body-container'>
        <div className='body-component'>
          <TripPlanning/>
          <Explore/>
        </div>
      </div>
      <Footer/>
    </div>
    )
}

export default Homepage;