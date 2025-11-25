import DateComp from "./DateComp";
import SelectComp from "./SelectComp";

function TableComp4({ 
  value, 
  onChange, 
  onLevelChange, 
  onDelete,
  options,
  options1,
}) {
  
  // Xavfsizlik tekshiruvlari
  const safeValue = Array.isArray(value) ? value : [];
 const safeOptions = Array.isArray(options) ? options : [];
 const safeOptions1 = Array.isArray(options1) ? options1 : [];
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Til
              </th>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Qay darajada
              </th>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Amallar
              </th>
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {safeValue.length > 0 ? (
              safeValue.map((language) => (
                <tr key={language.id} className="hover:bg-gray-50 transition duration-150">
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-3 text-left">
                        <div className="text-xs font-medium text-gray-900">
                          <SelectComp 
                            options={safeOptions} 
                            value={language.language || ""} 
                            onChange={(selectedValue) => onChange?.(language.id, selectedValue)} 
                          />                
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-3 py-2 whitespace-nowrap text-left">
                    <div className="text-xs text-gray-900">
                      <SelectComp 
                        options={safeOptions1} 
                        value={language.langprotsent || ""} 
                        onChange={(selectedValue) => onLevelChange?.(language.id, selectedValue)} 
                      />                
                    </div>
                  </td>
                  
                  <td className="px-3 py-2 whitespace-nowrap">
                    <button 
                      onClick={() => onDelete?.(language.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium transition duration-200 flex items-center"
                    >
                      <svg className="w-6 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-3 py-2 text-center">
                  <div className="w-full min-h-30 flex items-center justify-center text-gray-500">
                    Ma'lumotlar kiritilmagan.
                    <br/>
                    (Kiritish uchun '+' tugmasini bosing)
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComp4;