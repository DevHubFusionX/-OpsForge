// Auth service
import { get, post } from '../utils/api';

export const authService = {
  login: async (email, password) => {
    return post('/auth/login', { email, password });
  },

  register: async (email, password, name) => {
    return post('/auth/register', { email, password, name });
  },

  logout: async () => {
    return post('/auth/logout', {});
  },

  getCurrentUser: async () => {
    return get('/auth/me');
  },

  refreshToken: async () => {
    return post('/auth/refresh', {});
  },

  resetPassword: async (email) => {
    return post('/auth/reset-password', { email });
  },
};

export default authService;
