import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'okj2xcm8',
  dataset: 'production',
  apiVersion: '2024-07-12',
  useCdn: true,
});
