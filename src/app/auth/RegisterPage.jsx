import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Clock } from 'lucide-react';
import { AnimatedLogo } from '../../components/AnimatedLogo';
import { BackgroundImage } from '../../components/BackgroundImage';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left - Visual */}
      <motion.div 
        className="hidden lg:flex items-center justify-center bg-gradient-to-br from-slate-800 via-cyan-900 to-slate-900 p-12 relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <BackgroundImage />
        <div className="max-w-lg text-white space-y-10 relative z-10">
          <div>
            <h2 className="text-5xl font-bold">Start Automating Today</h2>
            <p className="text-xl text-blue-50 mt-4">
              Join thousands of teams transforming their workflows.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg">Free forever plan</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6" />
              <span className="text-lg">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6" />
              <span className="text-lg">Join 10,000+ teams</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right - Form */}
      <motion.div 
        className="flex items-center justify-center p-8 bg-gradient-to-br from-cyan-50 via-white to-slate-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <AnimatedLogo className="h-32 w-auto" />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
            <p className="text-gray-500 mt-2">Get started with your free account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password (min. 8 characters)"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="flex items-start text-sm cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">Terms</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              Create account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/auth/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign in
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
