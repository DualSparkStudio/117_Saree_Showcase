import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticButton from '../components/MagneticButton'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero section-padding">
        <div className="container-custom">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-title">About Saree Showcase</h1>
            <p className="about-subtitle">
              Celebrating the timeless elegance of Indian tradition
            </p>
          </motion.div>
        </div>
      </div>

      <section className="about-story section-padding">
        <div className="container-custom">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Story</h2>
              <p>
                At Saree Showcase, we believe that every saree tells a story. Founded with a passion
                for preserving and celebrating India's rich textile heritage, we curate an exquisite
                collection of premium sarees that embody tradition, elegance, and timeless beauty.
              </p>
              <p>
                Our journey began with a simple vision: to make authentic, high-quality Indian sarees
                accessible to women who appreciate the artistry and craftsmanship that goes into each
                piece. From the intricate zari work of Banarasi sarees to the vibrant colors of
                Kanjivaram silks, every saree in our collection is carefully selected to meet the
                highest standards of quality and authenticity.
              </p>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/9419149/pexels-photo-9419149.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Traditional Indian Saree"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values section-padding">
        <div className="container-custom">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              What drives us to deliver excellence
            </p>
          </motion.div>

          <div className="values-grid">
            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="value-icon">🎨</div>
              <h3>Authenticity</h3>
              <p>
                We source directly from traditional weavers and artisans, ensuring every saree
                is authentic and supports local craftsmanship.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>
                Each saree undergoes rigorous quality checks to ensure premium fabric, perfect
                stitching, and flawless finish that lasts generations.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="value-icon">❤️</div>
              <h3>Heritage</h3>
              <p>
                We honor and preserve India's rich textile traditions, bringing you sarees that
                embody centuries of cultural heritage and artistry.
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>
                From selection to delivery, we strive for excellence in every aspect, ensuring
                your experience with us is nothing short of exceptional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-cta section-padding">
        <div className="container-custom">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Find Your Perfect Saree?</h2>
            <p>Explore our exclusive collection of premium Indian sarees</p>
            <MagneticButton as={Link} to="/products" className="btn-premium">
              Shop Now
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About


