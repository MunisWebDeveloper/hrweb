import React from 'react'

const LabelComp = ({text}) => {
  return (
    <label 
        htmlFor="name"
        className="text-white pb-3" 
    >
    {text}
    </label>
  )
}

export default LabelComp