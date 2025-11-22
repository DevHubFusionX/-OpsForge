import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../config/theme';
import { AnimatedLogo } from '../AnimatedLogo';

export const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: theme.colors.surface.panel }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Forging Sparks */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${30 + Math.random() * 40}%`,
                background: `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                boxShadow: `0 0 6px ${theme.colors.primary}`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Data Streams */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute h-px"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '60px',
                background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)`,
                opacity: 0.6,
              }}
              animate={{
                x: [-100, window.innerWidth + 100],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}

          {/* Circuit Grid Pattern */}
          <motion.div className="absolute inset-0 pointer-events-none">
            {/* Horizontal Circuit Lines */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`h-line-${i}`}
                className="absolute"
                style={{
                  left: '20%',
                  top: `${40 + i * 10}%`,
                  width: '60%',
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${theme.colors.primary}, ${theme.colors.secondary}, transparent)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
            
            {/* Vertical Circuit Lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`v-line-${i}`}
                className="absolute"
                style={{
                  left: `${30 + i * 10}%`,
                  top: '35%',
                  width: '1px',
                  height: '30%',
                  background: `linear-gradient(180deg, transparent, ${theme.colors.accent}, transparent)`,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
            
            {/* Circuit Nodes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${35 + (i % 3) * 15}%`,
                  top: `${42 + Math.floor(i / 3) * 10}%`,
                  backgroundColor: theme.colors.primary,
                  boxShadow: `0 0 8px ${theme.colors.primary}`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.2, 1],
                  opacity: [0, 1, 1, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 1 + i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Animated Logo */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                filter: [
                  `drop-shadow(0 0 20px ${theme.colors.primary}50)`,
                  `drop-shadow(0 0 40px ${theme.colors.secondary}60)`,
                  `drop-shadow(0 0 20px ${theme.colors.primary}50)`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AnimatedLogo className="h-20 w-auto" />
            </motion.div>
          </motion.div>



          {/* Loading Indicator */}
          <motion.div
            className="mt-6 flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="w-8 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${theme.colors.secondary}, transparent)` }}
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span
              className="text-xs tracking-widest"
              style={{ color: theme.colors.text.muted, fontFamily: theme.typography.body.family }}
            >
              LOADING
            </span>
            <motion.div
              className="w-8 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)` }}
              animate={{ x: [20, -20, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;