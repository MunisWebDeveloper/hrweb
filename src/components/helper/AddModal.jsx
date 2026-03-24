import { useState, useRef, useEffect } from 'react';
import { X, CheckCircle2, Loader2,Upload} from 'lucide-react';




// ================= FilialAddModal =================
const AddModal = ({ isOpen,setDisabl, userInfo }) => {
  const [errors,   setErrors]   = useState({});
  const [loading,  setLoading]  = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [preview,  setPreview]  = useState(null);
  const fileInputRef = useRef(null);
const handleModal = ()=>{
    setDisabl(true)
    isOpen(false)
}
  useEffect(() => {
    if (!isOpen) return;
    if (userInfo) {
      setForm({
        filialNomiLotin:  userInfo.filialNomiLotin  ?? '',
        filialNomiKiril:  userInfo.filialNomiKiril  ?? '',
        moljal_lotin:     userInfo.moljal_lotin     ?? '',
        moljal_kiril:     userInfo.moljal_kiril     ?? '',
        kocha_lotin:      userInfo.kocha_lotin      ?? '',
        kocha_kiril:      userInfo.kocha_kiril      ?? '',
        lokatsiya:        userInfo.lokatsiya         ?? '',
        brend:            userInfo.brend             ?? '',
        brendCode:            userInfo.brendCode             ?? '',
        image:            null,
        branch:           userInfo.branch != null ? userInfo.branch : null,
        allowed_branches: Array.isArray(userInfo.allowed_branches) ? userInfo.allowed_branches : [],
        login:            userInfo.username ?? userInfo.login ?? '',
        parol:            '',
        phone:            userInfo.phone ?? '',
      });
      setIsActive(userInfo.is_active ?? true);
    }
  }, [isOpen, userInfo]);




  if (!isOpen) return null;

  const inputClass = (key) =>
    `w-full pl-3 pr-3 py-2.5 text-sm border rounded-xl bg-slate-50 ${errors[key] ? 'border-red-300' : 'border-gray-200'}`;

  return (
    <>
      <div  className="fixed inset-0 z-40" style={{ background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(1px)' }} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-2xl rounded-2xl shadow-sm p-6 flex-col ">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Rozilik ma'lumotlari</h2>
            <button ><X size={18} /></button>
          </div>

          {/* Body */}
          <div className="gap-4 pb-5">
                Rozilik shartlarini tasdiqlash orqali siz o'zingizning shaxsiy ma'lumotlaringizni kompaniya maqsadlarida qayta ishlash uchun 
                ularni saqlashga, foydalanishga va o'zaro almashishga rozilik bildirasiz. Shuningdek, ushbu anketada siz taqdim etgan barcha ma'lumotlar 
                ishonchli ekanligi va yolg'on ma'lumot uzatilishi holatlari aniqlangan taqdirda barcha javobgarlikni o'z zimmangizga olasiz!
          </div>
            <button
            onClick={handleModal}
            className="bg-green-500 hover:bg-green-600 text-white px-20 py-2 rounded-lg disabled:opacity-50 text-center">
            ROZIMAN
          </button>
          {/* Footer */}
        

        </div>
      </div>
    </>
  );
};

export default AddModal;