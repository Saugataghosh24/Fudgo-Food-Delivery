import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) =>{
    const {token} = req.headers;
    if(!token){
        return response.json({success: false, message: "Login to your account/ Sign up"})
    }
    try {
        const token_decode= jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId= token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


export default authMiddleware