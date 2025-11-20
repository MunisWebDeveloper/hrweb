import DateComp from "./helper/DateComp"
import InputComp from "./helper/InputComp"
import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"
import ChildrenTable from "./helper/TableComp"

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
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
  </svg>
</div>
    </div>
<ChildrenTable/>
</div>
    </>
  )
}

export default User