// Contact service
import { get, post, put, del } from '../utils/api';

export const contactService = {
  getContacts: async (workspaceId) => {
    return get(`/workspaces/${workspaceId}/contacts`);
  },

  getContact: async (workspaceId, contactId) => {
    return get(`/workspaces/${workspaceId}/contacts/${contactId}`);
  },

  createContact: async (workspaceId, data) => {
    return post(`/workspaces/${workspaceId}/contacts`, data);
  },

  updateContact: async (workspaceId, contactId, data) => {
    return put(`/workspaces/${workspaceId}/contacts/${contactId}`, data);
  },

  deleteContact: async (workspaceId, contactId) => {
    return del(`/workspaces/${workspaceId}/contacts/${contactId}`);
  },

  searchContacts: async (workspaceId, query) => {
    return get(`/workspaces/${workspaceId}/contacts?search=${query}`);
  },
};

export default contactService;
