import DateComp from "./DateComp";
import InputComp from "./InputComp";
import SelectComp from "./SelectComp";

function TableComp3({ 
  value, 
  // onChange, 
  onDateChange1, 
  onDateChange2, 
  onNameChange, 
  onSpecialtyChange, 
  onDelete 
}) {
  
  // Xavfsizlik tekshiruvlari
  const safeValue = Array.isArray(value) ? value : [];

  return (
    <>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {/* 1-ustun: O'qish yillari */}
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                <div className="flex flex-col">
                  <span>O'qishga qabul qilingan yil</span>
                  <hr className="my-1 border-gray-300" />
                  <span>O'qishni bitirgan yil</span>
                </div>
              </th>
              
              {/* 2-ustun: Ta'lim muassasasi */}
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                <div className="flex flex-col">
                  <span>Ta'lim muassasasi nomi</span>
                  <hr className="my-1 border-gray-300" />
                  <span>Mutaxassisligingiz</span>
                </div>
              </th>
              
              {/* 3-ustun: Amallar */}
              <th className="px-3 py-2 text-left text-xs text-gray-600">
                O'chirish
              </th>
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {safeValue.length > 0 ? (
              safeValue.map((education) => (
                <tr key={education.id} className="hover:bg-gray-50 transition duration-150">
                  {/* 1-ustun ma'lumotlari */}
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex flex-col text-xs font-medium text-gray-900 gap-2">
                      <DateComp 
                        value={education.startDate || ""} 
                        setChange={(date) => onDateChange1?.(education.id, date)} 
                      />
                      <DateComp 
                        value={education.endDate || ""} 
                        setChange={(date) => onDateChange2?.(education.id, date)} 
                      />                
                    </div>
                  </td>
                  
                  {/* 2-ustun ma'lumotlari */}
                  <td className="px-3 py-2 whitespace-nowrap text-left">
                    <div className="flex flex-col text-xs text-gray-900 gap-2">
                      <InputComp 
                        value={education.schoolName || ""} 
                        setChange={(name) => onNameChange?.(education.id, name)} 
                      />
                      <InputComp 
                        value={education.specialty || ""} 
                        setChange={(specialty) => onSpecialtyChange?.(education.id, specialty)} 
                      />
                    </div>
                  </td>
                  
                  {/* 3-ustun: O'chirish tugmasi */}
                  <td className="px-3 py-2 whitespace-nowrap">
                    <button 
                      onClick={() => onDelete?.(education.id)}
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

export default TableComp3;