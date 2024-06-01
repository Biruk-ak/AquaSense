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
        <Link to="/live-network" style={{ color: 'inherit', textDecoration: 'none' }}>Live Network</Link>
        <Link to="/leak-board" style={{ color: 'inherit', textDecoration: 'none' }}>Leak Detection</Link>
        <Link to="/work-orders" style={{ color: 'inherit', textDecoration: 'none' }}>Maintenance</Link>
        <Link to="/meter-ops" style={{ color: 'inherit', textDecoration: 'none' }}>Smart Meters</Link>
        <Link to="/field-map" style={{ color: 'inherit', textDecoration: 'none' }}>Infrastructure Map</Link>
        <Link to="/ops-analytics" style={{ color: 'inherit', textDecoration: 'none' }}>Ops Analytics</Link>
      </nav>
    </aside>
    <main>{children}</main>
  </div>
);
