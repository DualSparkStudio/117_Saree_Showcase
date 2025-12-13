import React from 'react'
import { motion } from 'framer-motion'
import { FiEye, FiPackage } from 'react-icons/fi'
import './AdminOrders.css'

const AdminOrders = () => {
  const orders = [
    {
      id: '#ORD001',
      customer: 'Priya Sharma',
      email: 'priya@example.com',
      items: 2,
      amount: 45000,
      status: 'Delivered',
      date: '2024-01-15',
    },
    {
      id: '#ORD002',
      customer: 'Anjali Patel',
      email: 'anjali@example.com',
      items: 1,
      amount: 35000,
      status: 'Processing',
      date: '2024-01-16',
    },
    {
      id: '#ORD003',
      customer: 'Meera Reddy',
      email: 'meera@example.com',
      items: 3,
      amount: 55000,
      status: 'Shipped',
      date: '2024-01-17',
    },
    {
      id: '#ORD004',
      customer: 'Sneha Kumar',
      email: 'sneha@example.com',
      items: 1,
      amount: 28000,
      status: 'Delivered',
      date: '2024-01-18',
    },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'delivered'
      case 'processing':
        return 'processing'
      case 'shipped':
        return 'shipped'
      default:
        return 'processing'
    }
  }

  return (
    <div className="admin-orders">
      <div className="admin-header">
        <h1 className="admin-page-title">Orders</h1>
      </div>

      <div className="orders-table-wrapper">
        <table className="admin-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <td>
                  <strong>{order.id}</strong>
                </td>
                <td>{order.customer}</td>
                <td>{order.email}</td>
                <td>{order.items}</td>
                <td>₹{order.amount.toLocaleString()}</td>
                <td>
                  <span className={`status-badge ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view" title="View Details">
                      <FiEye />
                    </button>
                    <button className="action-btn package" title="Update Status">
                      <FiPackage />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminOrders

