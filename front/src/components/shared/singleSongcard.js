import { useContext } from "react";
import songContext from "../../context/songContext";





const SingleSongCard=({info,playsound})=>{

    const {currentSong,setcurrentSong}=useContext(songContext);





    return(
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md"onClick={()=>{setcurrentSong(info)}}>
            <div className="w-10 h-10 bg-cover bg-center" style={{
                backgroundImage:`url("${info.thumbnail}")`
            }}></div>
            <div className="flex w-full">

                <div className=" text-white flex justify-center  flex-col p-4 w-5/6">
                    <div >
                        {info.name}
                    </div>
                    <div className="text-xs text-gray-400">
                        {info.artist.firstname+" "+info.artist.lastname}
                    </div>
                
                </div>
                <div className="w-1/6 flex items-center justify-center text-gray-400">
                    <div>
                        3:44
                    </div>
                    
                </div>


            </div>

        </div>
    )
}
export default SingleSongCard;