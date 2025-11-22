// WorkspaceLayout component
import React from 'react';


export const WorkspaceLayout = ({ children }) => {
  return (
    <div className="workspace-layout">
      <div className="workspace-container">
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
