// Landing page data
export const heroData = {
  title: 'Automate Your Operations',
  subtitle: 'Build powerful workflows without code. Connect your tools, automate tasks, and scale your business.',
  cta: 'Get Started',
  ctaSecondary: 'Watch Demo',
};

export const featuresData = [
  {
    id: 1,
    icon: 'Sparkles',
    title: 'AI Content Generator',
    description: 'Generate high-quality content in seconds with AI-powered writing tools. Create blog posts, social media content, and marketing copy effortlessly.',
    highlights: ['Blog posts', 'Social captions', 'Email templates', 'Ad copy'],
    size: 'large',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    icon: 'Workflow',
    title: 'Automations (Workflows)',
    description: 'Build powerful workflows that run on autopilot. Connect apps, set triggers, and automate repetitive tasks without writing a single line of code.',
    highlights: ['Visual builder', '1000+ integrations', 'Custom triggers', 'Real-time execution'],
    size: 'large',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    icon: 'Users',
    title: 'CRM Lite',
    description: 'Manage contacts, deals, and relationships in one simple dashboard. Track interactions, manage pipelines, and close deals faster.',
    highlights: ['Contact management', 'Deal pipeline', 'Activity tracking', 'Custom fields'],
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    icon: 'FileText',
    title: 'Invoice Builder',
    description: 'Create professional invoices and get paid faster. Customize templates, track payments, and send automated reminders.',
    highlights: ['Custom templates', 'Payment tracking', 'Auto reminders', 'Multi-currency'],
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    icon: 'Calendar',
    title: 'Social Scheduler',
    description: 'Schedule and publish content across all your social channels. Plan your content calendar and maintain consistent presence.',
    highlights: ['Multi-platform', 'Content calendar', 'Best time to post', 'Analytics'],
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    icon: 'BarChart3',
    title: 'Analytics Dashboard',
    description: 'Track performance with real-time insights and beautiful reports. Make data-driven decisions with comprehensive analytics.',
    highlights: ['Real-time data', 'Custom reports', 'Export options', 'Visual charts'],
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
];

export const pricingData = [
  {
    id: 1,
    name: 'Starter',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Perfect for testing and small projects',
    features: [
      'Up to 10 workflows',
      '1,000 executions/month',
      'Basic integrations',
      'Community support',
      '7-day data retention',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    priceMonthly: 49,
    priceYearly: 470,
    description: 'For professionals and growing teams',
    features: [
      'Unlimited workflows',
      '100,000 executions/month',
      '1000+ integrations',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      '90-day data retention',
      'Team collaboration',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    content: 'OpsForge has transformed how we manage our operations. We saved 40 hours per week.',
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Operations Manager',
    content: 'The no-code interface is intuitive and powerful. Highly recommended!',
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Founder at StartupXYZ',
    content: 'Best investment for our team. ROI was immediate.',
    avatar: 'ED',
  },
  {
    id: 4,
    name: 'Alex Rivera',
    role: 'Product Lead at InnovateCo',
    content: 'Game changer for our workflow automation. The AI features are incredibly smart.',
    avatar: 'AR',
  },
  {
    id: 5,
    name: 'Jessica Park',
    role: 'Marketing Director',
    content: 'Incredible time saver. Our team productivity increased by 300%.',
    avatar: 'JP',
  },
  {
    id: 6,
    name: 'David Kumar',
    role: 'CTO at DataFlow',
    content: 'The best automation platform we have used. Clean, fast, and reliable.',
    avatar: 'DK',
  },
];

export const statsData = [
  {
    label: 'Active Users',
    value: '50K+',
  },
  {
    label: 'Workflows Created',
    value: '500K+',
  },
  {
    label: 'Executions/Month',
    value: '100M+',
  },
  {
    label: 'Uptime',
    value: '99.99%',
  },
];

export const faqData = [
  {
    id: 1,
    question: 'Do I need technical skills?',
    answer: 'No! OpsForge is designed for non-technical users. Our visual workflow builder makes it easy for anyone to create automations without writing code.',
  },
  {
    id: 2,
    question: 'Will OpsForge stay free?',
    answer: 'Yes! Our Starter plan will always be free. You can upgrade to Pro anytime for advanced features and higher limits.',
  },
  {
    id: 3,
    question: 'Do you support team collaboration?',
    answer: 'Absolutely! Pro plan includes team collaboration features, shared workspaces, and role-based permissions.',
  },
  {
    id: 4,
    question: 'Is my data secure?',
    answer: 'Yes. We use bank-level encryption, comply with GDPR and SOC 2, and maintain 99.99% uptime with regular security audits.',
  },
  {
    id: 5,
    question: 'What integrations are supported?',
    answer: 'We support 1000+ integrations including Slack, Salesforce, HubSpot, Google Workspace, Microsoft 365, and many more.',
  },
  {
    id: 6,
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. No questions asked, and you\'ll retain access until the end of your billing period.',
  },
];

export default {
  heroData,
  featuresData,
  pricingData,
  testimonialsData,
  statsData,
  faqData,
};
