const TextInput = ({ name, value, handleChange, type, labelText}) => {
  return (
    <div className="flex flex-col gap-4">
    <label htmlFor={name} className="capitalize text-base">{labelText || name}:</label>
    <input type={type} name={name} id={name} value={value} onChange={handleChange} className="bg-gray-200 p-2 rounded-md text-slate-950 outline-none w-[300px] mb-3"/>
    </div>
  )
}

export default TextInput