import React, { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('sareeWishlist')
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sareeWishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId))
  }

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId)
  }

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  }

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  )
}



