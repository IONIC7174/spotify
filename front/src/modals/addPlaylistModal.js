import { useEffect,useState } from "react";
import { makeautheticatedGETReq } from "../utils/serverhelpers";
const AddtoPlayListModal=({closeModal,addSongtoplaylist})=>{


    const [myPlayList,setMyPlayList]=useState([]);
        useEffect(()=>{
            const getData= async ()=>{
                const response = await makeautheticatedGETReq("/playlist/get/me")
                
                setMyPlayList(response.data);
            };
            getData()
        },[])


 return(
    
     <div className="absolute w-screen h-screen bg-app-black bg-opacity-70 flex justify-center items-center " onClick={closeModal}>

            <div className="bg-app-black w-1/3 rounded-lg p-2 " onClick={(e)=>{e.stopPropagation()}}>
                <div className="text-white py-2 font-sm font-semibold">Select PlayList</div>
                <div className="text-white space-y-4 flex flex-col justify-center items-center"> 
                      {myPlayList.map(item=>{
                        return <Playlistcomponent info={item} addSongtoplaylist={addSongtoplaylist}/>
                      })}  
                 </div>
            </div>
        </div>
 )
}
const Playlistcomponent=({info,addSongtoplaylist})=>{
        return(
            <div className="bg-black w-full flex items-center space-x-4 hover:bg-gray hover:bg-opacity-40 cursor-pointer p-3" onClick={()=>{addSongtoplaylist(info._id)}}>
                <div>
                    <img src={info.thumbnail} className="h-10 w-full rounded bg f"/>
                </div>
                <div className="text-white font-semibold text-sm">
                    {info.name}

                </div>
            </div>
        )
}
export default AddtoPlayListModal