// FormField component
import React from 'react';
import Input from '../core/Input';

export const FormField = ({
  label,
  error,
  helperText,
  required = false,
  children,
  ...props
}) => {
  return (
    <div className="form-field">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
      )}
      {children || <Input error={error} {...props} />}
      {error && <span className="form-error">{error}</span>}
      {helperText && !error && <span className="form-helper">{helperText}</span>}
    </div>
  );
};

export default FormField;
