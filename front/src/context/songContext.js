import { useContext,createContext  } from "react";
const songContext=createContext({
        currentSong:null,
        setcurrentSong:(currentSong)=>{},
        SoundPlayed : null,
         setSoundPlayed : ()=>{},
        isPaused : null,
        setIsPaused : ()=>{},
});
export default songContext;