import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Zap, DollarSign, Play, FileText } from 'lucide-react';

const links = [
  { label: 'Features', href: '/features', icon: Zap },
  { label: 'Pricing', href: '/pricing', icon: DollarSign },
  { label: 'Demo', href: '/demo', icon: Play },
  { label: 'Docs', href: '#', icon: FileText },
];

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div 
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Menu</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="p-6 space-y-2">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-900 hover:text-[#38BDF8] hover:bg-[#38BDF8]/5 rounded-xl font-semibold transition-all duration-200 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={onClose}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#38BDF8] transition-colors" />
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
            
            {/* Auth Buttons */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 space-y-3">
              <motion.a
                href="/auth/login"
                className="block px-4 py-3 text-gray-900 hover:text-[#38BDF8] hover:bg-gray-50 rounded-xl font-semibold text-center transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={onClose}
              >
                Login
              </motion.a>
              <motion.a
                href="/auth/register"
                className="block px-4 py-3 bg-[#38BDF8] text-white text-center rounded-xl font-semibold hover:bg-[#0EA5E9] hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
              >
                Sign Up
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
