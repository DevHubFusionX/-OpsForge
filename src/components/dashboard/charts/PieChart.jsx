import React from 'react';
import { PieChart as RechartsPie, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { theme } from '../../../config/theme';

const COLORS = [theme.colors.primary, theme.colors.secondary, theme.colors.accent, '#10B981', '#F59E0B'];

export const PieChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPie>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: theme.colors.surface.base, 
            border: `1px solid ${theme.colors.border.light}`,
            borderRadius: '8px',
            fontSize: '12px'
          }} 
        />
        <Legend wrapperStyle={{ fontSize: '12px' }} />
      </RechartsPie>
    </ResponsiveContainer>
  );
};

export default PieChart;
