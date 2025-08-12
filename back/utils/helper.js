const jwt = require("jsonwebtoken");




const getToken = async (user)=>{
 const token = jwt.sign({identifier : user._id},"your_super_secure_jwt_secret");
 return token;
};
module.exports={getToken};