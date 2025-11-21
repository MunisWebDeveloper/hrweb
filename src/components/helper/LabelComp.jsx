import React from 'react'

const LabelComp = ({text}) => {
  return (
    <label 
        for="name"
        className="text-white pb-10" 
    >
    {text}
    </label>
  )
}

export default LabelComp