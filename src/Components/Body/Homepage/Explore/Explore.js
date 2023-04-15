import React from 'react'
import './Explore.css'
import Destination from './Destination/Destination'

const Explore = ()=>{
  return (
    <section className="explore-container">
      <h1>Explore</h1>
      <h3>Popular destinations</h3>
      <div className="destinations">
        <Destination/>
        <Destination/>
        <Destination/>
      </div>
    </section>
  )
}

export default Explore; 