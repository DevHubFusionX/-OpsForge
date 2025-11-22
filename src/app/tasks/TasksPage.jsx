import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, CheckCircle, Circle, Clock, Flag, User } from 'lucide-react';
import { theme } from '../../config/theme';

export const TasksPage = () => {
  const stats = [
    { label: 'Total Tasks', value: '48', icon: Circle, color: theme.colors.primary },
    { label: 'Completed', value: '32', icon: CheckCircle, color: theme.colors.status.success },
    { label: 'In Progress', value: '12', icon: Clock, color: theme.colors.status.warning },
    { label: 'Overdue', value: '4', icon: Flag, color: theme.colors.status.danger },
  ];

  const tasks = [
    { id: 1, title: 'Update website homepage', priority: 'high', status: 'in-progress', assignee: 'John Doe', dueDate: '2024-02-01' },
    { id: 2, title: 'Review customer feedback', priority: 'medium', status: 'todo', assignee: 'Jane Smith', dueDate: '2024-02-03' },
    { id: 3, title: 'Prepare monthly report', priority: 'high', status: 'in-progress', assignee: 'Mike Johnson', dueDate: '2024-02-02' },
    { id: 4, title: 'Fix login bug', priority: 'urgent', status: 'todo', assignee: 'Sarah Wilson', dueDate: '2024-01-31' },
    { id: 5, title: 'Design new feature mockup', priority: 'low', status: 'completed', assignee: 'Tom Brown', dueDate: '2024-01-28' },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return theme.colors.status.danger;
      case 'high': return theme.colors.status.warning;
      case 'medium': return theme.colors.primary;
      case 'low': return theme.colors.text.muted;
      default: return theme.colors.text.muted;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return theme.colors.status.success;
      case 'in-progress': return theme.colors.status.info;
      case 'todo': return theme.colors.text.muted;
      default: return theme.colors.text.muted;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8" style={{ backgroundColor: theme.colors.surface.card, minHeight: '100vh' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Tasks</h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: theme.colors.text.secondary }}>Manage your tasks and projects</p>
        </div>
        <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base" style={{ backgroundColor: theme.colors.primary, color: theme.colors.text.inverse }}>
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">New Task</span>
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} className="rounded-xl p-4 md:p-5" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mb-2 md:mb-3" style={{ backgroundColor: `${stat.color}15` }}>
                <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: stat.color }} />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>{stat.value}</h3>
              <p className="text-xs" style={{ color: theme.colors.text.secondary }}>{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-xl p-3 md:p-4 mb-4 md:mb-6" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: theme.colors.text.muted }} />
            <input type="text" placeholder="Search tasks..." className="w-full pl-9 md:pl-10 pr-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }} />
          </div>
          <select className="px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Status</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select className="px-3 md:px-4 py-2 rounded-lg outline-none text-sm md:text-base" style={{ backgroundColor: theme.colors.surface.card, border: `1px solid ${theme.colors.border.default}`, color: theme.colors.text.primary }}>
            <option>All Priority</option>
            <option>Urgent</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        {tasks.map((task, index) => (
          <motion.div key={task.id} className="rounded-xl p-4 md:p-6 group cursor-pointer" style={{ backgroundColor: theme.colors.surface.base, border: `1px solid ${theme.colors.border.light}` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <div className="flex items-start gap-3 md:gap-4">
              <button className="mt-1 flex-shrink-0">
                {task.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.colors.status.success }} />
                ) : (
                  <Circle className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.colors.text.muted }} />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: theme.colors.text.primary, textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>{task.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                  <span className="flex items-center gap-1" style={{ color: theme.colors.text.muted }}>
                    <User className="w-3 h-3 md:w-4 md:h-4" />
                    {task.assignee}
                  </span>
                  <span className="flex items-center gap-1" style={{ color: theme.colors.text.muted }}>
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    {task.dueDate}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${getPriorityColor(task.priority)}20`, color: getPriorityColor(task.priority) }}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${getStatusColor(task.status)}20`, color: getStatusColor(task.status) }}>
                    {task.status === 'in-progress' ? 'In Progress' : task.status === 'todo' ? 'To Do' : 'Completed'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
