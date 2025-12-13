import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHeart, FiShoppingBag, FiMinus, FiPlus, FiArrowLeft, FiZoomIn } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { getProductById } from '../data/products'
import MagneticButton from '../components/MagneticButton'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container-custom">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <button onClick={() => navigate('/products')} className="btn-premium">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    )
  }

  const inWishlist = isInWishlist(product.id)
  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0

  const images = product.images || [product.image]

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  return (
    <div className="product-detail-page">
      <div className="container-custom">
        <button onClick={() => navigate(-1)} className="back-button">
          <FiArrowLeft /> Back
        </button>

        <div className="product-detail-content">
          <div className="product-images">
            <div className="product-main-image">
              <div className="image-zoom-container">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="main-image"
                  onClick={(e) => {
                    if (e.target.style.transform === 'scale(2)') {
                      e.target.style.transform = 'scale(1)'
                      e.target.style.cursor = 'zoom-in'
                    } else {
                      e.target.style.transform = 'scale(2)'
                      e.target.style.cursor = 'zoom-out'
                    }
                  }}
                />
                <div className="zoom-hint">
                  <FiZoomIn /> Click to zoom
                </div>
              </div>
            </div>
            {images.length > 1 && (
              <div className="product-thumbnails">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <div className="product-badges">
              {product.isNew && <span className="badge new">New</span>}
              {discountPercentage > 0 && (
                <span className="badge discount">-{discountPercentage}% OFF</span>
              )}
            </div>

            <h1 className="product-title">{product.name}</h1>
            <p className="product-category">{product.category}</p>

            <div className="product-price">
              {product.discountedPrice ? (
                <>
                  <span className="price-current">₹{product.discountedPrice.toLocaleString()}</span>
                  <span className="price-old">₹{product.price.toLocaleString()}</span>
                </>
              ) : (
                <span className="price-current">₹{product.price.toLocaleString()}</span>
              )}
            </div>

            <div className="product-details">
              <div className="detail-item">
                <strong>Fabric:</strong> {product.fabric}
              </div>
              <div className="detail-item">
                <strong>Occasion:</strong> {product.occasion}
              </div>
              {product.inStock ? (
                <div className="detail-item in-stock">
                  <strong>Availability:</strong> In Stock
                </div>
              ) : (
                <div className="detail-item out-of-stock">
                  <strong>Availability:</strong> Out of Stock
                </div>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="quantity-button"
                >
                  <FiMinus />
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="quantity-button"
                >
                  <FiPlus />
                </button>
              </div>

              <MagneticButton
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="btn-premium add-to-cart-btn"
              >
                <FiShoppingBag /> Add to Cart
              </MagneticButton>

              <MagneticButton
                onClick={() => navigate('/cart')}
                disabled={!product.inStock}
                className="btn-premium buy-now-btn"
              >
                Buy Now
              </MagneticButton>

              <button
                onClick={handleWishlistToggle}
                className={`wishlist-button ${inWishlist ? 'active' : ''}`}
                title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <FiHeart className={inWishlist ? 'filled' : ''} />
              </button>
            </div>

            <div className="product-features">
              <div className="feature-item">
                <strong>✓ Free Shipping</strong> on orders above ₹5000
              </div>
              <div className="feature-item">
                <strong>✓ Easy Returns</strong> within 7 days
              </div>
              <div className="feature-item">
                <strong>✓ Secure Payment</strong> via Razorpay
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

