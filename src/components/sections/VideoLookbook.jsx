import React from 'react'
import { motion } from 'framer-motion'
import './VideoLookbook.css'

const VideoLookbook = () => {
  return (
    <section className="video-lookbook-section">
      <div className="video-wrapper">
        <img
          src="https://images.pexels.com/photos/34107842/pexels-photo-34107842.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Indian Traditional Saree Lookbook"
          className="lookbook-image"
        />
        <div className="video-overlay"></div>
        <motion.div
          className="video-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="video-title">Experience Luxury</h2>
          <p className="video-subtitle">
            Watch our latest collection come to life
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoLookbook

