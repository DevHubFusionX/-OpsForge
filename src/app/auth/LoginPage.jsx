import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { AnimatedLogo } from '../../components/AnimatedLogo';
import { BackgroundImage } from '../../components/BackgroundImage';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left - Form */}
      <motion.div 
        className="flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <AnimatedLogo className="h-32 w-auto" />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-500 mt-2">Sign in to continue to OpsForge</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                placeholder="Password"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="/auth/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              Sign in
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/auth/register" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign up
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right - Visual */}
      <motion.div 
        className="hidden lg:flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-12 relative"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <BackgroundImage />
        <div className="max-w-lg text-white space-y-10 relative z-10">
          <div>
            <h2 className="text-5xl font-bold">Automate Everything Effortlessly</h2>
            <p className="text-xl text-blue-50 mt-4">
              Join thousands of teams saving hours every week.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Zap className="w-6 h-6" />
              <span className="text-lg">Deploy in minutes</span>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="w-6 h-6" />
              <span className="text-lg">Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="w-6 h-6" />
              <span className="text-lg">Scale with confidence</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
