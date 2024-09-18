import React, { useContext, useState, useEffect } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const PlaceOrder = ({setShowLogin}) => {

  const navigate = useNavigate();
  const{getTotalCartAmount, getTotalAmount, url, token, food_list, cartItems, setCartItems}= useContext(StoreContext);

  // state var to store info of delivery address
  const [data,setData]= useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    landmark: ""
  })

  // to save input fields data in the state var 
  const onChangeHandler = (evt) => {
    const name= evt.target.name;
    const value= evt.target.value;
    setData(data=>({...data,[name]:value}))
  }

  // function to go to payment gateway
  const placeOrder = async (evt) => {
    evt.preventDefault(); // don't reload the web page when the form is submitted
    let orderItems= [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"]= cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })

    let orderData= {
      address: data,
      items: orderItems,
      amount: getTotalAmount(),
    }
    let response= await axios.post(url+"/api/order/place", orderData, {headers:{token}}) // api call
    
    if(response.data.success){
      toast.success(response.data.message); // success notification
      setCartItems({});
      navigate('/myorders');
    }
    else{
      toast.error("Failed to place order")
      navigate('/');
    }
  }

  useEffect(()=>{
    if(!token){
      navigate('/cart');
      {setShowLogin(true)} // if there is no token then send the user to cart page & login popup appears
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart') // if cart is empty then we can not go to place order page
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Address</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name"/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name"/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address"/>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="Number" placeholder="Phone no."/>
        <div className="multi-fields">
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street"/>
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder="City"/>
        </div>
        <div className="multi-fields">
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder="State"/>
          <input required name='pincode' onChange={onChangeHandler} value={data.pincode} type="Number" placeholder="Pin Code"/>
        </div>
        <input required name='landmark' onChange={onChangeHandler} value={data.landmark} type="text" placeholder="Land Mark" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-detail">
            <p>Sub Total</p>
            <p>&#x20b9;{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
            <p>Delivery Charges</p>
            <p>&#x20b9;{getTotalCartAmount()===0 || getTotalCartAmount()>=500 ? 0 : 25}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
            <b>Total</b>
            <b>&#x20b9;{getTotalCartAmount()===0 ? 0 : getTotalAmount()}</b>
          </div>
          <div className="payment-method">
            <h2>Payment Method</h2>
            <br/>
            <p>COD (Cash On Delivery)</p>
          </div>
          <button type="submit">PLACE ORDER</button>
      </div>
      </div>
    </form>
  )
}

export default PlaceOrder
