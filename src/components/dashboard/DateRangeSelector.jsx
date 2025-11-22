import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { theme } from '../../config/theme';

export const DateRangeSelector = () => {
  const [selected, setSelected] = useState('Last 7 days');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Today', 'Last 7 days', 'Last 30 days', 'Last 3 months', 'Last year', 'Custom'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:shadow-md"
        style={{ 
          backgroundColor: theme.colors.surface.base,
          borderColor: theme.colors.border.default,
          color: theme.colors.text.primary
        }}
      >
        <Calendar className="w-4 h-4" style={{ color: theme.colors.primary }} />
        <span className="text-sm font-medium">{selected}</span>
        <ChevronDown className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full mt-2 right-0 w-48 rounded-lg shadow-xl border z-50"
          style={{ 
            backgroundColor: theme.colors.surface.base,
            borderColor: theme.colors.border.light
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg"
              style={{ 
                color: selected === option ? theme.colors.primary : theme.colors.text.primary,
                backgroundColor: selected === option ? `${theme.colors.primary}10` : 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selected === option ? `${theme.colors.primary}10` : 'transparent'}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;
