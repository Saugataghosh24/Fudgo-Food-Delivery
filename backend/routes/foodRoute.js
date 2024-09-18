import express from 'express'
import { addFood, listfood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

// creating a fodRouter
const foodRouter= express.Router();

// Image Storare Engine
const storage= multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=>{
        return cb(null, `${Date.now()}-${file.originalname}`)
        // Use Date.now() to make the filename unique and append the original file extension
    }
})

const upload= multer({storage:storage})

foodRouter.post("/add", upload.single("image"),addFood)
foodRouter.get("/list", listfood);
foodRouter.post("/remove", removeFood);

export default foodRouter;