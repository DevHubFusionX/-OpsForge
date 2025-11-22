// FormSection component
import React from 'react';

export const FormSection = ({ title, description, children }) => {
  return (
    <div className="form-section">
      {title && (
        <div className="form-section-header">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      )}
      <div className="form-section-body">{children}</div>
    </div>
  );
};

export default FormSection;
