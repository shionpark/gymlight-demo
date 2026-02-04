import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from './styles';

type GymlightProviderPropsType = PropsWithChildren;

const GymlightProvider = ({ children }: GymlightProviderPropsType) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default GymlightProvider;
