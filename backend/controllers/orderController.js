import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// Placing user order from user panel
const placeOrder = async (req,res) => {

    const frontend_url= "http:///localhost:5173";

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save(); // saving the order in DB
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}}) // clearing cartData

        res.json({success:true, message:"Order Placed"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}

// creating user orders api for frontend
const userOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({userId: req.body.userId});
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// listing orders for admin panel
const listOrders = async (req,res) =>{
    try {
        const orders = await orderModel.find({}) // getting all orders data
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// api for updating order status
const updateStatus = async (req,res)=> {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true, message:"Order Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {placeOrder, userOrders, listOrders, updateStatus}