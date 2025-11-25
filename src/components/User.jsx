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
import TableComp7 from "./helper/TableComp7"

const User = () => {
  const [fio, setFio] = useState("")
  const [familiya, setFamiliya] = useState("")
  const [sharif, setSharif] = useState("")
  const [tsana, setTsana] = useState("")
  const [jins, setJins] = useState("")
  const [oilaviyHolat, setOilaviyHolat] = useState("")
  const [farzand, setFarzand] = useState([])
  const [otarkib,setOtarkib] = useState([])
  const [malumoti,setMalumoti] = useState("")
  const [oqishqabul,setOqishqabul] = useState([])
  const [oqiyotganMalumoti,setOqiyotganMalumoti] = useState([])
  // const [tilBilishDarajasi,setTilBilishDarajasi] = useState("")
  // const [tilBilishDarajasiFoyiz,setTilBilishDarajasiFoyiz] = useState("")
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
  const [dasturlarniBilishDarajasi,setDasturlarniBilishDarajasi] = useState([])
  // const [dasturlarniBilishDarajasiFoyiz,setDasturlarniBilishDarajasiFoyiz] = useState("")
  // const [savolJavoblarIzox,setSavolJavoblarIzox] = useState("")
  const [qoshimchaMalumot,setQoshimchaMalumot] = useState("")
  // const [ishgaKirganMalumoti,setIshgaKirganMalumoti] = useState([])
  // const [ishdanBoshaganMalumot,setIshdanBoshaganMalumot] = useState("")
  // const [ishJoyiNomi,setIshJoyiNomi] = useState("")
  // const [lavozimi,setLavozimi] = useState("")
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
  const SavolJavoblar = [
    { value: "Og'ir narsalar ko'tara olasizmi?", label: "Og'ir narsalar ko'tara olasizmi?" },
    { value: "Yuragingizdan shikoyatingiz bormi?", label: "Yuragingizdan shikoyatingiz bormi?" },
    { value: "Og'ir jarroxlik amaliyotini o'taganmisiz?", label: "Og'ir jarroxlik amaliyotini o'taganmisiz?" },
    { value: "Ko'zingizdan shikoyatingiz bormi?", label: "Ko'zingizdan shikoyatingiz bormi?" },
    { value: "Bel og'rig'idan shikoyatingiz bormi?", label: "Bel og'rig'idan shikoyatingiz bormi?" },
    { value: "Bir joyda turib yoki o'tirib ishlay olasizmi?", label: "Bir joyda turib yoki o'tirib ishlay olasizmi?" },
  ]
  const SavolJavobOptions = [
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
    // console.log(fio);
    // console.log(familiya);
    // console.log(sharif);
    // console.log(tsana);
    // console.log(jins);
    // console.log(oilaviyHolat);
    // console.log(farzand);
    // console.log(ftsana);
    // console.log(otarkib);
    // console.log(oData);
    // console.log(oqishqabul);
    // console.log(oqishtugatgan);
    // console.log(oqishnomi);
    // console.log(oqishMutaxasisligi);
    // console.log(oqiyotganMalumoti);
    console.log(questionnaire);
    
  }


const [[questionnaire, setQuestionnaire]] = useState([
   { 
    question: "Og'ir narsalar ko'tara olasizmi?", 
    answer: "", 
    comment: "" 
  },
  { 
    question: "Yuragingizdan shikoyatingiz bormi?", 
    answer: "", 
    comment: "" 
  },
  { 
    question: "Og'ir jarroxlik amaliyotini o'taganmisiz", 
    answer: "", 
    comment: "" 
  },
  { 
    question: "Ko'zingizdan shikoyatingiz bormi?", 
    answer: "", 
    comment: "" 
  },
  { 
    question: "Bel og'rig'idan shikoyatingiz bormi?", 
    answer: "", 
    comment: "" 
  },
  { 
    question: "Bir joyda turib yoki o'tirib ishlay olasizmi?", 
    answer: "", 
    comment: "" 
  }
]);

const answerOptions = [
  { value: "ha", label: "Ha" },
  { value: "yoq", label: "Yo'q" }
];

// Javobni o'zgartirish
const handleAnswerChange = (index, answer) => {
  setQuestionnaire(prev => 
    prev.map((item, i) => 
      i === index ? { ...item, answer } : item
    )
  );
};

// Izohni o'zgartirish
const handleCommentChange = (index, comment) => {
  setQuestionnaire(prev => 
    prev.map((item, i) => 
      i === index ? { ...item, comment } : item
    )
  );
};


  // Farzand qo'shish funksiyasi
  const addFamilyMember = () => {
    const newMember = {
      id: Date.now(), 
      type: "",
      birthDate: ""
    };
    
    setFarzand(prevFarzand => [...(prevFarzand || []), newMember]);
  };

  // Farzand turini o'zgartirish
  const handleFarzandChange = (id, selectedValue) => {
    setFarzand(prev => 
      (prev || []).map(member => 
        member.id === id ? { ...member, type: selectedValue } : member
      )
    );
  };

  // Farzand sanasini o'zgartirish
  const handleFarzandDateChange = (id, date) => {
    setFarzand(prev => 
      (prev || []).map(member => 
        member.id === id ? { ...member, birthDate: date } : member
      )
    );
  };

  // Farzandni o'chirish
  const handleFarzandDelete = (id) => {
    setFarzand(prev => 
      (prev || []).filter(member => member.id !== id)
    );
  };

  // Oila qo'shish funksiyasi
  const addMyFamilyMember = () => {
    const newMember = {
      id: Date.now(), 
      type: "",
      birthDate: "",
      comment: ""
    };
    
    setOtarkib(prevFarzand => [...(prevFarzand || []), newMember]);
  };

  // Oila turini o'zgartirish
  const handleMyFarzandChange = (id, selectedValue) => {
    setOtarkib(prev => 
      (prev || []).map(member => 
        member.id === id ? { ...member, type: selectedValue } : member
      )
    );
  };

// Oila sanasini o'zgartirish - YANGI FUNKSIYA
const handleMyFamilyDateChange = (memberId, date) => {
  setOtarkib(prev => 
    prev.map(member => 
      member.id === memberId 
        ? { ...member, birthDate: date }
        : member
    )
  );
};
// Comment ni o'zgartirish - TO'G'RILANGAN
// const handleCommentChange = (memberId, comment) => {
//   setOtarkib(prev => 
//     prev.map(member => 
//       member.id === memberId 
//         ? { ...member, comment: comment }
//         : member
//     )
//   );
// };

  // Oila o'chirish
  const handleMyFamilyDelete = (id) => {
    setOtarkib(prev => 
      (prev || []).filter(member => member.id !== id)
    );
  };



  const addOqishqabul = () => {
  const newEducation = {
    id: Date.now(),
    startDate: "",
    endDate: "",
    schoolName: "",
    specialty: ""
  };
    setOqishqabul(prev => [...prev, newEducation]);
};

// Ta'lim ma'lumotlarini o'zgartirish funksiyalari
const handleEducationStartDateChange = (id, date) => {
  setOqishqabul(prev => 
    prev.map(edu => 
      edu.id === id ? { ...edu, startDate: date } : edu
    )
  );
};

const handleEducationEndDateChange = (id, date) => {
  setOqishqabul(prev => 
    prev.map(edu => 
      edu.id === id ? { ...edu, endDate: date } : edu
    )
  );
};

const handleEducationNameChange = (id, name) => {
  setOqishqabul(prev => 
    prev.map(edu => 
      edu.id === id ? { ...edu, schoolName: name } : edu
    )
  );
};

const handleEducationSpecialtyChange = (id, specialty) => {
  setOqishqabul(prev => 
    prev.map(edu => 
      edu.id === id ? { ...edu, specialty: specialty } : edu
    )
  );
};

// Ta'limni o'chirish
const handleEducationDelete = (id) => {
  setOqishqabul(prev => prev.filter(edu => edu.id !== id));
};

const addOqiyotganMalumoti = () => {
  const newEducation = {
    id: Date.now(),
    language: "",
    langprotsent: "",
  };
    setOqiyotganMalumoti(prev => [...prev, newEducation]);
};

// Dasturni o'zgartirish funksiyasi
const handleOqiyotganMalumoti = (id, selectedProgram) => {
  setOqiyotganMalumoti(prev => 
    prev.map(prog => 
      prog.id === id ? { ...prog, language: selectedProgram } : prog
    )
  );
};

// Dastur darajasini o'zgartirish funksiyasi
const handleOqiyotganMalumotiLevelChange = (id, selectedLevel) => {
  setOqiyotganMalumoti(prev => 
    prev.map(prog => 
      prog.id === id ? { ...prog, langprotsent: selectedLevel } : prog
    )
  );
};

// Dasturni o'chirish
const handleOqiyotganMalumotiDelete = (id) => {
  setOqiyotganMalumoti(prev => prev.filter(prog => prog.id !== id));
};

 const adddasturlarniBilishDarajasiMalumoti = () => {
  const newEducation = {
    id: Date.now(),
    program: "",
    progprotsent: "",
  };
    setDasturlarniBilishDarajasi(prev => [...prev, newEducation]);
};

// Dasturni o'zgartirish funksiyasi
const handledasturlarniBilishDarajasiMalumoti = (id, selectedProgram) => {
  setDasturlarniBilishDarajasi(prev => 
    prev.map(prog => 
      prog.id === id ? { ...prog, program: selectedProgram } : prog
    )
  );
};

// Dastur darajasini o'zgartirish funksiyasi
const handledasturlarniBilishDarajasiLevelChange = (id, selectedLevel) => {
  setDasturlarniBilishDarajasi(prev => 
    prev.map(prog => 
      prog.id === id ? { ...prog, progprotsent: selectedLevel } : prog
    )
  );
};

// Dasturni o'chirish
const handledasturlarniBilishDarajasiMalumotiDelete = (id) => {
  setDasturlarniBilishDarajasi(prev => prev.filter(prog => prog.id !== id));
};

// Yangi ish tajribasi qo'shish
const addWorkExperience = () => {
  const newWork = {
    id: Date.now(),
    startDate: "",
    endDate: "",
    workPlace: "",
    position: ""
  };
  setDasturlarniBilishDarajasi(prev => [...prev, newWork]);
};

// Sana o'zgartirish
const handleWorkDateChange = (id, field, date) => {
  setDasturlarniBilishDarajasi(prev => 
    prev.map(work => 
      work.id === id ? { ...work, [field]: date } : work
    )
  );
};

// Ish joyi nomini o'zgartirish
const handleWorkPlaceChange = (id, workPlace) => {
  setDasturlarniBilishDarajasi(prev => 
    prev.map(work => 
      work.id === id ? { ...work, workPlace } : work
    )
  );
};

// Lavozimni o'zgartirish
const handlePositionChange = (id, position) => {
  setDasturlarniBilishDarajasi(prev => 
    prev.map(work => 
      work.id === id ? { ...work, position } : work
    )
  );
};

// O'chirish
const handleWorkDelete = (id) => {
  setDasturlarniBilishDarajasi(prev => prev.filter(work => work.id !== id));
};

  return (
    <>
      <div className="container mx-auto h-[100%] p-5 bg-black" style={{
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
          <div>        
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

        <div className="flex justify-between items-center">
          <LabelComp text={"Farzandlari"} />
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
        <LabelComp text={"Oilaviy tarkibingiz"} />
      <div onClick={addMyFamilyMember} className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<TableComp2 
  options={otarkibOptions}
  value={otarkib}
  onChange={handleMyFarzandChange}
  onDateChange={handleMyFamilyDateChange}  
  onCommentChange={handleCommentChange}    
  onDelete={handleMyFamilyDelete}
/>

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
  value={oqiyotganMalumoti}
  onChange={setOqiyotganMalumoti}
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


<LabelComp text={"Sog'ligingiz haqida ma'lumotlar? "} />
<TableComp5
  questionnaire={questionnaire}
  onAnswerChange={handleAnswerChange}
  onCommentChange={handleCommentChange}
  answerOptions={answerOptions}
/>

<LabelComp text={"Qayerda qachon va kim bo'lib ishlagansiz?. (Sizning rasmiy va norasmiy ish tajribangiz biz uchun muhim)"} />
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
  value={dasturlarniBilishDarajasi}
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