import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './index.css'

const Footer = () => {
  return (
    <footer className="footer-container text-dark pt-5 pb-3" id='contact'>
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 heading-dark">Contact Us</h5>
            <p className="mb-1 heading-light">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mb-1 heading-light">
              <strong>Email:</strong> info@yourcompany.com
            </p>
            <p className="mb-0 heading-light">
              <strong>WhatsApp:</strong> +91 98765 43210
            </p>
          </div>

          {/* Address Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 heading-dark">Our Address</h5>
            <p className="mb-0 heading-light">
              Sukha Nagar<br />
              Butwal, Nepal (PIN: 32900)
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 heading-dark">Follow Us</h5>
            <div className="d-flex gap-3 heading-light">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="heading-light fs-4"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="heading-light fs-4"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="heading-light fs-4"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-light" />
        <div className="text-center mt-3 heading-dark font-manrope">
          <h6>&copy; {new Date().getFullYear()} Suswasthya Internation Pvt. Ltd. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
