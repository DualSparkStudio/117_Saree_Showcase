import React from 'react'
import { motion } from 'framer-motion'
import './Instagram.css'

const Instagram = () => {
  const instagramPosts = [
    {
      image: 'https://images.pexels.com/photos/34481840/pexels-photo-34481840.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      id: 1,
    },
    {
      image: 'https://images.pexels.com/photos/34107842/pexels-photo-34107842.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      id: 2,
    },
    {
      image: 'https://images.pexels.com/photos/33350574/pexels-photo-33350574.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      id: 3,
    },
    {
      image: 'https://images.pexels.com/photos/34673465/pexels-photo-34673465.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      id: 4,
    },
    {
      image: 'https://images.pexels.com/photos/33729217/pexels-photo-33729217.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      id: 5,
    },
    {
      image: 'https://images.pexels.com/photos/34481840/pexels-photo-34481840.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      id: 6,
    },
  ]

  return (
    <section className="instagram-section section-padding">
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Follow Our Journey</h2>
          <p className="section-subtitle">
            Tag us @sareeshowcase to be featured
          </p>
        </motion.div>

        <div className="instagram-grid">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="instagram-image"
                loading="lazy"
              />
              <div className="instagram-overlay">
                <span className="instagram-icon">📷</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instagram

