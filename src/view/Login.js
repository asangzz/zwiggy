import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentails] = useState({   email: "", password: ""  });
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/verifyuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password, })

    })

    console.log(credentials)
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert("Enter Valid Credentails")
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken)
      navigate("/")
    }
  };
  const onChange = (event) => {
    setcredentails({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
         
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
        </div>
        
        
        <button type="submit" className="btn btn-success">Submit</button>
        <Link className="m-3 btn btn-danger" to="/signup">
                Create a New Account
              </Link> 
      </form>
    </div>

  </>
  )
}
