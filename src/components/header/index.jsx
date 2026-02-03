import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HeaderLogo from "../../assets/images/suLogo.png";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleHome = () => {
    navigate("/");
    setOpen(false);
  };

  const handleNavClick = (sectionId) => {
    if(sectionId === 'certificates'){
      navigate('/certification')
      setOpen(false);
      return
    }
    setOpen(false);

    // Already on home → just scroll
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Not on home → go home first, then scroll
    else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="header-parent-div">
      {/* LEFT */}
      <div className="header-left" onClick={handleHome}>
        <img src={HeaderLogo} alt="logo" className="logo_header" />
        <span className="company-name">
          Suswasthya International Pvt. Ltd.
        </span>
      </div>

      {/* DESKTOP MENU */}
      <nav className="desktop-menu">
        <span onClick={() => handleNavClick("home")}>Home</span>
        <span onClick={() => handleNavClick("about")}>About Us</span>
        <span onClick={() => handleNavClick("products")}>Products</span>
        <span onClick={() => handleNavClick("certificates")}>Certificates</span>
        <span onClick={() => handleNavClick("testimonials")}>Testimonials</span>
        <span onClick={() => handleNavClick("contact")}>Contact</span>
      </nav>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <span onClick={() => handleNavClick("home")}>Home</span>
        <span onClick={() => handleNavClick("about")}>About Us</span>
        <span onClick={() => handleNavClick("products")}>Products</span>
        <span onClick={() => handleNavClick("certificates")}>
          Certificates
        </span>
        <span onClick={() => handleNavClick("testimonials")}>
          Testimonials
        </span>
        <span onClick={() => handleNavClick("contact")}>Contact Us</span>
      </div>
    </header>
  );
};

export default Header;
