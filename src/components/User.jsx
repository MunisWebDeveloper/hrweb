import { useEffect, useState } from "react"
import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"
import UploadBox from "./helper/UploadComp"
import UploadingComp2 from "./helper/UploadingComp2"
import TableComp7 from "./helper/TableComp7"
import UserInfo from "./UserInfo"
import EducationInfo from "./EducationInfo"
import PersonalInfo from "./PersonalInfo"
import PersonalAddInfo from "./PersonalAddInfo"
import CheckboxExample from "./helper/CheckboxForm"
import { usePostUsersMutation, useGetRegionsQuery, useGetStreetQuery, useGetLavozimQuery,useGetFiliallsQuery,useGetSkillsQuery } from './api/UsersApi'
import AddModal from "./helper/AddModal"
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"
const User = ({ getLang }) => {
  const [fio, setFio] = useState("")
  const [tsana, setTsana] = useState("")
  const [jins, setJins] = useState("")
  const [oilaviyHolat, setOilaviyHolat] = useState("")
  const [farzand, setFarzand] = useState([])
  const [otarkib, setOtarkib] = useState([])
  const [malumoti, setMalumoti] = useState("")
  const [oqishqabul, setOqishqabul] = useState([])
  const [oqiyotganMalumoti, setOqiyotganMalumoti] = useState([])
  const [viloyat, setViloyat] = useState("")
  const [shahar, setShahar] = useState("")
  const [mfy, setMfy] = useState("")
  const [xoxlaydiganFilial, setXoxlaydiganFilial] = useState("")
  const [xoxlaydiganLavozim, setXoxlaydiganLavozim] = useState("")
  const [avvalIshlaganmi, setAvvalIshlaganmi] = useState("")
  const [fuqarolik, setFuqarolik] = useState("")
  const [ishJoyiBormi, setishJoyiBormi] = useState("")
  const [tanishiBormi, setTanishiBormi] = useState("")
  const [dasturlarniBilishDarajasi, setDasturlarniBilishDarajasi] = useState([])
  const [ishTajribasi, setIshTajribasi] = useState([])
  const [qoshimchaMalumot, setQoshimchaMalumot] = useState("")
  const [eskiIshHaqi, setEskiIshHaqi] = useState("")
  const [xoxlanayotganIshHaqi, setXoxlanayotganIshHaqi] = useState("")
  const [avtomobili, setAvtomobili] = useState("")
  const [malumotOlgani, setMalumotOlgani] = useState("")
  const [sudlanganmi, setSudlanganmi] = useState("")
  const [qoshimchaRaqam, setQoshimchaRaqam] = useState("")
  const [xizmatSafari, setXizmatSafari] = useState("")
  const [disabl, setDisabl] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [frontImage, setFrontImage] = useState(null)
  const [backImage, setBackImage] = useState(null)
  const [regionsmain, setRegionsmain] = useState()
  const [streetmain, setStreetmain] = useState([])
 const {t} = useTranslation()

  // API hooks
  const { data: regions = [], isLoading: regionsLoading } = useGetRegionsQuery()
  const { data: lavozim = [], isLoading: lavozimLoading } = useGetLavozimQuery()
  const { data: filials = [], isLoading: filialsLoading } = useGetFiliallsQuery()
  const { data: skills = [], isLoading: skillsLoading } = useGetSkillsQuery()
  const [questionnaire, setQuestionnaire] = useState([]);
  const { data: street = [], isLoading: streetLoading } = useGetStreetQuery(regionsmain, {
    skip: !regionsmain
  })
  const { lang, id } = useParams();
  // console.log(lang); // ru
    // console.log(id);   // 123
  const [Users] = usePostUsersMutation()
  // street yangilanganda streetmain ni set qilish
  useEffect(() => {
    if (street?.length > 0) {
      setStreetmain(street)
    }
  }, [street])
  useEffect(() => {
    getLang(lang)
  }, [])

  // Viloyat o'zgarganda shaharni reset qilish
  useEffect(() => {
    setShahar("")
    setStreetmain([])
  }, [viloyat])

  const handleViloyatChange = (selectedValue) => {
    setViloyat(selectedValue)
    const selectedRegion = regions.find(r => String(r.id) === String(selectedValue))
    setRegionsmain(selectedRegion?.id)
  }

  const handleShaharChange = (selectedValue) => {
    setShahar(selectedValue)
  }

  // Options
  const jinsOptions = [
    { value: "erkak", label: "Erkak" },
    { value: "ayol", label: "Ayol" },
  ]

  const oilaviyHolatOptions = [
    { value: "uylangan", label: "Uylangan" },
    { value: "bo'ydoq", label: "Bo'ydoq" },
    { value: "ajrashgan", label: "Ajrashgan" },
  ]

  const farzandOptions = [
    { value: "O'g'il", label: "O'g'il" },
    { value: "Qiz", label: "Qiz" },
  ]

  const otarkibOptions = [
    { value: "Otam", label: "Otam" },
    { value: "Onam", label: "Onam" },
    { value: "Turmush o'rtog'im", label: "Turmush o'rtog'im" },
    { value: "Akam", label: "Akam" },
    { value: "Opam", label: "Opam" },
    { value: "Ukam", label: "Ukam" },
    { value: "Singlim", label: "Singlim" },
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
    { value: "Yo'q", label: "Yo'q" },
  ]

  const tilBilishDarajasiOptions = [
    { value: "ozb", label: "O'zbek tili" },
    { value: "Toj", label: "Tojik tili" },
    { value: "Ing", label: "Ingliz tili" },
    { value: "rus", label: "Rus tili" },
    { value: "Boshqa", label: "Boshqa" },
  ]

  const tilBilishDarajasiFoyizOptions = [
    { value: "10", label: "10%" }, { value: "20", label: "20%" },
    { value: "30", label: "30%" }, { value: "40", label: "40%" },
    { value: "50", label: "50%" }, { value: "60", label: "60%" },
    { value: "70", label: "70%" }, { value: "80", label: "80%" },
    { value: "90", label: "90%" }, { value: "100", label: "100%" },
  ]

  const viloyatOptions = regions.map(r => ({
    value: String(r.id),
    label: r.name_uz
  }))

  const shaharOptions = streetmain.map(item => ({
    value: String(item.id),
    label: item.name_uz || item.name
  }))

 const xoxlaydiganFilialOptions = filials?.map(item => ({
  value: String(item.id),
  label: item.lang_uz
})) || []


 const xoxlaydiganLavozimOptions = lavozim?.map(item => ({
  value: String(item.id),
  label: item.title_uz
})) || []

  const avvalIshlaganmiOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" },
  ]

  const fuqarolikOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" },
  ]

  const ishJoyiBormiOptions = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" },
  ]

 const dasturlarniBilishDarajasiOptions = skills.map(item => ({
  value: item.name,
  label: item.name
}))

  const dasturlarniBilishDarajasiFoyizOptions = [
    { value: "10", label: "10%" }, { value: "20", label: "20%" },
    { value: "30", label: "30%" }, { value: "40", label: "40%" },
    { value: "50", label: "50%" }, { value: "60", label: "60%" },
    { value: "70", label: "70%" }, { value: "80", label: "80%" },
    { value: "90", label: "90%" }, { value: "100", label: "100%" },
  ]

  const avtomobiliOption = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" },
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
    { value: "Yo'q", label: "Yo'q" },
  ]

  const xizmatSafariOption = [
    { value: "Xa", label: "Xa" },
    { value: "Yo'q", label: "Yo'q" },
  ]

 useEffect(() => {
  setQuestionnaire([
    { id: 1, question: t("ogirinfo"), answer: "", comment: "" },
    { id: 2, question: t("yurakinfo"), answer: "", comment: "" },
    { id: 3, question: t("jarroxlikinfo"), answer: "", comment: "" },
    { id: 4, question: t("kozinfo"), answer: "", comment: "" },
    { id: 5, question: t("belinfo"), answer: "", comment: "" },
    { id: 6, question: t("birjoyinfo"), answer: "", comment: "" },
  ]);
}, [t]);

  const answerOptions = [
    { value: "ha", label: "Ha" },
    { value: "yoq", label: "Yo'q" },
  ]

  const handleAnswerChange = (id, value) => {
    setQuestionnaire(prev => prev.map(item => item.id === id ? { ...item, answer: value } : item))
  }

  const handleCommentChange = (id, comment) => {
    setQuestionnaire(prev => prev.map(item => item.id === id ? { ...item, comment } : item))
  }

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

  const addOqishqabul = () => {
    setOqishqabul(prev => [...prev, { id: Date.now(), startDate: "", endDate: "", schoolName: "", specialty: "" }])
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

  const addOqiyotganMalumoti = () => {
    setOqiyotganMalumoti(prev => [...prev, { id: Date.now(), language: "", langprotsent: "" }])
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

  const adddasturlarniBilishDarajasiMalumoti = () => {
    setDasturlarniBilishDarajasi(prev => [...prev, { id: Date.now(), program: "", progprotsent: "" }])
  }

  const handledasturlarniBilishDarajasiMalumoti = (id, value) => {
    setDasturlarniBilishDarajasi(prev => prev.map(d => d.id === id ? { ...d, program: value } : d))
  }

  const handledasturlarniBilishDarajasiLevelChange = (id, value) => {
    setDasturlarniBilishDarajasi(prev => prev.map(d => d.id === id ? { ...d, progprotsent: value } : d))
  }

  const handledasturlarniBilishDarajasiMalumotiDelete = (id) => {
    setDasturlarniBilishDarajasi(prev => prev.filter(d => d.id !== id))
  }

  const addWorkExperience = () => {
    setIshTajribasi(prev => [...prev, { id: Date.now(), startDate: "", endDate: "", workPlace: "", position: "" }])
  }

  const handleWorkDateChange = (id, field, date) => {
    setIshTajribasi(prev => prev.map(w => w.id === id ? { ...w, [field]: date } : w))
  }

  const handleWorkPlaceChange = (id, value) => {
    setIshTajribasi(prev => prev.map(w => w.id === id ? { ...w, workPlace: value } : w))
  }

  const handlePositionChange = (id, value) => {
    setIshTajribasi(prev => prev.map(w => w.id === id ? { ...w, position: value } : w))
  }

  const handleWorkDelete = (id) => {
    setIshTajribasi(prev => prev.filter(w => w.id !== id))
  }

  const toDate = (val) => (val && val.trim() !== "" ? val : null)

  const validate = () => {
    if (!fio.trim()) { alert("F.I.O ni kiriting!"); return false }
    if (!tsana) { alert("Tug'ilgan sanani kiriting!"); return false }
    if (!jins) { alert("Jinsni tanlang!"); return false }
    if (!oilaviyHolat) { alert("Oilaviy holatni tanlang!"); return false }
    if (!malumoti) { alert("Ma'lumotini tanlang!"); return false }
    if (!viloyat) { alert("Viloyatni tanlang!"); return false }
    if (!shahar) { alert("Shaharni tanlang!"); return false }
    if (!xoxlaydiganFilial) { alert("Filialni tanlang!"); return false }
    if (!xoxlaydiganLavozim) { alert("Lavozimni tanlang!"); return false }
    return true
  }

  const addUser = async () => {
    if (!validate()) return
    try {
      const obj_in = {
        is_active: true,
        tg_id: id,
        fullName: fio,
        birthdate: toDate(tsana),
        gender: jins,
        is_married: oilaviyHolat,
        degree: malumoti,
        is_study: oqiyotganMalumoti.length > 0,
        region_select: Number(viloyat) || 0,
        city_select: Number(shahar) || 0,
        street: mfy || null,
        branch_select_id: Number(xoxlaydiganFilial) || 0,
        lavozim_id: Number(xoxlaydiganLavozim) || 0,
        is_worker: avvalIshlaganmi === "Xa",
        is_citicenzs: fuqarolik === "Xa",
        current_work: ishJoyiBormi || null,
        relatives_in_munis: tanishiBormi || null,
        extra_information: qoshimchaMalumot || null,
        previous_wage: Number(eskiIshHaqi) || 0,
        current_wage: Number(xoxlanayotganIshHaqi) || 0,
        about_car: avtomobili || null,
        qayerdan_bilganiligi: malumotOlgani || null,
        is_sudlangan: sudlanganmi === "Xa",
        extra_phone_number: qoshimchaRaqam || null,
        is_outside: xizmatSafari === "Xa",
        passport_type: "Oddiy",
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
          question: q.question,
          answer: q.answer === "ha",
          description: q.comment || "",
        })),
      }

      const formData = new FormData()
      if (selectedImage) formData.append("private_picture", selectedImage)
      if (frontImage) formData.append("passport_picture", frontImage)
      if (backImage) formData.append("passport_picture_2", backImage)
      formData.append("obj_in", JSON.stringify(obj_in))

      const result = await Users(formData).unwrap()
      console.log("✅ Muvaffaqiyatli:", result)
      alert("Ma'lumotlar muvaffaqiyatli yuborildi!")
    } catch (err) {
      console.error("❌ Server xatosi:", err?.data || err)
      alert("Xatolik yuz berdi: " + (err?.data?.message || "Server bilan bog'lanib bo'lmadi"))
    }
  }

  return (
    <div className="container mx-auto h-[100%] p-5 bg-black">
      <h1 className="text-white text-2xl font-bold w-[100%] text-center pt-10">
        {t("malumot")}
      </h1>

      {regionsLoading && <div className="text-white text-center py-4">Viloyatlar yuklanmoqda...</div>}
      {lavozimLoading && <div className="text-white text-center py-2">Lavozimlar yuklanmoqda...</div>}
      {streetLoading && <div className="text-white text-center py-2">Shaharlar yuklanmoqda...</div>}
    {/* <AddModal isOpen={true} disabl={disabl} setDisabl={setDisabl} /> */}
      <UserInfo
        fio={fio} setFio={setFio}
        tsana={tsana} setTsana={setTsana}
        jinsOptions={jinsOptions} jins={jins} setJins={setJins}
        oilaviyHolatOptions={oilaviyHolatOptions} oilaviyHolat={oilaviyHolat} setOilaviyHolat={setOilaviyHolat}
        addFamilyMember={addFamilyMember}
        farzandOptions={farzandOptions} farzand={farzand}
        handleFarzandChange={handleFarzandChange}
        handleFarzandDateChange={handleFarzandDateChange}
        handleFarzandDelete={handleFarzandDelete}
        addMyFamilyMember={addMyFamilyMember}
        otarkibOptions={otarkibOptions} otarkib={otarkib}
        handleMyFarzandChange={handleMyFarzandChange}
        handleMyFamilyDateChange={handleMyFamilyDateChange}
        handleCommentChange={handleCommentChanges}
        handleMyFamilyDelete={handleMyFamilyDelete}
      />

      <EducationInfo
        malumotiOptions={malumotiOptions} malumoti={malumoti} setMalumoti={setMalumoti}
        addOqishqabul={addOqishqabul} oqishqabul={oqishqabul}
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

      <PersonalInfo
        viloyatOptions={viloyatOptions} viloyat={viloyat} setViloyat={handleViloyatChange}
        shaharOptions={shaharOptions} shahar={shahar} setShahar={handleShaharChange}
        mfy={mfy} setMfy={setMfy}
        xoxlaydiganFilialOptions={xoxlaydiganFilialOptions}
        xoxlaydiganFilial={xoxlaydiganFilial} setXoxlaydiganFilial={setXoxlaydiganFilial}
        xoxlaydiganLavozimOptions={xoxlaydiganLavozimOptions}
        xoxlaydiganLavozim={xoxlaydiganLavozim} setXoxlaydiganLavozim={setXoxlaydiganLavozim}
        avvalIshlaganmiOptions={avvalIshlaganmiOptions}
        avvalIshlaganmi={avvalIshlaganmi} setAvvalIshlaganmi={setAvvalIshlaganmi}
        fuqarolikOptions={fuqarolikOptions} fuqarolik={fuqarolik} setFuqarolik={setFuqarolik}
        ishJoyiBormiOptions={ishJoyiBormiOptions} ishJoyiBormi={ishJoyiBormi} setishJoyiBormi={setishJoyiBormi}
        tanishiBormi={tanishiBormi} setTanishiBormi={setTanishiBormi}
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
        qoshimchaMalumot={qoshimchaMalumot} setQoshimchaMalumot={setQoshimchaMalumot}
        addWorkExperience={addWorkExperience}
        ishTajribasi={ishTajribasi}
        handleWorkDateChange={handleWorkDateChange}
        handleWorkPlaceChange={handleWorkPlaceChange}
        handlePositionChange={handlePositionChange}
        handleWorkDelete={handleWorkDelete}
        eskiIshHaqi={eskiIshHaqi} setEskiIshHaqi={setEskiIshHaqi}
        xoxlanayotganIshHaqi={xoxlanayotganIshHaqi} setXoxlanayotganIshHaqi={setXoxlanayotganIshHaqi}
        SelectComp={SelectComp}
        avtomobiliOption={avtomobiliOption} avtomobili={avtomobili} setAvtomobili={setAvtomobili}
        malumotOlganiOption={malumotOlganiOption} malumotOlgani={malumotOlgani} setMalumotOlgani={setMalumotOlgani}
        sudlanganmiOption={sudlanganmiOption} sudlanganmi={sudlanganmi} setSudlanganmi={setSudlanganmi}
        xizmatSafariOption={xizmatSafariOption} xizmatSafari={xizmatSafari} setXizmatSafari={setXizmatSafari}
        qoshimchaRaqam={qoshimchaRaqam} setQoshimchaRaqam={setQoshimchaRaqam}
      />

      <UploadBox selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

      <LabelComp text={t("passportmalumoti")} />

      <UploadingComp2
        frontImage={frontImage} setFrontImage={setFrontImage}
        backImage={backImage} setBackImage={setBackImage}
      />

      <div className="text-white flex gap-3 m-3">
        <CheckboxExample checked={disabl} onChange={(e) => setDisabl(e.target.checked)} />
        <p>
          {t("rozilik")} *{" "}
          <a href="#" className="text-red-500">({t('shartrozilik')})</a>
        </p>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={addUser}
          disabled={!disabl}
          className={`text-white ${disabl ? "bg-sky-600" : "bg-gray-600"} min-h-14 w-full rounded`}
        >
          {t("buttonanketa")}
        </button>
      </div>
    </div>
  )
}

export default User