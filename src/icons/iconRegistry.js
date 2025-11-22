// Icon Registry - Maps icon names to SVG components
// All icons use 2px stroke, outline style, slightly rounded ends

export const iconRegistry = {
  // Navigation
  dashboard: 'dashboard',
  automations: 'automations',
  crm: 'crm',
  media: 'media',
  analytics: 'analytics',
  billing: 'billing',
  settings: 'settings',
  workspace: 'workspace',
  logout: 'logout',
  
  // UI
  notifications: 'notifications',
  search: 'search',
  user: 'user',
  menu: 'menu',
  close: 'close',
  chevronDown: 'chevronDown',
  chevronUp: 'chevronUp',
  chevronLeft: 'chevronLeft',
  chevronRight: 'chevronRight',
  
  // Actions
  add: 'add',
  edit: 'edit',
  delete: 'delete',
  copy: 'copy',
  download: 'download',
  upload: 'upload',
  share: 'share',
  
  // Status
  check: 'check',
  checkCircle: 'checkCircle',
  alert: 'alert',
  alertCircle: 'alertCircle',
  info: 'info',
  
  // Automation
  workflow: 'workflow',
  trigger: 'trigger',
  action: 'action',
  condition: 'condition',
  
  // Media
  image: 'image',
  video: 'video',
  file: 'file',
  folder: 'folder',
  
  // CRM
  contact: 'contact',
  tag: 'tag',
  phone: 'phone',
  email: 'email',
};

// Icon component factory
export const Icon = ({ name, size = 24, stroke = 2, className = '' }) => {
  const iconPath = getIconPath(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {iconPath}
    </svg>
  );
};

const getIconPath = (name) => {
  const paths = {
    dashboard: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    automations: <path d="M12 2v20M2 12h20" />,
    crm: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
    media: <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />,
    analytics: <path d="M3 3v18h18" />,
    billing: <path d="M12 1v22M4.5 4.5h15v14h-15z" />,
    settings: <circle cx="12" cy="12" r="3" />,
    workspace: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    logout: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l4-4m0 0l-4-4m4 4H9" />,
    notifications: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />,
    search: <circle cx="11" cy="11" r="8" />,
    user: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
    menu: <path d="M3 12h18M3 6h18M3 18h18" />,
    close: <path d="M18 6L6 18M6 6l12 12" />,
    chevronDown: <path d="M6 9l6 6 6-6" />,
    chevronUp: <path d="M18 15l-6-6-6 6" />,
    chevronLeft: <path d="M15 18l-6-6 6-6" />,
    chevronRight: <path d="M9 18l6-6-6-6" />,
    add: <path d="M12 5v14M5 12h14" />,
    edit: <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />,
    delete: <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h16z" />,
    copy: <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" />,
    download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
    upload: <path d="M3 9v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9M12 3v12M5 10l7-7 7 7" />,
    share: <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v10" />,
    check: <path d="M20 6L9 17l-5-5" />,
    checkCircle: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4l-7.07 7.07-3.07-3.07" />,
    alert: <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />,
    alertCircle: <circle cx="12" cy="12" r="10" />,
    info: <circle cx="12" cy="12" r="10" />,
    workflow: <path d="M3 12h6M15 12h6M9 9v6M15 9v6" />,
    trigger: <path d="M12 2v20M2 12h20" />,
    action: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    condition: <path d="M3 12h18M12 3v18" />,
    image: <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />,
    video: <path d="M23 7l-7 5 7 5V7z" />,
    file: <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />,
    folder: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />,
    contact: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
    tag: <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
    email: <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
  };
  
  return paths[name] || null;
};

export default iconRegistry;
