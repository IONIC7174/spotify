import { Icon } from "@iconify/react/dist/iconify.js";
import IconText from "../components/shared/ico";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeautheticatedPOSTReq } from "../utils/serverhelpers";
import { useNavigate } from "react-router-dom";






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
    <div className="h-full w-full flex">{/* whole page */}
        <div className="h-full w-1/5 bg-black">{/* sidebar */}
            <div className="p-6">
                <Icon icon="logos:spotify"width="125"/>
            </div>
            <div className="py-2 pb-8">
                <IconText iconName={"material-symbols:home"} displayText={"Home"} active={true}/>
                <IconText iconName={"material-symbols:search"} displayText={"search"}/>
                <IconText iconName={"icomoon-free:books"} displayText={"Library"}/>
                <IconText iconName={"material-symbols:library-music"} displayText={"My Music"}/>
                
            </div>
            <div>
                <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"}/>
                <IconText iconName={"mdi:hearts"} displayText={"Liked Songs"}/>
            </div>
        </div>
        <div className="h-full w-4/5 bg-app-black  overflow-auto">{/*main page + nav bar */}
            <div className="navbar h-1/11 w-full bg-black bg-opacity-40 flex items-end "> 
                <div className="w-1/2"></div>
                    <div className="w-1/2 h-full flex items-center justify-end ">
                        <div className="w-2/3 h-full flex justify-around items-center">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Download"}/>
                            <div className="h-1/2 border-r "></div>
                        </div>
                        <div className="w-1/3 h-full flex justify-around items-center">
                            <TextWithHover displayText={"Upload Song"}/>
                            <div className="px-3 h-10 w-10 bg-white flex items-center justify-center rounded-full font-semibold cursor-pointer">KM</div>
                        </div>
                    </div>
                
            </div>
            <div className="content p-8 overflow-auto">{/*upload area*/}
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
            </div>

        </div>
    </div>
 );
}


export default UploadSong;