const express=require("express");
const router = express.Router();
const user = require("../models/user");
const bcrypt= require("bcrypt");
const {getToken}=require("../utils/helper");

router.post("/register",async(req,res)=>{
    const{email, password,firstname,lastname,username}=req.body;

    const User =await user.findOne({email : email});
    if(User){
        res.status(403).json({error :"an user with email already exists"});
    }
    const hashpass= await bcrypt.hash(password,10);
    const newUserData={email ,password:hashpass,firstname, lastname, username};

    const newUser= await user.create(newUserData);

    const token = await getToken(newUser);

    const userToreturn =   {...newUser.toJSON(),token};
    delete userToreturn.password;
    
    return res.status(200).json(userToreturn);


});

router.post("/login",async(req,res)=>{
    const{email,password}=req.body;

    const User=await user.findOne({email:email});

    if(!User){
        return res.status(403).json({err:"invalid credentials"});
    }
    const  isPasswordvalid=await bcrypt.compare(password,User.password);
    if(!isPasswordvalid){
        return res.status(403).json({err:"invalid credentials"});

    }

    const token = await getToken(User);
    const userToreturn =   {...User.toJSON(),token};
    delete userToreturn.password;
    
    return res.status(200).json(userToreturn);

    
});
module.exports= router;