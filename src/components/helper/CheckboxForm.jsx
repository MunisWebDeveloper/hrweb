import { useState } from "react";

export default function CheckboxExample({checked,onChange}) {

  return (
    <label className="flex items-center  gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-blue-600"
      />
    </label>
  );
}