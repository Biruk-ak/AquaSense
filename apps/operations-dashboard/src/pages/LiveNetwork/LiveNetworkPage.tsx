/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * operations-dashboard page: LiveNetwork
 * @copyright Biruk-ak
 */

import React, { useEffect, useState, useCallback } from 'react';
import { apiClient } from '../../lib/api-client';
import { PageHeader } from '../../components/PageHeader';
import { DataTable } from '../../components/DataTable';
import { StatusBadge } from '../../components/StatusBadge';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import styles from './LiveNetwork.module.css';

export interface LiveNetworkRow {
  id: string;
  label: string;
  status: string;
  updatedAt: string;
}

export const LiveNetworkPage: React.FC = () => {
  const { user, token } = useAuth();
  const { showToast } = useToast();
  const [rows, setRows] = useState<LiveNetworkRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.get<{ items: LiveNetworkRow[]; total: number }>(
        '/live-network',
        { page, limit: 25, search: filter },
        token,
      );
      setRows(data.items);
      setTotal(data.total);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load Live Network';
      setError(message);
      showToast(message, 'error');
    } finally {
      setLoading(false);
    }
  }, [page, filter, token, showToast]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className={styles.page}>
      <PageHeader
        title="Live Network"
        subtitle={`AquaSense operations-dashboard — signed in as ${user?.email ?? 'guest'}`}
        actions={[
          { label: 'Refresh', onClick: () => void load() },
          { label: 'Export', onClick: () => void apiClient.download('/live-network/export/csv', token) },
        ]}
      />
      <section className={styles.section} aria-label="Pressure map">
        <h2>Pressure map</h2>
        <p className={styles.hint}>Operational view for pressure map within the AquaSense network.</p>
      </section>
      <section className={styles.section} aria-label="Flow anomalies">
        <h2>Flow anomalies</h2>
        <p className={styles.hint}>Operational view for flow anomalies within the AquaSense network.</p>
      </section>
      <div className={styles.toolbar}>
        <input
          className={styles.search}
          placeholder="Search live network..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {loading && <div className={styles.loading}>Loading...</div>}
      {error && <div className={styles.error} role="alert">{error}</div>}
      {!loading && !error && (
        <DataTable
          columns={[
            { key: 'label', header: 'Name' },
            { key: 'status', header: 'Status', render: (r) => <StatusBadge status={r.status} /> },
            { key: 'updatedAt', header: 'Updated' },
          ]}
          rows={rows}
          page={page}
          total={total}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default LiveNetworkPage;
