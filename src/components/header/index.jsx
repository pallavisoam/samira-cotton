import React from 'react'
import HeaderLogo from '../../assets/images/suLogo.png'
import './index.css'

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center header-parent-div">
      
      {/* Left: Logo */}
      <div>
        <img
          src={HeaderLogo}
          alt="header"
          className="logo_header"
        />
        <span className='heading-light company-name'>Suswasthya Internation Pvt. Ltd.</span>
      </div>

      {/* Right: Menu */}
      <div className="d-flex align-items-center gap-4">
        <p className="mb-0 heading-light">Home</p>
        <p className="mb-0 heading-light">About us</p>
        <p className="mb-0 heading-light">Products</p>
        <p className="mb-0 heading-light">Testimonials</p>
        <p className="mb-0 heading-light">Contact Us</p>
      </div>

    </div>
  )
}

export default Header
