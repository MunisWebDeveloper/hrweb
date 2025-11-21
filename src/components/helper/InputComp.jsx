import React from 'react'

const InputComp = ({value,setChange,placeholder}) => {
  return (
     <input 
     value={value}
     onChange={(e) => setChange(e.target.value)}
        type="text" 
        id="name"
        className="block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-2
      focus:ring-blue-500 focus:border-blue-500 peer" 
        placeholder={placeholder}
      />
  )
}

export default InputComp