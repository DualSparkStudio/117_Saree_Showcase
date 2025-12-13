import React from 'react'
import { motion } from 'framer-motion'
import './VideoLookbook.css'

const VideoLookbook = () => {
  return (
    <section className="video-lookbook-section">
      <div className="video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="lookbook-video"
          poster="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3044158/3044158-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
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

