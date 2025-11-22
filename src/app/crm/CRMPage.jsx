import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Mail, Phone, MoreVertical, Edit, Trash2, Users, TrendingUp, DollarSign, Target } from 'lucide-react';
import { theme } from '../../config/theme';

export const CRMPage = () => {
  const kpis = [
    { label: 'Total Customers', value: '1,234', icon: Users, color: theme.colors.primary },
    { label: 'New Leads', value: '89', icon: Target, color: theme.colors.status.warning },
    { label: 'Conversion Rate', value: '24%', icon: TrendingUp, color: theme.colors.status.success },
    { label: 'Total Revenue', value: '$125K', icon: DollarSign, color: theme.colors.secondary },
  ];

  const customers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 123-4567',
      status: 'customer',
      lastContact: '2 days ago',
      orders: 12,
      revenue: '$4,500',
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@startup.io',
      phone: '+1 (555) 234-5678',
      status: 'vip',
      lastContact: '1 hour ago',
      orders: 28,
      revenue: '$12,300',
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.d@business.com',
      phone: '+1 (555) 345-6789',
      status: 'prospect',
      lastContact: '5 days ago',
      orders: 0,
      revenue: '$0',
      avatar: 'ED',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.w@enterprise.com',
      phone: '+1 (555) 456-7890',
      status: 'lead',
      lastContact: '1 week ago',
      orders: 0,
      revenue: '$0',
      avatar: 'JW',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'lead': return '#FBBF24';
      case 'prospect': return theme.colors.primary;
      case 'customer': return theme.colors.status.success;
      case 'vip': return '#8B5CF6';
      default: return theme.colors.text.muted;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      {/* Header */}
      <motion.div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>CRM</h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Manage your customers, track interactions, and grow your business</p>
        </div>
        <button
          className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
          style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.secondary;
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.primary;
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">New Customer</span>
        </button>
      </motion.div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              className="rounded-xl p-4 md:p-5 group cursor-pointer relative overflow-hidden"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: kpi.color }} />
              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: `${kpi.color}15` }}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: kpi.color }} />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>{kpi.value}</h3>
              <p className="text-xs" style={{ color: theme.colors.text.secondary }}>{kpi.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Filters & Search */}
      <motion.div className="rounded-xl p-3 md:p-4 mb-6 shadow-sm" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: theme.colors.text.muted }} />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-2.5 rounded-lg outline-none transition-all text-sm md:text-base"
              style={{ 
                backgroundColor: theme.colors.surface.card,
                border: `1px solid ${theme.colors.border.default}`,
                color: theme.colors.text.primary
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.primary;
                e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.primary}15`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border.default;
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>
          <select className="px-3 md:px-4 py-2 md:py-2.5 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Status</option>
            <option>Lead</option>
            <option>Prospect</option>
            <option>Customer</option>
            <option>VIP</option>
          </select>
          <select className="px-3 md:px-4 py-2 md:py-2.5 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>Sort by: Name</option>
            <option>Sort by: Last Contact</option>
            <option>Sort by: Revenue</option>
          </select>
        </div>
      </motion.div>

      {/* Customer Table */}
      <div className="rounded-xl overflow-hidden shadow-sm" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4" style={{ backgroundColor: theme.colors.surface.card, borderBottom: `1px solid ${theme.colors.border.light}` }}>
          <div className="col-span-3">
            <p className="text-xs font-semibold uppercase" style={{ color: theme.colors.text.muted }}>Customer</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs font-semibold uppercase" style={{ color: theme.colors.text.muted }}>Contact</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs font-semibold uppercase" style={{ color: theme.colors.text.muted }}>Status</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs font-semibold uppercase" style={{ color: theme.colors.text.muted }}>Last Contact</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs font-semibold uppercase" style={{ color: theme.colors.text.muted }}>Revenue</p>
          </div>
          <div className="col-span-1">
            <p className="text-xs font-semibold uppercase" style={{ color: theme.colors.text.muted }}>Actions</p>
          </div>
        </div>

        {/* Table Rows */}
        {customers.map((customer, index) => (
          <motion.div
            key={customer.id}
            className="grid grid-cols-12 gap-4 px-4 md:px-6 py-4 group cursor-pointer transition-all relative"
            style={{ borderBottom: `1px solid ${theme.colors.border.light}` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              backgroundColor: theme.colors.surface.card,
              y: -2
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: theme.colors.primary }} />
            {/* Customer */}
            <div className="col-span-12 md:col-span-3 flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-semibold shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: `${theme.colors.primary}20`, color: theme.colors.primary }}>
                {customer.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm md:text-base truncate" style={{ color: theme.colors.text.primary }}>{customer.name}</p>
                <p className="text-xs" style={{ color: theme.colors.text.muted }}>{customer.orders} orders</p>
              </div>
            </div>

            {/* Contact */}
            <div className="hidden md:flex col-span-2 flex-col justify-center">
              <p className="text-sm flex items-center gap-1 truncate" style={{ color: theme.colors.text.secondary }}>
                <Mail className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{customer.email}</span>
              </p>
              <p className="text-xs flex items-center gap-1" style={{ color: theme.colors.text.muted }}>
                <Phone className="w-3 h-3 flex-shrink-0" />
                {customer.phone}
              </p>
            </div>

            {/* Status */}
            <div className="hidden lg:flex col-span-2 items-center">
              <span 
                className="px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
                style={{ 
                  backgroundColor: `${getStatusColor(customer.status)}20`,
                  color: getStatusColor(customer.status)
                }}
              >
                {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
              </span>
            </div>

            {/* Last Contact */}
            <div className="hidden lg:flex col-span-2 items-center">
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{customer.lastContact}</p>
            </div>

            {/* Revenue */}
            <div className="hidden md:flex col-span-2 items-center">
              <p className="text-sm md:text-base font-bold" style={{ color: theme.colors.text.primary }}>{customer.revenue}</p>
            </div>

            {/* Actions */}
            <div className="hidden xl:flex col-span-1 items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="p-2 rounded-lg transition-colors"
                style={{ color: theme.colors.text.muted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`;
                  e.currentTarget.style.color = theme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = theme.colors.text.muted;
                }}
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                className="p-2 rounded-lg transition-colors"
                style={{ color: theme.colors.text.muted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${theme.colors.status.danger}10`;
                  e.currentTarget.style.color = theme.colors.status.danger;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = theme.colors.text.muted;
                }}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CRMPage;
