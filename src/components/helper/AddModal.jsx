import { useEffect } from "react";
import { X } from "lucide-react";

const AddModal = ({ isOpen,setIsModal, onClose, setDisabl }) => {

  // ESC bosilganda yopiladi
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setDisabl(true);
    onClose(); // ✅ yagona yopish
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6 animate-fadeIn">

          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Rozilik ma'lumotlari
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="text-sm text-gray-600 leading-relaxed mb-6">
            Rozilik shartlarini tasdiqlash orqali siz o'zingizning shaxsiy 
            ma'lumotlaringizni kompaniya maqsadlarida qayta ishlash uchun 
            ularni saqlashga, foydalanishga va o'zaro almashishga rozilik 
            bildirasiz. Shuningdek, ushbu anketada siz taqdim etgan barcha 
            ma'lumotlar ishonchli ekanligi va yolg'on ma'lumot uzatilishi 
            holatlari aniqlangan taqdirda barcha javobgarlikni o'z zimmangizga 
            olasiz!
          </div>

          {/* Footer */}
          <div className="flex justify-center">
           

            <button
              onClick={handleConfirm}
              className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium"
            >
              ROZIMAN
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default AddModal;