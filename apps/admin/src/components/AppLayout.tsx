/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Layout
 * @copyright Biruk-ak
 */

import React from 'react';
import { Link } from 'react-router-dom';

export const AppLayout: React.FC<{ appName: string; children: React.ReactNode }> = ({ appName, children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
    <aside style={{ background: '#0c2d3a', color: '#e8f1f4', padding: '1.25rem' }}>
      <div style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>AquaSense</div>
      <div style={{ opacity: 0.75, marginBottom: '1.5rem', textTransform: 'capitalize' }}>{appName.replace('-', ' ')}</div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Link to="/users-admin" style={{ color: 'inherit', textDecoration: 'none' }}>Users</Link>
        <Link to="/tariffs-admin" style={{ color: 'inherit', textDecoration: 'none' }}>Tariffs</Link>
        <Link to="/districts-admin" style={{ color: 'inherit', textDecoration: 'none' }}>Districts</Link>
        <Link to="/system-config" style={{ color: 'inherit', textDecoration: 'none' }}>System</Link>
        <Link to="/audit-log" style={{ color: 'inherit', textDecoration: 'none' }}>Audit Log</Link>
        <Link to="/reports-admin" style={{ color: 'inherit', textDecoration: 'none' }}>Reports</Link>
      </nav>
    </aside>
    <main>{children}</main>
  </div>
);
