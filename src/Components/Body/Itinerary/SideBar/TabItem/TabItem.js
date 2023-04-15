import React from 'react'
import './TabItem.css'

const TabItem = (props) => {

  const list = props.map((item, idx)=>{
    return (
      <li key={`tab-item-${idx}`}>{item}</li>
    )
  })

  return (
    <div className="tabitem-container">
      <h5>{props.title}</h5>
      <ul>{list}</ul>
    </div>
    )
}

export default TabItem;