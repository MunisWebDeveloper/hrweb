import InputComp from "./InputComp";
import SelectComp from "./SelectComp";

function TableComp5({ 
  questionnaire = {}, 
  onAnswerChange, 
  onCommentChange, 
  answerOptions 
}) {
  


  const safeAnswerOptions = Array.isArray(answerOptions) ? answerOptions : [];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 text-left text-xs text-gray-600">Savol</th>
            <th className="px-3 py-2 text-left text-xs text-gray-600">Javob</th>
            <th className="px-3 py-2 text-left text-xs text-gray-600">Izox</th>
          </tr>
        </thead>
        
        <tbody className="bg-white divide-y divide-gray-200">
          {questionnaire.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="text-xs font-medium text-gray-900">
                    {item.question}
                  </div>
                </td>

                <td className="px-3 py-2 whitespace-nowrap">
                  <SelectComp 
                    options={safeAnswerOptions} 
                    value={item.answer || ""} 
                    onChange={(val) => onAnswerChange?.(item.id, val)}
                    placeholder="Javobni tanlang"
                  />                
                </td>

                <td className="px-3 py-2 whitespace-nowrap">
                  <InputComp 
                    value={item.comment || ""} 
                    setChange={(text) => onCommentChange?.(item.id, text)}
                    placeholder="Izoh yozing..."
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComp5;