import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"
import TableComp3 from "./helper/TableComp3"
import TableComp4 from "./helper/TableComp4"

const EducationInfo = ({
    malumotiOptions,malumoti,setMalumoti,addOqishqabul,oqishqabul,handleEducationStartDateChange,
    handleEducationEndDateChange,handleEducationNameChange,handleEducationSpecialtyChange,handleEducationDelete,
    oqiyotganMalumotiOptions,oqiyaptimi,setOqiyaptimi,addOqiyotganMalumoti,oqiyotganMalumoti,handleOqiyotganMalumoti,
    handleOqiyotganMalumotiLevelChange,handleOqiyotganMalumotiDelete,tilBilishDarajasiOptions,tilBilishDarajasiFoyizOptions,
}) => {
  return (
    <>
<LabelComp text={"Ma'lumotingiz"} />
<SelectComp className="mb-3"
  options={malumotiOptions}
  value={malumoti}
  onChange={setMalumoti} 
  placeholder="Ma'lumotingiz"
/>
<div className="flex justify-between items-center">
        <LabelComp text={"Ta'lim muassasalari nomi va bitirgan yilingiz"} />
      <div onClick={addOqishqabul} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<TableComp3 
  value={oqishqabul}
  onDateChange1={handleEducationStartDateChange}
  onDateChange2={handleEducationEndDateChange}
  onNameChange={handleEducationNameChange}
  onSpecialtyChange={handleEducationSpecialtyChange}
  onDelete={handleEducationDelete}
/>
<LabelComp text={"Hozirda universitet, litsey yoki kollej talabasimisiz?"} />
<SelectComp className="mb-3"
  options={oqiyotganMalumotiOptions} 
  value={oqiyaptimi}
  onChange={setOqiyaptimi}
  />

  <div className="flex justify-between items-center">
        <LabelComp text={"Qaysi tillarni bilasiz?"} />
      <div onClick={addOqiyotganMalumoti} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<TableComp4
  value={oqiyotganMalumoti}
  onChange={handleOqiyotganMalumoti}
  onLevelChange={handleOqiyotganMalumotiLevelChange}
  onDelete={handleOqiyotganMalumotiDelete}
  options={tilBilishDarajasiOptions}
  options1={tilBilishDarajasiFoyizOptions}
/>
    </>
  )
}

export default EducationInfo