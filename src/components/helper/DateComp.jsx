const DateComp = ({tsana,setChange}) => {
  return (
    <input 
    type="date" 
    value={tsana}
    onChange={(e) => setChange(e.target.value)}
    id="birthdate"
    className="w-40 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
  ></input>
  )
}

export default DateComp