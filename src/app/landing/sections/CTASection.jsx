import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#38BDF8_48%,#38BDF8_52%,transparent_52%)] opacity-5" />

      <div className="relative max-w-4xl mx-auto">
        {/* Floating badges */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white text-sm font-medium">50K+ Users</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Zap className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white text-sm font-medium">500K+ Workflows</span>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to
            <br />
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent">
              Automate Everything?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of teams saving 40+ hours per week with intelligent automation
          </p>

          {/* CTA Button with creative layout */}
          <div className="flex flex-col items-center gap-6">
            <a
              href="/auth/register"
              className="group relative px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl shadow-[#38BDF8]/50 hover:shadow-[#38BDF8]/70"
            >
              <span className="flex items-center gap-3">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#38BDF8] animate-ping opacity-20" />
            </a>

            {/* Reassurance text */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-500 text-sm">
                No credit card required • Free forever • Cancel anytime
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-xs">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>2,847 people signed up this week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#38BDF8]/30"
              style={{
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
