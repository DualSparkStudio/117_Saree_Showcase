import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiEye, FiPackage, FiSearch, FiFilter, FiDownload, FiX, FiChevronDown } from 'react-icons/fi'
import './AdminOrders.css'

const AdminOrders = () => {
  const [orders] = useState([
    {
      id: '#ORD001',
      customer: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 98765 43210',
      items: [
        { name: 'Royal Banarasi Silk Saree', quantity: 1, price: 45000 },
        { name: 'Designer Blouse Piece', quantity: 1, price: 5000 },
      ],
      total: 50000,
      status: 'Delivered',
      date: '2024-01-15',
      shippingAddress: '123 Main Street, Mumbai, Maharashtra 400001',
      paymentMethod: 'Razorpay',
    },
    {
      id: '#ORD002',
      customer: 'Anjali Patel',
      email: 'anjali@example.com',
      phone: '+91 98765 43211',
      items: [
        { name: 'Designer Kanjivaram Saree', quantity: 1, price: 35000 },
      ],
      total: 35000,
      status: 'Processing',
      date: '2024-01-16',
      shippingAddress: '456 Park Avenue, Delhi, NCR 110001',
      paymentMethod: 'Razorpay',
    },
    {
      id: '#ORD003',
      customer: 'Meera Reddy',
      email: 'meera@example.com',
      phone: '+91 98765 43212',
      items: [
        { name: 'Wedding Collection Saree', quantity: 1, price: 55000 },
      ],
      total: 55000,
      status: 'Shipped',
      date: '2024-01-17',
      shippingAddress: '789 Garden Road, Bangalore, Karnataka 560001',
      paymentMethod: 'Razorpay',
    },
    {
      id: '#ORD004',
      customer: 'Sneha Kumar',
      email: 'sneha@example.com',
      phone: '+91 98765 43213',
      items: [
        { name: 'Party Wear Saree', quantity: 1, price: 28000 },
      ],
      total: 28000,
      status: 'Delivered',
      date: '2024-01-18',
      shippingAddress: '321 Ocean Drive, Chennai, Tamil Nadu 600001',
      paymentMethod: 'Razorpay',
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = 
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.email.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase()
      return matchesSearch && matchesStatus
    })
  }, [orders, searchQuery, statusFilter])

  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredOrders.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredOrders, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)

  const handleViewDetails = (order) => {
    setSelectedOrder(order)
    setIsDetailsModalOpen(true)
  }

  const handleStatusUpdate = (orderId, newStatus) => {
    // Handle status update logic here
    console.log(`Updating order ${orderId} to ${newStatus}`)
    alert(`Order status updated to ${newStatus}`)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'delivered'
      case 'processing':
        return 'processing'
      case 'shipped':
        return 'shipped'
      case 'cancelled':
        return 'cancelled'
      default:
        return 'processing'
    }
  }

  const statusOptions = ['Processing', 'Shipped', 'Delivered', 'Cancelled']

  return (
    <div className="admin-orders">
      <div className="orders-page-header">
        <div>
          <h1 className="admin-page-title">Orders</h1>
          <p className="admin-page-subtitle">Manage customer orders ({filteredOrders.length} orders)</p>
        </div>
        <button className="btn-secondary">
          <FiDownload /> Export
        </button>
      </div>

      {/* Filters and Search */}
      <div className="orders-filters-bar">
        <div className="search-bar">
          <FiSearch />
          <input
            type="text"
            placeholder="Search by order ID, customer name, or email..."
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
        <div className="filter-group">
          <label>Status</label>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value)
              setCurrentPage(1)
            }}
          >
            <option value="all">All Status</option>
            {statusOptions.map((status) => (
              <option key={status} value={status.toLowerCase()}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table-wrapper">
        <table className="admin-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.length > 0 ? (
              paginatedOrders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <td>
                    <strong className="order-id">{order.id}</strong>
                  </td>
                  <td>
                    <div className="customer-cell">
                      <div className="customer-name">{order.customer}</div>
                      <div className="customer-email">{order.email}</div>
                    </div>
                  </td>
                  <td>
                    <span className="items-count">{order.items.length} item(s)</span>
                  </td>
                  <td>
                    <strong className="order-amount">₹{order.total.toLocaleString()}</strong>
                  </td>
                  <td>
                    <div className="status-cell">
                      <span className={`status-badge ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="order-date">{order.date}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="action-btn view"
                        onClick={() => handleViewDetails(order)}
                        title="View Details"
                      >
                        <FiEye />
                      </button>
                      <div className="status-dropdown">
                        <button
                          className="action-btn status"
                          title="Update Status"
                        >
                          <FiChevronDown />
                        </button>
                        <div className="status-menu">
                          {statusOptions.map((status) => (
                            <button
                              key={status}
                              onClick={() => handleStatusUpdate(order.id, status)}
                              disabled={order.status === status}
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-orders">
                  <p>No orders found. Try adjusting your filters.</p>
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

      {/* Order Details Modal */}
      {isDetailsModalOpen && selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setIsDetailsModalOpen(false)}
          onStatusUpdate={handleStatusUpdate}
        />
      )}
    </div>
  )
}

const OrderDetailsModal = ({ order, onClose, onStatusUpdate }) => {
  const [statusMenuOpen, setStatusMenuOpen] = useState(false)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="order-details-modal"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Order Details - {order.id}</h2>
          <button onClick={onClose} className="modal-close">
            <FiX />
          </button>
        </div>

        <div className="order-details-content">
          <div className="order-section">
            <h3>Customer Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Name</label>
                <span>{order.customer}</span>
              </div>
              <div className="info-item">
                <label>Email</label>
                <span>{order.email}</span>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <span>{order.phone}</span>
              </div>
              <div className="info-item">
                <label>Payment Method</label>
                <span>{order.paymentMethod}</span>
              </div>
            </div>
          </div>

          <div className="order-section">
            <h3>Shipping Address</h3>
            <p className="shipping-address">{order.shippingAddress}</p>
          </div>

          <div className="order-section">
            <div className="section-header-inline">
              <h3>Order Items</h3>
              <div className="status-update">
                <label>Status:</label>
                <div className="status-dropdown">
                  <button
                    className="status-badge-large processing"
                    onClick={() => setStatusMenuOpen(!statusMenuOpen)}
                  >
                    {order.status}
                    <FiChevronDown />
                  </button>
                  {statusMenuOpen && (
                    <div className="status-menu">
                      {['Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
                        <button
                          key={status}
                          onClick={() => {
                            onStatusUpdate(order.id, status)
                            setStatusMenuOpen(false)
                          }}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="order-items-list">
              {order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <div className="item-details">
                    <strong>{item.name}</strong>
                    <span>Quantity: {item.quantity}</span>
                  </div>
                  <div className="item-price">₹{item.price.toLocaleString()}</div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <strong>Total: ₹{order.total.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminOrders
