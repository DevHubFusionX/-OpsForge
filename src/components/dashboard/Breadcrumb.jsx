import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { theme } from '../../config/theme';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-2 text-sm mb-4">
      <a 
        href="/dashboard" 
        className="flex items-center gap-1 transition-colors hover:opacity-80"
        style={{ color: theme.colors.text.muted }}
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </a>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
          {item.href ? (
            <a 
              href={item.href}
              className="transition-colors hover:opacity-80"
              style={{ color: index === items.length - 1 ? theme.colors.text.primary : theme.colors.text.muted }}
            >
              {item.label}
            </a>
          ) : (
            <span style={{ color: theme.colors.text.primary, fontWeight: 600 }}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
