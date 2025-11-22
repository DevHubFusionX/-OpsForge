// TagBadge component
import React from 'react';

export const TagBadge = ({ label, onRemove, color = 'default' }) => {
  return (
    <span className={`tag-badge tag-${color}`}>
      {label}
      {onRemove && (
        <button className="tag-remove" onClick={onRemove}>
          ×
        </button>
      )}
    </span>
  );
};

export default TagBadge;
