// API utility functions
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};

export const get = (endpoint) => apiCall(endpoint, { method: 'GET' });
export const post = (endpoint, data) => apiCall(endpoint, { method: 'POST', body: JSON.stringify(data) });
export const put = (endpoint, data) => apiCall(endpoint, { method: 'PUT', body: JSON.stringify(data) });
export const del = (endpoint) => apiCall(endpoint, { method: 'DELETE' });

export default { apiCall, get, post, put, del };
