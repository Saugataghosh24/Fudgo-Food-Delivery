import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>What's on your mind?</h1>
      <p className="explore-menu-text">Explore a wide variety of mouthwatering dishes, from local favorites to global cuisines. Customize your meals and discover new flavors, all crafted to satisfy your hunger.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>{setCategory(prev=>prev===item.menu_name? "All" : item.menu_name)}}key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name? "active" : ""} src={item.menu_image} />
                        <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
