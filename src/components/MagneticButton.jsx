import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './MagneticButton.css'

const MotionLink = motion(Link)

const MagneticButton = ({ children, className = '', as, ...props }) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)'
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const motionProps = {
    ref: buttonRef,
    className: `magnetic-button ${className}`,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  // If 'as' prop is Link, render MotionLink, otherwise render motion.button
  if (as === Link) {
    return (
      <MotionLink {...motionProps} {...props}>
        {children}
      </MotionLink>
    )
  }

  return (
    <motion.button {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}

export default MagneticButton


