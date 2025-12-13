import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiEdit, FiTrash2, FiSearch, FiFilter, FiDownload, FiCheckSquare, FiSquare, FiX } from 'react-icons/fi'
import { products, categories } from '../../data/products'
import './AdminProducts.css'

const AdminProducts = () => {
  const [productList, setProductList] = useState(products)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [stockFilter, setStockFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const itemsPerPage = 10

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return productList.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
      const matchesStock = stockFilter === 'all' || 
                          (stockFilter === 'inStock' && product.inStock) ||
                          (stockFilter === 'outOfStock' && !product.inStock)
      return matchesSearch && matchesCategory && matchesStock
    })
  }, [productList, searchQuery, categoryFilter, stockFilter])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredProducts, currentPage, itemsPerPage])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProductList(productList.filter((p) => p.id !== id))
      setSelectedProducts(selectedProducts.filter((pid) => pid !== id))
    }
  }

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedProducts.length} products?`)) {
      setProductList(productList.filter((p) => !selectedProducts.includes(p.id)))
      setSelectedProducts([])
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsModalOpen(true)
  }

  const handleSelectAll = () => {
    if (selectedProducts.length === paginatedProducts.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(paginatedProducts.map((p) => p.id))
    }
  }

  const handleSelectProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((pid) => pid !== id))
    } else {
      setSelectedProducts([...selectedProducts, id])
    }
  }

  const handleExport = () => {
    // Simple CSV export
    const headers = ['ID', 'Name', 'Category', 'Price', 'Discounted Price', 'Stock', 'Fabric', 'Occasion']
    const csvContent = [
      headers.join(','),
      ...filteredProducts.map(p => [
        p.id,
        `"${p.name}"`,
        p.category,
        p.price,
        p.discountedPrice || '',
        p.inStock ? 'Yes' : 'No',
        `"${p.fabric}"`,
        p.occasion
      ].join(','))
    ].join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'products.csv'
    a.click()
  }

  const clearFilters = () => {
    setSearchQuery('')
    setCategoryFilter('all')
    setStockFilter('all')
    setCurrentPage(1)
  }

  return (
    <div className="admin-products">
      <div className="products-page-header">
        <div>
          <h1 className="admin-page-title">Products</h1>
          <p className="admin-page-subtitle">Manage your product catalog ({filteredProducts.length} products)</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={handleExport}>
            <FiDownload /> Export
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              setEditingProduct(null)
              setIsModalOpen(true)
            }}
          >
            <FiPlus /> Add Product
          </button>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="products-filters-bar">
        <div className="search-bar">
          <FiSearch />
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              <FiX />
            </button>
          )}
        </div>
        <div className="filter-buttons">
          <button 
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter /> Filters
          </button>
          {(categoryFilter !== 'all' || stockFilter !== 'all' || searchQuery) && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <motion.div 
          className="advanced-filters"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="filter-group">
            <label>Category</label>
            <select value={categoryFilter} onChange={(e) => {
              setCategoryFilter(e.target.value)
              setCurrentPage(1)
            }}>
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Stock Status</label>
            <select value={stockFilter} onChange={(e) => {
              setStockFilter(e.target.value)
              setCurrentPage(1)
            }}>
              <option value="all">All</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>
          </div>
        </motion.div>
      )}

      {/* Bulk Actions */}
      {selectedProducts.length > 0 && (
        <div className="bulk-actions-bar">
          <span>{selectedProducts.length} product(s) selected</span>
          <div className="bulk-actions">
            <button className="btn-danger" onClick={handleBulkDelete}>
              <FiTrash2 /> Delete Selected
            </button>
            <button className="btn-secondary" onClick={() => setSelectedProducts([])}>
              Clear Selection
            </button>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="products-table-wrapper">
        <table className="admin-products-table">
          <thead>
            <tr>
              <th className="checkbox-col">
                <button className="checkbox-header" onClick={handleSelectAll}>
                  {selectedProducts.length === paginatedProducts.length && paginatedProducts.length > 0 ? (
                    <FiCheckSquare />
                  ) : (
                    <FiSquare />
                  )}
                </button>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className={selectedProducts.includes(product.id) ? 'selected' : ''}
                >
                  <td className="checkbox-col">
                    <button 
                      className="product-checkbox"
                      onClick={() => handleSelectProduct(product.id)}
                    >
                      {selectedProducts.includes(product.id) ? (
                        <FiCheckSquare />
                      ) : (
                        <FiSquare />
                      )}
                    </button>
                  </td>
                  <td>
                    <div className="product-image-cell">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </td>
                  <td>
                    <div className="product-name-cell">
                      <strong>{product.name}</strong>
                      {product.isNew && <span className="badge-small new">New</span>}
                    </div>
                  </td>
                  <td>
                    <span className="category-tag">{product.category}</span>
                  </td>
                  <td>
                    <div className="price-cell">
                      {product.discountedPrice ? (
                        <>
                          <span className="price-current">₹{product.discountedPrice.toLocaleString()}</span>
                          <span className="price-old">₹{product.price.toLocaleString()}</span>
                        </>
                      ) : (
                        <span className="price-current">₹{product.price.toLocaleString()}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={product.inStock ? 'stock-badge in-stock' : 'stock-badge out-of-stock'}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="action-btn edit"
                        onClick={() => handleEdit(product)}
                        title="Edit"
                      >
                        <FiEdit />
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => handleDelete(product.id)}
                        title="Delete"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-products">
                  <p>No products found. Try adjusting your filters.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="pagination-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Product Modal */}
      {isModalOpen && (
        <ProductModal
          product={editingProduct}
          onClose={() => setIsModalOpen(false)}
          onSave={(productData) => {
            if (editingProduct) {
              setProductList(
                productList.map((p) => (p.id === editingProduct.id ? { ...p, ...productData } : p))
              )
            } else {
              setProductList([
                ...productList,
                { ...productData, id: Date.now() },
              ])
            }
            setIsModalOpen(false)
          }}
        />
      )}
    </div>
  )
}

const ProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    product || {
      name: '',
      category: '',
      price: '',
      discountedPrice: '',
      fabric: '',
      occasion: '',
      inStock: true,
      isNew: false,
      description: '',
      image: '',
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      ...formData,
      price: Number(formData.price),
      discountedPrice: formData.discountedPrice ? Number(formData.discountedPrice) : null,
    }
    onSave(data)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
          <button onClick={onClose} className="modal-close">
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label>Product Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Fabric *</label>
              <input
                type="text"
                value={formData.fabric}
                onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price (₹) *</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                min="0"
              />
            </div>

            <div className="form-group">
              <label>Discounted Price (₹)</label>
              <input
                type="number"
                value={formData.discountedPrice}
                onChange={(e) => setFormData({ ...formData, discountedPrice: e.target.value })}
                min="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image URL *</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="4"
              required
            />
          </div>

          <div className="form-checkboxes">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.inStock}
                onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
              />
              In Stock
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.isNew}
                onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
              />
              New Arrival
            </label>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {product ? 'Update' : 'Add'} Product
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default AdminProducts
