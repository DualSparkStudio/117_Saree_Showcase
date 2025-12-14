import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Preloader.css'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="preloader-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1
              className="preloader-logo"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Saree Showcase
            </motion.h1>
            <motion.div
              className="preloader-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Luxury Indian Ethnic Fashion
            </motion.div>
            <motion.div
              className="preloader-line"
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader



