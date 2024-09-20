import express from 'express';
import { addFood, listfood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import path from 'path';

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listfood);
foodRouter.post("/remove", removeFood);

export default foodRouter;