import "./output.css"
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import Home from "./routes/home";
import LoggedInHome from "./routes/LoggedInHome";
import MyMusic from "./routes/MyMusic";
import UploadSong from "./routes/UploadSong";
import { useCookies } from "react-cookie";
import songContext from "./context/songContext";
import { useState } from "react";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import SearchPage from "./routes/SearchPage";
import Library from "./routes/Library";
import SinglePlaylistView from "./routes/singleplaylistview";




function App() {
  const [cookie,setCookie]=useCookies(["token"]);
  const [currentSong,setcurrentSong]=useState(null);
  const [SoundPlayed,setSoundPlayed]=useState(null);
    const [isPaused,setIsPaused]=useState(true);



  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
      {cookie.token?(
        //logged in

        
        <songContext.Provider value={{currentSong,setcurrentSong,SoundPlayed,setSoundPlayed,isPaused,setIsPaused}}>
          <Routes>
            <Route path="/LoggedInHome" element={<LoggedInHome/>}/>
            <Route path="/UploadSong" element={<UploadSong/>}/>
            <Route path="/MyMusic" element={<MyMusic/>}/>
            <Route path="/SearchPage"element={<SearchPage/>}/>
            <Route path="/Library"element={<Library/>}/>
            <Route path="/Playlist/:playlistID"element={<SinglePlaylistView/>}/>
            <Route path="*" element={<Navigate to ="/LoggedInHome"/>}/>


          </Routes>
         
        </songContext.Provider>

      ):(
        //logged out
      <Routes>
        <Route path ="/login" element={<LoginComponent/>}/>
        <Route path="/signup"element={<SignupComponent/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Navigate to ="/login"/>}/>
      </Routes>


      )
      
    
    }
      
      </BrowserRouter>
    </div>
  );
}

export default App;
