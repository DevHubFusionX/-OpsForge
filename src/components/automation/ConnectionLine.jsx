// ConnectionLine component
import React from 'react';

export const ConnectionLine = ({ from, to }) => {
  return (
    <svg className="connection-line" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        d={`M 0 50 Q 50 0, 100 50`}
        fill="none"
        stroke="#38BDF8"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ConnectionLine;
