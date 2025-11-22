// FileCard component
import React from 'react';
import Card from '../core/Card';

export const FileCard = ({ name, type, size, thumbnail }) => {
  return (
    <Card className="file-card">
      <div className="file-thumbnail">
        {thumbnail ? (
          <img src={thumbnail} alt={name} />
        ) : (
          <span className="file-icon">📄</span>
        )}
      </div>
      <div className="file-info">
        <h4>{name}</h4>
        <span className="file-meta">{type} • {size}</span>
      </div>
    </Card>
  );
};

export default FileCard;
