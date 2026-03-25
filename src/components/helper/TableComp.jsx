import DateComp from "./DateComp";
import SelectComp from "./SelectComp";

function TableComp({options, value, onChange, onDateChange, onDelete}) {
  const safeValue = Array.isArray(value) ? value : [];
  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <>
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: red;
          border-radius: 10px;
        }
      `}</style>

      <div className="w-full overflow-x-scroll custom-scroll">
        <table className="w-full md:min-w-0 min-w-[480px] text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Farzandi
              </th>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Tug'ilgan sana
              </th>
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                Amallar
              </th>
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {safeValue.length > 0 ? (
              safeValue.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition duration-150">
                  <td className="px-3 py-2">
                    <SelectComp 
                      options={safeOptions} 
                      value={member.type || ""} 
                      onChange={(selectedValue) => onChange?.(member.id, selectedValue)}
                    />
                  </td>
                  <td className="px-3 py-2">
                    <DateComp 
                      value={member.birthDate || ""} 
                      setChange={(date) => onDateChange?.(member.id, date)} 
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button 
                      onClick={() => onDelete?.(member.id)}
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
                <td colSpan={3} className="px-3 py-8 text-center text-gray-500 text-xs">
                  Ma'lumotlar kiritilmagan.<br/>
                  (Kiritish uchun '+' tugmasini bosing)
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComp;