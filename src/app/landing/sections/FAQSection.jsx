import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../../../data/landingData';

export const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about OpsForge
          </p>
        </div>

        {/* Rare Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {faqData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#38BDF8] hover:shadow-lg transition-all duration-300"
              >
                <button
                  className="w-full p-6 flex justify-between items-start gap-4 text-left"
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                >
                  <span className="font-semibold text-black group-hover:text-[#38BDF8] transition-colors">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#38BDF8] flex items-center justify-center transition-colors">
                    {expanded === item.id ? (
                      <Minus className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    )}
                  </div>
                </button>
                {expanded === item.id && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqData.slice(3, 6).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#38BDF8] hover:shadow-lg transition-all duration-300"
              >
                <button
                  className="w-full p-6 flex justify-between items-start gap-4 text-left"
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                >
                  <span className="font-semibold text-black group-hover:text-[#38BDF8] transition-colors">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#38BDF8] flex items-center justify-center transition-colors">
                    {expanded === item.id ? (
                      <Minus className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    )}
                  </div>
                </button>
                {expanded === item.id && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
