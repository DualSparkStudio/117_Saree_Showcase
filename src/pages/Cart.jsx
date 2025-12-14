import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMinus, FiPlus, FiX, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import MagneticButton from '../components/MagneticButton'
import './Cart.css'

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container-custom">
          <div className="empty-cart">
            <FiShoppingBag className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <MagneticButton as={Link} to="/products" className="btn-premium">
              Continue Shopping
            </MagneticButton>
          </div>
        </div>
      </div>
    )
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 5000 ? 0 : 500
  const total = subtotal + shipping

  return (
    <div className="cart-page">
      <div className="container-custom">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="cart-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Link to={`/product/${item.id}`} className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="cart-item-info">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="cart-item-name">{item.name}</h3>
                  </Link>
                  <p className="cart-item-category">{item.category}</p>
                  <div className="cart-item-price">
                    ₹{(item.discountedPrice || item.price).toLocaleString()}
                  </div>
                </div>

                <div className="cart-item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-button"
                  >
                    <FiMinus />
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-button"
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="cart-item-total">
                  ₹{((item.discountedPrice || item.price) * item.quantity).toLocaleString()}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-button"
                  title="Remove item"
                >
                  <FiX />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? (
                  <span className="free-shipping">Free</span>
                ) : (
                  `₹${shipping.toLocaleString()}`
                )}
              </span>
            </div>

            {subtotal < 5000 && (
              <div className="shipping-note">
                Add ₹{(5000 - subtotal).toLocaleString()} more for free shipping
              </div>
            )}

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <MagneticButton
              onClick={() => navigate('/checkout')}
              className="btn-premium checkout-button"
            >
              Proceed to Checkout
            </MagneticButton>

            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart



