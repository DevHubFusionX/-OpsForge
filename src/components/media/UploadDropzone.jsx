// UploadDropzone component
import React, { useState } from 'react';

export const UploadDropzone = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    onUpload?.(files);
  };

  return (
    <div
      className={`upload-dropzone ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <span className="upload-icon">📤</span>
      <h4>Drop files here or click to upload</h4>
      <p>Supported formats: JPG, PNG, PDF, MP4</p>
      <input type="file" multiple hidden />
    </div>
  );
};

export default UploadDropzone;
