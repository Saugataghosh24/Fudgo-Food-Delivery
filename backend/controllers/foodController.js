import foodModel from "../models/foodModel.js";
import fs from'fs'


// add food items api
const addFood= async (req,res)=>{

    let image_filename= `${req.file.filename}`;

    const food= new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try{
        await food.save(); // food items will be saved in the DB
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//all food list api
const listfood= async(req,res)=>{
    try {
        const foods= await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        req.json({success:false, message:"Error"});
    }
}

//remove food item api
const removeFood= async(req,res)=>{
    try {
        const food= await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, ()=>{})  // deleting foodimage from uploads

        await foodModel.findByIdAndDelete(req.body.id); // deleting foodModel from DB
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.send({success:false, message:"Error"})
    }
}

export {addFood, listfood, removeFood} //exporting the objects
