import { QueryClient } from '@tanstack/react-query';

import { APP } from '@/constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: APP.NETWORK.RETRY_COUNT,
      gcTime: 0,
    },
  },
});
