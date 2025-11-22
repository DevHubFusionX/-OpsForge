import React from 'react';

export const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-2">
      <a
        href="/auth/login"
        className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all duration-200"
      >
        Login
      </a>
      <a
        href="/auth/register"
        className="relative px-5 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold rounded-full hover:shadow-md hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 overflow-hidden group"
      >
        <span className="relative z-10">Sign Up</span>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </a>
    </div>
  );
};

export default AuthButtons;
