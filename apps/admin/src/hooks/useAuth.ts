/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Auth hook
 * @copyright Biruk-ak
 */

import { useMemo } from 'react';

export function useAuth() {
  return useMemo(() => {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('aquasense_token') : null;
    const email = typeof localStorage !== 'undefined' ? localStorage.getItem('aquasense_email') : null;
    return { token, user: email ? { email } : null };
  }, []);
}
