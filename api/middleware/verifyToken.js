const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();

const Jwt_sec = process.env.JWT_SECRET

const verifyToken = (req, res, next)=>{
    
    const token = req.cookies.authToken;   //we will store the auth token in cookies when the user log in . 
                                           //So here we are accessing the cookies using req.cookies.authToken
    
    if(!token){
        return res.status(400).json("Token not available");
    }
    try{
       const data = jwt.verify(token, Jwt_sec);
       req.user = data.user;
       next();
    }catch(err){
        return res.json("Some error occured");
    }
}

module.exports = verifyToken;