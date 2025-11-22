// StatsCard component
import React from 'react';
import Card from '../core/Card';

export const StatsCard = ({ label, value, change, icon }) => {
  const isPositive = change >= 0;

  return (
    <Card className="stats-card">
      <div className="stats-header">
        <span className="stats-label">{label}</span>
        {icon && <span className="stats-icon">{icon}</span>}
      </div>
      <div className="stats-value">{value}</div>
      {change !== undefined && (
        <div className={`stats-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}%
        </div>
      )}
    </Card>
  );
};

export default StatsCard;
