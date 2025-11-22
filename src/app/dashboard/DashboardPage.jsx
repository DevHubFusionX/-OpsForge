import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, CheckCircle, Ticket, Calendar, Plus, FileText, Mail, Zap, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { theme } from '../../config/theme';
import { Breadcrumb } from '../../components/dashboard/Breadcrumb';
import { DateRangeSelector } from '../../components/dashboard/DateRangeSelector';
import { LineChart } from '../../components/dashboard/charts/LineChart';
import { BarChart } from '../../components/dashboard/charts/BarChart';
import { PieChart } from '../../components/dashboard/charts/PieChart';

export const DashboardPage = () => {
  const kpis = [
    { label: 'Total Customers', value: '2,543', change: '+12%', icon: Users },
    { label: 'Monthly Revenue', value: '$45,231', change: '+23%', icon: DollarSign },
    { label: 'Tasks Completed', value: '1,234', change: '+8%', icon: CheckCircle },
    { label: 'Open Tickets', value: '23', change: '-5%', icon: Ticket },
    { label: 'Social Posts Scheduled', value: '48', change: '+15%', icon: Calendar },
  ];

  const quickActions = [
    { label: 'Create Invoice', icon: FileText },
    { label: 'Send Email', icon: Mail },
    { label: 'Start Automation', icon: Zap },
  ];

  const recentActivity = [
    { action: 'New customer registered', time: '2 min ago', type: 'success' },
    { action: 'Invoice #1234 paid', time: '15 min ago', type: 'success' },
    { action: 'Email campaign sent', time: '1 hour ago', type: 'info' },
    { action: 'Task "Update website" completed', time: '2 hours ago', type: 'success' },
    { action: 'Support ticket #456 opened', time: '3 hours ago', type: 'warning' },
  ];

  const aiSuggestions = [
    'Create a blog post about "Top 10 Automation Tips"',
    'Schedule social media posts for next week',
    'Send follow-up emails to inactive customers',
    'Generate monthly performance report',
  ];

  const revenueData = [
    { name: 'Jan', value: 30000 },
    { name: 'Feb', value: 35000 },
    { name: 'Mar', value: 32000 },
    { name: 'Apr', value: 38000 },
    { name: 'May', value: 42000 },
    { name: 'Jun', value: 45231 },
  ];

  const customerData = [
    { name: 'Jan', value: 1800 },
    { name: 'Feb', value: 2000 },
    { name: 'Mar', value: 2200 },
    { name: 'Apr', value: 2350 },
    { name: 'May', value: 2450 },
    { name: 'Jun', value: 2543 },
  ];

  const campaignData = [
    { name: 'Email', value: 35 },
    { name: 'Social', value: 28 },
    { name: 'Ads', value: 22 },
    { name: 'Direct', value: 15 },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.surface.card }}>
      {/* Breadcrumb & Header */}
      <div className="px-4 md:px-8 pt-6 pb-4">
        <Breadcrumb items={[{ label: 'Dashboard' }]} />
        <div className="flex items-start justify-between gap-4">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>Welcome back, John 👋</h1>
            <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Here's what's happening with your business today</p>
          </motion.div>
          <DateRangeSelector />
        </div>
      </div>

      {/* Hero KPI Section */}
      <div className="px-4 md:px-8 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.label}
                className="rounded-xl p-4 md:p-5 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: theme.colors.primary }} />
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.colors.primary }} />
                  </div>
                  <span className="text-xs font-bold flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: kpi.change.startsWith('+') ? `${theme.colors.status.success}15` : `${theme.colors.status.danger}15`, color: kpi.change.startsWith('+') ? theme.colors.status.success : theme.colors.status.danger }}>
                    <TrendingUp className="w-3 h-3" />
                    {kpi.change}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>{kpi.value}</h3>
                <p className="text-xs" style={{ color: theme.colors.text.secondary }}>{kpi.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Actions */}
            <motion.div
              className="rounded-xl p-5 md:p-6 shadow-sm"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" style={{ color: theme.colors.primary }} />
                  <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>Quick Actions</h3>
                </div>
              </div>
              <div className="space-y-2">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative overflow-hidden"
                      style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.light}` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`;
                        e.currentTarget.style.borderColor = theme.colors.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.colors.surface.card;
                        e.currentTarget.style.borderColor = theme.colors.border.light;
                      }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                        <Icon className="w-4 h-4" style={{ color: theme.colors.primary }} />
                      </div>
                      <span className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              className="rounded-xl p-5 md:p-6 shadow-sm"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>Recent Activity</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.colors.primary}10`, color: theme.colors.primary }}>Live</span>
                  <a href="/activity" className="text-xs font-medium flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: theme.colors.primary }}>
                    View All <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <motion.div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-opacity-50 transition-colors" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                    <div className={`w-2 h-2 rounded-full mt-2 shadow-sm`} style={{
                      backgroundColor: activity.type === 'success' ? theme.colors.status.success :
                        activity.type === 'warning' ? theme.colors.status.warning : theme.colors.status.info,
                      boxShadow: `0 0 8px ${activity.type === 'success' ? theme.colors.status.success : activity.type === 'warning' ? theme.colors.status.warning : theme.colors.status.info}50`
                    }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>{activity.action}</p>
                      <p className="text-xs" style={{ color: theme.colors.text.muted }}>{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              className="rounded-xl p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>Monthly Revenue Trend</h3>
                <a href="/analytics" className="text-xs font-medium flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: theme.colors.primary }}>
                  View Details <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="h-64">
                <LineChart data={revenueData} />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="rounded-xl p-6"
                style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Customer Growth</h3>
                <div className="h-48">
                  <BarChart data={customerData} />
                </div>
              </motion.div>

              <motion.div
                className="rounded-xl p-6"
                style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Campaign Performance</h3>
                <div className="h-48">
                  <PieChart data={campaignData} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              className="rounded-xl p-5 md:p-6 relative overflow-hidden shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}15)`,
                border: `1px solid ${theme.colors.primary}40`
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: theme.colors.primary }} />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme.colors.primary}30` }}>
                    <Lightbulb className="w-5 h-5" style={{ color: theme.colors.primary }} />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>AI Suggestions</h3>
                </div>
                <a href="/ai-tools" className="text-xs font-medium flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: theme.colors.primary }}>
                  See More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="space-y-2 relative z-10">
                {aiSuggestions.map((suggestion, idx) => (
                  <motion.div
                    key={idx}
                    className="p-3 rounded-lg border transition-all cursor-pointer group"
                    style={{ 
                      backgroundColor: theme.colors.surface.base,
                      borderColor: `${theme.colors.primary}20`
                    }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, borderColor: theme.colors.primary }}
                  >
                    <p className="text-sm group-hover:text-opacity-80 transition-opacity" style={{ color: theme.colors.text.primary }}>{suggestion}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-xl p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>AI Tools</h3>
              <div className="space-y-2">
                {['Generate Post', 'Reply to Customers', 'Create Content', 'Analyze Data'].map((tool, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-2 text-sm rounded-lg transition-colors"
                    style={{ color: theme.colors.text.secondary }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`;
                      e.currentTarget.style.color = theme.colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = theme.colors.text.secondary;
                    }}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-6 rounded-xl p-6"
          style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Weekly Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm mb-1" style={{ color: theme.colors.text.secondary }}>Upcoming Tasks</p>
              <p className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>12</p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: theme.colors.text.secondary }}>Recent Invoices</p>
              <p className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>8</p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: theme.colors.text.secondary }}>Pending Approvals</p>
              <p className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>3</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
