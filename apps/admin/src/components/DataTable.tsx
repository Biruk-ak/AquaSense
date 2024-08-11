/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Data table
 * @copyright Biruk-ak
 */

import React from 'react';

export function DataTable<T extends { id: string }>(props: {
  columns: Array<{ key: string; header: string; render?: (row: T) => React.ReactNode }>;
  rows: T[];
  page: number;
  total: number;
  onPageChange: (p: number) => void;
}) {
  const { columns, rows, page, total, onPageChange } = props;
  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '1px solid #d5e3e9' }}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((c) => (
                <td key={c.key} style={{ padding: '0.75rem', borderBottom: '1px solid #eef3f6' }}>
                  {c.render ? c.render(row) : String((row as any)[c.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
        <button type="button" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Prev</button>
        <span>Page {page} · {total} total</span>
        <button type="button" disabled={page * 25 >= total} onClick={() => onPageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
}
