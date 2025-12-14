import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/ProductCard'
import MagneticButton from '../components/MagneticButton'
import './Wishlist.css'

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist()

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container-custom">
          <div className="empty-wishlist">
            <FiHeart className="empty-wishlist-icon" />
            <h2>Your wishlist is empty</h2>
            <p>Save your favorite sarees for later</p>
            <MagneticButton as={Link} to="/products" className="btn-premium">
              Start Shopping
            </MagneticButton>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="wishlist-page">
      <div className="container-custom">
        <h1 className="wishlist-title">My Wishlist</h1>
        <p className="wishlist-subtitle">{wishlist.length} items saved</p>

        <div className="wishlist-grid">
          {wishlist.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist



