import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Categories.css'

const Categories = () => {
  const categories = [
    {
      name: 'Silk Sarees',
      image: 'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      path: '/products?category=silk',
    },
    {
      name: 'Banarasi',
      image: 'https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      path: '/products?category=banarasi',
    },
    {
      name: 'Kanjivaram',
      image: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      path: '/products?category=kanjivaram',
    },
    {
      name: 'Designer Sarees',
      image: 'https://images.pexels.com/photos/9418783/pexels-photo-9418783.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      path: '/products?category=designer',
    },
    {
      name: 'Wedding Sarees',
      image: 'https://images.pexels.com/photos/35108779/pexels-photo-35108779.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      path: '/products?category=wedding',
    },
    {
      name: 'Party Wear',
      image: 'https://images.pexels.com/photos/35108861/pexels-photo-35108861.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      path: '/products?category=party',
    },
  ]

  return (
    <section className="categories-section section-padding">
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Collections</h2>
          <p className="section-subtitle">
            Explore our curated selection of premium sarees
          </p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="category-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Link to={category.path} className="category-link">
                <div className="category-image-wrapper">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image"
                    loading="lazy"
                  />
                  <div className="category-overlay">
                    <h3 className="category-name">{category.name}</h3>
                    <span className="category-arrow">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

