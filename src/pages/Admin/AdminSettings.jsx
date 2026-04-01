import React, { useState } from 'react'
import { FiSave, FiUser, FiShoppingBag, FiMail, FiBell, FiLock, FiGlobe } from 'react-icons/fi'
import './AdminSettings.css'

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('store')

  const [storeSettings, setStoreSettings] = useState({
    storeName: 'Premium Saree Showcase',
    storeEmail: 'contact@sareeshowcase.com',
    storePhone: '+91 98765 43210',
    storeAddress: 'Mumbai, Maharashtra, India',
    currency: 'INR',
    language: 'English',
  })

  const [profileSettings, setProfileSettings] = useState({
    name: 'Admin User',
    email: 'admin@sareeshowcase.com',
    phone: '+91 98765 43210',
    role: 'Administrator',
  })

  const [notifSettings, setNotifSettings] = useState({
    newOrders: true,
    lowStock: true,
    newCustomers: false,
    promotions: true,
  })

  const [passwordData, setPasswordData] = useState({
    current: '',
    newPass: '',
    confirm: '',
  })

  const handleSave = (section) => {
    alert(`${section} settings saved successfully!`)
  }

  const tabs = [
    { id: 'store', label: 'Store', icon: FiShoppingBag },
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'notifications', label: 'Notifications', icon: FiBell },
    { id: 'security', label: 'Security', icon: FiLock },
  ]

  return (
    <div className="admin-settings">
      <div className="settings-header">
        <h1 className="admin-page-title">Settings</h1>
        <p className="admin-page-subtitle">Manage your store and account preferences</p>
      </div>

      <div className="settings-layout">
        {/* Tabs */}
        <div className="settings-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="settings-content">

          {/* Store Settings */}
          {activeTab === 'store' && (
            <div className="settings-section">
              <div className="settings-section-header">
                <FiShoppingBag />
                <div>
                  <h2>Store Information</h2>
                  <p>Update your store details and preferences</p>
                </div>
              </div>
              <div className="settings-form">
                <div className="settings-form-row">
                  <div className="settings-form-group">
                    <label>Store Name</label>
                    <input
                      type="text"
                      value={storeSettings.storeName}
                      onChange={(e) => setStoreSettings({ ...storeSettings, storeName: e.target.value })}
                    />
                  </div>
                  <div className="settings-form-group">
                    <label>Store Email</label>
                    <input
                      type="email"
                      value={storeSettings.storeEmail}
                      onChange={(e) => setStoreSettings({ ...storeSettings, storeEmail: e.target.value })}
                    />
                  </div>
                </div>
                <div className="settings-form-row">
                  <div className="settings-form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={storeSettings.storePhone}
                      onChange={(e) => setStoreSettings({ ...storeSettings, storePhone: e.target.value })}
                    />
                  </div>
                  <div className="settings-form-group">
                    <label>Currency</label>
                    <select
                      value={storeSettings.currency}
                      onChange={(e) => setStoreSettings({ ...storeSettings, currency: e.target.value })}
                    >
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                    </select>
                  </div>
                </div>
                <div className="settings-form-group full-width">
                  <label>Store Address</label>
                  <textarea
                    value={storeSettings.storeAddress}
                    onChange={(e) => setStoreSettings({ ...storeSettings, storeAddress: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="settings-form-group full-width">
                  <label>Language</label>
                  <select
                    value={storeSettings.language}
                    onChange={(e) => setStoreSettings({ ...storeSettings, language: e.target.value })}
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                  </select>
                </div>
                <button className="settings-save-btn" onClick={() => handleSave('Store')}>
                  <FiSave /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="settings-section">
              <div className="settings-section-header">
                <FiUser />
                <div>
                  <h2>Profile Information</h2>
                  <p>Update your personal account details</p>
                </div>
              </div>
              <div className="settings-form">
                <div className="settings-avatar-section">
                  <div className="settings-avatar">AS</div>
                  <div>
                    <p className="avatar-name">{profileSettings.name}</p>
                    <p className="avatar-role">{profileSettings.role}</p>
                  </div>
                </div>
                <div className="settings-form-row">
                  <div className="settings-form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={profileSettings.name}
                      onChange={(e) => setProfileSettings({ ...profileSettings, name: e.target.value })}
                    />
                  </div>
                  <div className="settings-form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={profileSettings.email}
                      onChange={(e) => setProfileSettings({ ...profileSettings, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="settings-form-row">
                  <div className="settings-form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={profileSettings.phone}
                      onChange={(e) => setProfileSettings({ ...profileSettings, phone: e.target.value })}
                    />
                  </div>
                  <div className="settings-form-group">
                    <label>Role</label>
                    <input type="text" value={profileSettings.role} disabled />
                  </div>
                </div>
                <button className="settings-save-btn" onClick={() => handleSave('Profile')}>
                  <FiSave /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="settings-section">
              <div className="settings-section-header">
                <FiBell />
                <div>
                  <h2>Notification Preferences</h2>
                  <p>Choose what notifications you want to receive</p>
                </div>
              </div>
              <div className="settings-form">
                {[
                  { key: 'newOrders', label: 'New Orders', desc: 'Get notified when a new order is placed' },
                  { key: 'lowStock', label: 'Low Stock Alerts', desc: 'Get notified when product stock is running low' },
                  { key: 'newCustomers', label: 'New Customers', desc: 'Get notified when a new customer registers' },
                  { key: 'promotions', label: 'Promotions & Updates', desc: 'Receive updates about promotions and features' },
                ].map((item) => (
                  <div key={item.key} className="notif-item">
                    <div className="notif-info">
                      <span className="notif-label">{item.label}</span>
                      <span className="notif-desc">{item.desc}</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={notifSettings[item.key]}
                        onChange={(e) => setNotifSettings({ ...notifSettings, [item.key]: e.target.checked })}
                      />
                      <span className="toggle-slider" />
                    </label>
                  </div>
                ))}
                <button className="settings-save-btn" onClick={() => handleSave('Notification')}>
                  <FiSave /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === 'security' && (
            <div className="settings-section">
              <div className="settings-section-header">
                <FiLock />
                <div>
                  <h2>Security</h2>
                  <p>Update your password to keep your account secure</p>
                </div>
              </div>
              <div className="settings-form">
                <div className="settings-form-group full-width">
                  <label>Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={passwordData.current}
                    onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                  />
                </div>
                <div className="settings-form-row">
                  <div className="settings-form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      value={passwordData.newPass}
                      onChange={(e) => setPasswordData({ ...passwordData, newPass: e.target.value })}
                    />
                  </div>
                  <div className="settings-form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      value={passwordData.confirm}
                      onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                    />
                  </div>
                </div>
                <div className="password-requirements">
                  <p>Password must be at least 8 characters and include a number and special character.</p>
                </div>
                <button className="settings-save-btn" onClick={() => handleSave('Password')}>
                  <FiLock /> Update Password
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default AdminSettings
