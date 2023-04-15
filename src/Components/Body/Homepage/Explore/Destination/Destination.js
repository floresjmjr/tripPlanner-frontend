import React from 'react'
import './Destination.css'


const Destination = ()=> {
  return (
    <div className="destination-container">
      <div className="destination-image-placeholder"></div>
      <h4>Title of Guide</h4>
      <p>We are the owners of Misty Mountain Inn & Cottages whi...</p>
      <div className="destination-meta-data">
        <span>First Last</span>
        <span><i className="fa-regular fa-heart"></i> 3</span>
        <span><i className="fa-regular fa-eye"></i> 15</span>
      </div>
    </div>  
  )
}


export default Destination;