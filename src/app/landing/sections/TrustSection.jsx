import React from 'react';
import { motion } from 'framer-motion';

export const TrustSection = () => {
  const brands = [
    { name: 'Stripe', width: 'w-24' },
    { name: 'Shopify', width: 'w-28' },
    { name: 'Notion', width: 'w-24' },
    { name: 'Slack', width: 'w-20' },
    { name: 'Figma', width: 'w-20' },
    { name: 'Webflow', width: 'w-28' },
  ];

  return (
    <section className="py-16 px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          className="text-center text-sm font-medium text-gray-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by small businesses and teams worldwide
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className={`${brand.width} h-8 bg-gray-900 rounded flex items-center justify-center font-bold text-white text-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {brand.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
