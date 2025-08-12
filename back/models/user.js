const mongoose =require("mongoose");
const user = new mongoose.Schema({
    firstname :{
        type : String,
        required : true,
    } ,
    lastname : {
        type : String ,
        required : false,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },

    email : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required: true,
    },
});
const userModel = mongoose.model("user",user);
module.exports=userModel;