/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * operations-dashboard shell
 * @copyright Biruk-ak
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { LiveNetworkPage } from './pages/LiveNetwork/LiveNetworkPage';
import { LeakBoardPage } from './pages/LeakBoard/LeakBoardPage';
import { WorkOrdersPage } from './pages/WorkOrders/WorkOrdersPage';
import { MeterOpsPage } from './pages/MeterOps/MeterOpsPage';
import { FieldMapPage } from './pages/FieldMap/FieldMapPage';
import { OpsAnalyticsPage } from './pages/OpsAnalytics/OpsAnalyticsPage';

export const App: React.FC = () => (
  <AppLayout appName="operations-dashboard">
    <Routes>
      <Route path="/" element={<Navigate to="/live-network" replace />} />
      <Route path="/live-network" element={<LiveNetworkPage />} />
      <Route path="/leak-board" element={<LeakBoardPage />} />
      <Route path="/work-orders" element={<WorkOrdersPage />} />
      <Route path="/meter-ops" element={<MeterOpsPage />} />
      <Route path="/field-map" element={<FieldMapPage />} />
      <Route path="/ops-analytics" element={<OpsAnalyticsPage />} />
    </Routes>
  </AppLayout>
);
