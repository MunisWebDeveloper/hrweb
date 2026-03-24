import React from 'react'

const InputComp = ({value, setChange, placeholder}) => {
  return (
    <input 
      value={value}
      onChange={(e) => setChange(e.target.value)}
      type="text" 
      id="name"
      className="min-w-36 px-2 pb-2 pt-2 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-blue-500 peer" 
      placeholder={placeholder}
    />
  )
}

export default InputComp