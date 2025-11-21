import DateComp from "./helper/DateComp"
import InputComp from "./helper/InputComp"
import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"
import ChildrenTable from "./helper/TableComp"
import TableComp2 from "./helper/TableComp2"
import TableComp3 from "./helper/TableComp3"
import UploadBox from "./helper/UploadComp"
import UploadingComp2 from "./helper/UploadingComp2"

const User = () => {
  return (
    <>
      <div className="container mx-auto h-[100%] p-5 bg-black"  style={{
        // backgroundImage: "url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
    <h1 className="text-white text-2xl font-bold size-20 w-[100%] text-center pt-10">Anketa to'ldirish</h1>
     
     <LabelComp text={"Ism"} />
    <InputComp/>

    <LabelComp text={"Familiya"} />
    <InputComp/>

    <LabelComp text={"Otasining ismi"} />
    <InputComp/>
    <div className="flex justify-between">
      <div>        
        <LabelComp text={"Otasining ismi"} />
        <DateComp />
      </div>
      <div>        
        <LabelComp text={"Jinsingiz"} />
    <SelectComp/>
      </div>
    </div>
        <LabelComp text={"Oilaviy holatingiz"} />
    <SelectComp/>
    <div className="flex justify-between">
        <LabelComp text={"Farzandlari"} />
      <div className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<ChildrenTable/>
<div className="flex justify-between items-center">
        <LabelComp text={"Oilaviy tarkibingiz"} />
      <div className="bg-blue-700 p-1 rounded-[10%] flex items-center justify-center w-10 h-5">
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<TableComp2/>
<LabelComp text={"Ma'lumotingiz"} />
<SelectComp className="mb-3" />
<LabelComp text={"Ta'lim muassasalari nomi va bitirgan yilingiz"} />
<TableComp3/>
<LabelComp text={"Hozirda universitet, litsey yoki kollej talabasimisiz?"} />
<SelectComp className="mb-3" />
<LabelComp text={"Qaysi tillarni bilasiz?"} />
<TableComp2/>
 <LabelComp text={"Bo'y va vazningiz (sm/kg)"} />
  <InputComp/>
  <LabelComp text={"Viloyat (Haqiqiy turar joy) *"} />
<SelectComp className="mb-3" />
  <LabelComp text={"Shaxar/Tuman (Haqiqiy turar joy)"} />
<SelectComp className="mb-3" />
 <LabelComp text={"Manzilingiz (Haqiqiy turar joy MFY, ko'cha)"} />
    <InputComp/>

    <LabelComp text={"Qaysi filialda ishlashni xohlaysiz? "} />
<SelectComp className="mb-3" />
<LabelComp text={"Qaysi lavozimlarda ishlashni xohlaysiz?"} />
<SelectComp className="mb-3" />
<LabelComp text={"Avval bizning kompaniyamizda ishlaganmisiz?"} />
<SelectComp className="mb-3" />
<LabelComp text={"O'zbekiston Respubilkasi fuqorosimisiz?"} />
<SelectComp className="mb-3" />
<LabelComp text={"Hozirda ish bilan ta'minlanganmisiz?"} />
<SelectComp className="mb-3" />
<LabelComp text={"MUNIS komponyasida ishlaydigan yaqin qarindoshingiz bormi?"} />
    <InputComp/>
    <LabelComp text={"Qaysi dasturlardan foydalana olasiz?"} />
<TableComp3/>
<LabelComp text={"Sog'ligingiz haqida ma'lumotlar? "} />
<TableComp3/>

<LabelComp text={"Qo'shimcha ma'lumotlar"} />
    <InputComp/>
    <LabelComp text={"Qayerda qachon va kim bo'lib ishlagansiz?. (Sizning rasmiy va norasmiy ish tajribangiz biz uchun muhim)"} />
<TableComp3/>
<LabelComp text={"Oxirgi ish joyida olgan ish xaqingiz? (so'm)"} />
    <InputComp/>
    <LabelComp text={"Qancha maosh xoxlaysiz? (so'm) "} />
    <InputComp/>
    <LabelComp text={"Shaxsiy avtomabilingiz bormi? "} />
<SelectComp className="mb-3" />
<LabelComp text={"Bo'sh ish o'rni haqida qayerdan bildingiz?"} />
<SelectComp className="mb-3" />
<LabelComp text={"Sudlanganmisiz?"} />
<SelectComp className="mb-3" />
 <LabelComp text={"Qo'shimcha telefon raqam"} />
    <InputComp/>
    <div className="text-white flex justify-center">Xatolok roy bersa bizga murojat qiling @Yordam</div>
    <UploadBox/>
    <LabelComp text={"Pasport turi"} />
<SelectComp className="mb-3" />
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
      <button className="text-white bg-sky-600 min-h-14 w-full rounded">Anketani yuborish</button>
    </div>
</div>
    </>
  )
}

export default User