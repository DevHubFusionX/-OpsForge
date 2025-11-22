import React from 'react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '../../../config/theme';

export const BarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBar data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.border.light} />
        <XAxis dataKey="name" stroke={theme.colors.text.muted} style={{ fontSize: '12px' }} />
        <YAxis stroke={theme.colors.text.muted} style={{ fontSize: '12px' }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: theme.colors.surface.base, 
            border: `1px solid ${theme.colors.border.light}`,
            borderRadius: '8px',
            fontSize: '12px'
          }} 
        />
        <Bar dataKey="value" fill={theme.colors.primary} radius={[8, 8, 0, 0]} />
      </RechartsBar>
    </ResponsiveContainer>
  );
};

export default BarChart;
