
import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddItem() {

    const [foodCategory, setFoodCategory] = useState([]);
   
  
    const loadData = async () => {
      let response = await fetch('http://localhost:4000/api/fooditem',{
        method:"GET",
        header:{
          'Content-Type':'application/json'
        }
      });
      response = await response.json()
  
     // setFoodItem(response[0])
      setFoodCategory(response[1])
  
      console.log(response[0], response[1])
    }
  
    useEffect(()=>{
      loadData()
    },[])

    const [formData, setFormData] = useState({
      CategoryName: '',
      name: '',
      img: '',
      options: [{ varientname: '', varientprice: '' }],
      description: '',
      RestaurantId: localStorage.getItem('restaurantID')
    });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();


    let response;
    try {
       response =  await fetch('http://localhost:4000/api/createfooditem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle success, e.g., show a success message or redirect
      console.log('Food item created successfully');

      


    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error creating food item', error);
    }

    // console.log(itemdetails)
   const json = await response.json()
    // console.log(json)
    // if (!json.success) {
    //   alert("Enter Valid Credentails")
    // }

    if (json.success) { 
      navigate("/")
    }
  };

  

  const handleOptionChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newOptions = [...prevData.options];
      newOptions[index][name] = value;
      return {
        ...prevData,
        options: newOptions,
      };
    });
  };

  const handleAddOption = () => {
    setFormData((prevData) => ({
      ...prevData,
      options: [...prevData.options, { varientname: '', varientprice: '' }],
    }));
  };


  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  return (
    <>
    
      <div className='container'>
      <h4 className='mt-3 mb-3'>Add a Food Item</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Item Name</label>
            <input type="text" className="form-control" name='name' value={formData.name} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="img" className="form-label">Image Url</label>
            <input type="text" className="form-control" name='img' value={formData.img} onChange={onChange} />
          </div>
 

          <label htmlFor="category" className="form-label">Category</label>
          <select
  className="form-select"
  name="CategoryName"
  value={formData.CategoryName}
  onChange={onChange}
>

        <option value="">Select a category</option>
        {foodCategory.map((category, index) => (
          <option key={index} 
        value={category.CategoryName}
          >
            {category.CategoryName}
          </option>
        ))}
      </select>
     <div className='mt-4'>
      <label>
      Add Varient
        
           {formData.options.map((option, index) => (
          <div key={index} className='mt-2'>
            <input
              type="text"
              name="varientname" 
              placeholder="Enter variant name"
              value={option.varientname}
              onChange={(e) => handleOptionChange(index, e)}
            />
            <input
              type="text"
              name="varientprice"
              placeholder="Enter variant price"
              value={option.varientprice}
              onChange={(e) => handleOptionChange(index, e)}
            />
          </div>
        ))} </label>
        </div>
        
       
        <button className="mt-2 mb-3 btn btn-outline-success" type="button" onClick={handleAddOption }>
          Add Option
        </button>
     
      
          {/* <div className="mb-3">
            <label htmlFor="email" className="form-label">Price</label>
            <input type="number" className="form-control" name='price' value={itemdetails.price} onChange={onChange} />
          </div>  */}
          
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Description</label>
            <input type="text" className="form-control" name='description' value={formData.description} onChange={onChange} />
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
