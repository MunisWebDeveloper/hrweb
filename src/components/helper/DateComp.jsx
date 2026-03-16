const DateComp = ({ tsana, value, setChange }) => {
  const handleChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");

    let result = "";
    if (val.length <= 4) {
      result = val;                                                          // 1997
    } else if (val.length <= 6) {
      result = val.slice(0, 4) + "-" + val.slice(4);                        // 1997-01
    } else {
      result = val.slice(0, 4) + "-" + val.slice(4, 6) + "-" + val.slice(6, 8); // 1997-01-16
    }

    setChange(result);
  };

  return (
    <input
      type="text"
      value={tsana ?? value ?? ""}
      onChange={handleChange}
      placeholder="1997-01-16"
      maxLength={10}
      id="birthdate"
      className="w-40 px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
    />
  );
};

export default DateComp;