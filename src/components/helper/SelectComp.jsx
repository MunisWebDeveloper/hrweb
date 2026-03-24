import { ChevronDown } from "lucide-react";

const SelectComp = ({ options, value, onChange, placeholder = "Tanlang..." }) => {
  return (
    <div className="relative">
      <select 
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value} 
        className="min-w-36 w-full px-4 py-1.5 bg-white border border-gray-600 rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none pr-10"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Iconca qo'shildi */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  )
}

export default SelectComp;