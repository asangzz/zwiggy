// Footer.js
import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import the phone icon from react-icons library

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center p-3 mt-5 fixed-bottom w-100">
      <div className="d-flex justify-content-between align-items-center">
        {/* Left Section (Contact Details) */}
        <div className="text-left">
          <p>
            <FaPhone /> Contact: +123 456 7890
          </p>
        </div>

        {/* Center Section (Logo) */}
        <div>
          <img src="/zwiggy.png" alt="Logo" height="50" />
        </div>

        {/* Right Section (Copyright Remarks) */}
        <div className="text-right">
          <p>&copy; 2023 Zwiggy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
