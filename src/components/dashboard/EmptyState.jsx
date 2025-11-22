import React from 'react';
import { Inbox, Plus } from 'lucide-react';
import { theme } from '../../config/theme';

export const EmptyState = ({ 
  icon: Icon = Inbox, 
  title = 'No data yet', 
  description = 'Get started by creating your first item',
  actionLabel,
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: `${theme.colors.primary}10` }}
      >
        <Icon className="w-8 h-8" style={{ color: theme.colors.primary }} />
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
        {title}
      </h3>
      <p className="text-sm mb-6 max-w-sm" style={{ color: theme.colors.text.secondary }}>
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all hover:shadow-md"
          style={{ 
            backgroundColor: theme.colors.primary,
            color: theme.colors.text.inverse
          }}
        >
          <Plus className="w-4 h-4" />
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
