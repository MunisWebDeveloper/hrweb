import InputComp from "./helper/InputComp"
import LabelComp from "./helper/LabelComp"

const User = () => {
  return (
    <>
      <div className="container mx-auto h-96 bg-black"  style={{
        // backgroundImage: "url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
    <h1 className="text-white font-bold size-28 w-[100%] text-center pt-5">Anketa to'ldirish</h1>
     
     <LabelComp text={"Ism"}  />
    <InputComp/>

    <LabelComp text={"Familiya"} />
    <InputComp/>

    <LabelComp text={"Otasining ismi"} />
    <InputComp/>
             
            
</div>
    </>
  )
}

export default User