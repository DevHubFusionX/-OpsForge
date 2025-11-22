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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'py-2' : 'py-3'
      }`}>
        <div className={`mx-auto px-4 sm:px-6 transition-all duration-500 ease-out ${
          scrolled ? 'max-w-5xl' : 'max-w-7xl'
        }`}>
          <div className="relative">
            {/* Subtle glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/10 rounded-2xl blur-xl transition-all duration-500 ${
              scrolled ? 'opacity-100 scale-95' : 'opacity-0 scale-100'
            }`} />
            
            {/* Main navbar */}
            <div className={`relative bg-white/95 backdrop-blur-xl border shadow-sm transition-all duration-500 ease-out ${
              scrolled 
                ? 'rounded-2xl border-gray-200/60 shadow-xl px-4 py-2 scale-95' 
                : 'rounded-xl border-gray-200/40 px-6 py-2.5 scale-100'
            }`}>
              <div className="flex items-center justify-between gap-8">
                {/* Logo */}
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  scrolled ? 'scale-90' : 'scale-100'
                }`}>
                  <Logo />
                </div>
                
                {/* Nav links - hidden on mobile */}
                <div className={`hidden lg:flex items-center gap-1 flex-1 justify-center transition-all duration-300 ${
                  scrolled ? 'scale-95 opacity-95' : 'scale-100 opacity-100'
                }`}>
                  <NavLinks />
                </div>
                
                {/* Auth buttons */}
                <div className={`flex items-center gap-2 transition-all duration-300 ${
                  scrolled ? 'scale-95' : 'scale-100'
                }`}>
                  <AuthButtons />
                  
                  {/* Mobile menu button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="w-5 h-5 text-gray-900 transition-transform duration-200" />
                    ) : (
                      <Menu className="w-5 h-5 text-gray-900 transition-transform duration-200" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle border accent */}
            <div className={`absolute inset-0 rounded-2xl border transition-all duration-500 pointer-events-none ${
              scrolled 
                ? 'border-indigo-200/30 opacity-100 scale-95' 
                : 'border-transparent opacity-0 scale-100'
            }`} />
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
