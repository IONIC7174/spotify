const mongoose= require("mongoose");

const playlist = new mongoose.Schema({
    name : {
        type : String , 
        required : true,
    },
     thumbnail : {
        type : String ,
         required : true,
     },
     songs : [
        {
            type :mongoose.Types.ObjectId,
            ref :"song",
        
        },
    ],
     owner : {
        type : mongoose.Types.ObjectId,
        ref : "user",
     },

     collaborators : [
        {
            type : mongoose.Types.ObjectId,
            ref : "user",
        },
     ],

});
const playlistModel = mongoose.model("playlist",playlist);
module.exports=playlistModel;

 