import React from 'react'
import Toggle from  "../toggle/Toggle"
import './feature.css'

const FeatureBar = ({ handleGenderSelection, genderToggle}) => {
  return (
    <div className="feature-container" id="featured">
      <h2>Personalise your experience</h2>
      <Toggle handleGenderSelection={handleGenderSelection}/>
      {/* <h3>{genderToggle}</h3> */}
    </div>
  )
}

export default FeatureBar
