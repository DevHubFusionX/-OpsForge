// Route configuration for OpsForge
export const routes = {
  // Landing
  landing: {
    home: '/',
    pricing: '/pricing',
    features: '/features',
    demo: '/demo',
  },
  
  // Auth
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
  },
  
  // Workspace
  workspace: {
    list: '/workspace',
    detail: (id) => `/workspace/${id}`,
  },
  
  // Dashboard
  dashboard: {
    home: '/dashboard',
    automations: '/automations',
    crm: '/crm',
    analytics: '/analytics',
    media: '/media',
    billing: '/billing',
    aiTools: '/ai-tools',
    invoices: '/invoices',
    emailCampaigns: '/email-campaigns',
    socialScheduler: '/social-scheduler',
    tasks: '/tasks',
    templates: '/templates',
    integrations: '/integrations',
    notifications: '/notifications',
    settings: '/settings',
  },
};

export const navigationItems = [
  {
    label: 'Dashboard',
    href: routes.dashboard.home,
    icon: 'dashboard',
    section: 'main',
  },
  {
    label: 'Automations',
    href: routes.dashboard.automations,
    icon: 'automations',
    section: 'main',
  },
  {
    label: 'CRM',
    href: routes.dashboard.crm,
    icon: 'crm',
    section: 'main',
  },
  {
    label: 'Analytics',
    href: routes.dashboard.analytics,
    icon: 'analytics',
    section: 'main',
  },
  {
    label: 'Billing',
    href: routes.dashboard.billing,
    icon: 'billing',
    section: 'main',
  },
  {
    label: 'Media',
    href: routes.dashboard.media,
    icon: 'media',
    section: 'main',
  },
  {
    label: 'AI Tools',
    href: routes.dashboard.aiTools,
    icon: 'ai',
    section: 'ai',
  },
  {
    label: 'Invoices',
    href: routes.dashboard.invoices,
    icon: 'invoices',
    section: 'tools',
  },
  {
    label: 'Email Campaigns',
    href: routes.dashboard.emailCampaigns,
    icon: 'email',
    section: 'tools',
  },
  {
    label: 'Social Scheduler',
    href: routes.dashboard.socialScheduler,
    icon: 'social',
    section: 'tools',
  },
  {
    label: 'Tasks',
    href: routes.dashboard.tasks,
    icon: 'tasks',
    section: 'tools',
  },
  {
    label: 'Templates',
    href: routes.dashboard.templates,
    icon: 'templates',
    section: 'tools',
  },
  {
    label: 'Integrations',
    href: routes.dashboard.integrations,
    icon: 'integrations',
    section: 'tools',
  },
  {
    label: 'Notifications',
    href: routes.dashboard.notifications,
    icon: 'notifications',
    section: 'tools',
  },
  {
    label: 'Settings',
    href: routes.dashboard.settings,
    icon: 'settings',
    section: 'secondary',
  },
];

export default routes;
