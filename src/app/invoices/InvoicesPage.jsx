import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Download, Send, Eye, FileText, DollarSign, Clock } from 'lucide-react';
import { theme } from '../../config/theme';

export const InvoicesPage = () => {
  const stats = [
    { label: 'Total Invoices', value: '234', icon: FileText, color: theme.colors.primary },
    { label: 'Paid', value: '$45,231', icon: DollarSign, color: theme.colors.status.success },
    { label: 'Pending', value: '$12,450', icon: Clock, color: theme.colors.status.warning },
    { label: 'Overdue', value: '$3,200', icon: Clock, color: theme.colors.status.danger },
  ];

  const invoices = [
    { id: 'INV-001', client: 'Acme Corp', amount: '$2,500', status: 'paid', date: '2024-01-15', dueDate: '2024-01-30' },
    { id: 'INV-002', client: 'Tech Solutions', amount: '$5,200', status: 'pending', date: '2024-01-20', dueDate: '2024-02-05' },
    { id: 'INV-003', client: 'Design Studio', amount: '$1,800', status: 'overdue', date: '2023-12-10', dueDate: '2023-12-25' },
    { id: 'INV-004', client: 'Marketing Inc', amount: '$3,400', status: 'paid', date: '2024-01-10', dueDate: '2024-01-25' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return theme.colors.status.success;
      case 'pending': return theme.colors.status.warning;
      case 'overdue': return theme.colors.status.danger;
      default: return theme.colors.text.muted;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Invoices</h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Create and manage invoices</p>
        </div>
        <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base" style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}>
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">New Invoice</span>
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
            <input type="text" placeholder="Search invoices..." className="w-full pl-9 md:pl-10 pr-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }} />
          </div>
          <select className="px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        {invoices.map((invoice, index) => (
          <motion.div key={invoice.id} className="rounded-xl p-4 md:p-6 group" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                  <FileText className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.colors.primary }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold mb-1" style={{ color: theme.colors.text.primary }}>{invoice.id}</h3>
                  <p className="text-xs md:text-sm" style={{ color: theme.colors.text.secondary }}>{invoice.client}</p>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8">
                <div className="text-right">
                  <p className="text-lg md:text-xl font-bold" style={{ color: theme.colors.text.primary }}>{invoice.amount}</p>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>Due: {invoice.dueDate}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: `${getStatusColor(invoice.status)}20`, color: getStatusColor(invoice.status) }}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
                <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Send className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Download className="w-4 h-4" />
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

export default InvoicesPage;
