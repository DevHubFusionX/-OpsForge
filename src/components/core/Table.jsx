// Table component
import React from 'react';

export const Table = ({ children, className = '' }) => (
  <div className={`table-wrapper ${className}`}>
    <table className="table">{children}</table>
  </div>
);

export const TableHead = ({ children }) => <thead className="table-head">{children}</thead>;

export const TableBody = ({ children }) => <tbody className="table-body">{children}</tbody>;

export const TableRow = ({ children, className = '' }) => (
  <tr className={`table-row ${className}`}>{children}</tr>
);

export const TableHeader = ({ children, className = '' }) => (
  <th className={`table-header ${className}`}>{children}</th>
);

export const TableCell = ({ children, className = '' }) => (
  <td className={`table-cell ${className}`}>{children}</td>
);

export default Table;
