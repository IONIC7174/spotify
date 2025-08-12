const TextInput = ({label,placeholder,className,value,setValue , labelClassName})=>{
    return (
        <div className={`main div flex flex-col space-y-3 w-full ${className}`}>
        <label className={`font-semibold ${labelClassName}`} for={label}>{label}</label>
        <input type="text"placeholder={placeholder} id={label}className="p-3 border border-black -600 border-solid rounded placeholder-gray-500"value={value} 
                onChange={(e)=>{setValue(e.target.value);}}>

        </input>

        </div>
    );
};
export default TextInput;