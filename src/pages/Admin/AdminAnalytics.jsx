import React from 'react'
import { motion } from 'framer-motion'
import { FiDollarSign, FiShoppingCart, FiPackage, FiUsers } from 'react-icons/fi'
import './AdminAnalytics.css'

const AdminAnalytics = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹12,45,000',
      change: '+12.5%',
      icon: FiDollarSign,
      color: 'gold',
    },
    {
      title: 'Total Orders',
      value: '234',
      change: '+8.2%',
      icon: FiShoppingCart,
      color: 'maroon',
    },
    {
      title: 'Products',
      value: '156',
      change: '+5',
      icon: FiPackage,
      color: 'gold',
    },
    {
      title: 'Customers',
      value: '1,234',
      change: '+15.3%',
      icon: FiUsers,
      color: 'maroon',
    },
  ]

  const recentOrders = [
    { id: '#ORD001', customer: 'Priya Sharma', amount: '₹45,000', status: 'Delivered' },
    { id: '#ORD002', customer: 'Anjali Patel', amount: '₹35,000', status: 'Processing' },
    { id: '#ORD003', customer: 'Meera Reddy', amount: '₹55,000', status: 'Shipped' },
    { id: '#ORD004', customer: 'Sneha Kumar', amount: '₹28,000', status: 'Delivered' },
  ]

  return (
    <div className="admin-analytics">
      <h1 className="admin-page-title">Dashboard</h1>

      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              className={`stat-card ${stat.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="stat-icon">
                <Icon />
              </div>
              <div className="stat-content">
                <h3 className="stat-title">{stat.title}</h3>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-change positive">{stat.change}</div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="admin-section">
        <h2 className="section-title">Recent Orders</h2>
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminAnalytics

