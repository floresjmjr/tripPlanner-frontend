import React, {useEffect, useState} from 'react'
import './TripPlanning.css'
import axiosConfig from '../../../../Utils/axiosConfig'
import TripCard from './TripCard/TripCard'

const TripPlanning = () => {

  const [trips, set_trips] = useState([])
  let recent_trips = (<p>You haven't created anything yet. <a className='plan-new-trip-link' href="/plan">Plan a new trip</a>.</p>)

  // Functions
  const getAllItineraries = async()=>{
    try {
      const res = await axiosConfig.get('/itineraries')
      set_trips(res.data)
      } catch (err) {
        console.log('error', err)
      }  
  }

  // Lifecycle
  useEffect(()=>{
    getAllItineraries()
  }, [])


  // Logic
  if (trips.length) {
    console.log('trips', trips)
    recent_trips = trips.map((obj, idx)=>{
      return <TripCard key={`trip-item-${idx}`} location={obj.location} start_date={obj.startDate} end_date={obj.endDate}/>
    })
  }

  return (
    <div className="trip-planning-container">
      <div className="recent-trip-container">
        <h1>Recently viewed and upcoming</h1>
        <a className="plan-new-trip-orange" href="/plan">+ Plan new trip</a>
      </div>
      <section className="recent-upcoming">
        <div className="recent-trip-list-container">
          {recent_trips}
        </div>
      </section>
      <section className="visited-locations">
        <div className="map-image-placeholder"></div>
      </section>
      <section className="trips-guides">
        <div className="trip-guide-container">
          <div className="trip-guide-header">
            <h4>Your trips</h4>
            <a className="plan-new-trip-gray" href="/plan">+ Plan new trip</a>
          </div>
          <p>You don't have any trips yet. <a className='plan-new-trip-link ' href="/plan">Plan a new trip</a>.</p>
        </div>
        <div className="trip-guide-container">
          <div className="trip-guide-header">
            <h4>Your guides</h4>
            <a className="plan-new-trip-gray" href="/plan">+ Create new guide</a>
          </div>
          <p>You don't have any guides yet. <a className='plan-new-trip-link' href="/guide">Create a new guide</a>.</p>
        </div>
      </section>
    </div>
    )
}

export default TripPlanning;