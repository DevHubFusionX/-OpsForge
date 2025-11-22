import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Grid, List, Search, Filter, Image as ImageIcon, Video, File, MoreVertical, Download, Trash2, Eye } from 'lucide-react';
import { theme } from '../../config/theme';

export const MediaPage = () => {
  const [view, setView] = useState('grid');

  const stats = [
    { label: 'Total Files', value: '1,234', icon: File },
    { label: 'Images', value: '856', icon: ImageIcon },
    { label: 'Videos', value: '124', icon: Video },
    { label: 'Storage Used', value: '4.2 GB', icon: File },
  ];

  const media = [
    { id: 1, name: 'product-hero.jpg', type: 'image', size: '2.4 MB', date: '2 days ago', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
    { id: 2, name: 'dashboard-screenshot.png', type: 'image', size: '1.8 MB', date: '5 days ago', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
    { id: 3, name: 'team-photo.jpg', type: 'image', size: '3.2 MB', date: '1 week ago', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop' },
    { id: 4, name: 'promo-video.mp4', type: 'video', size: '45.6 MB', date: '2 weeks ago', url: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop' },
    { id: 5, name: 'logo-variations.zip', type: 'file', size: '12.3 MB', date: '3 weeks ago', url: null },
    { id: 6, name: 'marketing-banner.jpg', type: 'image', size: '1.5 MB', date: '1 month ago', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop' },
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case 'image': return ImageIcon;
      case 'video': return Video;
      default: return File;
    }
  };

  return (
    <div className="p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Media Library</h1>
          <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Manage your images, videos, and files</p>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.secondary}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.primary}
        >
          <Upload className="w-5 h-5" />
          Upload Files
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="rounded-xl p-5"
              style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                  <Icon className="w-5 h-5" style={{ color: theme.colors.primary }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>{stat.value}</h3>
              <p className="text-xs" style={{ color: theme.colors.text.secondary }}>{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Toolbar */}
      <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.text.muted }} />
              <input
                type="text"
                placeholder="Search files..."
                className="w-full pl-10 pr-4 py-2 rounded-lg outline-none transition-all"
                style={{ 
                  backgroundColor: theme.colors.surface.card,
                  border: `1px solid ${theme.colors.border.default}`,
                  color: theme.colors.text.primary
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = theme.colors.primary}
                onBlur={(e) => e.currentTarget.style.borderColor = theme.colors.border.default}
              />
            </div>
            <select
              className="px-4 py-2 rounded-lg outline-none"
              style={{ 
                backgroundColor: theme.colors.surface.card,
                border: `1px solid ${theme.colors.border.default}`,
                color: theme.colors.text.primary
              }}
            >
              <option>All Types</option>
              <option>Images</option>
              <option>Videos</option>
              <option>Files</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView('grid')}
              className="p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: view === 'grid' ? `${theme.colors.primary}15` : 'transparent',
                color: view === 'grid' ? theme.colors.primary : theme.colors.text.muted
              }}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView('list')}
              className="p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: view === 'list' ? `${theme.colors.primary}15` : 'transparent',
                color: view === 'list' ? theme.colors.primary : theme.colors.text.muted
              }}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Media Grid */}
      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map((item, index) => {
            const Icon = getFileIcon(item.type);
            return (
              <motion.div
                key={item.id}
                className="group rounded-xl overflow-hidden cursor-pointer"
                style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Preview */}
                <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: theme.colors.surface.card }}>
                  {item.url ? (
                    <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-12 h-12" style={{ color: theme.colors.text.muted }} />
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-2 rounded-lg" style={{ backgroundColor: theme.colors.text.inverse }}>
                      <Eye className="w-4 h-4" style={{ color: theme.colors.text.primary }} />
                    </button>
                    <button className="p-2 rounded-lg" style={{ backgroundColor: theme.colors.text.inverse }}>
                      <Download className="w-4 h-4" style={{ color: theme.colors.text.primary }} />
                    </button>
                    <button className="p-2 rounded-lg" style={{ backgroundColor: theme.colors.text.inverse }}>
                      <Trash2 className="w-4 h-4" style={{ color: theme.colors.status.danger }} />
                    </button>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <p className="font-semibold text-sm truncate mb-1" style={{ color: theme.colors.text.primary }}>{item.name}</p>
                  <div className="flex items-center justify-between text-xs" style={{ color: theme.colors.text.muted }}>
                    <span>{item.size}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
          {media.map((item, index) => {
            const Icon = getFileIcon(item.type);
            return (
              <motion.div
                key={item.id}
                className="flex items-center gap-4 p-4 group cursor-pointer transition-colors"
                style={{ borderBottom: `1px solid ${theme.colors.border.light}` }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.surface.card}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0" style={{ backgroundColor: theme.colors.surface.card }}>
                  {item.url ? (
                    <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-6 h-6" style={{ color: theme.colors.text.muted }} />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1" style={{ color: theme.colors.text.primary }}>{item.name}</p>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>{item.type} • {item.size}</p>
                </div>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{item.date}</p>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MediaPage;
