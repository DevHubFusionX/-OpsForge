import React from 'react';
import { statsData } from '../../../data/landingData';

export const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-slate-800 border-y border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
