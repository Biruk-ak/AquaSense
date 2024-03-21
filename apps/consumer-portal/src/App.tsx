/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * consumer-portal shell
 * @copyright Biruk-ak
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { UsagePage } from './pages/Usage/UsagePage';
import { BillsPage } from './pages/Bills/BillsPage';
import { ServiceRequestsPage } from './pages/ServiceRequests/ServiceRequestsPage';
import { NotificationsPage } from './pages/Notifications/NotificationsPage';
import { AccountPage } from './pages/Account/AccountPage';

export const App: React.FC = () => (
  <AppLayout appName="consumer-portal">
    <Routes>
      <Route path="/" element={<Navigate to="/usage" replace />} />
      <Route path="/usage" element={<UsagePage />} />
      <Route path="/bills" element={<BillsPage />} />
      <Route path="/service-requests" element={<ServiceRequestsPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  </AppLayout>
);
