// Loader component
import React from 'react';

export const Loader = ({ size = 'md', className = '' }) => {
  return <div className={`loader loader-${size} ${className}`} />;
};

export const Skeleton = ({ width = '100%', height = '1rem', className = '' }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height }}
    />
  );
};

export default Loader;
