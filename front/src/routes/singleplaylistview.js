import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/loggedInContainer";
import { useEffect, useState } from "react";
import { makeautheticatedGETReq } from "../utils/serverhelpers";
import SingleSongCard from "../components/shared/singleSongcard";

const SinglePlaylistView=()=>{
    const [playListDetails, setplayListDetails]=useState({});
    const{playlistID}=useParams();
    useEffect(()=>{
        const getData= async()=>{
            const response= await makeautheticatedGETReq("/playlist/get/playlist/"+playlistID);
            setplayListDetails(response.data);
            console.log(response);

        }
        getData();
    },[])
    

    return(
        <LoggedInContainer curractive={"Library"}>
            {playListDetails._id && (<div>

                <div className="text-white text-xl font-semibold font-sm">{playListDetails.name}</div>
            <div className="py-5">
                                
                                {playListDetails.songs.map(item=>{
                                    return <SingleSongCard info={item} key={JSON.stringify(item)} playsound={()=>{}}/>
                                })
            
                                }
                            </div>

            </div>)}
            

        </LoggedInContainer>
    )

}
export default SinglePlaylistView;