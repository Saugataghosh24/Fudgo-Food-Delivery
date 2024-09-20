import foodModel from "../models/foodModel.js";
import cloudinary from "../controllers/cloudinary.js";
import fs from 'fs';

const addFood = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: result.secure_url,
            cloudinary_id: result.public_id // Store Cloudinary public_id for easier deletion
        });

        await food.save();
        
        // Remove the temporary file
        fs.unlinkSync(req.file.path);
        
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const listfood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        
        // Delete image from Cloudinary
        await cloudinary.uploader.destroy(food.cloudinary_id);

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addFood, listfood, removeFood };