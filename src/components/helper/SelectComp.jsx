import React from 'react'

const SelectComp = () => {
  return (
    <>
  <div class="relative">
    <select class="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none pr-10">
      <option value="E">Erkak</option>
      <option value="A">Ayol</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </div>
</>
  )
}

export default SelectComp