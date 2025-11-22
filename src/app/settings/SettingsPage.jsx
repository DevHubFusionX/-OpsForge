import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, CreditCard, Globe, Moon, Zap, Mail, Lock, Smartphone, Database, Download } from 'lucide-react';
import { theme } from '../../config/theme';

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'preferences', label: 'Preferences', icon: Globe },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Settings</h1>
        <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Manage your account settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 md:mb-6 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base"
              style={{
                backgroundColor: activeTab === tab.id ? theme.colors.primary : theme.colors.surface.base,
                color: activeTab === tab.id ? theme.colors.text.inverse : theme.colors.text.secondary,
                border: `1px solid ${activeTab === tab.id ? theme.colors.primary : theme.colors.border.light}`
              }}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {activeTab === 'profile' && (
            <motion.div
              className="rounded-xl p-4 md:p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" style={{ color: theme.colors.text.primary }}>Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base"
                    style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base"
                    style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>Bio</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about yourself"
                    className="w-full px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base"
                    style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}
                  />
                </div>
                <button
                  className="px-4 md:px-6 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base"
                  style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              className="rounded-xl p-4 md:p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" style={{ color: theme.colors.text.primary }}>Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { key: 'email', label: 'Email Notifications', icon: Mail },
                  { key: 'push', label: 'Push Notifications', icon: Bell },
                  { key: 'sms', label: 'SMS Notifications', icon: Smartphone },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.key} className="flex items-center justify-between p-3 md:p-4 rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" style={{ color: theme.colors.primary }} />
                        <span className="font-medium text-sm md:text-base" style={{ color: theme.colors.text.primary }}>{item.label}</span>
                      </div>
                      <button
                        onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key] })}
                        className="w-12 h-6 rounded-full transition-colors relative"
                        style={{ backgroundColor: notifications[item.key] ? theme.colors.primary : theme.colors.border.default }}
                      >
                        <div
                          className="w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform"
                          style={{ transform: notifications[item.key] ? 'translateX(24px)' : 'translateX(2px)' }}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              className="rounded-xl p-4 md:p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" style={{ color: theme.colors.text.primary }}>Security Settings</h3>
              <div className="space-y-4">
                <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="w-5 h-5" style={{ color: theme.colors.primary }} />
                    <span className="font-medium text-sm md:text-base" style={{ color: theme.colors.text.primary }}>Change Password</span>
                  </div>
                  <p className="text-xs md:text-sm mb-3" style={{ color: theme.colors.text.muted }}>Last changed 3 months ago</p>
                  <button className="text-xs md:text-sm font-semibold" style={{ color: theme.colors.primary }}>Update Password</button>
                </div>
                <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5" style={{ color: theme.colors.primary }} />
                    <span className="font-medium text-sm md:text-base" style={{ color: theme.colors.text.primary }}>Two-Factor Authentication</span>
                  </div>
                  <p className="text-xs md:text-sm mb-3" style={{ color: theme.colors.text.muted }}>Add an extra layer of security</p>
                  <button className="text-xs md:text-sm font-semibold" style={{ color: theme.colors.primary }}>Enable 2FA</button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'billing' && (
            <motion.div
              className="rounded-xl p-4 md:p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" style={{ color: theme.colors.text.primary }}>Billing Information</h3>
              <div className="space-y-4">
                <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
                  <p className="text-xs md:text-sm mb-1" style={{ color: theme.colors.text.secondary }}>Current Plan</p>
                  <p className="text-xl md:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Pro Plan</p>
                  <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.muted }}>$49/month</p>
                </div>
                <button
                  className="w-full px-4 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base"
                  style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}
                >
                  Upgrade Plan
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'preferences' && (
            <motion.div
              className="rounded-xl p-4 md:p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" style={{ color: theme.colors.text.primary }}>Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>Language</label>
                  <select
                    className="w-full px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base"
                    style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-2" style={{ color: theme.colors.text.secondary }}>Timezone</label>
                  <select
                    className="w-full px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base"
                    style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}
                  >
                    <option>UTC-5 (EST)</option>
                    <option>UTC-8 (PST)</option>
                    <option>UTC+0 (GMT)</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4 md:space-y-6">
          <motion.div
            className="rounded-xl p-4 md:p-6"
            style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" style={{ color: theme.colors.text.primary }}>Quick Stats</h3>
            <div className="space-y-3">
              {[
                { label: 'Account Age', value: '2 years' },
                { label: 'Total Logins', value: '1,234' },
                { label: 'Storage Used', value: '2.4 GB' },
              ].map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>{stat.label}</p>
                  <p className="text-base md:text-lg font-bold" style={{ color: theme.colors.text.primary }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl p-4 md:p-6"
            style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4" style={{ color: theme.colors.text.primary }}>Actions</h3>
            <div className="space-y-2">
              {[
                { label: 'Export Data', icon: Download },
                { label: 'Clear Cache', icon: Database },
                { label: 'API Keys', icon: Zap },
              ].map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={idx}
                    className="w-full flex items-center gap-3 px-3 md:px-4 py-2 rounded-lg transition-colors text-left"
                    style={{ backgroundColor: theme.colors.surface.card, color: theme.colors.text.primary }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.surface.card}
                  >
                    <Icon className="w-4 h-4" style={{ color: theme.colors.primary }} />
                    <span className="text-sm font-medium">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
