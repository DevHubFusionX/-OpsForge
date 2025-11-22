import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Workflow, Users, BarChart3, CreditCard, Image, Sparkles, Settings, ChevronLeft, ChevronRight, Menu, FileText, Mail, Calendar, Plug, CheckSquare, Layout, Bell } from 'lucide-react';
import { theme } from '../../config/theme';

export const Sidebar = ({ isOpen, onToggle }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/dashboard', badge: null },
    { icon: Workflow, label: 'Automations', path: '/automations', badge: 3 },
    { icon: Users, label: 'CRM', path: '/crm', badge: 5 },
    { icon: BarChart3, label: 'Analytics', path: '/analytics', badge: null },
    { icon: CreditCard, label: 'Billing', path: '/billing', badge: null },
    { icon: Image, label: 'Media Library', path: '/media', badge: null },
  ];

  const aiTools = [
    { icon: Sparkles, label: 'AI Tools', path: '/ai-tools', badge: 2 },
  ];

  const moreTools = [
    { icon: FileText, label: 'Invoices', path: '/invoices', badge: null },
    { icon: Mail, label: 'Email Campaigns', path: '/email-campaigns', badge: null },
    { icon: Calendar, label: 'Social Scheduler', path: '/social-scheduler', badge: null },
    { icon: CheckSquare, label: 'Tasks', path: '/tasks', badge: 4 },
    { icon: Layout, label: 'Templates', path: '/templates', badge: null },
    { icon: Plug, label: 'Integrations', path: '/integrations', badge: null },
    { icon: Bell, label: 'Notifications', path: '/notifications', badge: 5 },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', path: '/settings', badge: null, highlight: true },
  ];

  const currentPath = window.location.pathname;

  const NavLink = ({ item, isAI = false }) => {
    const Icon = item.icon;
    const isActive = currentPath === item.path;
    
    return (
      <a
        href={item.path}
        className="group relative flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200"
        style={{
          backgroundColor: isActive ? theme.colors.sidebar.active : 'transparent',
          color: isActive ? theme.colors.accent : theme.colors.text.muted,
          border: item.highlight && isActive ? `1px solid ${theme.colors.primary}40` : 'none',
        }}
        onMouseEnter={(e) => !isActive && (e.currentTarget.style.backgroundColor = theme.colors.sidebar.hover)}
        onMouseLeave={(e) => !isActive && (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        {isActive && (
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r" style={{ backgroundColor: theme.colors.primary }} />
        )}
        
        <div className="relative transition-transform group-hover:scale-110 duration-200" style={{ color: isActive ? theme.colors.accent : 'inherit' }}>
          <Icon className="w-5 h-5 flex-shrink-0" />
          {item.badge && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: isAI ? theme.colors.status.success : theme.colors.status.danger, color: theme.colors.text.inverse }}>
              {item.badge}
            </span>
          )}
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-between flex-1 min-w-0"
          >
            <span className="font-semibold text-sm truncate">
              {item.label}
            </span>
            {item.badge && (
              <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: isAI ? `${theme.colors.status.success}20` : `${theme.colors.status.danger}20`, color: isAI ? theme.colors.status.success : theme.colors.status.danger }}>
                {item.badge}
              </span>
            )}
          </motion.div>
        )}

        {!isOpen && (
          <div className="absolute left-full ml-2 px-3 py-2 text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50" style={{ backgroundColor: theme.colors.sidebar.bg, color: theme.colors.text.inverse, boxShadow: theme.shadows.lg }}>
            {item.label}
          </div>
        )}
      </a>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside 
        className={`${isOpen ? 'w-64' : 'w-[70px]'} h-screen flex flex-col transition-all duration-300 fixed left-0 top-0 z-50 ${isOpen ? '' : '-translate-x-full lg:translate-x-0'}`}
        style={{ backgroundColor: theme.colors.sidebar.bg }}
      >
      {/* Menu Toggle Area */}
      <div className="h-[70px] flex items-center justify-center px-4 relative" style={{ borderBottom: `1px solid ${theme.colors.sidebar.border}` }}>
        <button
          onClick={onToggle}
          className="p-2 rounded-lg transition-all hover:scale-110"
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.sidebar.hover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5" style={{ color: theme.colors.text.muted }} />
          ) : (
            <Menu className="w-5 h-5" style={{ color: theme.colors.text.muted }} />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Main Menu */}
        <div className="px-3 space-y-0.5">
          {isOpen && <p className="text-xs font-semibold uppercase tracking-wider px-3 py-2" style={{ color: theme.colors.text.muted }}>Main</p>}
          {menuItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 mx-3" style={{ borderTop: `1px solid ${theme.colors.sidebar.border}` }} />

        {/* AI Tools Section */}
        <div className="px-3 space-y-0.5">
          {isOpen && <p className="text-xs font-semibold uppercase tracking-wider px-3 py-2" style={{ color: theme.colors.text.muted }}>AI Powered</p>}
          {aiTools.map((item) => (
            <NavLink key={item.path} item={item} isAI />
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 mx-3" style={{ borderTop: `1px solid ${theme.colors.sidebar.border}` }} />

        {/* More Tools Section */}
        <div className="px-3 space-y-0.5">
          {isOpen && <p className="text-xs font-semibold uppercase tracking-wider px-3 py-2" style={{ color: theme.colors.text.muted }}>Tools</p>}
          {moreTools.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>
      </nav>

      {/* Bottom Section - Settings & User */}
      <div style={{ borderTop: `1px solid ${theme.colors.sidebar.border}` }}>
        <div className="px-3 py-4 space-y-1">
          {bottomItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>

        {/* User Profile */}
        <div className="px-3 pb-4">
          <div 
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all cursor-pointer group ${!isOpen && 'justify-center'}`}
            style={{ backgroundColor: `${theme.colors.primary}08` }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${theme.colors.primary}15`}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${theme.colors.primary}08`}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold flex-shrink-0 shadow-md ring-2 ring-offset-2 transition-all group-hover:ring-4" style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`, color: theme.colors.text.inverse, ringColor: `${theme.colors.primary}30`, ringOffsetColor: theme.colors.sidebar.bg }}>
              JD
            </div>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 min-w-0"
              >
                <p className="text-sm font-semibold truncate" style={{ color: theme.colors.text.inverse }}>John Doe</p>
                <p className="text-xs truncate" style={{ color: theme.colors.text.muted }}>john@example.com</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
