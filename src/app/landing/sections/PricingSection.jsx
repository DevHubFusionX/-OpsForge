import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { pricingData } from '../../../data/landingData';

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Start free, scale as you grow
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !isYearly ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                isYearly ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-[#38BDF8] text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Funny Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Starter - Smaller, Tilted */}
          <div className="md:transform md:-rotate-2 md:scale-95 transition-transform hover:rotate-0 hover:scale-100">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">{pricingData[0].name}</h3>
                <p className="text-gray-600 text-sm">{pricingData[0].description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-black">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Forever free</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pricingData[0].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                {pricingData[0].cta}
              </button>
            </div>
          </div>

          {/* Pro - Larger, Highlighted */}
          <div className="md:transform md:rotate-2 md:scale-105 transition-transform hover:rotate-0 hover:scale-110">
            <div className="relative bg-gradient-to-br from-black to-gray-900 rounded-2xl border-2 border-[#38BDF8] p-8 shadow-2xl">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#38BDF8] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pricingData[1].name}</h3>
                <p className="text-gray-400 text-sm">{pricingData[1].description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? Math.floor(pricingData[1].priceYearly / 12) : pricingData[1].priceMonthly}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-[#38BDF8] mt-1">
                    ${pricingData[1].priceYearly} billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pricingData[1].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 bg-[#38BDF8] text-white font-semibold rounded-full hover:bg-[#0EA5E9] transition-colors shadow-lg">
                {pricingData[1].cta}
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            No credit card required • Cancel anytime • 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
