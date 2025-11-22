// NodeCard component
import React from 'react';

export const NodeCard = ({ type, label, icon }) => {
  return (
    <div className={`node-card node-${type}`}>
      {icon && <span className="node-icon">{icon}</span>}
      <span className="node-label">{label}</span>
    </div>
  );
};

export default NodeCard;
