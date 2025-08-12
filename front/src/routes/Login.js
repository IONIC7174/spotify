import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import Password from "../components/shared/password";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import{useCookies} from "react-cookie";
import { makeunautheticatedPOSTReq } from "../utils/serverhelpers";

const LoginComponent=()=>{ 
    const[email,setEmail]    = useState("");
    const[password,setpassword]=useState("");
    const [cookie,setCookie]=useCookies(["token"]); 
    const Navigate=useNavigate();


    const Login=async()=>{
        const data={email,password};
       
       const response= await makeunautheticatedPOSTReq("/auth/login",data);
       if(response && !response.err){
        console.log(response);
        const date=new Date();
        date.setDate(date.getDate()+30);
        const token = response.token;
        setCookie("token",token,{path :"/",expires : date});
        alert("success");
        Navigate("/home");
       }else{
        alert("failure")
       }
    }







    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo w-full p-6 border-b border-solid border-gray-300 flex justify-center">
                <span className="text-green-500 text-lg ">MUSICO </span>

            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center flex-col">
            <div className="font-bold mb-10">To continue ,Login To Musico</div>
            <TextInput label="Email id or username" placeholder="Email id or username" className="my-5" value={email} setValue={setEmail}/>
            <Password label="password" placeholder="password"value={password} setValue={setpassword}/>
            <div className="w-full flex justify-end mt-8 ">
                <button className="bg-green-300  font-semibold p-3 px-10 rounded-full "
                onClick={(e)=>{
                        e.preventDefault();
                        Login();
                }}>LOG IN </button>
                
            </div>
            <div className=" w-full border border-solid border-gray-300 mt-5"></div>
            <div className="my-6 font-semibold text-lg ">
                Don't have an account ?
                </div>
            <div className="border border-gray-500 w-full text-gray-500 font-bold flex items-center justify-center rounded-full py-3">
                <Link to ="/signup">SIGN UP FOR MUSICO</Link>
                </div>
            
            </div>

            
        </div>
    );
};
export default LoginComponent;