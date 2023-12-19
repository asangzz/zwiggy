import React, {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatchCart, useCart} from './ContextReducer'

export default function FoodCard(props) {

 

  let navigate = useNavigate()  
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });    
 
 

  const handleFoodItem = async () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login")
    }

    navigate(`/editItem/${props.foodItem._id}`);
 
     
    
  }

  useEffect(() => {
    
  }, [])

  

  let priceOptions = Object.values(props.options);
  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">{props.foodItem.CategoryName}  </p>
          <p className="card-text">Starts from ₹{priceOptions[0]}</p>
          
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleFoodItem}>Edit Food Details</button>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
