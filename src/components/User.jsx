import DateComp from "./helper/DateComp"
import InputComp from "./helper/InputComp"
import LabelComp from "./helper/LabelComp"
import SelectComp from "./helper/SelectComp"

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
</div>
    </>
  )
}

export default User