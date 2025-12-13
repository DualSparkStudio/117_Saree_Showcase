import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiEdit, FiTrash2, FiImage } from 'react-icons/fi'
import { products } from '../../data/products'
import './AdminProducts.css'

const AdminProducts = () => {
  const [productList, setProductList] = useState(products)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProductList(productList.filter((p) => p.id !== id))
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsModalOpen(true)
  }

  return (
    <div className="admin-products">
      <div className="admin-header">
        <h1 className="admin-page-title">Products</h1>
        <button
          className="btn-premium"
          onClick={() => {
            setEditingProduct(null)
            setIsModalOpen(true)
          }}
        >
          <FiPlus /> Add Product
        </button>
      </div>

      <div className="products-table-wrapper">
        <table className="admin-products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
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
                <td>{product.category}</td>
                <td>
                  {product.discountedPrice ? (
                    <>
                      <span className="price-current">₹{product.discountedPrice.toLocaleString()}</span>
                      <span className="price-old">₹{product.price.toLocaleString()}</span>
                    </>
                  ) : (
                    <span>₹{product.price.toLocaleString()}</span>
                  )}
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
            ))}
          </tbody>
        </table>
      </div>

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
    onSave(formData)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
          <button onClick={onClose} className="modal-close">×</button>
        </div>

        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">Select Category</option>
                <option value="Silk">Silk</option>
                <option value="Banarasi">Banarasi</option>
                <option value="Kanjivaram">Kanjivaram</option>
                <option value="Designer">Designer</option>
                <option value="Wedding">Wedding</option>
                <option value="Party">Party</option>
              </select>
            </div>

            <div className="form-group">
              <label>Fabric</label>
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
              <label>Price (₹)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Discounted Price (₹)</label>
              <input
                type="number"
                value={formData.discountedPrice}
                onChange={(e) => setFormData({ ...formData, discountedPrice: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
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
            <button type="button" onClick={onClose} className="btn-premium-outline">
              Cancel
            </button>
            <button type="submit" className="btn-premium">
              {product ? 'Update' : 'Add'} Product
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default AdminProducts

