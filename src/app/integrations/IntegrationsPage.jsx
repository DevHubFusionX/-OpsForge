import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Check, Zap, Mail, Database, Cloud, Code, ShoppingCart } from 'lucide-react';
import { theme } from '../../config/theme';

export const IntegrationsPage = () => {
  const integrations = [
    { id: 1, name: 'Stripe', description: 'Payment processing', icon: ShoppingCart, color: '#635BFF', connected: true, category: 'Payment' },
    { id: 2, name: 'SendGrid', description: 'Email delivery', icon: Mail, color: '#1A82E2', connected: true, category: 'Email' },
    { id: 3, name: 'Slack', description: 'Team communication', icon: Zap, color: '#4A154B', connected: false, category: 'Communication' },
    { id: 4, name: 'Google Drive', description: 'Cloud storage', icon: Cloud, color: '#4285F4', connected: true, category: 'Storage' },
    { id: 5, name: 'Zapier', description: 'Automation platform', icon: Zap, color: '#FF4A00', connected: false, category: 'Automation' },
    { id: 6, name: 'PostgreSQL', description: 'Database', icon: Database, color: '#336791', connected: true, category: 'Database' },
    { id: 7, name: 'GitHub', description: 'Code repository', icon: Code, color: '#181717', connected: false, category: 'Development' },
    { id: 8, name: 'Mailchimp', description: 'Email marketing', icon: Mail, color: '#FFE01B', connected: false, category: 'Email' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Integrations</h1>
        <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Connect your favorite tools and services</p>
      </div>

      <div className="rounded-xl p-3 md:p-4 mb-6" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: theme.colors.text.muted }} />
            <input type="text" placeholder="Search integrations..." className="w-full pl-9 md:pl-10 pr-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }} />
          </div>
          <select className="px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Categories</option>
            <option>Payment</option>
            <option>Email</option>
            <option>Communication</option>
            <option>Storage</option>
            <option>Automation</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {integrations.map((integration, index) => {
          const Icon = integration.icon;
          return (
            <motion.div key={integration.id} className="rounded-xl p-5 md:p-6 group cursor-pointer" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -4 }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${integration.color}15` }}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: integration.color }} />
                </div>
                {integration.connected && (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.status.success }}>
                    <Check className="w-4 h-4" style={{ color: theme.colors.text.inverse }} />
                  </div>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>{integration.name}</h3>
              <p className="text-xs md:text-sm mb-3" style={{ color: theme.colors.text.secondary }}>{integration.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.colors.primary}15`, color: theme.colors.primary }}>
                  {integration.category}
                </span>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors" style={{ backgroundColor: integration.connected ? theme.colors.surface.card : theme.colors.primary, color: integration.connected ? theme.colors.text.primary : theme.colors.text.inverse, border: integration.connected ? `1px solid ${theme.colors.border.default}` : 'none' }}>
                  {integration.connected ? 'Connected' : 'Connect'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationsPage;
