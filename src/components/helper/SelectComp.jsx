 const SelectComp = ({ options, value,onChange, placeholder = "Tanlang..." }) => {
  // const handleChange = (e) => {
  //   if (onSelectChange) {
  //     onSelectChange(e.target.value)
  //   }
  // }

  return (
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