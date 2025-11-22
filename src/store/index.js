// Store configuration (for state management)
// This is a placeholder for Redux, Zustand, or similar state management

export const initialState = {
  auth: {
    user: null,
    loading: false,
    error: null,
  },
  workspace: {
    current: null,
    list: [],
    loading: false,
  },
  ui: {
    sidebarOpen: true,
    theme: 'dark',
  },
};

export const actions = {
  // Auth actions
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
  SET_AUTH_LOADING: 'SET_AUTH_LOADING',
  SET_AUTH_ERROR: 'SET_AUTH_ERROR',

  // Workspace actions
  SET_WORKSPACE: 'SET_WORKSPACE',
  SET_WORKSPACES: 'SET_WORKSPACES',
  SET_WORKSPACE_LOADING: 'SET_WORKSPACE_LOADING',

  // UI actions
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  SET_THEME: 'SET_THEME',
};

export default { initialState, actions };
