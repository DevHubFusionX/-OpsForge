import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, Clock, Facebook, Twitter, Instagram, Linkedin, Image, Video } from 'lucide-react';
import { theme } from '../../config/theme';

export const SocialSchedulerPage = () => {
  const stats = [
    { label: 'Scheduled', value: '48', icon: Calendar, color: theme.colors.primary },
    { label: 'Published', value: '234', icon: Clock, color: theme.colors.status.success },
    { label: 'Platforms', value: '4', icon: Facebook, color: theme.colors.status.info },
    { label: 'This Week', value: '12', icon: Calendar, color: theme.colors.secondary },
  ];

  const posts = [
    { id: 1, content: 'Check out our new product launch! 🚀', platform: 'twitter', date: '2024-02-01', time: '10:00 AM', status: 'scheduled', media: true },
    { id: 2, content: 'Behind the scenes at our office...', platform: 'instagram', date: '2024-02-01', time: '2:00 PM', status: 'scheduled', media: true },
    { id: 3, content: 'New blog post: 10 Tips for Success', platform: 'linkedin', date: '2024-02-02', time: '9:00 AM', status: 'scheduled', media: false },
    { id: 4, content: 'Happy Monday! Start your week right', platform: 'facebook', date: '2024-01-29', time: '8:00 AM', status: 'published', media: false },
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'facebook': return Facebook;
      case 'twitter': return Twitter;
      case 'instagram': return Instagram;
      case 'linkedin': return Linkedin;
      default: return Facebook;
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'facebook': return '#1877F2';
      case 'twitter': return '#1DA1F2';
      case 'instagram': return '#E4405F';
      case 'linkedin': return '#0A66C2';
      default: return theme.colors.primary;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Social Media Scheduler</h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Schedule and manage social media posts</p>
        </div>
        <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base" style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}>
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">New Post</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        {[
          { name: 'Facebook', icon: Facebook, color: '#1877F2', connected: true },
          { name: 'Twitter', icon: Twitter, color: '#1DA1F2', connected: true },
          { name: 'Instagram', icon: Instagram, color: '#E4405F', connected: true },
          { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2', connected: false },
        ].map((platform, index) => {
          const Icon = platform.icon;
          return (
            <motion.div key={platform.name} className="rounded-xl p-4 flex items-center justify-between" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${platform.color}15` }}>
                  <Icon className="w-5 h-5" style={{ color: platform.color }} />
                </div>
                <span className="font-semibold text-sm" style={{ color: theme.colors.text.primary }}>{platform.name}</span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: platform.connected ? `${theme.colors.status.success}20` : `${theme.colors.text.muted}20`, color: platform.connected ? theme.colors.status.success : theme.colors.text.muted }}>
                {platform.connected ? 'Connected' : 'Connect'}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="space-y-3 md:space-y-4">
        {posts.map((post, index) => {
          const PlatformIcon = getPlatformIcon(post.platform);
          const platformColor = getPlatformColor(post.platform);
          return (
            <motion.div key={post.id} className="rounded-xl p-4 md:p-6 group" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 md:gap-4 flex-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${platformColor}15` }}>
                    <PlatformIcon className="w-5 h-5 md:w-6 md:h-6" style={{ color: platformColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base mb-2" style={{ color: theme.colors.text.primary }}>{post.content}</p>
                    <div className="flex items-center gap-3 text-xs" style={{ color: theme.colors.text.muted }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.time}
                      </span>
                      {post.media && <span className="flex items-center gap-1"><Image className="w-3 h-3" />Media</span>}
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap self-start md:self-center" style={{ backgroundColor: post.status === 'scheduled' ? `${theme.colors.primary}20` : `${theme.colors.status.success}20`, color: post.status === 'scheduled' ? theme.colors.primary : theme.colors.status.success }}>
                  {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialSchedulerPage;
