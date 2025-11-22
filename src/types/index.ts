// TypeScript type definitions

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Workspace {
  id: string;
  name: string;
  description?: string;
  owner: User;
  members: User[];
  createdAt: Date;
}

export interface Workflow {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'paused';
  triggers: Trigger[];
  actions: Action[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Trigger {
  id: string;
  type: string;
  config: Record<string, any>;
}

export interface Action {
  id: string;
  type: string;
  config: Record<string, any>;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  tags: string[];
  createdAt: Date;
}

export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
