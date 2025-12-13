import React, { useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  FiPackage, 
  FiShoppingCart, 
  FiDollarSign, 
  FiHome,
  FiSettings,
  FiUser,
  FiBell,
  FiSearch,
  FiMenu,
  FiX,
  FiLogOut,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi'
import AdminProducts from './AdminProducts'
import AdminOrders from './AdminOrders'
import AdminAnalytics from './AdminAnalytics'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: FiHome },
    { path: '/admin/products', label: 'Products', icon: FiPackage },
    { path: '/admin/orders', label: 'Orders', icon: FiShoppingCart },
    { path: '/admin/analytics', label: 'Analytics', icon: FiTrendingUp },
    { path: '/admin/settings', label: 'Settings', icon: FiSettings },
  ]

  const handleLogout = () => {
    // Add logout logic here
    navigate('/')
  }

  return (
    <div className="admin-dashboard">
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="admin-logo">
          <h2>Saree Showcase</h2>
          <span className="admin-badge">Admin</span>
          <button className="sidebar-close" onClick={() => setIsSidebarOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav className="admin-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path || 
              (item.path === '/admin' && location.pathname === '/admin')
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`admin-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="admin-footer-sidebar">
          <Link to="/" className="admin-nav-item back-to-site">
            <FiHome />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      <div className="admin-main-wrapper">
        <header className="admin-header">
          <div className="admin-header-left">
            <button 
              className="sidebar-toggle"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiMenu />
            </button>
            <div className="admin-search">
              <FiSearch />
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="admin-header-right">
            <button className="admin-header-icon notifications">
              <FiBell />
              <span className="notification-badge">3</span>
            </button>
            
            <div className="admin-profile-dropdown">
              <button 
                className="admin-profile-btn"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="admin-avatar">AS</div>
                <div className="admin-profile-info">
                  <span className="admin-name">Admin User</span>
                  <span className="admin-role">Administrator</span>
                </div>
              </button>
              
              {isProfileOpen && (
                <div className="admin-profile-menu">
                  <Link to="/admin/profile" className="profile-menu-item">
                    <FiUser />
                    <span>Profile</span>
                  </Link>
                  <Link to="/admin/settings" className="profile-menu-item">
                    <FiSettings />
                    <span>Settings</span>
                  </Link>
                  <div className="profile-menu-divider"></div>
                  <button className="profile-menu-item logout" onClick={handleLogout}>
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="admin-main">
          <Routes>
            <Route path="/" element={<AdminAnalytics />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/orders" element={<AdminOrders />} />
            <Route path="/analytics" element={<AdminAnalytics />} />
            <Route path="/settings" element={<div className="admin-placeholder"><h1>Settings</h1><p>Settings page coming soon...</p></div>} />
          </Routes>
        </main>
      </div>

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  )
}

export default AdminDashboard

