import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity, Calendar, Download } from 'lucide-react';
import { theme } from '../../config/theme';

export const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    { label: 'Total Revenue', value: '$45,231', change: '+23.5%', trend: 'up', icon: DollarSign },
    { label: 'Total Users', value: '2,543', change: '+12.3%', trend: 'up', icon: Users },
    { label: 'Total Orders', value: '1,234', change: '-3.2%', trend: 'down', icon: ShoppingCart },
    { label: 'Conversion Rate', value: '3.24%', change: '+8.1%', trend: 'up', icon: Activity },
  ];

  const topPages = [
    { page: '/dashboard', views: 12453, bounce: '32%', avgTime: '3:24' },
    { page: '/products', views: 8932, bounce: '45%', avgTime: '2:15' },
    { page: '/pricing', views: 6721, bounce: '28%', avgTime: '4:32' },
    { page: '/about', views: 4532, bounce: '52%', avgTime: '1:45' },
  ];

  const trafficSources = [
    { source: 'Direct', visitors: 4532, percentage: 45 },
    { source: 'Organic Search', visitors: 3421, percentage: 34 },
    { source: 'Social Media', visitors: 1234, percentage: 12 },
    { source: 'Referral', visitors: 891, percentage: 9 },
  ];

  return (
    <div className="p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Analytics</h1>
          <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Track your performance and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 rounded-lg outline-none"
            style={{ 
              backgroundColor: theme.colors.surface.base,
              border: `1px solid ${theme.colors.border.default}`,
              color: theme.colors.text.primary
            }}
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.secondary}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.primary}
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <motion.div
              key={metric.label}
              className="rounded-xl p-6"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                  <Icon className="w-6 h-6" style={{ color: theme.colors.primary }} />
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: metric.trend === 'up' ? theme.colors.status.success : theme.colors.status.danger }}>
                  <TrendIcon className="w-4 h-4" />
                  {metric.change}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>{metric.value}</h3>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{metric.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <motion.div
          className="rounded-xl p-6"
          style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Revenue Overview</h3>
          <div className="h-64 flex items-center justify-center rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
            <p style={{ color: theme.colors.text.muted }}>Line Chart - Revenue Trend</p>
          </div>
        </motion.div>

        {/* User Growth Chart */}
        <motion.div
          className="rounded-xl p-6"
          style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>User Growth</h3>
          <div className="h-64 flex items-center justify-center rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
            <p style={{ color: theme.colors.text.muted }}>Area Chart - User Growth</p>
          </div>
        </motion.div>
      </div>

      {/* Data Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <motion.div
          className="rounded-xl p-6"
          style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Top Pages</h3>
          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg transition-colors" style={{ backgroundColor: theme.colors.surface.card }}>
                <div className="flex-1">
                  <p className="font-medium text-sm" style={{ color: theme.colors.text.primary }}>{page.page}</p>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>{page.views.toLocaleString()} views</p>
                </div>
                <div className="flex items-center gap-4 text-xs" style={{ color: theme.colors.text.secondary }}>
                  <div>
                    <p style={{ color: theme.colors.text.muted }}>Bounce</p>
                    <p className="font-semibold">{page.bounce}</p>
                  </div>
                  <div>
                    <p style={{ color: theme.colors.text.muted }}>Avg Time</p>
                    <p className="font-semibold">{page.avgTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          className="rounded-xl p-6"
          style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>{source.source}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>{source.visitors.toLocaleString()}</p>
                    <p className="text-xs" style={{ color: theme.colors.text.muted }}>({source.percentage}%)</p>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: theme.colors.surface.card }}>
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${source.percentage}%`,
                      backgroundColor: theme.colors.primary
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
