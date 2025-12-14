import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Absolutely stunning saree! The quality is exceptional and the service was impeccable. I felt like royalty on my wedding day.',
      image: 'https://i.pravatar.cc/150?img=47',
    },
    {
      name: 'Anjali Patel',
      location: 'Delhi',
      rating: 5,
      text: 'The Banarasi saree I purchased exceeded my expectations. The intricate work is breathtaking. Highly recommended!',
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Meera Reddy',
      location: 'Bangalore',
      rating: 5,
      text: 'Premium quality fabric and beautiful design. The packaging was elegant and delivery was prompt. Worth every penny!',
      image: 'https://i.pravatar.cc/150?img=33',
    },
  ]

  return (
    <section className="testimonials-section section-padding">
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real experiences from our cherished customers
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="star-icon filled" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-location">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials



