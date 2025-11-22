import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Mail, MessageSquare, Image, Copy, Eye } from 'lucide-react';
import { theme } from '../../config/theme';

export const TemplatesPage = () => {
  const templates = [
    { id: 1, name: 'Welcome Email', type: 'email', category: 'Email', icon: Mail, color: theme.colors.primary, uses: 234 },
    { id: 2, name: 'Invoice Template', type: 'document', category: 'Document', icon: FileText, color: theme.colors.status.success, uses: 189 },
    { id: 3, name: 'Social Media Post', type: 'social', category: 'Social', icon: MessageSquare, color: theme.colors.status.info, uses: 456 },
    { id: 4, name: 'Product Launch Email', type: 'email', category: 'Email', icon: Mail, color: theme.colors.primary, uses: 123 },
    { id: 5, name: 'Blog Post Template', type: 'content', category: 'Content', icon: FileText, color: theme.colors.secondary, uses: 312 },
    { id: 6, name: 'Instagram Story', type: 'social', category: 'Social', icon: Image, color: theme.colors.status.warning, uses: 267 },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Templates</h1>
        <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Pre-built templates for emails, documents, and content</p>
      </div>

      <div className="rounded-xl p-3 md:p-4 mb-6" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: theme.colors.text.muted }} />
            <input type="text" placeholder="Search templates..." className="w-full pl-9 md:pl-10 pr-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }} />
          </div>
          <select className="px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Categories</option>
            <option>Email</option>
            <option>Document</option>
            <option>Social</option>
            <option>Content</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {templates.map((template, index) => {
          const Icon = template.icon;
          return (
            <motion.div key={template.id} className="rounded-xl p-5 md:p-6 group cursor-pointer" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -4 }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${template.color}15` }}>
                <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: template.color }} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>{template.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${template.color}15`, color: template.color }}>
                  {template.category}
                </span>
                <span className="text-xs" style={{ color: theme.colors.text.muted }}>{template.uses} uses</span>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors" style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}>
                  <Copy className="w-4 h-4" />
                  Use Template
                </button>
                <button className="p-2 rounded-lg transition-colors" style={{ backgroundColor: theme.colors.surface.card, color: theme.colors.text.muted }}>
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplatesPage;
