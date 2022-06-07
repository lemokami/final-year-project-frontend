import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css';
import { WalletContext } from '../components/WalletContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContext>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </WalletContext>
  );
}

export default MyApp;
