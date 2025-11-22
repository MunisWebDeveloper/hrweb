import { useState } from "react"
import DateComp from "./helper/DateComp"
import InputComp from "./helper/InputComp"
import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"
import TableComp from "./helper/TableComp"
import TableComp2 from "./helper/TableComp2"
import TableComp3 from "./helper/TableComp3"
import UploadBox from "./helper/UploadComp"
import UploadingComp2 from "./helper/UploadingComp2"
import TableComp4 from "./helper/TableComp4"
import TableComp5 from "./helper/TableComp5"
import TableComp6 from "./helper/TableComp6"

const User = () => {
  const [fio, setFio] = useState("")
  const [familiya, setFamiliya] = useState("")
  const [sharif, setSharif] = useState("")
  const [tsana, setTsana] = useState("")
  const [jins, setJins] = useState("")
  const [oilaviyHolat, setOilaviyHolat] = useState("")
  const [farzand, setFarzand] = useState("")
  const [ftsana, setFtsana] = useState("")
  const [otarkib,setOtarkib] = useState("")
  const [oData,setOData] = useState("")
  const [malumoti,setMalumoti] = useState("")
  const [oqishqabul,setOqishqabul] = useState("")
  const [oqishtugatgan,setOqishtugatgan] = useState("")
  const [oqishnomi,setOoqishnomi] = useState("")
  const [oqishMutaxasisligi,setOqishMutaxasisligi] = useState("")
  const [oqiyotganMalumoti,setOqiyotganMalumoti] = useState("")
  const [tilBilishDarajasi,setTilBilishDarajasi] = useState("")
  const [tilBilishDarajasiFoyiz,setTilBilishDarajasiFoyiz] = useState("")
  const [boyVazn,setBoyVazn] = useState("")
  const [viloyat,setViloyat] = useState("")
  const [shahar,setShahar] = useState("")
  const [mfy,setMfy] = useState("")
  const [xoxlaydiganFilial,setXoxlaydiganFilial] = useState("")
  const [xoxlaydiganLavozim,setXoxlaydiganLavozim] = useState("")
  const [avvalIshlaganmi,setAvvalIshlaganmi] = useState("")
  const [fuqarolik,setFuqarolik] = useState("")
  const [ishJoyiBormi,setishJoyiBormi] = useState("")
  const [tanishiBormi,setTanishiBormi] = useState("")
  const [dasturlarniBilishDarajasi,setDasturlarniBilishDarajasi] = useState("")
  const [dasturlarniBilishDarajasiFoyiz,setDasturlarniBilishDarajasiFoyiz] = useState("")
  const [savolJavoblarIzox,setSavolJavoblarIzox] = useState("")
  const [qoshimchaMalumot,setQoshimchaMalumot] = useState("")
  const [ishgaKirganMalumoti,setIshgaKirganMalumoti] = useState("")
  const [ishdanBoshaganMalumot,setIshdanBoshaganMalumot] = useState("")
  const [ishJoyiNomi,setIshJoyiNomi] = useState("")
  const [lavozimi,setLavozimi] = useState("")
  const [eskiIshHaqi,setEskiIshHaqi] = useState("")
  const [xoxlanayotganIshHaqi,setXoxlanayotganIshHaqi] = useState("")
  const [avtomobili,setAvtomobili] = useState("")
  const [malumotOlgani,setMalumotOlgani] = useState("")
  const [sudlanganmi,setSudlanganmi] = useState("")
  const [qoshimchaRaqam,setQoshimchaRaqam] = useState("")
  const [passportTuri,setPassportTuri] = useState(true)

  const jinsOptions = [
    { value: "erkak", label: "Erkak" },
    { value: "ayol", label: "Ayol" }
  ]
    const oilaviyHolatOptions = [
    { value: "uylangan", label: "Uylangan" },
    { value: "bo'ydoq", label: "Bo'ydoq" },
    { value: "ajrashgan", label: "Ajrashgan" }
  ]
   const farzandOptions = [
    { value: "O'g'il", label: "O'g'il" },
    { value: "Qiz", label: "Qiz" },
  ]
  const otarkibOptions = [
    {value: "Otam", label:"Otam"},
    {value: "Onam", label:"Onam"},
    {value: "Turmush o'rtog'im", label:"Turmush o'rtog'im"},
    {value: "Akam", label:"Akam"},
    {value: "Opam", label:"Opam"},
    {value: "Ukam", label:"Ukam"},
    {value: "Singlim", label:"Singlim"},
    {value: "O'g'lim", label:"O'g'lim"},
    {value: "Qizim", label:"Qizim"},
    {value: "Qayni otam", label:"Qayni otam"},
    {value: "Qayni onam", label:"Qayni onam"},
    {value: "Qayni akam", label:"Qayni akam"},
    {value: "Qayni opam", label:"Qayni opam"},
    {value: "Qayni ukam", label:"Qayni ukam"},
    {value: "Qayni singilim", label:"Qayni singilim"},
  ]

  const malumotiOptions = [
    { value: "Maktab", label: "Maktab" },
    { value: "Koledj", label: "Koledj" },
    { value: "Texnikum", label: "Texnikum" },
    { value: "Bakalavr", label: "Bakalavr" },
    { value: "Magistr", label: "Magistr" },
  ]
 const oqiyotganMalumotiOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
  ]
   const tilBilishDarajasiOptions = [
    { value: "Рус", label: "Рус" },
    { value: "Tojik", label: "Tojik" },
    { value: "Ingliz", label: "Ingliz" },
    { value: "Qirg'iz", label: "Qirg'iz" },
    { value: "Koreys", label: "Koreys" },
    { value: "Turk", label: "Turk" },
    { value: "Azarbayjon", label: "Azarbayjon" },
    { value: "Nems", label: "Nems" },
    { value: "Boshqa", label: "Boshqa" },

  ]
   const tilBilishDarajasiFoyizOptions = [
    { value: "10%", label: "10%" },
    { value: "20%", label: "20%" },
    { value: "30%", label: "30%" },
    { value: "40%", label: "40%" },
    { value: "50%", label: "50%" },
    { value: "60%", label: "60%" },
    { value: "70%", label: "70%" },
    { value: "80%", label: "80%" },
    { value: "90%", label: "90%" },
    { value: "100%", label: "100%" },
  ]
  const viloyatOptions = [
    { value: "Farg'ona", label: "Farg'ona" },
    { value: "Andijon", label: "Andijon" },
    { value: "Namangan", label: "Namangan" },
    { value: "Toshkent", label: "Toshkent" },
  ]
   const shaharOptions = [
    { value: "Quvasoy shahar", label: "Quvasoy shahar" },
    { value: "Quva tumani", label: "Quva tumani" },
    { value: "Oltariq", label: "Oltariq" },
    { value: "Marg'ilon", label: "Marg'ilon" },
  ]
 const xoxlaydiganFilialOptions = [
    { value: "Farg'ona", label: "Farg'ona" },
    { value: "Andijon", label: "Andijon" },
    { value: "Namangan", label: "Namangan" },
    { value: "Toshkent", label: "Toshkent" },
  ]

   const xoxlaydiganLavozimOptions = [
    { value: "Dastavchik", label: "Dastavchik" },
    { value: "Oshpaz", label: "Oshpaz" },
    { value: "Bogbon", label: "Bogbon" },
    { value: "Shartnoma mutaxasisi", label: "Shartnoma mutaxasisi" },
    { value: "Mebel yigish ustasi", label: "Mebel yigish ustasi" },
  ]
  const avvalIshlaganmiOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
  ]
  const fuqarolikOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
  ]
  const ishJoyiBormiOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
  ]
  const dasturlarniBilishDarajasiOptions = [
    { value: "Excel", label: "Excel" },
    { value: "Word", label: "Word" },
    { value: "PowerPoint", label: "PowerPoint" },
    { value: "Google Chrome", label: "Google Chrome" },
    { value: "Instagram", label: "Instagram" },
  ]
    const dasturlarniBilishDarajasiFoyizOptions = [
    { value: "10%", label: "10%" },
    { value: "20%", label: "20%" },
    { value: "30%", label: "30%" },
    { value: "40%", label: "40%" },
    { value: "50%", label: "50%" },
    { value: "60%", label: "60%" },
    { value: "70%", label: "70%" },
    { value: "80%", label: "80%" },
    { value: "90%", label: "90%" },
    { value: "100%", label: "100%" },
  ]
    const SavolJavobdivlaridiv = [
    { value: "Og'ir narsalar ko'tara olasizmi?", label: "Og'ir narsalar ko'tara olasizmi?" },
    { value: "Yuragingizdan shikoyatingiz bormi?", label: "Yuragingizdan shikoyatingiz bormi?" },
    { value: "Og'ir jarroxlik amaliyotini o'taganmisiz?", label: "Og'ir jarroxlik amaliyotini o'taganmisiz?" },
    { value: "Ko'zingizdan shikoyatingiz bormi?", label: "Ko'zingizdan shikoyatingiz bormi?" },
    { value: "Bel og'rig'idan shikoyatingiz bormi?", label: "Bel og'rig'idan shikoyatingiz bormi?" },
    { value: "Bir joyda turib yoki o'tirib ishlay olasizmi?", label: "Bir joyda turib yoki o'tirib ishlay olasizmi?" },
  ]
 const SavolJavobdivlaridivOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
  ]
const avtomobiliOption = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
  ]
  const malumotOlganiOption = [
    { value: "Flayer", label: "Flayer" },
    { value: "Banner(ko'cha reklamalari)", label: "Banner(ko'cha reklamalari)" },
    { value: "hh.uz", label: "hh.uz" },
    { value: "Tanishlar/Dostlar", label: "Tanishlar/Dostlar" },
    { value: "olx.uz", label: "olx.uz" },
    { value: "rabota.uz", label: "rabota.uz" },
  ]
  const sudlanganmiOption = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
  ]
    const passportTuriOption = [
    { value: true, label: "ID karta" },
    { value: false, label: "Oddiy" }
  ]
    const ConsoleUser = () =>{
    console.log(fio);
    console.log(familiya);
    console.log(sharif);
    console.log(tsana);
    console.log(jins);
    console.log(oilaviyHolat);
    console.log(farzand);
    console.log(ftsana);
    console.log(otarkib);
    console.log(oData);
    console.log(oqishqabul);
    console.log(oqishtugatgan);
    console.log(oqishnomi);
    console.log(oqishMutaxasisligi);
    console.log(oqiyotganMalumoti);
    
  }
  return (
    <>
      <div className="container mx-auto h-[100%] p-5 bg-black"  style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
    <h1 className="text-white text-2xl font-bold size-20 w-[100%] text-center pt-10">Anketa to'ldirish</h1>
     
     <LabelComp text={"Ism"} />
    <InputComp value={fio} setChange={setFio} placeholder="Ismingizni kiriting"/>
    
    <LabelComp text={"Familiya"} />
    <InputComp value={familiya} setChange={setFamiliya} placeholder="Familiyangizni kiriting"/>

    <LabelComp text={"Otasining ismi"} />
    <InputComp value={sharif} setChange={setSharif} placeholder="Sharifingizni kiriting"/>
    <div className="flex justify-between">
      <div >        
        <LabelComp text={"Tug'ilgan sana"} />
        <DateComp value={tsana} setChange={setTsana} />
      </div>
      <div>        
        <LabelComp text={"Jinsingiz"} />
    <SelectComp  
      options={jinsOptions}
        value={jins}
        onChange={setJins}
        placeholder="Jinsingizni tanlang" 
  />
      </div>
    </div>
        <LabelComp text={"Oilaviy holatingiz"} />
    <SelectComp 
        options={oilaviyHolatOptions}
        value={oilaviyHolat}
        onChange={setOilaviyHolat} 
        placeholder="Oilaviy holatingiz"
    />

    <div className="flex justify-between">
        <LabelComp text={"Farzandlari"} />
        
      <div className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<TableComp 
  options={farzandOptions}
  value={farzand}
  onChange={setFarzand} 
  setFtsana={setFtsana}
  ftsana={ftsana}
  placeholder="Farzandlari"
/>
<div className="flex justify-between items-center">
        <LabelComp text={"Oilaviy tarkibingiz"} />
      <div className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<TableComp2 
  options={otarkibOptions}
  value={otarkib}
  onChange={setOtarkib} 
  setOData={setOData}
  oData={oData}
  placeholder="Farzandlari"
/>
<LabelComp text={"Ma'lumotingiz"} />
<SelectComp className="mb-3"
  options={malumotiOptions}
  value={malumoti}
  onChange={setMalumoti} 
  placeholder="Ma'lumotingiz"
/>
<LabelComp text={"Ta'lim muassasalari nomi va bitirgan yilingiz"} />
<TableComp3 
  // value={otarkib}
  onChange={setOqishqabul} 
  onChange2={setOqishtugatgan} 
  oqishqabul={oqishqabul}
  oqishtugatgan={oqishtugatgan}
  oqishnomi={oqishnomi}
  setOoqishnomi={setOoqishnomi}
  oqishMutaxasisligi={oqishMutaxasisligi}
  setOqishMutaxasisligi={setOqishMutaxasisligi}
/>

<LabelComp text={"Hozirda universitet, litsey yoki kollej talabasimisiz?"} />
<SelectComp className="mb-3"
  options={oqiyotganMalumotiOptions} 
  value={oqiyotganMalumoti}
  onChange={setOqiyotganMalumoti}
  />
<LabelComp text={"Qaysi tillarni bilasiz?"} />
<TableComp4
   options={tilBilishDarajasiOptions} 
  value={tilBilishDarajasi}
  onChange={setTilBilishDarajasi}
  options1={tilBilishDarajasiFoyizOptions} 
  value1={tilBilishDarajasiFoyiz}
  onChange1={setTilBilishDarajasiFoyiz}
/>

 <LabelComp text={"Bo'y va vazningiz (sm/kg)"} />
  
  <InputComp value={boyVazn} setChange={setBoyVazn} placeholder="Misol uchun 165/65" />

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
    <LabelComp text={"Qaysi dasturlardan foydalana olasiz?"} />

  <TableComp4
    options={dasturlarniBilishDarajasiOptions}
    value={dasturlarniBilishDarajasi}
    onChange={setDasturlarniBilishDarajasi}
    options1={dasturlarniBilishDarajasiFoyizOptions}
    value1={dasturlarniBilishDarajasiFoyiz}
    onChange1={setDasturlarniBilishDarajasiFoyiz}
  />


<LabelComp text={"Sog'ligingiz haqida ma'lumotlar? "} />
<TableComp5
  options={SavolJavobdivlaridiv}
  value={SavolJavobdivlaridivOptions}
  text={savolJavoblarIzox}
  setText={setSavolJavoblarIzox}
/>

<LabelComp text={"Qo'shimcha ma'lumotlar"} />
  <InputComp value={qoshimchaMalumot} setChange={setQoshimchaMalumot}/>

    <LabelComp text={"Qayerda qachon va kim bo'lib ishlagansiz?. (Sizning rasmiy va norasmiy ish tajribangiz biz uchun muhim)"} />
<TableComp6
  onChange={setIshgaKirganMalumoti} 
  onChange2={setIshdanBoshaganMalumot} 
  oqishqabul={ishgaKirganMalumoti}
  oqishtugatgan={ishdanBoshaganMalumot}
  oqishnomi={ishJoyiNomi}
  setOoqishnomi={setIshJoyiNomi}
  oqishMutaxasisligi={lavozimi}
  setOqishMutaxasisligi={setLavozimi}
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
  value={avtomobili}
  onChange={setAvtomobili}
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
    <UploadBox/>
    <LabelComp text={"Pasport turi"} />
<SelectComp className="mb-3"
   options={passportTuriOption} 
  value={passportTuri}
  onChange={setPassportTuri}
/>
<UploadingComp2 />
    <div className="text-white flex gap-3">
       <input
        type="checkbox"
        // checked={checked}
        // onChange={onChange}
          className="peer h-5 w-5 bg-white appearance-none cursor-pointer
                   border border-gray-400 rounded-sm 
                   transition-all duration-200
                   checked:bg-[#8A7A27] checked:border-[#8A7A27]"
      />
      <p>
Roziman * <a href="" className="text-red-500">(Rozilik shartlari bilan tanishish)</a></p>
    </div>
    <div className="w-full flex justify-center">
      <button onClick={ConsoleUser} className="text-white bg-sky-600 min-h-14 w-full rounded">Anketani yuborish</button>
    </div>
</div>
    </>
  )
}

export default User