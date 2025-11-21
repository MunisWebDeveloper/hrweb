 const SelectComp = ({ options, value,onChange, placeholder }) => {
  // const handleChange = (e) => {
  //   if (onSelectChange) {
  //     onSelectChange(e.target.value)
  //   }
  // }

  return (
    <div className="relative">
      <select 
      onChange={(e) => onChange && onChange(e.target.value)}
        value={value} 
        // onChange={handleChange}
        className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none pr-10"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  )
}


export default SelectComp;