import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image,setImage] = useState(false);
  const[data, setData]= useState({
    name: "",
    description: "",
    price: "",
    category: "Sweets"
  })

  const onChangeHandler= (evt)=>{
    const name= evt.target.name;
    const value= evt.target.value;
    setData(data=>({...data,[name]:value}))
  }

  // creating an API
  const onSubmitHandler= async (evt)=>{
    evt.preventDefault(); // prevent page reloading
    const formData= new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)

    const response= await axios.post(`${url}/api/food/add`, formData) //formdata wiil be added in the DB 
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category: "Sweets"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }
  

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add-product-desc flex col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here" required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
              <option value="Sweets">Sweets</option>
              <option value="Snacks">Snacks</option>
              <option value="Burger">Burger</option>
              <option value="Pastry">Pastry</option>
              <option value="Thali">Thali</option>
              <option value="Drinks">Drinks</option>
              <option value="Biryani">Biryani</option>
              <option value="Ice Cream">Ice Cream</option>
              <option value="Rolls">Rolls</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="South Indian Food">South Indian Food</option>
              <option value="Pasta">Pasta</option>
              <option value="Pizza">Pizza</option>
              <option value="Noodles">Noodles</option>
              <option value="Salad">Salad</option>
              <option value="Western Fast Food">Western Fsat Food</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="&#x20b9;"/>
          </div>
        </div>
        <button type='submit' className="add-btn">ADD</button>
      </form>
    </div>
  )
}

export default Add
