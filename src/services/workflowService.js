// Workflow service
import { get, post, put, del } from '../utils/api';

export const workflowService = {
  getWorkflows: async (workspaceId) => {
    return get(`/workspaces/${workspaceId}/workflows`);
  },

  getWorkflow: async (workspaceId, workflowId) => {
    return get(`/workspaces/${workspaceId}/workflows/${workflowId}`);
  },

  createWorkflow: async (workspaceId, data) => {
    return post(`/workspaces/${workspaceId}/workflows`, data);
  },

  updateWorkflow: async (workspaceId, workflowId, data) => {
    return put(`/workspaces/${workspaceId}/workflows/${workflowId}`, data);
  },

  deleteWorkflow: async (workspaceId, workflowId) => {
    return del(`/workspaces/${workspaceId}/workflows/${workflowId}`);
  },

  executeWorkflow: async (workspaceId, workflowId) => {
    return post(`/workspaces/${workspaceId}/workflows/${workflowId}/execute`, {});
  },
};

export default workflowService;
