import { useState } from "react"
import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"
import UploadBox from "./helper/UploadComp"
import UploadingComp2 from "./helper/UploadingComp2"
import TableComp7 from "./helper/TableComp7"
<<<<<<< HEAD
import UserInfo from "./UserInfo"
import EducationInfo from "./EducationInfo"
import PersonalInfo from "./PersonalInfo"
import PersonalAddInfo from "./PersonalAddInfo"
import CheckboxExample from "./helper/CheckboxForm"
import { usePostUsersMutation } from './api/UsersApi'

const User = () => {
  const [fio, setFio]                         = useState("")
  const [tsana, setTsana]                     = useState("")
  const [jins, setJins]                       = useState("")
  const [oilaviyHolat, setOilaviyHolat]       = useState("")
  const [farzand, setFarzand]                 = useState([])
  const [otarkib, setOtarkib]                 = useState([])
  const [malumoti, setMalumoti]               = useState("")
  const [oqishqabul, setOqishqabul]           = useState([])
  const [oqiyotganMalumoti, setOqiyotganMalumoti] = useState([])
  const [viloyat, setViloyat]                 = useState("")
  const [shahar, setShahar]                   = useState("")
  const [mfy, setMfy]                         = useState("")
  const [xoxlaydiganFilial, setXoxlaydiganFilial]   = useState("")
  const [xoxlaydiganLavozim, setXoxlaydiganLavozim] = useState("")
  const [avvalIshlaganmi, setAvvalIshlaganmi] = useState("")
  const [fuqarolik, setFuqarolik]             = useState("")
  const [ishJoyiBormi, setishJoyiBormi]       = useState("")
  const [tanishiBormi, setTanishiBormi]       = useState("")
  const [dasturlarniBilishDarajasi, setDasturlarniBilishDarajasi] = useState([])
  const [ishTajribasi, setIshTajribasi]       = useState([])
  const [qoshimchaMalumot, setQoshimchaMalumot] = useState("")
  const [eskiIshHaqi, setEskiIshHaqi]         = useState("")
  const [xoxlanayotganIshHaqi, setXoxlanayotganIshHaqi] = useState("")
  const [avtomobili, setAvtomobili]           = useState("")
  const [malumotOlgani, setMalumotOlgani]     = useState("")
  const [sudlanganmi, setSudlanganmi]         = useState("")
  const [qoshimchaRaqam, setQoshimchaRaqam]   = useState("")
  const [xizmatSafari, setXizmatSafari]       = useState("")
  const [disabl, setDisabl]                   = useState(false)
  const [selectedImage, setSelectedImage]     = useState(null)
  const [frontImage, setFrontImage]           = useState(null)
  const [backImage, setBackImage]             = useState(null)

  const [Users] = usePostUsersMutation()

  // ── Options ────────────────────────────────────────────────────────────────
=======
import FemelyTable from "./helper/FemelyTable"
import UploadingComp3 from "./helper/UploadingComp3"

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
  const [qoshimchaMalumot,setQoshimchaMalumot] = useState("")
  const [eskiIshHaqi,setEskiIshHaqi] = useState("")
  const [xoxlanayotganIshHaqi,setXoxlanayotganIshHaqi] = useState("")
  const [avtomobili,setAvtomobili] = useState("")
  const [malumotOlgani,setMalumotOlgani] = useState("")
  const [sudlanganmi,setSudlanganmi] = useState("")
  const [qoshimchaRaqam,setQoshimchaRaqam] = useState("")
  const [passportTuri,setPassportTuri] = useState(true)
>>>>>>> 997f115acbef17978a32625d2b7ff7be4aec4a15
  const jinsOptions = [
    { value: "erkak", label: "Erkak" },
    { value: "ayol",  label: "Ayol"  },
  ]
  const [checkbox , setCheckbox] = useState(false)
  const oilaviyHolatOptions = [
    { value: "uylangan",  label: "Uylangan"  },
    { value: "bo'ydoq",   label: "Bo'ydoq"   },
    { value: "ajrashgan", label: "Ajrashgan" },
  ]
  const farzandOptions = [
    { value: "O'g'il", label: "O'g'il" },
    { value: "Qiz",    label: "Qiz"    },
  ]
  const otarkibOptions = [
    { value: "Otam",              label: "Otam"              },
    { value: "Onam",              label: "Onam"              },
    { value: "Turmush o'rtog'im", label: "Turmush o'rtog'im" },
    { value: "Akam",              label: "Akam"              },
    { value: "Opam",              label: "Opam"              },
    { value: "Ukam",              label: "Ukam"              },
    { value: "Singlim",           label: "Singlim"           },
    { value: "O'g'lim",           label: "O'g'lim"           },
    { value: "Qizim",             label: "Qizim"             },
    { value: "Qayni otam",        label: "Qayni otam"        },
    { value: "Qayni onam",        label: "Qayni onam"        },
    { value: "Qayni akam",        label: "Qayni akam"        },
    { value: "Qayni opam",        label: "Qayni opam"        },
    { value: "Qayni ukam",        label: "Qayni ukam"        },
    { value: "Qayni singilim",    label: "Qayni singilim"    },
  ]
  const malumotiOptions = [
    { value: "Maktab",   label: "Maktab"   },
    { value: "Koledj",   label: "Koledj"   },
    { value: "Texnikum", label: "Texnikum" },
    { value: "Bakalavr", label: "Bakalavr" },
    { value: "Magistr",  label: "Magistr"  },
  ]
  const oqiyotganMalumotiOptions = [
    { value: "Xa",   label: "Xa"   },
    { value: "Yo'q", label: "Yo'q" },
  ]
  const tilBilishDarajasiOptions = [
    { value: "ozb",        label: "O'zbek tili"        },
    { value: "Toj",      label: "Tojik tili"      },
    { value: "Ing",     label: "Ingliz tili"     },
    { value: "rus",    label: "Rus tili"    },
    { value: "Boshqa",     label: "Boshqa"     },
  ]
  const tilBilishDarajasiFoyizOptions = [
    { value: "10",  label: "10%"  },
    { value: "20",  label: "20%"  },
    { value: "30",  label: "30%"  },
    { value: "40",  label: "40%"  },
    { value: "50",  label: "50%"  },
    { value: "60",  label: "60%"  },
    { value: "70",  label: "70%"  },
    { value: "80",  label: "80%"  },
    { value: "90",  label: "90%"  },
    { value: "100", label: "100%" },
  ]
  const viloyatOptions = [
    { value: "1", label: "Farg'ona" },
    { value: "2", label: "Andijon"  },
    { value: "3", label: "Namangan" },
    { value: "4", label: "Toshkent" },
  ]
  const shaharOptions = [
    { value: "1", label: "Quvasoy shahar" },
    { value: "2", label: "Quva tumani"    },
    { value: "3", label: "Oltariq"        },
    { value: "4", label: "Marg'ilon"      },
  ]
  const xoxlaydiganFilialOptions = [
    { value: "1", label: "Farg'ona" },
    { value: "2", label: "Andijon"  },
    { value: "3", label: "Namangan" },
    { value: "4", label: "Toshkent" },
  ]
  const xoxlaydiganLavozimOptions = [
    { value: "1", label: "Dastavchik"           },
    { value: "2", label: "Oshpaz"               },
    { value: "3", label: "Bogbon"               },
    { value: "4", label: "Shartnoma mutaxasisi" },
    { value: "5", label: "Mebel yigish ustasi"  },
  ]
  const avvalIshlaganmiOptions = [
    { value: "Xa",   label: "Xa"   },
    { value: "Yo'q", label: "Yo'q" },
  ]
  const fuqarolikOptions = [
    { value: "Xa",   label: "Xa"   },
    { value: "Yo'q", label: "Yo'q" },
  ]
  const ishJoyiBormiOptions = [
    { value: "Xa",   label: "Xa"   },
    { value: "Yo'q", label: "Yo'q" },
  ]
  const dasturlarniBilishDarajasiOptions = [
    { value: "Excel",         label: "Excel"         },
    { value: "Word",          label: "Word"          },
    { value: "PowerPoint",    label: "PowerPoint"    },
    { value: "Google Chrome", label: "Google Chrome" },
    { value: "Instagram",     label: "Instagram"     },
  ]
  const dasturlarniBilishDarajasiFoyizOptions = [
<<<<<<< HEAD
    { value: "10",  label: "10%"  },
    { value: "20",  label: "20%"  },
    { value: "30",  label: "30%"  },
    { value: "40",  label: "40%"  },
    { value: "50",  label: "50%"  },
    { value: "60",  label: "60%"  },
    { value: "70",  label: "70%"  },
    { value: "80",  label: "80%"  },
    { value: "90",  label: "90%"  },
    { value: "100", label: "100%" },
=======
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

  const SavolJavobOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" }
>>>>>>> 997f115acbef17978a32625d2b7ff7be4aec4a15
  ]
  const avtomobiliOption = [
    { value: "Xa",   label: "Xa"   },
    { value: "Yo'q", label: "Yo'q" },
  ]
  const malumotOlganiOption = [
    { value: "Flayer",                    label: "Flayer"                     },
    { value: "Banner(ko'cha reklamalari)", label: "Banner(ko'cha reklamalari)" },
    { value: "hh.uz",                     label: "hh.uz"                      },
    { value: "Tanishlar/Dostlar",         label: "Tanishlar/Dostlar"          },
    { value: "olx.uz",                    label: "olx.uz"                     },
    { value: "rabota.uz",                 label: "rabota.uz"                  },
  ]
  const sudlanganmiOption = [
    { value: "Xa",   label: "Xa"   },
    { value: "Yo'q", label: "Yo'q" },
  ]
<<<<<<< HEAD
  const xizmatSafariOption = [
    { value: "Xa",   label: "Xa"   },
    { value: "Yo'q", label: "Yo'q" },
  ]
=======
  const passportTuriOption = [
  { label: "Id karta", value: "true" },
  { label: "Passport", value: "false" }
]
>>>>>>> 997f115acbef17978a32625d2b7ff7be4aec4a15

  // ── Savol-javoblar ─────────────────────────────────────────────────────────
  const [questionnaire, setQuestionnaire] = useState([
    { id: 1, question: "Og'ir narsalar ko'tara olasizmi?",              answer: "", comment: "" },
    { id: 2, question: "Yuragingizdan shikoyatingiz bormi?",            answer: "", comment: "" },
    { id: 3, question: "Og'ir jarroxlik amaliyotini o'taganmisiz",      answer: "", comment: "" },
    { id: 4, question: "Ko'zingizdan shikoyatingiz bormi?",             answer: "", comment: "" },
    { id: 5, question: "Bel og'rig'idan shikoyatingiz bormi?",          answer: "", comment: "" },
    { id: 6, question: "Bir joyda turib yoki o'tirib ishlay olasizmi?", answer: "", comment: "" },
  ])
  const answerOptions = [
    { value: "ha",  label: "Ha"   },
    { value: "yoq", label: "Yo'q" },
  ]
  const handleAnswerChange = (id, value) => {
    setQuestionnaire(prev =>
      prev.map(item => item.id === id ? { ...item, answer: value } : item)
    )
  }
  const handleCommentChange = (id, comment) => {
    setQuestionnaire(prev =>
      prev.map(item => item.id === id ? { ...item, comment } : item)
    )
  }

  // ── Farzand ────────────────────────────────────────────────────────────────
  const addFamilyMember = () => {
    setFarzand(prev => [...prev, { id: Date.now(), type: "", birthDate: "" }])
  }
  const handleFarzandChange = (id, value) => {
    setFarzand(prev => prev.map(m => m.id === id ? { ...m, type: value } : m))
  }
  const handleFarzandDateChange = (id, date) => {
    setFarzand(prev => prev.map(m => m.id === id ? { ...m, birthDate: date } : m))
  }
  const handleFarzandDelete = (id) => {
    setFarzand(prev => prev.filter(m => m.id !== id))
  }

  // ── Oila tarkibi ───────────────────────────────────────────────────────────
  const addMyFamilyMember = () => {
    setOtarkib(prev => [...prev, { id: Date.now(), type: "", birthDate: "", comment: "" }])
  }
  const handleMyFarzandChange = (id, value) => {
    setOtarkib(prev => prev.map(m => m.id === id ? { ...m, type: value } : m))
  }
  const handleMyFamilyDateChange = (id, date) => {
    setOtarkib(prev => prev.map(m => m.id === id ? { ...m, birthDate: date } : m))
  }
  const handleCommentChanges = (id, comment) => {
    setOtarkib(prev => prev.map(m => m.id === id ? { ...m, comment } : m))
  }
  const handleMyFamilyDelete = (id) => {
    setOtarkib(prev => prev.filter(m => m.id !== id))
  }

  // ── Ta'lim ─────────────────────────────────────────────────────────────────
  const addOqishqabul = () => {
    setOqishqabul(prev => [
      ...prev,
      { id: Date.now(), startDate: "", endDate: "", schoolName: "", specialty: "" },
    ])
  }
  const handleEducationStartDateChange = (id, date) => {
    setOqishqabul(prev => prev.map(e => e.id === id ? { ...e, startDate: date } : e))
  }
  const handleEducationEndDateChange = (id, date) => {
    setOqishqabul(prev => prev.map(e => e.id === id ? { ...e, endDate: date } : e))
  }
  const handleEducationNameChange = (id, name) => {
    setOqishqabul(prev => prev.map(e => e.id === id ? { ...e, schoolName: name } : e))
  }
  const handleEducationSpecialtyChange = (id, specialty) => {
    setOqishqabul(prev => prev.map(e => e.id === id ? { ...e, specialty } : e))
  }
  const handleEducationDelete = (id) => {
    setOqishqabul(prev => prev.filter(e => e.id !== id))
  }

  // ── Tillar ─────────────────────────────────────────────────────────────────
  const addOqiyotganMalumoti = () => {
    setOqiyotganMalumoti(prev => [
      ...prev,
      { id: Date.now(), language: "", langprotsent: "" },
    ])
  }
  const handleOqiyotganMalumoti = (id, value) => {
    setOqiyotganMalumoti(prev => prev.map(l => l.id === id ? { ...l, language: value } : l))
  }
  const handleOqiyotganMalumotiLevelChange = (id, value) => {
    setOqiyotganMalumoti(prev => prev.map(l => l.id === id ? { ...l, langprotsent: value } : l))
  }
  const handleOqiyotganMalumotiDelete = (id) => {
    setOqiyotganMalumoti(prev => prev.filter(l => l.id !== id))
  }

  // ── Dasturlar ──────────────────────────────────────────────────────────────
  const adddasturlarniBilishDarajasiMalumoti = () => {
    setDasturlarniBilishDarajasi(prev => [
      ...prev,
      { id: Date.now(), program: "", progprotsent: "" },
    ])
  }
  const handledasturlarniBilishDarajasiMalumoti = (id, value) => {
    setDasturlarniBilishDarajasi(prev =>
      prev.map(d => d.id === id ? { ...d, program: value } : d)
    )
  }
  const handledasturlarniBilishDarajasiLevelChange = (id, value) => {
    setDasturlarniBilishDarajasi(prev =>
      prev.map(d => d.id === id ? { ...d, progprotsent: value } : d)
    )
  }
  const handledasturlarniBilishDarajasiMalumotiDelete = (id) => {
    setDasturlarniBilishDarajasi(prev => prev.filter(d => d.id !== id))
  }

  // ── Ish tajribasi ──────────────────────────────────────────────────────────
  const addWorkExperience = () => {
    setIshTajribasi(prev => [
      ...prev,
      { id: Date.now(), startDate: "", endDate: "", workPlace: "", position: "" },
    ])
  }
  const handleWorkDateChange = (id, field, date) => {
    setIshTajribasi(prev =>
      prev.map(w => w.id === id ? { ...w, [field]: date } : w)
    )
  }
  const handleWorkPlaceChange = (id, value) => {
    setIshTajribasi(prev =>
      prev.map(w => w.id === id ? { ...w, workPlace: value } : w)
    )
  }
  const handlePositionChange = (id, value) => {
    setIshTajribasi(prev =>
      prev.map(w => w.id === id ? { ...w, position: value } : w)
    )
  }
  const handleWorkDelete = (id) => {
    setIshTajribasi(prev => prev.filter(w => w.id !== id))
  }

  // ── Sana helperi ──────────────────────────────────────────────────────────
  const toDate = (val) => (val && val.trim() !== "" ? val : null)

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = () => {
    if (!fio.trim())         { alert("F.I.O ni kiriting!");         return false }
    if (!tsana)              { alert("Tug'ilgan sanani kiriting!"); return false }
    if (!jins)               { alert("Jinsni tanlang!");            return false }
    if (!oilaviyHolat)       { alert("Oilaviy holatni tanlang!");  return false }
    if (!malumoti)           { alert("Ma'lumotini tanlang!");       return false }
    if (!viloyat)            { alert("Viloyatni tanlang!");         return false }
    if (!shahar)             { alert("Shaharni tanlang!");          return false }
    if (!xoxlaydiganFilial)  { alert("Filialni tanlang!");          return false }
    if (!xoxlaydiganLavozim) { alert("Lavozimni tanlang!");         return false }
    return true
  }

  // ── Backend ga yuborish ────────────────────────────────────────────────────
  const addUser = async () => {
    if (!validate()) return

    try {
      const obj_in = {
        is_active:          true,
        tg_id:              0,
        fullName:           fio,
        birthdate:          toDate(tsana),
        gender:             jins,
        is_married:         oilaviyHolat,
        degree:             malumoti,
        is_study:           oqiyotganMalumoti.length > 0,
        region_select:      Number(viloyat)      || 0,
        city_select:        Number(shahar)       || 0,
        street:             mfy                  || null,
        branch_select_id:   Number(xoxlaydiganFilial)  || 0,
        lavozim_id:         Number(xoxlaydiganLavozim) || 0,
        is_worker:          avvalIshlaganmi === "Xa",
        is_citicenzs:       fuqarolik === "Xa",
        current_work:       ishJoyiBormi         || null,
        relatives_in_munis: tanishiBormi         || null,
        extra_information:  qoshimchaMalumot     || null,
        previous_wage:      Number(eskiIshHaqi)          || 0,
        current_wage:       Number(xoxlanayotganIshHaqi) || 0,
        about_car:          avtomobili           || null,
        qayerdan_bilganiligi: malumotOlgani      || null,
        is_sudlangan:       sudlanganmi === "Xa",
        extra_phone_number: qoshimchaRaqam       || null,
        is_outside:         xizmatSafari === "Xa",
        passport_type:      "Oddiy",

        childrens: farzand
          .filter(f => f.type && f.birthDate)
          .map(f => ({ gender: f.type, birthdate: toDate(f.birthDate) })),

        family_members: otarkib
          .filter(o => o.type && o.birthDate)
          .map(o => ({ relatives: o.type, birthdate: toDate(o.birthDate), comment: o.comment || "" })),

        degree_information: oqishqabul
          .filter(o => o.startDate && o.endDate)
          .map(o => ({ entrance: toDate(o.startDate), graduated: toDate(o.endDate), comment: o.schoolName || "", profecion: o.specialty || "" })),

        languages: oqiyotganMalumoti
          .filter(l => l.language)
          .map(l => ({ lang: l.language, level: l.langprotsent || "0%" })),

        skills: dasturlarniBilishDarajasi
          .filter(d => d.program)
          .map(d => ({ name: d.program, level: Number(d.progprotsent) || 0 })),

        last_work_place: ishTajribasi
          .filter(w => w.workPlace || w.position)
          .map(w => ({ start: toDate(w.startDate), end: toDate(w.endDate), place: w.workPlace || "", profession: w.position || "" })),

        healths: questionnaire.map(q => ({
          question: q.question, answer: q.answer === "ha", description: q.comment || "",
        })),
      }
      // ── FormData ─────────────────────────────────────────────
      const formData = new FormData()

      if (selectedImage) formData.append("private_picture",   selectedImage)
      if (frontImage)    formData.append("passport_picture",   frontImage)
      if (backImage)     formData.append("passport_picture_2", backImage)
      formData.append("obj_in", JSON.stringify(obj_in))
      console.log("Yuborilayotgan obj_in:", obj_in)
      const result = await Users(formData).unwrap()
      console.log("✅ Muvaffaqiyatli:", result)
    } catch (err) {
      console.error("❌ Server xatosi:", err?.data || err)
    }
  }
  return (
    <>
<<<<<<< HEAD
      <div
        className="container mx-auto h-[100%] p-5 bg-black"
        style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
        <h1 className="text-white text-2xl font-bold size-20 w-[100%] text-center pt-10">
          Anketa to'ldirish
        </h1>
        <UserInfo
          fio={fio}
          setFio={setFio}
          tsana={tsana}
          setTsana={setTsana}
          jinsOptions={jinsOptions}
          jins={jins}
          setJins={setJins}
          oilaviyHolatOptions={oilaviyHolatOptions}
          oilaviyHolat={oilaviyHolat}
          setOilaviyHolat={setOilaviyHolat}
          addFamilyMember={addFamilyMember}
          farzandOptions={farzandOptions}
          farzand={farzand}
          handleFarzandChange={handleFarzandChange}
          handleFarzandDateChange={handleFarzandDateChange}
          handleFarzandDelete={handleFarzandDelete}
          addMyFamilyMember={addMyFamilyMember}
          otarkibOptions={otarkibOptions}
          otarkib={otarkib}
          handleMyFarzandChange={handleMyFarzandChange}
          handleMyFamilyDateChange={handleMyFamilyDateChange}
          handleCommentChange={handleCommentChanges}
          handleMyFamilyDelete={handleMyFamilyDelete}
=======
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
          <div className="flex flex-col">        
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
        
        <LabelComp text={"Oilaviy xolatingiz"} />
        <SelectComp 
          options={oilaviyHolatOptions}
          value={oilaviyHolat}
          onChange={setOilaviyHolat} 
          placeholder="Oilaviy xolatingiz"
>>>>>>> 997f115acbef17978a32625d2b7ff7be4aec4a15
        />

        <EducationInfo
          malumotiOptions={malumotiOptions}
          malumoti={malumoti}
          setMalumoti={setMalumoti}
          addOqishqabul={addOqishqabul}
          oqishqabul={oqishqabul}
          handleEducationStartDateChange={handleEducationStartDateChange}
          handleEducationEndDateChange={handleEducationEndDateChange}
          handleEducationNameChange={handleEducationNameChange}
          handleEducationSpecialtyChange={handleEducationSpecialtyChange}
          handleEducationDelete={handleEducationDelete}
          oqiyotganMalumotiOptions={oqiyotganMalumotiOptions}
          addOqiyotganMalumoti={addOqiyotganMalumoti}
          oqiyotganMalumoti={oqiyotganMalumoti}
          handleOqiyotganMalumoti={handleOqiyotganMalumoti}
          handleOqiyotganMalumotiLevelChange={handleOqiyotganMalumotiLevelChange}
          handleOqiyotganMalumotiDelete={handleOqiyotganMalumotiDelete}
          tilBilishDarajasiOptions={tilBilishDarajasiOptions}
          tilBilishDarajasiFoyizOptions={tilBilishDarajasiFoyizOptions}
        />
<<<<<<< HEAD
=======
<div className="flex justify-between items-center">
        <LabelComp text={"Oilaviy tarkibingiz"} />
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
>>>>>>> 997f115acbef17978a32625d2b7ff7be4aec4a15

        <PersonalInfo
          xizmatSafari={xizmatSafari}
          setXizmatSafari={setXizmatSafari}
          xizmatSafariOption={xizmatSafariOption}
          viloyatOptions={viloyatOptions}
          viloyat={viloyat}
          setViloyat={setViloyat}
          shaharOptions={shaharOptions}
          shahar={shahar}
          setShahar={setShahar}
          mfy={mfy}
          setMfy={setMfy}
          xoxlaydiganFilialOptions={xoxlaydiganFilialOptions}
          xoxlaydiganFilial={xoxlaydiganFilial}
          setXoxlaydiganFilial={setXoxlaydiganFilial}
          xoxlaydiganLavozimOptions={xoxlaydiganLavozimOptions}
          xoxlaydiganLavozim={xoxlaydiganLavozim}
          setXoxlaydiganLavozim={setXoxlaydiganLavozim}
          avvalIshlaganmiOptions={avvalIshlaganmiOptions}
          avvalIshlaganmi={avvalIshlaganmi}
          setAvvalIshlaganmi={setAvvalIshlaganmi}
          fuqarolikOptions={fuqarolikOptions}
          fuqarolik={fuqarolik}
          setFuqarolik={setFuqarolik}
          ishJoyiBormiOptions={ishJoyiBormiOptions}
          ishJoyiBormi={ishJoyiBormi}
          setishJoyiBormi={setishJoyiBormi}
          tanishiBormi={tanishiBormi}
          setTanishiBormi={setTanishiBormi}
          adddasturlarniBilishDarajasiMalumoti={adddasturlarniBilishDarajasiMalumoti}
          TableComp7={TableComp7}
          dasturlarniBilishDarajasi={dasturlarniBilishDarajasi}
          handledasturlarniBilishDarajasiMalumoti={handledasturlarniBilishDarajasiMalumoti}
          handledasturlarniBilishDarajasiLevelChange={handledasturlarniBilishDarajasiLevelChange}
          handledasturlarniBilishDarajasiMalumotiDelete={handledasturlarniBilishDarajasiMalumotiDelete}
          dasturlarniBilishDarajasiOptions={dasturlarniBilishDarajasiOptions}
          dasturlarniBilishDarajasiFoyizOptions={dasturlarniBilishDarajasiFoyizOptions}
        />

        <PersonalAddInfo
          questionnaire={questionnaire}
          handleAnswerChange={handleAnswerChange}
          onCommentChange={handleCommentChange}
          handleCommentChange={handleCommentChange}
          answerOptions={answerOptions}
          qoshimchaMalumot={qoshimchaMalumot}
          setQoshimchaMalumot={setQoshimchaMalumot}
          addWorkExperience={addWorkExperience}
          ishTajribasi={ishTajribasi}
          handleWorkDateChange={handleWorkDateChange}
          handleWorkPlaceChange={handleWorkPlaceChange}
          handlePositionChange={handlePositionChange}
          handleWorkDelete={handleWorkDelete}
          eskiIshHaqi={eskiIshHaqi}
          setEskiIshHaqi={setEskiIshHaqi}
          xoxlanayotganIshHaqi={xoxlanayotganIshHaqi}
          setXoxlanayotganIshHaqi={setXoxlanayotganIshHaqi}
          SelectComp={SelectComp}
          avtomobiliOption={avtomobiliOption}
          avtomobili={avtomobili}
          setAvtomobili={setAvtomobili}
          malumotOlganiOption={malumotOlganiOption}
          malumotOlgani={malumotOlgani}
          setMalumotOlgani={setMalumotOlgani}
          sudlanganmiOption={sudlanganmiOption}
          sudlanganmi={sudlanganmi}
          setSudlanganmi={setSudlanganmi}
          qoshimchaRaqam={qoshimchaRaqam}
          setQoshimchaRaqam={setQoshimchaRaqam}
        />

        <UploadBox
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <LabelComp text={"Passport ma'lumotlarini kiriting"} />

        <UploadingComp2
          frontImage={frontImage}
          setFrontImage={setFrontImage}
          backImage={backImage}
          setBackImage={setBackImage}
        />

        <div className="text-white flex gap-3 m-3">
          <CheckboxExample
            checked={disabl}
            onChange={(e) => setDisabl(e.target.checked)}
          />
          <p>
            Roziman *{" "}
            <a href="" className="text-red-500">
              (Rozilik shartlari bilan tanishish)
            </a>
          </p>
        </div>

<<<<<<< HEAD
        <div className="w-full flex justify-center">
          <button
            onClick={addUser}
            disabled={!disabl}
            className={`text-white ${disabl ? "bg-sky-600" : "bg-gray-600"} min-h-14 w-full rounded`}
          >
            Anketani yuborish
          </button>
        </div>
      </div>
=======
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

<LabelComp text={"Qo'shimcha m'lumotlar"} />
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

{passportTuri ? 
<UploadingComp2 />
:
<UploadingComp3 />
}
    <div className="text-white flex gap-3 p-2">
      <input
    type="checkbox"
    checked={checkbox}
    onChange={(e)=>setCheckbox(e.target.checked)}
    className="w-5 h-5 accent-blue-600"
  />
      <p>
Roziman * <a href="" className="text-red-500">(Rozilik shartlari bilan tanishish)</a></p>
    </div>
    <div className="w-full flex justify-center">
      <button onClick={ConsoleUser} disabled={!checkbox} className={`text-white ${checkbox ? 'bg-sky-600' : 'bg-slate-600'} min-h-14 w-full rounded`}>
        {checkbox ?
        'Anketani yuborish'
        :
        'Rozilik bildiring'
        }
      </button>
    </div>
</div>
>>>>>>> 997f115acbef17978a32625d2b7ff7be4aec4a15
    </>
  )
}

export default User