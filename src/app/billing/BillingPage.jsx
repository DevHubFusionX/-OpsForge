import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Download, Calendar, Check, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { theme } from '../../config/theme';

export const BillingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const currentPlan = {
    name: 'Pro',
    price: billingCycle === 'monthly' ? 49 : 470,
    nextBilling: 'Dec 15, 2024',
    status: 'active',
  };

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 0, yearly: 0 },
      features: ['Up to 10 workflows', '1,000 executions/month', 'Basic integrations', 'Community support'],
      current: false,
    },
    {
      name: 'Pro',
      icon: Crown,
      price: { monthly: 49, yearly: 470 },
      features: ['Unlimited workflows', '100K executions/month', '1000+ integrations', 'Priority support', 'Advanced analytics'],
      current: true,
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Sparkles,
      price: { monthly: 199, yearly: 1990 },
      features: ['Everything in Pro', 'Unlimited executions', 'Custom integrations', 'Dedicated support', 'SLA guarantee'],
      current: false,
    },
  ];

  const invoices = [
    { id: 'INV-001', date: 'Nov 15, 2024', amount: '$49.00', status: 'paid' },
    { id: 'INV-002', date: 'Oct 15, 2024', amount: '$49.00', status: 'paid' },
    { id: 'INV-003', date: 'Sep 15, 2024', amount: '$49.00', status: 'paid' },
  ];

  return (
    <div className="p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Billing & Subscription</h1>
        <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Manage your plan and billing information</p>
      </div>

      {/* Current Plan Card */}
      <motion.div
        className="rounded-2xl p-8 mb-8 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: theme.colors.text.inverse }} />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm font-medium mb-2" style={{ color: `${theme.colors.text.inverse}90` }}>Current Plan</p>
              <h2 className="text-4xl font-bold mb-2" style={{ color: theme.colors.text.inverse }}>{currentPlan.name}</h2>
              <p className="text-2xl font-semibold" style={{ color: theme.colors.text.inverse }}>
                ${currentPlan.price}<span className="text-lg font-normal">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: `${theme.colors.text.inverse}20` }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.status.success }} />
              <span className="text-sm font-medium" style={{ color: theme.colors.text.inverse }}>Active</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm" style={{ color: `${theme.colors.text.inverse}90` }}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Next billing: {currentPlan.nextBilling}</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors" style={{ backgroundColor: theme.colors.text.inverse, color: theme.colors.primary }}>
              Manage Plan
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-4 p-1 rounded-xl" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            className="px-6 py-2 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: billingCycle === 'monthly' ? theme.colors.primary : 'transparent',
              color: billingCycle === 'monthly' ? theme.colors.text.inverse : theme.colors.text.secondary,
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className="px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
            style={{
              backgroundColor: billingCycle === 'yearly' ? theme.colors.primary : 'transparent',
              color: billingCycle === 'yearly' ? theme.colors.text.inverse : theme.colors.text.secondary,
            }}
          >
            Yearly
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: theme.colors.status.success, color: theme.colors.text.inverse }}>
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={plan.name}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{ 
                backgroundColor: theme.colors.surface.base,
                border: plan.current ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.border.light}`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${theme.colors.primary}20`, color: theme.colors.primary }}>
                  Popular
                </div>
              )}
              
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.colors.primary}15` }}>
                <Icon className="w-6 h-6" style={{ color: theme.colors.primary }} />
              </div>

              <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: theme.colors.text.primary }}>
                  ${plan.price[billingCycle]}
                </span>
                <span className="text-sm" style={{ color: theme.colors.text.muted }}>
                  /{billingCycle === 'monthly' ? 'month' : 'year'}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.colors.status.success }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-lg font-semibold transition-colors"
                style={{
                  backgroundColor: plan.current ? theme.colors.surface.panel : theme.colors.primary,
                  color: plan.current ? theme.colors.text.primary : theme.colors.text.inverse,
                  border: plan.current ? `1px solid ${theme.colors.border.default}` : 'none',
                }}
                disabled={plan.current}
              >
                {plan.current ? 'Current Plan' : 'Upgrade'}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Payment Method & Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Method */}
        <motion.div
          className="rounded-xl p-6"
          style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Payment Method</h3>
          <div className="flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme.colors.primary}15` }}>
              <CreditCard className="w-6 h-6" style={{ color: theme.colors.primary }} />
            </div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: theme.colors.text.primary }}>•••• •••• •••• 4242</p>
              <p className="text-sm" style={{ color: theme.colors.text.muted }}>Expires 12/2025</p>
            </div>
            <button className="text-sm font-semibold" style={{ color: theme.colors.primary }}>Update</button>
          </div>
        </motion.div>

        {/* Recent Invoices */}
        <motion.div
          className="rounded-xl p-6"
          style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.text.primary }}>Recent Invoices</h3>
          <div className="space-y-3">
            {invoices.map((invoice, idx) => (
              <div key={invoice.id} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.colors.surface.card }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: theme.colors.text.primary }}>{invoice.id}</p>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>{invoice.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold" style={{ color: theme.colors.text.primary }}>{invoice.amount}</span>
                  <button className="p-2 rounded-lg transition-colors" style={{ color: theme.colors.text.muted }}>
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BillingPage;
