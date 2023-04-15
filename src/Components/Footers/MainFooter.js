import React from 'react'
import './MainFooter.css'

let first_footer_links = [
  "Blog", "Report security issue", "Terms of use & Privacy policy", "Mobile app",
  "How to embed a map on your travel blog", "Jobs", "Contact us", "Google data disclosure"
]

let second_footer_links = [
  "Trip planners by destination", "Road trips by destination",
  "Distances between cities", "Best places to visit by category", 
  "Weather around the world", "Travel questions & answers"
]

first_footer_links = first_footer_links.map((link, idx)=>{
  return (
    <li key={`first-footer-${idx}`}>{link}</li>
  )
})

second_footer_links = second_footer_links.map((link, idx)=>{
  return (
    <li key={`second-footer-${idx}`}>{link}</li>
  )
})

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-component">
        <div className="trademark">
          <p>Made with ❤ in SFO & more</p> 
          <p>© 2022 Jorge Flores.</p>
        </div>
        <div className="footer-links-container">
          <p>Wanderbranch</p>
          <div className="footer-links">
            <ul>
              {first_footer_links}
            </ul>
            <ul>
              {second_footer_links}
            </ul>
          </div>
        </div>
        <div className="mobile-links">
          <p>Get the app</p>
          <img className="mobile-store" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png?20170219160111"/>
          <img className="mobile-store" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"/>
        </div>
      </div>
    </div>
  )
}



export default Footer;