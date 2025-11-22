import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Mail, Send, Users, TrendingUp, Eye, Edit, Copy, Trash2 } from 'lucide-react';
import { theme } from '../../config/theme';

export const EmailCampaignsPage = () => {
  const stats = [
    { label: 'Total Campaigns', value: '48', icon: Mail, color: theme.colors.primary },
    { label: 'Sent', value: '12,543', icon: Send, color: theme.colors.status.success },
    { label: 'Open Rate', value: '24.5%', icon: Eye, color: theme.colors.status.info },
    { label: 'Click Rate', value: '8.2%', icon: TrendingUp, color: theme.colors.secondary },
  ];

  const campaigns = [
    { id: 1, name: 'Welcome Series', status: 'active', sent: 1234, opens: 456, clicks: 123, date: '2024-01-15' },
    { id: 2, name: 'Product Launch', status: 'scheduled', sent: 0, opens: 0, clicks: 0, date: '2024-02-01' },
    { id: 3, name: 'Monthly Newsletter', status: 'draft', sent: 0, opens: 0, clicks: 0, date: '2024-01-20' },
    { id: 4, name: 'Re-engagement', status: 'completed', sent: 2456, opens: 892, clicks: 234, date: '2024-01-10' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return theme.colors.status.success;
      case 'scheduled': return theme.colors.status.info;
      case 'draft': return theme.colors.text.muted;
      case 'completed': return theme.colors.primary;
      default: return theme.colors.text.muted;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Email Campaigns</h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Create and manage email campaigns</p>
        </div>
        <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base" style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}>
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">New Campaign</span>
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} className="rounded-xl p-4 md:p-5" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mb-2 md:mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: stat.color }} />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>{stat.value}</h3>
              <p className="text-xs" style={{ color: theme.colors.text.secondary }}>{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-xl p-3 md:p-4 mb-4 md:mb-6" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: theme.colors.text.muted }} />
            <input type="text" placeholder="Search campaigns..." className="w-full pl-9 md:pl-10 pr-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }} />
          </div>
          <select className="px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Status</option>
            <option>Active</option>
            <option>Scheduled</option>
            <option>Draft</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        {campaigns.map((campaign, index) => (
          <motion.div key={campaign.id} className="rounded-xl p-4 md:p-6 group" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                  <Mail className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.colors.primary }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold mb-1" style={{ color: theme.colors.text.primary }}>{campaign.name}</h3>
                  <p className="text-xs md:text-sm" style={{ color: theme.colors.text.secondary }}>Created: {campaign.date}</p>
                </div>
              </div>
              <div className="flex items-center justify-between lg:justify-end gap-4 lg:gap-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs" style={{ color: theme.colors.text.muted }}>Sent</p>
                    <p className="text-sm md:text-base font-bold" style={{ color: theme.colors.text.primary }}>{campaign.sent}</p>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: theme.colors.text.muted }}>Opens</p>
                    <p className="text-sm md:text-base font-bold" style={{ color: theme.colors.text.primary }}>{campaign.opens}</p>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: theme.colors.text.muted }}>Clicks</p>
                    <p className="text-sm md:text-base font-bold" style={{ color: theme.colors.text.primary }}>{campaign.clicks}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: `${getStatusColor(campaign.status)}20`, color: getStatusColor(campaign.status) }}>
                  {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                </span>
                <div className="hidden lg:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmailCampaignsPage;
