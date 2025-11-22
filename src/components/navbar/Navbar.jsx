import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';
import { theme } from '../../config/theme';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled ? 'py-2' : 'py-3'
      }`}>
        <div className={`mx-auto px-4z sm:px-6 transition-all duration-700 ease-out ${
          scrolled ? 'max-w-5xl' : 'max-w-7xl'
        }`}>
          <div className="relative">
            {/* Glowing background effect - only when scrolled */}
            {scrolled && (
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/8 via-violet-500/8 to-indigo-600/8 rounded-full blur-2xl transition-opacity duration-700" />
            )}
            
            {/* Main navbar */}
            <div className={`relative bg-white/90 backdrop-blur-xl border shadow-sm transition-all duration-700 ease-out ${
              scrolled 
                ? 'rounded-full border-gray-200/80 shadow-lg px-5 py-2' 
                : 'rounded-xl border-gray-200 px-6 py-2.5'
            }`}>
              <div className="flex items-center justify-between gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Logo />
                </div>
                
                {/* Nav links - hidden on mobile */}
                <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                  <NavLinks />
                </div>
                
                {/* Auth buttons */}
                <div className="flex items-center gap-2">
                  <AuthButtons />
                  
                  {/* Mobile menu button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="w-5 h-5 text-gray-900" />
                    ) : (
                      <Menu className="w-5 h-5 text-gray-900" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Animated border ring - only when scrolled */}
            {scrolled && (
              <div className="absolute inset-0 rounded-full border border-indigo-500/15 animate-pulse pointer-events-none -z-10" />
            )}
          </div>
        </div>
      </nav>
      
      {/* Spacer */}
      <div className={`transition-all duration-700 ${
        scrolled ? 'h-16' : 'h-20'
      }`} />
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
