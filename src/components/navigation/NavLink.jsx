// NavLink component
import React from 'react';

export const NavLink = ({ href, label, icon }) => {
  const isActive = window.location.pathname === href;

  return (
    <a href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
    </a>
  );
};

export default NavLink;
