import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import Password from "../components/shared/password";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import{useCookies} from "react-cookie";
import { makeunautheticatedPOSTReq } from "../utils/serverhelpers";


const SignupComponent=()=>{ 

    const [email,setEmail] = useState("");
    const [confirmemail,setconfirmEmail] = useState("");
    const [password,setpassword] = useState("");
    const [firstname,setfirstname] = useState("");
    const [lastname,setlastname] = useState("");
    const [username,setusername] = useState("");
    const[cookie,setCookie]= useCookies(["token"]);
    const Navigate = useNavigate();



    const signUp=async()=>{
        const data={email,password,username,firstname,lastname};
        if(email!==confirmemail){
            alert("Email and confirm Email fields must match please check");
            return;
        }
       const response= await makeunautheticatedPOSTReq("/auth/register",data);
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
                <Icon icon="logos:spotify"width="150"/>

            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center flex-col">
            <div className="font-bold mb-10 text-2xl">Sign up for free to start listening</div>
            <TextInput label="Email id " placeholder="Email id " className="my-5" value={email} setValue={setEmail}/>
            <TextInput label="Confirm email address" placeholder="Confirm email address" className="mb-5"value={confirmemail} setValue={setconfirmEmail}/>
            <Password label=" Create password" placeholder="Enter a strong password here"value={password} setValue={setpassword} />
            <div className="w-full flex justify-between item-center space-x-10">
                <TextInput label="First name" placeholder="Enter your first name" className="my-5" value={firstname} setValue={setfirstname}/>
                <TextInput label="Last name" placeholder="Enter your last name" className="my-5" value={lastname} setValue={setlastname}/>
            </div>
            <TextInput label="What should we call you ?" placeholder="Enter your unique username" className="my-5" value={username} setValue={setusername}/>
            
            <div className="w-full flex justify-center mt-8 ">
                <button className="bg-green-300  font-semibold p-3 px-10 rounded-full "
                        onClick={(e)=>{
                            e.preventDefault();
                            signUp();
                        }}>
                            SIGN UP 
                        </button>
                
            </div>
            <div className=" w-full border border-solid border-gray-300 mt-5"></div>
            <div className="my-6 font-semibold text-lg ">Already have an account ?</div>
            <div className="border border-gray-500 w-full text-gray-500 font-bold flex items-center justify-center rounded-full py-3">
                <Link to ="/login">LOG IN INSTEAD</Link>
                </div>
            
            </div>

            
        </div>
    );
};
export default SignupComponent;