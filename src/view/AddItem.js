
import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddItem() {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
  
    const loadData = async () => {
      let response = await fetch('http://localhost:4000/api/fooditem',{
        method:"GET",
        header:{
          'Content-Type':'application/json'
        }
      });
      response = await response.json()
  
      setFoodItem(response[0])
      setFoodCategory(response[1])
  
      console.log(response[0], response[1])
    }
  
    useEffect(()=>{
      loadData()
    },[])

  const [itemdetails, setcredentails] = useState({ name: "", email: "", password: "", geolocation: "" });


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:4000/api/createuser", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ itemName: itemdetails.itemName, email: itemdetails.email, password: itemdetails.password, location: itemdetails.geolocation })

    // })

    // console.log(itemdetails)
    // const json = await response.json()
    // console.log(json)
    // if (!json.success) {
    //   alert("Enter Valid Credentails")
    // }

    // if (json.success) { 
    //   navigate("/")
    // }
  };
  const onChange = (event) => {
  setcredentails({ ...itemdetails, [event.target.name]: event.target.value })
  }
  return (
    <>
    <h4>Add Item</h4>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Item Name</label>
            <input type="text" className="form-control" name='itemName' value={itemdetails.itemname} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
 

      <select
        className="form-select"
        name="categoryName"
        value={itemdetails.category}
        onChange={onChange}
      >
        <option value="">Select a category</option>
        {foodCategory.map((category, index) => (
          <option key={index} value={category.CategoryName}>
            {category.CategoryName}
          </option>
        ))}
      </select>
     
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Price</label>
            <input type="number" className="form-control" name='price' value={itemdetails.price} onChange={onChange} />
          </div> 
          
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Description</label>
            <input type="text" className="form-control" name='description' value={itemdetails.description} onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
           <Link className="m-3 btn btn-danger" to="/login">
                My Order List
              </Link> 
        </form>
      </div>

    </>
  )
}
