/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * admin shell
 * @copyright Biruk-ak
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { UsersAdminPage } from './pages/UsersAdmin/UsersAdminPage';
import { TariffsAdminPage } from './pages/TariffsAdmin/TariffsAdminPage';
import { DistrictsAdminPage } from './pages/DistrictsAdmin/DistrictsAdminPage';
import { SystemConfigPage } from './pages/SystemConfig/SystemConfigPage';
import { AuditLogPage } from './pages/AuditLog/AuditLogPage';
import { ReportsAdminPage } from './pages/ReportsAdmin/ReportsAdminPage';

export const App: React.FC = () => (
  <AppLayout appName="admin">
    <Routes>
      <Route path="/" element={<Navigate to="/users-admin" replace />} />
      <Route path="/users-admin" element={<UsersAdminPage />} />
      <Route path="/tariffs-admin" element={<TariffsAdminPage />} />
      <Route path="/districts-admin" element={<DistrictsAdminPage />} />
      <Route path="/system-config" element={<SystemConfigPage />} />
      <Route path="/audit-log" element={<AuditLogPage />} />
      <Route path="/reports-admin" element={<ReportsAdminPage />} />
    </Routes>
  </AppLayout>
);
