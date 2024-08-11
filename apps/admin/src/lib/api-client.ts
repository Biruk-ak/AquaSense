/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * API client
 * @copyright Biruk-ak
 */

type Query = Record<string, string | number | undefined>;

async function request<T>(method: string, path: string, token?: string | null, body?: unknown, query?: Query): Promise<T> {
  const url = new URL(`/api/v1${path}`, window.location.origin);
  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined && v !== '') url.searchParams.set(k, String(v));
    });
  }
  const res = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}

export const apiClient = {
  get: <T,>(path: string, query?: Query, token?: string | null) => request<T>('GET', path, token, undefined, query),
  post: <T,>(path: string, body: unknown, token?: string | null) => request<T>('POST', path, token, body),
  download: async (path: string, token?: string | null) => {
    const res = await fetch(`/api/v1${path}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
    const blob = await res.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'aquasense-export.csv';
    a.click();
  },
};
