import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

import { GlobalStyles, GymlightProvider } from 'gymlight-design-system';

import { queryClient } from '@/hooks';
import { AppRouter } from '@/routers';

const enableMocking = async () => {
  if (process.env.REACT_APP_USE_MOCKS !== 'true') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
};

const main = async () => {
  await enableMocking();

  const root = createRoot(document.querySelector('#root') as Element);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GymlightProvider>
            <GlobalStyles />
            <AppRouter />
          </GymlightProvider>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  );
};

main();
