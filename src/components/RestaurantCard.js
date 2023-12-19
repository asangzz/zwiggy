import React, {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatchCart, useCart} from './ContextReducer'

export default function RestaurantCard(props) {

 

  let navigate = useNavigate()  
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });    
 
 

  const handleRestaurant = async () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login")
    }

    navigate(`/restaurant/${props.restaurants._id}`);
 
     
    
  }

  useEffect(() => {
    
  }, [])

  


  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.restaurants.logo} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.restaurants.name}</h5>
          <p className="card-text">{props.restaurants.open} - {props.restaurants.close}</p>
          <p className="card-text">{props.restaurants.location}</p>
          
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleRestaurant}>Visit Restaurant</button>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
