import React, {useEffect, useState, useRef} from 'react'
import {useDispatchCart, useCart} from './ContextReducer'

export default function Card(props) {

  let dispatch = useDispatchCart();
  let data = useCart();

  let options = props.options;
 let priceOptions = Object.keys(options);
   
 const priceRef = useRef();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const handleAddtoCart = async () => {

    await dispatch({type:"ADD", id:props.foodItem._id, name: props.foodItem.name, price: props.foodItem.price, qty: qty, size: size})
    await console.log(data)
  
  }

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
      setSize(priceRef.current.value)
  }, [])
  


  return (
    (
      <div className="card mt-3" style={{ "width": "16rem", "maxHeight": "360px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title"> {props.foodItem.name}</h5>
          <div className='container w-100' >
          
            <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setQty(e.target.value)}> {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}> {i + 1} </option>)
            })}
            </select>
            
            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
            {priceOptions.map((data, index) => {
              if (index !== 0) {
                return <option key={data} value={data}>{data}</option>;
              }
              return null; 
            })} </select>
            <div className='d-inline h-100 fs-5'>
              Rs{finalPrice}/-
            </div>

          </div>


        </div>

        <hr></hr>
<button className={'btn btn-success justify-center ms-2'} onClick={handleAddtoCart}> Add to Cart </button>

      </div>
    )
  )
}
