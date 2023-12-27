import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import Cart from '../view/Cart';
import { useCart } from './ContextReducer';

export default function Header() {

  const [cartView, setCartView] = useState(false)
  localStorage.setItem('temp', "first")
  const navigate = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem("authToken");
    localStorage.removeItem("rauthToken");
    localStorage.removeItem('userEmail')
    navigate('/login')

  }
  const loadCart = () => {
    // setCartView(true)
    navigate('/cart')
  }

  const items = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {(localStorage.getItem("rauthToken")) ?
          <a className="navbar-brand fs-1" onClick={() => navigate(`/restaurantFoodItem/${localStorage.getItem("restaurantID")}`)}>
            {/* Center Section (Logo) */}
            <div className='m-50 '>
              <img src="/zwiggy.png" alt="Logo" height="50" />
            </div>
          </a> : <Link className="navbar-brand fs-1" to="/">
            {/* Center Section (Logo) */}
            <div className='m-50 '>
              <img src="/zwiggy.png" alt="Logo" height="50" />
            </div>
          </Link>}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2">

            {(localStorage.getItem("rauthToken")) ? "" :
              <li className="nav-item">
                <Link className="nav-link active" to="/" activeclassname="active">
                  Home
                </Link>  </li>}
            {(localStorage.getItem("authToken")) ?
              <li className="nav-item">
                <Link className="nav-link active" to="/myorder" activeclassname="active">
                  MyOrders
                </Link> 
                <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                      <FontAwesomeIcon icon={faShoppingCart}  >
                      </FontAwesomeIcon>
                      My Cart {(items.length !== undefined) ? items.length : 0}
                    </div>
                <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>
                    Logout
                  </div>
                 </li>
                
              : ""
            }



          </ul>
          {/* Right Section (Login) - Included in the collapsible div */}
          <div className='d-flex'>

            {(!localStorage.getItem("authToken")) 
            
            ? (!localStorage.getItem("rauthToken")) ? 
              <div>
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>

                <Link className="btn bg-white text-success mx-1" to="/signup">
                  SignUp
                </Link> 
              </div>
                : <div>

                  {(localStorage.getItem("rauthToken")) ?
                  <div className='d-flex'>
                    <Link className="btn bg-white text-success mx-1" to="/restaurantOrder">
                    Orders
                  </Link> 
                     
                  <Link className="btn bg-white text-success mx-1" to="/additem">
                    Add Item +
                  </Link> 
                  <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>
                    Logout
                  </div>
                  </div>
                   :
                   <div>
                    
                  </div>
                    }

                  {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                 
                </div> : ""



            }



          </div>



        </div>
      </div>
    </nav>
  );
}
