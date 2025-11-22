// WorkflowCard component
import React from 'react';
import Card from '../core/Card';
import Badge from '../core/Badge';

export const WorkflowCard = ({ name, status, triggers, actions }) => {
  return (
    <Card className="workflow-card">
      <div className="workflow-header">
        <h4>{name}</h4>
        <Badge variant={status === 'active' ? 'success' : 'default'}>
          {status}
        </Badge>
      </div>
      <div className="workflow-meta">
        <span>{triggers} triggers</span>
        <span>•</span>
        <span>{actions} actions</span>
      </div>
    </Card>
  );
};

export default WorkflowCard;
