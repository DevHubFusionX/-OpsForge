// Avatar component
import React from 'react';

export const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'md',
  initials = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`avatar avatar-${size} ${className}`} {...props}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
