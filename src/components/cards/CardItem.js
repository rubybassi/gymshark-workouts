import React from 'react'
import "./card.css"

const CardItem = () => {
  return (
    <div>
      <div className="card-item-content">
          <img src="https://picsum.photos/300" alt="" />
          <div className="card-item-text">
          <h3>Workout Name</h3>
          <a href="/#">View exercise</a>
          </div>
      </div>
    </div>
  )
}

export default CardItem
