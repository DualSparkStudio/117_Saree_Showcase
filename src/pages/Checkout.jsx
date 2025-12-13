import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import MagneticButton from '../components/MagneticButton'
import './Checkout.css'

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
  })
  const [coupon, setCoupon] = useState('')
  const [discount, setDiscount] = useState(0)

  if (cart.length === 0) {
    navigate('/cart')
    return null
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 5000 ? 0 : 500
  const total = subtotal + shipping - discount

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const applyCoupon = () => {
    // Coupon logic
    const coupons = {
      WELCOME10: 0.1,
      SAVE20: 0.2,
      LUXURY30: 0.3,
    }
    const couponCode = coupon.toUpperCase()
    if (coupons[couponCode]) {
      setDiscount(subtotal * coupons[couponCode])
      alert(`Coupon applied! You saved ₹${(subtotal * coupons[couponCode]).toLocaleString()}`)
    } else {
      alert('Invalid coupon code')
    }
  }

  const handlePayment = () => {
    // Razorpay integration structure
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key
      amount: total * 100, // Amount in paise
      currency: 'INR',
      name: 'Saree Showcase',
      description: 'Order Payment',
      image: '/logo.png',
      handler: function (response) {
        // Payment success handler
        alert('Payment Successful!')
        clearCart()
        navigate('/order-success', { state: { orderId: response.razorpay_payment_id } })
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: '#6D1B2D',
      },
      modal: {
        ondismiss: function () {
          alert('Payment cancelled')
        },
      },
    }

    // For now, simulate payment
    if (window.confirm('Proceed with payment?')) {
      // In production, use: const razorpay = new window.Razorpay(options); razorpay.open();
      alert('Payment integration ready. Configure Razorpay key to enable payments.')
    }
  }

  return (
    <div className="checkout-page">
      <div className="container-custom">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <h2 className="section-title">Shipping Information</h2>
            <form className="checkout-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </form>

            <div className="coupon-section">
              <h3>Have a coupon?</h3>
              <div className="coupon-input-group">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button type="button" onClick={applyCoupon} className="btn-premium-outline">
                  Apply
                </button>
              </div>
              {discount > 0 && (
                <div className="coupon-applied">
                  Coupon applied! You saved ₹{discount.toLocaleString()}
                </div>
              )}
            </div>
          </div>

          <div className="checkout-summary">
            <h2 className="section-title">Order Summary</h2>

            <div className="order-items">
              {cart.map((item) => (
                <div key={item.id} className="order-item">
                  <div className="order-item-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="order-item-price">
                    ₹{((item.discountedPrice || item.price) * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-details">
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
              {discount > 0 && (
                <div className="summary-row discount-row">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <MagneticButton
              onClick={handlePayment}
              className="btn-premium checkout-button"
            >
              Proceed to Payment
            </MagneticButton>

            <p className="secure-payment-note">
              🔒 Secure payment powered by Razorpay
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
