import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MagneticButton from '../MagneticButton'
import './Offers.css'

const Offers = () => {
  const offers = [
    {
      title: 'Wedding Collection',
      subtitle: 'Up to 30% OFF',
      description: 'Exclusive discounts on premium wedding sarees',
      image: 'https://images.unsplash.com/photo-1566479179817-7d8b3e1e0c94?w=1200&q=80',
      link: '/products?category=wedding',
      badge: 'Limited Time',
    },
    {
      title: 'Clearance Sale',
      subtitle: 'Up to 50% OFF',
      description: 'Last chance to grab your favorite designs',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80',
      link: '/products',
      badge: 'Sale',
    },
  ]

  return (
    <section className="offers-section section-padding">
      <div className="container-custom">
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="offer-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="offer-image-wrapper">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="offer-image"
                  loading="lazy"
                />
                <div className="offer-overlay"></div>
                {offer.badge && (
                  <span className="offer-badge">{offer.badge}</span>
                )}
              </div>
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <h4 className="offer-subtitle">{offer.subtitle}</h4>
                <p className="offer-description">{offer.description}</p>
                <MagneticButton as={Link} to={offer.link} className="btn-premium">
                  Shop Now
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers

