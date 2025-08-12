import { Icon } from "@iconify/react/dist/iconify.js";
import IconText from "../components/shared/ico";
import TextWithHover from "../components/shared/TextWithHover";
import { Children, useContext, useLayoutEffect, useRef, useState } from "react";
import { Howl,Howler } from "howler";
import songContext from "../context/songContext";
import CreatePlaylistModal from"../modals/createplaylistmodal"
import AddtoPlayListModal from "../modals/addPlaylistModal";
import { makeautheticatedPOSTReq } from "../utils/serverhelpers";
import { Link } from "react-router-dom";



    


const LoggedInContainer=({children,curractive})=>{
    const[CreatePlaylistModalOpen,setCreatePlaylistModalOpen]=useState(false);
    const[addPlayListModalOpen,setaddPlayListModalOpen]=useState(false);

    
    const {currentSong,setcurrentSong,SoundPlayed,setSoundPlayed,isPaused,setIsPaused}=useContext(songContext);

    const mount=useRef(true);

    useLayoutEffect(()=>{
        if(mount.current){
            mount.current=false;
            return;
        }

        if(!currentSong){
            return;
        }
        changeSong(currentSong.track);

    },[currentSong && currentSong.track])

    const addSongtoplaylist=async(playlistID)=>{
            const songID=currentSong._id
            const playload={playlistID,songID};
            
            const response=await makeautheticatedPOSTReq("/playlist/add/song",playload);
            
            
    }

    const PlaySound=()=>{
        if(!SoundPlayed){
            return;
        }
        SoundPlayed.play();

    }

     var changeSong=(songsrc)=>{
            if(SoundPlayed){
                SoundPlayed.stop();
            }
            let sound=new Howl({
            src:[songsrc],
            html5:true,
        });
            setSoundPlayed(sound);
            sound.play();
            setIsPaused(false);
    
        }

        const pauseSound=()=>{
            SoundPlayed.pause();
        }
        const toggle=()=>{
            if(isPaused){
                PlaySound();
                setIsPaused(false);
            }
            else{
                pauseSound();
                setIsPaused(true);
            }
        }


 return(
    
    
    <div className="h-full w-full bg-app-black">{/* whole page */}
    {CreatePlaylistModalOpen &&<CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}
    {addPlayListModalOpen &&<AddtoPlayListModal closeModal={()=>{setaddPlayListModalOpen(false)}} addSongtoplaylist={addSongtoplaylist}/>}
        <div className={`${currentSong?"h-10/11":"h-full"} w-full flex `}>
        <div className="h-full w-1/5 bg-black">{/* sidebar */}
            <div className="p-6">
                <span className="text-green-500 text-lg ">MUSICO </span>
            </div>
            <div className="py-2 pb-8">
                <IconText iconName={"material-symbols:home"} displayText={"Home"} active={curractive==="Home"} targetLink={"/LoggedInHome"}/>
                <IconText iconName={"material-symbols:search"} displayText={"Search"} active={curractive==="Search"}  targetLink={"/SearchPage"}/>
                <IconText iconName={"icomoon-free:books"} displayText={"Library"} active={curractive==="Library"}  targetLink={"/Library"}/>
                <IconText iconName={"material-symbols:library-music"} displayText={"My Music"} active={curractive==="My Music"}  targetLink={"/MyMusic"}/>
                
            </div>
            <div>
                <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"} onClick={()=>{setCreatePlaylistModalOpen(true)}} />
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
                          <Link to="/UploadSong"> <TextWithHover displayText={"Upload Song"}/></Link> 
                            <div className="px-3 h-10 w-10 bg-white flex items-center justify-center rounded-full font-semibold cursor-pointer">KM</div>
                        </div>
                    </div>
                
            </div>
            <div className="content p-8 overflow-auto">{/*below nav area */}
             {children}
            </div>

        </div>
        </div>

        {
            currentSong&&


            <div className="bg-black bg-opacity-40 w-full h-1/11 text-white flex items-center px-4">
            <div className="w-1/4 h-full flex items-center">
                <img src={currentSong.thumbnail} 
                 alt="currentSongThumbnail"
                 className="h-14 w-14 rounded-md"
                 />
                <div className="pl-4">
                    <div className="text-sm">{currentSong.name}</div>
                    <div className="text-xs text-gray">{currentSong.artist.firstname+" "+currentSong.artist.lastname}</div>
                </div>
            </div>
            <div className="w-1/2 h-full flex justify-center flex-col items-center">
                <div className="flex justify-between items-center w-1/3">
                    
                    <Icon icon="mdi:skip-previous-outline"className="text-4xl cursor-pointer text-gray-500 hover:text-white"/>
                    <Icon icon={isPaused?"ic:baseline-play-circle":"ic:baseline-pause-circle"}className="text-4xl cursor-pointer text-gray-500 hover:text-white"
                          onClick={toggle} />
                    <Icon icon="mdi:skip-next-outline"className="text-4xl cursor-pointer text-gray-500 hover:text-white" />
                    
                </div>
                <div></div>
            </div>
            <div className="w-1/4 flex justify-end">
                <Icon icon="ic:round-playlist-add" className="text-4xl cursor-pointer text-gray-500 hover:text-white" onClick={()=>{setaddPlayListModalOpen(true)}}/>
                <Icon icon="ph:heart" className="text-4xl cursor-pointer text-gray-500 pl-2 hover:text-white"/>
            </div>



            
            



        </div>
        }
        
    </div>
 );
}


export default LoggedInContainer;