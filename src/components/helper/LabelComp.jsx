import React from 'react'

const LabelComp = ({text}) => {
  return (
    <label 
        for="name"
        className="mt-2 text-white pb-10" 
    >
    {text}
    </label>
  )
}

export default LabelComp