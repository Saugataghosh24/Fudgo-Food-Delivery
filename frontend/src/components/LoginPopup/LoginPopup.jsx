import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

    const {url, setToken}= useContext(StoreContext)

    const[currState, setCurrState]= useState("Login")
    const [data,setData]= useState({
      name: "",
      email: "",
      password: ""
    })

    // take data from input and save it in the state var
    const onChangeHandler = (evt)=> {
      const name= evt.target.name;
      const value= evt.target.value;
      setData(data=>({...data,[name]:value})) // update the name field value with the updated value
    }

    const onLogin = async (evt)=> {
      evt.preventDefault();
      let newUrl = url;
      if(currState== "Login"){
        newUrl+= "/api/user/login"
      }
      else{
        newUrl+= "/api/user/register"
      }

      // post api call
      const response = await axios.post(newUrl, data);

      if(response.data.success){
        setToken(response.data.token); // we will set a Token
        localStorage.setItem("token", response.data.token)  // save the token in localstorage
        setShowLogin(false) // hide login page
      }
      else{
        alert(response.data.message);
      }

    } // Link this function with form tag

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>: 
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" required /> 
            }
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Your Email" required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
        </div>
        <button type='submit'>{currState==="Sign Up"? "Create Account": "Login"}</button>
        <div className="login-popup-condition">
            {/* <input type="checkbox" required /> */}
            <p>By continuing, I accept the Terms & Conditions & Privacy Policy</p>
        </div>
        {currState==="Login"?
        <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} >Click Here</span></p>
        : <p>Alredy have an account? <span onClick={()=>setCurrState("Login")} >Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
