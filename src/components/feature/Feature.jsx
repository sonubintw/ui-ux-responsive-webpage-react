import React from 'react'
import "./feature.css"

//props from WhatGPT3
const Feature = ({title,text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        {/* //this div selfclosing is the bar above the title */}
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature