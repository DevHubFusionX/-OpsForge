// LandingLayout component
import React from 'react';
import { Navbar } from '../components/navbar/Navbar';

export const LandingLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {children}
      </main>
     
    </div>
  );
};

export default LandingLayout;
