import { useEffect, useState } from "react";
import LoggedInContainer from "../containers/loggedInContainer";
import { makeautheticatedGETReq } from "../utils/serverhelpers";
import { Navigate, useNavigate } from "react-router-dom";

const Library=()=>{
    const [myPlayList,setMyPlayList]=useState([]);
    useEffect(()=>{
        const getData= async ()=>{
            const response = await makeautheticatedGETReq("/playlist/get/me")
            console.log(response.data);
            setMyPlayList(response.data);
        };
        getData()
    },[])
    return(
        <LoggedInContainer curractive={"Library"}>
            <div className="text-white text-xl font-semibold font-sm">My PLaylists</div>
            <div className="py-4 grid gap-5 grid-cols-5 ">
                {myPlayList.map(item=>{
                    return <Card title={item.name} imgurl={item.thumbnail} key={JSON.stringify(item) }playlistID={item._id}/>
                })}
            </div>
        </LoggedInContainer>
    );
}
const Card=({title,description,imgurl,playlistID})=>{
    const navigate=useNavigate();
    return ( 
        <div className="bg-black bg-opacity-40 rounded-lg p-4 space-y-5  cursor-pointer" onClick={()=>{navigate("/playlist/"+playlistID)}}>
            <div className="pb-4 pt-2">
                <img className="w-full h-40 rounded-md"
                    src={imgurl}
                    alt="label"
                />
            
            </div>
            <div className="text-white text-sm py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
}
export default Library
