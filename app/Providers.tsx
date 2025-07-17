'use client';

import { ReactNode } from 'react';
import useAuthStore from './store/ui/store';

export function Providers({ children }: { children: ReactNode }) {
  useAuthStore.getState().validateToken();

  return <>{children}</>;
}
