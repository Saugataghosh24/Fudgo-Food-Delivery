import mongoose from 'mongoose'

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://SaugataGhosh:Saugata123@cluster0.3vjuh.mongodb.net/fudgo').then(()=>{
        console.log("DB Connected");
    })
}