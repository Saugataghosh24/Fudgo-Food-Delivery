import jwt from 'jsonwebtoken'

let admin_email= "admin@gmail.com"
let admin_pw= "Chandan123"

const adminLogin = async (req,res)=>{
    try {
        const {email,password}= req.body;

        if(email=== admin_email && password=== admin_pw){
            
            const token= jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false, message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:isFloatLocales, message:error.message})
    }
}

export {adminLogin}