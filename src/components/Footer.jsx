import React from 'react'
import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiMail } from 'react-icons/fi'
import { FiMessageCircle } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Saree Showcase</h3>
            <p className="footer-description">
              Premium Indian ethnic fashion brand offering exquisite sarees for every occasion.
              Experience luxury, elegance, and timeless beauty.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Collections</Link></li>
              <li><Link to="/products?category=wedding">Wedding Sarees</Link></li>
              <li><Link to="/products?category=designer">Designer Sarees</Link></li>
              <li><Link to="/#about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Customer Care</h4>
            <ul className="footer-links">
              <li><Link to="/#contact">Contact Us</Link></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchange</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-description">
              Subscribe to get updates on new collections and exclusive offers.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                <FiMail />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Saree Showcase. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919876543210"
        className="whatsapp-cta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle />
      </a>
    </footer>
  )
}

export default Footer

