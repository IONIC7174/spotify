const Password = ({label,placeholder,value,setValue})=>{
    return (
        <div className="main div flex flex-col space-y-3 w-full">
        <label className="font-semibold" for={label}>{label}</label>
        <input type="password"placeholder={placeholder} id={label}className="p-3 border border-black -600 border-solid rounded placeholder-gray-500" value={value} 
                onChange={(e)=>{setValue(e.target.value);}}></input>

        </div>
    );
};
export default Password;