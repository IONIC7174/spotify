const express = require("express");
const router=express.Router();
const passport=require("passport");
const Song=require("../models/song");


router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
 const {name, thumbnail,track}=req.body;
 if(!name||!thumbnail||!track){
    return res.status(301).json({err:"insuffiient details to create song"});
 }
 const artist=req.user._id;
 const songDetail={name,thumbnail,track,artist};
 const createdSong =await Song.create(songDetail);
 return res.json(createdSong);
})


router.get("/get/mysongs",passport.authenticate("jwt",{session:false}),async(req,res)=>{
   
   const songs=await Song.find({artist:req.user._id}).populate("artist");
   return res.status(200).json({data:songs});
})


router.get("/get/artist/:artistID",passport.authenticate("jwt",{session:false}),async(req,res)=>{

   const{artistID}=req.params;
   const songs= await Song.findOne({artist:artistID});
   if(!songs){
      return res.status(301).json({err:"artist not found"});
   }
   return res.json({data:songs});
})


router.get("/get/songname/:songName",passport.authenticate("jwt",{session:false}),async(req,res)=>{

   const {songName}=req.params;
   const songs=await Song.find({name:songName}).populate("artist");
   return res.json({data:songs});
})

module.exports=router;

