import { useState } from "react";
import LoggedInContainer from "../containers/loggedInContainer";
import { makeautheticatedGETReq } from "../utils/serverhelpers";
import SingleSongCard from "../components/shared/singleSongcard";


const SearchPage=()=>{

    const [searchText,setsearchText]=useState("");
    const [SongData,setSongData]=useState([]);

    const searchSong=async()=>{
        const response = await makeautheticatedGETReq("/song/get/songname/"+searchText)
        
        setSongData(response.data);
    }
    
    return (
        <LoggedInContainer curractive={"Search"}>
            <div className="w-full ">
                <input type="text" placeholder={` What do you want to listen to ?`} 
                className="w-2/5 rounded-full bg-black bg-opacity-80 p-3 text-sm text-white"
                value={searchText}
                onChange={(e)=>{setsearchText(e.target.value)}}
                onKeyDown={(e)=>{if(e.key==="Enter"){searchSong()}}}
                />
                {
                    SongData.length>0?(
                        <div className="py-5">
                    <div className="text-white text-md text-semibold"> Showing search results for "{searchText}"</div>
                    {SongData.map(item=>{
                        return <SingleSongCard info={item} key={JSON.stringify(item)} playsound={()=>{}}/>
                    })

                    }
                </div>
                    ) : (
                        <div className="text-white text-md text-semibold py-5"> Your searched Song will be displayed here</div>
                    )
                        
                    
                }
            </div>

        </LoggedInContainer>
    )

}
export default SearchPage;