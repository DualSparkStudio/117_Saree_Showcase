import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiFilter, FiX, FiGrid, FiList } from 'react-icons/fi'
import { products, getProductsByCategory } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Products.css'

const Products = () => {
  const [searchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
    fabric: '',
    occasion: '',
    sort: 'default',
  })

  const categories = ['Silk', 'Banarasi', 'Kanjivaram', 'Designer', 'Wedding', 'Party']
  const fabrics = ['Pure Silk', 'Banarasi Silk', 'Kanjivaram Silk', 'Georgette']
  const occasions = ['Wedding', 'Party', 'Festival', 'Formal']
  const priceRanges = [
    { label: 'Under ₹20,000', value: '0-20000' },
    { label: '₹20,000 - ₹40,000', value: '20000-40000' },
    { label: '₹40,000 - ₹60,000', value: '40000-60000' },
    { label: 'Above ₹60,000', value: '60000-999999' },
  ]

  const filteredProducts = useMemo(() => {
    let result = products

    // Category filter
    if (filters.category) {
      result = getProductsByCategory(filters.category)
    }

    // Price filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      result = result.filter((p) => {
        const price = p.discountedPrice || p.price
        return price >= min && price <= max
      })
    }

    // Fabric filter
    if (filters.fabric) {
      result = result.filter((p) => p.fabric === filters.fabric)
    }

    // Occasion filter
    if (filters.occasion) {
      result = result.filter((p) => p.occasion === filters.occasion)
    }

    // Sort
    if (filters.sort === 'price-low') {
      result = [...result].sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price))
    } else if (filters.sort === 'price-high') {
      result = [...result].sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price))
    } else if (filters.sort === 'newest') {
      result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    }

    return result
  }, [filters])

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      fabric: '',
      occasion: '',
      sort: 'default',
    })
  }

  return (
    <div className="products-page">
      <div className="products-header section-padding">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="products-subtitle"
          >
            Discover exquisite sarees for every occasion
          </motion.p>
        </div>
      </div>

      <div className="products-container">
        <div className="container-custom">
          <div className="products-toolbar">
            <button
              className="filter-toggle"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FiFilter /> Filters
            </button>
            <div className="view-toggle">
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
              >
                <FiGrid />
              </button>
              <button
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                <FiList />
              </button>
            </div>
            <div className="sort-select">
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
            <div className="products-count">
              {filteredProducts.length} Products
            </div>
          </div>

          <div className="products-content">
            <motion.aside
              className={`products-filters ${isFilterOpen ? 'open' : ''}`}
              initial={{ x: '-100%' }}
              animate={{ x: isFilterOpen ? 0 : '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="filters-header">
                <h3>Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="close-filters">
                  <FiX />
                </button>
              </div>

              <div className="filter-group">
                <h4>Category</h4>
                {categories.map((cat) => (
                  <label key={cat} className="filter-checkbox">
                    <input
                      type="radio"
                      name="category"
                      value={cat.toLowerCase()}
                      checked={filters.category === cat.toLowerCase()}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              <div className="filter-group">
                <h4>Price Range</h4>
                {priceRanges.map((range) => (
                  <label key={range.value} className="filter-checkbox">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range.value}
                      checked={filters.priceRange === range.value}
                      onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              <div className="filter-group">
                <h4>Fabric</h4>
                {fabrics.map((fabric) => (
                  <label key={fabric} className="filter-checkbox">
                    <input
                      type="radio"
                      name="fabric"
                      value={fabric}
                      checked={filters.fabric === fabric}
                      onChange={(e) => handleFilterChange('fabric', e.target.value)}
                    />
                    <span>{fabric}</span>
                  </label>
                ))}
              </div>

              <div className="filter-group">
                <h4>Occasion</h4>
                {occasions.map((occasion) => (
                  <label key={occasion} className="filter-checkbox">
                    <input
                      type="radio"
                      name="occasion"
                      value={occasion}
                      checked={filters.occasion === occasion}
                      onChange={(e) => handleFilterChange('occasion', e.target.value)}
                    />
                    <span>{occasion}</span>
                  </label>
                ))}
              </div>

              <button className="clear-filters" onClick={clearFilters}>
                Clear All Filters
              </button>
            </motion.aside>

            <div className="products-grid-wrapper">
              {filteredProducts.length > 0 ? (
                <div className={`products-grid ${viewMode}`}>
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

