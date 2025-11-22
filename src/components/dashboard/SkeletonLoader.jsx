import React from 'react';
import { theme } from '../../config/theme';

export const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'kpi':
        return (
          <div className="rounded-xl p-5 animate-pulse" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl" style={{ backgroundColor: theme.colors.surface.panel }} />
              <div className="w-12 h-5 rounded-full" style={{ backgroundColor: theme.colors.surface.panel }} />
            </div>
            <div className="w-20 h-7 rounded mb-2" style={{ backgroundColor: theme.colors.surface.panel }} />
            <div className="w-24 h-4 rounded" style={{ backgroundColor: theme.colors.surface.panel }} />
          </div>
        );
      
      case 'chart':
        return (
          <div className="rounded-xl p-6 animate-pulse" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
            <div className="w-40 h-6 rounded mb-4" style={{ backgroundColor: theme.colors.surface.panel }} />
            <div className="h-64 rounded-lg" style={{ backgroundColor: theme.colors.surface.panel }} />
          </div>
        );
      
      case 'list':
        return (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-start gap-3 p-2 animate-pulse">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: theme.colors.surface.panel }} />
                <div className="flex-1">
                  <div className="w-full h-4 rounded mb-2" style={{ backgroundColor: theme.colors.surface.panel }} />
                  <div className="w-20 h-3 rounded" style={{ backgroundColor: theme.colors.surface.panel }} />
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="rounded-xl p-6 animate-pulse" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
            <div className="w-32 h-6 rounded mb-4" style={{ backgroundColor: theme.colors.surface.panel }} />
            <div className="space-y-3">
              <div className="w-full h-4 rounded" style={{ backgroundColor: theme.colors.surface.panel }} />
              <div className="w-3/4 h-4 rounded" style={{ backgroundColor: theme.colors.surface.panel }} />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <React.Fragment key={i}>{renderSkeleton()}</React.Fragment>
      ))}
    </>
  );
};

export default SkeletonLoader;
