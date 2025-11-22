import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const FeatureCard = ({ icon, title, description, highlights, size, image, index = 0, isCenter = false, isOuter = false }) => {
  const IconComponent = Icons[icon];

  return (
    <motion.div 
      className={`group relative bg-white rounded-xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isCenter ? 'border-2 border-blue-500' : 'border border-gray-200'
      }`}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Card Number Badge */}
      {!isCenter && (
        <motion.div
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-sm font-bold shadow-md z-10"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring" }}
        >
          {index + 1}
        </motion.div>
      )}
      
      <div className="flex flex-col flex-1 p-6">
        {/* Icon */}
        <motion.div 
          className={`${
            isCenter ? 'w-16 h-16 mb-4' : 'w-12 h-12 mb-3'
          } rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 flex items-center justify-center`}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
        >
          {IconComponent && <IconComponent className={`${
            isCenter ? 'w-8 h-8' : 'w-6 h-6'
          } text-blue-600`} />}
        </motion.div>

        {/* Title */}
        <motion.h3 
          className={`${
            isCenter ? 'text-2xl' : 'text-lg'
          } font-bold text-black mb-2`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className={`text-gray-600 ${
            isCenter ? 'text-base' : 'text-sm'
          } leading-relaxed mb-3 flex-1`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        >
          {description}
        </motion.p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && !isOuter && (
          <div className="flex flex-wrap gap-1.5">
            {highlights.slice(0, isCenter ? 4 : 3).map((highlight, idx) => (
              <motion.span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + idx * 0.05 }}
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
