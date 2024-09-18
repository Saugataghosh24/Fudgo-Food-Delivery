import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './MyOrders.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const MyOrders = () => {

    const {url, token}= useContext(StoreContext);
    const[data,setData]= useState([]);

    const fetchOrders = async() =>{
        const response= await axios.post(url+"/api/order/userorders", {}, {headers:{token}}); // calling the api
        setData(response.data.data);
    }

    useEffect(()=>{
        if(token) {
            fetchOrders();
        }
    },[token])

  return (
    <div className="my-orders">
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return (
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if(index === order.items.length-1){
                                return item.name+" x "+ item.quantity
                            }
                            else{
                                return item.name+" x "+item.quantity+", "
                            }
                        })}</p>
                        <p>&#x20b9; {order.amount}</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>  {/* display order status */}
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default MyOrders
