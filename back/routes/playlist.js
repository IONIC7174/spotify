const express =require("express");
const router = express.Router();
const passport=require("passport");
const Playlist=require("../models/playlist");
const Song=require("../models/song");
const User = require("../models/user");


router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser=req.user;
    const{name,thumbnail,songs}= req.body;
    if(!name||!thumbnail||!songs){
        return res.status(301).json({err:"insufficient data"});
    }
    const playlistData={name,thumbnail,songs,owner:currentUser._id,collaborators:[],};
    const playlist=await Playlist.create(playlistData);
    
    return res.json({data:playlist});
})

router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const playlistID=req.params.playlistId;
    const playlistData= await Playlist.findOne({_id : playlistID}).populate({path:"songs",populate:({path:"artist"})});
    if(!playlistData){
        return res.status(301).json({err:"INVALID PLAYLIST ID"});
    }
    return res.status(200).json({data:playlistData});

})


router.get("/get/me",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistID=req.user._id;
    
    
    const playlistData = await Playlist.find({owner:artistID}).populate("owner"); 
    return res.json({data:playlistData});
})


router.get("/get/artist/:artistID",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistID=req.params.artistID;
    const artist=await User.findOne({_id:artistID});
    if(!artist){
        return res.status(304).json({err:"INVALID ARTIST ID"});
    }
    const playlistData = await Playlist.find({owner:artistID}); 
    return res.json({data:playlistData});
})
router.post("/add/song",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser=req.user;
    const{playlistID,songID}=req.body;
    const playlist=await Playlist.findOne({_id:playlistID});

    if(!playlist){
        return res.status(304).json({err:"invalid playlist id"});
    }
    const song=await Song.findOne({_id:songID});

    if(!song){
        return res.status(304).json({err:"invalid song id"});
    }
    //!playlist.owner.equals(currentUser._id) not direct compare as we cant compare two obj(different adderess) instead their keys.
    if(!playlist.owner.equals(currentUser._id)&&!playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({err:"not allowed"})
    }
    playlist.songs.push(songID);
    await playlist.save();

    return res.json({playlist});
})


module.exports=router;