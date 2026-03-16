import React from 'react'
import LabelComp from './helper/LabelComp'
import InputComp from './helper/InputComp'
import SelectComp from './helper/SelectComp'

const PersonalInfo = ({
    viloyatOptions,viloyat,setViloyat,shaharOptions,shahar,setShahar,mfy,setMfy,
    xoxlaydiganFilialOptions,xoxlaydiganFilial,setXoxlaydiganFilial,xoxlaydiganLavozimOptions,xoxlaydiganLavozim,
    setXoxlaydiganLavozim,avvalIshlaganmiOptions,avvalIshlaganmi,setAvvalIshlaganmi,fuqarolikOptions,fuqarolik,setFuqarolik,
    ishJoyiBormiOptions,ishJoyiBormi,setishJoyiBormi,tanishiBormi,setTanishiBormi,adddasturlarniBilishDarajasiMalumoti ,
    TableComp7,dasturlarniBilishDarajasi,handledasturlarniBilishDarajasiMalumoti,handledasturlarniBilishDarajasiLevelChange,
    handledasturlarniBilishDarajasiMalumotiDelete,dasturlarniBilishDarajasiOptions,dasturlarniBilishDarajasiFoyizOptions
}) => {
  return (
    <>
  <LabelComp text={"Viloyat (Haqiqiy turar joy) *"} />
<SelectComp className="mb-3"
  options={viloyatOptions} 
  value={viloyat}
  onChange={setViloyat}
/>

  <LabelComp text={"Shaxar/Tuman (Haqiqiy turar joy)"} />
<SelectComp className="mb-3" 
  options={shaharOptions} 
  value={shahar}
  onChange={setShahar}
/>

 <LabelComp text={"Manzilingiz (Haqiqiy turar joy MFY, ko'cha)"} />
    <InputComp
    value={mfy}
    setChange={setMfy}
    />

    <LabelComp text={"Qaysi filialda ishlashni xohlaysiz? "} />
<SelectComp className="mb-3" 
  options={xoxlaydiganFilialOptions}
  value={xoxlaydiganFilial}
  onChange={setXoxlaydiganFilial}
/>

<LabelComp text={"Qaysi lavozimlarda ishlashni xohlaysiz?"} />
<SelectComp className="mb-3" 
  options={xoxlaydiganLavozimOptions} 
  value={xoxlaydiganLavozim}
  onChange={setXoxlaydiganLavozim}
/>

<LabelComp text={"Avval bizning kompaniyamizda ishlaganmisiz?"} />
<SelectComp className="mb-3" 
  options={avvalIshlaganmiOptions} 
  value={avvalIshlaganmi}
  onChange={setAvvalIshlaganmi}
/>

<LabelComp text={"O'zbekiston Respubilkasi fuqorosimisiz?"} />
<SelectComp className="mb-3"
options={fuqarolikOptions} 
  value={fuqarolik}
  onChange={setFuqarolik}
/>
<LabelComp text={"Hozirda ish bilan ta'minlanganmisiz?"} />
<SelectComp className="mb-3"
  options={ishJoyiBormiOptions} 
  value={ishJoyiBormi}
  onChange={setishJoyiBormi}
/>
<LabelComp text={"MUNIS komponyasida ishlaydigan yaqin qarindoshingiz bormi?"} />
    <InputComp
      value={tanishiBormi}
      setChange={setTanishiBormi}
    />

 <div className="flex justify-between items-center">
        <LabelComp text={"Qaysi dasturlardan foydalana olasiz?"} />
      <div onClick={adddasturlarniBilishDarajasiMalumoti} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>

  <TableComp7

  value={dasturlarniBilishDarajasi}
  onChange={handledasturlarniBilishDarajasiMalumoti}
  onLevelChange={handledasturlarniBilishDarajasiLevelChange}
  onDelete={handledasturlarniBilishDarajasiMalumotiDelete}
  options={dasturlarniBilishDarajasiOptions}
  options1={dasturlarniBilishDarajasiFoyizOptions}
  />
    </>
  )
}

export default PersonalInfo