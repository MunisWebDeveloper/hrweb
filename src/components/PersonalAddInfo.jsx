import React from 'react'
import LabelComp from './helper/LabelComp'
import TableComp5 from './helper/TableComp5'
import InputComp from './helper/InputComp'
import TableComp6 from './helper/TableComp2'
import { useTranslation } from 'react-i18next'

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
  const {t} = useTranslation()
  return (
    <>
    <LabelComp text={t("sogiliqinfo")} />
    <div className='w-full overflow-x-auto'>
    <TableComp5
      questionnaire={questionnaire}
      onAnswerChange={handleAnswerChange}
      onCommentChange={handleCommentChange}
      answerOptions={answerOptions}
    />
    </div>

<LabelComp text={t("malumotinfo")} />
  <InputComp value={qoshimchaMalumot} setChange={setQoshimchaMalumot}/>

  <div className="flex justify-between items-center">
        <LabelComp text={t("ishinfo")} />
      <div onClick={addWorkExperience} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<div className='w-full overflow-x-auto'>
     <TableComp6
        value={ishTajribasi}   // ← o'zgartirildi
        onDateChange={handleWorkDateChange}
        onWorkPlaceChange={handleWorkPlaceChange}
        onPositionChange={handlePositionChange}
        onDelete={handleWorkDelete}
      />
</div>

<LabelComp text={t("ozirgiishinfo")} />
    <InputComp value={eskiIshHaqi} setChange={setEskiIshHaqi}/>

    <LabelComp text={t("maoshinfo")} />
    <InputComp value={xoxlanayotganIshHaqi} setChange={setXoxlanayotganIshHaqi}/>
    
    <LabelComp text={t("avtoinfo")} />
<SelectComp className="mb-3"
  options={avtomobiliOption} 
  value={avtomobili}
  onChange={setAvtomobili}
/>
<LabelComp text={t("ishorniinfo")} />
<SelectComp className="mb-3" 
  options={malumotOlganiOption} 
  value={malumotOlgani}
  onChange={setMalumotOlgani}
/>
<LabelComp text={t("xizmatsafarinfo")} />
<SelectComp className="mb-3"
  options={avtomobiliOption} 
  value={xizmatSafari}
  onChange={setXizmatSafari}
/>
<LabelComp text={t("sudlanganinfo")} />
<SelectComp className="mb-3" 
  options={sudlanganmiOption} 
  value={sudlanganmi}
  onChange={setSudlanganmi}
/>
 <LabelComp text={t("telraqam")} />
    <InputComp value={qoshimchaRaqam} setChange={setQoshimchaRaqam} placeholder="+998" />
    <div className="text-white flex justify-center">{t("xatolik")} @Yordam</div>
    </>
  )
}

export default PersonalAddInfo