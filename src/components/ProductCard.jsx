import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { FiHeart, FiShoppingBag, FiEye } from 'react-icons/fi'
import './ProductCard.css'

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  const handleWishlistToggle = (e) => {
    e.preventDefault()
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0

  return (
    <motion.div
      className="product-card premium-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-card-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
            loading="lazy"
          />
          {product.isNew && <span className="product-badge new">New</span>}
          {discountPercentage > 0 && (
            <span className="product-badge discount">-{discountPercentage}%</span>
          )}
          {!product.inStock && (
            <div className="product-overlay out-of-stock">
              <span>Out of Stock</span>
            </div>
          )}
          <div className="product-card-overlay">
            <motion.button
              className="product-card-action"
              onClick={handleWishlistToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiHeart className={inWishlist ? 'filled' : ''} />
            </motion.button>
            <motion.button
              className="product-card-action"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiShoppingBag />
            </motion.button>
            <Link to={`/product/${product.id}`} className="product-card-action">
              <FiEye />
            </Link>
          </div>
        </div>
        <div className="product-card-content">
          <h4 className="product-card-name">{product.name}</h4>
          <p className="product-card-category">{product.category}</p>
          <div className="product-card-price">
            {product.discountedPrice ? (
              <>
                <span className="price-current">₹{product.discountedPrice.toLocaleString()}</span>
                <span className="price-old">₹{product.price.toLocaleString()}</span>
              </>
            ) : (
              <span className="price-current">₹{product.price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard

