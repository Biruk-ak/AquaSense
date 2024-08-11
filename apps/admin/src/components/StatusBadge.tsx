/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Status badge
 * @copyright Biruk-ak
 */

import React from 'react';

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
  <span style={{
    display: 'inline-block',
    padding: '0.15rem 0.55rem',
    borderRadius: 4,
    background: '#0e7490',
    color: '#fff',
    fontSize: '0.78rem',
    textTransform: 'uppercase',
  }}>{status}</span>
);
