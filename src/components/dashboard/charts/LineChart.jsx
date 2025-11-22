import React from 'react';
import { LineChart as RechartsLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '../../../config/theme';

export const LineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLine data={data}>
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
        <Line type="monotone" dataKey="value" stroke={theme.colors.primary} strokeWidth={2} dot={{ fill: theme.colors.primary }} />
      </RechartsLine>
    </ResponsiveContainer>
  );
};

export default LineChart;
