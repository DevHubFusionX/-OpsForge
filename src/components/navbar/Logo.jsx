import React from 'react';
import logoSvg from '../../assets/image.svg';

export const Logo = () => {
  return (
    <a href="/" className="flex items-center group h-16">
      <img src={logoSvg} alt="OpsForge" width="110" height="110" className="transition-transform duration-300 group-hover:scale-105 h-full w-auto" />
    
    </a>
  );
};

export default Logo;
