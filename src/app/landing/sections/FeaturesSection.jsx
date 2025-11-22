import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { featuresData } from '../../../data/landingData';
import FeatureCard from '../../../components/landing/FeatureCard';

export const FeaturesSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Everything You Need to Scale
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powerful features designed to automate your operations and accelerate growth
          </motion.p>
        </div>

        {/* Desktop: Center-Focused Circular Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[900px]">
            {/* Connecting Lines from Center */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {[
                { angle: -90 },
                { angle: -18 },
                { angle: 54 },
                { angle: 126 },
                { angle: 198 }
              ].map((item, idx) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const radius = 400;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;
                const centerX = '50%';
                const centerY = '50%';

                return (
                  <motion.line
                    key={idx}
                    x1={centerX}
                    y1={centerY}
                    x2={`calc(${centerX} + ${x}px)`}
                    y2={`calc(${centerY} + ${y}px)`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                  />
                );
              })}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Icon */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Center Card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <FeatureCard {...featuresData[1]} index={1} isCenter />
              </motion.div>
            </div>

            {/* Surrounding Cards in Circle */}
            {[
              { data: featuresData[0], angle: -90 },
              { data: featuresData[2], angle: -18 },
              { data: featuresData[3], angle: 198 },
              { data: featuresData[4], angle: 126 },
              { data: featuresData[5], angle: 54 }
            ].map((item, idx) => {
              const angleRad = (item.angle * Math.PI) / 180;
              const radius = 400;
              // Add extra spacing for bottom cards
              let adjustedRadius = radius;
              if (item.angle === 54) adjustedRadius = radius + 60;
              if (item.angle === 126) adjustedRadius = radius + 60;
              if (item.angle === 198) adjustedRadius = radius + 80;
              const x = Math.cos(angleRad) * adjustedRadius;
              const y = Math.sin(angleRad) * adjustedRadius;

              return (
                <div
                  key={item.data.id}
                  className="absolute left-1/2 top-1/2 w-72"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <FeatureCard {...item.data} index={item.data.id} isOuter />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Grid Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <FeatureCard {...feature} index={index} isCenter={index === 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
