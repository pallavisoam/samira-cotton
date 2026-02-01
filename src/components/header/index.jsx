import React from 'react'
import HeaderLogo from '../../assets/images/suLogo.png'
import './index.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="d-flex justify-content-between align-items-center header-parent-div">

      {/* Left: Logo */}
      <div onClick={handleHome} style={{cursor:'pointer'}}>
        <img src={HeaderLogo} alt="header" className="logo_header" />
        <span className="heading-light company-name">
          Suswasthya Internation Pvt. Ltd.
        </span>
      </div>

      {/* Right: Menu */}
      <div className="d-flex align-items-center gap-4">
        <p onClick={() => scrollToSection('home')} className="mb-0 heading-light cursor-pointer">Home</p>
        <p onClick={() => scrollToSection('about')} className="mb-0 heading-light cursor-pointer">About us</p>
        <p onClick={() => scrollToSection('products')} className="mb-0 heading-light cursor-pointer">Products</p>
        <p onClick={() => scrollToSection('testimonials')} className="mb-0 heading-light cursor-pointer">Testimonials</p>
        <p onClick={() => scrollToSection('contact')} className="mb-0 heading-light cursor-pointer">Contact Us</p>
      </div>

    </div>
  )
}

export default Header
