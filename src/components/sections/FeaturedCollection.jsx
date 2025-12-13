import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { products } from '../../data/products'
import ProductCard from '../ProductCard'
import MagneticButton from '../MagneticButton'
import './FeaturedCollection.css'

const FeaturedCollection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const featuredProducts = products.slice(0, 6)

  return (
    <section ref={containerRef} className="featured-section section-padding">
      <div className="container-custom">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">
            Handpicked luxury sarees for your special occasions
          </p>
        </motion.div>

        <div className="featured-products-grid">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              style={{ y: index % 2 === 0 ? y : undefined }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="featured-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MagneticButton as={Link} to="/products" className="btn-premium">
            View All Products
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCollection

