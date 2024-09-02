const HorizontailRadio=({ options, selectedValue, onChange })=>{
    return (
    <div className="flex items-center gap-4">
        {options.map((option, index) => (
            <label className="flex items-center gap-1" key={index}>
            <input
                type="radio"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={onChange}
                className="form-radio text-blue-600"
            />
            {option.label}
            </label>
        ))}
    </div>)
}
export default HorizontailRadio