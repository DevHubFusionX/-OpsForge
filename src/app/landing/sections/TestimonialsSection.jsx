import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../../../data/landingData';

export const TestimonialsSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-gray-600 text-lg">
            See what our customers have to say
          </p>
        </div>

        {/* Double Marquee */}
        <div className="space-y-6">
          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee">
              {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex-shrink-0 w-[400px] bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#38BDF8] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#38BDF8] text-[#38BDF8]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm">{testimonial.name}</div>
                      <div className="text-gray-500 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee-reverse">
              {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex-shrink-0 w-[400px] bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#38BDF8] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#38BDF8] text-[#38BDF8]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm">{testimonial.name}</div>
                      <div className="text-gray-500 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
