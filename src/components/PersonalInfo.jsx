import React from 'react'
import LabelComp from './helper/LabelComp'
import InputComp from './helper/InputComp'
import SelectComp from './helper/SelectComp'
import { useTranslation } from 'react-i18next'

const PersonalInfo = ({
    viloyatOptions,viloyat,setViloyat,shaharOptions,shahar,setShahar,mfy,setMfy,
    xoxlaydiganFilialOptions,xoxlaydiganFilial,setXoxlaydiganFilial,xoxlaydiganLavozimOptions,xoxlaydiganLavozim,
    setXoxlaydiganLavozim,avvalIshlaganmiOptions,avvalIshlaganmi,setAvvalIshlaganmi,fuqarolikOptions,fuqarolik,setFuqarolik,
    ishJoyiBormiOptions,ishJoyiBormi,setishJoyiBormi,tanishiBormi,setTanishiBormi,adddasturlarniBilishDarajasiMalumoti ,
    TableComp7,dasturlarniBilishDarajasi,handledasturlarniBilishDarajasiMalumoti,handledasturlarniBilishDarajasiLevelChange,
    handledasturlarniBilishDarajasiMalumotiDelete,dasturlarniBilishDarajasiOptions,dasturlarniBilishDarajasiFoyizOptions
}) => {
  const {t} = useTranslation()
  return (
    <>
  <LabelComp text={t("vilinfo")} />
<SelectComp className="mb-3"
  options={viloyatOptions} 
  value={viloyat}
  onChange={setViloyat}
/>

  <LabelComp text={t("shaxinfo")} />
<SelectComp className="mb-3" 
  options={shaharOptions} 
  value={shahar}
  onChange={setShahar}
/>

 <LabelComp text={t("mfyinfo")} />
    <InputComp
    value={mfy}
    setChange={setMfy}
    />

    <LabelComp text={t("fililainfo")} />
<SelectComp className="mb-3" 
  options={xoxlaydiganFilialOptions}
  value={xoxlaydiganFilial}
  onChange={setXoxlaydiganFilial}
/>

<LabelComp text={t("lavinfo")} />
<SelectComp className="mb-3" 
  options={xoxlaydiganLavozimOptions} 
  value={xoxlaydiganLavozim}
  onChange={setXoxlaydiganLavozim}
/>

<LabelComp text={t("munisinfo")} />
<SelectComp className="mb-3" 
  options={avvalIshlaganmiOptions} 
  value={avvalIshlaganmi}
  onChange={setAvvalIshlaganmi}
/>

<LabelComp text={t("uzbinfo")} />
<SelectComp className="mb-3"
options={fuqarolikOptions} 
  value={fuqarolik}
  onChange={setFuqarolik}
/>
<LabelComp text={t("ishinfo")} />
<SelectComp className="mb-3"
  options={ishJoyiBormiOptions} 
  value={ishJoyiBormi}
  onChange={setishJoyiBormi}
/>
<LabelComp text={t("kompinfo")} />
    <InputComp
      value={tanishiBormi}
      setChange={setTanishiBormi}
    />

 <div className="flex justify-between items-center">
        <LabelComp text={t("dasturinfo")} />
      <div onClick={adddasturlarniBilishDarajasiMalumoti} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<div className='w-full overflow-hidden'>
  <TableComp7
    value={dasturlarniBilishDarajasi}
    onChange={handledasturlarniBilishDarajasiMalumoti}
    onLevelChange={handledasturlarniBilishDarajasiLevelChange}
    onDelete={handledasturlarniBilishDarajasiMalumotiDelete}
    options={dasturlarniBilishDarajasiOptions}
    options1={dasturlarniBilishDarajasiFoyizOptions}
  />
</div>
    </>
  )
}

export default PersonalInfo