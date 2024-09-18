import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"  // creating authentication
import bcrypt from "bcryptjs"
import validator from "validator"

// login user
const loginUser = async (req,res)=> {
    const {email,password}= req.body;

    try {
        const user= await userModel.findOne({email});  // find one eamil from DB

        if(!user){
            return res.json({success:false, message: "User Doesn't Exist"})  // check if user exist or not
        }

        const isMatch = await bcrypt.compare(password,user.password) // compare entered password with user password

        if(!isMatch) {
            return res.json({success:false, message: "Invalid Password"});
        }

        // If password matches then generate a token
        const token = createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}

const createToken =(id) =>{
    return jwt.sign({id},process.env.JWT_SECRET) // take user id as data and generate one token and return it
}

// register user api to create user
const registerUser= async (req,res)=> {
    const {name, password, email}= req.body;
    try {
        // Checking if user alredy exists
        const exists= await userModel.findOne({email}) //if this email is available
        if(exists){
            return res.json({success:false, message:"User Alredy Exists"})
        }

        // Validating email & password format 
        if(!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false, message:"Please enter a strong password of atleast 8 characters"})
        }

        // hashing(encrypt) user password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt);

        // Creating a new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        // save and store the new user
        const user= await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

export {loginUser, registerUser}