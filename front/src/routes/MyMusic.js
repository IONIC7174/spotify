import { Icon } from "@iconify/react/dist/iconify.js";
import IconText from "../components/shared/ico";
import TextWithHover from "../components/shared/TextWithHover";
import SingleSongCard from "../components/shared/singleSongcard";
import { makeautheticatedGETReq } from "../utils/serverhelpers";
import { useState ,useEffect} from "react";
import {Howl, Howler} from 'howler'
import LoggedInContainer from "../containers/loggedInContainer";

const MyMusic=()=>{
    const [SongData,setSongData]=useState([]);

    useEffect(()=>{
        const getData= async()=>{
            const response= await makeautheticatedGETReq("/song/get/mysongs");
            console.log(response.data);
            setSongData(response.data);
        };
        getData();
    },[]);


    return(
        <LoggedInContainer curractive={"My Music"}>
            <div className="text-xl pl-2 pb-4 text-white font-bold">My Songs</div>
                 <div className="p-3 overflow-auto">
                     {SongData.map((item)=>{
                        return <SingleSongCard info={item} playsound={()=>{}}/>
                    })}
                    </div>
        </LoggedInContainer>
    )
}









export default MyMusic;