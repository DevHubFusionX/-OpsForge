import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative pt-22 pb-20 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#38BDF8]/4 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#38BDF8]/4 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1], 
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0],
          y: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full shadow-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
            </span>
            <span className="text-sm font-medium text-gray-900">Trusted by 50,000+ teams worldwide</span>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-black leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Automate Your
            <br />
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
              Business Operations
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Build powerful workflows without code. Connect your tools, automate tasks, and scale with precision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <motion.a
              href="/auth/register"
              className="group px-8 py-4 bg-black text-white font-semibold text-lg rounded-full hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Get Started Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="/demo"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-black font-semibold text-lg rounded-full border-2 border-gray-200/60 hover:border-[#38BDF8] hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Watch Demo
            </motion.a>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            className="flex items-center justify-center gap-6 text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex text-[#38BDF8] text-lg">★★★★★</div>
              <span className="font-semibold text-gray-900">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <span>500K+ workflows created</span>
            <div className="h-4 w-px bg-gray-300" />
            <span>99.9% uptime</span>
          </motion.div>
        </div>

   
      </div>
    </section>
  );
};

export default HeroSection;
