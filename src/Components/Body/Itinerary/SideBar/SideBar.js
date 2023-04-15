import React from 'react'
import TabItem from './TabItem/TabItem';
import './SideBar.css'

const overview = {"title": "Overview", "items": ["Explore", "Notes", "Places to visit"]}
const itinerary = {"title": "Itinerary", "items": ["Add trip dates"]}
const budget = {"title": "Budget", "items": ["View"]}

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <TabItem titel={overview.title} items={overview.items}/>
      <TabItem titel={itinerary.title} items={itinerary.items}/>
      <TabItem titel={budget.title} items={budget.items}/>
    </div>
    )
}

export default SideBar;