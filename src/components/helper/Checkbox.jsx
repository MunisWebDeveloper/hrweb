const [checked, setChecked] = useState(false);

<label className="flex items-center gap-2">
  <input
    type="checkbox"
    checked={checked}
    onChange={(e)=>setChecked(e.target.checked)}
    className="w-5 h-5 accent-blue-600"
  />
  Roziman
</label>