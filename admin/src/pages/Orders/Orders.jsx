import React from 'react'
import './Orders.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {toast} from "react-toastify"
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders,setOrders]= useState([]);

  const fetchAllOrders= async ()=> {
    const response= await axios.get(url+"/api/order/list");
    if( response.data.success){
      setOrders(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const statusHandler = async (evt,orderId) => {
    const response= await axios.post(url+"/api/order/status", {
      orderId,
      status: evt.target.value
    })
    if(response.data.success){
      await fetchAllOrders(); // refresh the status
    }
  }

  useEffect(()=> {
    fetchAllOrders(); // run the function whenever the page is loaded
  },[])

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />   
            <div>
              <p className="order-item-food">
                {order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name +" x "+ item.quantity
                  }
                  else{
                    return item.name +" x "+ item.quantity +", "
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName+" "+order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.landmark+", "+order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.pincode+", "+order.address.state}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>   
            <p>Items: {order.items.length}</p>
            <p>Bill : &#x20b9;{order.amount}</p>
            <select onChange={(evt)=>statusHandler(evt,order._id)} value={order.status}>
              <option value="Food Processiong">Food Processiong</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders
