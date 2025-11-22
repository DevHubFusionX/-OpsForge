// Input component
import React from 'react';

export const Input = ({
  type = 'text',
  placeholder = '',
  disabled = false,
  error = false,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`input ${error ? 'input-error' : ''} ${className}`}
      {...props}
    />
  );
};

export default Input;
