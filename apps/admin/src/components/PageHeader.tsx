/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Page header
 * @copyright Biruk-ak
 */

import React from 'react';

export const PageHeader: React.FC<{
  title: string;
  subtitle?: string;
  actions?: Array<{ label: string; onClick: () => void }>;
}> = ({ title, subtitle, actions }) => (
  <header style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
    <div>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {subtitle && <p style={{ margin: '0.35rem 0 0', color: '#3d5c6a' }}>{subtitle}</p>}
    </div>
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {actions?.map((a) => (
        <button key={a.label} type="button" onClick={a.onClick}>{a.label}</button>
      ))}
    </div>
  </header>
);
