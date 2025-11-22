// useWorkspace hook
import { useState, useCallback } from 'react';

export const useWorkspace = () => {
  const [workspace, setWorkspace] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWorkspaces = useCallback(async () => {
    setLoading(true);
    try {
      // API call here
      setWorkspaces([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const selectWorkspace = useCallback((id) => {
    // Set selected workspace
  }, []);

  return { workspace, workspaces, loading, fetchWorkspaces, selectWorkspace };
};

export default useWorkspace;
