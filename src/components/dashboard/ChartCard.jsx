// ChartCard component
import React from 'react';
import Card from '../core/Card';

export const ChartCard = ({ title, children }) => {
  return (
    <Card className="chart-card">
      <div className="chart-header">
        <h3>{title}</h3>
      </div>
      <div className="chart-body">{children}</div>
    </Card>
  );
};

export default ChartCard;
