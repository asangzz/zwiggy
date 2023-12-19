
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [credentials, setcredentails] = useState({ name: "", email: "", logo: "", password: "", geolocation: "", open: '07:00',close: '23:00' });


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/rcreateuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, logo: credentials.logo,  password: credentials.password, location: credentials.geolocation, open: credentials.open, close: credentials.close })

    }) 

    
    const json = await response.json()
  


    console.log(json)
    if (!json.success) {
      alert("Enter Valid Credentails")
    }



    if (json.success) { 
      navigate("/restaurantLogin")
    }
  };
  const onChange = (event) => {
    setcredentails({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className='container'>
        <h4 className='mt-3 mb-3'>Restaurant Signup</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Restaurant Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Logo URL</label>
            <input type="text" className="form-control" name='logo' value={credentials.logo} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Location</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} />
          </div>
          <div className='d-flex'>
      <div className="mb-3 me-3">
        <label htmlFor="openingTime" className="form-label">Opening Time</label>
        <input type="time" className="form-control" id="openingTime" name='open' value={credentials.open} onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="closingTime" className="form-label">Closing Time</label>
        <input type="time" className="form-control" id="closingTime" name='close' value={credentials.close} onChange={onChange} />
      </div>
    </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link className="m-3 btn btn-danger" to="/restaurantLogin">
            Restaurant already registered?
          </Link>
        </form>
        
      </div>

    </>
  )
}
