import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { FiPackage, FiShoppingCart, FiDollarSign, FiUsers, FiSettings, FiHome } from 'react-icons/fi'
import AdminProducts from './AdminProducts'
import AdminOrders from './AdminOrders'
import AdminAnalytics from './AdminAnalytics'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: FiHome },
    { path: '/admin/products', label: 'Products', icon: FiPackage },
    { path: '/admin/orders', label: 'Orders', icon: FiShoppingCart },
    { path: '/admin/analytics', label: 'Analytics', icon: FiDollarSign },
  ]

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Saree Showcase</h2>
          <span className="admin-badge">Admin</span>
        </div>

        <nav className="admin-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`admin-nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="admin-footer">
          <Link to="/" className="admin-nav-item">
            <FiHome />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <Routes>
          <Route path="/" element={<AdminAnalytics />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/analytics" element={<AdminAnalytics />} />
        </Routes>
      </main>
    </div>
  )
}

export default AdminDashboard

