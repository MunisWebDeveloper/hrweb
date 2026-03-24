import DateComp from "../components/helper/DateComp"
import InputComp from "./helper/InputComp"
import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"
import TableComp from "./helper/TableComp"
import FemelyTable from "./helper/FameleComp"
import { useTranslation } from "react-i18next"
const UserInfo = ({fio,setFio,tsana,setTsana,jinsOptions,jins,
    setJins,oilaviyHolatOptions,oilaviyHolat,setOilaviyHolat,addFamilyMember,
    farzandOptions, farzand,handleFarzandChange,handleFarzandDateChange,handleFarzandDelete,addMyFamilyMember,
    otarkibOptions,otarkib,handleMyFarzandChange,handleMyFamilyDateChange,handleCommentChange,handleMyFamilyDelete
    }) => {
    const {t} = useTranslation()
  return (
    <>
            <LabelComp text={t("fio")} />
        <InputComp value={fio} setChange={setFio} placeholder="F.I.Oyingizni kiriting"/>
        
        
        
        <div className="flex justify-between pt-5">

          <div>    
            <div>
            <LabelComp text={t("data")} />
              </div>    
            <DateComp value={tsana} setChange={setTsana} />
          </div>

          <div>        
            <LabelComp text={t("gender")} />
            <SelectComp  
              options={jinsOptions}
              value={jins}
              onChange={setJins}
              placeholder="Jinsingizni tanlang" 
            />
          </div>
        </div>
              <LabelComp text={t("oxolat")} />
        <SelectComp 
          options={oilaviyHolatOptions}
          value={oilaviyHolat}
          onChange={setOilaviyHolat} 
          placeholder="Oilaviy xolatingiz"
        />

        <div className="flex justify-between items-center">
          <LabelComp text={t("farzand")} />
          <div onClick={addFamilyMember} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5 cursor-pointer">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
            </svg>
          </div>
        </div>
        
        <TableComp
          options={farzandOptions}
          value={farzand}
          onChange={handleFarzandChange}
          onDateChange={handleFarzandDateChange}
          onDelete={handleFarzandDelete}
        />
        <div className="flex justify-between items-center">
                <LabelComp text={t("otarkib")} />
            <div onClick={addMyFamilyMember} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
        </svg>
        </div>
            </div>
          <FemelyTable 
          options={otarkibOptions}
          value={otarkib}
          onChange={handleMyFarzandChange}
          onDateChange={handleMyFamilyDateChange}  
          onCommentChange={handleCommentChange}    
          onDelete={handleMyFamilyDelete}
          />
        </>
  )
}

export default UserInfo