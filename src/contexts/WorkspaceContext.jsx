// WorkspaceContext
import React, { createContext, useState, useCallback } from 'react';

export const WorkspaceContext = createContext();

export const WorkspaceProvider = ({ children }) => {
  const [workspace, setWorkspace] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);

  const selectWorkspace = useCallback((id) => {
    const selected = workspaces.find((w) => w.id === id);
    setWorkspace(selected);
  }, [workspaces]);

  return (
    <WorkspaceContext.Provider value={{ workspace, workspaces, selectWorkspace }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export default WorkspaceContext;
