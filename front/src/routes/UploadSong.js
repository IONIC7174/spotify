import { Icon } from "@iconify/react/dist/iconify.js";
import IconText from "../components/shared/ico";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeautheticatedPOSTReq } from "../utils/serverhelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/loggedInContainer";






const UploadSong=()=>{
    const[name,setName]=useState("");
    const[thumbnail,setThumbnail]=useState("");
    const[playListURL,setplayListURL]=useState("");
    const[uploadedsongfilename,setuploadedsongfilename]=useState();
    const navigate=useNavigate();
    
    const uploadSong=async()=>{
        const data={name,thumbnail,track:playListURL};
        const response=await makeautheticatedPOSTReq("/song/create",data);
        if(response.err){
            alert("Could not create song");
            return;
        }
        else {
            alert("Sucess");
            navigate("/home");
        }
    }

    
 return(
    <LoggedInContainer>
        <div className="text-2xl font-semibold mb-5 text-white ">Upload Your Music</div>
                <div className="w-full flex space-x-5">
                        <div className="w-1/3 ">
                        <TextInput 
                            label={"Name of Song"} 
                            labelClassName={"text-white"}
                            placeholder={"Name of Song"}
                            value={name}
                            setValue={setName}
                        />
                        </div>
                        <div className="w-1/3">
                        <TextInput 
                            label={"Thumbnail"} 
                            labelClassName={"text-white"}
                            placeholder={"Thumbnail"}
                            value={thumbnail}
                            setValue={setThumbnail}
                            />
                        </div>   
                                      
                </div>
                

            <div className="py-5">
                {
                    uploadedsongfilename?
                    (<div className=" text-white  p-3 w-1/3">{uploadedsongfilename.substring(0,35)}...</div>):(
                        <CloudinaryUpload seturl={setplayListURL} setName={setuploadedsongfilename}/>  
                    )
                }
            </div>  
                <div className="bg-white w-1/6 rounded-full p-3 cursor-pointer mt-8 font-semibold flex item-center justify-center" onClick={uploadSong}>
                    Submit Song
                </div>
    </LoggedInContainer>
 );
}


export default UploadSong;