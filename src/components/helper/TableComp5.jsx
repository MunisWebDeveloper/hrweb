import InputComp from "./InputComp";
import SelectComp from "./SelectComp";

function TableComp5({options, value, onChange, text,setText}) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Savol
              </th>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Javob
              </th>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Izox
              </th>
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {options && options.map((option, index,) => (
              <tr key={option.label || index} className="hover:bg-gray-50 transition duration-150">
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-3 text-left">
                      <div className="text-xs font-medium text-gray-900">
                        {option.value} {/* Savol matni */}
                      </div>
                    </div>
                  </div>
                </td>
                
                <td className="px-3 py-2 whitespace-nowrap text-left">
                  <div className="text-xs text-gray-900">
                    <SelectComp 
              options={value} 
              value={value?.[index]} // Har biriga alohida value
              onChange={(val) => onChange(val, index)} // Index bilan chaqirish
            />                
                  </div>
                </td>
                
                <td className="px-3 py-2 whitespace-nowrap">
                  <InputComp value={text} setChange={setText}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComp5;