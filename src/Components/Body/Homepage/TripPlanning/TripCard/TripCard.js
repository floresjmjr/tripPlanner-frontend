import React from 'react'
import './TripCard.css'

const TripCard = (props)=>{

  // default values
  let trip_name = `Trip to ${props.location}`
  let dates = ''

  if (props.startDate && props.endDate) {
    dates = (`
      <p className='start-trip-date'>${props.start_date}</p> -
      <p className='end-trip-date'>${props.end_date}</p>
      <span className="recent-seperator">.</span>
    `)
  }

  return (
    <div className='trip-card-component'>
      <img className='recent-trip-img'/>
      <p className='recent-trip-name'>{trip_name}</p>
      <div className='recent-trip-details'>
        <div className='recent-trip-initial'> 
          <p>J</p>
        </div> 
        <span className="recent-seperator">.</span>
        {dates}
        <p className='recent-places-visting'>0 places</p>
      </div>
    </div>
  )
}



export default TripCard