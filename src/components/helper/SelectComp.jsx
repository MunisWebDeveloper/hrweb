 const SelectComp = ({ options, value,onChange, placeholder = "Tanlang..." }) => {
  // const handleChange = (e) => {
  //   if (onSelectChange) {
  //     onSelectChange(e.target.value)
  //   }
  // }

  return (
<<<<<<< HEAD
    <div className="relative">
      <select 
      onChange={(e) => onChange && onChange(e.target.value)}
        value={value} 
        // onChange={handleChange}
        className="min-w-36 w-full px-4 py-1.5 bg-white border border-gray-600 rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none pr-10"
=======
    <div className="relative pb-3">
     <select 
        value={String(value)}
        onChange={(e) => {
          let val = e.target.value;

          if (val === "true") val = true;
          else if (val === "false") val = false;

          onChange && onChange(val);
        }}
        className="w-full px-4 py-2 bg-white border border-gray-600 rounded-lg "
>>>>>>> 997f115acbef17978a32625d2b7ff7be4aec4a15
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}


export default SelectComp;