import React from 'react'
import LabelComp from './helper/LabelComp'
import TableComp5 from './helper/TableComp5'
import InputComp from './helper/InputComp'
import TableComp6 from './helper/TableComp2'

const PersonalAddInfo = ({
     questionnaire, handleAnswerChange, handleCommentChange, answerOptions,
  qoshimchaMalumot, setQoshimchaMalumot,
  addWorkExperience,
  ishTajribasi,              // ← o'zgartirildi
  handleWorkDateChange, handleWorkPlaceChange, handlePositionChange, handleWorkDelete,
  eskiIshHaqi, setEskiIshHaqi, xoxlanayotganIshHaqi, setXoxlanayotganIshHaqi,
  SelectComp, avtomobiliOption, avtomobili, setAvtomobili,
  malumotOlganiOption, malumotOlgani, setMalumotOlgani,
  sudlanganmiOption, sudlanganmi, setSudlanganmi,
  qoshimchaRaqam, setQoshimchaRaqam, setXizmatSafari, xizmatSafari

}) => {
  return (
    <>
    <LabelComp text={"Sog'ligingiz haqida ma'lumotlar? "} />
<TableComp5
  questionnaire={questionnaire}
  onAnswerChange={handleAnswerChange}
  onCommentChange={handleCommentChange}
  answerOptions={answerOptions}
/>

<LabelComp text={"Qo'shimcha ma'lumotlar"} />
  <InputComp value={qoshimchaMalumot} setChange={setQoshimchaMalumot}/>

  <div className="flex justify-between items-center">
        <LabelComp text={"Qayerda qachon va kim bo'lib ishlagansiz?. (Sizning rasmiy va norasmiy ish tajribangiz biz uchun muhim"} />
      <div onClick={addWorkExperience} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>

     <TableComp6
        value={ishTajribasi}   // ← o'zgartirildi
        onDateChange={handleWorkDateChange}
        onWorkPlaceChange={handleWorkPlaceChange}
        onPositionChange={handlePositionChange}
        onDelete={handleWorkDelete}
      />

<LabelComp text={"Oxirgi ish joyida olgan ish xaqingiz? (so'm)"} />
    <InputComp value={eskiIshHaqi} setChange={setEskiIshHaqi}/>

    <LabelComp text={"Qancha maosh xoxlaysiz? (so'm) "} />
    <InputComp value={xoxlanayotganIshHaqi} setChange={setXoxlanayotganIshHaqi}/>
    
    <LabelComp text={"Shaxsiy avtomabilingiz bormi? "} />
<SelectComp className="mb-3"
  options={avtomobiliOption} 
  value={avtomobili}
  onChange={setAvtomobili}
/>
<LabelComp text={"Bo'sh ish o'rni haqida qayerdan bildingiz?"} />
<SelectComp className="mb-3" 
  options={malumotOlganiOption} 
  value={malumotOlgani}
  onChange={setMalumotOlgani}
/>
<LabelComp text={"Xizmat safariga bora olasizmi (Boshqa viloyat yoki tuman filiallarimizda ishlay olasizmi)?"} />
<SelectComp className="mb-3"
  options={avtomobiliOption} 
  value={xizmatSafari}
  onChange={setXizmatSafari}
/>
<LabelComp text={"Sudlanganmisiz?"} />
<SelectComp className="mb-3" 
  options={sudlanganmiOption} 
  value={sudlanganmi}
  onChange={setSudlanganmi}
/>
 <LabelComp text={"Qo'shimcha telefon raqam"} />
    <InputComp value={qoshimchaRaqam} setChange={setQoshimchaRaqam} placeholder="+998" />
    <div className="text-white flex justify-center">Xatolok roy bersa bizga murojat qiling @Yordam</div>
    </>
  )
}

export default PersonalAddInfo