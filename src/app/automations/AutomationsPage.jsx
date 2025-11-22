import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Play, Pause, Edit, Copy, Trash2, Clock, Zap, Mail, Users, Calendar } from 'lucide-react';
import { theme } from '../../config/theme';

export const AutomationsPage = () => {
  const [view, setView] = useState('list');

  const automations = [
    {
      id: 1,
      name: 'Welcome Email Sequence',
      trigger: 'New Customer',
      triggerIcon: Users,
      status: 'active',
      lastRun: '2 hours ago',
      nextRun: 'In 4 hours',
      runs: 234,
    },
    {
      id: 2,
      name: 'Invoice Payment Reminder',
      trigger: 'Invoice Overdue',
      triggerIcon: Calendar,
      status: 'active',
      lastRun: '1 day ago',
      nextRun: 'Tomorrow',
      runs: 89,
    },
    {
      id: 3,
      name: 'Lead Scoring Update',
      trigger: 'Contact Activity',
      triggerIcon: Zap,
      status: 'paused',
      lastRun: '3 days ago',
      nextRun: '-',
      runs: 456,
    },
    {
      id: 4,
      name: 'Monthly Report Generation',
      trigger: 'Scheduled',
      triggerIcon: Clock,
      status: 'active',
      lastRun: '5 days ago',
      nextRun: 'In 25 days',
      runs: 12,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return theme.colors.primary;
      case 'paused': return theme.colors.text.muted;
      case 'error': return theme.colors.status.danger;
      default: return theme.colors.text.muted;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      {/* Header */}
      <motion.div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Automations</h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Manage your automated workflows</p>
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
          <span className="text-sm md:text-base">New Automation</span>
        </button>
      </motion.div>

      {/* Filters & Search */}
      <motion.div className="rounded-xl p-3 md:p-4 mb-6 shadow-sm" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: theme.colors.text.muted }} />
            <input
              type="text"
              placeholder="Search automations..."
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
          <select className="px-3 md:px-4 py-2 md:py-2.5 rounded-lg outline-none text-sm md:text-base transition-all" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Status</option>
            <option>Active</option>
            <option>Paused</option>
            <option>Draft</option>
          </select>
          <select className="px-3 md:px-4 py-2 md:py-2.5 rounded-lg outline-none text-sm md:text-base transition-all" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>Sort by: Last Run</option>
            <option>Sort by: Name</option>
            <option>Sort by: Created Date</option>
          </select>
        </div>
      </motion.div>

      {/* Automations List */}
      <div className="space-y-3 md:space-y-4">
        {automations.map((automation, index) => {
          const TriggerIcon = automation.triggerIcon;
          return (
            <motion.div
              key={automation.id}
              className="rounded-xl p-4 md:p-6 transition-all cursor-pointer group relative overflow-hidden"
              style={{ 
                backgroundColor: theme.colors.surface.base,
                border: `1px solid ${theme.colors.border.light}`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                y: -4,
                boxShadow: theme.shadows.lg,
                borderColor: theme.colors.primary
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full rounded-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: theme.colors.primary }} />
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Left Section */}
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                    <TriggerIcon className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.colors.primary }} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold mb-1" style={{ color: theme.colors.text.primary }}>
                      {automation.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm" style={{ color: theme.colors.text.secondary }}>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3 md:w-4 md:h-4" />
                        {automation.trigger}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: `${theme.colors.primary}10`, color: theme.colors.primary }}>{automation.runs} runs</span>
                    </div>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                  <div className="text-center">
                    <p className="text-xs mb-1 font-medium" style={{ color: theme.colors.text.muted }}>Last Run</p>
                    <p className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>{automation.lastRun}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs mb-1 font-medium" style={{ color: theme.colors.text.muted }}>Next Run</p>
                    <p className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>{automation.nextRun}</p>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center justify-between lg:justify-end gap-3 md:gap-4">
                  <span 
                    className="px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
                    style={{ 
                      backgroundColor: `${getStatusColor(automation.status)}20`,
                      color: getStatusColor(automation.status)
                    }}
                  >
                    {automation.status.charAt(0).toUpperCase() + automation.status.slice(1)}
                  </span>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                      {automation.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
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
                        e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`;
                        e.currentTarget.style.color = theme.colors.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = theme.colors.text.muted;
                      }}
                    >
                      <Copy className="w-4 h-4" />
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
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AutomationsPage;
