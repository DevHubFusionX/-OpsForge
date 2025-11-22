import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Workflow, Zap, Server, Database, Cloud } from 'lucide-react';

export const BackgroundImage = () => {
  const icons = [GitBranch, Workflow, Zap, Server, Database, Cloud];
  const codeSnippets = ['npm run', 'deploy', 'build', 'test', 'CI/CD', 'API', 'Docker', 'K8s'];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 150} 0 Q ${i * 150 + 75} 200, ${i * 150} 400 T ${i * 150} 800`}
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </svg>

      {/* Floating icons */}
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${(i * 20) % 80}%`,
            top: `${(i * 15) % 70}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-12 h-12 text-white" />
        </motion.div>
      ))}

      {/* Code snippets flowing */}
      {codeSnippets.map((code, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-sm text-white bg-white/10 px-3 py-1 rounded backdrop-blur-sm"
          style={{
            left: `${Math.random() * 80}%`,
            top: `-10%`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
        >
          {code}
        </motion.div>
      ))}

      {/* Workflow arrows */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`arrow-${i}`}
          className="absolute text-cyan-300"
          style={{
            left: `${(i * 25) % 90}%`,
            top: `${(i * 20) % 80}%`,
            fontSize: '40px'
          }}
          animate={{
            x: [0, 50, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7
          }}
        >
          →
        </motion.div>
      ))}

      {/* Pulsing dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundImage;
