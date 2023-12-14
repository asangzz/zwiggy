import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1" to="/">
          {/* Center Section (Logo) */}
          <div className='m-50 '> 
            <img src="/zwiggy.png" alt="Logo" height="50" />
          </div>
        </Link>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" activeclassname="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features" activeclassname="active">
                Features
              </Link>
            </li>
          </ul>

          {/* Right Section (Login) - Included in the collapsible div */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
