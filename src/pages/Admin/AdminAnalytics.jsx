import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDollarSign, FiShoppingCart, FiPackage, FiUsers, FiTrendingUp, FiTrendingDown, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './AdminAnalytics.css'

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30d')

  const stats = [
    {
      title: 'Total Revenue',
      value: '₹12,45,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: FiDollarSign,
      color: 'gold',
      description: 'vs last month',
    },
    {
      title: 'Total Orders',
      value: '234',
      change: '+8.2%',
      changeType: 'positive',
      icon: FiShoppingCart,
      color: 'maroon',
      description: 'vs last month',
    },
    {
      title: 'Total Products',
      value: '156',
      change: '+5',
      changeType: 'positive',
      icon: FiPackage,
      color: 'blue',
      description: 'active products',
    },
    {
      title: 'Total Customers',
      value: '1,234',
      change: '+15.3%',
      changeType: 'positive',
      icon: FiUsers,
      color: 'green',
      description: 'vs last month',
    },
  ]

  const recentOrders = [
    { id: '#ORD001', customer: 'Priya Sharma', amount: '₹45,000', status: 'Delivered', date: '2 hours ago' },
    { id: '#ORD002', customer: 'Anjali Patel', amount: '₹35,000', status: 'Processing', date: '5 hours ago' },
    { id: '#ORD003', customer: 'Meera Reddy', amount: '₹55,000', status: 'Shipped', date: '1 day ago' },
    { id: '#ORD004', customer: 'Sneha Kumar', amount: '₹28,000', status: 'Delivered', date: '2 days ago' },
  ]

  const topProducts = [
    { name: 'Royal Banarasi Silk Saree', sales: 45, revenue: '₹15,75,000' },
    { name: 'Designer Kanjivaram Saree', sales: 38, revenue: '₹13,30,000' },
    { name: 'Wedding Collection Saree', sales: 32, revenue: '₹11,20,000' },
    { name: 'Party Wear Saree', sales: 28, revenue: '₹9,80,000' },
  ]

  return (
    <div className="admin-analytics">
      <div className="analytics-header">
        <div>
          <h1 className="admin-page-title">Dashboard</h1>
          <p className="admin-page-subtitle">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="time-range-selector">
          <button 
            className={timeRange === '7d' ? 'active' : ''} 
            onClick={() => setTimeRange('7d')}
          >
            7 Days
          </button>
          <button 
            className={timeRange === '30d' ? 'active' : ''} 
            onClick={() => setTimeRange('30d')}
          >
            30 Days
          </button>
          <button 
            className={timeRange === '90d' ? 'active' : ''} 
            onClick={() => setTimeRange('90d')}
          >
            90 Days
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              className={`stat-card ${stat.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="stat-card-header">
                <div className={`stat-icon ${stat.color}`}>
                  <Icon />
                </div>
                <div className={`stat-change ${stat.changeType}`}>
                  {stat.changeType === 'positive' ? <FiTrendingUp /> : <FiTrendingDown />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="stat-content">
                <h3 className="stat-title">{stat.title}</h3>
                <div className="stat-value">{stat.value}</div>
                <p className="stat-description">{stat.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="analytics-content-grid">
        <motion.div 
          className="admin-section chart-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="section-header">
            <h2 className="section-title">Revenue Overview</h2>
            <select className="chart-filter">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="revenue-chart">
            <div className="chart-placeholder">
              <div className="chart-bars">
                {[65, 80, 45, 90, 70, 85, 95, 75, 88, 92, 70, 85].map((height, i) => (
                  <div key={i} className="chart-bar" style={{ height: `${height}%` }}></div>
                ))}
              </div>
              <div className="chart-labels">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="admin-section recent-orders-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="section-header">
            <h2 className="section-title">Recent Orders</h2>
            <Link to="/admin/orders" className="section-link">
              View All <FiArrowRight />
            </Link>
          </div>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td><strong>{order.id}</strong></td>
                    <td>{order.customer}</td>
                    <td><strong>{order.amount}</strong></td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="order-date">{order.date}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          className="admin-section top-products-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="section-header">
            <h2 className="section-title">Top Products</h2>
            <Link to="/admin/products" className="section-link">
              View All <FiArrowRight />
            </Link>
          </div>
          <div className="top-products-list">
            {topProducts.map((product, index) => (
              <div key={index} className="top-product-item">
                <div className="product-rank">#{index + 1}</div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-stats">
                    <span>{product.sales} sales</span>
                    <span>•</span>
                    <span>{product.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminAnalytics

