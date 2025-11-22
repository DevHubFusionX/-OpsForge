// Theme configuration for OpsForge
export const theme = {
  colors: {
    primary: '#4F46E5',
    secondary: '#6366F1',
    accent: '#818CF8',
    dark: '#0F172A',
    light: '#FFFFFF',
    text: {
      primary: '#0F172A',
      secondary: '#475569',
      muted: '#94A3B8',
      inverse: '#FFFFFF',
    },
    surface: {
      base: '#FFFFFF',
      card: '#F8FAFC',
      panel: '#F1F5F9',
      hover: '#E2E8F0',
    },
    sidebar: {
      bg: '#0F172A',
      hover: '#1E293B',
      active: '#334155',
      border: '#1E293B',
    },
    border: {
      light: '#E2E8F0',
      default: '#CBD5E1',
      dark: '#475569',
    },
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
      info: '#4F46E5',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  typography: {
    headings: {
      family: 'Sora, Space Grotesk, sans-serif',
      weights: {
        bold: 700,
        semibold: 600,
      },
    },
    body: {
      family: 'Inter, Plus Jakarta Sans, sans-serif',
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  components: {
    button: {
      primary: {
        bg: '#4F46E5',
        hover: '#4338CA',
        text: '#FFFFFF',
      },
      secondary: {
        bg: '#0F172A',
        hover: '#1E293B',
        text: '#FFFFFF',
      },
      ghost: {
        bg: 'transparent',
        hover: '#F1F5F9',
        text: '#0F172A',
      },
      padding: '0.625rem 1.5rem',
      borderRadius: '0.75rem',
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    input: {
      padding: '0.625rem 1rem',
      borderRadius: '0.75rem',
      fontSize: '0.875rem',
      border: '1px solid #CBD5E1',
      bg: '#FFFFFF',
      focus: '#4F46E5',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '1rem',
      background: '#FFFFFF',
      border: '1px solid #E2E8F0',
      shadow: '0 1px 3px 0 rgba(15, 23, 42, 0.08)',
    },
    badge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: 600,
    },
    navbar: {
      bg: '#FFFFFF',
      border: '#E2E8F0',
      height: '4rem',
      linkHover: '#4F46E5',
    },
  },
};

export default theme;

// CSS Variables for global use
export const cssVariables = `
  :root {
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-accent: ${theme.colors.accent};
    --color-dark: ${theme.colors.dark};
    --color-light: ${theme.colors.light};
    --color-text-primary: ${theme.colors.text.primary};
    --color-text-secondary: ${theme.colors.text.secondary};
    --color-text-muted: ${theme.colors.text.muted};
    --color-surface-base: ${theme.colors.surface.base};
    --color-surface-card: ${theme.colors.surface.card};
    --color-sidebar-bg: ${theme.colors.sidebar.bg};
    --color-sidebar-hover: ${theme.colors.sidebar.hover};
    --color-sidebar-active: ${theme.colors.sidebar.active};
  }
`;
