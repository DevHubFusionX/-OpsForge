import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Check, Trash2, Mail, Users, DollarSign, Zap, Clock } from 'lucide-react';
import { theme } from '../../config/theme';

export const NotificationsPage = () => {
  const notifications = [
    { id: 1, type: 'payment', title: 'Payment received', message: 'Invoice #INV-001 has been paid', time: '5 min ago', read: false, icon: DollarSign, color: theme.colors.status.success },
    { id: 2, type: 'user', title: 'New customer registered', message: 'John Doe just signed up', time: '1 hour ago', read: false, icon: Users, color: theme.colors.primary },
    { id: 3, type: 'automation', title: 'Automation completed', message: 'Welcome email sequence finished', time: '2 hours ago', read: true, icon: Zap, color: theme.colors.status.info },
    { id: 4, type: 'email', title: 'Campaign sent', message: 'Monthly newsletter sent to 1,234 subscribers', time: '5 hours ago', read: true, icon: Mail, color: theme.colors.secondary },
    { id: 5, type: 'reminder', title: 'Task due soon', message: 'Update website homepage is due tomorrow', time: '1 day ago', read: true, icon: Clock, color: theme.colors.status.warning },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Notifications</h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Stay updated with your activity</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.primary }}>
          <Check className="w-4 h-4" />
          Mark all read
        </button>
      </div>

      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {['All', 'Unread', 'Payments', 'Users', 'Automations'].map((filter) => (
          <button key={filter} className="px-4 py-2 rounded-lg font-medium whitespace-nowrap text-sm transition-colors" style={{ backgroundColor: filter === 'All' ? theme.colors.primary : theme.colors.surface.base, color: filter === 'All' ? theme.colors.text.inverse : theme.colors.text.secondary, border: `1px solid ${filter === 'All' ? theme.colors.primary : theme.colors.border.light}` }}>
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <motion.div key={notification.id} className="rounded-xl p-4 md:p-5 group cursor-pointer" style={{ backgroundColor: notification.read ? theme.colors.surface.base : `${theme.colors.primary}05`, border: `1px solid ${notification.read ? theme.colors.border.light : `${theme.colors.primary}30`}` }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${notification.color}15` }}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: notification.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm md:text-base font-semibold" style={{ color: theme.colors.text.primary }}>{notification.title}</h3>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: theme.colors.primary }} />
                    )}
                  </div>
                  <p className="text-xs md:text-sm mb-2" style={{ color: theme.colors.text.secondary }}>{notification.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: theme.colors.text.muted }}>{notification.time}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!notification.read && (
                        <button className="p-1.5 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-1.5 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsPage;
