import { useState } from "react";
import TextInput from "../components/shared/TextInput"
import {makeautheticatedPOSTReq} from "../utils/serverhelpers"
const CreatePlaylistModal=({closeModal})=>{

    const[playListName,setplayListName]=useState("");
    const[playListThumbnail,setplayListThumbnail]=useState("");

    const createPLayList=async()=>{
        const response= await makeautheticatedPOSTReq("/playlist/create",{name:playListName,thumbnail:playListThumbnail,songs:[]})
        console.log(response)
        if(response._id){
            closeModal();
        }
    }

    return (
        <div className="absolute w-screen h-screen bg-app-black bg-opacity-50 flex justify-center items-center " onClick={closeModal}>

            <div className="bg-black w-1/3 rounded-md p-2 " onClick={(e)=>{e.stopPropagation()}}>
                <div className="text-white py-2 font-sm font-semibold">Create PlayList</div>
                <div> <TextInput label="Name" placeholder="PlayList Name" labelClassName={"text-white"} value={playListName} setValue={setplayListName}/>
                        <TextInput label="Thumbnail" placeholder="Thumbnail " className="py-3" labelClassName={"text-white"} value={playListThumbnail} setValue={setplayListThumbnail}/>
                        <div className="bg-white w-1/3 rounded flex font-semibold justify-center items-center cursor-pointer" onClick={createPLayList}> create</div>
                 </div>
            </div>
        </div>
    );
}
export default CreatePlaylistModal;