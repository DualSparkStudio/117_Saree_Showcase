import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import MagneticButton from '../MagneticButton'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Split text animation
    if (titleRef.current) {
      const words = titleRef.current.textContent.split(' ')
      titleRef.current.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(' ')

      gsap.fromTo(
        '.word',
        {
          opacity: 0,
          y: 50,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      )
    }

    // Subtitle and button animation
    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    }).from(
      buttonRef.current,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '-=0.5'
    )
  }, [])

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img
          src="https://images.pexels.com/photos/9419149/pexels-photo-9419149.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Traditional Indian Saree"
          className="hero-image"
        />
      </div>

      <div className="hero-content container-custom">
        <h1 ref={titleRef} className="hero-title">
          Timeless Elegance Woven in Silk
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Discover our exquisite collection of premium Indian sarees,
          crafted with love and tradition for your special moments.
        </p>
        <div ref={buttonRef} className="hero-cta">
          <MagneticButton as={Link} to="/products" className="btn-premium">
            Explore Collection
          </MagneticButton>
          <MagneticButton
            as={Link}
            to="/products?category=wedding"
            className="btn-premium btn-premium-outline"
          >
            Wedding Sarees
          </MagneticButton>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero

