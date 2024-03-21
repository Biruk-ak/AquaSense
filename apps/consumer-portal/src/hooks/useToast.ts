/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Toast hook
 * @copyright Biruk-ak
 */

export function useToast() {
  return {
    showToast: (message: string, _kind: 'info' | 'error' | 'success' = 'info') => {
      if (typeof console !== 'undefined') console.info('[toast]', message);
    },
  };
}
