import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiShoppingBag, FiHeart, FiSearch } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { name: 'Silk Sarees', path: '/products?category=silk' },
    { name: 'Banarasi', path: '/products?category=banarasi' },
    { name: 'Kanjivaram', path: '/products?category=kanjivaram' },
    { name: 'Designer Sarees', path: '/products?category=designer' },
    { name: 'Wedding Sarees', path: '/products?category=wedding' },
    { name: 'Party Wear', path: '/products?category=party' },
  ]

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container container-custom">
        <Link to="/" className="navbar-logo">
          <h2>Saree Showcase</h2>
        </Link>

        <div className="navbar-links">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div
            className="navbar-link categories-link"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            Categories
            {isMegaMenuOpen && (
              <motion.div
                className="mega-menu"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.path}
                    className="mega-menu-item"
                  >
                    {category.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <div className="navbar-actions">
          <Link to="/products" className="navbar-icon">
            <FiSearch />
          </Link>
          <Link to="/wishlist" className="navbar-icon">
            <FiHeart />
          </Link>
          <Link to="/cart" className="navbar-icon cart-icon">
            <FiShoppingBag />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>
          <button
            className="navbar-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="mobile-menu-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <div className="mobile-menu-categories">
          <div className="mobile-menu-category-title">Categories</div>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar

