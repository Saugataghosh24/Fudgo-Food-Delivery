import mongoose from 'mongoose'


// Creating a schema for foodModel
const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true}
})

// creating a foodModel using the schema
const foodModel =  mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;