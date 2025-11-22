import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, FileText, Image, Mail, Code, Wand2, ArrowRight, Zap } from 'lucide-react';
import { theme } from '../../config/theme';

export const AIToolsPage = () => {
  const tools = [
    {
      id: 1,
      name: 'Content Generator',
      description: 'Generate blog posts, articles, and marketing copy with AI',
      icon: FileText,
      color: '#8B5CF6',
      uses: 234,
    },
    {
      id: 2,
      name: 'Email Writer',
      description: 'Craft professional emails and responses instantly',
      icon: Mail,
      color: '#3B82F6',
      uses: 189,
    },
    {
      id: 3,
      name: 'Social Media Posts',
      description: 'Create engaging posts for all your social channels',
      icon: MessageSquare,
      color: '#10B981',
      uses: 456,
    },
    {
      id: 4,
      name: 'Image Generator',
      description: 'Generate unique images and graphics with AI',
      icon: Image,
      color: '#F59E0B',
      uses: 123,
    },
    {
      id: 5,
      name: 'Code Assistant',
      description: 'Get help with coding, debugging, and documentation',
      icon: Code,
      color: '#EF4444',
      uses: 89,
    },
    {
      id: 6,
      name: 'Smart Replies',
      description: 'Auto-generate customer support responses',
      icon: Wand2,
      color: '#EC4899',
      uses: 312,
    },
  ];

  const recentGenerations = [
    { type: 'Content', title: 'Blog post: "10 Marketing Tips"', time: '5 min ago' },
    { type: 'Email', title: 'Follow-up email to client', time: '1 hour ago' },
    { type: 'Social', title: 'LinkedIn post about product launch', time: '3 hours ago' },
  ];

  return (
    <div className="p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` }}>
            <Sparkles className="w-6 h-6" style={{ color: theme.colors.text.inverse }} />
          </div>
          <h1 className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>AI Tools</h1>
        </div>
        <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Supercharge your productivity with AI-powered tools</p>
      </div>

      {/* Stats Banner */}
      <motion.div
        className="rounded-2xl p-6 mb-8 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}15)`, border: `1px solid ${theme.colors.primary}30` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm mb-1" style={{ color: theme.colors.text.secondary }}>Total Generations</p>
            <p className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>1,403</p>
          </div>
          <div>
            <p className="text-sm mb-1" style={{ color: theme.colors.text.secondary }}>This Month</p>
            <p className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>234</p>
          </div>
          <div>
            <p className="text-sm mb-1" style={{ color: theme.colors.text.secondary }}>Credits Remaining</p>
            <p className="text-3xl font-bold" style={{ color: theme.colors.primary }}>Unlimited</p>
          </div>
        </div>
      </motion.div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.id}
              className="group rounded-2xl p-6 cursor-pointer relative overflow-hidden"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: tool.color }} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${tool.color}15` }}>
                  <Icon className="w-7 h-7" style={{ color: tool.color }} />
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>{tool.name}</h3>
                <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>{tool.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: theme.colors.text.muted }}>{tool.uses} uses</span>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Generations */}
      <motion.div
        className="rounded-xl p-6"
        style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>Recent Generations</h3>
          <button className="text-sm font-semibold" style={{ color: theme.colors.primary }}>View All</button>
        </div>
        <div className="space-y-3">
          {recentGenerations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg transition-colors cursor-pointer"
              style={{ backgroundColor: theme.colors.surface.card }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.surface.card}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                  <Zap className="w-5 h-5" style={{ color: theme.colors.primary }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: theme.colors.text.primary }}>{item.title}</p>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>{item.type} • {item.time}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" style={{ color: theme.colors.text.muted }} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AIToolsPage;
